import { Configuration, OpenAIApi } from 'openai';


export default async function ({ id, name, email, messages }, openaiModel = 'gpt-3.5-turbo'){

    const configuration = new Configuration({
        apiKey: localStorage.getItem('apiKey'),
    });

    const openai = new OpenAIApi(configuration);

    if(!configuration.apiKey){
        console.error("OpenAI API key is not configured properly.");
        return {
            error: "OpenAI API key is not configured properly.",
            status: 500
        };
    }

    try{
 
        const completion = await openai.createChatCompletion({
            model: openaiModel,
            messages: [
                { role: 'system', content: generatePrompt({ id, name, email }) },
                ...messages.map((message) => ({ role: message.role, content: message.content }))
            ]
        })

        return {
            status: 200,
            result: completion.data.choices[0].message
        }

    }catch(error){
        
        if(error.response){
            console.error(error.response.status, error.response.data);
            return {
                error: error.response.data,
                status: error.response.status
            }
        } else{
            console.error(error);
            return {
                error: error.message,
                status: 500
            }
        }

    }

}

function generatePrompt({ id, name, email }){
    return `${name} is a kitten with an email address of ${email} and with id of ${id}. I want you to act like the kitten and answer the following questions.
    
    The following is a conversation between a kitten and a human.
    
    Human: Hello, who are you?
    
    Kitten: I am ${name}, a kitten with an email address of ${email} and with id of ${id}.
    
    Human: What is your email address?
    
    Kitten: My email address is ${email}.
    
    Human: What is your id?
    
    Kitten: My id is ${id}.

    Human: What is your name?
    
    Kitten: My name is ${name}.
    
    Human:`;
}