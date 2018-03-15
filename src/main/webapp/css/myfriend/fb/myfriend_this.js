function onModalShow() {
    $("#addfriend").css("display", "block");
    addFriendList();
}
function onModalClose() {
    $("#addfriend").css("display", "none");
}
function bodyload() {
    getFriendList();
    getCount();
    tuLingChatJson.push({'index': '0', 'value': 'Hello，我是小沫！你可以随意调侃我哦！ o(&gt;﹏&lt;)o', "time": getNowDate()});
    var obj = sessionStorage.getItem("tuling");
    if (obj != null) {
        tuLingChatJson = JSON.parse(obj);
    }
    tuLingShow();
}
/**
 * 获得好友数量实时刷新
 */
function getCount() {
    $.ajax({
            type: "POST",      //传输方式
            url: "../getAddFriendCount",           //地址
            data: {
                uid: uid
            },
            success: function (obj) {
                if (obj.code == '0') {
                    $("#friendcount").html(obj.data);
                }
            }
        }
    );
}
/**
 * 获得好友申请列表
 */
function addFriendList() {
    $.ajax({
        type: "POST",      //传输方式
        url: "../getAddFriendList",           //地址
        data: {
            uid: uid
        },
        success: function (obj) {
            if (obj.code == '0') {
                applyFriendList = obj.data;
                showAddFrined(applyFriendList, "");
            } else {
            }
        }
    });
}
/**
 * 显示添加弹出框的值
 */
function showAddFrined(applyFriendList, str) {
    if (applyFriendList.length == 0) {
        str += "<li>好友申请通知：<span style='font-size: 12px;color: #75baff' >暂无人添加</span></li>";
    } else {
        str += "<li>好友申请通知：</li>";
        for (var i = 0; i < applyFriendList.length; i++) {
            var data = applyFriendList[i];
            var sex1 = "<div class='ua' style='margin-top: 5px;'><span class='os_8_1' >♂</span></div>";
            if (data.sex == '2') {
                sex1 = "<div class='ua' style='margin-top: 5px;'><span class='ua_chrome'>♀</span></div>";
            }
            str += "<li style='width: 300px;'><a href='zhuye.jsp?fw_id=" + data.uid + "' style='width: 180px'>" +
                "<img src='../imgPathActionDownLoad?url=" + data.file + "'alt='无'/>" +
                "<em>" + data.username + " </em> <strong>" + sex1 + "</strong></a>" +
                "<div id='caozuoquyu" + data.uid + "'><button class='btn btn-info btn-xs' onclick='haoyouxuanze(" + 1 + "," + data.uid + ")'>同意</button>||" +
                "<button class='btn btn-warning btn-xs' onclick='haoyouxuanze(" + 2 + "," + data.uid + ")'>拒绝</button>" +
                "</div></li>";
        }
    }
    $("#addFriendList").html(str);

}
/**
 * 同意或者拒绝好友申请
 * @param index
 * @param fid
 */
function haoyouxuanze(index, fid) {
    $.ajax({
        type: "POST",      //传输方式
        url: "../friendSelect",           //地址
        data: {
            index: index,
            uid: uid,
            fid: fid
        },
        success: function (obj) {
            if (obj.code == '0') {
                if (index == 1) {
                    $("#caozuoquyu" + fid).html("<span style='color: deepskyblue'>聊天去！</span>");
                }
                if (index == 2) {
                    $("#caozuoquyu" + fid).html("<span style='color: red'>已拒绝</span>")
                }
                getCount();
                getFriendList();
            }
        }
    });
}

/**
 * 获得好友列表
 */
function getFriendList() {
    $.ajax({
            type: "POST",      //传输方式
            url: "../getFriendList",           //地址
            data: {
                uid: uid
            },
            success: function (obj) {
                if (obj.code == '0') {
                    var str = "<li  onclick='getUid(0,this)' class='active'> <img class='avatar' width='30' height='30' " +
                        "src='../img/xiaomo.png' alt='无'/>  " +
                        "<p class='name'>小沫 </p></li>" +
                        "<li  onclick='getUid(-1,this)' > <img class='avatar' width='30' height='30' " +
                        "src='../img/quanfudating.png' alt='无'/>  " +
                        "<p class='name'>全服大厅</p></li>";
                    var length = obj.data.length;
                    for (var i = 0; i < length; i++) {
                        var data = obj.data[i];
                        str += " <li onclick='getUid(" + data.uid + ",this)'> <img class='avatar' width='30' height='30' " +
                            "src='../imgPathActionDownLoad?url=" + data.file + "' alt='无'/>  " +
                            "<p class='name'>" + data.username + "</p></li>";
                    }
                    $("#user-list").html(str);
                    friendList = obj.data;
                }
            }
        }
    );
}
/**
 * 改变选中
 * @param fid
 * @param thisobj
 */
