<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<div class="padding-content white-color">
    <div id="comments" class="comments-area comments">
        <div id="respond" class="comment-respond">
            <h3 id="reply-title" class="comment-reply-title">我想大声说~</h3>
            <form action="https://www.dreamwings.cn/wp-comments-post.php" method="post"
                  id="commentform" class="comment-form row" novalidate>
                <div class="col-md-12"><textarea id="comment" class="OwO-textarea"
                                                 placeholder="真的不说两句么？可以勾搭妹子的！"
                                                 name="comment" aria-required="true"></textarea>
                </div>
                <p class="form-submit col-md-12"><input name="submit" type="submit" id="submit"
                                                        class="submit"
                                                        value="发表(●&#039;◡&#039;●)ﾉ"/> <input
                        type='hidden' name='comment_post_ID' value='785' id='comment_post_ID'/>
                    <input type='hidden' name='comment_parent' id='comment_parent' value='0'/>
                </p></form>
        </div><!-- #respond -->
        <script>$(document).ready(function () {
            document.getElementById("respond").innerHTML += '<div class="OwO"></div>';
            var OwO_demo = new OwO({
                logo: "OωO表情",
                container: document.getElementsByClassName("OwO")[0],
                target: document.getElementsByClassName("OwO-textarea")[0],
                position: "down",
                width: "100%",
                maxHeight: "250px"
            })
        });</script>
        <h3 class="common-title comments-title">
            <li>已经有了<span style="color: #1abc9c;" id="span_count">100</span>个大吼的声音</li>
        </h3>


        <ul class="comment-list" id="guangchang_liuyan">
        </ul><!-- .comment-list -->

    </div>

</div>
