import { useRouter } from 'next/router'

export default function Home() {
    const router = useRouter();
    console.log(router.query);
    return (
        <>
            <h1>Hello</h1>
        </>
    );
}