<%@ page language="java" pageEncoding="UTF-8" %>

<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="http://localhost/zhuti/img/logo.ico" type="image/x-icon">
    <link rel="shortcut icon" href="http://localhost/img/Headphones.png" type="image/x-icon">
    <title>木东驿站_关于</title>
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

    <link rel="stylesheet" id="kotha-responsive-css1" href="../css/guangchang/木东驿站_files/aa.css" type="text/css"
          media="all">
    <style type="text/css">
        * {
            cursor: url("../img/cur/1.cur"), auto;
        }

        a:hover, font:hover, p:hover, li:hover, h4:hover {
            cursor: url("../img/cur/15.cur"), auto;
        }

        #mumu:hover {
            cursor: url("../img/cur/05.cur"), auto;
        }
    </style>
</head>
<body class="home blog custom-background" onload="yizhanload()">
<!--头部-->
<%@ include file="import/head_guanyu.jsp" %>
<div class="st-content">
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <div id="primary" class="content-area">
                    <main id="main" class="site-main" role="main">
                        <div class="padding-content white-color">
                            <ul>
                                <li onclick="fabiaoshiji()"><strong><font size="5px">驿站事记</font></strong>【记录一下开发的进度和问题】
                                </li>
                                <div id="fabiaoshiji" style="display: none">
                                    <textarea class="OwO-textarea"
                                              id="dashijiwenbenyu"></textarea>
                                    <button onclick="fabuclick()">发布</button>
                                </div>
                            </ul>
                        </div>
                        <div class="padding-content white-color margin-top-40">
                            <div class="archives" id="yizhanxianshi">

                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <!--右侧-->
            <%@ include file="import/right_guanyu.jsp" %>
        </div>
    </div>
</div>


<div class="copy-right-text text-center">
    <p><span id="span_dt_dt" style="display: none"></span>　</p>
</div>
<script src="../css/zhuye/zhuye_files/hm.js.下载"></script>
<script type="text/javascript" src="../css/zhuye/zhuye_files/jquery.js"></script>
<script type="text/javascript" src="../css/zhuye/zhuye_files/jquery-migrate.min.js"></script>
<script type="text/javascript" src="../css/zhuye/zhuye_files/bootstrap.min.js"></script>
<script type="text/javascript" src="../css/zhuye/zhuye_files/jquery.slicknav.min.js"></script>
<script type="text/javascript" src="../css/zhuye/zhuye_files/jquery.fitvids.min.js"></script>
<script type="text/javascript" src="../css/zhuye/zhuye_files/MathJax.js"></script>
<script type="text/javascript" src="../css/zhuye/zhuye_files/scripts.js"></script>


<script type="text/javascript" src="../js/guanyu/guanyu.js"></script>

</body>

</html>
