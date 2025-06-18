import React from "react";
import styles from "./Home.module.css";
import LogoSEDEQ from "../Assets/Secretaria-de-educacion-Queretaro.png";
import UserMenu from "../Components/controls/UserMenu";
import MainMenu from "../Components/controls/MainMenu";
import SplitText from "../Components/controls/SplitText";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

function Home() {
  return (
    <div className={styles.fondoHome}>
      {/* Header */}
      <header className={styles.Header}>
        <div className={styles.headerLeft}>
          <img src={LogoSEDEQ} alt="Logo SEDEQ" className={styles.logo} />
        </div>

        <div className={styles.headerCenter}>
          <SplitText
            text="MicroCredenciales"
            className="text-2xl text-center"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
        </div>

        <div className={styles.headerRight}>
          <MainMenu />
          <UserMenu />
        </div>
      </header>

      {/* Contenido Principal */}
      <main className={styles.contenidoHome}>
        <h2>hola</h2>
      </main>

      {/*CRUD */}
      <main className={styles.contenidoHomeCursos}>
        <div className={styles.FiltrosCursos}>
          <h3>Todo</h3>
          <h3>Cursos Gratuitos</h3>
          <h3>Por Escuela</h3>
          <h3>Tipo de Apoyo</h3>
          <h3>Fecha</h3>
        </div>
      </main>

      {/* Footer */}
      <footer className={styles.contenidoFooter}>
        <h2>Footer</h2>
      </footer>
    </div>
  );
}

export default Home;
