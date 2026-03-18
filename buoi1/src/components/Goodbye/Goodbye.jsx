import React from "react";

// Tạo một Functional Component bằng Arrow Function
const Goodbye = () => {
  const courseName = "ReactJS HIT 2026"; // Biến JS

  return (
    <div className="welcome-box">
      {/* Sử dụng {} để gọi biến courseName */}
      <h1>Tạm biệt {courseName}</h1>
      <p>Hôm nay chúng ta đã học về JSX và Functional Components.</p>
    </div>
  );
};

export default Goodbye; // Export để dùng ở file khác