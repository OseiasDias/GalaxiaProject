import { Link } from "react-router-dom";

export default function BodyHome() {
  return (
    <>
      <div className="container bodyHome ">
        <div className="row justify-content-between">
          <div className="col-12 col-md-12 col-lg-5 mt-5">
            <span >Então você quer viajar para o</span>
            <h2>Espaço</h2>
            <p>
              vamos encarar: se você quer ir para o espaço, você pode muito bem
              ir genuinamente para o espaço sideral e não ficar pairando na
              borda dele. bem, sente-se e relaxe porque nós lhe daremos uma
              experiência verdadeiramente de outro mundo.
            </p>
          </div>
          <div className="col-12 col-md-12 col-lg-5">
              
              <Link to="/destino"><button className="btn-Explorar">Explorar</button></Link>
          </div>
        </div>
      </div>
    </>
  );
}
