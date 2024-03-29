import logoPersona from '../../public/img/logoPersona.png';
import logoSkills from '../../public/img/logoSkills.png';
import logoEstudios from '../../public/img/logoEstudios.png';
import logoPortafolio from '../../public/img/logoPortafolio.png';
import logoContacto from '../../public/img/logoContacto.png';
//import logoPoliticas from './img/logoPoliticas.png';

import DescripcionPersona from './DescripcionPersona';
import DescripcionSkills from './DescripcionSkills';
import DescripcionEstudios from './DescripcionEstudios';
import DescripcionPortafolio from './DescripcionPortafolio';
import Contacto from './Contacto';
import Politicas from './Politicas';
import Iconmenu from './helpers/Iconmenu';




import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
  
const posicionar = () => {
    window.scroll(0, 510);
  }


const Barra = () => {
   

  return <div className="">
            <Router>
                <div className="">
                    <ul className="border border-top border-2  presentacion d-flex justify-content-center  no-wrap fixed-bottom  bg-white shadow-lg mx-auto m-0 mb-3 mt-5">

                    <Iconmenu pos={posicionar} logo="/img/logoPersona.png" ruta={'/perfil'} />
                    <Iconmenu pos={posicionar} logo="/img/logoEstudios.png" ruta={'/estudios'} />
                    <Iconmenu pos={posicionar} logo="/img/logoSkills.png" ruta={'/skills'} />
                    <Iconmenu pos={posicionar} logo="/img/logoPortafolio.png" ruta={'/portafolio'} />
                    <Iconmenu pos={posicionar} logo="/img/logoContacto.png" ruta={'/contacto'} />
                    {/*<Iconmenu pos={posicionar} logo={logoPoliticas} ruta={'/politicas'} />*/}

                    </ul>

                    <Routes>
                        <Route exact path="/perfil" element={<DescripcionPersona banda={'PERFIL'}/>} />
                        <Route exact path="/estudios" element={<DescripcionEstudios banda={'ESTUDIOS'}/>} />
                        <Route exact path="/skills" element={<DescripcionSkills banda={'HABILIDADES'}/>} />
                        <Route exact path="/portafolio" element={<DescripcionPortafolio banda={'PORTAFOLIO'}/>} />
                        <Route exact path="/contacto" element={<Contacto banda={'CONTACTO'}/>} />
                        <Route exact path="/politicas" element={<Politicas banda={'POLITICA DE PRIVACIDAD'}/>} />
                    </Routes>
                    
                </div>
            </Router>

        </div>;
};

export default Barra;
