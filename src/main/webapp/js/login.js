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
    var username = $("#exampleInputEmail3").val();
    var password = $("#exampleInputPassword3").val();
    var code = $("#code").val();
    if (username.length == 0) {
        $("#login_msg").html("请输入用户名");
        return;
    }
    if (password.length == 0) {
        $("#login_msg").html("请输入密码");
        return;
    }
    if (code == null || code.length != 4) {
        $("#login_msg").html("请输入正确验证码");
        return;
    }
    $.ajax({
            type: "POST",      //传输方式
            url: "../userLogin",           //地址
            data: {            //传递的参数
                "account": username,
                "password": password,
                "code": code
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
function click2_reg() {
    var username = $("#exampleInputEmail3_reg").val();
    var password = $("#exampleInputPassword3_reg").val();
    var password1 = $("#exampleInputPassword3_reg1").val();
    var code = $("#code1").val();
    if (password != password1) {
        $("#reg_msg").html("两次密码不一致");
        return;
    }
    if (username.length < 6 || username.length > 12) {
        $("#reg_msg").html("请输入6-12位用户名");
        return;
    }
    if (password.length < 6 || password.length > 12) {
        $("#reg_msg").html("请输入6-12位密码");
        return;
    }
    if (code == null || code.length != 4) {
        $("#reg_msg").html("请输入正确验证码");
        return;
    }
    $.ajax({
            type: "POST",      //传输方式
            url: "../userReg",           //地址
            data: {            //传递的参数
                "account": username,
                "password": password,
                "code": code
            },
            success: function (obj) {
                if (obj.code == '0') {
                    var data = obj.data;
                    window.location.href = "guangchang.jsp";

                } else {
                    $("#reg_msg").html(obj.msg);
                }

            }
        }
    )
    ;

}
function showside(i) {
    if (i == 1) {
        $("#showlogin").css("display", "none");
        $("#showreg").css("display", "block");
        return;
    }
    $("#showreg").css("display", "none");
    $("#showlogin").css("display", "block");
}