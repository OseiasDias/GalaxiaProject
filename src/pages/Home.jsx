import BarraMenu from "../components/BarraMenu.jsx";
import BodyHome from "../components/BodyHome.jsx";
import Underline from "../components/Undeline.jsx";

export default function Home() {
  return (
    <section className="bg-inicio vh-100">
      <div className="container-xxl">
        <BarraMenu corA={Underline.fundo} linhaA={Underline.bordar} />
        <BodyHome />
      </div>
    </section>
  );
}
