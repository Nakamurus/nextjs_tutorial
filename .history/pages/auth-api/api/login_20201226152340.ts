import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

const KEY = 'adsfsfahfsajhfakdshjflkdfhadjfz';

export default (req: NextApiRequest, res: NextApiResponse) => {
    console.log(req);
    console.log(req.body);
    if (!req.body) {
        console.log('NO BODY');
        res.statusCode = 404;
        res.end('Error');
        return;
    }

    const { username, password } = req.body;
    console.log(username, password);
    res.json({
        token: jwt.sign({
            username,
            admin: username === 'admin' && password === 'password'
        }, KEY)
    })
}