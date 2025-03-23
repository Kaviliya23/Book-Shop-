import express from 'express';
import { PORT,mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import { Book } from './models/bookModels.js';

const app =express();

app.get('/',(request,response)=>{
    console.log(request)
    return response.status(234).send('Welcome');
});

app.post('/books')


mongoose.connect(mongoDBURL)
.then(()=>{
    console.log('App connected to the databse');
    app.listen(PORT,()=>{
        console.log(`App is listening to port: ${PORT}`);
    });
})
.catch((error)=>{
    console.log(error)
;})
