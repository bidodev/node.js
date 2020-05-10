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

app.get("/api/courses/:id", (req, res) => {
  res.send(req.params.id);
});

//PORT
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on the port ${port}`);
});
