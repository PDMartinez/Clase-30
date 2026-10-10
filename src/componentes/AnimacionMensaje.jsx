
import { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import "../estilos/Animacion.css";

function AnimacionMensaje() {
  const [mostrar, setMostrar] = useState(false);
  const nodeRef = useRef(null);

  return (
    <div>

      <h2>Animaciones en React</h2>

      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? "Ocultar" : "Mostrar"} mensaje
      </button>

      <CSSTransition
        nodeRef={nodeRef}
        in={mostrar}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <div ref={nodeRef} className="mensaje">
          ¡Este es un mensaje animado!
        </div>
      </CSSTransition>
      
    </div>
  );
}

export default AnimacionMensaje;
