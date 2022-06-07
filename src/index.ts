import express from 'express';
import { json } from 'body-parser';
const app = express()

const port: number = Number(process.env.PORT) || 3000;
import {route} from './route';

app.use(json());
app.use(route);

app.listen(port, ()=>{
    console.log(`Application running on port :: ${port}`);
});

