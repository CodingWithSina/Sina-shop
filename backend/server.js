import express from 'express';
import data from './data';
import { get } from 'http';

const app = express();

app.get("/api/products", (req, res) => {

res.send(data.products);
});

app.listen(5000, () => {console.log("Server started at https://localhost:5000")})
