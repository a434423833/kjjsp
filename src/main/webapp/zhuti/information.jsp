<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="http://localhost/zhuti/img/logo.ico" type="image/x-icon">
    <link rel="shortcut icon" href="http://localhost/img/Headphones.png" type="image/x-icon">
    <title>个人信息</title>
    <link rel="stylesheet" href="../css/information/css.css"/>
    <link rel="stylesheet" href="../css/information/font-awesome.min.css"/>
    <script src="../js/jquery-2.1.0.js"></script>
    <link rel="stylesheet" id="bootstrap-css-css" href="../css/bootstrap.min.css" type="text/css"
          media="all">
    <style type="text/css">
        * {
            cursor: url("../img/cur/1.cur"), auto;
        }

        a:hover, font:hover, p:hover, li:hover, h4:hover, img:hover, input:hover {
            cursor: url("../img/cur/15.cur"), auto;
        }

        input {
            color: #00acdf;
        }

    </style>
</head>
<body>
<nav class="page-nav">

</nav>
<div class="language">
    <ul id="lang-list">
        <li data-i18n-item="zh-cn" class="lang">简体字</li>
        <li data-i18n-item="zh-tw" class="lang">繁体字</li>
        <li data-i18n-item="en" class="lang">English</li>
    </ul>
    <i class="fa fa-globe" id="lang-btn"></i>
</div>
<div id="main">
    <section id="section1">
        <div class="headline">
            <div style="margin-top: -150px;">
                <a><img class="avatar-animation" src="../imgPathActionDownLoad?url=${user.file==null?null:user.file}"
                        alt="点击上传头像"
                        onclick="click_information_head()"/></a>
                <div style="display: none" id="head1">
                    <form action="../upLoad" method="post" enctype="multipart/form-data">
                        <div class="row">
                            <div class="col-xs-5 "></div>
                            <div class="col-xs-7">
                                <input type="file" id="file1" name="studentPhoto"
                                       accept="image/*" onchange="checkImgSize(this)"
                                       style="margin-top: 20px"/>
                                <input type="submit" onclick="clicktp()" value="点击上传"
                                       style="float: left;margin-top: 10px"/>
                            </div>
                        </div>

                    </form>
                    <span id="tupiandaxiao" style="margin-left: -160px;color: red;font-size: 12px;"></span>
                </div>
                <div>
                    <i18n data-i18n="Hello, I am" id="">
                        <c:if test="${msg==null?true:flase}">请尽量将下列信息补充完整！</c:if>
                        <c:if test="${msg!=null?true:flase}">${msg}</c:if>
                        </br></br>
                        <div class="row">
                            <div class="col-xs-5"></div>
                            <div class="col-xs-5">
                                <table>
                                    <tr style="height: 40px">
                                        <td>昵称：
                                        <td><input type="text" id="nicheng" value="${user.username}"
                                        <c:if test="${user.username!=user.account?true:false}">
                                                   disabled="true" </c:if></td>
                                        </td>
                                        <td id="nicheng1" style="color: cornflowerblue">
                                            <c:if test="${user.username==user.account?true:false}">
                                                你只有一次免费修改昵称的机会</c:if></td>
                                        </td>
                                    </tr>
                                    <tr style="height: 40px">
                                        <td>年龄:
                                        <td><input type="number" id="age" value="${user.age}"></td>
                                        </td>
                                        <td id="age1" style="color: cornflowerblue"></td>
                                    </tr>
                                    <tr style="height: 40px">
                                        <td>性别:
                                        <td><input type="radio" name="sex" class="sex1" value="1"
                                                   <c:if test="${user.sex>0?true:false}">disabled="true"</c:if>
                                                   <c:if test="${user.sex==1?true:false}">checked=""</c:if>
                                                   style="margin-left: -20px">男
                                            <input type="radio" name="sex" class="sex2" value="2"
                                                   <c:if test="${user.sex>0?true:false}">disabled="true"</c:if>
                                                   <c:if test="${user.sex==2?true:false}">checked=""</c:if>
                                                   style="margin-left:30px">女
                                        </td>
                                        </td>
                                        <td id="sex1" style="color: cornflowerblue"></td>
                                    </tr>
                                    <tr style="height: 40px">
                                        <td>qq:
                                        <td><input type="text" id="phone" value="${user.phone}"
                                        </td>
                                        </td>
                                        <td id="phone1" style="color: cornflowerblue"></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td><input type="button"
                                                   style="background-color: snow;color: #75baff;margin-left: -20px"
                                                   value="保存" onclick="click_information_submit()">
                                        </td>
                                        <td id="span1" style="color: cornflowerblue"></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </i18n>
                    <span class="big">
               </span>
                </div>
            </div>
            <div class="maybe">
                <div class="link-list">
                    <div class="i-link ">
                        <a href="guangchang.jsp" target="_blank" class="my-link">
                            <i>
                                <img style="width: 50px;height:50px;" src="../img/qianwanggc.png" alt="">
                            </i>
                            <p>
                                <i18n data-i18n="Visit my Blog">
                                    前往广场
                                </i18n>
                            </p>
                        </a>
                    </div>
                    <div class="i-link">
                        <a href="zhuye.jsp" class="more-me"><i>
                            <img style="width: 50px;height:50px;" src="../img/qianwangzhuye.png" alt="">
                        </i>
                            <p>
                                <i18n data-i18n="Learn more about me">
                                    前往主页
                                </i18n>
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>


</div>
<script src="../js/information/js.js"></script>
<!--<script>!function(e,a,t,n,c,o,s){e.GoogleAnalyticsObject=c,e[c]=e[c]||function(){(e[c].q=e[c].q||[]).push(arguments)},e[c].l=1*new Date,o=a.createElement(t),s=a.getElementsByTagName(t)[0],o.async=1,o.src=n,s.parentNode.insertBefore(o,s)}(window,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("create","UA-61253812-1","auto"),ga("send","pageview");</script>-->
</body>
</html>
