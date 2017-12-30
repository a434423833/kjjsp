package com.yijiupi.kjjsp.pojo;

/**
 * Created by caohao on 2017/12/28.
 */
public class Page {
    /**
     * 当前页面
     */
    private Integer pageIndex = 1;
    /**
     * 总页面数
     */
    private Integer pageCount;
    /**
     * 留言总数
     */
    private Integer count;
    /**
     * 一页长度
     */
    private Integer pageSize = 10;

    /**
     * 开始的地方
     *
     * @return
     */
    private Integer begin = 10;

    public Integer getBegin() {
        return begin;
    }

    public void setBegin(Integer begin) {
        this.begin = begin;
    }

    public Integer getPageSize() {
        return pageSize;
    }

    public void setPageSize(Integer pageSize) {
        this.pageSize = pageSize;
    }

    public Integer getPageIndex() {
        return pageIndex;
    }

    public void setPageIndex(Integer pageIndex) {
        this.pageIndex = pageIndex;
    }

    public Integer getPageCount() {
        return pageCount;
    }

    public void setPageCount(Integer pageCount) {
        this.pageCount = pageCount;
    }

    public Integer getCount() {
        return count;
    }

    public void setCount(Integer count) {
        this.count = count;
    }
}
