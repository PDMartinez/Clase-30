
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import PublicLayout from "../componentes/PublicLayout";
import AdminLayout from "../componentes/AdminLayout";

import HomePage from "../componentes/HomePage";
import AboutPage from "../componentes/AboutPage";
import AdminDashboard from "../componentes/AdminDashboard";

import LoginPage from "../componentes/LoginPage";
import AnimacionMensaje from "../componentes/AnimacionMensaje";

import MenuNavegacion from "../componentes/MenuNavegacion";

function App() {
  return (
    <Router> {/* envuelve las rutas y permite que React Router gestione la navegación */}
      {/* Menú disponible en todas las rutas */}
      <MenuNavegacion />
      <Switch>
        
        {/* Rutas públicas */}
        <Route exact path="/">
          <PublicLayout>
            <HomePage />
          </PublicLayout>
        </Route>

        <Route path="/about">
          <PublicLayout>
            <AboutPage />
          </PublicLayout>
        </Route>

        <Route path="/animaciones">
          <AnimacionMensaje />
        </Route>

        <Route exact path="/login">
          <LoginPage />
        </Route>

        {/* Rutas de administración */}
        <Route path="/admin">
          <AdminLayout>
            <Switch>
              <Route exact path="/admin/dashboard">
                <AdminDashboard />
              </Route>

              {/* Otras rutas de administración */}
            </Switch>
          </AdminLayout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
