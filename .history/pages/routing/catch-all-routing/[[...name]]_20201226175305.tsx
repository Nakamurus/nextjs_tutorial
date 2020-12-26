import { useRouter } from 'next/router'

export default function Home() {
    const router = useRouter();
    console.log(router.query.name);
    return (
        <>
            {router.query.name.((name) return {
                (
                    <h1>name</h1>
                )
            })}
        </>
    );
}