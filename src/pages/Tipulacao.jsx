import BarraMenu from "../components/BarraMenu";
import Crow from "../components/Crow";
import Footer from "../components/Footer";
import Underline from "../components/Undeline";

export default function Tripulacao() {
  return (
    <>
      <section className="tripulacao vh-100">
        <div className="container-xxl">
          <BarraMenu corC={Underline.fundo} linhaC={Underline.bordar} />
         
          <Crow />
    
        <Footer/>
        </div>
      </section>
    </>
  );
}
