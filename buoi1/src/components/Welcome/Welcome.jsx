import React from "react";

// Tạo một Functional Component bằng Arrow Function
const Welcome = () => {
  const courseName = "ReactJS HIT 2026"; // Biến JS

  return (
    <div className="welcome-box">
      {/* Sử dụng {} để gọi biến courseName */}
      <h1>Chào mừng bạn đến với khóa học {courseName}</h1>
      <p>Hôm nay chúng ta đã học về JSX và Functional Components.</p>
    </div>
  );
};

export default Welcome; // Export để dùng ở file khác