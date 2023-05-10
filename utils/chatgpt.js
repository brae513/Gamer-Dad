const fs = require('fs');
const openAi = require('openai');

// OpenAIApi required config
const configuration = new openAi.Configuration({
  apiKey: process.env.OPEN_AI_API_KEY,
});
const modelId = "gpt-3.5-turbo";

const currentMessages = [];



async function getResponse(message){
	// OpenAIApi initialization
	const openai = new openAi.OpenAIApi(configuration);
	
	currentMessages.push({ role: "user", content: message });

	const result = await openai.createChatCompletion({
      model: modelId,
      messages: currentMessages,
    });
	const responseText = result.data.choices.shift().message.content;
	return responseText;
}


module.exports = {
	getResponse
};