function getUid(fid, thisobj) {
    _fid = fid;
    $("li").each(function () {
        $(this).removeClass("active");
    });
    $(thisobj).addClass("active");
    $("#chatRecord").html("");
    if (fid == 0) {
        //停止递归刷新1
        diguiStatu = 1;
        tuLingShow();
    } else {//与好友交流时
        diguiStatu = 0;
        liaotianload();
    }
}

function toAddFriendChat(content) {
    $.ajax({
        type: "POST",      //传输方式
        url: "../setInfor",           //地址
        data: {
            uid: uid,
            fid: _fid,
            infor: content
        },
        success: function (obj) {
            if (obj.code == 0) {

            }
        }
    });
}

var lastname = "";
var lastfriend = -1;
$(document).ready(function () {
        /**
         * 查找好友改变事件
         */
        $('#friendname').bind('input propertychange blur', function () {
            var name = $("#friendname").val();
            console.log(name);
            setTimeout(function () {
                findUserByName(name);//带参数
            }, 200)//0.2S判断一次
        });
        /**
         * 好友选择改变事件
         */
        $('#searchInput').bind('input propertychange blur', function () {
            var name = $("#searchInput").val();
            setTimeout(function () {
                findUserAsFriend(name);//带参数
            }, 200)//0.2S判断一次
        });
        /**
         * ctrl+enter回车输入
         * (e.metaKey || e.ctrlKey) 是CMD命令键和Ctrl键。
         * e.keyCode == 13 – 13 是Enter键的键盘码
         * inputChat textarea 是通过jQuery 选择器选中的文本元素
         * keydown当选中的文本发生键盘弹起时
         */
        $(document).on('keydown', '#inputChat', function (e) {
            if (e.keyCode == 13 && (e.metaKey || e.ctrlKey)) {
                //按了
                var content = $(this).val();
                //和小沫聊天时
                if (_fid == 0 && content != "" && content.length > 0) {
                    toAddTuLingChat(content);
                } else {
                    toAddFriendChat(content);
                }
                $(this).val("");
                gundongdiv();
            }
        })
        ;
    }
)


/**
 * 滚动条滚动
 */
function gundongdiv(size) {
    var $dom = $("#chatDiv");
    $dom.scrollTop(size);
}

/**
 * 聊天刷新
 * @param fid
 */
