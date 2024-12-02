import { useState } from "react";
function MultiFieldForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // -----------------------------------------------------
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  // -----------------------------------------------------
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
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
      <label>
        <br />
        Phone:
        <input
          type="text"
          value={phone}
          disabled={name && email ? "" : "disabled"} //ถ้าชื่อและอีเมล Input เป็นค่าว่างให้ disabled เบอร์โทร
          onChange={(e) => setPhone(e.target.value)}
        ></input>{" "}
      </label>
      <label>
        Address:
        <input
          type="text"
          value={address}
          disabled={name && email ? "" : "disabled"} //ถ้าชื่อและอีเมล Input เป็นค่าว่างให้ disabled เบอร์โทร
          onChange={(e) => setAddress(e.target.value)}
        ></input>
      </label>

      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}
/*function MultiFieldForm() {
  const [form, setForm] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}*/

export default MultiFieldForm;
