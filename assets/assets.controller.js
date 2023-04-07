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
