import { useRouter } from 'next/router'

export default function Home() {
    const router = useRouter();
    const routes = router.query.name.0;
    console.log(routes);

    return (
        <h1>
            {/* {routes.map((route) => {
                (
                    <h1>{route}</h1>
                )
            })} */}
        </h1>
    );
}