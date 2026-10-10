
import { Link } from "react-router-dom";
import "../estilos/MenuNavegacion.css";

function MenuNavegacion() {
  return (
    <nav className="menu-navegacion">
      <h2>Menú de Navegación</h2>

      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>

        <li>
          <Link to="/about">Acerca de</Link>
        </li>

        <li>
          <Link to="/login">Iniciar sesión</Link>
        </li>

        <li>
          <Link to="/admin/dashboard">Panel de administración</Link>
        </li>

        <li>
          <Link to="/animaciones">Animaciones</Link>
        </li>
      </ul>
    </nav>
  );
}

export default MenuNavegacion;
