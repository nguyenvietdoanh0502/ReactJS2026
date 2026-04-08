function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-16 text-white">
      <section className="w-full max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-cyan-950/30 backdrop-blur">
        <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-300">
          Tailwind CSS da san sang
        </span>

        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
          Vite + React + Tailwind CSS
        </h1>

        <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
          Ban co the bat dau viet giao dien bang utility classes ngay trong{' '}
          <code className="rounded bg-white/10 px-2 py-1 text-cyan-200">
            src/App.jsx
          </code>
          .
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <button className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300">
            Nut Tailwind mau
          </button>
          <button className="rounded-xl border border-white/15 px-5 py-3 font-semibold text-white transition hover:bg-white/10">
            San sang de code
          </button>
        </div>
      </section>
    </main>
  )
}

export default App
