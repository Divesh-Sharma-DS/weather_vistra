package com.example.weather.controller;

import com.example.weather.model.WeatherResponse;
import com.example.weather.service.WeatherService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/weather")
@CrossOrigin(origins = "http://localhost:3000")
public class WeatherController {

    private final WeatherService service;

    public WeatherController(WeatherService service) {
        this.service = service;
    }

    @GetMapping
    public WeatherResponse getWeather(@RequestParam String city) {
        return service.getCurrentWeather(city);
    }

    @GetMapping("/forecast")
    public String getForecast(@RequestParam String city) {
        return service.getForecast(city);
    }
}
