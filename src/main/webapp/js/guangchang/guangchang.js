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
                        var sex1 = "<span class='ua'><span class='os_8_1'>♂</span></span>";
                        if (data.sex == '2') {
                            sex1 = "<span class='ua'><span class='ua_chrome'>♀</span></span>";
                        }
                        var ceo = ""
                        if (data.admin == '1') {
                            ceo = "<span class='ua'><span class='ua_firefox'> CEO</span></span>";
                        }
                        str += " <li class='comment even thread-even depth-1' id='li-comment-2952'>"
                            + "<div id='comment-2952' class='comment-body media'>"
                            + "<div class='comment-avartar pull-left'>"
                            + "<img alt='无头像' src='../imgPathActionDownLoad?url=" + data.file + "' height='50' width='50' class = 'avatar avatar-50 photo'/></div>"
                            + "<div class='comment-context media-body'>"
                            + " <div class='comment-head'>"
                            + "<a href='' rel='external nofollow' target='_blank'data-user-id='3e6eaa0f1ac35fac791766d1363bb9c8'>" + data.username + "</a>"
                            + ceo + sex1
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
                                var ceo = ""
                                if (data1.admin == '1') {
                                    ceo = "<span class='ua'><span class='ua_firefox'> CEO</span></span>";
                                }
                                str += " <li class='comment byuser comment-author-dreamwings bypostauthor odd alt depth-2' id='li-comment-2953'>"
                                    + "<div id='comment-2953' class='comment-body media'>"
                                    + "<div class='comment-avartar pull-left'>"
                                    + "<img alt='无头像' src='../imgPathActionDownLoad?url=" + data1.file + "' height='50' width='50' class = 'avatar avatar-50 photo'/></div> "
                                    + "<div class='comment-context media-body'>"
                                    + " <div class='comment-head'>"
                                    + "<a href='' rel='external nofollow' target='_blank'data-user-id='3e6eaa0f1ac35fac791766d1363bb9c8'>" + data1.username + "</a>"
                                    + ceo + sex2
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
                                        var ceo = ""
                                        if (data2.admin == '1') {
                                            ceo = "<span class='ua'><span class='ua_firefox'> CEO</span></span>";
                                        }
                                        str += " <li class='comment even depth-3' id='li-comment-2954'>"
                                            + "<div id='comment-2954' class='comment-body media'>"
                                            + "<div class='comment-avartar pull-left'>"
                                            + "<img alt='无头像' src='../imgPathActionDownLoad?url=" + data2.file + "' height='50' width='50' class = 'avatar avatar-50 photo'/></div> "
                                            + "<div class='comment-context media-body'>"
                                            + " <div class='comment-head'>"
                                            + "<a href='' rel='external nofollow' target='_blank'data-user-id='3e6eaa0f1ac35fac791766d1363bb9c8'>" + data2.username + "</a>"
                                            + ceo + sex3 + "<span></span>"
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
    if (username == null || username == "") {
        $("#tixing_liuyan").html("请先完善信息！");
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
    thisId = beforgcid;
    if (uid == "" || uid == null) {
        $("#aa" + beforgcid).css("color", "red");
        $("#aa" + beforgcid).css("font-size", "12px");
        $("#aa" + beforgcid).html("请先登录！");
        return;
    }
    if (username == "" || username == null) {
        $("#aa" + beforgcid).css("color", "red");
        $("#aa" + beforgcid).css("font-size", "12px");
        $("#aa" + beforgcid).html("请先完善信息！");
        return;
    }
    $("#aa" + beforgcid).html("<div id='respond' class='comment-respond' >" +
        "            <h3 id='reply-title' class='comment-reply-title' style='color: #3EC3A5;'>我想小声DE说~</h3>" +
        "            <form  style='height: 200px' action='' method='post'" +
        "                  id='commentform' class='comment-form row' novalidate>\n" +
        "                <div class='col-md-12'><textarea id='comment" + beforgcid + "' class='OwO-textarea'" +
        "                                                 placeholder='有什么想回复的就说吧！'" +
        "                                                 name='comment' aria-required='true'></textarea>" +
        "                    <div style='float: left;margin-top: -20px;color: red;font-size: 12px' id='tixing_liuyan'></div>" +
        "                </div>" +
        "                <p class='form-submit col-md-12' style='margin-top: -15px;margin-left: -20px'>" +
        "<input type='button'  onclick='closehuifu(" + beforgcid + ")' value='关闭' style='margin-left: 400px;background-color: #75baff;height: 33px'>" +
        "                    <input name='submit' type='button' id='submit' class='submit' onclick='huifuclick2(" + beforgcid + "," + index + ")'" +
        "                           value='发表(●&#039;◡&#039;●)ﾉ'/>\n" +
        "                </p></form>" +
        "        </div>" +
        "<div class='OwO OwO-open' style='position: relative;left: 0px;top:-60px'>\n" +
        "    <div class='OwO-logo' id='biaoqing3' onclick='biaoqingclick(" + thisId + ")'><span><font style='vertical-align: inherit;' ><font\n" +
        "            style='vertical-align: inherit;' id='biaoqing2' >OωO表情</font></font>\n" +
        "         </span></div>\n" +
        "    <span id='tixing_liuyan' style='color: red;font-size: 12px;margin-left: 20px'></span>\n" +
        "    <div class='OwO-body' style='width: 100%;display: none' id='biaoqing" + thisId + "'>\n" +
        "        <ul class='OwO-items OwO-items-image OwO-items-show' style='max-height: 197px;'>\n" +
        "            <li class='OwO-item' title='$[:微笑:]' data='$[:微笑:]' value='123'  onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/微笑.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:撇嘴:]' data='$[:撇嘴:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/撇嘴.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:色:]' data='$[:色:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/色.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:发呆:]' data='$[:发呆:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/发呆.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:得意:]' data='$[:得意:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/得意.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:流泪:]' data='$[:流泪:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/流泪.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:害羞:]' data='$[:害羞:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/害羞.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:闭嘴:]' data='$[:闭嘴:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/闭嘴.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:睡:]' data='$[:睡:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/睡.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:大哭:]' data='$[:大哭:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/大哭.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:尴尬:]' data='$[:尴尬:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/尴尬.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:发怒:]' data='$[:发怒:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/发怒.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:调皮:]' data='$[:调皮:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/调皮.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:惊讶:]' data='$[:惊讶:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/惊讶.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:难过:]' data='$[:难过:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/难过.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:酷:]' data='$[:酷:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/酷.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:冷汗:]' data='$[:冷汗:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/冷汗.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:抓狂:]' data='$[:抓狂:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/抓狂.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:吐:]' data='$[:吐:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/吐.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:偷笑:]' data='$[:偷笑:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/偷笑.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:可爱:]' data='$[:可爱:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/可爱.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:白眼:]' data='$[:白眼:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/白眼.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:傲慢:]' data='$[:傲慢:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/傲慢.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:饥饿:]' data='$[:饥饿:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/饥饿.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:困:]' data='$[:困:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/困.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:惊恐:]' data='$[:惊恐:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/惊恐.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:流汗:]' data='$[:流汗:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/流汗.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:憨笑:]' data='$[:憨笑:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/憨笑.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:大兵:]' data='$[:大兵:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/大兵.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:奋斗:]' data='$[:奋斗:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/奋斗.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:咒骂:]' data='$[:咒骂:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/咒骂.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:疑问:]' data='$[:疑问:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/疑问.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:嘘:]' data='$[:嘘:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/嘘.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:晕:]' data='$[:晕:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/晕.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:折磨:]' data='$[:折磨:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/折磨.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:衰:]' data='$[:衰:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/衰.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:骷髅:]' data='$[:骷髅:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/骷髅.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:敲打:]' data='$[:敲打:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/敲打.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:再见:]' data='$[:再见:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/再见.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:擦汗:]' data='$[:擦汗:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/擦汗.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:抠鼻:]' data='$[:抠鼻:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/抠鼻.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:鼓掌:]' data='$[:鼓掌:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/鼓掌.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:嗅大了:]' data='$[:嗅大了:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/嗅大了.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:坏笑:]' data='$[:坏笑:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/坏笑.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:左哼哼:]' data='$[:左哼哼:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/左哼哼.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:右哼哼:]' data='$[:右哼哼:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/右哼哼.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:哈欠:]' data='$[:哈欠:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/哈欠.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:鄙视:]' data='$[:鄙视:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/鄙视.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:委屈:]' data='$[:委屈:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/委屈.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:可怜:]' data='$[:可怜:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/可怜.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:阴险:]' data='$[:阴险:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/阴险.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:亲亲:]' data='$[:亲亲:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/亲亲.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:吓:]' data='$[:吓:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/吓.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:快哭了:]' data='$[:快哭了:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/快哭了.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:眨眼睛:]' data='$[:眨眼睛:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/眨眼睛.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:泪奔:]' data='$[:泪奔:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/泪奔.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:无奈:]' data='$[:无奈:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/无奈.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:卖萌:]' data='$[:卖萌:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/卖萌.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:小纠结:]' data='$[:小纠结:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/小纠结.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:喷血:]' data='$[:喷血:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/喷血.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:斜眼笑:]' data='$[:斜眼笑:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/斜眼笑.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:doge:]' data='$[:doge:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/doge.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:惊喜:]' data='$[:惊喜:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/惊喜.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:骚扰:]' data='$[:骚扰:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/骚扰.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:笑哭:]' data='$[:笑哭:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/笑哭.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:我最美:]' data='$[:我最美:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/我最美.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:托腮:]' data='$[:托腮:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/托腮.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:菜刀:]' data='$[:菜刀:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/菜刀.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:西瓜:]' data='$[:西瓜:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/西瓜.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:啤酒:]' data='$[:啤酒:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/啤酒.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:篮球:]' data='$[:篮球:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/篮球.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:乒乓:]' data='$[:乒乓:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/乒乓.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:咖啡:]' data='$[:咖啡:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/咖啡.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:饭:]' data='$[:饭:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/饭.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:猪头:]' data='$[:猪头:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/猪头.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:玫瑰:]' data='$[:玫瑰:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/玫瑰.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:凋谢:]' data='$[:凋谢:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/凋谢.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:心:]' data='$[:心:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/心.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:心碎:]' data='$[:心碎:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/心碎.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:蛋糕:]' data='$[:蛋糕:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/蛋糕.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:闪电:]' data='$[:闪电:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/闪电.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:炸弹:]' data='$[:炸弹:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/炸弹.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:刀:]' data='$[:刀:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/刀.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:足球:]' data='$[:足球:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/足球.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:瓢虫:]' data='$[:瓢虫:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/瓢虫.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:便便:]' data='$[:便便:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/便便.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:夜晚:]' data='$[:夜晚:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/夜晚.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:太阳:]' data='$[:太阳:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/太阳.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:礼物:]' data='$[:礼物:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/礼物.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:拥抱:]' data='$[:拥抱:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/拥抱.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:强:]' data='$[:强:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/强.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:弱:]' data='$[:弱:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/弱.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:握手:]' data='$[:握手:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/握手.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:胜利:]' data='$[:胜利:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/胜利.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:抱拳:]' data='$[:抱拳:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/抱拳.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:勾引:]' data='$[:勾引:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/勾引.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:拳头:]' data='$[:拳头:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/拳头.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:差劲:]' data='$[:差劲:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/差劲.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:爱你:]' data='$[:爱你:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/爱你.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:NO:]' data='$[:NO:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/NO.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:OK:]' data='$[:OK:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/OK.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:爱情:]' data='$[:爱情:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/爱情.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:飞吻:]' data='$[:飞吻:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/飞吻.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:发财:]' data='$[:发财:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/发财.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:帅:]' data='$[:帅:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/帅.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:雨伞:]' data='$[:雨伞:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/雨伞.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:高铁左车头:]' data='$[:高铁左车头:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/高铁左车头.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:车厢:]' data='$[:车厢:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/车厢.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:高铁右车头:]' data='$[:高铁右车头:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/高铁右车头.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:纸巾:]' data='$[:纸巾:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/纸巾.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:右太极:]' data='$[:右太极:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/右太极.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:左太极:]' data='$[:左太极:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/左太极.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:献吻:]' data='$[:献吻:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/献吻.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:街舞:]' data='$[:街舞:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/街舞.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:激动:]' data='$[:激动:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/激动.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:挥动:]' data='$[:挥动:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/挥动.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:跳绳:]' data='$[:跳绳:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/跳绳.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:回头:]' data='$[:回头:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/回头.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:磕头:]' data='$[:磕头:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/磕头.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:转圈:]' data='$[:转圈:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/转圈.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:怄火:]' data='$[:怄火:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/怄火.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:发抖:]' data='$[:发抖:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/发抖.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:跳跳:]' data='$[:跳跳:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/跳跳.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:爆筋:]' data='$[:爆筋:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/爆筋.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:沙发:]' data='$[:沙发:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/沙发.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:钞票:]' data='$[:钞票:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/钞票.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:蜡烛:]' data='$[:蜡烛:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/蜡烛.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:手枪:]' data='$[:手枪:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/手枪.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:灯:]' data='$[:灯:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/灯.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:香蕉:]' data='$[:香蕉:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/香蕉.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:吻:]' data='$[:吻:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/吻.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:下雨:]' data='$[:下雨:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/下雨.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:闹钟:]' data='$[:闹钟:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/闹钟.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:囍:]' data='$[:囍:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/囍.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:棒棒糖:]' data='$[:棒棒糖:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/棒棒糖.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:面条:]' data='$[:面条:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/面条.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:车:]' data='$[:车:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/车.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:邮件:]' data='$[:邮件:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/邮件.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:风车:]' data='$[:风车:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/风车.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:药丸:]' data='$[:药丸:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/药丸.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:奶瓶:]' data='$[:奶瓶:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/奶瓶.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:灯笼:]' data='$[:灯笼:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/灯笼.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:青蛙:]' data='$[:青蛙:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/青蛙.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:戒指:]' data='$[:戒指:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/戒指.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:K歌:]' data='$[:K歌:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/K歌.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:熊猫:]' data='$[:熊猫:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/熊猫.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:喝彩:]' data='$[:喝彩:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/喝彩.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:购物:]' data='$[:购物:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/购物.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:多云:]' data='$[:多云:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/多云.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:鞭炮:]' data='$[:鞭炮:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/鞭炮.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:飞机:]' data='$[:飞机:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/飞机.gif'></li>\n" +
        "            <li class='OwO-item' title='$[:气球:]' data='$[:气球:]'   onclick='biaoqinglist(this," + thisId + ")'><img\n" +
        "                    src='../css/guangchang/木东驿站_files/气球.gif'></li>\n" +
        "        </ul>\n" +
        "        <div class='OwO-bar'>\n" +
        "            <ul class='OwO-packages'>\n" +
        "                <li class='OwO-package-active'><span><font style='vertical-align: inherit;'><font\n" +
        "                        style='vertical-align: inherit;'>QQ2017</font></font></span></li>\n" +
        "            </ul>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "</div>"
    )
    ;
}

