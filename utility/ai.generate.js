const { Configuration, OpenAIApi } = require('openai');
const VITE_Open_AI_Key = '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';
const configuration = new Configuration({
  apiKey: VITE_Open_AI_Key,
});

const openai = new OpenAIApi(configuration);

export const generateImage = async (prompt) => {
  return await openai.createImage({
    prompt,
    n: 1,
    size: '256x256',
  });
};

export const generateText = async (prompt) => {
  return await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: prompt }],
  });
};
