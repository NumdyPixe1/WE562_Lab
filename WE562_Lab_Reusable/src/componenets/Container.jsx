import React from "react";

function Container({ children, style }) {
  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: "#f9f9f9",
        ...style,
        //เอา style จากข้างนอก(override)
      }}
    >
      {children}
      {/* เพิ่ม component อื่นจากข้างนอก(override) */}
    </div>
  );
}
export default Container;
