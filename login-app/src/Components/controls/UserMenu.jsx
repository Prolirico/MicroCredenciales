import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./UserMenu.module.css";

function UserMenu({ user, onLogout }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    onLogout();
    setOpen(false);
    navigate("/home");
  };

  return (
    <div className={styles.container} ref={menuRef}>
      <button onClick={() => setOpen(!open)} className={styles.iconButton}>
        {user ? `👤 ${user.email.charAt(0).toUpperCase()}` : "👤"}
      </button>
      {open && (
        <div className={styles.dropdown}>
          {user ? (
            <>
              <div className={styles.userInfo}>
                <span>{user.email}</span>
                <span className={styles.role}>
                  {user.role.charAt(0).toUpperCase() +
                    user.role.slice(1).toLowerCase()}
                </span>
              </div>
              <button className={styles.menuItem} onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                className={styles.menuItem}
                onClick={() => {
                  setOpen(false);
                  navigate("/login");
                }}
              >
                Login
              </button>
              <button
                className={styles.menuItem}
                onClick={() => {
                  setOpen(false);
                  navigate("/signup");
                }}
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default UserMenu;
