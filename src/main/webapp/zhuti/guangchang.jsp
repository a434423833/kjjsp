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
    <script type="text/javascript" src="../css/guangchang/木东驿站_files/jquery.js.下载"></script>
    <script type="text/javascript" src="../css/guangchang/木东驿站_files/jquery-migrate.min.js.下载"></script>
    <link rel="stylesheet" href="../css/guangchang/木东驿站_files/zhuti.css">
    <script type="text/javascript">
        var uid = "${user.uid}";
        var thisId;
    </script>
    <script type="text/javascript" src="../js/guangchang/guangchang.js"></script>
    <script type="text/javascript" src="../js/guangchang/guangchang_gcbiaoqing.js"></script>
    <link rel="stylesheet" id="kotha-responsive-css1" href="../css/guangchang/木东驿站_files/aa.css" type="text/css"
          media="all">
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
<script type="text/javascript" src="../css/guangchang/木东驿站_files/spig.js.下载"></script>
<script type="text/javascript" src="../css/guangchang/木东驿站_files/scripts.js.下载"></script>
<div id="spig" class="spig">
    <div id="message">加载中……</div>
    <div id="mumu" class="mumu"></div>
</div>


</body>

</html>
