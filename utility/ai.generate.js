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