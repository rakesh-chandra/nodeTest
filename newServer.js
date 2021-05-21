const express = require("express");
process.env.PWD = process.cwd()
const app = express();

app.use(express.static(process.env.PWD + '/public/images'))

//var mongo = require("mongo")

//var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/firstdb";

/*MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("firstdb");
  // var rec = { id: "rec123", duration: 45 };	
  /*dbo.collection("recordings").insert(rec, function(err, res) {
    if (err) throw err;
    console.log("inserted data");
    db.close();
  });*/ 

  /*dbo.collection("recordings").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.id);
    console.log(result.duration);
    db.close();
  });*/
	
});

app.get('/test1', (req, res) => {
  console.log('request test1');
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

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
});
