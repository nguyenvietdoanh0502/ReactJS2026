import { memo, useCallback, useState } from 'react'

const ActionButton = memo(function ActionButton({ onIncrease }) {
  console.log('ActionButton dang render...')

  return (
    <button
      className="rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-white transition hover:bg-emerald-400"
      onClick={onIncrease}
    >
      Tang count
    </button>
  )
})

function UseCallbackDemo() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState(false)

  const handleIncrease = useCallback(() => {
    setCount((prev) => prev + 1)
  }, [])

  return (
    <section
      className={`w-full max-w-3xl rounded-3xl border p-8 shadow-2xl transition ${
        theme
          ? 'border-slate-700 bg-slate-900 text-white'
          : 'border-slate-200 bg-white text-slate-900'
      }`}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-500">
        Demo useCallback
      </p>

      <h2 className="mt-3 text-3xl font-bold">
        useCallback giup ghi nho ham giua cac lan render
      </h2>

      <p className="mt-4 leading-7 text-slate-400">
        Khi component cha render lai, neu khong dung <strong>useCallback</strong>
        {' '}thi function se tao moi va component con co the render lai khong can
        thiet. O day, <strong>ActionButton</strong> duoc boc boi{' '}
        <strong>memo</strong> de ban de quan sat hon.
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
        <p className="mt-2 text-4xl font-bold text-emerald-400">{count}</p>
      </div>

      <div className="mt-6 rounded-2xl border border-dashed border-emerald-400/40 p-4 text-sm leading-6 text-slate-400">
        Mo DevTools Console de xem dong <strong>"ActionButton dang render..."</strong>.
        Khi bam nut doi giao dien, component cha render lai nhung component con
        se khong render lai vi prop <strong>onIncrease</strong> van giu cung tham
        chieu nho <strong>useCallback</strong>.
      </div>
    </section>
  )
}

export default UseCallbackDemo
