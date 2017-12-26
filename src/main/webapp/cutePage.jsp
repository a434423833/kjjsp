<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
%>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title></title>
    <link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css">

</head>

<body>
<table class="table" style=" width: 1000px;margin-left:450px">
    <tr>
        <td>用户id</td>
        <td>用户名</td>
        <td>用户密码</td>
    </tr>
    <c:forEach items="${cpuser.dataList}" var="cpObj">
        <tr>
            <td>${cpObj.usid}</td>
            <td>${cpObj.usname}</td>
            <td>${cpobj.pwd}</td>
        </tr>
    </c:forEach>
    <tr>
        <td>当前${cpuser.pageIndex}/${cpuser.pageCount}
            <a href="cutePageServlet?pageIndexStr=1">首页</a>
            <a href="cutePageServlet?pageIndexStr=${cpuser.pageCount}">末页</a>
        </td>
    </tr>

</table>


</body>
</html>
