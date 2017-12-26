<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
    <meta charset="UTF-8">
    <title>查看访客</title>
    <script src="js/jquery-2.1.0.js"></script>
    <link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

</head>

<body>
<nav class="navbar navbar-inverse">
    <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="col-md-8 col-md-offset-4">
            <div class="navbar-header">
                <a class="navbar-brand" href="#" style="color: yellow;font-size: 100%;"><span
                        class="glyphicon glyphicon-star" aria-hidden="true"></span>主页展示</a>
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">

                    <li><a href="zhuye.jsp">我的主页</a></li>
                    <li>
                        <c:if var="result" test="${fw_id>0?false:true}">

                        </c:if>
                    </li>
                    <li>
                        <c:if var="result" test="${fw_id>0?false:true}">
                    </li>
                    </c:if>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="servlet?task=logout"><span class="glyphicon glyphicon-log-out"
                                                            aria-hidden="true"></span>退出</a></li>

                </ul>
            </div><!-- /.navbar-collapse -->
        </div>
    </div><!-- /.container-fluid -->
</nav>
<div class="row">
    <div class="col-md-3	"></div>
    <div class="col-md-6	">
        <table class="table table-hover">
            <tr>
                <td>今日访客：</td>
                <td>访问人姓名</td>
                <td style="width: 400px">最近一次访问时间</td>
            </tr>
            <c:forEach items="${list2}" var="listObj" varStatus="">
                <tr>
                    <td></td>
                    <td>${listObj.uname}</td>
                    <td>${(listObj.fwTime).substring(0,19)}</td>
                </tr>
            </c:forEach>
        </table>
        <table class="table table-hover">
            <tr>
                <td>昨日访客：</td>
                <td>访问人姓名</td>
                <td style="width: 400px">最近一次访问时间</td>
            </tr>
            <c:forEach items="${list1}" var="listObj" varStatus="">
                <tr>
                    <td></td>
                    <td>${listObj.uname}</td>
                    <td>${(listObj.fwTime).substring(0,19)}</td>
                </tr>
            </c:forEach>
        </table>
    </div>
</div>

</body>

<script>
    function lookVisitor() {
        $.ajax({
            type: "POST",      //传输方式
            url: "lookVisitor",           //地址
            data: {            //传递的参数
                uid: "${user.uid}"
            },
            success: function (obj) {

            }
        })
    }
</script>
</html>
