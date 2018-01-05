<%@ page language="java" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="img/logo.ico" type="image/x-icon"/>
    <link rel="shortcut icon"
          href="../img/Headphones.png"
          type="image/x-icon"/>
    <title>木东驿站</title>
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
    <link rel="stylesheet" href="../css/guangchang/zhuti.css">
    <script type="text/javascript" src="../js/guangchang/guangchang.js"></script>

</head>
<body class="home blog custom-background" onload="load_liuyan()">
<!--头部-->
<%@ include file="import/head_guangchang.jsp" %>

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
<script type='text/javascript' src='https://www.dreamwings.cn/wp-content/themes/kotha/assets/js/scripts.js'></script>
<div id="spig" class="spig">
    <div id="message">加载中……</div>
    <div id="mumu" class="mumu"></div>
</div>


<script type="text/javascript">
    var uid = "${user.uid}";
</script>
</body>

</html>
