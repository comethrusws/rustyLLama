import { AutoModelForCausalLM, AutoTokenizer } from 'node-transformers';

const loadModel = async () => {
    // Load DialoGPT model and tokenizer
    const model = await AutoModelForCausalLM.from_pretrained('microsoft/DialoGPT-medium');
    const tokenizer = await AutoTokenizer.from_pretrained('microsoft/DialoGPT-medium');

    const generateText = async (prompt) => {
        const input = tokenizer.encode(prompt, { return_tensors: 'pt' });
        const output = await model.generate(input, { max_length: 1024, do_sample: true, top_k: 50, top_p: 0.95, num_return_sequences: 1 });
        const response = tokenizer.decode(output[0], { skip_special_tokens: true });
        return response;
    };

    return { generateText };
};

export default loadModel;
