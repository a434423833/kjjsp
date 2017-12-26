<%@ page language="java" import="java.util.*" pageEncoding="utf-8" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
    <title>说说功能模块</title>
    <!-- Bootstrap -->
    <script src="js/jquery-2.1.0.js"></script>
    <link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <style type="text/css">
        #id1 {
            margin-left: 225px;
            border: 1px solid;
        }
    </style>
    <title>My JSP 'talk.jsp' starting page</title>
</head>
<body onload="load1()" style="background-image: url(img/talk.jpg);">
<nav class="navbar navbar-inverse">
    <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="col-md-8 col-md-offset-4">
            <div class="navbar-header">
                <a class="navbar-brand" href="#" style="color: yellow;font-size: 100%;"><span
                        class="glyphicon glyphicon-star" aria-hidden="true"></span>说说展示</a>
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">

                    <li><a href="zhuye.jsp">我的主页</a></li>
                    <li>
                        <c:if var="result" test="${param.fw_id!=user.uid?false:true}">
                            <button type="button" class="btn btn-primary btn-lg"
                                    data-toggle="modal" data-target="#myModal">添加好友
                            </button>
                        </c:if>
                    </li>
                    <li>
                        <c:if var="result" test="${param.fw_id!=user.uid?false:true}">
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

<div class="row" style="height:30px">
    <div class="col-md-10"></div>

</div>
<div class="row" style="height:40px">
    <div class="col-md-1	"></div>
    <div>${fw_name}的说说</div>
</div>

<div class="row" id="yc">
    <div class="col-md-3	"></div>
    <div class="col-md-5">
        <textarea id="textarea1" class="form-control" rows="3" style="height:150px;"></textarea>
    </div>
</div>
<div class="row" id="yc1">
    <div class="col-md-7"></div>
    <div class="col-md-1" style="padding-left:65px">
        <button type="button" id="button1" class="btn btn-info" onclick="click_write()">发表说说</button>
    </div>
</div>

<div id="ajax1">

</div>
<%-- <c:forEach items="${list}" var="listObj" varStatus="">
<%@ include file='talk_zhuti.jsp'%>
</c:forEach> --%>


