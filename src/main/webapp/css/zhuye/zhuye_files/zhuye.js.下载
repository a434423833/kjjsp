var beginqianm = null;
function click_gq(qianming) {
    if ("${fw_id}" == null || "${fw_id==user.uid?true:false}") {
        beginqianm = $("#gexingqianming").html();
        if (qianming != null || qianming != "") {
            $("#gexingqianming").html(beginqianm);
        }
        $("#gexingqianming").html("");
        $("#updategq").css("display", "block");
        $("#updategq").value(beginqianm);
    }
}

function blur_gq() {
    var qianming = $("#updategq").val();
    $("#updategq").css("display", "none");
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