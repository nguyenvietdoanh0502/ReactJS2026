import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementCounter, decrementCounter } from './store/action';

function App() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10 text-slate-900">
      <main className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-xl items-center justify-center">
        <section className="w-full rounded-lg border border-slate-200 bg-white p-8 text-center shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
            Redux Core
          </p>
          <h1 className="mt-2 text-3xl font-bold">Counter App</h1>

          <div className="my-8 rounded-lg bg-slate-50 px-6 py-8">
            <p className="text-sm font-medium text-slate-500">Gia tri hien tai</p>
            <p className="mt-2 text-6xl font-bold text-slate-950">{count}</p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <button
              onClick={() => dispatch(decrementCounter())}
              className="rounded-md border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:border-rose-300 hover:bg-rose-50 hover:text-rose-700 active:scale-[0.99]"
            >
              Giam
            </button>
            <button
              onClick={() => dispatch(incrementCounter())}
              className="rounded-md bg-emerald-600 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-emerald-700 active:scale-[0.99]"
            >
              Tang
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
