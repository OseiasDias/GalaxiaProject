import BarraMenu from "../components/BarraMenu";
import Footer from "../components/Footer";
import Underline from "../components/Undeline";

import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

import foget1 from "../assets/technology/image-launch-vehicle-portrait.jpg";
import foget2 from "../assets/technology/image-space-capsule-portrait.jpg"
import foget3 from "../assets/technology/image-spaceport-portrait.jpg"

function TabTecnologia() {
  return (
    <div className="tecnoL mb-5">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column mt-4 pilhasNew">
              <Nav.Item>
                <Nav.Link eventKey="first">1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">2</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="terceiro">3</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <div className="row justify-content-between delimitar text-white mb-5">
                  <div className="col-12 col-md-12 col-lg-7 bb-p">
                    <span>A terminologia</span>
                    <h1>Lançamento de um foguete</h1>
                    <p>
                      O lançamento de um foguete é um evento emocionante que
                      marca um avanço significativo na exploração espacial.
                      Recentemente, a empresa fictícia NAZA (National
                      Aeronautics and Space Administration) realizou com sucesso
                      o lançamento do foguete Orion-1, projetado para levar
                      cargas científicas e equipamentos para a órbita terrestre
                      baixa. O foguete, equipado com tecnologia de ponta,
                      decolou do Centro Espacial de Cabo Canaveral,
                      proporcionando uma vista espetacular enquanto subia em
                      direção ao céu.
                    </p>
                  </div>
                  <div className="col-12 col-md-12 col-lg-5 bb-p">
                    <img src={foget1} alt="..." className="w-100" />
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                      
              <div className="row justify-content-between delimitar  text-white mb-5">
                  <div className="col-12 col-md-12 col-lg-7 bb-p">
                    <span>A terminologia</span>
                    <h1>A nossa nave especial</h1>
                    <p>
                      O lançamento de um foguete é um evento emocionante que
                      marca um avanço significativo na exploração espacial.
                      Recentemente, a empresa fictícia NAZA (National
                      Aeronautics and Space Administration) realizou com sucesso
                      o lançamento do foguete Orion-1, projetado para levar
                      cargas científicas e equipamentos para a órbita terrestre
                      baixa. O foguete, equipado com tecnologia de ponta,
                      decolou do Centro Espacial de Cabo Canaveral,
                      proporcionando uma vista espetacular enquanto subia em
                      direção ao céu.
                    </p>
                  </div>
                  <div className="col-12 col-md-12 col-lg-5 bb-p">
                    <img src={foget2} alt="..." className="w-100" />
                  </div>
                </div>

              </Tab.Pane>
              <Tab.Pane eventKey="terceiro">
              <div className="row justify-content-between delimitar text-white mb-5">
                  <div className="col-12 col-md-12 col-lg-7 bb-p">
                    <span>A terminologia</span>
                    <h1>O ponto de partida</h1>
                    <p>
                      O lançamento de um foguete é um evento emocionante que
                      marca um avanço significativo na exploração espacial.
                      Recentemente, a empresa fictícia NAZA (National
                      Aeronautics and Space Administration) realizou com sucesso
                      o lançamento do foguete Orion-1, projetado para levar
                      cargas científicas e equipamentos para a órbita terrestre
                      baixa. O foguete, equipado com tecnologia de ponta,
                      decolou do Centro Espacial de Cabo Canaveral,
                      proporcionando uma vista espetacular enquanto subia em
                      direção ao céu.
                    </p>
                  </div>
                  <div className="col-12 col-md-12 col-lg-5 bb-p">
                    <img src={foget3} alt="..." className="w-100" />
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default function Tecnologia() {
  return (
    <>
      <section className="tecnologia vh-100">
        <div className="container-xxl">
          <BarraMenu corD={Underline.fundo} linhaD={Underline.bordar} />

          <TabTecnologia />
          <Footer />
        </div>
      </section>
    </>
  );
}
