/**
 * 添加和图灵的聊天对话
 * @param data
 */
function tuLingAdd(data) {
    var str = "";
    if (data.index == 0) {
        str += "<li id='chatli'><p class='time'><span class='messageTime'>" + data.time + "</span></p>" +
            " <div class='messageContent'><img width='30' height='30' src='../img/xiaomo.png' class='avatar'>" +
            " <div class='text'>" + data.value + "" +
            "</div></div>" +
            "</li>";
    } else {
        str += "<li><p class='time'><span class='messageTime'>" + data.time + "</span></p> " +
            "<div class='messageContent self'><img width='30' height='30' src='../imgPathActionDownLoad?url=" + myfile + "' class='avatar'>" +
            " <div class='text'>" + data.value + " </div> " +
            "</div></li>";
    }
    $("#chatRecord").append(str);
}

/**
 * 和图灵发送聊天记录
 * @param content
 */
function toAddTuLingChat(content) {
    var str_ = {'index': uid, 'value': content, 'time': getNowDate()};
    tuLingChatJson.push(str_);
    tuLingAdd(str_);
    gundongdiv(500 * tuLingChatJson.length);
    setTimeout(function () {
        toTuLingChatReturn(content);//带参数
    }, 300)//0.2S判断一次
}
function toTuLingChatReturn(content) {
    $.ajax({
        type: "POST",      //传输方式
        async: false,   //同步操作
        url: "../sendTuLing", //地址
        data: {            //传递的参数
            "content": content,
        },
        success: function (obj) {
            obj = JSON.parse(obj);
            if (obj.code == 100000) {//图灵返回正确码
                var str_ = {'index': 0, 'value': obj.text, 'time': getNowDate()};
                tuLingChatJson.push(str_);
                tuLingAdd(str_);
            }
        }
    });
    sessionStorage.setItem("tuling", JSON.stringify(tuLingChatJson));
    gundongdiv(500 * tuLingChatJson.length);
}
/**
 * 显示与图灵的聊天
 */
function tuLingShow() {
    var str = "";
    for (var i = 0; i < tuLingChatJson.length; i++) {
        var data = tuLingChatJson[i];
        if (data.index == 0) {
            str += "<li><p class='time'><span class='messageTime'>" + data.time + "</span></p>" +
                " <div class='messageContent'><img width='30' height='30' src='../img/xiaomo.png' class='avatar'>" +
                " <div class='text'>" + data.value + "" +
                "</div></div>" +
                "</li>";
        } else if (data.index == uid) {
            str += "<li><p class='time'><span class='messageTime'>" + data.time + "</span></p> " +
                "<div class='messageContent self'><img width='30' height='30' src='../imgPathActionDownLoad?url=" + myfile + "' class='avatar'>" +
                " <div class='text'>" + data.value + " </div> " +
                "</div></li>";
        }
        $("#chatRecord").html(str);
        gundongdiv(500 * tuLingChatJson.length);
    }
}