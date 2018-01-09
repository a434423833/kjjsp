package com.yijiupi.kjjsp.controller;

import cn.dsna.util.images.ValidateCode;
import com.yijiupi.kjjsp.pojo.*;
import com.yijiupi.kjjsp.service.UserServer;
import com.yijiupi.kjjsp.utile.ConstantsUtil;
import com.yijiupi.kjjsp.utile.PageResultUtil;
import com.yijiupi.kjjsp.utile.ResultUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.util.Assert;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.support.SessionStatus;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.UUID;

/**
 * @Description: 处理用户请求
 * @author: caohao
 * @date: 2017/11/16 9:57
 */
@RestController
@RequestMapping("/")
@SessionAttributes(value = {"v_code", "user", "list1", "list2"})
public class UserController {
    private static final Logger LOGGER = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private UserServer userServer;

    @RequestMapping(value = "/")
    public ModelAndView index() {
        return new ModelAndView("forward:zhuti/index.jsp");
    }

    @RequestMapping(value = "/userLogin", method = RequestMethod.POST)
    public Result userLogin(String code, @Valid LoginVO loginVO, BindingResult result, ModelMap map) {
        if (result.hasErrors()) {
            LOGGER.info(ConstantsUtil.ERROR_MESSAGE1);
            return ResultUtil.error(100, ConstantsUtil.ERROR_MESSAGE1, null);
        }
        if (checkCode(code, map)) {
            return ResultUtil.error(100, ConstantsUtil.ERROR_MESSAGE2, null);
        }
        LoginVO tmp = userServer.userLogin(loginVO);
        if (tmp != null) {
            map.put("user", tmp);
            LOGGER.info("账号:" + tmp.getAccount() + " 名称" + tmp.getUsername() + "登陆了");
            return ResultUtil.success(tmp);
        }
        return ResultUtil.error(100, ConstantsUtil.ERROR_MESSAGE3, null);
    }

    private boolean checkCode(String code, ModelMap map) {
        Object object = map.get("v_code");
        if (object != null && code != null) {
            if (((String) object).equalsIgnoreCase(code)) {
                return false;
            }
        }
        LOGGER.info("session保存的验证码" + code);
        return true;
    }

    @RequestMapping(value = "getFriend", method = RequestMethod.POST)
    public Result getFriend(String pageIndexStr, ModelMap modelMap) {
        if (null == pageIndexStr) {
            return ResultUtil.error(100, ConstantsUtil.ERROR_MESSAGE5, null);
        }
        Map map = userServer.listGetFriend(pageIndexStr, modelMap.get("user"));
        if (null != map && map.size() > 0) {
            return ResultUtil.success(map);
        }
        return ResultUtil.error(100, "失败", null);
    }

    @RequestMapping(value = "chatFriend", method = RequestMethod.POST)
    public Result chatFriend(String friendName, ModelMap map) {
        if (null == friendName) {
            return ResultUtil.error(100, ConstantsUtil.ERROR_MESSAGE5, null);
        }
        Object object = map.get("user");
        List list = userServer.chatFriend(friendName, object);
        if (null != list) {
            return ResultUtil.success(list);
        }
        return ResultUtil.error(100, ConstantsUtil.ERROR_MESSAGE1, null);
    }

    @RequestMapping(value = "addChat", method = RequestMethod.POST)
    public Result addChat(String friendName, String infor, ModelMap map) {
        if (null == friendName && null == infor) {
            return ResultUtil.error(100, ConstantsUtil.ERROR_MESSAGE5, null);
        }
        Object object = map.get("user");
        int i = userServer.addChat(friendName, object, infor);
        if (i == 0) {
            return ResultUtil.error(100, ConstantsUtil.ERROR_MESSAGE1, null);
        }
        return ResultUtil.success(i);
    }

    @RequestMapping(value = "findFriend", method = RequestMethod.POST)
    public Result findFriend(String friendName) {
        if (null == friendName) {
            return ResultUtil.error(100, ConstantsUtil.ERROR_MESSAGE5, null);
        }
        boolean bl = userServer.findUser(friendName);
        if (!bl) {
            return ResultUtil.error(100, ConstantsUtil.ERROR_MESSAGE7, null);
        }
        return ResultUtil.success();
    }

    @RequestMapping(value = "addFriend", method = RequestMethod.POST)
    public Result addFriend(String friendName, ModelMap map) {
        if (null == friendName) {
            return ResultUtil.error(100, ConstantsUtil.ERROR_MESSAGE5, null);
        }
        Object object = map.get("user");
        int index = userServer.addFriend(object, friendName);
        if (index == 2) {
            return ResultUtil.error(101, ConstantsUtil.ERROR_MESSAGE8, null);
        }
        if (index == 1) {
            return ResultUtil.success();
        }
        return ResultUtil.error(100, ConstantsUtil.ERROR_MESSAGE1, null);
    }

