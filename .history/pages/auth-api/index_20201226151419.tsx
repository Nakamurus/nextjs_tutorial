import { useState } from 'react';
import jwt from 'jsonwebtoken';

export default function Home() {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [message, setMessage] = useState<string>('You are not logged in');
    const [secret, setSecret] = useState<string>('');

    async function submitForm() {
        console.log('START FIRST FUNC');
        console.log(username);
        console.log(password);
        const res = await fetch('http://localhost:3000/auth-api/api/login', {
            method: 'POST',
            mode: 'same-origin',
            credentials: 'same-origin',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        }).then((t) => t.json());
        console.log('FINISHED FIRST FUNC');
        const token = res.token;
        if (token) {
            console.log("HAS TOKEN")
            const json = jwt.decode(token) as { [key: string]: string};

            console.log(json);
            setMessage(
                `Welcome ${json.username} and you are ${json.admin ? 'an admin!' : 'not an admin!'}`
            )
            console.log('START SECOND FUNC');
            const res = await fetch('../auth-api/api/secret', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ token })
            }).then((t) => t.json());

            console.log('FINISHED SECOND FUNC');
            if (res.secretAdminCode) {
                setSecret(res.secretAdminCode);
            } else {
                setSecret('Nothing available');
            }

        } else {
            setMessage('Something went wrong')
        }
    }

    return (
        <div>
            <h1>{message}</h1>
            <h1>Secret: {secret}</h1>
            <form>
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br/>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br/>
                <input type="button" value="Login" onClick={submitForm} />
            </form>
        </div>
    )
}