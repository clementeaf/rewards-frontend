package com.rewardsfrontend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
public class RewardsFrontendApplication {

    public static void main(String[] args) {
        SpringApplication app = new SpringApplication(RewardsFrontendApplication.class);
        app.setDefaultProperties(java.util.Collections.singletonMap("server.port", "9090"));
        app.run(args);
    }

    @Bean
    public RestTemplate restTemplate(RestTemplateBuilder builder) {
        return builder.build();
    }

}
