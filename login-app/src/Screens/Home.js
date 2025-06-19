import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import LogoSEDEQ from "../Assets/Secretaria-de-educacion-Queretaro.png";
import logoBlancoCeatYCC from "../Assets/logoBlancoCeatYCC.png";
import UserMenu from "../Components/controls/UserMenu";
import MainMenu from "../Components/controls/MainMenu";
import SplitText from "../Components/controls/SplitText";
import Card from "../Components/controls/Card";
//Dashboards
import StudentDashboard from "../Components/dashboards/StudentDashboard";
import TeacherDashboard from "../Components/dashboards/TeacherDashboard";
import UniversityDashboard from "../Components/dashboards/UniversityDashboard";
import SEDEQDashboard from "../Components/dashboards/SEDEQDashboard";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user from localStorage (replace with context or API call later)
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  const renderDashboard = () => {
    if (!user) {
      return (
        <main className={styles.main}>
          <Card
            title="Bienvenido"
            description="Ingresa a tu cuenta para desbloquear todas las oportunidades que tenemos para ti."
            bottomText="Google Services"
            logoConfig={{
              type: "image", // ← Usa imagen personalizada
              imageSrc: logoBlancoCeatYCC,
              alt: "White CeatYCC Logo",
              width: 200,
              height: 200,
            }}
          />
        </main>
      );
    }

    switch (user.role) {
      case "ALUMNO":
        return <StudentDashboard userId={user.id} />;
      case "MAESTRO":
        return <TeacherDashboard userId={user.id} />;
      case "UNIVERSIDAD":
        return <UniversityDashboard userId={user.id} />;
      case "SEDEQ":
        return <SEDEQDashboard userId={user.id} />;
      default:
        return <p>Invalid user role.</p>;
    }
  };

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
          <MainMenu isAuthenticated={!!user} />
          <UserMenu
            user={user}
            onLogout={() => {
              localStorage.removeItem("user");
              setUser(null);
            }}
          />
        </div>
      </header>

      {/* Contenido Principal */}
      <main className={styles.contenidoHome}>{renderDashboard()}</main>
      <main className={styles.contenidoHome}>
        {/* Ejemplo con logo de Google */}
        <p>Bienvenido</p>
      </main>

      {/*CRUD */}
      <main className={styles.contenidoHome}>
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
