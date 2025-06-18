import React, { useState, useRef, useEffect } from "react";
import styles from "./MainMenu.module.css";

function MainMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

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
        ☰
      </button>
      {open && (
        <div className={styles.dropdown}>
          <button className={styles.menuItem}>Opción 1</button>
          <button className={styles.menuItem}>Opción 2</button>
          <button className={styles.menuItem}>Opción 3</button>
          <button className={styles.menuItem}>Opción 4</button>
        </div>
      )}
    </div>
  );
}

export default MainMenu;
