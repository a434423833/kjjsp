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
                    for (var i = 0; i < obj.data.length; i++) {
                        var data = obj.data[i];
                        var sex1 = "<spanclass='ua'><span class='os_8_1'>♂</span></span>";
                        if (data.sex == '2') {
                            sex1 = "<span class='ua'><span class='ua_chrome'></i>♀</span></span>";
                        }
                        str += " <li class='comment even thread-even depth-1' id='li-comment-2952'>"
                            + "<div id='comment-2952' class='comment-body media'>"
                            + "<div class='comment-avartar pull-left'>"
                            + "<img alt='无头像' src='../" + data.file + "' height='50' width='50'/></div>"
                            + "<div class='comment-context media-body'>"
                            + " <div class='comment-head'>"
                            + "<a href='' rel='external nofollow' target='_blank'data-user-id='3e6eaa0f1ac35fac791766d1363bb9c8'>" + data.username + "</a>"
                            + sex1
                            + " </div>"
                            + "<div class='comment-content'>"
                            + "  <p>" + data.infor + "</p></div>"
                            + " <div class='comment-footer'>"
                            + "<span class='comment-date'>" + data.time + "</span>"
                            + " <span class='comment-reply'><a>回复</a></span>"
                            + " </div></div></div></li> ";
                    }
                    str += "<nav class='navigation comment-navigation' role='navigation' style='margin-left: 200px'>" +
                        "<h1 class='screen-reader-text section-heading'>Comment navigation</h1>" +
                        " <div class='nav-previous'>当前页面：" + obj.page.pageIndex + "/" + obj.page.pageCount + "&nbsp;&nbsp;&nbsp;" +
                        "<a href=###' onclick='load_liuyan(" + (obj.page.pageIndex - 1) + "," + obj.page.pageCount + ")'> 上一页</a> <a href='###' onclick='load_liuyan(" + (obj.page.pageIndex + 1) + "," + obj.page.pageCount + ")'> 下一页</a></div>" +
                        "<div class='nav-next'></div></nav>";
                    $("#guangchang_liuyan").html(str);
                    $("#span_count").html(obj.page.count);

                } else {

                }

            }
        }
    )
    ;

}