    @RequestMapping(value = "showMessage", method = RequestMethod.POST)
    public Result showMessage(ModelMap map) {
        List list = userServer.showMessage(map.get("user"));
        return ResultUtil.success(list);
    }

    @RequestMapping(value = "logout", method = RequestMethod.GET)
    public ModelAndView logOut(SessionStatus status) {
        ModelAndView modelAndView = new ModelAndView("redirect:login.jsp");
        status.setComplete();
        return modelAndView;
    }

    @RequestMapping(value = "friendApply", method = RequestMethod.POST)
    public Result friendApply(FriendVO friendVO, ModelMap map, int index) {
        if (null == friendVO.getFrienduname()) {
            return ResultUtil.error(100, ConstantsUtil.ERROR_MESSAGE5, null);
        }
        Object object = map.get("user");
        Assert.notNull(object, ConstantsUtil.ERROR_MESSAGE6);
        userServer.friendApply(friendVO, (LoginVO) object, index);
        return ResultUtil.success();
    }

    @RequestMapping(value = "lookVisitor", method = RequestMethod.POST)
    public Result lookVisitor(String uid, ModelMap map, HttpSession session) {
        Assert.notNull(uid, ConstantsUtil.ERROR_MESSAGE5);
        List list1 = userServer.listByUidAndYesday(uid);
        List list2 = userServer.listByUidAndToday(uid);
        map.put("list1", list1);
        map.put("list2", list2);
        return ResultUtil.success();
    }

    @RequestMapping(value = "getCode", method = RequestMethod.GET)
    public void getCode(HttpServletResponse response, ModelMap map) {
        ServletOutputStream fw = null;
        ValidateCode vcode = new ValidateCode(90, 33, 4, 10);
        String code = vcode.getCode();
        map.put("v_code", code);
        try {
            fw = response.getOutputStream();
            vcode.write(fw);
        } catch (IOException e) {
            LOGGER.error("IO异常" + e.getMessage(), e);
        } finally {
            if (fw != null) {
                try {
                    fw.close();
                } catch (IOException e1) {

                }
            }
        }
    }

    /**
     * 头像上传
     *
     * @param map
     * @param file
     * @param request
     * @param response
     * @return
     * @throws IOException
     */
    @RequestMapping(value = "upLoad", method = RequestMethod.POST)
    public ModelAndView upload(ModelMap map, @RequestParam("studentPhoto") MultipartFile file, HttpServletRequest request, HttpServletResponse response) throws IOException {
        String path = "";
        if (!file.isEmpty()) {
            //生成uuid作为文件名称
            String uuid = UUID.randomUUID().toString().replaceAll("-", "");
            //获得文件类型（可以判断如果不是图片，禁止上传）
            String contentType = file.getContentType();
            //获得文件后缀名称
            String imageName = contentType.substring(contentType.indexOf("/") + 1);
            path = "/img/head/" + uuid + "." + imageName;
            file.transferTo(new File("c:" + path));
            LOGGER.info("图片上传成功");
        }
        System.out.println(path);
        request.setAttribute("imagesPath", path);
        Object object = map.get("user");
        Assert.notNull(object, ConstantsUtil.ERROR_MESSAGE6);
        LoginVO tmp = (LoginVO) object;
        tmp.setFile(path);
        userServer.updateUser(tmp);
        map.put("user", tmp);
        return new ModelAndView("redirect:zhuti/information.jsp");
    }

    /**
     * 头像输出流
     */
    @RequestMapping(value = "/imgPathActionDownLoad", method = RequestMethod.GET)
    public void show(String url, HttpServletRequest request, HttpServletResponse response) {
        try {
            FileInputStream inputStream = new FileInputStream("c:" + url);
            int i = inputStream.available();
            //byte数组用于存放图片字节数据
            byte[] buff = new byte[i];
            inputStream.read(buff);
            //记得关闭输入流
            inputStream.close();
            //设置发送到客户端的响应内容类型
            response.setContentType("image/*");
            ServletOutputStream fw = response.getOutputStream();
            fw.write(buff);
            //关闭响应输出流
            fw.close();
        } catch (FileNotFoundException e) {
            LOGGER.info("没有设置头像，所以异常了，找不到文件");
            return;
        } catch (IOException e) {
            LOGGER.error("IO异常了");
            return;
        }
    }

