import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from '../Components/controls/Button';
import FormItem from '../Components/controls/FormItem';

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
      <FormItem
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Correo electronico"
      />
      <FormItem
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Contraseña"
      />
      <Button type="submit">Iniciar sesion</Button>
      <div>
        <input type="checkbox" id="rememberMe" />
        <label htmlFor="rememberMe">Recordarme</label>
      </div>{" "}
    </form>
  );
}
export default Login;
