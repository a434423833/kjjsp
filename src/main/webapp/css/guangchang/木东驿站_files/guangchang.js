var pageIndex = 1;

function load_liuyan(index, count) {

    if (count == "" || count == null) {
        count = -1;
    }
    if (index == 0 || index > count) {
        return;
    }
    window.scrollTo(0, 0);
    pageIndex = index;
    $.ajax({
            type: "POST",      //传输方式
            url: "../getGuangChangLiuYanList",           //地址
            data: {
                pageIndex: pageIndex          //传递的参数
            },
            success: function (obj) {
                if (obj.code == '0') {
                    var str = "";
                    var gcliuyanDTOList = obj.data.gcliuyanDTOList;
                    for (var i = 0; i < gcliuyanDTOList.length; i++) {
                        var data = gcliuyanDTOList[i];
                        var sex1 = "<spanclass='ua'><span class='os_8_1'>♂</span></span>";
                        if (data.sex == '2') {
                            sex1 = "<span class='ua'><span class='ua_chrome'></i>♀</span></span>";
                        }
                        str += " <li class='comment even thread-even depth-1' id='li-comment-2952'>"
                            + "<div id='comment-2952' class='comment-body media'>"
                            + "<div class='comment-avartar pull-left'>"
                            + "<img alt='无头像' src='../imgPathActionDownLoad?url=" + data.file + "' height='50' width='50' class = 'avatar avatar-50 photo'/></div>"
                            + "<div class='comment-context media-body'>"
                            + " <div class='comment-head'>"
                            + "<a href='' rel='external nofollow' target='_blank'data-user-id='3e6eaa0f1ac35fac791766d1363bb9c8'>" + data.username + "</a>"
                            + sex1
                            + " </div>"
                            + "<div class='comment-content'>"
                            + "  <p>" + data.infor + "</p></div>"
                            + " <div class='comment-footer'>"
                            + "<span class='comment-date'>" + data.time + "</span>"
                            + " <span class='comment-reply'><a href='javascript:void(0);' onclick='huifuclick1(" + data.gcid + "," + 2 + ")'>回复</a></span>"
                            + " </div>" + "<div id='aa" + data.gcid + "'></div>" + " </div></div>";
                        var gcliuyanDTO1List = gcliuyanDTOList[i].gcliuyanDTO1List;
                        if (gcliuyanDTO1List == null || gcliuyanDTO1List.length == 0) {
                            str += "</li>";
                        } else {
                            str += "<ul class='children'>";               //开始第二层遍历
                            for (var j = 0; j < gcliuyanDTO1List.length; j++) {
                                var data1 = gcliuyanDTO1List[j];
                                var sex2 = "<spanclass='ua'><span class='os_8_1'>♂</span></span>";
                                if (data1.sex == '2') {
                                    sex2 = "<span class='ua'><span class='ua_chrome'></i>♀</span></span>";
                                }
                                str += " <li class='comment byuser comment-author-dreamwings bypostauthor odd alt depth-2' id='li-comment-2953'>"
                                    + "<div id='comment-2953' class='comment-body media'>"
                                    + "<div class='comment-avartar pull-left'>"
                                    + "<img alt='无头像' src='../imgPathActionDownLoad?url=" + data1.file + "' height='50' width='50' class = 'avatar avatar-50 photo'/></div> "
                                    + "<div class='comment-context media-body'>"
                                    + " <div class='comment-head'>"
                                    + "<a href='' rel='external nofollow' target='_blank'data-user-id='3e6eaa0f1ac35fac791766d1363bb9c8'>" + data1.username + "</a>"
                                    + sex2
                                    + " </div>"
                                    + "<div class='comment-content'>"
                                    + "<p>" + "<tag style='font-size: 12px;'>&nbsp;回复" + ":&nbsp;</tag>" + data1.infor + "</p></div>"
                                    + " <div class='comment-footer'>"
                                    + "<span class='comment-date'>" + data1.time + "</span>"
                                    + " <span class='comment-reply'><a href='javascript:void(0);' onclick='huifuclick1(" + data1.gcid + "," + 3 + " )'>回复</a></span>"
                                    + " </div>" + "<div id='aa" + data1.gcid + "'></div>" + "</div></div>";
                                var gcliuyanDTO2List = gcliuyanDTO1List[j].gcliuyanDTO2List;
                                if (gcliuyanDTO2List == null || gcliuyanDTO2List.length == 0) {
                                    str += "</li>";
                                } else {
                                    str += "<ul class='children'>";               //开始第三层遍历
                                    for (var z = 0; z < gcliuyanDTO2List.length; z++) {
                                        var data2 = gcliuyanDTO2List[z];
                                        var sex3 = "<spanclass='ua'><span class='os_8_1'>♂</span></span>";
                                        if (data2.sex == '2') {
                                            sex3 = "<span class='ua'><span class='ua_chrome'></i>♀</span></span>";
                                        }
                                        str += " <li class='comment even depth-3' id='li-comment-2954'>"
                                            + "<div id='comment-2954' class='comment-body media'>"
                                            + "<div class='comment-avartar pull-left'>"
                                            + "<img alt='无头像' src='../imgPathActionDownLoad?url=" + data2.file + "' height='50' width='50' class = 'avatar avatar-50 photo'/></div> "
                                            + "<div class='comment-context media-body'>"
                                            + " <div class='comment-head'>"
                                            + "<a href='' rel='external nofollow' target='_blank'data-user-id='3e6eaa0f1ac35fac791766d1363bb9c8'>" + data2.username + "</a>"
                                            + sex3 + "<span></span>"
                                            + " </div>"
                                            + "<div class='comment-content'>"
                                            + " <p>" + "<tag style='font-size: 12px;'>&nbsp;回复:&nbsp;</tag>" + data2.infor + "</p></div>"
                                            + " <div class='comment-footer'>"
                                            + "<span class='comment-date'>" + data2.time + "</span>"
                                            + " </div></div></div></li>";
                                    }
                                    str += "</ul>";
                                }
                                str += "</li>";
                            }
                            str += "</ul>";
                        }
                    }
                    str += "<nav class='navigation comment-navigation' role='navigation' style='margin-left: 200px'>" +
                        "<h1 class='screen-reader-text section-heading'>Comment navigation</h1>" +
                        " <div class='nav-previous'>当前页面：" + obj.data.page.pageIndex + "/" + obj.data.page.pageCount + "&nbsp;&nbsp;&nbsp;" +
                        "<a href=javascript:void(0);' onclick='load_liuyan(" + (obj.data.page.pageIndex - 1) + "," + obj.data.page.pageCount + ")'> 上一页</a> <a href='javascript:void(0);' onclick='load_liuyan(" + (obj.data.page.pageIndex + 1) + "," + obj.data.page.pageCount + ")'> 下一页</a></div>" +
                        "<div class='nav-next'></div></nav>";
                    $("#guangchang_liuyan").html(str);
                    $("#span_count").html(obj.data.page.count);
                    $("#comment").val("");
                } else {

                }

            }
        }
    )
    ;

}

