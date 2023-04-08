const { Configuration, OpenAIApi } = require('openai');
const apiKey = process.env.openApiKey;
import axios from 'axios';

const configuration = new Configuration({
  apiKey: apiKey,
});

const openai = new OpenAIApi(configuration);

export const generateImage = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID NWEWxW2Fzx0bI2Wjb0XLYSlkGm4T-qIqVpNYit9Ehwg',
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

// export const generateImage = async (prompt) => {
//   return await openai.createImage({
//     prompt,
//     n: 1,
//     size: '256x256',
//   });
// };

export const generateText = async (prompt) => {
  return await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: prompt }],
  });
};
