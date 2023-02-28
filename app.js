import http from "http";
import express from "express";
import bodyparser from "body-parser";
import adminRouter from "./Routes/admin.js";
import shopRouter from "./Routes/shop.js";
const app = express();

app.use(bodyparser.urlencoded({ extended: false }));

app.use("/admin", adminRouter);
app.use(shopRouter);

app.use((req, res, next) => {
  res.status(404).send("<h1>404 Page not found</h1>");
});

app.listen(3000);
// const server = http.createServer(app)

// server.listen(3000);
// import chalk from 'chalk/
// 'urlsapi.open-meteo.com/v1/forecast?latitude=34.05&longitude=-118.24&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min&timezone=America%2FLos_Angeles'

// axios.get('https://api.open-meteo.com/v1/forecast?latitude=34.05&longitude=-118.24&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min&timezone=America%2FLos_Angeles')
// .options(json = true)
// .then(function(res){
//     const datam =(res.body.data)
//     console.log( datam)
// // })
// const instance = axios.create({
//     baseUrl : ' https://api.open-meteo.com/v1/forecast?latitude=34.05&longitude=-118.24&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min&timezone=America%2FLos_Angeles',

// })

// instance.get('/data')
//     .then(response=> {
//         console.log(response.data);
//     })
//     .catch(error)  {
//         console.log(error)
//     }
// const command = process.argv[2]

// console.log(process.argv)

// if(command === 'add' ) {
//     console.log('Adding Note')
// }
// else if(command === 'remove'){
//     console.log('removing note')
// }
