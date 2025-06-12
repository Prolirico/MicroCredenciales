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
</form>;
