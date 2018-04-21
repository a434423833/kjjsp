var str = [];
$(document).ready(function () {
        /**
         * new点击
         */
        $("#newButton").click(function () {
            $.ajax({
                type: "POST",      //传输方式
                url: "../../game/2048/initialization", //地址
                dataType: 'json',
                contentType: 'application/json',
                data: JSON.stringify({            //传递的参数
                }),
                success: function (obj) {
                    for (var i = 0; i < obj.data.length; i++) {
                        str[i] = obj.data[i];
                        $("#show" + i).html("<img src='../../..//img/game/" + str[i] + ".png' />");
                    }
                },
                error: function (data, type, err) {
                    alert(+data.responseJSON.status + ":" + data.responseJSON.message);
                }
            });
        });
        /**
         * 上下左右输入
         * inputChat textarea 是通过jQuery 选择器选中的文本元素
         * keydown当选中的文本发生键盘弹起时
         */
        $(document).on('keydown', function (e) {
            if (e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40) {
                var state = 0;
                for (var i = 0; i < 16; i++) {
                    if (str[i] > 0) {
                        state++;//判断是否开始
                    }
                }
                if (state == 0) {
                    return;
                }
                $.ajax({
                        type: "POST",      //传输方式
                        url: "../../game/2048/getKey", //地址
                        dataType: 'json',
                        contentType: 'application/json',
                        async: false,
                        data: JSON.stringify({            //传递的参数
                            "key": e.keyCode,
                            "str": str
                        }),
                        success: function (obj) {
                            for (var i = 0; i < obj.data.length; i++) {
                                str[i] = obj.data[i];
                                $("#show" + i).html("<img src='../../../img/game/" + str[i] + ".png' />");

                            }
                        },
                        error: function (data, type, err) {
                            alert(+data.responseJSON.status + ":" + data.responseJSON.message);
                        }
                    }
                );
            }
        })
        ;
    }
)
