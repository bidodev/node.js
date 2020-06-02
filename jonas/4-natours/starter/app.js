const fs = require('fs');
const express = require('express');
const app = express();

// app.get('/', (req, res) => {
//   res
//     .status(200)
//     .json({ message: 'Hello from the server side', app: 'Natours' });
// });

// // POST method route
// app.post('/', (req, res) => {
//   res.send('POST request to the homepage');
// });
//read tours data
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours.json`)
);

//Handling GET Requests
app.get('/api/v1/tours', (req, res) => {
  res
    .status(200)
    .json({ status: 'success', results: tours.length, data: { tours } });
});

const port = process.env.port || 3000;

app.listen(port, () =>
  console.log(`Server listening at http://localhost:${port}`)
);

//start up a server