</body>
<script>
    function load1() {
        if (${user.uid!=param.fw_id?true:false}) {
            $("#yc").css("display", "none");
            $("#yc1").css("display", "none");

        }
        $.ajax({
            type: "POST",      //传输方式
            url: "userTalk",           //地址
            data: {            //传递的参数
                id:${param.fw_id}
            },
            success: function (obj) {    //当回调时执行
                var str1 = "";
                obj = obj.data;
                if (obj != null && obj.length != 0) {
                    for (var i = 0; i < obj.length; i++) {
                        str1 += "<div class='row' style='height:50px'></div><div class='row' style='color:black;'><div class='row'><div class='col-md-3'></div><div class='col-md-5' style='border:0px solid; background-image: url(img/talk_1.png);border-radius:5px 5px 5px 5px;'><div class='row'>" +
                            "<div class='col-md-2'>" +
                            "<span id='span1' style='font-size:25px'>" + obj[i].usname + "</span>" +
                            "</div>" +
                            "<div class='col-md-5' style='padding-top:15px'>" +
                            "	<span id='span2'>" + obj[i].time + "</span>" +
                            "</div>" +
                            "</div>" +
                            "<div class='row' style='height:20px'></div>" +
                            "<div class='row'>" +
                            "  <div class='col-md-1'></div>" +
                            " <div class='col-md-5' id='span3'>" + obj[i].infor + "</div>" +
                            " <div class='col-md-6' ></div>" +
                            " </div>" +
                            "<div class='row' style='height:20px'></div>" +
                            "<div class='row'>" +
                            " <div class='col-md-9' id='dianzan" + obj[i].tid + "'></div>" +
                            " <div class='col-md-1'>" +
                            "   <button type='button' id='sc1" + obj[i].tid + "' class='btn btn-warning' ><a href='controller?task=delect_talk&tid=" + obj[i].uid + "&uid=${session_.uid}' style='color:black;text-decoration:none'>删除</a></button>" +
                            " </div>" +
                            " <div class='col-md-1'>" +
                            "   <button type='button' class='btn btn-success' id='dianzan1" + obj[i].tid + "' onclick='clickdianzan(" + obj[i].tid + ")'>点赞</button>" +
                            " </div>" +
                            " <div class='col-md-1'>" +
                            "      <button type='button' class='btn btn-info' onclick='click2(" + obj[i].uid + ")'   >评论</button>" +
                            " </div>" +
                            "</div>" +
                            "<div class='row'>" +
                            " <div class='col-md-9'>" +
                            " <div id='aaa" + obj[i].uid + "'></div>" +
                            " </div>" +
                            "</div>" +
                            "<div class='row' style='margin-top:10px'>" +
                            "  <div class='col-md-1'></div>" +
                            "  <div class='col-md-10'><input type='text' name='' class='form-control' id='a" + obj[i].uid + "'  placeholder='评论' style='display:none'></div>" +
                            " <div class='col-md-1'><button type='button' class='btn btn-primary' id='aa" + obj[i].uid + "' style='display:none' onclick='click4(" + obj[i].tid + ")'>发布</button></div>" +
                            "</div>" +
                            "</div>" +
                            "</div>" +
                            "</div>";
                        load_pl(obj[i].tid);
                        load_dianzan(obj[i].tid);
                    }
                    $("#ajax1").html(str1);
                    if (${param.fw_id!=user.uid?true:false}) {
                        for (var i = 0; i < obj.length; i++) {
                            $("#sc1" + obj[i].tid).css("display", "none");
                        }
                    }


                }
                else {
                    $("#ajax1").html("<div class='row'><div class='col-md-3'></div><div class='col-md-3'><hr style='background-color:green;height:1px'>" +
                        "<div style='font-size:30px'>暂时没有发布说说~~" +
                        "</div></div></div>");
                }
            }
        });

    }


    function click_write() {
        var usn = $("#textarea1").val();
        if (usn != null && usn.length != 0) {
            $.ajax({
                type: "POST",      //传输方式
                url: "talkPosted",           //地址
                data: {            //传递的参数
                    infor: usn
                },
                success: function (obj) {    //当回调时执行
                    var str1 = "";
                    obj = obj.data;
                    if (obj != null && obj.length != 0) {
                        for (var i = 0; i < obj.length; i++) {
                            str1 += "<div class='row' style='height:50px'></div><div class='row' style='color:black;'><div class='row'><div class='col-md-3'></div><div class='col-md-5' style='border:0px solid; background-image: url(img/talk_1.png);border-radius:5px 5px 5px 5px;'><div class='row'>" +
                                "<div class='col-md-2'>" +
                                "<span id='span1' style='font-size:25px'>" + obj[i].usname + "</span>" +
                                "</div>" +
                                "<div class='col-md-5' style='padding-top:15px'>" +
                                "	<span id='span2'>" + obj[i].time + "</span>" +
                                "</div>" +
                                "</div>" +
                                "<div class='row' style='height:20px'></div>" +
                                "<div class='row'>" +
                                "  <div class='col-md-1'></div>" +
                                " <div class='col-md-5' id='span3'>" + obj[i].infor + "</div>" +
                                " <div class='col-md-6' ></div>" +
                                " </div>" +
                                "<div class='row' style='height:20px'></div>" +
                                "<div class='row'>" +
                                " <div class='col-md-9' id='dianzan" + obj[i].tid + "'></div>" +
                                " <div class='col-md-1'>" +
                                "   <button type='button' id='sc1" + obj[i].tid + "' class='btn btn-warning' ><a href='controller?task=delect_talk&tid=" + obj[i].uid + "&uid=${session_.uid}' style='color:black;text-decoration:none'>删除</a></button>" +
                                " </div>" +
                                " <div class='col-md-1'>" +
                                "   <button type='button' class='btn btn-success' id='dianzan1" + obj[i].tid + "' onclick='clickdianzan(" + obj[i].tid + ")'>点赞</button>" +
                                " </div>" +
                                " <div class='col-md-1'>" +
                                "      <button type='button' class='btn btn-info' onclick='click2(" + obj[i].uid + ")'   >评论</button>" +
                                " </div>" +
                                "</div>" +
                                "<div class='row'>" +
                                " <div class='col-md-9'>" +
                                " <div id='aaa" + obj[i].uid + "'></div>" +
                                " </div>" +
                                "</div>" +
                                "<div class='row' style='margin-top:10px'>" +
                                "  <div class='col-md-1'></div>" +
                                "  <div class='col-md-10'><input type='text' name='' class='form-control' id='a" + obj[i].uid + "'  placeholder='评论' style='display:none'></div>" +
                                " <div class='col-md-1'><button type='button' class='btn btn-primary' id='aa" + obj[i].uid + "' style='display:none' onclick='click4(" + obj[i].tid + ")'>发布</button></div>" +
                                "</div>" +
                                "</div>" +
                                "</div>" +
                                "</div>";
                            load_pl(obj[i].tid);
                            load_dianzan(obj[i].tid);
                        }
                        $("#ajax1").html(str1);
                        if (${param.fw_id!=user.uid?true:false}) {
                            for (var i = 0; i < obj.length; i++) {
                                $("#sc1" + obj[i].tid).css("display", "none");
                            }
                        }
                    }
                    else {
                        $("#ajax1").html("<div class='row'><div class='col-md-3'></div><div class='col-md-3'><hr style='background-color:green;height:1px'>" +
                            "<div style='font-size:30px'>暂时没有发布说说~~" +
                            "</div></div></div>");
                    }
                    $("#textarea1").val("");
                }
            })
            ;
        }
    }
    function click2(id) {
        $("#a" + id).fadeIn(500);
        $("#aa" + id).fadeIn(500);
    }
    function load_pl(id) {
        $.ajax({
            type: "POST",      //传输方式
            url: "ajaxServlet",           //地址
            data: {            //传递的参数
                task: "talk_write",
                tid: id
            },
            success: function (str) {
                var obj = $.parseJSON(str);   //解析后台传过来的sql
                if (obj != null && obj.length != 0) {
                    var str1 = "";
                    for (var i = 0; i < obj.length; i++) {
                        str1 += "<div id='aaaa" + obj[i].pid + "'>" + obj[i].name + ":&nbsp;&nbsp;&nbsp;" + obj[i].infor + "<button type='button' id='scpl" + obj[i].pid + "' class='btn btn-default btn-xs' onclick='click5(" + obj[i].pid + ")' style='float:right'>删除</button>" + "</div>" + "<div style='height:10px'></div>";
                    }
                    $("#aaa" + id).html(str1);

                    if (${param.fw_id!=session_.uid?true:false}) {
                        for (var i = 0; i < obj.length; i++)
                            $("#scpl" + obj[i].pid).css("display", "none");
                    }
                }
            }
        })

        $("#a" + id).fadeOut(500);
        $("#aa" + id).fadeOut(500);
    }
    function load_dianzan(tid) {
        $.ajax({
            type: "POST",      //传输方式
            url: "getDianZan",           //地址
            data: {            //传递的参数
                tid: tid
            },
            success: function (obj) {
                if (obj.code == 0) {
                    var str = "";
                    var s = 0;
                    for (var i = 0; i < obj.data.length; i++) {
                        if (obj.data[i].username == "${user.username}") {
                            s++;
                            $("#dianzan1" + tid).html("已赞");
                        }
                        if (obj.data.length == i + 1) {
                            str += obj.data[i].username + "已点赞。";
                        } else {
                            str += obj.data[i].username + ",";
                        }
                    }
                    if (s == 0) {
                        $("#dianzan1" + tid).html("点赞");
                    }
                    if (str == "") {
                        $("#dianzan" + tid).css("color", "burlywood");
                        $("#dianzan" + tid).html("当前没有人点赞");
                        return;
                    }
                    $("#dianzan" + tid).css("color", "burlywood");
                    $("#dianzan" + tid).html(str);
                } else {
                }
            }
        })
    }
    function clickdianzan(tid) {
        var index = 0;
        if ($("#dianzan1" + tid).html() == "已赞") {
            index = 1;
        }

        $.ajax({
            type: "POST",      //传输方式
            url: "clickDianZan",           //地址
            data: {            //传递的参数
                tid: tid,
                username: "${user.username}",
                index: index
            },
            success: function (obj) {
                if (obj.code == 0) {
                    var str = "";
                    var s = 0;
                    for (var i = 0; i < obj.data.length; i++) {
                        if (obj.data[i].username == "${user.username}") {
                            s++;
                            $("#dianzan1" + tid).html("已赞");
                        }
                        if (obj.data.length == i + 1) {
                            str += obj.data[i].username + "已点赞。";
                        } else {
                            str += obj.data[i].username + ",";
                        }
                    }
                    if (s == 0) {
                        $("#dianzan1" + tid).html("点赞");
                    }
                    if (str == "") {
                        $("#dianzan" + tid).css("color", "burlywood");
                        $("#dianzan" + tid).html("当前没有人点赞");
                        return;
                    }
                    $("#dianzan" + tid).css("color", "burlywood");
                    $("#dianzan" + tid).html(str);
                } else {
                }
            }
        })

    }
    function click4(id) {
        var inf = $("#a" + id).val();
        if (inf != null && inf.length != 0) {
            $.ajax({
                type: "POST",      //传输方式
                url: "ajaxServlet",           //地址
                data: {            //传递的参数
                    task: "talk_write",
                    infor: inf,
                    tid: id
                },
                success: function (str) {
                    var obj = $.parseJSON(str);   //解析后台传过来的sql
                    if (obj != null && obj.length != 0) {
                        var str1 = "";
                        for (var i = 0; i < obj.length; i++) {
                            str1 += "<div id='aaaa" + obj[i].pid + "'>" + obj[i].name + ":&nbsp;&nbsp;&nbsp;" + obj[i].infor + "<button type='button' id='scpl" + obj[i].pid + "' class='btn btn-default btn-xs' onclick='click5(" + obj[i].pid + ")' style='float:right'>删除</button>" + "</div>" + "<div style='height:10px'></div>";
                        }
                        $("#aaa" + id).html(str1);
                        if (${param.fw_id!=session_.uid?true:false}) {
                            for (var i = 0; i < obj.length; i++)
                                $("#scpl" + obj[i].pid).css("display", "none");
                        }
                    }
                }
            })
            $("#a" + id).fadeOut(500);
            $("#a" + id).val("");
            $("#aa" + id).fadeOut(500);
        }
        else {
            $("#a" + id).fadeOut(500);
            $("#a" + id).val("");
            $("#aa" + id).fadeOut(500);
        }


    }

    function click5(id) {

        $.ajax({
            type: "POST",      //传输方式
            url: "ajaxServlet",           //地址
            data: {            //传递的参数
                task: "delect_pl",
                pid: id
            },
            success: function (html) {
                var obj = $.parseJSON(html);
                if (obj != null && obj.isok1 == true) {
                    $("#aaaa" + id).css("display", "none");
                }


            }
        })
    }

</script>
</html>
