import React from "react";
import { useRef ,useState} from 'react';

export default function FocusInput() {
  // 1. Khởi tạo một ref với giá trị null
  const inputRef = useRef(null);
  const [isClicked, setIsClicked] = useState(0);
  const handleFocus = () => {
    // 2. Truy cập vào thẻ HTML thông qua thuộc tính .current
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = 'yellow';
    setIsClicked(isClicked + 1);
  };

  return (
    <div>
      {/* 3. Gắn ref vào thẻ input */}
      <input ref={inputRef} type="text" placeholder={isClicked} />
      <button  onClick={handleFocus}>Focus vào ô này!</button>
    </div>
  );
}