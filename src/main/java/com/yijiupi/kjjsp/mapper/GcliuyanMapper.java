package com.yijiupi.kjjsp.mapper;

import com.yijiupi.kjjsp.pojo.GcliuyanDTO;

import java.util.List;

public interface GcliuyanMapper {

    List<GcliuyanDTO> getGuangChangLiuYanList(GcliuyanDTO gcliuyanDTO);

    int getCount();
}