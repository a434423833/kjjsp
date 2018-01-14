function showaddname() {
    $("#showaddname").fadeToggle(300);
}
function noneaddname() {
    $("#showaddname").fadeToggle(300);
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

    })

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
                            "</li><span id='addfriendspan" + data.uid + "' style='color: red'></span></br></br></br>";
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