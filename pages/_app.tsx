import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to Shelgu</h1>
      <p className="mb-6">Explore our AI tools and experiments.</p>

      <Link href="https://buildlab.shelgu.com" className="text-blue-500 underline">
        Visit BuildLab
      </Link>
    </main>
  );
}
