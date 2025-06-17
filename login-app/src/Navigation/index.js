import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Login from "../Screens/Login";
import Home from "../Screens/Home";
import SignUp from "../Screens/SignUp";
import RecuperarContraseña from "../Screens/recuperarContraseña";

function NavegacionPrincipal() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/recuperarContraseña" element={<RecuperarContraseña />} />
    </Routes>
  );
}

export default NavegacionPrincipal;
