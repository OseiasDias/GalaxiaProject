import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

import { Route,Routes,BrowserRouter } from "react-router-dom";
import Destino from "./pages/Destino";

import Home from "./pages/Home";
import Tripulacao from "./pages/Tipulacao";
import Tecnologia from "./pages/Tecnologia";



function App() {
  //const [count, setCount] = useState(0)


  return (
    <>
        
       <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} /> 
                <Route path="/destino" element={<Destino/>} /> 
                <Route path="/tripulacao" element={<Tripulacao/>} />
                <Route path="/tecnologia" element={<Tecnologia/>} />
            </Routes>
        </BrowserRouter>
         
      
     
    </>
  )
}

export default App
