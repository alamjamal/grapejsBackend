import express from 'express';
const userRoute = express.Router();

import { createUserInfo,  } from './user.controller';


userRoute.post('/', createUserInfo);


export default userRoute

