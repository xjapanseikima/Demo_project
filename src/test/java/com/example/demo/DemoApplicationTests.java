package com.example.demo;

import com.example.demo.model.Client;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;

import java.io.File;

import static junit.framework.TestCase.assertEquals;
import static org.mockito.Mockito.when;

@SpringBootTest
class DemoApplicationTests {
    @Mock
    Client client = new Client("01.01.22","Test","TestCompany","Black");;
    @BeforeClass
    public void setup() {
        MockitoAnnotations.initMocks(this);
        System.out.println("setup Connection");
    }

    @AfterClass
    public  void tearDown() {
        System.out.println("Finished testing");
    }
    @Test
    void contextLoads() {
        String colors ="black";
        when(client.getColor()).thenReturn(colors);
        assertEquals(client.getColor(),colors);
        System.out.println("Calling Client");
    }


}
