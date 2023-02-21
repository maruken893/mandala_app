import express from 'express';

const PORT = process.env.PORT || 8000;

const app = express();

app.get('/', (req, res) => {
  res.send("Hello Express!")
})

app.listen(PORT, (req, res) => {
  console.log(`Server listening port on ${PORT}...`);
});
