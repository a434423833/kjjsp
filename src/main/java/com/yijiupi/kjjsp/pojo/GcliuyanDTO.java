package com.yijiupi.kjjsp.pojo;

import java.util.List;

/**
 * @author caohao 2017/12/28
 */
public class GcliuyanDTO {
    private Integer gcid;
    private Integer uid;
    private String infor;
    private String time;
    private String username;
    private String file;
    private Integer sex;
    private Integer beforgcid;
    private Integer index;
    private Integer admin;
    private List<GcliuyanDTO1> gcliuyanDTO1List;

    public Integer getAdmin() {
        return admin;
    }

    public void setAdmin(Integer admin) {
        this.admin = admin;
    }

    public Integer getBeforgcid() {
        return beforgcid;
    }

    public void setBeforgcid(Integer beforgcid) {
        this.beforgcid = beforgcid;
    }

    public Integer getIndex() {
        return index;
    }

    public void setIndex(Integer index) {
        this.index = index;
    }

    public List<GcliuyanDTO1> getGcliuyanDTO1List() {
        return gcliuyanDTO1List;
    }

    public void setGcliuyanDTO1List(List<GcliuyanDTO1> gcliuyanDTO1List) {
        this.gcliuyanDTO1List = gcliuyanDTO1List;
    }

    public Integer getGcid() {
        return gcid;
    }

    public void setGcid(Integer gcid) {
        this.gcid = gcid;
    }

    public Integer getUid() {
        return uid;
    }

    public void setUid(Integer uid) {
        this.uid = uid;
    }

    public String getInfor() {
        return infor;
    }

    public void setInfor(String infor) {
        this.infor = infor;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getFile() {
        return file;
    }

    public void setFile(String file) {
        this.file = file;
    }

    public Integer getSex() {
        return sex;
    }

    public void setSex(Integer sex) {
        this.sex = sex;
    }

}
