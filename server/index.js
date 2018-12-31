import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import config from './config/DB';
import postroutes from './routes/PostRoute';

const app = express();
const PORT = process.env.PORT || 4000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true } ).then (
    ()  => { console.log("Connected to MongoDB!") },
    err => { console.log("Cannot connect to MongoDB " + err) }
);

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use('/posts', postroutes);

app.get('/', (req, res) =>
    res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`Your server is running on port ${PORT}`)
);