function click_gcly() {
    var comment = $("#comment").val();
    if (uid == null || uid == "") {
        $("#tixing_liuyan").html("请先登录才能留言哦！");
        return;
    }
    if (comment == null || comment == "") {
        $("#tixing_liuyan").html("啥也不说想发表啥！");
        return;
    }
    $.ajax({
        type: "POST",      //传输方式
        url: "../addGuangChangLiuYan",           //地址
        data: {
            infor: comment,//传递的参数
            uid: uid
        },
        success: function (obj) {
            if (obj.code == '0') {
                load_liuyan(1, 1);
            } else {

            }
        }
    })
    ;

}


function huifuclick1(beforgcid, index) {

    if (uid == "" || uid == null) {
        $("#aa" + beforgcid).css("color", "red");
        $("#aa" + beforgcid).css("font-size", "5px");
        $("#aa" + beforgcid).html("请先登录！");
        return;
    }
    $("#aa" + beforgcid).html("  <div id='respond' class='comment-respond' >" +
        "            <h3 id='reply-title' class='comment-reply-title' style='color: #3EC3A5;'>我想小声说~</h3>" +
        "            <form  style='height: 200px' action='' method='post'" +
        "                  id='commentform' class='comment-form row' novalidate>\n" +
        "                <div class='col-md-12'><textarea id='comment" + beforgcid + "' class='OwO-textarea'" +
        "                                                 placeholder='有什么想回复的就说吧！'" +
        "                                                 name='comment' aria-required='true'></textarea>" +
        "                    <div style='float: left;margin-top: -20px;color: red;font-size: 5px' id='tixing_liuyan'></div>" +
        "                </div>" +
        "                <p class='form-submit col-md-12' style='margin-top: -15px;margin-left: -20px'>" +
        "<input type='button'  onclick='closehuifu(" + beforgcid + ")' value='关闭' style='margin-left: 400px;background-color: #75baff;height: 33px'>" +
        "                    <input name='submit' type='button' id='submit' class='submit' onclick='huifuclick2(" + beforgcid + "," + index + ")'" +
        "                           value='发表(●&#039;◡&#039;●)ﾉ'/>\n" +
        "                </p></form>" +
        "        </div>");
}

function huifuclick2(beforgcid, index) {
    var infor = $("#comment" + beforgcid).val();
    if (infor == null || infor.length < 6) {
        $("#aa" + beforgcid).css("color", "red");
        $("#aa" + beforgcid).css("font-size", "5px");
        $("#aa" + beforgcid).html("不能少于6个字哦!");
        return;
    }
    $.ajax({
        type: "POST",      //传输方式
        url: "../huifuGuangChangLiuYan",           //地址
        data: {
            beforid: beforgcid,//传递的参数
            index: index,
            infor: infor
        },
        success: function (obj) {
            if (obj.code == '0') {
                load_liuyan(1, 1);
            } else {

            }
        }
    })
    ;
}

function closehuifu(beforgcid) {
    $("#aa" + beforgcid).html("");
}

function biaoqingclick() {
    $("#biaoqing").fadeToggle(200);
}