import useFetch from "../hooks/useFetch";
import { Routes, Route, Link } from "react-router-dom";
import UserDetail from "./UserDetail";

function About() {
  const {data, loading, error} = useFetch(
    `${import.meta.env.VITE_API_BASE_URL}/users`,
  );
  if(loading) return <p>Đang tải...</p>
  if(error) return <p>Lỗi: {error}</p>
  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 bg-blue-600/95 px-6 py-4 text-white">
        <h1 className="text-2xl font-bold tracking-tight">Danh sách người dùng</h1>
      </div>
      <ul className="divide-y divide-slate-200">
        {data.map((user)=>(
          <li key={user.id} className="flex items-center justify-between gap-4 px-6 py-4">
            <span className="font-medium text-slate-800">{user.name}</span>
            <Link to={`/users/${user.id}`} className="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold text-white transition hover:bg-blue-700">Xem chi tiết</Link>
          </li>
        ))}
        
      </ul>
    </section>
  );
}

export default About;


