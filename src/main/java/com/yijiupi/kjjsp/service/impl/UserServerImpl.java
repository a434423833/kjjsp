package com.yijiupi.kjjsp.service.impl;

import com.yijiupi.kjjsp.mapper.*;
import com.yijiupi.kjjsp.pojo.*;
import com.yijiupi.kjjsp.service.UserServer;
import com.yijiupi.kjjsp.utile.ConstantsUtil;
import com.yijiupi.kjjsp.utile.GetObjectUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

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
    VisitorMapper visitorMapper;
    @Autowired
    private GcliuyanMapper gcliuyanMapper;
    @Autowired
    private YiZhanDaShiJiMapper yiZhanDaShiJiMapper;

    @Override
    public LoginVO userLogin(LoginVO loginVO) {
        LoginVO tmp = userMapper.getUser(loginVO);
        return tmp;
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
    public List<LoginVO> listUserByName(String friendName, String uid) {
        List<LoginVO> loginVOList = userMapper.listUserByName(friendName, uid);
        return loginVOList;
    }

    @Override
    public Integer addFriend(Integer uid, Integer friendId) {

        String status = friendMapper.getFriend(uid, friendId);
        if ("1".equals(status)) {
            //1 代表已经为好友
            return 1;
        }
        if ("0".equals(status)) {
            //好友请求已经发送过
            return 0;
        }
        friendMapper.insertFriendRequest(uid, friendId);
        return 2;
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
    public void updateUser(LoginVO tmp) {
        userMapper.updateUser(tmp);
    }

    @Override
    public void updateUser1(LoginVO loginVO) {
        userMapper.updateUser1(loginVO);
    }

    @Override
    public void updategq(LoginVO loginVO) {
        userMapper.updategq(loginVO);
    }

    @Override
    public GuangChangLiuYanVO getGuangChangLiuYanVo(Page page) {
        int count = gcliuyanMapper.getCount();
        page.setCount(count);
        Integer pageSize = page.getPageSize();
        page.setPageCount(count / pageSize);
        if (count % pageSize != 0) {
            page.setPageCount(count / pageSize + 1);
        }
        page.setBegin((page.getPageIndex() - 1) * pageSize);

        int begin = page.getBegin();
        List<GcliuyanDTO> gcliuyanDTOList = gcliuyanMapper.getGuangChangLiuYanList(begin, pageSize);//拿到第一层数据

        List<Integer> list1 = gcliuyanDTOList.stream().map(GcliuyanDTO::getGcid).collect(Collectors.toList());
        List<GcliuyanDTO1> gcliuyanDTO1List1 = new ArrayList<>();
        List<GcliuyanDTO2> gcliuyanDTO1List2 = new ArrayList<>();
        if (list1 != null && list1.size() > 0) {
            gcliuyanDTO1List1 = gcliuyanMapper.getGuangChangLiuYan1List1(list1);          //拿到第二层数据
        }
        List<Integer> list2 = gcliuyanDTO1List1.stream().map(GcliuyanDTO1::getGcid).collect(Collectors.toList());
        if (list2 != null && list2.size() > 0) {
            gcliuyanDTO1List2 = gcliuyanMapper.getGuangChangLiuYan1List2(list2);          //拿到第三层数据
        }
        converLiuyanPhoto(gcliuyanDTOList, gcliuyanDTO1List1, gcliuyanDTO1List2);
        GuangChangLiuYanVO guangChangLiuYanVO = getGuangChangLiuYanVO(page, gcliuyanDTOList, gcliuyanDTO1List1, gcliuyanDTO1List2);
        return guangChangLiuYanVO;

    }

    private GuangChangLiuYanVO getGuangChangLiuYanVO(Page page, List<GcliuyanDTO> gcliuyanDTOList, List<GcliuyanDTO1> gcliuyanDTO1List1, List<GcliuyanDTO2> gcliuyanDTO1List2) {
        GuangChangLiuYanVO guangChangLiuYanVO = new GuangChangLiuYanVO();
        guangChangLiuYanVO.setPage(page);
        guangChangLiuYanVO.setGcliuyanDTOList(gcliuyanDTOList);
        for (GcliuyanDTO gcliuyanDTO : gcliuyanDTOList) {     //将第二层数据对应给第一层
            int gcid = gcliuyanDTO.getGcid();
            List<GcliuyanDTO1> beforlist1 = gcliuyanDTO1List1.parallelStream().filter(p -> p.getBeforgcid() == gcid).collect(Collectors.toList());
            gcliuyanDTO.setGcliuyanDTO1List(beforlist1);
        }
        for (GcliuyanDTO1 gcliuyanDTO1 : gcliuyanDTO1List1) {     //将第二层数据对应给第一层
            int gcid = gcliuyanDTO1.getGcid();
            List<GcliuyanDTO2> beforlist2 = gcliuyanDTO1List2.parallelStream().filter(p -> p.getBeforgcid() == gcid).collect(Collectors.toList());
            gcliuyanDTO1.setGcliuyanDTO2List(beforlist2);
        }
        return guangChangLiuYanVO;
    }

    @Override
    public void addGuangChangLiuYan(GcliuyanDTO gcliuyanDTO) {
        gcliuyanDTO.setTime(GetObjectUtil.getTime());
        gcliuyanMapper.addGuangChangLiuYan(gcliuyanDTO);
    }

    @Override
    public void huifuGuangChangLiuYan(HuifuGuangChangLiuYanDTO huifuGuangChangLiuYanDTO) {
        huifuGuangChangLiuYanDTO.setTime(GetObjectUtil.getTime());
        gcliuyanMapper.huifuGuangChangLiuYan(huifuGuangChangLiuYanDTO);
    }

    @Override
    public List<YiZhanShiJiYearVO> getYiZhanShiJi() {
        Integer maxyear = yiZhanDaShiJiMapper.getMaxYear();
        Integer minyear = yiZhanDaShiJiMapper.getMinYear();
        List<YiZhanDaShiJiPO> list = yiZhanDaShiJiMapper.listYiZhanShiJi();
        List<YiZhanShiJiYearVO> listYearList = new ArrayList<>();
        for (int i = maxyear; i >= minyear; i--) {
            int year = i;
            List<YiZhanDaShiJiPO> listYear = list.stream().filter(p -> p.getYear() == year).collect(Collectors.toList());//得到当前年份的list集合
            YiZhanShiJiYearVO yiZhanShiJiYearVO = new YiZhanShiJiYearVO();       //添加到第一层list
            List<YiZhanShiJiMonthVO> listMonthList = new ArrayList<>();          //存入第一层list中
            for (int j = 12; j > 0; j--) {
                int month = j;
                //得到当前年份的对应月份集合,
                YiZhanShiJiMonthVO yiZhanShiJiMonthVO = new YiZhanShiJiMonthVO();
                List<YiZhanDaShiJiPO> listMonth = listYear.stream().filter(p -> p.getMonth() == month).collect(Collectors.toList());
                if (listMonth != null && listMonth.size() > 0) {
                    yiZhanShiJiMonthVO.setMonth(month);
                    yiZhanShiJiMonthVO.setList(listMonth);
                    listMonthList.add(yiZhanShiJiMonthVO);
                }
            }
            yiZhanShiJiYearVO.setYear(year);
            yiZhanShiJiYearVO.setListYear(listMonthList);
            listYearList.add(yiZhanShiJiYearVO);
        }
        return listYearList;
    }

    @Override
    public void addYiZhanShiJi(String infor) {
        YiZhanDaShiJiPO yiZhanDaShiJiPO = new YiZhanDaShiJiPO();
        yiZhanDaShiJiPO.setInfor(infor);
        String time = GetObjectUtil.getTime();
        yiZhanDaShiJiPO.setYear(Integer.parseInt(time.substring(0, 4)));
        yiZhanDaShiJiPO.setMonth(Integer.parseInt(time.substring(5, 7)));
        yiZhanDaShiJiPO.setDay(Integer.parseInt(time.substring(8, 10)));
        yiZhanDaShiJiMapper.addYiZhanDaShiJi(yiZhanDaShiJiPO);
    }

    @Override
    public LoginVO getFwInfor(Integer fwId) {
        return userMapper.getFwInfor(fwId);
    }

    @Override
    public FriendInforVO listUser() {
        FriendInforVO friendInforVO = new FriendInforVO();
        List<LoginVO> allUserList = userMapper.listUser();
        //管理员
        List<LoginVO> adminUserList = allUserList.stream().filter(p -> p.getAdmin() != null && p.getAdmin() == 1).collect(Collectors.toList());
        //不是管理员并且头像上传的会员
        List<LoginVO> userList = allUserList.stream().filter(p -> p.getFile() != null && p.getAdmin() == null).collect(Collectors.toList());
        List<LoginVO> noFileUserList = allUserList.stream().filter(p -> p.getFile() == null && p.getAdmin() == null).collect(Collectors.toList());
        friendInforVO.setAdminUserList(adminUserList);
        friendInforVO.setUserList(userList);
        friendInforVO.setNoFileUserList(noFileUserList);
        return friendInforVO;
    }

    @Override
    public LoginVO userReg(LoginVO loginVO) {
        Integer count = userMapper.checkAccount(loginVO.getAccount());
        if (count != 0) {
            return null;
        }
        userMapper.inserUser(loginVO);
        return userMapper.getUser(loginVO);
    }

    private TalkPO getTalkPO(String infor, LoginVO object) {
        TalkPO talkPO = new TalkPO();
        LoginVO loginVO = object;
        talkPO.setUid(loginVO.getUid());
        talkPO.setUsname(loginVO.getUsername());
        talkPO.setInfor(infor);
        talkPO.setTime(GetObjectUtil.getTime());
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

    private FriendPO convertTOUserPOAndVO(LoginVO loginVOfriend, LoginVO loginVO) {
        FriendPO friendPO = new FriendPO();
        friendPO.setUid(loginVO.getUid());
        friendPO.setQzoneuname(loginVO.getUsername());
        friendPO.setFid(loginVOfriend.getUid());
        friendPO.setFrienduname(loginVOfriend.getUsername());
        return friendPO;
    }

    private static void converLiuyanPhoto(List<GcliuyanDTO> gcliuyanDTOList, List<GcliuyanDTO1> gcliuyanDTO1List1, List<GcliuyanDTO2> gcliuyanDTO1List2) {
        String path = "<img id='biaoqingdaxiao' src='../css/guangchang/木东驿站_files/";
        for (GcliuyanDTO gcliuyanDTO : gcliuyanDTOList) {
            //转换空格和换行
            String infor = gcliuyanDTO.getInfor();
            if (infor != null) {
                infor = infor.replaceAll("\\n", "<br>").replaceAll(" ", "&nbsp;");
            }
            String newInfor = "";
            int z = 0;
            for (int i = 0, j; i < infor.length(); i++) {
                if (infor.charAt(i) == '$') {
                    int begin1 = i;
                    int begin2 = i + 2;
                    int end2 = 0;
                    int end1 = 0;
                    for (j = begin2 + 1; j < infor.length(); j++) {
                        if (infor.charAt(j) == ':') {
                            end2 = j;
                            end1 = j + 2;
                            break;
                        }
                    }
                    newInfor += infor.substring(z, begin1) + path + infor.substring(begin2 + 1, end2) + ".gif'>";
                    z = end1;
                }
            }
            newInfor += infor.substring(z, infor.length());
            gcliuyanDTO.setInfor(newInfor);
        }
        if (gcliuyanDTO1List1 != null) {
            for (GcliuyanDTO1 gcliuyanDTO : gcliuyanDTO1List1) {
                String infor = gcliuyanDTO.getInfor();
                if (infor != null) {
                    infor = infor.replaceAll("\\n", "<br>").replaceAll(" ", "&nbsp;");
                }
                String newInfor = "";
                int z = 0;
                for (int i = 0, j; i < infor.length(); i++) {
                    if (infor.charAt(i) == '$') {
                        int begin1 = i;
                        int begin2 = i + 2;
                        int end2 = 0;
                        int end1 = 0;
                        for (j = begin2 + 1; j < infor.length(); j++) {
                            if (infor.charAt(j) == ':') {
                                end2 = j;
                                end1 = j + 2;
                                break;
                            }
                        }
                        newInfor += infor.substring(z, begin1) + path + infor.substring(begin2 + 1, end2) + ".gif'>";
                        z = end1;
                    }

                }
                newInfor += infor.substring(z, infor.length());
                gcliuyanDTO.setInfor(newInfor);
            }
        }
        if (gcliuyanDTO1List2 != null) {
            for (GcliuyanDTO2 gcliuyanDTO : gcliuyanDTO1List2) {
                String infor = gcliuyanDTO.getInfor();
                if (infor != null) {
                    infor = infor.replaceAll("\\n", "<br>").replaceAll(" ", "&nbsp;");
                }
                String newInfor = "";
                int z = 0;
                for (int i = 0, j; i < infor.length(); i++) {
                    if (infor.charAt(i) == '$') {
                        int begin1 = i;
                        int begin2 = i + 2;
                        int end2 = 0;
                        int end1 = 0;
                        for (j = begin2 + 1; j < infor.length(); j++) {
                            if (infor.charAt(j) == ':') {
                                end2 = j;
                                end1 = j + 2;
                                break;
                            }
                        }
                        newInfor += infor.substring(z, begin1) + path + infor.substring(begin2 + 1, end2) + ".gif'>";
                        z = end1;
                    }
                }
                newInfor += infor.substring(z, infor.length());
                gcliuyanDTO.setInfor(newInfor);
            }
        }
    }

}
