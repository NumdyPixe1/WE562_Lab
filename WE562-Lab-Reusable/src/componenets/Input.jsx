import { useState } from "react";

function Input({ type = "text", action, style }) {
  const [value, setValue] = useState("");
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        action(value);
      }}
      style={{
        display: "block",
        backgroundColor: "#f9f9f9",
        margin: "10px",
        ...style,
      }}
    ></input>
  );
}
export default Input;
