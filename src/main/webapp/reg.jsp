<%@ page language="java" pageEncoding="UTF-8" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
%>

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title></title>
    <link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/jquery-2.1.0.js"></script>
</head>

<body>

<div class="row">
    <div class="col-md-4"><img id="tp1" src="img/regreg_3.png" style="width:550px;height:900px"/></div>
    <div class="col-md-2"></div>
    <div class="col-md-3">
        <div class="row" style="height: 110px;">
        </div>
        <div class="row" style="border: 0px solid; height: 58px; font-size: 49px; ">
            欢迎注册Face to face
        </div>
        <div class="row" style="height: 70px;margin-top:30px;font-size: 32px;">
            每一天，乐在沟通
        </div>
        <div class="row" style="border: 0px solid;margin-top:30px">

            <form class=" form-inline " action="servlet" method="post">
                <input type="hidden" name="task" value="reg">
                <div class="form-group ">
                    <label class="sr-only " for="exampleInputEmail3">Email address</label>
                    <input type="text" name="username" class="form-control " id="exampleInputEmail3"
                           onblur="checkName()" placeholder="   昵称" style="height: 55px;width: 480px;">
                    <span id="span1"></span>
                </div>
                <br>
                <div class="form-group ">
                    <label class="sr-only " for="exampleInputPassword3">Password</label>
                    <input type="password" name="password1" class="form-control " id="exampleInputPassword3"
                           onblur="mm()" placeholder="   密码" style="height: 55px;width: 480px;margin-top: 40px;">
                    <span id="span2"></span>
                </div>
                <br>
                <div class="form-group ">
                    <label class="sr-only " for="exampleInputPassword4">Password</label>
                    <input type="password" name="password2" class="form-control " id="exampleInputPassword4"
                           onblur="qrmm()" placeholder="   确认密码" style="height: 55px;width: 480px;margin-top: 40px;">
                    <span id="span3"></span>
                </div>
                <br>
                <!-- <div class="form-group ">
                   <label class="sr-only " for="exampleInputPassword5">Password</label>
                    <input type="file" name="file1"  class="form-control " id="exampleInputPassword5" onblur="qrmm()"  style="height: 55px;width: 480px;margin-top: 40px;">
                    <span id="span3"></span>
                </div><br> -->
                <button type="submit" class="btn btn-info" onclick="zhuce()"
                        style="height: 55px;width: 480px;margin-top: 40px; font-size: 35px;">立即注册
                </button>

            </form>

        </div>
    </div>
    <div class="col-md-2 "></div>
    <div class="col-md-1 "><a href="login/login.jsp">回到登录界面</a></div>
</div>
</body>
<script>
    var tp = 1;
    var a = 0, b = 0, c = 0;
    setInterval(tupian, 5000);
    /* ajax */
    function checkName() {
        var usn = $("#exampleInputEmail3").val();
        if (usn.length == 0 || usn == null) {
            $("#span1").css("color", "red");
            $("#span1").html("*用户名不能为空");
            a = 0;
        } else {

            $.ajax({
                type: "POST",      //传输方式
                url: "ajaxServlet",           //地址
                data: {            //传递的参数
                    task: "reg",
                    username: $("#exampleInputEmail3").val()
                },
                success: function (str) {    //当回调时执行
                    var obj = $.parseJSON(str);   //解析后台传过来的sql
                    if (obj != null && obj.isok == "true") {
                        $("#span1").css("color", "red");
                        $("#span1").html("*用户名重复");
                        a = 0;
                    } else {
                        $("#span1").css("color", "red");
                        $("#span1").html("恭喜您，用户名可以使用");
                        a = 1;
                    }
                }

            });
        }
    }

    function mm() {
        var usn = document.getElementById("exampleInputPassword3").value;
        var t = document.getElementById("span2");
        if (usn.length == 0 || usn == null) {
            t.style.cssText = "color:red";
            t.innerHTML = "*密码不能为空";
            b = 0;
        } else {
            t.innerHTML = "";
            b = 1;
        }
    }
    function qrmm() {
        var usn = document.getElementById("exampleInputPassword4").value;
        var usn1 = document.getElementById("exampleInputPassword3").value;
        var t = document.getElementById("span3");
        if (usn.length == 0 || usn == null) {
            t.style.cssText = "color:red";
            t.innerHTML = "*密码不能为空";
            c = 0;
        }
        else {
            if (usn != usn1) {
                t.style.cssText = "color:red";
                t.innerHTML = "*两次密码输入不一样";
                c = 0;
            }
            else {
                t.innerHTML = "";
                c = 1;
            }
        }
    }
    function tupian() {
        var a = document.getElementById("tp1");
        a.src = "img/regreg_" + tp + ".png ";
        tp++;
        if (tp > 3) {
            tp = 1;
        }
    }
    function zhuce() {
        if (a == 1 && b == 1 && c == 1) {
            event.returnValue = true;
        }
        else if (a == 0 && b == 0 && c == 0) {
            $("#span1").css("color", "red");
            $("#span1").html("*用户名不能为空");
            $("#span2").css("color", "red");
            $("#span2").html("密码不能为空");
            $("#span3").css("color", "red");
            $("#span3").html("*确认密码不能为空");
            event.returnValue = false;
        } else if (a == 1 && b == 0 && c == 0) {
            $("#span2").css("color", "red");
            $("#span2").html("密码不能为空");
            $("#span3").css("color", "red");
            $("#span3").html("*确认密码不能为空");
            event.returnValue = false;
        } else if (a == 0 && b == 1 && c == 0) {
            $("#span1").css("color", "red");
            $("#span1").html("*用户名不能为空");
            $("#span3").css("color", "red");
            $("#span3").html("*两次密码输入不一样");
            event.returnValue = false;
        } else if (a == 0 && b == 0 && c == 1) {
            $("#span1").css("color", "red");
            $("#span1").html("*用户名不能为空");
            $("#span2").css("color", "red");
            $("#span2").html("密码不能为空");
            $("#span3").css("color", "red");
            $("#span3").html("*两次密码输入不一样");
            event.returnValue = false;
        }
        else if (a == 0 && b == 1 && c == 1) {
            $("#span1").css("color", "red");
            $("#span1").html("*用户名不能为空");

            event.returnValue = false;
        }
        else if (a == 1 && b == 1 && c == 0) {
            $("#span3").css("color", "red");
            $("#span3").html("*两次密码输入不一样");
            event.returnValue = false;
        }
        else if (a == 1 && b == 0 && c == 1) {
            $("#span3").css("color", "red");
            $("#span3").html("*两次密码输入不一样");
            event.returnValue = false;
        }

    }
</script>

</html>