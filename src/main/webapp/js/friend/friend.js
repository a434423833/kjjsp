function friendLoad() {
    $.ajax({
        type: "POST",      //传输方式
        url: "../getFriendInfor",           //地址
        data: {},
        success: function (obj) {
            if (obj.code == 0) {
                var str = "";
                var logindata = obj.data.loginUserList;
                str += "<h4><strong><span style='color: #58c9f3;'>在线会员(" + logindata.length + "人)</span></strong></h4><br><ul class='link-contentqt clearfix'> "
                for (var i = 0; i < logindata.length; i++) {
                    var loginUser = logindata[i];
                    str += "<li><a href='zhuye.jsp?fw_id=" + loginUser.uid + "' title='这里有隐藏的秘密哦  ^_+ ' " +
                        "target='_blank' rel='nofollow'>";
                    if (loginUser.file != null) {
                        str += "<img src='../imgPathActionDownLoad?url=" + loginUser.file + "'" +
                            " width='64' height='64' alt='无头像'/>";
                    } else {
                        str += "<img src='../img/morenhead.png'" +
                            " width='64' height='64' alt='无头像'/>";
                    }
                    str += "<span class='sitename'>" + loginUser.username + "</span></a> </li>";
                }
                str += "</ul> <br> ";
                var admindata = obj.data.adminUserList;
                str += "<h4><strong><span style='color: #58f4de;'>管理员(" + admindata.length + ")人</span></strong></h4><br><ul class='link-contentqt clearfix'> "
                for (var i = 0; i < admindata.length; i++) {
                    var adminUser = admindata[i];
                    str += "<li><a href='zhuye.jsp?fw_id=" + adminUser.uid + "' title='这里有隐藏的秘密哦  ^_+ ' " +
                        "target='_blank' rel='nofollow'><img src='../imgPathActionDownLoad?url=" + adminUser.file + "'" +
                        " width='64' height='64'/><span class='sitename'>" + adminUser.username + "</span></a> </li>";
                }
                str += "</ul> <br> ";
                var userdata = obj.data.userList;
                str += "<h4><strong><span style='color: #ff95b8;'>会员(" + userdata.length + ")人</span></strong></h4><br><ul class='link-contentqt clearfix'> "
                for (var i = 0; i < userdata.length; i++) {
                    var putongUser = userdata[i];
                    str += "<li><a href='zhuye.jsp?fw_id=" + putongUser.uid + "' title='这里有隐藏的秘密哦  ^_+ ' " +
                        "target='_blank' rel='nofollow'><img src='../imgPathActionDownLoad?url=" + putongUser.file + "'" +
                        " width='64' height='64'/><span class='sitename'>" + putongUser.username + "</span></a> </li>";
                }
                str += "</ul> <br> ";
                var noFileUserDate = obj.data.noFileUserList;
                str += "<h4><strong><span style='color: #f2dede;'>打酱油(" + noFileUserDate.length + ")人</span></strong></h4><br><ul class='link-contentqt clearfix'> "
                for (var i = 0; i < noFileUserDate.length; i++) {
                    var noFileUser = noFileUserDate[i];
                    str += "<li><a href='zhuye.jsp?fw_id=" + noFileUser.uid + "' title='这里有隐藏的秘密哦  ^_+ ' " +
                        "target='_blank' rel='nofollow'><img src='../img/nohead.png '" +
                        " width='64' height='64'/><span class='sitename'>" + noFileUser.username + "</span></a> </li>";
                }
                str += "</ul> <br> ";
                $("#friendInfor").html(str);
            }
        }
    });
}