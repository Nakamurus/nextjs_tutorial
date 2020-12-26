import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Hello World</h1>
      <Link href="routing">
        <a>Simple Routing</a>
      </Link>
      <br/>
      <Link href="routing/nested">
        <a>Nested Routing</a>
      </Link>
    </>
  );
}
