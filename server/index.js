const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const database = require('./config/database.js')

dotenv.config();


const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))



const port = process.env.PORT || 4000;
// buradaki mantık; uygulamayı deploy ettiğimizde
//  -  localde çalışırken -4000- portunu kullan yada
//  -  deploy edildiğinde mevcut uygulamanın belirlediği portu (process.env.PORT) kullan

database();

app.listen(port, () => {
    console.log(`${port} dinleniyor.`);
})