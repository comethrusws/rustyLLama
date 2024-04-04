const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

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
const messageRoutes = require('./routes/messageRoutes');

app.use('/api/messages', messageRoutes);

app.listen(PORT,()=>{
    console.log(`Server is runing on port ${PORT}`);

});