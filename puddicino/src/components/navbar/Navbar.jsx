import { useState, useEffect } from "react";
import "./index.css";

const Navbar = () => {
  const [username, setUsername] = useState();

  useEffect(() => {
    setUsername(JSON.parse(localStorage.getItem("username")));
  }, []);

  const onLogout = () => {
    localStorage.removeItem("username");
    window.location.reload();
  };

  return (
    <div className="Navbar">
      <img src="https://picsum.photos/60/60" alt="logo" />
      <ul>
        <li onClick={onLogout} className="username">
          {username ? (
            <img src={username.imgProfile} alt="user-img" />
          ) : (
            "Non autenticato"
          )}
        </li>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contacts</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
