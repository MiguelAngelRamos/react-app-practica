import './Navbar.css'; // Crearemos este archivo ahora

export const Navbar = () => {
  return (
    <nav className="navbar" role="navigation">
      <div className="navbar-logo">
        <span className="logo-text">DevOps App</span>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Inicio</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  );
};
