<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page language="java" pageEncoding="UTF-8" %>


<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>首页</title>
    <link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="../js/jquery-2.1.0.js"></script>
    <style>
        #div1 {
            padding-left: 60px;
            font-size: 20px;
            color: white;
            height: 55px;
        }

        #div2 {
            font-size: 20px;
            color: snow;
            height: 55px;
        }

        #div3 {
            padding-left: 69px;
            font-size: 18px;
            color: white;
            height: 55px;
        }

        #body1 {
            background-image: url('../img/index_bg1.jpg');

        }

        #div5 {
            position: absolute;
            left: 700px;
            margin-top: -90px;
        }
    </style>

</head>

<body id="body1">
<div style="margin-top: 250px;margin-left: 700px" ;>

    <div id="div4" style="padding-left:1500px">
        <div style="padding-left: 40px;font-size: 35px;color: white;height: 115px">
            欢迎来到木东驿站
        </div>
        <div style="height: 50px;display: none"></div>
        <div id="div1"><a id="div2" href="login.jsp">点击这里</a>，我们畅所欲言。</div>
    </div>
    <div id="div5" style="margin-left: -1000px"><img src="../img/index_bg2.png"></div>
    <div id="div3" style="margin-left: -10px">
        <div style="display:none" id="dd1">N</div>
        <div style="display:none;margin-left: -4px" id="dd2">e</div>
        <div style="display:none;margin-left: -4px" id="dd3">v</div>
        <div style="display:none;margin-left: -4px" id="dd4">e</div>
        <div style="display:none;margin-left: -4px" id="dd5">r</div>
        <div style="display:none;margin-left: -4px" id="dd6">&nbsp;q</div>
        <div style="display:none;margin-left: -4px" id="dd7">u</div>
        <div style="display:none;margin-left: -4px" id="dd8">i</div>
        <div style="display:none;margin-left: -4px" id="dd9">t</div>
        <div style="display:none;margin-left: -4px" id="dd10">,</div>
        <div style="display:none;margin-left: -4px" id="dd11">k</div>
        <div style="display:none;margin-left: -4px" id="dd12">e</div>
        <div style="display:none;margin-left: -4px" id="dd13">e</div>
        <div style="display:none;margin-left: -4px" id="dd14">p</div>
        <div style="display:none;margin-left: -4px" id="dd15">&nbsp;u</div>
        <div style="display:none;margin-left: -4px" id="dd16">p</div>
        <div style="display:none;margin-left: -4px" id="dd18">&nbsp;w</div>
        <div style="display:none;margin-left: -4px" id="dd19">i</div>
        <div style="display:none;margin-left: -4px" id="dd20">t</div>
        <div style="display:none;margin-left: -4px" id="dd21">h</div>
        <div style="display:none;margin-left: -4px" id="dd22">&nbsp;i</div>
        <div style="display:none;margin-left: -4px" id="dd23">t</div>
    </div>


</div>

</body>
<script>

    window.onload = function () {
        $("#div4").animate({paddingLeft: '0px'}, 1000);
        $("#div5").animate({marginLeft: '0px'}, 1000);
        // $("#div5").fadeIn(1000);
        setTimeout("pause1(" + 1 + ")", 1000);

    }
    function pause1(i) {

        $("#dd" + i).fadeIn(200);
        $("#dd" + i).css("display", "inline")
        if (i == 30) {
            return;
        }
        setTimeout("pause1(" + (i + 1) + ")", 150);
    }


</script>

</html>