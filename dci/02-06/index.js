//first step import the API key
const { key } = require("./config");

//let's import our class
const Request = require("./Request.js");

const args = process.argv.slice(2);

const controller = async city => {
  const request = new Request(key, city);
  await request.getWeatherData();
  const { data } = request.result;

  console.log(`It is now ${data.main.temp}\u00B0C in ${data.name}, ${
    data.sys.country
  } 
 Today's weather ${data.weather
   .map(condition => condition.description)
   .join(", ")} `);
};

controller(args[0]);
