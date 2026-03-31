import Button from "../common/Button";
import logo from "../../assets/logo.png";

function Header({active, onToggle}) {

  return (
    <header
      className={`sticky top-0 z-50 flex h-[60px] w-full items-center justify-between px-8 shadow-sm backdrop-blur-md transition-colors duration-[400ms] ${
        active
          ? "border-b border-slate-200 bg-white/90"
          : "border-b border-[#3a3b3c] bg-[#242526]/95"
      }`}
    >
      <img
        src={logo}
        alt="Logo"
        className="h-[40px] w-auto cursor-pointer object-contain"
      />
      <Button active={active} onToggle={onToggle} />
    </header>
  );
}

export default Header;
