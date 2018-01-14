function showaddname() {
    $("#showaddname").fadeToggle(300);
}
function noneaddname() {
    $("#showaddname").fadeToggle(300);
}
$(document).ready(function () {
    var lastname = "";
    $('#friendname').bind('input propertychange blur', function () {

        var name = $("#friendname").val();
        setTimeout(function () {
            addfriend(name);//带参数
        }, 300)

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
                if (obj.code = '0') {
                    var str = "";
                    for (var i = 0; i < obj.data.length; i++) {
                        var data = obj.data[i];
                        str += "<li><a target='_blank' href='' rel='nofollow'>" +
                            "<img src='../imgPathActionDownLoad?url=" + data.file + "'" +
                            " alt='无头像'><em>" + data.username + "</em> <strong><i class='iconfont'>&#xe8ca;</i> </strong></br></a></li>";
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