<%@ page language="java" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="http://localhost/zhuti/img/logo.ico" type="image/x-icon">
    <link rel="shortcut icon" href="http://localhost/img/Headphones.png" type="image/x-icon">
    <title>木东驿站</title>
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
    <script type="text/javascript" src="../css/guangchang/木东驿站_files/jquery.js"></script>
    <script type="text/javascript" src="../css/guangchang/木东驿站_files/jquery-migrate.min.js"></script>
    <link rel="stylesheet" href="../css/guangchang/木东驿站_files/zhuti.css">
    <script type="text/javascript">
        var uid = "${sessionScope.user.uid}";
        var username = "${sessionScope.user.username}";
        var thisId;
    </script>
    <script type="text/javascript" src="../js/guangchang/guangchang.js"></script>
    <link rel="stylesheet" id="kotha-responsive-css1" href="../css/guangchang/木东驿站_files/aa.css" type="text/css"
          media="all">
    <style type="text/css">
        * {
            cursor: url("../img/cur/1.cur"), auto;
        }

        a:hover, font:hover, p:hover, li:hover, input:hover {
            cursor: url("../img/cur/15.cur"), auto;
        }

        #mumu:hover {
            cursor: url("../img/cur/05.cur"), auto;
        }

    </style>
</head>
<body class="home blog custom-background" onload="load_liuyan()">
<!--头部-->
<%@ include file="import/head_guangchang.jsp" %>

<div class="st-content">
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
                            <article id="post-2373" class="post-2373 page type-page status-publish hentry">
                                <div class="padding-content">
                                    <header class="entry-header">
                                        <h1 class="entry-title">2048(beta)</h1></header>
                                    <div class="entry-content">
                                        <link href="../css/game/2048/2048.css"
                                              rel="stylesheet" type="text/css">
                                        &nbsp;<br>
                                        &nbsp;<br>
                                        &nbsp;<br>
                                        &nbsp;<br>
                                        <center><p></p>
                                            <div class="container">
                                                <div class="above-game">
                                                    <a class="restart-button">New</a>
                                                </div>
                                                <div class="game-container">
                                                    <div class="game-message">
                                                        <div class="lower">
                                                            <a class="keep-playing-button">Keep going</a><br>
                                                            <a class="retry-button">Try again</a>
                                                        </div>
                                                    </div>
                                                    <div class="grid-container">
                                                        <div class="grid-row">
                                                            <div class="grid-cell"></div>
                                                            <div class="grid-cell"></div>
                                                            <div class="grid-cell"></div>
                                                            <div class="grid-cell"></div>
                                                        </div>
                                                        <div class="grid-row">
                                                            <div class="grid-cell"></div>
                                                            <div class="grid-cell"></div>
                                                            <div class="grid-cell"></div>
                                                            <div class="grid-cell"></div>
                                                        </div>
                                                        <div class="grid-row">
                                                            <div class="grid-cell"></div>
                                                            <div class="grid-cell"></div>
                                                            <div class="grid-cell"></div>
                                                            <div class="grid-cell"></div>
                                                        </div>
                                                        <div class="grid-row">
                                                            <div class="grid-cell"></div>
                                                            <div class="grid-cell"></div>
                                                            <div class="grid-cell"></div>
                                                            <div class="grid-cell"></div>
                                                        </div>
                                                    </div>
                                                    <div class="tile-container">
                                                        <div class="tile tile-4 tile-position-1-4 tile-new">
                                                            <div class="tile-inner">4</div>
                                                        </div>
                                                        <div class="tile tile-4 tile-position-2-4 tile-new">
                                                            <div class="tile-inner">4</div>
                                                        </div>
                                                        <div class="tile tile-2 tile-position-3-4 tile-new">
                                                            <div class="tile-inner">2</div>
                                                        </div>
                                                        <div class="tile tile-2 tile-position-4-1 tile-new">
                                                            <div class="tile-inner">2</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p></p></center>
                                        <br>
                                        &nbsp;<br>
                                        &nbsp;<br>
                                        &nbsp;<br>
                                        &nbsp;<br>
                                        <script src="../css/game/2048/2048_fb.js"></script>
                                        <p></p>
                                    </div>
                                    <footer class="entry-footer">
                                    </footer>
                                </div>
                            </article>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
<script type="text/javascript">
    var isindex = true;
    var title = "";
    var visitor = "游客";
</script>


<script type="text/javascript" src="../css/guangchang/木东驿站_files/spig.js"></script>
<script type="text/javascript" src="../css/guangchang/木东驿站_files/scripts.js"></script>


</body>

</html>
