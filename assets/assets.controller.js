import Assests from './assets.model';
import Content from './content.model';
import Page from '../page/page.modal';
import { generateImage, generateText } from '../utility/ai.generate';

export const loadAllAssets = async (req, res) => {
  const assets = [
    {
      type: 'image',
      src: 'https://edeekshaam.in/static/media/i.316b4dddbfcb017908dc.png',
      height: 350,
      width: 250,
    },
    {
      type: 'image',
      src: 'https://edeekshaam.in/static/media/i.316b4dddbfcb017908dc.png',
      height: 350,
      width: 250,
    },
    {
      type: 'image',
      src: 'https://edeekshaam.in/static/media/i.316b4dddbfcb017908dc.png',
      height: 350,
      width: 250,
    },
  ];
  res.json(assets);
};

export const getById = async (req, res) => {
  const { id } = req.params;
  const result = await Assests.find({ pageId: id });
  res.json(result);
};

export const getContentById = async (req, res) => {
  const { id } = req.params;
  const result = await Content.find({ pageId: id });
  res.json(result);
};

export const addAsset = async (req, res) => {
  const { pageId } = req.params;
  const pageInfo = await Page.findById({ _id: pageId });
  if (!pageInfo) return res.status(400).send({ message: 'Page Not Exist' });
  try {
    const response = await generateImage(pageInfo.type);
    let asset = new Assests({
      pageId,
      src: response[2].urls.regular,
      // src: 'https://plus.unsplash.com/premium_photo-1674332003760-4eaf45ea87ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=80',
    });
    // console.log(response.length);
    asset = await asset.save();
    res.status(200).send(asset);
  } catch (err) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

export const addContent = async (req, res) => {
  const { pageId } = req.params;
  const pageInfo = await Page.findById({ _id: pageId });
  if (!pageInfo) return res.status(400).send({ message: 'Page Not Exist' });
  try {
    const userPrompt = `Please create a content on ${pageInfo.type} only in one paragraph and 200 words`;
    const completion = await generateText(userPrompt);

    let content = new Content({
      pageId,
      content: completion.data.choices[0].message.content,
    });

    content = await content.save();
    res.status(200).send({ content });
  } catch (err) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
};
