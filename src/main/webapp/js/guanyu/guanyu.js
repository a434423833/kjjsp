function yizhanload() {
    $.ajax({
            type: "POST",      //传输方式
            url: "../getYiZhanShiJi",           //地址
            data: {},
            success: function (obj) {
                if (obj.code == 0) {
                    var str = "";
                    var obj = obj.data;
                    for (var i = 0; i < obj.length; i++) {
                        var data = obj[i];
                        var monthList = data.listYear;
                        for (var j = 0; j < monthList.length; j++) {
                            var objMonth = monthList[j];
                            var month = objMonth.month;
                            if (month < 10) {
                                month = "0" + month.toString();
                            }
                            str += "<h4 class='m-title' onclick='dashijiclick(" + data.year + "," + objMonth.month + ")'>" + data.year + "-" + month + "</h4>" +
                                "<ul class='archives-monthlisting' style='padding-left: 0px;' id='dashiji" + data.year + objMonth.month + "' >";
                            for (var z = 0; z < objMonth.list.length; z++) {
                                var objDay = objMonth.list[z];
                                var day = objDay.day;
                                if (day < 10) {
                                    day = "0" + day.toString();
                                }
                                var height = 32;
                                height *= (objDay.infor.length) / 32 + 1;//拿到a表情的高度
                                str += " <li style='list-style-type:none;'>" +
                                    "<a href='javascript:void(0);' target='_blank' style='height: " + height +
                                    "px'><span>" + objDay.year + "-" + month + "-" + day + "</span>" +
                                    "<div class='atitle' style='width: 567px;float:right'>" + objDay.infor + "</div></a></li>";
                            }
                            str += "</ul >";
                        }
                    }
                    $("#yizhanxianshi").html(str);
                }
            }
        }
    )
    ;

}
function dashijiclick(year, month) {
    $("#dashiji" + year + "" + month).fadeToggle(300);
}
function fabiaoshiji() {
    if ("${user.uid==18?true:flase}") {
        $("#fabiaoshiji").fadeToggle(300);
    } else {
        alert("你并不是管理员,无法添加事记");
    }
}
function fabuclick() {
    $("#fabiaoshiji").fadeToggle(300);
    var infor = $("#dashijiwenbenyu").val();
    $.ajax({
            type: "POST",      //传输方式
            url: "../addYiZhanShiJi",           //地址
            data: {
                infor: infor
            },
            success: function (obj) {
                if (obj.code == 0) {
                    yizhanload();
                }
            }
        }
    );
}