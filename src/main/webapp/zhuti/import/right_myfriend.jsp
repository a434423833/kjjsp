<%@ page language="java" pageEncoding="UTF-8" %>
<link rel="stylesheet" href="../css/zhuye/zhuye.css">
<div class="col-md-4 blog_sidebar">
    <div id="secondary" class="primary-sidebar widget-area" role="complementary">
        <aside id="kotha_about_widget-3" class="widget kotha_about_widget">
            <div class="about-widget">
                <!--头像显示-->
                <div align="center">
                    <div class="imgtest">
                        <figure>
                            <div>
                                <img class="img-responsive"
                                     src="../imgPathActionDownLoad?url=${user.file}"
                                     alt="还没有设置头像哦"/>
                            </div>
                        </figure>
                    </div>
                </div>
                <div class="about-me-content" align="center">${user.username}&nbsp;&nbsp;${user.age}&nbsp;&nbsp;
                    <img src="${user.sex==1?'../img/nan.png':'../img/nv.png'}" style=" width: 19px;height: 21px;"/>
                </div>
                <h1 class="widget-title"
                    style="font-size: 12px;margin-top: 10px">
                    <a href="javascript:void(0);" onclick="showaddname()">点击添加好友</a>
                </h1>
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
                                                                         src="../css/guangchang/木东驿站_files/a686c9177f3e67098d1406e638c79f3df8dc5596-60x60.jpg"
                                                                         class="img-responsive wp-post-image"
                                                                         alt=""
                                                                         srcset="../css/guangchang/木东驿站_files/a686c9177f3e67098d1406e638c79f3df8dc5596-60x60.jpg 60w, ../css/guangchang/木东驿站_files/a686c9177f3e67098d1406e638c79f3df8dc5596-150x150.jpg 150w"
                                                                         sizes="(max-width: 60px) 100vw, 60px"/></a>
                    </div>
                    <div class="media-body"><h3 class="entry-title"><a href="/un1/3933.html"
                                                                       target="_blank">逝去的大一生活</a></h3>
                        <div class="entry-meta small">下午8:21, 27 8月 2016</div>
                    </div>
                </div>
                <div class="media">
                    <div class="pull-left"><a href="/menu/3645.html"><img width="60" height="60"
                                                                          src="../css/guangchang/木东驿站_files/20160806172656-2-60x60.png"
                                                                          class="img-responsive wp-post-image"
                                                                          alt=""
                                                                          srcset="../css/guangchang/木东驿站_files/20160806172656-2-60x60.png 60w, ../css/guangchang/木东驿站_files/20160806172656-2-150x150.png 150w"
                                                                          sizes="(max-width: 60px) 100vw, 60px"/></a>
                    </div>
                    <div class="media-body"><h3 class="entry-title"><a href="/menu/3645.html"
                                                                       target="_blank">Menu 没错吧！</a></h3>
                        <div class="entry-meta small">下午5:31, 06 8月 2016</div>
                    </div>
                </div>
                <div class="media">
                    <div class="pull-left"><a href="/wpothertheme/3898.html"><img width="60" height="60"
                                                                                  src="../css/guangchang/木东驿站_files/20160820195040-1-60x60.png"
                                                                                  class="img-responsive wp-post-image"
                                                                                  alt=""
                                                                                  srcset="../css/guangchang/木东驿站_files/20160820195040-1-60x60.png 60w, ../css/guangchang/木东驿站_files/20160820195040-1-150x150.png 150w"
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