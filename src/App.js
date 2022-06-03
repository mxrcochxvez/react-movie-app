import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [selected, setSelected] = useState("");
  const [admin, setAdmin] = useState(true);

  return (
    <div className="App">
      <button onClick={() => setSelected("Messages")}>Messages</button>
      <button onClick={() => setSelected("Posts")}>Posts</button>
      {admin && <button onClick={() => setSelected("Users")}>Users</button>}
      {admin ? (
        <button onClick={() => setSelected("Manage Users")}>
          Manage Users
        </button>
      ) : (
        <button onClick={() => setSelected("Profile")}>Profile</button>
      )}
      {admin && selected === "Posts" ? (
        <p>Admin is true and Posts are selected</p>
      ) : null}
      <p>{selected}</p>
    </div>
  );
}

export default App;
