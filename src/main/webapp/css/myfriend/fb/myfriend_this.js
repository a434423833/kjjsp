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
                        "<p class='name'>小沫 </p></li>";
                    var length = obj.data.length;
                    for (var i = 0; i < length; i++) {
                        var data = obj.data[i];
                        str += " <li onclick='getUid(" + data.uid + ",this)'> <img class='avatar' width='30' height='30' " +
                            "src='../imgPathActionDownLoad?url=" + data.file + "' alt='无'/>  " +
                            "<p class='name'>" + data.username + "</p></li>";
                    }
                    $("#user-list").html(str);
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
    $("li").each(function () {
        $(this).removeClass("active");
    });
    $(thisobj).addClass("active");
    if (fid == 0) {
        tuLingShow();
    } else {
        chatShow(fid);
    }
}

/**
 * 与好友的聊天
 */
function chatShow(fid) {
    $("#chatRecord").html("");
}

var lastname = "";
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
                    toTuLingChat(content);
                } else {

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
 * 聊天
 * @param fid
 */
function liaotianload(fid) {
    setTimeout(function () {
        digui(fid, 1);//带参数
    }, 500)
}

function digui(fid, status) {
    if (status == 1) {
        var display = $("#liaotian" + fid).css('display');
        if (display == "none") {
            $("#liaotian" + fid).css('display', 'block');
        } else {
            $("#liaotian" + fid).css('display', 'none');
        }
    }
    var display1 = $("#liaotian" + fid).css('display');
    console.log("处于递归中");
    if (display1 == "none" || display1 == undefined) {
        console.log("退出递归中");
        return;
    }
    var friendfile = "";
    $.ajax({
        type: "POST",      //传输方式
        url: "../getFriendFile",           //地址
        data: {
            fid: fid
        },
        success: function (obj) {
            if (obj.code == 0) {
                friendfile = obj.data;
            }
            $.ajax({
                type: "POST",      //传输方式
                url: "../getInfor",           //地址
                data: {
                    uid: uid,
                    fid: fid
                },
                success: function (obj) {
                    var friend = "<div style='float: left;'>" +
                        "<div style='display: inline-block;width:38px;margin-top: 10px;margin-right:10px;float: left;'>" +
                        "<div class='imgtest1'><figure><div><img style=''  src='../imgPathActionDownLoad?url=" + friendfile + "' alt='无'/></div></figure></div></div>" +
                        "<div style='display: inline-block;width:180px;margin-top: 15px;font-size: 12px;text-align: left;word-wrap: break-word'>{{0}}</div></div></br>";

                    var my = "<div style='float: right;'>" +
                        "<div class='myinfor' style='display: inline-block;width:180px;margin-top: 15px;font-size: 12px;text-align: right;word-wrap: break-word'>{{0}}</div>" +
                        "<div style='display: inline-block;width:38px;margin-top: 10px;margin-right:10px;float: right'>" +
                        "<div class='imgtest1'><figure><div><img style=''  src='../imgPathActionDownLoad?url=" + myfile + "' alt='无'/></div></figure></div></div></div></br>";
                    if (obj.code == 0) {
                        var str = "";
                        for (var i = 0; i < obj.data.list.length; i++) {
                            var data = obj.data.list[i];
                            if (data.uid == uid) {
                                str += my.format(data.infor);
                            } else {
                                str += friend.format(data.infor);
                            }
                        }
                        $("#liaotian" + fid).html(str);
                        /*根据高度判断文字是否超过1行了*/
                        $(".myinfor").each(function () {
                            if ($(this).height() != 17) {
                                $(this).css("text-align", "left");
                            }
                        });

                    }
                }
            });
        }
    });
    if (status == 1) {
        // TODO:滚动条

    }
    setTimeout(function () {
        status++;
        digui(fid, status);//带参数
    }, 500)
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
                        "<div ><button class='btn btn-info btn-xs' onclick='haoyouxuanze(" + 1 + "," + data.uid + ")'>添加</button>" +
                        "</div></li>";
                }
                showAddFrined(applyFriendList, str);
            }
        }
    });
}
