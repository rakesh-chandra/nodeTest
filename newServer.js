const express = require("express");
process.env.PWD = process.cwd()
const app = express();

app.use(express.static(process.env.PWD + '/public/images'))

app.get('/test1', (req, res) => {
  
  res.sendFile(__dirname+'/index2.html');
});

app.get('/test2', (req, res) => {
  res.send("Helloworld");
});

app.get('/styles.css', (req, res) => {
  console.log('received styles request');
  res.sendFile(__dirname+'/styles.css');
});

app.get('/angTest', (req, res) => {
  res.sendFile(__dirname+'/angularTest.html');
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});
