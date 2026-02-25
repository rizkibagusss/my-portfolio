export default function ConnectSection() {
  return (
    <section className="py-24">
      <h2 className="text-xl font-medium">Connect</h2>

      <p className="mt-6 text-neutral-600">
        Feel free to contact me at{" "}
        <a href="mailto:your@email.com" className="underline hover:text-black">
          rizkibagusariyanto@gmail.com
        </a>
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="https://github.com/"
          className="group relative px-4 py-2 rounded-full border border-neutral-200 text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-neutral-400"
        >
          <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
            Github ↗
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/rizkibagusa/"
          className="group relative px-4 py-2 rounded-full border border-neutral-200 text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-neutral-400"
        >
          <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
            LinkedIn ↗
          </span>
        </a>

        <a
          href="https://x.com/rizkyuniverse"
          className="group relative px-4 py-2 rounded-full border border-neutral-200 text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-neutral-400"
        >
          <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
            X ↗
          </span>
        </a>
      </div>
    </section>
  );
}
