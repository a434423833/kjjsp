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
          href="../img/Headphones.png">
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
    <link rel="stylesheet" href="../css/guangchang/zhuti.css">
    <link rel="stylesheet" href="../css/zhuye/zhuye.css">
    <script type="text/javascript" src="https://api.dreamwings.cn/siyue/?encode=js"></script>
    <script type='text/javascript' src='../js/zhuye/zhuye.js'></script>
    <script>var _hmt = _hmt || [];
    (function () {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?e7d1eda4edffde7969aadb0cb95ae095";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s)
    })();</script>
</head>
<body class="home blog custom-background">
<!--头部-->
<%@ include file="import/head_zhuye.jsp" %>

<div class="st-content">
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <div id="primary" class="content-area">
                    <main id="main" class="site-main" role="main">
                        <article id="post-5097"
                                 class="post-5097 post type-post status-publish format-standard post-password-required hentry category-remember-idealism tag-236 tag-235">

                        </article>
                        <article id="post-5080"
                                 class="post-5080 post type-post status-publish format-standard has-post-thumbnail hentry category-remember-idealism tag-90 tag-55">

                        </article>
                        <article id="post-5046"
                                 class="post-5046 post type-post status-publish format-standard has-post-thumbnail hentry category-remember-idealism tag-90 tag-55">

                        </article>
                        <article id="post-4996"
                                 class="post-4996 post type-post status-publish format-standard has-post-thumbnail hentry category-remember-idealism tag-63 tag-55">

                        </article>
                        <article id="post-4976"
                                 class="post-4976 post type-post status-publish format-standard has-post-thumbnail hentry category-remember-idealism tag-90 tag-55">

                        </article>
                        <article id="post-4918"
                                 class="post-4918 post type-post status-publish format-standard post-password-required hentry category-remember-idealism tag-90 tag-55">

                        </article>

                    </main>
                </div>
            </div>
            <!--右侧-->
            <%@ include file="import/right_zhuye.jsp" %>
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
<span class='hitokoto' id='hitokoto' style='display:none;'>Loading...</span>
<div id='hjsbox' style='display:none'></div>
<script>setTimeout("getkoto()", 1000);
var t;
function getkoto() {
    var hjs = document.createElement("script");
    hjs.setAttribute("id", "hjs");
    hjs.setAttribute("src", "https://api.dreamwings.cn/hitokoto/?encode=json");
    document.getElementById("hjsbox").appendChild(hjs);
    t = setTimeout("getkoto()", 10000)
}
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
                <aside id="recent-posts-3" class="widget col-md-3 footer-widget widget_recent_entries"><h1
                        class="widget-title">寻找Qian qian</h1>
                    <ul>
                        <li>
                            <a href="/memory0x00/5097.html">密码保护：忆梦 0x00</a>
                        </li>
                        <li>
                            <a href="/codeforces560e/5085.html">Codeforces 560 E. Gerald and Giant Chess （dp，组合数学）</a>
                        </li>
                        <li>
                            <a href="/icpc2017/5080.html">2017 ICPC 西安/青岛 站</a>
                        </li>
                    </ul>
                </aside>
                <aside id="text-7" class="widget col-md-3 footer-widget widget_text"><h1 class="widget-title">遇见</h1>
                    <div class="textwidget">
                        <div class="tagcloud">
                            <a href="/" class="tag-link-33 tag-link-position-1">首页</a>
                            <a href="/stack/remember-idealism" class="tag-link-4 tag-link-position-6">唯心记</a>
                            <a href="/stack/rain" class="tag-link-6 tag-link-position-23">陌、雨</a>
                            <a href="/stack/arbitrary-gate" class="tag-link-3 tag-link-position-3">任意门</a>
                            <a href="/stack/code-control" class="tag-link-2 tag-link-position-2">代码控</a>
                            <a href="/stack/development-direction" class="tag-link-5 tag-link-position-10">开发向</a>
                            <a href="/stack/acm" class="tag-link-33 tag-link-position-1">Ai编程</a>
                        </div>
                    </div>
                </aside>
                <aside id="my-recent-comments-4" class="widget col-md-3 footer-widget my_widget_recent_comments"><h1
                        class="widget-title">就是幸运&#8230;</h1>
                    <ul id="myrecentcomments">
                        <li class="ds-comment">
                            <div class="ds-avatar"><img alt=''
                                                        src='https://avatar.mixcm.cn/gravatar/806e52a2e2b9ff4bd2c23140df75cc1f?s=30&#038;d=identicon&#038;r=g'
                                                        srcset='https://avatar.mixcm.cn/gravatar/806e52a2e2b9ff4bd2c23140df75cc1f?s=60&amp;d=identicon&amp;r=g 2x'
                                                        class='avatar avatar-30 photo' height='30' width='30'/></div>
                            <div class="ds-meta">
                                <a rel="nofollow" target="_blank" href="https://www.dreamwings.cn">千千</a>
                                <span class="ds-time">12月25日</span>
                            </div>
                            <div class="ds-thread-title">在 <a href="/msg/comment-page-44#comment-2951">留言板</a> 中评论</div>
                            <div class="ds-excerpt">收到了好多祝福，好开心~ 圣...</div>
                        </li>
                        <li class="ds-comment">
                            <div class="ds-avatar"><img alt=''
                                                        src='https://avatar.mixcm.cn/gravatar/806e52a2e2b9ff4bd2c23140df75cc1f?s=30&#038;d=identicon&#038;r=g'
                                                        srcset='https://avatar.mixcm.cn/gravatar/806e52a2e2b9ff4bd2c23140df75cc1f?s=60&amp;d=identicon&amp;r=g 2x'
                                                        class='avatar avatar-30 photo' height='30' width='30'/></div>
                            <div class="ds-meta">
                                <a rel="nofollow" target="_blank" href="https://www.dreamwings.cn">千千</a>
                                <span class="ds-time">12月25日</span>
                            </div>
                            <div class="ds-thread-title">在 <a href="/msg/comment-page-44#comment-2950">留言板</a> 中评论</div>
                            <div class="ds-excerpt">让礼物洒遍整个世界，圣诞快...</div>
                        </li>
                    </ul>
                </aside>
                <aside id="text-6" class="widget col-md-3 footer-widget widget_text"><h1 class="widget-title">
                    你能抓到我么？</h1>
                    <div class="textwidget">
                        <aside id="kotha_social_button-5" class="widget widget_kotha_social_button">
                            <div class="social-link">
                                <ul class="list-inline">
                                    <li>
                                        <a href="http://shang.qq.com/wpa/qunwpa?idkey=44297f2419d73c834444993d16855fab77070e1ff12dd9201cf9760159a2a68b"
                                           target="_blank" rel="nofollow" class="facebook"><i class="fa fa-qq"></i></a>
                                    </li>
                                    <li><a href="mailto:i@dreamwings.cn" target="_blank" rel="nofollow"><i
                                            class="fa fa-envelope"></i></a></li>
                                    <li><a href="https://github.com/im0qianqian" target="_blank" rel="nofollow"
                                           class="google-plus"><i class="fa fa-github"></i></a></li>
                                    <li><a href="http://weibo.com/im0qianqian" target="_blank" rel="nofollow"
                                           class="pinterest"><i class="fa fa-weibo"></i></a></li>
                                    <li><a href="https://im.dreamwings.cn" target="_blank" class="behance"><i
                                            class="fa fa-home"></i></a></li>
                                    <li><a href="https://www.dreamwings.cn/feed" target="_blank" class="youtube"><i
                                            class="fa fa-rss"></i></a></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </aside>
            </div>
        </div>
    </div>
    <div class="copy-right-text text-center">
        <h6><font style="font-family:Microsoft Jhenghei;color:#8f9699">2017 <a href="https://www.dreamwings.cn/"
                                                                               target="_blank">夢の彼方は千千</a> <a>鲁ICP备16009478号-1</a>
            <p><a>博客已萌萌哒</a> <span id="span_dt_dt"></span>　托管于腾讯云　使用 七牛云 镜像存储</p>
            <p>@Dreamwings <a href="https://www.dreamwings.cn" target="_blank"><i class="fa fa-home"></i> 首页</a> | <a
                    href="https://www.dreamwings.cn" target="_blank"><i class="fa fa-pencil"></i> 文章</a> | <a
                    href="https://www.dreamwings.cn/msg" target="_blank"><i class="fa fa-star"></i> 留言</a> | <a
                    href="https://www.dreamwings.cn/pigeonhole" target="_blank"><i class="fa fa-paperclip"></i> 归档</a> |
                <a href="https://www.dreamwings.cn/shuo" target="_blank"><i class="fa fa-rocket"></i> 说说 </a> | <a
                        href="http://status.dreamwings.cn/" target="_blank" rel="nofollow"><i class="fa fa-tags"></i> 监控
                </a>| <a href="https://im.dreamwings.cn" target="_blank"><i class="fa fa-eye"></i> 寻找Qianqian　</a></p>
            <p class="siyueapi">
                <script>siyueapi()</script>
            </p>
            <p>by <i class="fa fa-heart" style="color: #d43f57;"></i> imqxms.</p></font></h6>
    </div>
</footer>
<div class="scroll-up">
    <a href="#"><i class="fa fa-angle-up"></i></a>
</div>
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

<!--
_____ _
(____ \ (_)
_ \ \ ____ ____ ____ ____ _ _ _ _ ____ ____ ___
| | | |/ ___)/ _ )/ _ || \ | | | || || _ \ / _ | /___)
| |__/ /| | ( (/ /( ( | || | | || | | || || | | |( ( | ||___ |
|_____/ |_| \____)\_||_||_|_|_| \____||_||_| |_| \_|| |(___/
(_____|
-->
<!-- Dynamic page generated in 0.085 seconds. -->
<!-- Cached page generated by WP-Super-Cache on 2017-12-26 21:05:59 -->
