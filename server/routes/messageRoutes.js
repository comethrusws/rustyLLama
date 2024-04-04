const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
const loadModel = require('../utils/loadModel');

const model = loadModel();

router.get('/', async (req,res) => {
    try {
        const messages = await Message.find();
        res.json(messages);
    } catch (err){
        res.status(500).json({ message: err.message });
    }
});

//new msg
router.post('/', async(req, rea)=>{
    const newMessage = new Message({
        sender: 'user',
        text: req.body.text,
    });
    
    try{
        const savedMessage = aait newMessage.save();

        //generation of new msg with lang model
        const prompt = 'User: ${savedMessage.text}\nrustyLlama';
        const response = await model.generatetext(prompt);

        const aiMessage = new Message({
            sender: 'ai',
            text: response,
        });

        await aiMessage.save();
        res.status(201),json({ message: 'Message Created', response });
    }
    catch (err) {
        rees.status(400).json({ message: err.message});
    }
});

module.exports = router;