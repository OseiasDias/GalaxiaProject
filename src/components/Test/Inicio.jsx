import "bootstrap/dist/css/bootstrap.css";
//import "bootstrap/dist/js/bootstrap.bundle";
import itens from "../../utils/Dados.js";
import { useState } from 'react';

function Mostrar() {

  const [estado,setEstado] = useState(0);

  function handleClick(){
     setEstado(estado+1) 
  }
  return (
    <>
      <div className="container">
        <div className="row">
          {itens.map((newArray) => (
            <>
              <div
                key={newArray.id}
                className="col-lg-4 col-md-4 col-12 bordarUnica"
              >
                <img src={newArray.img} alt="..." className="w-100" />

                <h4>Nome:{newArray.nome}</h4>
                <h4>Idade:{newArray.idade}</h4>
                <button onMouseOver={handleClick}>Me Aperte{estado}</button>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

function Ler() {
  return (
    <>
      <h1>Oseias Edgar Manuel Dias</h1>
    </>
  );
}

function Inicio() {
  //const [count, setCount] = useState(0)

  let isValor = true;

  return <>{isValor ? <Mostrar /> : <Ler />}</>;
}

export default Inicio;
