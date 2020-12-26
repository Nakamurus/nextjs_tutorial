import { useRouter } from 'next/router'

export default function Home() {
    const router = useRouter();
    const routes: string[] = router.query.name;

    return (
        <h1>
            {routes.map((route) => {
                (
                    <h1>{route}</h1>
                )
            })}
        </h1>
    );
}