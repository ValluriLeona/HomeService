package com.klu;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class PackersMovers {
    @Id
    int pid;
    int pcost;
    String pimage;
    String pname;
    int pqty;
    String pdescription;

    public String getpdescription() {
        return pdescription;
    }
    public void setpdescription(String pdescription) {
        this.pdescription = pdescription;
    }

    public int getPid() {
        return pid;
    }
    public void setPid(int pid) {
        this.pid = pid;
    }

    public int getPcost() {
        return pcost;
    }
    public void setPcost(int pcost) {
        this.pcost = pcost;
    }

    public String getPimage() {
        return pimage;
    }
    public void setPimage(String pimage) {
        this.pimage = pimage;
    }

    public String getPname() {
        return pname;
    }
    public void setPname(String pname) {
        this.pname = pname;
    }

    public int getPqty() {
        return pqty;
    }
    public void setPqty(int pqty) {
        this.pqty = pqty;
    }

    @Override
    public String toString() {
        return "PackersMovers [pid=" + pid + ", pcost=" + pcost + ", pimage=" + pimage + ", pname=" + pname + ", pqty="
                + pqty + ", pdescription=" + pdescription + "]";
    }
}