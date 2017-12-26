<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">

    <title>My JSP 'text.jsp' starting page</title>

	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

  </head>

  <body>
    <div class='row' style='height:50px'></div><div class='row' style='color:black;'><div class='row'><div class='col-md-3'></div><div class='col-md-5' style='border:0px solid; background-image: url(img/talk_1.png);border-radius:5px 5px 5px 5px;'><div class='row'>"+
				"<div class='col-md-2'>"+
					"<span id='span1' style='font-size:25px'>"+obj[i].usname+"</span>"+
				"</div>"+
				"<div class='col-md-5' style='padding-top:15px'>"+
				"	<span id='span2'>"+obj[i].time+"</span>"+
				"</div>"+
			"</div>"+
			"<div class='row' style='height:20px'></div>"+
			"<div class='row'>"+
			  "  <div class='col-md-1'></div>"+
			   " <div class='col-md-5' id='span3'>"+obj[i].infor+"</div>"+
			   " <div class='col-md-6' ></div>"+
		   " </div>"+
			"<div class='row' style='height:20px'></div>"+
			"<div class='row'>"+
			   " <div class='col-md-9'></div>"+
			   " <div class='col-md-1'>"+
			       "   <button type='button' class='btn btn-warning' ><a href='servlet?task=delect_talk&tid="+obj[i].usid+"&uid=${session_.usid}' style='color:black;text-decoration:none'>删除</a></button>"+
			   " </div>"+
			   " <div class='col-md-1'>"+
			       "   <button type='button' class='btn btn-success'>点赞</button>"+
			   " </div>"+
			   " <div class='col-md-1'>"+
			    "      <button type='button' class='btn btn-info' onclick='click2("+obj[i].usid+")'   >评论</button>"+
			   " </div>"+
			"</div>"+
			"<div class='row'>"+
			   " <div class='col-md-9'>"+
			   " <div id='aaa"+obj[i].usid+"'></div>"+
			   " </div>"+
			"</div>"+
			"<div class='row' style='margin-top:10px'>"+
			 "  <div class='col-md-1'></div>"+
			 "  <div class='col-md-10'><input type='text' name='' class='form-control' id='a"+obj[i].usid+"'  placeholder='评论' style='display:none'></div>"+
			" <div class='col-md-1'><button type='button' class='btn btn-primary' id='aa"+obj[i].usid+"' style='display:none' onclick='click4("+obj[0].usid+")'>发布</button></div>"+
			"</div>"+
		"</div>"+
	"</div>"+
"</div>"
  </body>
</html>
