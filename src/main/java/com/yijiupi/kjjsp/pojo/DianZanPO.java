package com.yijiupi.kjjsp.pojo;

public class DianZanPO {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column dianzan.did
     *
     * @mbggenerated
     */
    private Integer did;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column dianzan.tid
     *
     * @mbggenerated
     */
    private Integer tid;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column dianzan.username
     *
     * @mbggenerated
     */
    private String username;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column dianzan.did
     *
     * @return the value of dianzan.did
     *
     * @mbggenerated
     */
    public Integer getDid() {
        return did;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column dianzan.did
     *
     * @param did the value for dianzan.did
     *
     * @mbggenerated
     */
    public void setDid(Integer did) {
        this.did = did;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column dianzan.tid
     *
     * @return the value of dianzan.tid
     *
     * @mbggenerated
     */
    public Integer getTid() {
        return tid;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column dianzan.tid
     *
     * @param tid the value for dianzan.tid
     *
     * @mbggenerated
     */
    public void setTid(Integer tid) {
        this.tid = tid;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column dianzan.username
     *
     * @return the value of dianzan.username
     *
     * @mbggenerated
     */
    public String getUsername() {
        return username;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column dianzan.username
     *
     * @param username the value for dianzan.username
     *
     * @mbggenerated
     */
    public void setUsername(String username) {
        this.username = username == null ? null : username.trim();
    }
}