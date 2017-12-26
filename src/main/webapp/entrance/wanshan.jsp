<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page language="java" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>首页</title>
    <link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <link rel="stylesheet" type="text/css" href="../css/login.css"/>

</head>
<body>
<div class="row">
    <div class="col-md-2">
        <%@ include file="left.jsp" %>
    </div>
    <div class="col-md-10">
        <div class="row" style="height: 60px">
            <%@ include file="head.jsp" %>
        </div>
        <div class="row" style="margin-left: -75px">
            <div style="margin-left: 300px">
                <ul>
                    <li>
                        <a href="index.php">首页</a>
                    </li>
                    <li>
                        <a href="index.php?type=0">杂记</a>
                    </li>
                    <li><a href="index.php?type=1">随想</a></li>
                    <li><a href="index.php?type=2">开发</a></li>
                    <li><a href="index.php?type=3">算法</a></li>
                    <li><a href="index.php?type=4">分享</a></li>
                    <li><a href="index.php?type=7">专题</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
</body>
<script>
    $('#marea').on("change", function () {
        var area = $(this).val();
        $("#mcity").load("http://www.4000500521.com/member/getcity?ar=" + area);
    });
    $('#perfect').on("keyup", "input[name=identity]", function () {
        var $me = $(this);
        var reg = /^[0-9a-zA-Z]+$/;
        var code = $me.val();
        if (code.length > 18) {
            $me.val(code.substring(0, 18));
        } else if (!reg.test(code)) {
            $me.val(code.substring(0, code.length - 1));
        }
    });
    $("#birth").pullDate({year: "select[name=byear]", month: "select[name=bmonth]", day: "select[name=bday]"});
    $("#mark").pullDate({month: "select[name=mmoney]", day: "select[name=mday]"});
</script>

</html>
