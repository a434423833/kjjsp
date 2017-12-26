<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" %>
<div class="row" style="height:150px"></div>
<div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-7" style="font-size:50px">${fw_name==null?session_.usname:fw_name}的主页</div>
</div>
<div class="row" style="height:50px"></div>
<div class="row">
    <div class="col-md-1"></div>
    <div class="col-md-3">
        <span><a href="servlet?task=talk&id=${fw_id==null?session_.usid:fw_id}"><img
                src="img/qq_shuos.png"/></a></span></br> <span><a
            href="servlet?task=talk&id=${fw_id==null?session_.usid:fw_id}" style="padding-left:10px">说说</a></span>
    </div>
    <div class="col-md-3">
				<span><a href="servlet?task=lyb&id=${fw_id==null?session_.usid:fw_id}"><img
                        src="img/qq_lyb.png"/></a></span></br> <span><a
            href="servlet?task=lyb&id=${fw_id==null?session_.usid:fw_id}"
            style="padding-left:5px">留言板</a></span>
    </div>
    <div class="col-md-3">
				<span><a href="servlet?task=lyb"><img
                        src="img/qq_lyb.png"/></a></span></br> <span><a href="servlet?task=lyb"
                                                                        style="padding-left:10px">日志</a></span>
    </div>
</div>
<br> <br> <br>
<%-- <div class="row">
    <div class="col-md-3"></div>
    <div class="col-md-9" style="font-size:20px;color:green">请选择访问的主页</div>
</div>
<%@ include file="mokuai2.jsp"%> --%>