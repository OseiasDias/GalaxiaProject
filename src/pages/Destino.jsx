import { useState } from "react";
import BarraMenu from "../components/BarraMenu";
import Underline from "../components/Undeline";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import fotoMar from "../assets/destination/image-mars.png";
import fotoLua from "../assets/destination/image-moon.png";
import fotoEuropa from "../assets/destination/image-europa.png";
import fotoTitan from "../assets/destination/image-titan.png";
import { BsPinMapFill } from "react-icons/bs";
import Footer from "../components/Footer";

const imagens = {
  lua: fotoLua,
  marte: fotoMar,
  europa: fotoEuropa,
  titan: fotoTitan,
};

export function MinhaTab() {
  const [activeKey, setActiveKey] = useState("lua");

  return (
    <div className="seccao-tab mt-5">
      <div className="row mt-5 justify-content-center">
        <div className="col-12 col-lg-5 col-md-4">
         
          {/* Renderização condicional simplificada */}
          <img
            src={imagens[activeKey]}
            alt={`Imagem de ${
              activeKey.charAt(0).toUpperCase() + activeKey.slice(1)
            }`}
            className="w-75 mx-auto d-block mt-5 minhaImgs"
          />
        </div>
        <div className="col-12 col-lg-5  col-md-8">
          <Tabs
            id="justify-tab-example"
            activeKey={activeKey}
            onSelect={(k) => setActiveKey(k)}
            className="mb-3 tabelaBorda mt-5"
            justify
          >
            <Tab eventKey="lua" title="Lua" className="tabsUnicas">
              <h1 className="textoCima my-4">Lua</h1>
              <p className="text-justify">
                A Lua é o único satélite natural da Terra e é conhecida por sua
                influência nas marés e seu papel na estabilização do clima do
                planeta. Com uma superfície repleta de crateras e mares, a Lua
                continua a fascinar cientistas e entusiastas do espaço.
              </p>
              <hr />
              <p className="justify-content-between d-flex text-white">
                <span><b>Distância</b><h3>150 mil km</h3></span>
                <span><b>Estimativa de Tempo</b><h3>9 meses</h3></span>
                </p>
            </Tab>
            <Tab eventKey="marte" title="Marte"  className="tabsUnicas">
              <h1 className="textoCima my-4">Marte</h1>
              <p className="text-justify">
                Marte, conhecido como o Planeta Vermelho, é o quarto planeta do
                Sistema Solar e possui uma atmosfera fina composta
                principalmente de dióxido de carbono. Com suas características
                geológicas únicas, como montanhas, vales e crateras...
              </p>
              <hr />
              <p className="justify-content-between d-flex text-white">
                <span><b>Distância</b><h3>227 mil km</h3></span>
                <span><b>Estimativa de Tempo</b><h3>1 ano e 3 meses</h3></span>
                </p>
            </Tab>
            <Tab eventKey="europa" title="Europa"  className="tabsUnicas">
              <h1 className="textoCima my-4">Europa</h1>
              <p className="text-justify">
                Europa, uma das luas de Júpiter, é um dos locais mais
                promissores na busca por vida extraterrestre, devido à sua
                superfície de gelo que pode encobrir um vasto oceano de água
                líquida abaixo. Com um ambiente potencialmente habitável...
              </p>
              <hr />
              <p className="justify-content-between d-flex text-white">
                <span><b>Distância</b><h3>210 mil km</h3></span>
                <span><b>Estimativa de Tempo</b><h3>11 meses</h3></span>
                </p>
            </Tab>
            <Tab eventKey="titan" title="Titan"  className="tabsUnicas">
              <h1 className="textoCima my-4">Titan</h1>
              <p className="text-justify">
                Titã, a maior lua de Saturno, é fascinante por sua densa
                atmosfera rica em nitrogênio e pela presença de lagos e rios de
                metano líquido em sua superfície. Com características
                semelhantes às da Terra.
              </p>
              <hr />
              <p className="justify-content-between d-flex text-white">
                <span><b>Distância</b><h3>315 mil km</h3></span>
                <span><b>Estimativa de Tempo</b><h3>1ano e 7 meses</h3></span>
                </p>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default function Destino() {
  return (
    <section className="destino vh-100">
      <div className="container-xxl">
        <BarraMenu corB={Underline.fundo} linhaB={Underline.bordar} />

        <MinhaTab />
    
        <Footer/>
      </div>
    </section>
  );
}
