function chick1(obj) {
    obj.src = " ../getCode?t=" + new Date();   //由于缓存问题会造成图片不更换，每次跳转servlet时带不同的参数
}
function click_login_head() {
    $("#h1_head").css("display", "none");
    $("#login_zhuti").slideDown("slow");
}
function click_login_sq() {
    $("#login_zhuti").slideUp("slow");
    $("#h1_head").css("display", "block");
}
function click2() {
    $.ajax({
            type: "POST",      //传输方式
            url: "../userLogin",           //地址
            data: {            //传递的参数
                "account": $("#exampleInputEmail3").val(),
                "password": $("#exampleInputPassword3").val(),
                "code": $("#code").val()
            },
            success: function (obj) {
                if (obj.code == '0') {
                    var data = obj.data;
                    window.location.href = "guangchang.jsp";

                } else {
                    $("#login_msg").html(obj.msg);
                }

            }
        }
    )
    ;
}