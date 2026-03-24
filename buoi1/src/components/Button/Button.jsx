import { useState } from "react";
import "./Button.css";

function Button(){
    const [active, setActive] = useState(true);
    return(
        <button className={`toggle-btn ${active ? "on" : "off"}`}  onClick={() => setActive(!active)}>
            <span className="text">{active ? "ON" : "OFF"}</span>
            <div className="round"></div>
        </button>
    )
}
export default Button;