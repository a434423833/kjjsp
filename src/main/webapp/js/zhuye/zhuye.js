var beginqianm = null;
function click_gq() {
    alert("${dangqianquanxian}");
    if ("${dangqianquanxian}" == 0) {
        beginqianm = $("#gexingqianming").html();
        $("#gexingqianming").html("");
        if (beginqianm == null || beginqianm == "") {
            $("#updategq").val("");
            $("#updategq").css("display", "block");
            return;
        }
        $("#updategq").css("display", "block");
        $("#updategq").val(beginqianm);
    }
}

function blur_gq() {
    var qianming = $("#updategq").val();
    $("#updategq").css("display", "none");
    if (qianming == beginqianm) {
        $("#updategq").css("display", "none");
        $("#gexingqianming").html(beginqianm);
        return;
    }
    $.ajax({
            type: "POST",      //传输方式
            url: "../updategq",           //地址
            data: {            //传递的参数
                "qianming": qianming
            },
            success: function (obj) {
                if (obj.code == 0) {
                    if (obj.data == "" || obj.data == null || obj.data.length == 0) {
                        $("#gexingqianming").html("还没有设置个性签名");
                        return;
                    }
                    $("#gexingqianming").html(obj.data);
                } else {
                    $("#gexingqianming").html(beginqianm);
                }

            }
        }
    )
    ;
}