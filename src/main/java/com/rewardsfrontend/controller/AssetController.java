package com.rewardsfrontend.controller;

import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

@RestController
@RequestMapping("/msr-backoffice/web")
public class AssetController {

    @GetMapping("/assets/images/{filename:.+}")
    public ResponseEntity<Resource> getImage(@PathVariable String filename) throws IOException {
        Resource resource = new ClassPathResource("static/assets/images/" + filename);

        if (!resource.exists()) {
            return ResponseEntity.notFound().build();
        }

        MediaType mediaType = filename.endsWith(".svg") ?
            MediaType.parseMediaType("image/svg+xml") :
            MediaType.IMAGE_PNG;

        return ResponseEntity.ok()
            .contentType(mediaType)
            .body(resource);
    }

    @GetMapping("/assets/{filename:.+}")
    public ResponseEntity<Resource> getAsset(@PathVariable String filename) throws IOException {
        Resource resource = new ClassPathResource("static/assets/" + filename);

        if (!resource.exists()) {
            return ResponseEntity.notFound().build();
        }

        MediaType mediaType = MediaType.APPLICATION_OCTET_STREAM;
        if (filename.endsWith(".css")) {
            mediaType = MediaType.valueOf("text/css");
        } else if (filename.endsWith(".js")) {
            mediaType = MediaType.valueOf("application/javascript");
        }

        return ResponseEntity.ok()
                .contentType(mediaType)
                .body(resource);
    }

    @GetMapping("/fonts/**")
    public ResponseEntity<Resource> getFont(HttpServletRequest request) throws IOException {
        String path = request.getRequestURI().substring("/msr-backoffice/web/fonts/".length());
        Resource resource = new ClassPathResource("static/fonts/" + path);

        if (!resource.exists()) {
            return ResponseEntity.notFound().build();
        }

        MediaType mediaType = MediaType.APPLICATION_OCTET_STREAM;
        if (path.endsWith(".woff2")) {
            mediaType = MediaType.valueOf("font/woff2");
        } else if (path.endsWith(".woff")) {
            mediaType = MediaType.valueOf("font/woff");
        } else if (path.endsWith(".ttf")) {
            mediaType = MediaType.valueOf("font/ttf");
        } else if (path.endsWith(".eot")) {
            mediaType = MediaType.valueOf("application/vnd.ms-fontobject");
        }

        return ResponseEntity.ok()
                .contentType(mediaType)
                .body(resource);
    }
}