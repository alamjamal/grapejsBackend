import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import uiRoute from './ui/ui.route';
import pageRoute from './page/page.route';
import assetRoute from './assets/assets.route';
import projectRoute from './project/project.route';
import renderHtml from './render/render.controller';
import userRoute from './user/user.route';


//Initialize App
const app = express();
app.use(express.json());
const corsOptions = {
  origin: function (origin, callback) {
    callback(null, true);
  },
};

corsOptions.credentials = true;
app.use(cors(corsOptions));



const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./swagger.json');




//HTML and Static file
app.use('/resources', express.static(path.join(__dirname, 'public')));
app.set('views', `views`);
app.set('view engine', 'hbs');


const mongoUri = 'mongodb://127.0.0.1:27017/webpage_builder';
mongoose.connect(
  mongoUri,
  {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log('Connected to MongoDB');
  },
);
app.use('/api/projects', projectRoute);
app.use('/api/pages', pageRoute);
app.use('/api/assets', assetRoute);
app.use('/api/user', userRoute);

// app.use('/api/', uiRoute);
app.get('/:pageId?', renderHtml);


app.use('/api/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.APP_PORT || 4000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
