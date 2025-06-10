import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ textAlign: 'center', marginTop: '5rem' }}>
      <h1>Welcome to Shelgu</h1>
      <p>This is the future home of something exciting.</p>
      <p>
        Explore our first project:&nbsp;
        <Link href="https://buildlab.shelgu.com" style={{ color: '#0070f3' }}>
          BuildLab →
        </Link>
      </p>
    </main>
  );
}
