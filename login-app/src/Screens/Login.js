import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Components/controls/Button";
import FormItem from "../Components/controls/FormItem";
import styles from "./Login.module.css";

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
    if (email === "WebAdmin@gmail.com" && password === "SIESAdmin") {
      navigate("/home");
    } else {
      alert("Correo o contraseña incorrectos");
    }
  };
  return (
    <div className={styles.fondoLogin}>
      <div className={styles.loginContainer}>
        <div>
          <h2 className={styles.loginText}>Login</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputField}>
            <FormItem
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Correo electronico</label>
          </div>
          <div className={styles.inputField}>
            <FormItem
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Contraseña</label>
          </div>
          <div className={styles.forget}>
            <label htmlFor="rememberMe">
              <input type="checkbox" id="rememberMe" />
              <p>Recordarme</p>
            </label>
            <a href="#">¿Olvidaste tu contraseña?</a>
          </div>
          <Button type="submit">Iniciar sesion</Button>
          <div className={styles.register}>
            <p>
              ¿No tienes una cuenta? <a href="#">Registrarse</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
