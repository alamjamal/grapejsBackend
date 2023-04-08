import Assests from './assets.model'

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


export const getById = async (req, res) =>{
  const {id} = req.params;
  const result = await Assests.findById({_id:id}) 
  res.json(result)
}
