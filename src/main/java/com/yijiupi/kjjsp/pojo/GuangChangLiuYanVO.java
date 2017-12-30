package com.yijiupi.kjjsp.pojo;

import java.util.List;

/**
 * Created by caohao on 2017/12/30.
 */
public class GuangChangLiuYanVO {
    private Page page;
    private List<GcliuyanDTO> gcliuyanDTOList;

    public Page getPage() {
        return page;
    }

    public void setPage(Page page) {
        this.page = page;
    }

    public List<GcliuyanDTO> getGcliuyanDTOList() {
        return gcliuyanDTOList;
    }

    public void setGcliuyanDTOList(List<GcliuyanDTO> gcliuyanDTOList) {
        this.gcliuyanDTOList = gcliuyanDTOList;
    }
}
