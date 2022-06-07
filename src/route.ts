import express, { Request, Response, Router } from 'express';

const route:Router = express.Router();

route.get('/', (Request, Response)=>{
    Response.status(200).json({message: 'success'});
});

route.post('/post', (Request, Response)=>{
    Response.status(201).json({message: 'success'});
});


export { route };