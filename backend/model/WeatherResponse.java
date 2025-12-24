package com.example.weather.model;

public class WeatherResponse {
    private String city;
    private double temperature;
    private int humidity;
    private double windSpeed;
    private String description;
    private double high;
    private double low;

    public WeatherResponse(String city, double temperature, int humidity, double windSpeed,
                           String description, double high, double low) {
        this.city = city;
        this.temperature = temperature;
        this.humidity = humidity;
        this.windSpeed = windSpeed;
        this.description = description;
        this.high = high;
        this.low = low;
    }


    public String getCity() { return city; }
    public void setCity(String city) { this.city = city; }

    public double getTemperature() { return temperature; }
    public void setTemperature(double temperature) { this.temperature = temperature; }

    public int getHumidity() { return humidity; }
    public void setHumidity(int humidity) { this.humidity = humidity; }

    public double getWindSpeed() { return windSpeed; }
    public void setWindSpeed(double windSpeed) { this.windSpeed = windSpeed; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public double getHigh() { return high; }
    public void setHigh(double high) { this.high = high; }

    public double getLow() { return low; }
    public void setLow(double low) { this.low = low; }
}
