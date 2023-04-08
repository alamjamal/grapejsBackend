import express from 'express';
import { loadAllAssets , getById} from './assets.controller';

const assetRoute = express.Router();

assetRoute.get('/', loadAllAssets);
assetRoute.get('/:id', getById);

export default assetRoute;
