import Link from 'next/link';

export default function Home() {
    return (
        <>
         <Link href="../routing/nested">
                <a>Nested Routing</a>
            </Link>
        </>
    );
}