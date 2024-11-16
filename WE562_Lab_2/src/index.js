import React from "react";
import ReactDOM from "react-dom/client";
import { FlipCard } from "./FlipCard.jsx";

const users = [{ id: 1, username: "Numdao", email: "numdao123@gmail.com" }];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    {users.map((user) => (
      <FlipCard key={user.id} username={user.username} email={user.email} />
    ))}
  </div>
);
