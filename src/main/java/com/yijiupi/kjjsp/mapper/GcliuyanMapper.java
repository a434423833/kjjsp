package com.yijiupi.kjjsp.mapper;

import com.yijiupi.kjjsp.pojo.GcliuyanDTO;
import com.yijiupi.kjjsp.pojo.GcliuyanDTO1;
import com.yijiupi.kjjsp.pojo.GcliuyanDTO2;
import com.yijiupi.kjjsp.pojo.HuifuGuangChangLiuYanDTO;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface GcliuyanMapper {

    int getCount();

    void addGuangChangLiuYan(GcliuyanDTO gcliuyanDTO);

    List<GcliuyanDTO> getGuangChangLiuYanList(@Param("begin") Integer begin, @Param("pageSize") Integer pageSize);

    List<GcliuyanDTO1> getGuangChangLiuYan1List1(@Param("list1") List<Integer> list1);

    List<GcliuyanDTO2> getGuangChangLiuYan1List2(@Param("list2") List<Integer> list2);

    void huifuGuangChangLiuYan(HuifuGuangChangLiuYanDTO huifuGuangChangLiuYanDTO);
}