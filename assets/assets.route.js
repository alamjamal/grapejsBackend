import express from 'express';
import { loadAllAssets, getById, addAsset, addContent } from './assets.controller';

const assetRoute = express.Router();

assetRoute.get('/', loadAllAssets);

assetRoute.get('/addasset/:pageId', addAsset);

assetRoute.post('/addcontent/:pageId', addContent);

assetRoute.get('/:id', getById);

export default assetRoute;
