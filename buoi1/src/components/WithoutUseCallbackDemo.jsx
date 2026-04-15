import { memo, useState } from 'react'

const ActionButton = memo(function ActionButton({ onIncrease }) {
  console.log('ActionButton khong dung useCallback dang render...')

  return (
    <button
      className="rounded-xl bg-rose-500 px-5 py-3 font-semibold text-white transition hover:bg-rose-400"
      onClick={onIncrease}
    >
      Tang count
    </button>
  )
})

function WithoutUseCallbackDemo() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState(false)

  const handleIncrease = () => {
    setCount((prev) => prev + 1)
  }

  return (
    <section
      className={`w-full max-w-3xl rounded-3xl border p-8 shadow-2xl transition ${
        theme
          ? 'border-slate-700 bg-slate-900 text-white'
          : 'border-slate-200 bg-white text-slate-900'
      }`}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-500">
        Khong dung useCallback
      </p>

      <h2 className="mt-3 text-3xl font-bold">
        Moi lan render se tao lai function moi
      </h2>

      <p className="mt-4 leading-7 text-slate-400">
        Component nay giong voi vi du <strong>useCallback</strong>, nhung
        <strong> handleIncrease</strong> khong duoc ghi nho. Vi vay moi lan
        component cha render lai, prop truyen vao <strong>ActionButton</strong>
        se doi tham chieu va component con cung render lai.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <ActionButton onIncrease={handleIncrease} />

        <button
          className="rounded-xl border border-current px-5 py-3 font-semibold transition hover:opacity-80"
          onClick={() => setTheme((prev) => !prev)}
        >
          Doi giao dien: {theme ? 'Dark' : 'Light'}
        </button>
      </div>

      <div className="mt-8 rounded-2xl bg-black/10 p-5">
        <p className="text-sm font-medium">Gia tri count hien tai:</p>
        <p className="mt-2 text-4xl font-bold text-rose-400">{count}</p>
      </div>

      <div className="mt-6 rounded-2xl border border-dashed border-rose-400/40 p-4 text-sm leading-6 text-slate-400">
        Mo DevTools Console de xem dong{' '}
        <strong>"ActionButton khong dung useCallback dang render..."</strong>.
        Khi bam nut doi giao dien, component con van render lai du chi la thay
        doi state khong lien quan.
      </div>
    </section>
  )
}

export default WithoutUseCallbackDemo
