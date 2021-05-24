package com.example.demo.controller;

import com.example.demo.model.Client;
import com.example.demo.service.Service;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class controller {
    File myObj = new File(System.getProperty("user.dir")+"/resources/dataset/project-data.txt");
        @GetMapping("/getClient/{color}" )
        public ArrayList getClient(@PathVariable("color") String color ) throws FileNotFoundException {
            Service service = new Service(myObj);
            ArrayList <Client> arrayList = new ArrayList<>();
            HashMap<String, ArrayList> h_map =  h_map = service.readFile();
            for( String i : h_map.keySet()){
                arrayList.addAll(h_map.get(i));
            }
            return h_map.get(color);
        }
    @GetMapping("/getAllClient" )
    public ArrayList getClient() throws FileNotFoundException {
        Service service = new Service(myObj);
        ArrayList <Client> arrayList = new ArrayList<>();
        HashMap<String, ArrayList> h_map =  h_map = service.readFile();
        for( String i : h_map.keySet()){
            arrayList.addAll(h_map.get(i));
        }
        return arrayList;
    }

}
