<%@ page language="java" pageEncoding="UTF-8" %>

<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="http://localhost/zhuti/img/logo.ico" type="image/x-icon">
    <link rel="shortcut icon" href="http://localhost/img/Headphones.png" type="image/x-icon">
    <title>我的好友~</title>
    <link rel="stylesheet" id="bootstrap-css-css" href="../css/guangchang/木东驿站_files/bootstrap.min.css" type="text/css"
          media="all">
    <link rel="stylesheet" id="font-awesome-css-css" href="../css/guangchang/木东驿站_files/font-awesome.min.css"
          type="text/css"
          media="all">
    <link rel="stylesheet" id="slicknav-css-css" href="../css/guangchang/木东驿站_files/slicknav.min.css" type="text/css"
          media="all">
    <link rel="stylesheet" id="kotha-stylesheet-css" href="../css/guangchang/木东驿站_files/style.css" type="text/css"
          media="all">
    <link rel="stylesheet" id="kotha-responsive-css" href="../css/guangchang/木东驿站_files/responsive.min.css"
          type="text/css" media="all">

    <link rel="stylesheet" href="../css/guangchang/木东驿站_files/zhuti.css">
    <link rel="stylesheet" href="../css/iconfont.css">

    <link rel="stylesheet" id="kotha-responsive-css1" href="../css/guangchang/木东驿站_files/aa.css" type="text/css"
          media="all">
    <script type="text/javascript">
        var uid = "${sessionScope.user.uid}";
    </script>
    <style type="text/css">
        * {
            cursor: url("../img/cur/1.cur"), auto;
        }

        a:hover, font:hover, p:hover, li:hover, h4:hover {
            cursor: url("../img/cur/15.cur"), auto;
        }

    </style>
</head>
<body class="home blog custom-background">
<!--头部-->
<%@ include file="import/head_myfriend.jsp" %>
<div class="st-content">
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <div id="primary" class="content-area">
                    <main id="main" class="site-main" role="main">
                        <div class="padding-content white-color">
                            <div id="showaddname" style="display: none">
                                <h3>添加好友<a href="javascript:void(0);" onclick="noneaddname()">(点击隐藏)</a></h3>
                                <li>请输入好友名称:<input type="text" id="friendname"/></li>
                                <ul class="readers-list" id="addfriendshow">

                                </ul>
                            </div>
                            <br>


                            <h3>本周评论排行 TOP</h3>
                            <ul class="readers-list">
                                <li><a target="_blank" href="" rel="nofollow"><img
                                        src="https://static.dreamwings.cn/wp-content/themes/kotha/images/avatar/(89).jpg"
                                        alt=><em>一页图案书</em> <strong>+1</strong></br></a></li>
                                <li><a target="_blank" href="https://5ime.cn" rel="nofollow"><img
                                        src="https://static.dreamwings.cn/wp-content/themes/kotha/images/avatar/(122).jpg"
                                        alt=><em>I am I</em> <strong>+1</strong></br></a></li>
                                <li><a target="_blank" href="http://www.zhisou.cc/" rel="nofollow"><img
                                        src="https://static.dreamwings.cn/wp-content/themes/kotha/images/avatar/(30).jpg"
                                        alt=><em>来语直搜</em> <strong>+1</strong></br></a></li>
                            </ul>
                            <br>
                            <h3>ALL</h3>
                            <ul class="readers-list">
                                <li><a target="_blank" href="http://t.qq.com/yan838359518" rel="nofollow"><img
                                        src="https://static.dreamwings.cn/wp-content/themes/kotha/images/avatar/(130).jpg"
                                        alt=></img><em>闫柯苹</em> <strong>+91</strong></br></a></li>
                            </ul>
                        </div>
                    </main>
                </div>
            </div>

            <!--右侧-->
            <%@ include file="import/right_myfriend.jsp" %>
        </div>
    </div>
</div>
<script type="text/javascript" src="../js/jquery-2.1.0.js"></script>
<script type="text/javascript" src="../js/myfriend/myfriend.js"></script>

<%--
<div class="copy-right-text text-center">
    <p><span id="span_dt_dt" style="display: none"></span>　</p>
</div>
<script src="../css/zhuye/zhuye_files/hm.js"></script>
<script type="text/javascript" src="../css/zhuye/zhuye_files/jquery.js"></script>
<script type="text/javascript" src="../css/zhuye/zhuye_files/jquery-migrate.min.js"></script>
<script type="text/javascript" src="../css/zhuye/zhuye_files/bootstrap.min.js"></script>
<script type="text/javascript" src="../css/zhuye/zhuye_files/jquery.slicknav.min.js"></script>
<script type="text/javascript" src="../css/zhuye/zhuye_files/jquery.fitvids.min.js"></script>
<script type="text/javascript" src="../css/zhuye/zhuye_files/MathJax.js"></script>
<script type="text/javascript" src="../css/zhuye/zhuye_files/scripts.js"></script>
--%>

</body>

</html>
