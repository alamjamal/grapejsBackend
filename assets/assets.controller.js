import Assests from './assets.model';
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

export const addAsset = async (req, res) => {
  const { pageId } = req.params;
  const pageInfo = await Page.findById({ _id: pageId });
  if (!pageInfo) return res.status(400).send({ message: 'Page Not Exist' });
  try {
    const response = await generateImage(pageInfo.type);
    let asset = new Assests({
      pageId,
      src: response.data.data[0].url,
      // src: 'https://plus.unsplash.com/premium_photo-1674332003760-4eaf45ea87ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=80',
    });
    await asset.save();
    res.status(200).send(asset);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

export const addContent = async (req, res) => {
  // const { userPrompt } = req.body;
  // const { pageId } = req.params;
  // const pageInfo = await Page.findById({ _id: pageId });
  // if (!pageInfo) return res.status(400).send({ message: 'Page Not Exist' });
  // try {
  //   const response = await generateText(userPrompt);
  //   let asset = new Assests({
  //     pageId,
  //     src: response.data.data[0].url,
  //     // src: 'https://plus.unsplash.com/premium_photo-1674332003760-4eaf45ea87ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=80',
  //   });
  //   await asset.save();
  //   res.status(200).send(asset);
  // } catch (err) {
  //   console.log(err);
  //   res.status(500).send({ message: 'Internal Server Error' });
  // }
  res.send({message : "Daat "})
};
