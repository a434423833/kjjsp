function showaddname() {
    $("#showaddname").fadeToggle(300);
}
function noneaddname() {
    $("#showaddname").fadeToggle(300);
}

function bodyload() {
    getCount();//获取好友申请数量
    getAddFriendList();
    getFriendList();

}
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
function getFriendList() {
    $.ajax({
            type: "POST",      //传输方式
            url: "../getFriendList",           //地址
            data: {
                uid: uid
            },
            success: function (obj) {
                if (obj.code == '0') {
                    var str = "";
                    var length = obj.data.length;
                    if (obj.data.length > 3) {
                        length = 3
                    }
                    for (var i = 0; i < length; i++) {
                        var data = obj.data[i];
                        str += "<li><a href='zhuye.jsp?fw_Id=" + data.uid + "'>" +
                            "<img src='../imgPathActionDownLoad?url=" + data.file + "' alt='无头像'><em>" + data.username + "</em>" +
                            "<strong >" + data.intimacy + "</strong></a></li>" +
                            "<div style='padding-top: 10px'>" +
                            "<i class='iconfont' title='与<a>" + data.username + "</a>聊天中' data-html='true'" +
                            " data-container='body' data-toggle='popover' data-placement='right'" +
                            "data-content='<div style=\"position:absolute;top:88%;\"><textarea id=\"liaotianneirong" + data.uid + "\" class=\"textarea\" autofocus></textarea>" +
                            "<button class=\"btn btn-default btn-xs \" id=\"button1\" onclick=\"button1(" + data.uid + ")\">发送</button></div>" +
                            "<div id=\"liaotian" + data.uid + "\" class=\"liaotian\"></div>' onclick='liaotianload(" + data.uid + ")'>&#xe630;</i></div>" +
                            "</br>";
                    }
                    $("#toplist").html(str);
                    str = "";
                    length = obj.data.length;
                    if (obj.data.length < 3) {
                        length = 3
                    }
                    for (var i = 3; i < length; i++) {
                        var data = obj.data[i];
                        str += "<li><a href='zhuye.jsp?fw_Id=" + data.uid + "' rel='nofollow'>" +
                            "<img src='../imgPathActionDownLoad?url=" + data.file + "' alt='无头像'><em>" + data.username + "</em>" +
                            "<strong>" + data.intimacy + "</strong></a></li>" +
                            "<div style='padding-top: 10px'>" +
                            "<i class='iconfont' title='与<a>" + data.username + "</a>聊天中' data-html='true'" +
                            " data-container='body' data-toggle='popover' data-placement='right'" +
                            "data-content='<div style=\"position:absolute;top:88%;\"><textarea  style=\"height:30px;width:180px;font-size\" autofocus></textarea>" +
                            "<button class=\"btn btn-default btn-xs \" id=\"button1\" onclick=\"button1(" + data.uid + ")\">发送</button></div>" +
                            "<div id=\"liaotian" + data.uid + "\" class=\"liaotian\" ></div>' onclick='liaotianload(" + data.uid + ")'>&#xe630;</i></div>" +
                            "</br>";
                    }
                    $("#alllist").html(str);
                    $("[data-toggle='popover']").popover();
                }
            }
        }
    );
}
function button1(fid) {
    var infor = $("#liaotianneirong" + fid).val();
    if (infor == null || infor == "" || infor.length == 0) {
        return;
    }
    $.ajax({
        type: "POST",      //传输方式
        url: "../setInfor",           //地址
        data: {
            uid: uid,
            fid: fid,
            infor: infor
        },
        success: function (obj) {
            if (obj.code == 0) {
                $("#liaotianneirong" + fid).val("");
                digui(fid, 2);
            }
        }
    });
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

var time = 0;

function xiaoxitixing() {
    $("#xiaoxitixing").css("display", "block");
    if (time == 0) {
        time = 1; //设定间隔时间（秒）
        //设置1秒内只执行一次
        var index = setInterval(function () {
            time--;
            if (time == 0) {
                clearInterval(index);
            }
        }, 800);
        getAddFriendList();
    }
}

//获得好友申请数量
function getAddFriendList() {
    $.ajax({
        type: "POST",      //传输方式
        url: "../getAddFriendList",           //地址
        data: {
            uid: uid
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
                    str += " <li style='margin-left: -20px;width: 190px'><a" +
                        " href='javascript:void(0);'><img " +
                        "  src='../imgPathActionDownLoad?url=" + data.file + "'" +
                        " alt='无'/><em>" + data.username + "</em> <strong>" + sex1 + "</strong></a></li>" +
                        " <div style='margin-top: 10px;height: 40px' id='caozuoquyu" + data.uid + "'>" +
                        "   <span style='color: purple' href='javascript:void(0);' onclick='haoyouxuanze(" + 1 + "," + data.uid + ")'>同意</span>||<span" +
                        " style='color: rebeccapurple' href='javascript:void(0);' onclick='haoyouxuanze(" + 2 + "," + data.uid + ")'>拒绝</span>" +
                        " </div>";
                }
                if (str == "") {
                    str = "暂时没有好友申请";
                }
                $("#tongzhilist").html(str);
            } else {
            }
        }
    });
}

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

function xiaoxitixing_show() { /* 此时鼠标进入div ，不用再进入ajax*/
    $("#xiaoxitixing").css("display", "block");
}

function xiaoxitixing1() {
    $("#xiaoxitixing").css("display", "none");
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
                $("#addfriendspan" + friendid).html("已经发送申请")
            }
            else {
                $("#addfriendspan" + friendid).html(obj.msg);
            }
        }
    });

}

$(document).ready(function () {
    var lastname = "";
    $('#friendname').bind('input propertychange blur', function () {
        var name = $("#friendname").val();
        setTimeout(function () {
            addfriend(name);//带参数
        }, 200)

    });

    function addfriend(name) {
        var name1 = $("#friendname").val();
        if (name != name1) {
            return;
        }
        if (name1 == null || name1.length <= 0) {
            $("#addfriendshow").html("");
            return;
        }
        if (lastname == name1) {
            return;
        }
        lastname = name1;
        $.ajax({
            type: "POST",      //传输方式
            url: "../findUserByName",           //地址
            data: {
                uid: uid,
                friendName: name1
            },
            success: function (obj) {
                if (obj.code == '0') {
                    var str = "";
                    for (var i = 0; i < obj.data.length; i++) {
                        var data = obj.data[i];
                        str += "<li><a  href='javascript:void(0);' >" +
                            "<img src='../imgPathActionDownLoad?url=" + data.file + "'" +
                            " alt='无头像'><em>" + data.username + "</em> <strong id='strong1' onclick='addfriend(" + data.uid + ")'>添加<i class='iconfont' >&#xe8ca;</i> </strong></a>" +
                            "</li><div id='addfriendspan" + data.uid + "' style='margin-top: 15px;color: red;height:20px;font-size: 15px'></div></br>";
                    }
                    if (str == "")
                        str = "没有查到此人";
                    $("#addfriendshow").html(str);
                } else {

                }

            }
        });
    }
})