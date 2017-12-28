package com.yijiupi.kjjsp.service.impl;

import com.yijiupi.kjjsp.conver.login.LoginConver;
import com.yijiupi.kjjsp.mapper.*;
import com.yijiupi.kjjsp.pojo.*;
import com.yijiupi.kjjsp.service.UserServer;
import com.yijiupi.kjjsp.utile.ConstantsUtil;
import com.yijiupi.kjjsp.utile.GetTimeUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

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
    @Autowired
    GcliuyanMapper gcliuyanMapper;

    @Override
    public LoginVO userLogin(LoginVO loginVO) {
        UserPO userPO = LoginConver.converTOLoginVO(loginVO);
        userPO = userMapper.getUser(userPO);
        return LoginConver.converVOUserPO(userPO);
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

    @Override
    public void updateUser(LoginVO tmp) {
        UserPO userPO = LoginConver.converTOLoginVO(tmp);
        userMapper.updateUser(userPO);
    }

    @Override
    public void updateUser1(LoginVO loginVO) {
        UserPO userPO = LoginConver.converTOLoginVO(loginVO);
        userMapper.updateUser1(userPO);

    }

    @Override
    public void updategq(LoginVO loginVO) {
        UserPO userPO = LoginConver.converTOLoginVO(loginVO);
        userMapper.updategq(userPO);
    }

    @Override
    public List<GcliuyanDTO> getGuangChangLiuYanList(GcliuyanDTO gcliuyanDTO, Page page) {
        page.setPageIndex(gcliuyanDTO.getPageIndex());
        int count = gcliuyanMapper.getCount();
        page.setCount(count);
        page.setPageCount(count / gcliuyanDTO.getPageSize());
        if (count % gcliuyanDTO.getPageSize() != 0) {
            page.setPageCount(count / gcliuyanDTO.getPageSize() + 1);
        }
        gcliuyanDTO.setBegin((gcliuyanDTO.getPageIndex() - 1) * gcliuyanDTO.getPageSize());
        return gcliuyanMapper.getGuangChangLiuYanList(gcliuyanDTO);

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


}