function huifuclick2(beforgcid, index) {
    var infor = $("#comment" + beforgcid).val();
    if (infor == null || infor.length < 6) {
        $("#aa" + beforgcid).css("color", "red");
        $("#aa" + beforgcid).css("font-size", "12px");
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

function biaoqingclick(biaoqingId) {
    if (biaoqingId == null || biaoqingId.length <= 0) {
        $("#biaoqing").fadeToggle(0);
        return;
    }
    $("#biaoqing" + biaoqingId).fadeToggle(0);
}

function biaoqinglist(obj, clickid) {
    var thisObj = $(obj);      //this通过JS转jq对象
    var val = $('#comment' + clickid).val();
    $('#comment' + clickid).val(val + $(thisObj).attr('title'));

}

$(document).ready(function () {
    $('.OwO-item').click(function () {
        var val = $('#comment').val();
        $('#comment').val(val + $(this).attr('title'));
    });

    $(document).bind('click', function (e) {
        var id = $(e.target).attr("id");
        var src = $(e.target).attr("src");
        /*判断不是点击显示按钮和表情时，所有class隐藏*/
        if (!/^biaoqing.*$/.test(id) && !/^.*.gif$/.test(src)) {
            var $elements = $('.OwO-body');
            $elements.each(function () {
                var $this = $(this);
                console.log("进入");
                $this.css("display", "none");
            });
        }
    });


})



