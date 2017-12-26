<%@page language="java" import="java.util.*" pageEncoding="UTF-8" %>
<%@page import="com.yijiupi.kjjsp.pojo.UserPO" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
    <title></title>
    <meta charset="UTF-8">
    <script src="js/jquery-2.1.0.js"></script>
    <link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>

<body>
<div id="d1" style="position:absolute; width:100%; height:100%; z-index:-1">
    <img src="img/ca86e620b9e623ff-d1c9f350507d226e-600497da68e8016190a177fbecafe09b.jpg" height="100%" width="100%"/>
</div>
<nav class="navbar navbar-inverse">
    <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="col-md-8 col-md-offset-4">
            <div class="navbar-header">
                <a class="navbar-brand" href="#" style="color: yellow;font-size: 100%;"><span
                        class="glyphicon glyphicon-star" aria-hidden="true"></span>主页展示</a>
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">

                    <li><a href="zhuye.jsp">我的主页</a></li>
                    <li>
                        <c:if var="result" test="${param.fw_id!=null?false:true}">
                            <button type="button" class="btn btn-primary btn-lg"
                                    data-toggle="modal" data-target="#myModal">添加好友
                            </button>
                        </c:if>
                    </li>
                    <li>
                        <c:if var="result" test="${param.fw_id!=null?false:true}">
                        <button type="button" class="btn btn-primary btn-lg"
                                data-toggle="modal" data-target="#myModal1" onclick="chick2()">信息显示
                        </button>
                    </li>
                    </c:if>
                </ul>


                <ul class="nav navbar-nav navbar-right">
                    <li><a href="logout"><span class="glyphicon glyphicon-log-out"
                                               aria-hidden="true"></span>退出</a></li>

                </ul>
            </div><!-- /.navbar-collapse -->
        </div>
    </div><!-- /.container-fluid -->
</nav>

<h1 class="col-md-6 col-md-offset-3"> ${param.fw_name==null?user.username:param.fw_name} &nbsp;&nbsp;<small
        style="color: darkorange;">的主页
</small>
</h1>

<div class="row">
    <div class="col-md-1 col-md-offset-5"><span><a href="###"
                                                   onclick="click9(${param.fw_id==null?user.uid:param.fw_id})"><img
            src="img/qq_shuos.png"/></a></span></br>
        <span><a href="###" style="padding-left:10px" onclick="click9(${param.fw_id==null?user.uid:param.fw_id})">说说</a></span>
    </div>

    <div class="col-md-3"><span><a href="servlet?task=lyb&id=${param.fw_id==null?session_.usid:param.fw_id}"><img
            src="img/qq_lyb.png"/></a></span></br> <span><a
            href="servlet?task=lyb&id=${param.fw_id==null?user.uid:param.fw_id}"
            style="padding-left:5px">留言板</a></span></div>

    <div class="col-md-2">
        <tr>
            <td width="19" align="center" class="text_red1"><span class="text_red"></span></td>

            <td width="104" height="35" align="left"><label>

            </label></td>
            <iframe name="sinaWeatherTool"
                    src="http://weather.news.sina.com.cn/chajian/iframe/weatherStyle40.html?city=%E6%AD%A6%E6%B1%89"
                    width="260" height="113" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0"
                    scrolling="no"></iframe>
        </tr>
        <tr><span></span>
    </div>
</div>
<h1></h1>
<div class="row">
    <div class="col-md-2 col-md-offset-1"><c:if var="result" test="${param.fw_id!=null?false:true}">
        <button type="button" class="btn btn-default" onclick="click4()"> 好友列表</button>
    </c:if>

    </div>

    <div class="col-md-6">
        <div class="input-group">


        </div><!-- /input-group -->
    </div>
    <div class="col-md-1 col-md-offset-1"><a href="###" onclick="lookVisitor()">查看来访人员</a></div>
</div>
<div class="row" id="ycxs" style="display:none" onload="load1()">
    <div class="row" style="height:20px"></div>
    <div class="col-md-4">
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-5" style="border: 1px solid;">
                <div class="col-md-2"></div>
                <table id="table3">

                </table>
            </div>
        </div>
    </div>
</div>


<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog"
     aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"
                        aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title" id="myModalLabel">好友添加</h4>
            </div>
            <div class="modal-body">
                <table>
                    <tr>
                        <td style="width:220px;"><input type="text" class="form-control" id="exampleInputName2"
                                                        placeholder="请输入查找的用户名" style="width:200px;"></td>
                        <td><input type="submit" class="btn btn-info" value="查找" onclick="ajxjForname()"></td>
                    </tr>
                    <tr>
                        <td style="height:20px"></td>
                    </tr>
                    <tr>
                        <td><span id="span1"></span></td>
                        <td><span id="span2"></span></td>
                        <td><span id="span3"></span></td>
                    </tr>
                    <tr>
                    </tr>
                </table>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default"
                        data-dismiss="modal">Close
                </button>
                <button type="button" class="btn btn-primary">Save
                    changes
                </button>
            </div>
        </div>
    </div>
