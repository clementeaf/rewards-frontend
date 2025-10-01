package com.rewardsfrontend.controller;

import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.IOException;

@Controller
public class MsrController {

    @GetMapping(value = {"/msr-backoffice/web", "/msr-backoffice/web/", "/msr-backoffice/web/**"})
    public ResponseEntity<Resource> forward() throws IOException {
        Resource resource = new ClassPathResource("static/index.html");

        if (!resource.exists()) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok()
            .contentType(MediaType.TEXT_HTML)
            .body(resource);
    }
}