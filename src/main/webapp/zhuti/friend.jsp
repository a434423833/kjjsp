<%@ page language="java" pageEncoding="UTF-8" %>

<!DOCTYPE html>
<!-- saved from url=(0032)http://localhost/zhuti/zhuye.jsp -->
<html lang="zh-CN">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="http://localhost/zhuti/img/logo.ico" type="image/x-icon">
    <link rel="shortcut icon" href="http://localhost/img/Headphones.png" type="image/x-icon">
    <title>驿站会员</title>
    <link rel="stylesheet" id="bootstrap-css-css" href="../css/zhuye/zhuye_files/bootstrap.min.css" type="text/css"
          media="all">
    <link rel="stylesheet" id="font-awesome-css-css" href="../css/zhuye/zhuye_files/font-awesome.min.css"
          type="text/css"
          media="all">
    <link rel="stylesheet" id="slicknav-css-css" href="../css/zhuye/zhuye_files/slicknav.min.css" type="text/css"
          media="all">
    <link rel="stylesheet" id="kotha-stylesheet-css" href="../css/zhuye/zhuye_files/style.css" type="text/css"
          media="all">
    <link rel="stylesheet" id="kotha-responsive-css" href="../css/zhuye/zhuye_files/responsive.min.css" type="text/css"
          media="all">
    <script src="../css/zhuye/zhuye_files/hm.js"></script>
    <script type="text/javascript" src="../css/zhuye/zhuye_files/jquery.js"></script>
    <script type="text/javascript" src="../css/zhuye/zhuye_files/jquery-migrate.min.js"></script>
    <link rel="stylesheet" href="../css/zhuye/zhuye_files/zhuti.css">
    <link rel="stylesheet" href="../css/zhuye/zhuye_files/zhuye.css">

    <style type="text/css">
        * {
            cursor: url("../img/cur/1.cur"), auto;
        }

        a:hover, font:hover, p:hover, li:hover, img:hover, span:hover {
            cursor: url("../img/cur/15.cur"), auto;
        }

        #mumu:hover {
            cursor: url("../img/cur/05.cur"), auto;
        }

    </style>
<body class="home blog custom-background" onload="friendLoad()">
<!--头部-->
<%@ include file="import/head_friend.jsp" %>
<div class="st-content">
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <style>.col-md-8 {
                    width: 100%;
                }

                .blog_sidebar {
                    display: none;
                }</style>
                <div id="primary" class="content-area">
                    <main id="main" class="site-main" role="main">
                        <div class="padding-content white-color">
                            <h1 style="font-weight:600;">能在这个驿站遇到也不容易啊</h1><br>
                            <br>
                            在这个庞大的互联网，形形色色的网站，我们就不独善其中，静静的呆在一角就好……
                            <br><br>
                            既然你我能这样相遇，那就多待一会吧😊
                            <br>
                            <hr>
                            <blockquote id="friendInfor">
                                <%--ajax显示--%>
                            </blockquote>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript"
        src="../js/friend/friend.js"></script>

<script type="text/javascript">
    var isindex = true;
    var title = "";
    var visitor = "游客";
</script>
<script type="text/javascript"
        src="../css/guangchang/木东驿站_files/spig.js"></script>

<div id="spig" class="spig">
    <div id="message">加载能量中..</div>
    <div id="mumu" class="mumu"></div>
</div>
<script type="text/javascript" src="../css/zhuye/zhuye_files/MathJax.js"></script>
<script type="text/javascript" src="../css/zhuye/zhuye_files/scripts.js"></script>
<script type="text/javascript">
    setTimeout("showMessage1('我也是个小会员哦')", 1000)
    function showMessage1(infor) {
        $("#message").html(infor)
    }
</script>
</body>
</html>


