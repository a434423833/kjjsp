package com.yijiupi.kjjsp.pojo;

/**
 * @author CaoHao
 * @Description: 返回结果信息封装
 * @2017年11月8日 上午10:19:43
 */
public class Result<T> {
    // 错误码
    private Integer code;
    // 提示信息
    private String msg;
    // 具体的内容
    private T data;

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

}
