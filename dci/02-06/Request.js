const axios = require("axios");
const url = require("url");

class Request {
  constructor(key, city) {
    this.appKey = key;
    this.city = city;
    this.endPoint = "http://api.openweathermap.org/data/2.5/";
  }
  async getWeatherData() {
    try {
      const data = axios(
        `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&APPID=${this.appKey}`
      );
      const res = await data;
      this.result = res;
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = Request;