function liaotianload() {
    setTimeout(function () {
        digui();//带参数
    }, 100)
}
function digui() {
    var fid = _fid;
    console.log("刷新中- -");
    if (diguiStatu == 1) {
        console.log("停止刷新--");
        return;
    }
    $.ajax({
        type: "POST",      //传输方式
        url: "../getInfor",           //地址
        data: {
            uid: uid,
            fid: fid
        },
        success: function (obj) {
            var friend = "<li><p class='time'><span class='messageTime'>{{time}}</span></p>" +
                " <div class='messageContent'><img width='30' height='30' src='../imgPathActionDownLoad?url={{userFile}}' class='avatar'>" +
                " <div class='text'>{{infor}}" +
                "</div></div>" +
                "</li>";
            var my = "<li><p class='time'><span class='messageTime'>{{time}}</span></p> " +
                "<div class='messageContent self'><img width='30' height='30' src='../imgPathActionDownLoad?url={{userFile}}' class='avatar'>" +
                " <div class='text'>{{infor}}</div> " +
                "</div></li>";
            if (obj.code == 0) {
                var str = "";
                if (obj.data != null) {
                    for (var i = 0; i < obj.data.list.length; i++) {
                        var data = obj.data.list[i];
                        if (data.uid == uid) {
                            str += my.format(data);
                        } else {
                            str += friend.format(data);
                        }
                    }
                    if (diguiStatu == 0) {//当此时state不等于0，说明用户已经切换，停止显示
                        $("#chatRecord").html(str);
                        gundongdiv(500 * obj.data.list.length);
                    }
                } else {
                    if (diguiStatu == 0) {
                        $("#chatRecord").html(str);
                    }
                }

            }
        }
    });
    setTimeout(function () {
        digui(fid);//带参数
    }, 200)
}
function findUserByName(name) {
    var name1 = $("#friendname").val();
    //如果当前查询值与搜索框输入值不相同，说明用户已经有新的查询name，本次不执行
    if (name != name1) {
        return;
    }
    if (name1 == null || name1.length <= 0) {
        showAddFrined(applyFriendList, "");
        return;
    }
    //判断上次查找值是否跟这次相同，是的不查询
    if (lastname == name1) {
        return;
    }
    lastname = name1;
    $.ajax({
        type: "POST",      //传输方式
        url: "../findUserByName",           //地址
        data: {
            uid: uid,
            friendName: lastname
        },
        success: function (obj) {
            if (obj.code == '0') {
                var str = "";
                for (var i = 0; i < obj.data.length; i++) {
                    var data = obj.data[i];
                    var sex1 = "<div class='ua' style='margin-top: 5px;'><span class='os_8_1' >♂</span></div>";
                    if (data.sex == '2') {
                        sex1 = "<div class='ua' style='margin-top: 5px;'><span class='ua_chrome'>♀</span></div>";
                    }
                    str += "<li style='width: 300px;'><a href='zhuye.jsp?fw_id=" + data.uid + "' style='width: 180px'>" +
                        "<img src='../imgPathActionDownLoad?url=" + data.file + "'alt='无'/>" +
                        "<em>" + data.username + " </em> <strong>" + sex1 + "</strong></a>" +
                        "<div  id='caozuoquyu" + data.uid + "'><button class='btn btn-info btn-xs' onclick='addfriend(" + data.uid + ")'>添加</button>" +
                        "</div></li>";
                }
                showAddFrined(applyFriendList, str);
            }
        }
    });
}

function addfriend(friendid) {
    $.ajax({
        type: "POST",      //传输方式
        url: "../addFriend",           //地址
        data: {
            uid: uid,
            friendId: friendid
        },
        success: function (obj) {
            if (obj.code == '0') {
                $("#caozuoquyu" + friendid).html("<span style='color: deepskyblue'>已发送</span>")
            }
            else {
                $("#caozuoquyu" + friendid).html("<span style='color: red;'>" + obj.msg + "</span>");
            }
        }
    });

}

function findUserAsFriend(name) {
    var name1 = $("#searchInput").val();
    //如果当前查询值与搜索框输入值不相同，说明用户已经有新的查询name，本次不执行
    if (name != name1) {
        return;
    }
    //判断上次查找值是否跟这次相同，是的不查询
    if (lastfriend == name1) {
        return;
    }
    lastname = name1;
    if (friendList == null || friendList.length == 0) {
        return;
    }
    var str = "<li  onclick='getUid(0,this)' class='active'> <img class='avatar' width='30' height='30' " +
        "src='../img/xiaomo.png' alt='无'/>  " +
        "<p class='name'>小沫 </p></li>" +
        "<li  onclick='getUid(-1,this)' > <img class='avatar' width='30' height='30' " +
        "src='../img/quanfudating.png' alt='无'/>  " +
        "<p class='name'>全服大厅</p></li>";
    for (var i = 0; i < friendList.length; i++) {
        var data = friendList[i];
        if (data.username.search(name1) == -1 && name1.length != 0) {
            //没有找到子串
            continue;
        }
        str += " <li onclick='getUid(" + data.uid + ",this)'> <img class='avatar' width='30' height='30' " +
            "src='../imgPathActionDownLoad?url=" + data.file + "' alt='无'/>  " +
            "<p class='name'>" + data.username + "</p></li>";
    }
    $("#user-list").html(str);
}
String.prototype.format = function () {
    if (arguments.length == 0) return this;
    var param = arguments[0];
    var s = this;
    if (typeof(param) == 'object') {
        for (var key in param)
            s = s.replace(new RegExp("\\{{" + key + "\\}}", "g"), param[key]);
        return s;
    } else {
        for (var i = 0; i < arguments.length; i++)
            s = s.replace(new RegExp("\\{{" + i + "\\}}", "g"), arguments[i]);
        return s;
    }
}
