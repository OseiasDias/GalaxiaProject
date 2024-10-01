import logo from "../assets/shared/logo.svg";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoHome } from "react-icons/io5";
import { BsPinMapFill } from "react-icons/bs";
import { FaArrowsDownToPeople } from "react-icons/fa6";
import { GrTechnology } from "react-icons/gr";
import { Link } from "react-router-dom";

function BarraMenu({ corA, corB, corC, corD, linhaA, linhaB, linhaC, linhaD }) {
  return (
    <nav className="navbar navbar-expand-lg pt-3 navbar-light menuPrincipal">
      <div className="container-xxl ">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="logotipo" className="" width={40} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <HiOutlineMenuAlt3 className="meuIconeMenu" />
        </button>

        <div className="collapse   navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto bg-listaMenu 3">
            <Link
              className="nav-link  text-white "
              aria-current="page"
              to="/"
              style={{
                backgroundColor: corA,

                borderBottom: linhaA,
              }}
            >
              <IoHome className="iconesMenu" /> &nbsp; Inicio
            </Link>
            <Link
              className="nav-link  text-white"
              to="/destino"
              style={{ backgroundColor: corB, borderBottom: linhaB }}
            >
              <BsPinMapFill className="iconesMenu" /> &nbsp; Destino
            </Link>
            <Link
              className="nav-link  text-white"
              to="/tripulacao"
              style={{ backgroundColor: corC , borderBottom: linhaC}}
            >
              <FaArrowsDownToPeople className="iconesMenu" />
              &nbsp; Tipulação
            </Link>
            <Link
              className="nav-link  text-white"
              to="/tecnologia"
              style={{ backgroundColor: corD , borderBottom: linhaD}}
            >
              <GrTechnology className="iconesMenu" /> &nbsp; Tecnológia
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default BarraMenu;
