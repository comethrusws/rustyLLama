import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app=express();
const PORT= process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//Database connect
mongoose.connect(process.env.MONGODB_URi,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(()=>conseole.log('MongoDB Connected'))
    .catch((err)=> console.log('err'));

//import route
import messageRoutes from './routes/messageRoutes.js';
app.use('/api/messages', messageRoutes);

app.listen(PORT,()=>{
    console.log(`Server is runing on port ${PORT}`);

});