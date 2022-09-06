const express = require('express');
const { router } = require('./routes/products');
const cors  =require('cors');
const { sequelize } = require('./configs/DBConfig');
require('dotenv').config();

sequelize.sync()

const app = express();
app.use(express.json())

const PORT = process.env.APP_PORT | 5000;

app.use(cors())
app.use(router)

app.listen(PORT, ()=>{console.log(`Listning to ${PORT}`)})