<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<div class="padding-content white-color">
    <div id="comments" class="comments-area comments">
        <div id="respond" class="comment-respond">
            <h3 id="reply-title" class="comment-reply-title" style="color: #3EC3A5">我想大声说~</h3>
            <form action="" method="post"
                  id="commentform" class="comment-form row" novalidate>
                <div class="col-md-12"><textarea id="comment" class="OwO-textarea"
                                                 placeholder="真的不说两句么？可以勾搭妹子的！"
                                                 name="comment" aria-required="true"></textarea>
                    <div style="float: left;margin-top: -20px;color: red;font-size: 5px" id="tixing_liuyan"></div>
                </div>
                <p class="form-submit col-md-12" style="margin-top: -15px">
                    <input name="submit" type="button" id="submit" class="submit" onclick="click_gcly()"
                           value="发表(●&#039;◡&#039;●)ﾉ"/>
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
            <li>已经有了<span style="color: #1abc9c;" id="span_count"></span>个大吼的声音</li>
        </h3>

        <!--留言-->
        <ul class="comment-list" id="guangchang_liuyan">

        </ul><!-- .comment-list -->

    </div>

</div>
