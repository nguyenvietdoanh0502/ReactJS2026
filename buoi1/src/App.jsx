import MyForm from "./components/MyForm"
import { useForm } from "react-hook-form"
import { z } from "zod";
import NewForm from "./components/NewForm";
function App() {
  

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-16 text-white">
      <NewForm />
    </main>
  )
}

export default App
