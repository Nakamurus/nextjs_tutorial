import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

const KEY = 'adsfsfahfsajhfakdshjflkdfhadjfz';

const Login = (req: NextApiRequest, res: NextApiResponse) => {
    if (!req.body) {
        res.statusCode = 404;
        res.end('Error');
        return;
    }

    console.log(username, password);
    res.json({
        token: jwt.sign({
            username,
            admin: username === 'admin' && password === 'password'
        }, KEY)
    })
}

export default Login;