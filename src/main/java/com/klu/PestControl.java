package com.klu;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class PestControl {
    @Id 
    int pestId;
    int pestCost;
    String pestImage;
    String pestName;
    int pestQty;
    String pestDescription;

    public int getPestId() {
        return pestId;
    }
    public void setPestId(int pestId) {
        this.pestId = pestId;
    }

    public int getPestCost() {
        return pestCost;
    }
    public void setPestCost(int pestCost) {
        this.pestCost = pestCost;
    }

    public String getPestImage() {
        return pestImage;
    }
    public void setPestImage(String pestImage) {
        this.pestImage = pestImage;
    }

    public String getPestName() {
        return pestName;
    }
    public void setPestName(String pestName) {
        this.pestName = pestName;
    }

    public int getPestQty() {
        return pestQty;
    }
    public void setPestQty(int pestQty) {
        this.pestQty = pestQty;
    }

    public String getPestDescription() {
        return pestDescription;
    }
    public void setPestDescription(String pestDescription) {
        this.pestDescription = pestDescription;
    }

    @Override
    public String toString() {
        return "PestControl [pestId=" + pestId + ", pestCost=" + pestCost + ", pestImage=" + pestImage 
            + ", pestName=" + pestName + ", pestQty=" + pestQty + ", pestDescription=" + pestDescription + "]";
    }
}