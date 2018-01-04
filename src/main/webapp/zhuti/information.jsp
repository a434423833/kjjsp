<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
    <meta charset="utf-8"/>
    <title>千千 | Dreamwings</title>
    <link rel="icon" href="assets/favicon.png" type="im/image/x-png"/>
    <link rel="shortcut icon" href="assets/favicon.png" type="im/image/x-png"/>
    <meta name="author" content="Dreamwings"/>
    <meta name="description" content="站在回忆的河边看着摇晃的渡船终年无声地摆渡,它们就这样安静地画下黄昏画下清晨......"/>
    <meta name="keywords" content="dreamwings,im0qianqian,千千,小坏蛋_千千,夢の彼方は千千,千与梦随"/>
    <meta name="theme-color" content="#66ccff"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta name="HandheldFriendly" content="true"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <link rel="stylesheet" href="../css/information/css.css"/>
    <link rel="stylesheet" href="../css/information/font-awesome.min.css"/>
    <script src="../js/jquery-2.1.0.js"></script>
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
                <a><img class="avatar-animation" src="../${user.file==null?null:user.file}" alt="点击上传头像"
                        onclick="click_information_head()"/></a>
                <div style="display: none" id="head1">
                    <form action="../upLoad" method="post" enctype="multipart/form-data">
                        <input type="file" id="file1" name="studentPhoto"
                               accept="image/*" onchange="checkImgSize(this)"/></br>
                        <input type="submit" onclick="clicktp()" value="点击上传"
                               style="margin-left: -180px;margin-top: 10px"/>
                    </form>
                    <span id="tupiandaxiao" style="margin-left: -160px;color: red;font-size: 5px;"></span>
                </div>
                <h1>
                    <i18n data-i18n="Hello, I am" id="">
                        <c:if test="${msg==null?true:flase}">请尽量将下列信息补充完整！</c:if>
                        <c:if test="${msg!=null?true:flase}">${msg}</c:if>
                        </br></br>
                        <form action="" style="font-size: 10px;margin-left: 850px">
                            <table>
                                <tr style="height: 40px">
                                    <td>昵称：
                                    <td><input type="text" id="nicheng" value="${user.username}" <c:if
                                            test="${user.username!=null?true:false}"> disabled="true" </c:if></td>
                                    </td>
                                    <td id="nicheng1" style="color: cornflowerblue"></td>
                                </tr>
                                <tr style="height: 40px">
                                    <td>年龄:
                                    <td><input type="number" id="age" value="${user.age}"></td>
                                    </td>
                                    <td id="age1" style="color: cornflowerblue"></td>
                                </tr>
                                <tr style="height: 40px">
                                    <td>性别:
                                    <td><input type="radio" name="sex" value="1"
                                               <c:if test="${user.sex>0?true:false}">disabled="true"</c:if>
                                               <c:if test="${user.sex==1?true:false}">checked=""</c:if>
                                               style="margin-left: -20px">男
                                        <input type="radio" name="sex" value="2"
                                               <c:if test="${user.sex>0?true:false}">disabled="true"</c:if>
                                               <c:if test="${user.sex==2?true:false}">checked=""</c:if>
                                               style="margin-left:30px">女
                                    </td>
                                    </td>
                                    <td id="sex1" style="color: cornflowerblue"></td>
                                </tr>
                                <tr style="height: 40px">
                                    <td>手机号:
                                    <td><input type="text" id="phone" value="${user.phone}" <c:if
                                            test="${user.phone!=null?true:false}"> disabled="true" </c:if>></td>
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
                        </form>
                    </i18n>
                    <span class="big">
               </span>
                </h1>
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
