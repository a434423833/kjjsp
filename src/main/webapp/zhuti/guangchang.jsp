<%@ page language="java" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <link rel="pingback" href="https://www.dreamwings.cn/xmlrpc.php">
    <link rel="shortcut icon" href="https://static.dreamwings.cn/wp-content/uploads/2016/08/favicon32.ico">
    <link rel="apple-touch-icon"
          href="https://static.dreamwings.cn/wp-content/uploads/2016/08/Headphones_102px_1197694_easyicon.net_.png">
    <title>木东驿站</title>
    <link rel='dns-prefetch' href='//www.dreamwings.cn'/>
    <link rel='dns-prefetch' href='//cdn.bootcss.com'/>
    <link rel="alternate" type="application/rss+xml" title="Dreamwings &raquo; Feed"
          href="https://www.dreamwings.cn/feed"/>
    <link rel="alternate" type="application/rss+xml" title="Dreamwings &raquo; 评论Feed"
          href="https://www.dreamwings.cn/comments/feed"/>
    <link rel='stylesheet' id='bootstrap-css-css'
          href='https://www.dreamwings.cn/wp-content/themes/kotha/assets/css/bootstrap.min.css?ver=3.3.6'
          type='text/css' media='all'/>
    <link rel='stylesheet' id='font-awesome-css-css'
          href='https://www.dreamwings.cn/wp-content/themes/kotha/assets/css/font-awesome.min.css?ver=4.4.0'
          type='text/css' media='all'/>
    <link rel='stylesheet' id='slicknav-css-css'
          href='https://www.dreamwings.cn/wp-content/themes/kotha/assets/css/slicknav.min.css' type='text/css'
          media='all'/>
    <link rel='stylesheet' id='kotha-stylesheet-css'
          href='https://www.dreamwings.cn/wp-content/themes/kotha/style.css?ver=4.8.3' type='text/css' media='all'/>
    <link rel='stylesheet' id='kotha-responsive-css'
          href='https://www.dreamwings.cn/wp-content/themes/kotha/assets/css/responsive.min.css' type='text/css'
          media='all'/>
    <script type='text/javascript' src='https://www.dreamwings.cn/wp-includes/js/jquery/jquery.js?ver=1.12.4'></script>
    <script type='text/javascript'
            src='https://www.dreamwings.cn/wp-includes/js/jquery/jquery-migrate.min.js?ver=1.4.1'></script>
    <link rel="stylesheet" href="../css/zhuti.css">
    <script type="text/javascript" src="https://api.dreamwings.cn/siyue/?encode=js"></script>
    <script type="text/javascript" src="../js/guangchang/guangchang.js"></script>
    <script>var _hmt = _hmt || [];
    (function () {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?e7d1eda4edffde7969aadb0cb95ae095";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s)
    })();</script>
</head>
<body class="home blog custom-background" onload="load_liuyan()">
<!--头部-->
<%@ include file="import/head.jsp" %>

<div class="st-content">
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <div id="primary" class="content-area">
                    <span style="color: #75baff">在这里你可以想说的都说出来，但是要注意言论哦！发言不规范的会被关进小黑屋的!</span>
                    <span style="color: #75baff;float: right;margin-top: 25px">--来自弱弱的作者</span>
                    <main id="main" class="site-main" role="main" style="margin-top: 30px">
                        <%@ include file="import/guangchangliuyan.jsp" %>
                    </main>
                </div>
            </div>

            <!--右侧-->
            <%@ include file="import/right_gc.jsp" %>
        </div>
    </div>
</div>
<script type="text/javascript">
    var isindex = true;
    var title = "";
    var visitor = "游客";
</script>
<script type="text/javascript" src="https://www.dreamwings.cn/wp-content/themes/kotha/js/spig.js"></script>
<div id="spig" class="spig">
    <div id="message">加载中……</div>
    <div id="mumu" class="mumu"></div>
</div>

<script>setTimeout("getkoto()", 1000);
var t;

function echokoto(result) {
    document.getElementById("hitokoto").innerHTML = eval(result).hitokoto;
}</script>

<div id="toploading"></div>
<div id="loader-wrapper">
    <div id="loader"></div>
</div>
<div class="sidebar_wo">
    <a href="https://www.kall.me/" title="另一个世界的我" target="_blank"><img
            src="https://static.dreamwings.cn/wp-content/uploads/2016/07/limua.png" title="另一个世界的我"
            onmouseover="this.src='https://static.dreamwings.cn/wp-content/uploads/2016/07/limub.png'"
            onmouseout="this.src='https://static.dreamwings.cn/wp-content/uploads/2016/07/limua.png'"/></a>
</div>
<div id="mememe"></div>
<footer id="footer">
    <div class="container">
        <div class="row">
            <div class="footer-top">
</footer>


<script type='text/javascript'
        src='https://www.dreamwings.cn/wp-content/themes/kotha/assets/js/bootstrap.min.js?ver=3.3.6'></script>
<script type='text/javascript'
        src='https://www.dreamwings.cn/wp-content/themes/kotha/assets/js/jquery.slicknav.min.js'></script>
<script type='text/javascript'
        src='https://www.dreamwings.cn/wp-content/themes/kotha/assets/js/jquery.fitvids.min.js?ver=1.1'></script>
<script type='text/javascript'
        src='https://cdn.bootcss.com/mathjax/2.7.1/MathJax.js?config=TeX-AMS-MML_HTMLorMML'></script>
<script type='text/javascript' src='https://www.dreamwings.cn/wp-content/themes/kotha/assets/js/scripts.js'></script>
</body>
</html>
