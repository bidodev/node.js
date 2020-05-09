const express = require("express");
//console.log(typeof express);
const app = express(); //this functions return a object of type express. By convention we call this object app
//console.log(app);

//usefull methods...
// app.get();
// app.post();
// app.put();
// app.delete();

app.get("/", (req, res) => {
  res.send("Hello world...");
});

app.get("/api/courses", (req, res) => {
  res.send([1, 2, 3]);
});

app.listen(3000, () => {
  console.log("Listening on port 3000...");
});
