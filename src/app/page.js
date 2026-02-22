export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        {/* Name */}
        <h1 className="text-2xl font-medium">Julien Nim</h1>

        {/* Role */}
        <p className="mt-1 text-neutral-500 text-lg">Design Engineer</p>

        {/* Description */}
        <p className="mt-10 text-neutral-600 text-xl leading-relaxed">
          Focused on creating intuitive and performant web experiences. Bridging
          the gap between design and development.
        </p>
      </div>
    </main>
  );
}
