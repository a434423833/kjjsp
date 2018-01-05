<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://"
            + request.getServerName() + ":" + request.getServerPort()
            + path + "/";
%>
<html>
<base href="<%=basePath%>"></base>
<head>
    <link rel="icon" href="img/logo.ico" type="image/x-icon"/>
    <link rel="shortcut icon"
          href="../img/Headphones.png"
          type="image/x-icon"/>
    <meta charset="utf-8">
    <title>页面404咯</title>

    <style>
        html {
            margin: 0;
            padding: 0;
            background-color: white;
        }

        body,
        html {
            width: 100%;
            height: 100%;
            overflow: hidden;
        }

        #svgContainer {
            width: 640px;
            height: 512px;
            background-color: white;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
        }
    </style>

</head>
<body>

<script type="text/javascript" src="js/error/bodymovin.js"></script>
<script type="text/javascript" src="js/error/data.js"></script>

<div id="svgContainer"></div>

<script type="text/javascript">
    var svgContainer = document.getElementById('svgContainer');
    var animItem = bodymovin.loadAnimation({
        wrapper: svgContainer,
        animType: 'svg',
        loop: true,
        animationData: JSON.parse(animationData)
    });
</script>

<div style="text-align:center;margin:10px 0; font:normal 14px/24px 'MicroSoft YaHei';">
    <p style="font-size: 40px">你好像到了火星！页面没找着</p>
    <a href="zhuti/zhuye.jsp">点击前往主页</a>
</div>
</body>
</html>

