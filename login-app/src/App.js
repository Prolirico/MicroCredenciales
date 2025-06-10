import React, { useState } from 'react';
import './App.css';

function App() {
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Usuario:', usuario);
    console.log('Contraseña:', contraseña);
    // Aquí puedes agregar la lógica de autenticación
  };

  return (
    <div className="App">
      <div className="login-container">
        <h1 className="login-title">Login</h1>
        <div className="login-box">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="usuario">Usuario</label>
              <input
                type="text"
                id="usuario"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                placeholder="Ingresa tu usuario"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="contraseña">Contraseña</label>
              <input
                type="password"
                id="contraseña"
                value={contraseña}
                onChange={(e) => setContraseña(e.target.value)}
                placeholder="Ingresa tu contraseña"
                required
              />
            </div>
            <button type="submit" className="login-button">
              Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;