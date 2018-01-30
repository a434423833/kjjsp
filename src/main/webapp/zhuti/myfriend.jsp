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
    <script src="https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

    <link rel="stylesheet" id="kotha-responsive-css1" href="../css/guangchang/木东驿站_files/aa.css" type="text/css"
          media="all">
    <script type="text/javascript">
        var uid = "${sessionScope.user.uid}";
        var myfile = "${sessionScope.user.file}"
    </script>
    <link rel="stylesheet" href="../css/myfriend/myfriend.css">
    <style type="text/css">
        * {
            cursor: url("../img/cur/1.cur"), auto;
        }

        a:hover, font:hover, p:hover, li:hover, h4:hover, .iconfont:hover, span:hover, strong:hover, em:hover {
            cursor: url("../img/cur/15.cur"), auto;
        }

    </style>
</head>
<body class="home blog custom-background" onload="bodyload()">
<!--头部-->
<%@ include file="import/head_myfriend.jsp" %>
<div class="st-content">
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <div id="primary" class="content-area">
                    <main id="main" class="site-main" role="main">
                        <div class="row" style="height: 80px">
                            <div class="col-sm-8"></div>
                            <div class="col-sm-4">
                                <div class="page-header navbar ">
                                    <div class="top-menu">
                                        <ul class="nav navbar-nav pull-right">
                                            <li class="dropdown dropdown-extended dropdown-notification"
                                                id="header_notification_bar">
                                                <a href="javascript:" class="dropdown-toggle hover-initialized"
                                                   onMouseOver="xiaoxitixing()" onMouseOut="xiaoxitixing1()">
                                                    <i class="iconfont">&#xe62d;</i>
                                                    <span class="badge badge-default " id="friendcount"></span>
                                                </a>
                                                <ul class="dropdown-menu ng-scope" onMouseOver="xiaoxitixing_show()"
                                                    onMouseOut="xiaoxitixing1()" id="xiaoxitixing"
                                                    style="margin-top: -8px">
                                                    <li class="external">
                                                        <h3><span class="bold ng-binding">好友申请消息</span> 通知</h3>
                                                    </li>
                                                    <li>
                                                        <ul class="readers-list1" id="tongzhilist">
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <link href="../css/myfriend/供应链后台_files/layout.css" rel="stylesheet" type="text/css">
                                <link href="../css/myfriend/供应链后台_files/darkblue.css" rel="stylesheet" type="text/css"
                                      id="style_color">
                                <link href="../css/myfriend/供应链后台_files/bootstrap.min.css" rel="stylesheet"
                                      type="text/css">
                                <link href="../css/myfriend/供应链后台_files/custom(1).css" rel="stylesheet" type="text/css">
                                <link href="../css/myfriend/供应链后台_files/font-awesome.min.css" rel="stylesheet"
                                      type="text/css">
                                <link href="../css/myfriend/供应链后台_files/components-rounded.css" id="style_components"
                                      rel="stylesheet"
                                      type="text/css">
                            </div>
                        </div>
                        <link rel="stylesheet"
                              href="../css/bootstrap.min.css">
                        <script src="../js/jquery.min.js"></script>
                        <script src="../js/bootstrap.min.js"></script>

                        <div class="padding-content white-color" id="zhutikuang">
                            <div id="showaddname" style="display: none">
                                <h3>添加好友<a href="javascript:void(0);" onclick="noneaddname()">(点击隐藏)</a></h3>
                                <li>请输入好友名称:<input type="text" id="friendname"/></li>
                                <ul class="readers-list1" id="addfriendshow">

                                </ul>
                            </div>
                            <br>


                            <h3>本周亲密度排行 TOP</h3>
                            <ul class="readers-list" id="toplist">

                            </ul>
                            <br>
                            <h3>ALL</h3>
                            <ul class="readers-list" id="alllist">

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
