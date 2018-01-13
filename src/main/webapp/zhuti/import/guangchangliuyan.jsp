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
                </div>
                <p class="form-submit col-md-12" style="margin-top: -15px">
                    <input name="submit" type="button" id="submit" class="submit" onclick="click_gcly()"
                           value="发表(●&#039;◡&#039;●)ﾉ"/>
                </p>
            </form>
        </div><!-- #respond -->
        <%@ include file="guangchangbiaoqing.jsp" %>


        <h3 class="common-title comments-title">
            <li>已经有了<span style="color: #1abc9c;" id="span_count"></span>个大吼的声音</li>
        </h3>

        <!--留言-->
        <style>
            #biaoqingdaxiao {
                height: 25px;
                width: 25px;
            }
        </style>
        <ul class="comment-list" id="guangchang_liuyan">

        </ul><!-- .comment-list -->

    </div>

</div>
