import express from 'express';
import { AutoModelForCausalLM, AutoTokenizer } from 'node-transformers';

const router = express.Router();

// Load DialoGPT model and tokenizer
const model = await AutoModelForCausalLM.from_pretrained('microsoft/DialoGPT-medium');
const tokenizer = await AutoTokenizer.from_pretrained('microsoft/DialoGPT-medium');

async function generateResponse(userMessage) {
    const inputs = tokenizer.encode(userMessage, { return_tensors: 'pt' });
    const output = await model.generate(inputs);
    const response = tokenizer.decode(output[0]);
    return response;
}

router.post('/api/messages', async (req, res) => {
    const userMessage = req.body.text;
    const response = await generateResponse(userMessage);
    res.json({ response });
});

export default router;
