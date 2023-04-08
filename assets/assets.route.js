import express from 'express';
import { loadAllAssets , getById , addAsset } from './assets.controller';

const assetRoute = express.Router();

assetRoute.get('/', loadAllAssets);
assetRoute.get('/:id', getById);
assetRoute.post('/', addAsset);

export default assetRoute;
