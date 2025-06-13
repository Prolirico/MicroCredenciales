import React from "react";
import styles from "./Home.module.css";
import LogoSEDEQ from "../Assets/Secretaria-de-educacion-Queretaro.png";

function Home() {
  return (
    <div className={styles.fondoHome}>
      {/* Header */}
      <div className={styles.Header}>
        <div className={styles.contenedorHeader1}>
          <div>
            <h1>MicroCredenciales SEDEQ</h1>
          </div>
        </div>
        <div className={styles.contenedorHeader2}>
          <img src={LogoSEDEQ} alt="Logo" />
        </div>
      </div>
      {/* Content */}
      <div className={styles.contenidoHome}>
        <h2>Inicio</h2>
      </div>
      {/* Footer */}
      <div className={styles.contenidoFooter}>
        <h2>Footer</h2>
      </div>
    </div>
  );
}

export default Home;
