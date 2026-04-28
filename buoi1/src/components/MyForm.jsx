import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const mySchema = z.object({
  email: z.string().min(1, "Vui lòng nhập Email").email("Email chưa đúng định dạng"),
  age: z.coerce.number().min(18, "Phải trên 18 tuổi"),
  password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự").max(20, "Mật khẩu không được vượt quá 20 ký tự"),
  confirmPassword: z.string().min(6, "Mật khẩu xác nhận phải có ít nhất 6 ký tự").max(20, "Mật khẩu xác nhận không được vượt quá 20 ký tự"),
})
.refine((data)=> data.password === data.confirmPassword,{
  message: "Mật khẩu xác nhận không khớp",
  path: ["confirmPassword"],
});

export default function MyForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    resolver: zodResolver(mySchema),
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Du lieu an toan gui len Server:", data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-md space-y-5 rounded-2xl border border-slate-700 bg-slate-900/70 p-6 shadow-2xl backdrop-blur"
    >
      <h2 className="text-center text-xl font-semibold text-white">Đăng ký thông tin</h2>

      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-slate-200">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          placeholder="Nhap email..."
          className={`w-full rounded-lg border bg-slate-800 px-3 py-2 text-slate-100 outline-none transition ${
            errors.email
              ? "border-red-500 focus:ring-2 focus:ring-red-500/40"
              : "border-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
          }`}
        />
        {errors.email && <p className="text-sm text-red-400">{errors.email.message}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="age" className="block text-sm font-medium text-slate-200">
          Tuoi
        </label>
        <input
          id="age"
          type="number"
          {...register("age")}
          placeholder="Nhap tuoi..."
          className={`w-full rounded-lg border bg-slate-800 px-3 py-2 text-slate-100 outline-none transition ${
            errors.age
              ? "border-red-500 focus:ring-2 focus:ring-red-500/40"
              : "border-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
          }`}
        />
        {errors.age && <p className="text-sm text-red-400">{errors.age.message}</p>}
      </div>
      <div className="space-y-2">
        <label htmlFor="password" className="block text-sm font-medium text-slate-200">
          Mat khau
        </label>
        <input
          id="password"
          type="password"
          {...register("password")}
          placeholder="Nhap mat khau..."
          className={`w-full rounded-lg border bg-slate-800 px-3 py-2 text-slate-100 outline-none transition ${
            errors.password
              ? "border-red-500 focus:ring-2 focus:ring-red-500/40"
              : "border-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
          }`}
        />
        {errors.password && <p className="text-sm text-red-400">{errors.password.message}</p>}
      </div>
      <div className="space-y-2">
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-200">
          Xac nhan mat khau
        </label>
        <input
          id="confirmPassword"
          type="password"
          {...register("confirmPassword")}
          placeholder="Xac nhan mat khau..."
          className={`w-full rounded-lg border bg-slate-800 px-3 py-2 text-slate-100 outline-none transition ${
            errors.confirmPassword
              ? "border-red-500 focus:ring-2 focus:ring-red-500/40"
              : "border-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
          }`}
        />
        {errors.confirmPassword && <p className="text-sm text-red-400">{errors.confirmPassword.message}</p>}
      </div>
      <button
        type="submit"
        disabled={isSubmitting || !isValid}
        className="w-full rounded-lg bg-cyan-500 px-4 py-2 font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:bg-slate-600 disabled:text-slate-300"
      >
        {isSubmitting ? "Dang xu ly..." : "Xac nhan"}
      </button>
    </form>
  );
}
