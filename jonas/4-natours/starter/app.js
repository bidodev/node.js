const express = require('express');
const app = express();

const port = process.env.port || 3000;

app.get('/', (req, res) => {
  res
    .status(200)
    .json({ message: 'Hello from the server side', app: 'Natours' });
});

// POST method route
app.post('/', (req, res) => {
  res.send('POST request to the homepage');
});

app.listen(port, () =>
  console.log(`Server listening at http://localhost:${port}`)
);

//start up a server
