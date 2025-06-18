import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import styles from "./UserMenu.module.css";

function UserMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  const navigate = useNavigate(); // Obtener la función navigate

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles.container} ref={menuRef}>
      <button onClick={() => setOpen(!open)} className={styles.iconButton}>
        👤
      </button>
      {open && (
        <div className={styles.dropdown}>
          {/* Agregar onClick para navegar a /login */}
          <button
            className={styles.menuItem}
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          {/* Agregar onClick para navegar a /signup */}
          <button
            className={styles.menuItem}
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </button>
        </div>
      )}
    </div>
  );
}

export default UserMenu;
