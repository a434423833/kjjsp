package com.yijiupi.kjjsp.utile;

import com.yijiupi.kjjsp.pojo.Page;
import com.yijiupi.kjjsp.pojo.PageResult;
import org.springframework.context.annotation.Configuration;

/**
 * @author CaoHao
 * @Description:返回对象工具类
 * @2017年11月8日 上午10:21:03
 */

@Configuration
public class PageResultUtil {

    public static PageResult success(Object object, Page page) {
        PageResult result = new PageResult();
        result.setCode(0);
        result.setMsg("成功");
        result.setData(object);
        result.setPage(page);
        return result;
    }

    public static PageResult success() {
        return success(null, null);
    }

    public static PageResult error(Integer code, String msg, Object object, Page page) {
        PageResult result = new PageResult();
        result.setCode(code);
        result.setMsg(msg);
        result.setData(object);
        result.setPage(page);
        return result;
    }

}
