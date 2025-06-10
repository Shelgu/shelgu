export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight text-center">
        Shelgu
      </h1>
      <p className="text-xl md:text-2xl text-center mb-8 max-w-xl text-gray-300">
        We’re fusing AI and automotive culture to build the future of performance.
      </p>
      <a
        href="https://buildlab.shelgu.com"
        className="text-blue-500 underline text-lg hover:text-blue-400 transition"
      >
        Check out BuildLab
      </a>
    </main>
  );
}