</div>


<!-- Modal1 -->
<div class="modal fade" id="myModal1" tabindex="-1" role="dialog"
     aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"
                        aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title" id="myModalLabel">当前信息</h4>
            </div>
            <div class="modal-body" id="table1">


            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default"
                        data-dismiss="modal">Close
                </button>
                <button type="button" class="btn btn-primary">Save
                    changes
                </button>
            </div>
        </div>
    </div>
</div>


<!-- Modal2 -->
<div class="modal fade" id="myModal2" tabindex="-1" role="dialog"
     aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"
                        aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title" id="myModalLabel">聊天会话</h4>
            </div>
            <div class="modal-body" id="table1">
                <table id="liaot" class="table">
                    <!--聊 天消息 -->
                </table>
                <table>
                    <tr>
                        <td><input type="text" id='infor_lt' class="form-control " placeholder="聊天信息"
                                   style="height: 30px;width: 400px;"></td>
                        <td>
                            <button type="button" class="btn btn-info" onclick="click7()">发送</button>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default"
                        data-dismiss="modal">Close
                </button>
                <button type="button" class="btn btn-primary">Save
                    changes
                </button>
            </div>
        </div>
    </div>
</div>
</body>
<script>
    var friendname = "";
    var myVar;
    var index = 1;
    function addForname() {
        var usn = $("#exampleInputName2").val();
        if (usn.length != 0 || usn != null) {
            $.ajax({
                type: "POST",      //传输方式
                url: "addFriend",           //地址
                data: {            //传递的参数
                    friendName: usn
                },
                success: function (obj) {
                    if (obj.code == 0) {
                        $("#span3").html("已经发送申请");
                        return;
                    } else if (obj.code == 101) {
                        $("#span3").css("color", "red");
                        $("#span3").html("已经是您好友");
                        return;
                    }
                    $("#span3").css("color", "red");
                    $("#span3").html("发送失败");
                }
            });

        }
    }
    function ajxjForname() {
        var usn = $("#exampleInputName2").val();
        if (usn == "${user.username}") {
            $("#span1").html("不能查找自己");
            return;
        }
        $("#span3").html("");
        if (usn.length != 0 || usn != null) {
            $.ajax({
                type: "POST",      //传输方式
                url: "findFriend",           //地址
                data: {            //传递的参数
                    friendName: usn
                },
                success: function (obj) {    //当回调时执行
                    if (obj.code == 0) {
                        $("#span1").html(usn);
                        $("#span3").html("");
                        $("#span2").html("<input type='submit' class='btn btn-success' value='添加' onclick='addForname()'></td>");
                    } else {
                        $("#span1").html("对不起，查无此人");
                        $("#span2").html("");
                    }

                }
            });
        }
    }
    function chick2() {
        $.ajax({
            type: "POST",      //传输方式
            url: "showMessage",           //地址
            data: {            //传递的参数
            },
            success: function (obj) {    //当回调时执行
                if (obj.code == 0) {
                    var str1 = "<table id='table2' style='margin-left:150px' >";
                    for (var i = 0; i < obj.data.length; i++) {
                        str1 += "<tr id='b" + obj.data[i].uid + "'>" +
                            "<td>" + obj.data[i].qzoneuname + "请求加你为好友</td>" +
                            "<td style='width:50px'></td>" +
                            "<td style='width:50px'> <button type='button'  onclick=\"click3('" + obj.data[i].qzoneuname + "',1," + obj.data[i].uid + ")\" class='btn btn-default btn-xs'>同意</button> </td>" +
                            "<td style='width:50px'> <button type='button'  onclick=\"click3('" + obj.data[i].qzoneuname + "',0," + obj.data[i].uid + ")\" class='btn btn-default btn-xs'>拒绝</button> </td>" +
                            " </tr>";
                    }
                    str1 += "</table>";
                    $("#table1").html(str1);


                } else {
                    $("#table1").html("当前没有任何消息");
                }

            }
        });

    }
    function click3(frienduname, index, fid) {
        $.ajax({
            type: "POST",      //传输方式
            url: "friendApply",           //地址
            data: {            //传递的参数
                index: index,
                fid: fid,
                frienduname: frienduname
            },
            success: function (obj) {
                $("#b" + fid).css("display", "none");
                if ($("#table2").html() == "") {
                    $("#table2").html("当前没有任何消息");
                }
            }
        })
    }
    function click4(index1) {
        if (index1 != null)
            index = index1;
        $.ajax({
            type: "POST",      //传输方式
            url: "getFriend",           //地址
            data: {            //传递的参数
                pageIndexStr: index
            },
            success: function (obj) {
                if (obj.code == 0) {
                    var str1 = "";
                    for (var i = 0; i < obj.data.list.length; i++) {
                        str1 += " <tr id=c" + obj.data.list[i].uid + "><td style='width:50px'> " + obj.data.list[i].frienduname + "</td>" +
                            " <td style='width:50px'><a href='zhuye.jsp?fw_id=" + obj.data.list[i].fid + "&fw_name=" + obj.data.list[i].frienduname + " '>访问</a></td>" +
                            " <td style='width:50px'><a href='###' onclick=\"click5(" + obj.data.list[i].uid + ",'" + obj.data.list[i].frienduname + "')\">删除</a></td>" +
                            "<td style='width:50px'><c:if var='result' test='${fw_id>0?false:true}'>" +
                            "<button type='button' class='.bs-example-modal-sm'" +
                            "data-toggle='modal' data-target='#myModal2' onc" +
                            "lick=\"digui('" + obj.data.list[i].frienduname + "')\">会话</button>" +
                            "</li>" +
                            "</c:if>" +
                            "</td>" +
                            "  </tr>";
                    }
                    if (str1 == "")
                        $("#table3").html("暂时木有好友");
                    else {
                        str1 += "<tr >" +
                            "<td>" + obj.data.pageIndexStr + "/" + obj.data.pageCountStr + "<a href='###' onclick='click4(1)'>首页</a></td>" +
                            "<td><a href='###' onclick='click4(" + ((parseInt(obj.data.pageIndexStr) - 1) < 1 ? obj.data.pageIndexStr : parseInt(obj.data.pageIndexStr) - 1) + ")'>上页</a></td>" +
                            "<td><a href='###' onclick='click4(" + ((parseInt(obj.data.pageIndexStr) + 1) > obj.data.pageCountStr ? obj.data.pageIndexStr : parseInt(obj.data.pageIndexStr) + 1) + ")'>下页</a></td>" +
                            "</tr>";
                        $("#table3").html(str1);
                    }
                }
            }
        })
        if (index1 == null)
            $("#ycxs").fadeToggle(200);

    }
    function click5(id, name) {
        $.ajax({
            type: "POST",      //传输方式
            url: "ajaxServlet",           //地址
            data: {            //传递的参数
                task: "delete_f",
                friendName: name
            },
            success: function (str) {
                var obj = $.parseJSON(str);
                if (obj != null && obj.length != 0) {
                    if (obj.isok == true) {
                        $("#c" + id).css("display", "none");
                    }
                }
            }
        })
    }
    function digui(name) {
        clearInterval(myVar);
        myVar = setInterval("click6('" + name + "')", 200);
    }
    function click6(name) {
        friendname = name;
        if (name != null) {
            $.ajax({
                type: "POST",      //传输方式
                url: "chatFriend",           //地址
                data: {            //传递的参数
                    friendName: name
                },
                success: function (obj) {
                    if (obj.code == 0) {
                        var str1 = "";
                        for (var i = 0; i < obj.data.length; i++) {
                            if (obj.data[i].qzoneUname == "${user.username}")
                                str1 += "<tr><td></td><td></td><td style='width:170px'>" + obj.data[i].infor + "</td><td style='width:80px' >:" + obj.data[i].qzoneUname + "</td></tr>";
                            else
                                str1 += "<tr><td style='width:60px' >" + obj.data[i].qzoneUname + ":</td><td style='width:170px'>" + obj.data[i].infor + "</td><td></td><td></td></tr>";
                        }
                        $("#liaot").html(str1);
                    }
                    /*  else
                     $("#liaot").html("暂时没有聊天消息"); */

                }
            })
        }
    }

    function click7() {
        var infor = $("#infor_lt").val();
        if (infor != null && infor.length > 0) {
            $.ajax({
                type: "POST",      //传输方式
                url: "addChat",           //地址
                data: {            //传递的参数
                    friendName: friendname,
                    infor: infor
                },
                success: function (str) {
                    var obj = $.parseJSON(str);
                    click6(friendname);
                    var infor = $("#infor_lt").val("");
                }
            })
        }
        $("#infor_lt").val(null);
    }
    function click9(id) {
        window.location.href = "talk.jsp?fw_id=" + id;
    }
    function lookVisitor() {
        $.ajax({
            type: "POST",      //传输方式
            url: "lookVisitor",           //地址
            data: {            //传递的参数
                uid: "${user.uid}"
            },
            success: function (obj) {
                if (obj.code == 0) {
                    window.location = "visitor.jsp";
                }
            }
        })
    }
    $(function () {
        $('[data-toggle="popover"]').popover();
    })
</script>