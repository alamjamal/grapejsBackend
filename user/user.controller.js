import User from './user.model'

export const createUserInfo = async (req, res) => {
    const userBody = req.body;
    const user = await new User(req.body).save()
    res.send(user)
};

export const getUserById = async (req, res) => {
    const userBody = req.body;
    const user = await new User(req.body).save()
    res.send(user)
};

