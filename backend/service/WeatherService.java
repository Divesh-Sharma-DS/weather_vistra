
package com.example.weather.service;

import com.example.weather.model.WeatherResponse;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class WeatherService {

    private static final String API_KEY = "6f87192147bf5496b22268813f11b3cc";
    private static final String CURRENT_URL =
            "https://api.openweathermap.org/data/2.5/weather?q=%s&units=metric&appid=%s";

    private static final String FORECAST_URL =
            "https://api.openweathermap.org/data/2.5/forecast?q=%s&units=metric&appid=%s";

    public WeatherResponse getCurrentWeather(String city) {
        try {
            RestTemplate restTemplate = new RestTemplate();
            String url = String.format(CURRENT_URL, city, API_KEY);
            String result = restTemplate.getForObject(url, String.class);

            ObjectMapper mapper = new ObjectMapper();
            JsonNode json = mapper.readTree(result);

            String name = json.get("name").asText();
            double temp = json.get("main").get("temp").asDouble();
            int humidity = json.get("main").get("humidity").asInt();
            double windSpeed = json.get("wind").get("speed").asDouble();
            String description = json.get("weather").get(0).get("description").asText();
            double high = json.get("main").get("temp_max").asDouble();
            double low = json.get("main").get("temp_min").asDouble();

            return new WeatherResponse(name, temp, humidity, windSpeed, description, high, low);
        } catch (Exception e) {
            return new WeatherResponse(city, 0, 0, 0, "City not found", 0, 0);
        }
    }

    public String getForecast(String city) {
        try {
            RestTemplate restTemplate = new RestTemplate();
            String url = String.format(FORECAST_URL, city, API_KEY);
            return restTemplate.getForObject(url, String.class);
        } catch (Exception e) {
            return "{\"error\":\"Unable to fetch forecast\"}";
        }
    }
}
