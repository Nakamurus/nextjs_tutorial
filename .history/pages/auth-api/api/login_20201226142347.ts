import type { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

const KEY = 'adsfsfahfsajhfakdshjflkdfhadjfz';

module.exports = (req: NextApiRequest, res: NextApiResponse) => {
    console.log('AAAAA');
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