import Link from 'next/link';

export default function Home() {
    return (
        <Link href="./nested">
            <a>Nested Routing</a>
        </Link>
    );
}