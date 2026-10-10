
import { useHistory } from "react-router-dom";

function LoginPage() {
  const history = useHistory();

  const handleLogin = () => {
    // Simulamos un inicio de sesión exitoso
    history.push("/admin/dashboard");
  };

  return (
    <div>
      <h1>Iniciar Sesión</h1>

      <button onClick={handleLogin}>
        Ingresar
      </button>
    </div>
  );
}

export default LoginPage;
