import React from "react";
import { Div, Nombre } from "../Styles/FooterStyles";

//import Data from "../data.json";

// El componente Cabera no tiene componentes hijos.
// ESTADO: Cabecera no tiene estado.
// MÉTODOS: Cabecera no tiene métodos.
// PROPS: Cabecera recibe de su padre la cantidad que va a mostrar dentro del span correpondiente
// Maqueta de Cabecera:
//    h1
//    p > span     (el span mostrará la cantidad recibida por props)

export default function Footer() {
  return (
    <Div className="Nombre">
      <Nombre>Deisy Garzón León - Frontend III - 2022</Nombre>
 
    </Div>
  );
}
