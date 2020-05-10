const express = require("express");
//console.log(typeof express);
const app = express(); //this functions return a object of type express. By convention we call this object app
//console.log(app);

//usefull methods...
// app.get();
// app.post();
// app.put();
// app.delete();

const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
];

app.get("/", (req, res) => {
  res.send("Hello world...");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find(course => {
    return course.id === parseInt(req.params.id);
  });
  !course
    ? res.status(404).send("The course with the given id was not found..")
    : res.send(course);
});

//PORT
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on the port ${port}`);
});
