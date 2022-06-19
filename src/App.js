import  Container  from "./components/Styles/quantum-gradient.svg";
import Cabecera from "./components/Cabecera/Cabecera";
import Listado from "./components/Cuerpo/Listado";
import Footer from "./components/Footer/Footer";
import React, { useState } from "react";


// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.

function App() {
  const [valueCount, setValueCount] = useState(0);

  const handlerValueCount = () => {
    setValueCount((prevState) => prevState + 1);
  };
  return (
    <div
      style={{ backgroundImage: `url(${Container})`, backgroundSize: "2000px" }}>
      
      <Cabecera valueCount={valueCount} />
      <Listado handlerValueCount={handlerValueCount} />
      <Footer/>
      
    </div>
  );
}

export default App;
