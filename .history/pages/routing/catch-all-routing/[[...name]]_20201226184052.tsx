import { useRouter } from 'next/router'

export default function Home() {
    const router = useRouter();
    const routes: Array<string> = router.query.name;

    return (
        <string>
            {routes.map((route) => {
                (
                    <h1>{route}</h1>
                )
            })}
        </string>
    );
}