package com.example.demo.model;

import java.util.Date;

/**
 * Example
        Date:12.21.16
        Name:Ronan Dalton
        Company:At Limited
        Color:green
**/
public class Client {
    String date;
    String name;
    String company;
    String color;

    public Client(String date, String name, String company, String color) {
        this.date = date;
        this.name = name;
        this.company = company;
        this.color = color;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    @Override
    public String toString() {
        return "Client{" +
                "date='" + date + '\'' +
                ", name='" + name + '\'' +
                ", company='" + company + '\'' +
                ", color='" + color + '\'' +
                '}';
    }
}
