package com.example.demo.service;

import com.example.demo.model.Client;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Scanner;

public class Service {
    File path;
    // more efficeint in finding but less efficient in modifying
    // Moreover, I need to override hashCode and eqaul here, if there is any object might be same
    HashMap<String, ArrayList> h_map = new HashMap<>();
   // HashMap<Integer, Client> h_map = new HashMap<>(); // more efficient in modifying
    ArrayList<Client> redList = new ArrayList<>();
    ArrayList<Client> indigoList = new ArrayList<>();
    ArrayList<Client> yellowList = new ArrayList<>();
    ArrayList<Client> greenList = new ArrayList<>();
    ArrayList<Client> orangeList = new ArrayList<>();
    ArrayList<Client> blueList = new ArrayList<>();
    ArrayList<Client> violetList = new ArrayList<>();


    public Service(File path){
        this.path = path;
    }
    public HashMap<String, ArrayList> readFile() throws FileNotFoundException {
        Scanner input = new Scanner(path);
        input.useDelimiter("\\R+");
       while ( input.hasNext()){
           String date = TokenSplit(input.next());
           String name = TokenSplit(input.next());
           String company = TokenSplit(input.next());
           String color = TokenSplit(input.next());
           if(color.equals("red")){
               Client client = new Client(date,name,company,color);
               redList.add(client);
           }
           if(color.equals("indigo")){
               Client client = new Client(date,name,company,color);
               indigoList.add(client);
           }
           if(color.equals("yellow")){
               Client client = new Client(date,name,company,color);
               yellowList.add(client);
           }
           if(color.equals("green")){
               Client client = new Client(date,name,company,color);
               greenList.add(client);
           }
           if(color.equals("blue")){
               Client client = new Client(date,name,company,color);
               blueList.add(client);
           }
           if(color.equals("violet")){
               Client client = new Client(date,name,company,color);
               violetList.add(client);
           }
           if(color.equals("orange")){
               Client client = new Client(date,name,company,color);
               orangeList.add(client);
           }
//           System.out.println("============================");
       }
       h_map.put("orange",orangeList);
       h_map.put("blue",blueList);
       h_map.put("violet",violetList);
       h_map.put("yellow",yellowList);
       h_map.put("green",greenList);
       h_map.put("red",redList);
       h_map.put("indigo",indigoList);
       return h_map;
    }

    private String TokenSplit(String temp) {
        return temp.split(":")[1];
    }
}
