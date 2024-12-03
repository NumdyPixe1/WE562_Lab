import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    //ถ้าข้อมูลตรงกันให้เข้าไปที่หน้า dashboard
    if (username === "admin") {
      navigate("/dashboard");
    } else {
      alert("Invalid username! Try again.");
    }
  };
  return (
    <div style={{ backgroundColor: "#FC8F54" }}>
      <h1>Home Page</h1>
      <h3>Please, Login</h3>
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Home;
