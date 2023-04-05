const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cookieParser = require("cookie-parser");
const cors = require('cors');
const Routes = require("./Routes/CarRoutes")

dotenv.config({ path: './config.env' });

require('./conn'); 

app.use(express.json());
app.use(cookieParser());

app.use('/api/cars/' , Routes)
app.get('/', (req, res) => res.send('Hello World'))

const PORT = process.env.PORT || 5005;


app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
})