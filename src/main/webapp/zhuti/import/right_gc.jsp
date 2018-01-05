<%@ page language="java" pageEncoding="UTF-8" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<script type='text/javascript' src='../js/login.js'></script>
.
<div class="col-md-4 blog_sidebar">
    <div id="secondary" class="primary-sidebar widget-area" role="complementary">

        <aside id="kotha_about_widget-3" class="widget kotha_about_widget">
            <h1 class="widget-title" id="h1_head">
                <c:if test="${user.uid>0?false:true}" var="result">
                    <a href="###" onclick="click_login_head()">登陆</a>
                    可以发现隐藏世界！</c:if>
                <c:if test="${!result}">
                    欢迎来到木东驿站</br>
                    ${user.username}</br>
                    <c:if test="${user.username!=null?false:true}">
                        请先<a href="information.jsp">完善信息</a>
                    </c:if>
                </c:if>
            </h1>
            <div class="about-widget" style="display: none" id="login_zhuti">
                <div id="yangshi3">
                    <div style="height: 280px;width: 300px">
                        <div id="div3"><a href="login.html"></a></div>
                        <form class="form-inline" action="" method="post">
                            <input type="hidden" name="task" value="login">
                            <div class="form-group">
                                <label class="sr-only" for="exampleInputEmail3">UserName</label>
                                <input type="text" name="account" class="form-control" id="exampleInputEmail3"
                                       placeholder="账号" style="width: 272px ; height: 43px;">
                            </div>
                            </br>  </br>
                            <div class="form-group">
                                <label class="sr-only" for="exampleInputPassword3">Password</label>
                                <input type="password" name="password" class="form-control"
                                       id="exampleInputPassword3"
                                       value="${password}" placeholder="密码" style="width: 272px ; height: 43px;">
                            </div>
                            </br>  </br>
                            <div class="form-group">
                                <input type="text" name="code" class="form-control" id="code" value=""
                                       placeholder="验证码" style="width: 150px ; height: 43px;display: inline-block">
                                <img alt="" src="../getCode" style="margin-top:0px" onclick="chick1(this)">
                            </div>
                            <div id="login_msg" style="height: 20px"></div>
                            <span style="color:red;margin-left:120px">${msg}</span></br>
                            <input type="button" onclick="click2()" class="btn btn-success" value="登录"
                                   style="width: 272px ; height: 43px;color: #75baff;margin-top: -25px">
                        </form>
                        <div id="div4">
                            <a href="xiugai.jsp">修改密码</a>|
                            <a href="reg.jsp">注册账号</a>|
                            <a href="###" style="margin-left: 80px" onclick="click_login_sq()">拒绝登陆</a>
                        </div>
                    </div>
                </div>
            </div>

        </aside>
        <aside id="text-5" class="widget widget_text">
            <div class="textwidget">
                <div class='like-vote'>
                    <p class='like-title'>Do you like me?</p>
                    <div class='like-count'>
                        <i class="fa fa-heart"></i><span></span>
                    </div>
                </div>
            </div>
        </aside>
        <aside id="text-9" class="widget widget_text">
            <div class="textwidget">
                <div id="siderbarmusic" class="aplayer"></div>
                <p>
                    <script>jQuery(document).ready(function (b) {
                        new APlayer({
                            element: document.getElementById("siderbarmusic"),
                            narrow: false,
                            autoplay: false,
                            showlrc: false,
                            mutex: true,
                            theme: "#00acdf",
                            preload: "auto",
                            mode: "circulation",
                            music: [{
                                title: "伟大的渺小",
                                author: "林俊杰JJ-偶像！",
                                url: "../music/林俊杰 - 伟大的渺小.mp3",
                                pic: "../music/伟大的渺小.png"
                            }, {
                                title: "光年之外",
                                author: "G.E.M鄧紫棋",
                                url: "../music/光年之外_g.e.m.邓紫棋.mp3",
                                pic: "../music/光年之外.png"
                            }, {
                                title: "身为风帆",
                                author: "林俊杰JJ",
                                url: "../music/林俊杰 - 身为风帆.mp3",
                                pic: "../music/伟大的渺小.png",
                            }]
                        })
                    });</script>
                </p>
            </div>
        </aside>
        <aside id="kotha_blog_posts_widget-3" class="widget widget_kotha_blog_posts_widget">
            <div class="latest-posts comments">
                <div class="media">
                    <div class="pull-left"><a href="/addsmilies_qq/3430.html"><img width="60" height="60"
                                                                                   src="https://static.dreamwings.cn/wp-content/uploads/2016/07/timg-1-60x60.jpg"
                                                                                   class="img-responsive wp-post-image"
                                                                                   alt=""
                                                                                   srcset="https://static.dreamwings.cn/wp-content/uploads/2016/07/timg-1-60x60.jpg 60w, https://static.dreamwings.cn/wp-content/uploads/2016/07/timg-1-150x150.jpg 150w"
                                                                                   sizes="(max-width: 60px) 100vw, 60px"/></a>
                    </div>
                    <div class="media-body"><h3 class="entry-title"><a href="/addsmilies_qq/3430.html"
                                                                       target="_blank">为多说评论添加QQ表情</a></h3>
                        <div class="entry-meta small">下午9:14, 31 7月 2016</div>
                    </div>
                </div>
                <div class="media">
                    <div class="pull-left"><a href="/un1/3933.html"><img width="60" height="60"
                                                                         src="https://static.dreamwings.cn/wp-content/uploads/2016/08/a686c9177f3e67098d1406e638c79f3df8dc5596-60x60.jpg"
                                                                         class="img-responsive wp-post-image"
                                                                         alt=""
                                                                         srcset="https://static.dreamwings.cn/wp-content/uploads/2016/08/a686c9177f3e67098d1406e638c79f3df8dc5596-60x60.jpg 60w, https://static.dreamwings.cn/wp-content/uploads/2016/08/a686c9177f3e67098d1406e638c79f3df8dc5596-150x150.jpg 150w"
                                                                         sizes="(max-width: 60px) 100vw, 60px"/></a>
                    </div>
                    <div class="media-body"><h3 class="entry-title"><a href="/un1/3933.html"
                                                                       target="_blank">逝去的大一生活</a></h3>
                        <div class="entry-meta small">下午8:21, 27 8月 2016</div>
                    </div>
                </div>
                <div class="media">
                    <div class="pull-left"><a href="/menu/3645.html"><img width="60" height="60"
                                                                          src="https://static.dreamwings.cn/wp-content/uploads/2016/08/20160806172656-2-60x60.png"
                                                                          class="img-responsive wp-post-image"
                                                                          alt=""
                                                                          srcset="https://static.dreamwings.cn/wp-content/uploads/2016/08/20160806172656-2-60x60.png 60w, https://static.dreamwings.cn/wp-content/uploads/2016/08/20160806172656-2-150x150.png 150w"
                                                                          sizes="(max-width: 60px) 100vw, 60px"/></a>
                    </div>
                    <div class="media-body"><h3 class="entry-title"><a href="/menu/3645.html"
                                                                       target="_blank">Menu 没错吧！</a></h3>
                        <div class="entry-meta small">下午5:31, 06 8月 2016</div>
                    </div>
                </div>
                <div class="media">
                    <div class="pull-left"><a href="/wpothertheme/3898.html"><img width="60" height="60"
                                                                                  src="https://static.dreamwings.cn/wp-content/uploads/2016/08/20160820195040-1-60x60.png"
                                                                                  class="img-responsive wp-post-image"
                                                                                  alt=""
                                                                                  srcset="https://static.dreamwings.cn/wp-content/uploads/2016/08/20160820195040-1-60x60.png 60w, https://static.dreamwings.cn/wp-content/uploads/2016/08/20160820195040-1-150x150.png 150w"
                                                                                  sizes="(max-width: 60px) 100vw, 60px"/></a>
                    </div>
                    <div class="media-body"><h3 class="entry-title"><a href="/wpothertheme/3898.html"
                                                                       target="_blank">WordPress的第二主题</a>
                    </h3>
                        <div class="entry-meta small">下午7:51, 20 8月 2016</div>
                    </div>
                </div>
                <div class="media">
                    <div class="pull-left"><a href="/inverse-modulo/4047.html"><img width="60" height="60"
                                                                                    src="https://static.dreamwings.cn/wp-content/uploads/2016/10/timg-60x60.jpg"
                                                                                    class="img-responsive wp-post-image"
                                                                                    alt=""
                                                                                    srcset="https://static.dreamwings.cn/wp-content/uploads/2016/10/timg-60x60.jpg 60w, https://static.dreamwings.cn/wp-content/uploads/2016/10/timg-150x150.jpg 150w"
                                                                                    sizes="(max-width: 60px) 100vw, 60px"/></a>
                    </div>
                    <div class="media-body"><h3 class="entry-title"><a href="/inverse-modulo/4047.html"
                                                                       target="_blank">『数论』乘法逆元</a></h3>
                        <div class="entry-meta small">下午9:02, 08 10月 2016</div>
                    </div>
                </div>
            </div>
        </aside>
    </div>
</div>