jQuery(document).ready(function ($) {
    $("#spig").mousedown(function (e) {
        if (e.which == 3) {
            showMessage('秘密通道：<br /> <a href="https://www.dreamwings.cn" title="首页">首页</a> <a href="https://www.dreamwings.cn/feed" title="订阅">订阅</a> <a href="https://www.dreamwings.cn/msg" title="留言">留言</a>', 10000)
        }
    });
    $("#spig").bind("contextmenu", function (e) {
        return false
    })
});
jQuery(document).ready(function ($) {
    $("#message").hover(function () {
        $("#message").fadeTo("100", 1)
    })
});
jQuery(document).ready(function ($) {
    $(".mumu").mouseover(function () {
        $(".mumu").fadeTo("300", 0.3);
        msgs = ["我隐身了，你看不到我", "我会隐身哦！嘿嘿！", "别动手动脚的，把手拿开！", "把手拿开我才出来！"];
        var i = Math.floor(Math.random() * msgs.length);
        showMessage(msgs[i])
    });
    $(".mumu").mouseout(function () {
        $(".mumu").fadeTo("300", 1)
    })
});
jQuery(document).ready(function ($) {
    if (isindex) {
        var now = (new Date()).getHours();
        if (now > 0 && now <= 6) {
            showMessage(visitor + " 你是夜猫子呀？还不睡觉，明天起的来么你？", 6000)
        } else {
            if (now > 6 && now <= 11) {
                showMessage(visitor + " 早上好，早起的鸟儿有虫吃噢！早起的虫儿被鸟吃，你是鸟儿还是虫儿？嘻嘻！", 6000)
            } else {
                if (now > 11 && now <= 14) {
                    showMessage(visitor + " 中午了，吃饭了么？不要饿着了，饿死了谁来挺我呀！", 6000)
                } else {
                    if (now > 14 && now <= 18) {
                        showMessage(visitor + " 中午的时光真难熬！还好有你在！", 6000)
                    } else {
                        showMessage(visitor + " 快来逗我玩吧！", 6000)
                    }
                }
            }
        }
    } else {
        showMessage("欢迎" + visitor + "来到 “夢の彼方は千千” 阅读 " + title + " ", 6000)
    }
    $(".spig").animate({top: $(".spig").offset().top + 300, left: document.body.offsetWidth - 160}, {
        queue: false,
        duration: 1000
    })
});
jQuery(document).ready(function ($) {
    $("h1 a").click(function () {
        showMessage('正在加载《<span style="color:#0099cc;">' + $(this).text() + "</span>》请稍候")
    });
    $("h1 a").mouseover(function () {
        showMessage('要看看《<span style="color:#0099cc;">' + $(this).text() + "</span>》这篇文章么？")
    });
    $(".next-posts").mouseover(function () {
        showMessage("要翻到上一页吗?")
    });
    $(".previous-posts").mouseover(function () {
        showMessage("要翻到下一页吗?")
    });
    $(".nav-previous").mouseover(function () {
        showMessage("要看上一篇吗?")
    });
    $(".nav-next").mouseover(function () {
        showMessage("要看下一篇吗?")
    });
    $(".link-contentqt li a").mouseover(function () {
        showMessage('去 <span style="color:#0099cc;">' + $(this).text() + "</span> 逛逛")
    });
    $("#s").focus(function () {
        showMessage("输入你想搜索的关键词再按Enter(回车)键就可以搜索啦!")
    });
    $(".like-vote").mouseover(function () {
        showMessage("喜欢我嘛~")
    });
    $(".aplayer").mouseover(function () {
        showMessage("想听听音乐么？")
    });
    $(".text-logo a").mouseover(function () {
        showMessage("点它就可以回到首页啦！")
    });
    $(".scroll-up a").mouseover(function () {
        showMessage("点它可以直接上升到顶部哦.")
    });
    $(".close-effects").mouseover(function () {
        showMessage("古娜拉黑暗之神、魔法、消失(°?°)?")
    })
});
jQuery(document).ready(function ($) {
    window.setInterval(function () {
        msgs = [$("#hitokoto").text()];
        var i = Math.floor(Math.random() * msgs.length);
        s = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.75, -0.1, -0.2, -0.3, -0.4, -0.5, -0.6, -0.7, -0.75];
        var i1 = Math.floor(Math.random() * s.length);
        var i2 = Math.floor(Math.random() * s.length);
        $(".spig").animate({
            left: document.body.offsetWidth / 2 * (1 + s[i1]),
            top: document.body.offsetheight / 2 * (1 + s[i1])
        }, {duration: 10000, complete: showMessage(msgs[i])})
    }, 45000)
});
jQuery(document).ready(function ($) {
    var f = $(".spig").offset().top;
    $(window).scroll(function () {
        $(".spig").animate({top: $(window).scrollTop() + f + 300}, {queue: false, duration: 1000})
    })
});
jQuery(document).ready(function ($) {
    var stat_click = 0;
    $(".mumu").click(function () {
        if (!ismove) {
            stat_click++;
            if (stat_click <= 4) {
                msgs = ["筋斗云！~我飞！", "我跑呀跑呀跑！~~", "别摸我，大男人，有什么好摸的！", "惹不起你，我还躲不起你么？", "不要摸我了，我会告诉老婆来打你的！", "干嘛动我呀！小心我咬你！"];
                var i = Math.floor(Math.random() * msgs.length);
                showMessage(msgs[i])
            } else {
                msgs = ["你有完没完呀？", "你已经摸我" + stat_click + "次了", "非礼呀！救命！"];
                var i = Math.floor(Math.random() * msgs.length);
                showMessage(msgs[i])
            }
            s = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.75, -0.1, -0.2, -0.3, -0.4, -0.5, -0.6, -0.7, -0.75];
            var i1 = Math.floor(Math.random() * s.length);
            var i2 = Math.floor(Math.random() * s.length);
            $(".spig").animate({
                left: document.body.offsetWidth / 2 * (1 + s[i1]),
                top: document.body.offsetheight / 2 * (1 + s[i1])
            }, {duration: 500, complete: showMessage(msgs[i])})
        } else {
            ismove = false
        }
    })
});
function showMessage(a, b) {
    if (b == null) {
        b = 10000
    }
    jQuery("#message").hide().stop();
    jQuery("#message").html(a);
    jQuery("#message").fadeIn();
    jQuery("#message").fadeTo("1", 1);
    jQuery("#message").fadeOut(b)
}
var _move = false;
var ismove = false;
var _x, _y;
jQuery(document).ready(function ($) {
    $("#spig").mousedown(function (e) {
        _move = true;
        _x = e.pageX - parseInt($("#spig").css("left"));
        _y = e.pageY - parseInt($("#spig").css("top"))
    });
    $(document).mousemove(function (e) {
        if (_move) {
            var x = e.pageX - _x;
            var y = e.pageY - _y;
            var wx = $(window).width() - $("#spig").width();
            var dy = $(document).height() - $("#spig").height();
            if (x >= 0 && x <= wx && y > 0 && y <= dy) {
                $("#spig").css({top: y, left: x});
                ismove = true
            }
        }
    }).mouseup(function () {
        _move = false
    })
});