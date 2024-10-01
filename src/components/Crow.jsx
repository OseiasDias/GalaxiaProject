import team1 from "../assets/crew/image-anousheh-ansari.png";
import team2 from "../assets/crew/image-douglas-hurley.png";
import team3 from "../assets/crew/image-mark-shuttleworth.png";
import team4 from "../assets/crew/image-victor-glover.png";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function TabCrow() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3 mt-5 pt-5"
      fill
    >
      <Tab
        eventKey="home"
        title={
          <>
            Victoria <span className="Ocultar">Dias</span>
          </>
        }
      >
        <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-4 tamanhoQuadro">
            <img src={team1} alt="..." className="w-100" />
          </div>

          <div className="col-12 col-md-8 col-lg-8">
          
            <p className="text-white fs-5 ultimoParagrafo">
            <span className="fs-1 text-white "> Victoria Dias &nbsp; </span>
              é uma astronauta brasileira, reconhecida por suas contribuições
              significativas à exploração espacial. Formada em Engenharia
              Aeronáutica, ela se destacou durante sua formação na NASA, onde
              participou de várias missões de treinamento e pesquisa. 
            </p>
            <p className="text-white fs-5 ultimoParagrafo">Victoria é
              uma defensora da educação em ciências e tecnologia, inspirando
              jovens a se interessarem pela exploração do espaço e pelas
              carreiras STEM. Com uma paixão por descobrir novos horizontes, ela
              continua a trabalhar em projetos que visam expandir o conhecimento
              humano sobre o universo.</p>
          </div>
        </div>
        </div>
      </Tab>
      <Tab
        eventKey="profile"
        title={
          <>
            Oseias <span className="Ocultar">Edgar</span>
          </>
        }
      >
       <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-4 tamanhoQuadro">
            <img src={team2} alt="..." className="w-100" />
          </div>

          <div className="col-12 col-md-8 col-lg-8">
          
            <p className="text-white fs-5 ultimoParagrafo">
            <span className="fs-1 text-white "> Oseias Dias &nbsp; </span>
              é uma astronauta brasileira, reconhecida por suas contribuições
              significativas à exploração espacial. Formada em Engenharia
              Aeronáutica, ela se destacou durante sua formação na NASA, onde
              participou de várias missões de treinamento e pesquisa. 
            </p>
            <p className="text-white fs-5 ultimoParagrafo">Victoria é
              uma defensora da educação em ciências e tecnologia, inspirando
              jovens a se interessarem pela exploração do espaço e pelas
              carreiras STEM. Com uma paixão por descobrir novos horizontes, ela
              continua a trabalhar em projetos que visam expandir o conhecimento
              humano sobre o universo.</p>
          </div>
        </div>
        </div>
      </Tab>
      <Tab
        eventKey="longer-tab"
        title={
          <>
            Pedro <span className="Ocultar">Antonio</span>
          </>
        }
      >
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-4 tamanhoQuadro">
            <img src={team3} alt="..." className="w-100" />
          </div>

          <div className="col-12 col-md-8 col-lg-8">
          
            <p className="text-white fs-5 ultimoParagrafo">
            <span className="fs-1 text-white "> Pedro Tito &nbsp; </span>
              é uma astronauta brasileira, reconhecida por suas contribuições
              significativas à exploração espacial. Formada em Engenharia
              Aeronáutica, ela se destacou durante sua formação na NASA, onde
              participou de várias missões de treinamento e pesquisa. 
            </p>
            <p className="text-white fs-5 ultimoParagrafo">Victoria é
              uma defensora da educação em ciências e tecnologia, inspirando
              jovens a se interessarem pela exploração do espaço e pelas
              carreiras STEM. Com uma paixão por descobrir novos horizontes, ela
              continua a trabalhar em projetos que visam expandir o conhecimento
              humano sobre o universo.</p>
          </div>
        </div>
        </div>
      </Tab>
      <Tab
        eventKey="contact"
        title={
          <>
            Elisandro <span className="Ocultar">Edmar</span>
          </>
        }
      >
        <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-4 tamanhoQuadro">
            <img src={team4} alt="..." className="w-100" />
          </div>

          <div className="col-12 col-md-8 col-lg-8">
          
            <p className="text-white fs-5 ultimoParagrafo">
            <span className="fs-1 text-white "> Elisando Edmar &nbsp; </span>
              é uma astronauta brasileira, reconhecida por suas contribuições
              significativas à exploração espacial. Formada em Engenharia
              Aeronáutica, ela se destacou durante sua formação na NASA, onde
              participou de várias missões de treinamento e pesquisa. 
            </p>
            <p className="text-white fs-5 ultimoParagrafo">Victoria é
              uma defensora da educação em ciências e tecnologia, inspirando
              jovens a se interessarem pela exploração do espaço e pelas
              carreiras STEM. Com uma paixão por descobrir novos horizontes, ela
              continua a trabalhar em projetos que visam expandir o conhecimento
              humano sobre o universo.</p>
          </div>
        </div>
        </div>
      </Tab>
    </Tabs>
  );
}

export default function Crow() {
  return (
    <>
      <div className="container">
        <TabCrow />
      </div>
    </>
  );
}
