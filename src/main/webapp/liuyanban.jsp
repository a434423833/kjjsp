<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title></title>
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
                        class="glyphicon glyphicon-star" aria-hidden="true"></span>留言板</a>
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">

                    <li><a href="zhuye.jsp">我的主页</a></li>
                    <li>
                        <c:if var="result" test="${fw_id>0?false:true}">
                            <button type="button" class="btn btn-primary btn-lg"
                                    data-toggle="modal" data-target="#myModal">添加好友
                            </button>
                        </c:if>
                    </li>
                    <li>
                        <c:if var="result" test="${fw_id>0?false:true}">
                        <button type="button" class="btn btn-primary btn-lg"
                                data-toggle="modal" data-target="#myModal1" onclick="chick2()">信息显示
                        </button>
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
    <div class="col-md-9"></div>

</div>
>
<div class="row">
    <div class="col-md-1"></div>
    <div class="col-md-1"></div>
    <div class="col-md-1"></div>
    <div class="col-md-1"></div>
    <div class="col-md-5">
        <div style="font-size:50px">${fw_name}的留言板</div>
    </div>
    <div class="col-md-1"></div>
    <div class="col-md-1"></div>
    <div class="col-md-1"></div>
</div>
<div class="row">
    <div class="col-md-1"></div>
    <div class="col-md-1"></div>
    <div class="col-md-1"></div>
    <div class="col-md-1"></div>
    <div class="col-md-5">
        <form action="servlet" method="post">
            <input type="hidden" name="task" value="lyb_write">
            <input type="hidden" name="fw_id" value="${fw_id}">
            <textarea class="form-control" rows="3" name="infor" style="width:600px" placeholder="请在此留言"></textarea>
            <input type="submit" class="btn btn-info" value="发布" style="magin-left:450px"></button>
            </from>
    </div>
    <div class="col-md-1"></div>
    <div class="col-md-1"></div>
    <div class="col-md-1"></div>
</div>
<c:if var="result" test="${empty session_Map}">
    <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-1"></div>
        <div class="col-md-1"></div>
        <div class="col-md-1"></div>
        <div class="col-md-4">
            <hr style="background-color:green;height:1px">
            <div style="font-size:30px">暂时无人留言~
            </div>
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-1"></div>
        <div class="col-md-1"></div>
    </div>
</c:if>
<c:if test="${!result}">
    <%@ include file="mokuai1.jsp" %>
</c:if>


</body>
</html>
