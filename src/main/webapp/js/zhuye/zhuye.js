function click_gq() {
    if ("${fw_id}" == null || "${fw_id==user.uid?true:false}") {
        $("#gexingqianming").html("");
        $("#updategq").css("display", "block");
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
                    $("#gexingqianming").html(obj.data);
                } else {
                    $("#gexingqianming").html("${user.qianming}");
                }

            }
        }
    )
    ;
}