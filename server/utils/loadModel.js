const { AutoModelForCasualLM, Autotokenizer } =  require('huggingface/model');

const loadModel = () => {
    const tokenizer = new AutoTokenizer.from_pretrained('meta-llama/Llama-2-7b-chat-hf');
    const model = new AutoModelForCasualLM.from_pretrained('meta-llama/Llama-2-7b-chat-hf');

    const generateText = async (prompt) =>{
        const input = tokenizer.encode(prompt, return_tesors='pt');
        const output = await model.generate(input, max_length= 1024, do_sample=true, top_k=50, top_p=0.95, num_return_sequences=1);
        const response = tokenizer.decode(output[0], skip_special_tokens= true);
        return response;
    };

};

module.exports= loadModel;