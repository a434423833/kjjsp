package com.yijiupi.kjjsp.service.impl;

import com.yijiupi.kjjsp.mapper.*;
import com.yijiupi.kjjsp.pojo.*;
import com.yijiupi.kjjsp.service.UserServer;
import com.yijiupi.kjjsp.utile.ConstantsUtil;
import com.yijiupi.kjjsp.utile.GetTimeUtil;
import com.yijiupi.kjjsp.utile.Md5;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;
import sun.reflect.generics.visitor.Visitor;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @Description:
 * @author: caohao
 * @date: 2017/11/16 14:21
 */
@Service
public class UserServerImpl implements UserServer {

    @Autowired
    UserMapper userMapper;
    @Autowired
    FriendMapper friendMapper;
    @Autowired
    ChatFriendMapper chatFriendMapper;
    @Autowired
    TalkMapper talkMapper;
    @Autowired
    DianZanMapper dianZanMapper;
    @Autowired
    VisitorMapper visitorMapper;

    @Override
    public LoginVO userLogin(LoginVO loginVO) {
        UserPO userPO = convertToVO(loginVO);
        userPO = userMapper.getUser(userPO);
        return convertToPO(userPO);
    }

    @Override
    public Map listGetFriend(String pageIndexStr, Object object) {
        if (object == null) {
            System.out.println("obj 为空");
            return null;
        }
        LoginVO loginVO = (LoginVO) object;
        Integer count = friendMapper.getCount(loginVO.getUid());
        Integer pageSizeStr = 5;
        Integer pageCountStr;
        if (count % 5 == 0) {
            pageCountStr = count / 5;
        } else {
            pageCountStr = count / 5 + 1;
        }
        Map map = new HashMap();
        map.put("pageIndexStr", pageIndexStr);
        map.put("pageCountStr", pageCountStr);
        Integer begin = (Integer.parseInt(pageIndexStr) - 1) * pageSizeStr;
        List list = friendMapper.listGetFriend(loginVO.getUid(), begin, pageSizeStr);
        map.put("list", list);
        return map;
    }

    @Override
    public List chatFriend(String friendName, Object object) {
        if (object == null) {
            return null;
        }
        return chatFriendMapper.listGetChat(friendName, ((LoginVO) object).getUsername());
    }

    @Override
    public int addChat(String friendName, Object object, String infor) {
        if (object == null) {
            return 0;
        }
        return chatFriendMapper.insertAddChat(friendName, ((LoginVO) object).getUsername(), infor);
    }

    @Override
    public List listUserTalk(String id) {
        return talkMapper.listUserTalk(id);
    }

    @Override
    public int clickDianZan(String tid, String username, String index) {
        if ("0".equals(index)) {
            return dianZanMapper.addDianZan(tid, username);
        }
        return dianZanMapper.delectDianZan(tid, username);
    }

    @Override
    public List getDianZan(String tid) {
        return dianZanMapper.ListGetDianZan(tid);
    }

    @Override
    public boolean findUser(String friendName) {
        UserPO userPO = userMapper.getUserByFriendName(friendName);
        if (null == userPO) {
            return false;
        }
        return true;
    }

    @Override
    public int addFriend(Object object, String friendName) {
        Assert.notNull(object, ConstantsUtil.ERROR_MESSAGE6);
        LoginVO loginVO = (LoginVO) object;
        String status = friendMapper.getFriend(loginVO.getUsername(), friendName);
        if ("1".equals(status)) {
            //2 代表已经为好友
            return 2;
        }
        if ("0".equals(status)) {
            //好友请求已经发送过
            return 1;
        }
        UserPO userPO = userMapper.getUserByFriendName(friendName);
        FriendPO friendPO = convertTOUserPOAndVO(userPO, loginVO);
        return friendMapper.insertByFriendName(friendPO);
    }

    @Override
    public List showMessage(Object object) {
        Assert.notNull(object, ConstantsUtil.ERROR_MESSAGE6);
        return friendMapper.listByFid(((LoginVO) object).getUid());
    }

