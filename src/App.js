import { useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";

function App() {
  const [estado, setEstado] = useState('')
  return (
    <div className="App">
      <h1>Desafío Estado de los componentes y eventos</h1>
      <Input estado={estado} setEstado={setEstado}  />
      {estado === "252525" && <Button/>}              {/* Las "{}" me permite evaluar esta expresion javascript,cuando haces un && en react, que es una condicional, lo primero que debes poner es la condicion que se debe cumplir y luego lo que retorna es la segunda parte del &&, en este caso, el button */}
    </div>
  );
}

export default App;
