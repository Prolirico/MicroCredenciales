import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  // Variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // Funcion de Login
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("Email:", email);
    //console.log("Password:", password);
    if (email == "022000708@upsrj.edu.mx" && password == "123456789") {
      navigate("/home");
    } else {
      alert("Correo o contraseña incorrectos");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Correo electronico"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Contraseña"
      />
      <button type="submit">Iniciar sesion</button>
      <div>
        <input type="checkbox" id="rememberMe" />
        <label htmlFor="rememberMe">Recordarme</label>
      </div>
      <img src="../src/Assets/logoGoogle.svg" alt="Iniciar sesión con Google" />
    </form>
  );
}
export default Login;