    @Override
    public void friendApply(FriendVO friendVO, LoginVO loginVO, int index) {

        FriendPO friendPO = convertTOUserVO(friendVO, loginVO);
        if (index == 0) {
            friendMapper.deleteFriend(friendPO);
            return;
        }
        String status = friendMapper.getStatusByFriendPO(friendPO);
        if (null == status) {
            friendMapper.updateStatus(friendPO);
            friendMapper.insertByFriendPO(friendPO);
            return;
        }
        friendMapper.updateStatusByFidAndUid(friendPO);
    }

    @Override
    public List listByUidAndToday(String uid) {
        return visitorMapper.listByUidAndToday(uid);
    }

    @Override
    public List listByUidAndYesday(String uid) {
        return visitorMapper.listByUidAndYesday(uid);
    }

    @Override
    public void addVisitor(Object object, String fw_id, String fw_name) {
        Assert.notNull(object, ConstantsUtil.ERROR_MESSAGE6);
        String time = GetTimeUtil.getTime();
        VisitorPO visitorPO = getVisitorPO((LoginVO) object, fw_id, fw_name, time);
        String id = visitorMapper.getFwTime(visitorPO);
        System.out.println(id);
        if (null == id) {
            visitorMapper.insertVisitor(visitorPO);
            return;
        }
        visitorPO.setId(Integer.parseInt(id));
        visitorMapper.updateVisitor(visitorPO);
    }

    @Override
    public void insertInfor(String infor, Object object) {
        TalkPO talkPO = getTalkPO(infor, (LoginVO) object);
        talkMapper.insertInfor(talkPO);
    }

    private TalkPO getTalkPO(String infor, LoginVO object) {
        TalkPO talkPO = new TalkPO();
        LoginVO loginVO = object;
        talkPO.setUid(loginVO.getUid());
        talkPO.setUsname(loginVO.getUsername());
        talkPO.setInfor(infor);
        talkPO.setTime(GetTimeUtil.getTime());
        return talkPO;
    }

    private VisitorPO getVisitorPO(LoginVO loginVO, String fw_id, String fw_name, String time) {
        VisitorPO visitorPO = new VisitorPO();
        visitorPO.setUid(loginVO.getUid());
        visitorPO.setUname(loginVO.getUsername());
        visitorPO.setFwId(Integer.parseInt(fw_id));
        visitorPO.setFwName(fw_name);
        visitorPO.setFwTime(time);
        return visitorPO;
    }

    private FriendPO convertTOUserVO(FriendVO friendVO, LoginVO loginVO) {
        FriendPO friendPO = new FriendPO();
        friendPO.setUid(loginVO.getUid());
        friendPO.setQzoneuname(loginVO.getUsername());
        friendPO.setFid(friendVO.getFid());
        friendPO.setFrienduname(friendVO.getFrienduname());
        return friendPO;
    }

    private FriendPO convertTOUserPOAndVO(UserPO userPO, LoginVO loginVO) {
        FriendPO friendPO = new FriendPO();
        friendPO.setUid(loginVO.getUid());
        friendPO.setQzoneuname(loginVO.getUsername());
        friendPO.setFid(userPO.getUid());
        friendPO.setFrienduname(userPO.getUsername());
        return friendPO;
    }

    private UserPO convertToVO(LoginVO loginVO) {
        UserPO userPO = new UserPO();
        userPO.setUsername(loginVO.getUsername());
        userPO.setPassword(Md5.getMD5(loginVO.getPassword()));
        return userPO;
    }

    private LoginVO convertToPO(UserPO userPO) {
        if (null == userPO) {
            return null;
        }
        LoginVO loginVO = new LoginVO();
        loginVO.setUid(userPO.getUid());
        loginVO.setUsername(userPO.getUsername());
        loginVO.setPassword(userPO.getPassword());
        return loginVO;
    }


}
