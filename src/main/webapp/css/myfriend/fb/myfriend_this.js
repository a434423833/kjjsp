function onModalShow() {
    $("#addfriend").css("display", "block");
}
function onModalClose() {
    $("#addfriend").css("display", "none");
}
function bodyload() {
    getCount();
    getAddFriendList();
    getFriendList();

}
//获取好友申请数量
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


//获得好友申请列表
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
                    var str = "";
                    var length = obj.data.length;
                    for (var i = 0; i < length; i++) {
                        var data = obj.data[i];
                        str += " <li onclick='getUid(" + data.uid + ")'> <img class='avatar' width='30' height='30' " +
                            "src='../imgPathActionDownLoad?url=" + data.file + "' alt='无'/>  " +
                            "<p class='name'>" + data.username + "</p></li>";
                    }
                    $("#user-list").html(str);
                }
            }
        }
    );
}

function getUid(_fid) {
    fid = _fid;
}