import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import UserDetail from "./pages/UserDetail";

function App() {
  return (
    <div className="min-h-screen bg-slate-100 py-8">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <nav className="mb-8 flex items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `rounded-lg px-4 py-2 text-sm font-semibold transition ${
              isActive
                ? "bg-blue-600 text-white shadow-sm"
                : "text-slate-700 hover:bg-blue-50 hover:text-blue-700"
            }`
          }
        >
          Trang Chủ
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `rounded-lg px-4 py-2 text-sm font-semibold transition ${
              isActive
                ? "bg-blue-600 text-white shadow-sm"
                : "text-slate-700 hover:bg-blue-50 hover:text-blue-700"
            }`
          }
        >
          Danh sách người dùng
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route
          path="*"
          element={
            <h1 className="rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-lg font-semibold text-red-600">
              404 - Không tìm thấy trang!
            </h1>
          }
        />
      </Routes>
      </div>
    </div>
  );
}
export default App;
