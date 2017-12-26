<%@page import="com.yijiupi.kjjsp.pojo.UserInfo" %>
<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" %>
<div class="row" style="height:120px">
    <c:forEach items="${cpuser.dataList}" var="cpObj" varStatus="">
        <div class="row" style="height:20px">
            <div class="col-md-2"></div>
            <div class="col-md-4">${cpObj.usname}</div>
            <div class="col-md-4">
                <a href="servlet?task=fwzhuye&fw_id=${cpObj.usid}&fwqx=aaa">访问</a>
            </div>
        </div>
    </c:forEach>
</div>

<div class="row" style="height:20px"></div>
<div class="row">
    <div class="col-md-1"></div>
    <div class="col-md-10" style="color:green">
        ${cpuser.pageIndex }/${cpuser.pageCount } <a
            href="servlet?task=fangwen&index=1">首页</a> <a
            href="servlet?task=fangwen&index=${cpuser.pageIndex-1}">上一页</a> <a
            href="servlet?task=fangwen&index=${(cpuser.pageIndex+1)>cpuser.pageCount?cpuser.pageIndex:cpuser.pageIndex+1}">下一页</a>
        <a href="servlet?task=fangwen&index=${cpuser.pageCount }">末页</a>
    </div>

</div>
