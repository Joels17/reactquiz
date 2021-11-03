const fetch = require('node-fetch');
const express = require("express");
const csv = require('csv-parser')
const path = require('path');
const fs = require('fs')

const PORT = process.env.PORT || 3001;

const app = express();

express.static(path.join(__dirname, '/../client/build'));


// This is the nodejs function here
async function sumValues(){
  const results = [];
  let sum = 0;
  // Using a promise to make sure that the entire csv is finshed being read before moving on
  await new Promise((resolve) => {
    fs.createReadStream('server/test.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      results.forEach(element => {
        sum+=Number(element.value);
      });
      resolve();
  })});
  return(sum);
}

async function getTemps(location){
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=219b9d2975454de993cd724aeea2ec23&units=metric`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const myJson = await response.json();
  return(myJson);
}



app.get("/api", async (req, res) => {
  let value = await sumValues();
  console.log(value);
  res.json({ sum: value});
});

app.get("/api/temps", async (req, res) => {
  console.log(req.query.location);
  const retValue = await getTemps(req.query.location)
  console.log(retValue);
  res.json(retValue);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../client/public/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});