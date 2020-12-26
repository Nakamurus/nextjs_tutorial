import { useRouter } from 'next/router'

export default function Home() {
    const router = useRouter();
    const routes = router.query.name1;
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