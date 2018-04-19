var str = [];
$(document).ready(function () {
        /**
         * 上下左右输入
         * inputChat textarea 是通过jQuery 选择器选中的文本元素
         * keydown当选中的文本发生键盘弹起时
         */
        $(document).on('keydown', function (e) {
            alert(JSON.stringify(str1));
            if (e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40) {
                $.ajax({
                    type: "POST",      //传输方式
                    url: "../../selectRecord", //地址
                    dataType: 'json',
                    contentType: 'application/json',
                    data: JSON.stringify({            //传递的参数
                        "key": e.keyCode,
                        "str": str
                    }),
                    success: function (obj) {

                    },
                    error: function (data, type, err) {
                        alert(+data.responseJSON.status + ":" + data.responseJSON.message);
                    }
                });
            }
        })
        ;
    }
)
