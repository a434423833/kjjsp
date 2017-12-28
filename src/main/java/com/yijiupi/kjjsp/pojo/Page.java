package com.yijiupi.kjjsp.pojo;

/**
 * Created by caohao on 2017/12/28.
 */
public class Page {
    private Integer pageIndex;
    private Integer pageCount;
    private Integer count;

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
