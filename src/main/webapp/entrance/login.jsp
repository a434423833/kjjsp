<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page language="java" pageEncoding="UTF-8" %>


<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>首页</title>
    <link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <link rel="stylesheet" type="text/css" href="../css/login.css"/>


</head>

<body>
<div class="row">
    <div class="col-md-2">
        <%@ include file="left.jsp" %>
    </div>
    <div class="col-md-10">
        <div class="row" style="height: 60px">
            <%@ include file="head.jsp" %>
        </div>

        <div class="row" style="margin-left: -75px">
            <div id="yangshi3">
                <div style="height: 1000px;width: 600px">
                    <div id="div3"><a href="login.html"></a></div>
                    <form class="form-inline" action="userLogin" method="post">
                        <input type="hidden" name="task" value="login">
                        <div class="form-group">
                            <label class="sr-only" for="exampleInputEmail3">UserName</label>
                            <input type="text" name="username" class="form-control" id="exampleInputEmail3"
                                   placeholder="用户名" style="width: 272px ; height: 43px;">
                        </div>
                    </form>
                    </br>
                    <div class="form-group">
                        <label class="sr-only" for="exampleInputPassword3">Password</label>
                        <input type="password" name="password" class="form-control" id="exampleInputPassword3"
                               value="${password}" placeholder="密码" style="width: 272px ; height: 43px;">
                    </div>
                    <div class="form-group">
                        <input type="text" name="code" class="form-control" id="exampleInputPassword3" value=""
                               placeholder="验证码" style="width: 150px ; height: 43px;display: inline-block">
                        <img alt="" src="../getCode" style="margin-top:0px" onclick="chick1(this)">
                    </div>
                    <span style="color:red;margin-left:120px">${msg}</span></br>
                    <input type="submit" class="btn btn-success" value="登录" style="width: 272px ; height: 43px;">
                    </form>
                    <div id="div4">
                        <a href="xiugai.jsp">修改密码</a>|
                        <a href="reg.jsp">注册账号</a>|
                        版权所有
                    </div>
                </div>
            </div>
        </div>

    </div>


</div>


</body>
<script>

    function chick1(obj) {
        obj.src = " ../getCode?t=" + new Date();   //由于缓存问题会造成图片不更换，每次跳转servlet时带不同的参数
    }
</script>

</html>