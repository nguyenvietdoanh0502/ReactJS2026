function Button({ active, onToggle }) {
  return (
    <button
      className={`
        relative flex h-[44px] w-[108px] items-center rounded-full border-none cursor-pointer
        transition-all duration-[400ms] ease-in-out
        ${
          active
            ? "bg-[rgb(0,174,255)] shadow-[0_0_16px_rgb(17,187,255)] justify-start pl-[16px]"
            : "bg-[#3a3b3c] shadow-[0_0_16px_rgba(58,59,60,0.65)] justify-end pr-[14px]"
        }
      `}
      onClick={onToggle}
    >
      <span className="z-10 select-none text-[13px] font-bold tracking-[0.08em] text-white">
        {active ? "LIGHT" : "DARK"}
      </span>

      <div
        className={`
          absolute left-[6px] top-[6px] h-[32px] w-[32px] rounded-full bg-white
          transition-transform duration-[400ms] ease-[cubic-bezier(0.25,0.8,0.25,1)]
          ${active ? "translate-x-[64px]" : "translate-x-0"}
        `}
      ></div>
    </button>
  );
}

export default Button;