    /**
     * 信息完善
     *
     * @param loginVO
     * @param map
     * @return
     */
    @RequestMapping(value = "/addInfor", method = RequestMethod.POST)
    public Result addInfor(LoginVO loginVO, ModelMap map) {
        Object object = map.get("user");
        LoginVO tmp = (LoginVO) object;
        loginVO.setUid(tmp.getUid());
        userServer.updateUser1(loginVO);
        tmp.setPhone(loginVO.getPhone());
        tmp.setSex(loginVO.getSex());
        tmp.setAge(loginVO.getAge());
        tmp.setUsername(loginVO.getUsername());
        map.put("user", tmp);
        LOGGER.info("账号:" + tmp.getAccount() + "完善信息");

        return ResultUtil.success();
    }

    /**
     * 退出
     *
     * @param session
     * @param sessionStatus
     * @return
     */
    @RequestMapping(value = "/exit", method = RequestMethod.GET)
    public ModelAndView exit(HttpSession session, SessionStatus sessionStatus) {
        Object object = session.getAttribute("user");
        if (object == null) {
            LOGGER.info("未登录退出驿站了");
            return new ModelAndView("redirect:zhuti/guangchang.jsp");
        }
        LoginVO tmp = (LoginVO) object;
        LOGGER.info("账号:" + tmp.getAccount() + " 名称:" + "退出驿站了");
        sessionStatus.setComplete();
        session.invalidate();
        return new ModelAndView("redirect:zhuti/guangchang.jsp");
    }

    /**
     * 修改个性签名
     *
     * @param loginVO
     * @param map
     * @return
     */
    @RequestMapping(value = "/updategq", method = RequestMethod.POST)
    public Result updategq(LoginVO loginVO, ModelMap map) {
        Object object = map.get("user");
        LoginVO tmp = (LoginVO) object;
        loginVO.setUid(tmp.getUid());
        userServer.updategq(loginVO);
        tmp.setQianming(loginVO.getQianming());
        map.put("user", tmp);
        LOGGER.info("账号:" + tmp.getAccount() + " 名称:" + tmp.getUsername() + "修改个性签名");
        return ResultUtil.success(loginVO.getQianming());
    }

    /**
     * 得到广场留言
     *
     * @return
     */
    @RequestMapping(value = "/getGuangChangLiuYanList", method = RequestMethod.POST)
    public PageResult getGuangChangLiuYanList(Page page) {
        LOGGER.info("进入getGuangChangLiuYanList ");
        GuangChangLiuYanVO guangChangLiuYanVO = userServer.getGuangChangLiuYanVo(page);
        return PageResultUtil.success(guangChangLiuYanVO, page);
    }

    /**
     * 添加广场留言
     *
     * @return
     */
    @RequestMapping(value = "/addGuangChangLiuYan", method = RequestMethod.POST)
    public Result addGuangChangLiuYan(GcliuyanDTO gcliuyanDTO, ModelMap map) {
        LOGGER.info("进入addGuangChangLiuYan ");
        Object object = map.get("user");
        LoginVO tmp = (LoginVO) object;
        userServer.addGuangChangLiuYan(gcliuyanDTO);
        LOGGER.info("账号:" + tmp.getAccount() + " 名称:" + tmp.getUsername() + "添加广场留言");
        return ResultUtil.success();
    }

    /**
     * 回复广场留言
     *
     * @return
     */
    @RequestMapping(value = "/huifuGuangChangLiuYan", method = RequestMethod.POST)
    public Result huifuGuangChangLiuYan(HuifuGuangChangLiuYanDTO huifuGuangChangLiuYanDTO, ModelMap map) {
        LOGGER.info("进入huifuGuangChangLiuYan ");
        Object object = map.get("user");
        LoginVO tmp = (LoginVO) object;
        huifuGuangChangLiuYanDTO.setUid(tmp.getUid());
        userServer.huifuGuangChangLiuYan(huifuGuangChangLiuYanDTO);
        LOGGER.info("账号:" + tmp.getAccount() + " 名称:" + tmp.getUsername() + "回复广场留言了");
        return ResultUtil.success();
    }

    /**
     * 得到驿站大事记
     *
     * @return
     */
    @RequestMapping(value = "/getYiZhanShiJi", method = RequestMethod.POST)
    public Result getYiZhanShiJi() {
        LOGGER.info("进入getYiZhanShiJi");
        List list = userServer.getYiZhanShiJi();
        return ResultUtil.success(list);
    }

    /**
     * 添加驿站大事记
     *
     * @return
     */
    @RequestMapping(value = "/addYiZhanShiJi", method = RequestMethod.POST)
    public Result addYiZhanShiJi(String infor, ModelMap map) {
        LOGGER.info("进入addYiZhanShiJi");
        Object object = map.get("user");
        LoginVO tmp = (LoginVO) object;
        if (tmp.getUid() != 18) {
            return null;
        }
        userServer.addYiZhanShiJi(infor);
        return ResultUtil.success();
    }

}
