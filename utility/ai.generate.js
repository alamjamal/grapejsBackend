const { Configuration, OpenAIApi } = require('openai');
const VITE_Open_AI_Key = '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';
const configuration = new Configuration({
  apiKey: VITE_Open_AI_Key,
});

const openai = new OpenAIApi(configuration);

export const generateImage = async (prompt) => {
  const response =  await openai.createImage({
    prompt,
    n: 1,
    size: '256x256',
  });
};