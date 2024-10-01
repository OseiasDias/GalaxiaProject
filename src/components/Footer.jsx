import { Link } from "react-router-dom";
import { LiaMapMarkedAltSolid } from "react-icons/lia";
import { MdPhoneCallback } from "react-icons/md";
import { BsEnvelopeAtFill } from "react-icons/bs";
import { IoHome } from "react-icons/io5";
import { BsPinMapFill } from "react-icons/bs";
import { FaArrowsDownToPeople, FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";
import { GrTechnology } from "react-icons/gr";

export default function Footer() {
  return (
    <>
      <footer className="h-25 text-white footerP">
       
          <div className="row ">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="logoY">
              <h3>Endereço</h3>
                <p className="my-2">
                  inspirando as novas gerações a sonhar grande e a contribuir
                  para o futuro da humanidade no cosmos
                </p>
                <p className="morada">
                  <LiaMapMarkedAltSolid className="iconeMorada" />{" "}
                  Luanda-Viana,Condomino Vida Pacifica 034
                </p>
                <p className="morada">
                  <MdPhoneCallback className="iconeMorada" /> +244 928 442 424
                </p>
                <p className="morada">
                  <BsEnvelopeAtFill className="iconeMorada" />{" "}
                  empresnad3133@gmail.com
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="logoY segNewQuandro">
                <h3>Links Principais</h3>
                <Link to="/" className="linksP">
                  <IoHome />&nbsp;&nbsp;Home
                </Link>
                <Link to="/destino" className="linksP">
                <BsPinMapFill />&nbsp;&nbsp;Destino
                </Link>
                <Link to="/tripulação" className="linksP">
                <FaArrowsDownToPeople />&nbsp;Tripulação
                </Link>
                <Link to="/tecnologia" className="linksP">
                <GrTechnology />&nbsp;Tecnólogia
                </Link>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="logoY newQuadro">
                <h3>Informar</h3>

                <p className="my-2 ppParagrafo">
                  <FaFacebook  className="Icones-Socias"/> Facebook
                </p>
                <p className="morada ppParagrafo">
                  <FaInstagram  className="Icones-Socias"/> Instagram
                </p>
                <p className="morada ppParagrafo">
                  <FaYoutube className="Icones-Socias"/> Youtube
                </p>
                <p className="morada ppParagrafo">
                  <FaTiktok className="Icones-Socias"/> Tik-Tok
                </p>
              </div>
            </div>
          </div>
      </footer>
      <p className="text-center text-white">© 2024. All Rights Reserved. Design by <strong>Oseias Dias</strong></p>

    </>
  );
}
