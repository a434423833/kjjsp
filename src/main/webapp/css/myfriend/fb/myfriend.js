/**
 * 获取用户信息
 */
function user() {
    $.get("/api/userInfo", function (response) {
        if (response.code === 0) {
            app.user = response.data;
        }
    });
}

/**
 * 创建 Session
 */
function createSession(nickname, username, avatar) {
    return {
        id: app.sessions.length,
        num: 0,
        user: {
            nickname: nickname,
            username: username,
            avatar: avatar
        },
        messages: []
    };
}

// stomp 客户端
var stompClient = null;

/**
 * 建立 WebSocket 连接
 */
function connect() {
    var socket = new SockJS('/any-socket');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        stompClient.subscribe('/topic/notice', function (message) {
            saveMessageToLocal(message, true);
        });
        stompClient.subscribe('/user/topic/chat', function (message) {
            saveMessageToLocal(message, false);
        });
    });
}

/**
 * 将收到的消息存储在本地
 */
function saveMessageToLocal(response, notice) {
    var data = JSON.parse(response.body);
    var message = {
        nickname: data.nickname,
        username: data.username,
        avatar: data.avatar,
        me: false,
        content: data.content,
        time: data.sendTime
    };
    var sessionId = app.sessionMap[message.username];
    message.me = (app.user.username === message.username);
    if (notice) {
        app.sessions[1].messages.push(message);
    } else {
        if (app.sessions[sessionId]) {
            app.sessions[sessionId].messages.push(message);
        } else {
            var session = createSession(message.nickname, message.username, message.avatar);
            session.messages.push(message);
            app.sessions.push(session);
        }
    }
}

/**
 * 获取随机的在线用户
 */
function getOnlineUsers() {
    $.get("/api/common/online", function (response) {
        var list = [];
        if (response.code === 0) {
            var onlineList = response.data;
            for (var i = 0; i < onlineList.length; i++) {
                var exist = false;
                if (onlineList[i].username === app.user.username) {
                    exist = true;
                } else {
                    for (var j = 0; j < app.sessions.length; j++) {
                        if (onlineList[i].username === app.sessions[j].user.username) {
                            exist = true;
                        }
                    }
                }
                if (!exist) {
                    list.push(onlineList[i]);
                }
            }
            app.onlineUsers = list;
        }
    })
}

/**
 * 获取好友列表
 */
function getFriendList() {
    $.get("/api/friend", function (response) {
        if (response.code === 0) {
            var friends = response.data;
            for (var i = 0; i < friends.length; i++) {
                var session = createSession(friends[i].nickname, friends[i].username, friends[i].avatar);
                app.sessions.push(session);
            }
        }
    })
}

/**
 * 添加好友
 */
function addFriend(friend) {
    $.post("/api/friend",
        {
            friendUsername: friend.username
        },
        function (response) {
            if (response.code === 0) {
                var session = createSession(friend.nickname, friend.username, friend.avatar);
                app.sessions.push(session);
            }
        }
    )
}

/**
 * 初始化信息
 */
$(function () {
    user();
    connect();
    getFriendList();

    // 发送消息
    document.onkeydown = function (t) {
        if (t.ctrlKey && 13 === t.keyCode) {
            if (app.messageInput.trim().length > 0) {
                stompClient.send("/app/chat", {}, app.sendMessage);
                var message = {
                    nickname: app.user.nickname,
                    username: app.user.username,
                    avatar: app.user.avatar,
                    me: true,
                    content: app.messageInput,
                    time: getNowDate()
                };
                if (app.currentSessionId !== 1) {
                    app.sessions[app.currentSessionId].messages.push(message);
                }
                app.messageInput = "";
            }
        }
        return true;
    };
});
