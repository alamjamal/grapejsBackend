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