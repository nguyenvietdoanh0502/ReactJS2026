import BookList from './components/BookList'
import React from 'react'
import { useState, useMemo } from 'react'
import ProductList from './components/ProductList'

function App() {
  const [fibonacci,setFibonacci] = useState(1)
  return (
    <main className="min-h-screen bg-slate-100 p-6">
      <BookList />
    </main>
  )
}

export default App
