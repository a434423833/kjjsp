<%@page import="com.yijiupi.kjjsp.pojo.LyInfor" %>
<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" %>
<%
    Map<String, LyInfor> map = new HashMap<String, LyInfor>();
    Object obj = request.getAttribute("session_Map");
    if (obj != null) {
        map = (Map) obj;
    }
%>
<% for (int i = 0; map.get("map" + i) != null; i++) { %>
<div class="row">
    <div class="col-md-1"></div>
    <div class="col-md-1"></div>
    <div class="col-md-1"></div>
    <div class="col-md-1"></div>
    <div class="col-md-4">
        <hr style="background-color:green;height:1px">
        <div class="row">
            <div class="col-md-2" style="font-size:20px"><%=map.get("map" + i).getWrite_name()%>
            </div>
            <div class="col-md-10">
                <p><%=map.get("map" + i).getInfor() %>
                </p>
            </div>
        </div>
        </br>
        <c:if var="result" test="${session_.usid==fw_id?true:false}">
            <div class="row">
                <div class="col-md-10"></div>
                <div class="col-md-2"><a href="servlet?task=delect_lyb&fw_id=${fw_id}&id=<%=map.get("map"+i).getId()%>"
                                         style="font-size:2px">删除</a></div>
            </div>
        </c:if>
    </div>
    <div class="col-md-1"></div>
    <div class="col-md-1"></div>
    <div class="col-md-1"></div>
    </br>
</div>
<% } %>


			
	