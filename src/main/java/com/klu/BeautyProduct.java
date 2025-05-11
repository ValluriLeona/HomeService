package com.klu;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class BeautyProduct {
    @Id
    private int productId;
    private String name;
    private int cost;
    private String imageUrl;
    private int quantity;
    private String description;

    // Getters and Setters
    public int getProductId() {
        return productId;
    }
    public void setProductId(int productId) {
        this.productId = productId;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public int getCost() {
        return cost;
    }
    public void setCost(int cost) {
        this.cost = cost;
    }

    public String getImageUrl() {
        return imageUrl;
    }
    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public int getQuantity() {
        return quantity;
    }
    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }

    // toString method
    @Override
    public String toString() {
        return "BeautyProduct [productId=" + productId + ", name=" + name + ", cost=" + cost
                + ", imageUrl=" + imageUrl + ", quantity=" + quantity + ", description=" + description + "]";
    }
}