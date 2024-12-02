import { useState } from "react";

function ControlledEmailForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //ถ้าความยาวของชื่อน้อยกว่า 3 ตัวอักษร ให้แสดง error
    //ถ้าอีเมลไม่ลงท้ายด้วย@dpu.ac.th ให้แสดง error
    if (name.length < 3) {
      setError("Name must be at least 3 characters");
      return;
    }
    if (!email.endsWith("@dpu.ac.th")) {
      setError("Email must be @dpu.ac.th");
      return;
    } else {
      setError("");
      console.log("Name:", name);
      console.log("Email:", email);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>{" "}
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </label>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}

export default ControlledEmailForm;
