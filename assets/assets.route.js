import express from 'express';
import { loadAllAssets , getById , addAsset } from './assets.controller';

const assetRoute = express.Router();

assetRoute.get('/', loadAllAssets);
assetRoute.get('/addasset/:pageId', addAsset);
assetRoute.get('/:id', getById);

export default assetRoute;
