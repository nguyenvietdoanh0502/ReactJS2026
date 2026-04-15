import { useMemo, useState } from 'react'

function UseMemoDemo() {
  const [count, setCount] = useState(0)
  const [darkMode, setDarkMode] = useState(false)

  const numbers = [12, 25, 7, 40, 18, 33, 2, 50, 29, 14]

  const expensiveNumbers = useMemo(() => {
    console.log('Dang tinh toan lai danh sach...')

    return numbers.filter((number) => {
      for (let i = 0; i < 2000000; i += 1) {}
      return number > count
    })
  }, [count])

  return (
    <section
      className={`w-full max-w-3xl rounded-3xl border p-8 shadow-2xl transition ${
        darkMode
          ? 'border-slate-700 bg-slate-900 text-white'
          : 'border-slate-200 bg-white text-slate-900'
      }`}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-500">
        Demo useMemo
      </p>

      <h2 className="mt-3 text-3xl font-bold">
        useMemo giup toi uu cac phep tinh toan ton tai nguyen
      </h2>

      <p className="mt-4 leading-7 text-slate-400">
        Danh sach ben duoi chi duoc tinh lai khi <strong>`count`</strong> thay
        doi. Khi ban bam nut doi giao dien, component render lai nhung ket qua
        tu <strong>`useMemo`</strong> van duoc giu nguyen.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <button
          className="rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-white transition hover:bg-cyan-400"
          onClick={() => setCount((prev) => prev + 5)}
        >
          Tang count: {count}
        </button>

        <button
          className="rounded-xl border border-current px-5 py-3 font-semibold transition hover:opacity-80"
          onClick={() => setDarkMode((prev) => !prev)}
        >
          Doi giao dien: {darkMode ? 'Dark' : 'Light'}
        </button>
      </div>

      <div className="mt-8 rounded-2xl bg-black/10 p-5">
        <p className="text-sm font-medium">So lon hon {count}:</p>
        <div className="mt-3 flex flex-wrap gap-3">
          {expensiveNumbers.map((number) => (
            <span
              key={number}
              className="rounded-full bg-cyan-500/15 px-4 py-2 font-semibold text-cyan-400"
            >
              {number}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-dashed border-cyan-400/40 p-4 text-sm leading-6 text-slate-400">
        Mo DevTools Console de thay dong <strong>"Dang tinh toan lai danh sach..."</strong>.
        Neu bam nut doi giao dien ma console khong in lai dong nay, do chinh la
        tac dung cua <strong>useMemo</strong>.
      </div>
    </section>
  )
}

export default UseMemoDemo
