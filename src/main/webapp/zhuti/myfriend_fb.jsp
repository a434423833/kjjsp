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
        var diguiStatu = 0;
        var _fid = 0;
        var applyFriendList;
        var myfile = "${sessionScope.user.file}";
        var tuLingChatJson = [];
        var friendList;
    </script>

    <link rel="stylesheet" href="../css/myfriend/fb/style.css">
    <script src=" ../css/myfriend/fb/jquery.min.js"></script>
    <script src="../css/myfriend/fb/sockjs.min.js"></script>
    <script src="../css/myfriend/fb/stomp.min.js"></script>
    <script src="../css/myfriend/fb/vue.min.js"></script>
    <script src="../css/myfriend/fb/tuling.js"></script>
    <link rel="stylesheet" href="../css/myfriend/fb/myfriend.css">
    <script src="../css/myfriend/fb/myfriend.js"></script>
    <script src="../css/myfriend/fb/myfriend_this.js"></script>
    <style type="text/css">
        * {
            cursor: url("../img/cur/1.cur"), auto;
        }

        a:hover, font:hover, p:hover, li:hover, h4:hover, .iconfont:hover, span:hover, strong:hover, em:hover, button:hover {
            cursor: url("../img/cur/15.cur"), auto;
        }

    </style>
</head>
<body class="home blog custom-background" onload="bodyload()">
<!--头部-->
<%@ include file="import/head_myfriend.jsp" %>

<div class="st-content">
    <div class="container">

        <div id="chat">
            <div class="sidebar" style="position: relative">
                <div class="m-card">
                    <header>
                        <img src="../imgPathActionDownLoad?url=${user.file}" alt="无头像"
                             width="40" height="40" alt="Coffce" v-bind:src="user.avatar">
                        <p class="name">${user.username}</p>
                        <button class="btn btn-success btn-xs" style="float: right"
                                onclick="javascrtpt:window.location.href='myfriend.jsp'">切换
                        </button>
                    </header>
                    <footer>
                        <input class="search" placeholder="search user..." id="searchInput">
                    </footer>
                </div>
                <div class="m-list" style="overflow-y: scroll; height: 455px;">
                    <!-- 好友列表 -->
                    <ul id="user-list">

                    </ul>
                </div>
                <button class="m-button" onclick="onModalShow()">
                    添加好友&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href="javascript:"
                                                                class="dropdown-toggle hover-initialized">
                    <i class="iconfont">&#xe62d;</i>
                    <span class="badge badge-default " id="friendcount">5</span>
                </a>
                </button>
            </div>
            <div class="main">
                <div class="m-message" id="chatDiv">
                    <!-- 聊天记录 -->
                    <ul id="chatRecord" class="chatRecord">
                    </ul>
                </div>
                <!-- 输入框 -->
                <div class="m-text">
                    <textarea placeholder="按 Ctrl + Enter 发送" id="inputChat"> </textarea>
                </div>
            </div>

            <div class="modal-mask" v-show="showModal" transition="modal" id="addfriend" style="display: none">
                <div class="modal-wrapper">
                    <div class="modal-container">
                        <div class="m-card">
                            <footer>
                                <input class="search" placeholder="查找用户" id="friendname">
                            </footer>
                        </div>
                        <div class="m-list" style="overflow-y: scroll; height: 370px;">
                            <ul style="color: #fff" class="readers-list1" id="addFriendList">
                            </ul>
                        </div>
                        <button class="m-button" onclick="onModalClose()">
                            关闭
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script>
    /**
     * 获取当前时间
     * @returns {string} 格式 hh:mm
     */
    function getNowDate() {
        var date = new Date();
        var month = checkTime(date.getMonth() + 1);
        var day = checkTime(date.getDate());
        var hour = checkTime(date.getHours());
        var minutes = checkTime(date.getMinutes());
        var secend = checkTime(date.getSeconds());
        return (month + '-' + day + ' ' + hour + ':' + minutes + ':' + secend);
    }
    function checkTime(obj) {
        if (obj < 10) {
            return '0' + obj;
        }
        return obj;
    }

</script>
</body>

</html>
