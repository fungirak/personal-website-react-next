import fungi1 from '../../public/img/fungi1.jpg';
import fungi2 from '../../public/img/fungi2.jpg';
import logoContacto from '../../public/img/logoContacto.png';
import Banda from './helpers/Banda';
import IconPerfil from './helpers/IconPerfil';
import logoPoliticas from '../../public/img/logoPoliticas.png';

const posicionar = () => {
    window.scroll(0, 510);
  }

const DescripcionPersona = () => {
    return (
        <div className="container mb-5">
            <h1 className="text-center fw-normal mt-3 p-2 shadow-lg rounded-pill">Acerca de</h1>

            <div className="d-flex justify-content-center shadow rounded  mt-5">
                <div className="row d-flex justify-content-around m-3 efecto">
                    <div className="card col-md-4 m-3 col-sm-8 p-3 rounded border border-success shadow">
                        <div className="card-header d-flex justify-content-center bg-transparent border border-0">
                            <img src="/img/fungi1.jpg" alt="" className="fungi shadow-lg border border-3 border-white efecto" />
                        </div>
                        <div className="card-body">
                            <p className="text-muted">
                                Hola! Hago desarrollo de software full-stack de manera autodidacta y curso mis estudios superiores en la ciudad de Santa Fe (Arg.)  <br></br>
                                Poseo 2 años de experiencia laboral en el área <br />
                                Actualmente me dedico a mejorar continuamente mis habilidades como desarrollador investigando-estudiando-practicando diversas tecnologías de frontend, backend y bases de datos como:  Java, JavaScript, React js, Next js, Angular, MySQL, MongoDB. 
                            </p>
                        </div>
                    </div>

                    <div className="card  col-md-4 m-3  col-sm-8  p-3 rounded border border-danger shadow">
                        <div className="card-header d-flex justify-content-center bg-transparent border border-0">
                            <img src="/img/fungi2.jpg" alt="" className="fungi  shadow-lg border border-3 border-white efecto " />
                        </div>
                        <div className="card-body">
                            <p className="text-muted">
                                Este es mi perfil de  Github en donde publico los códigos fuente de mis proyectos personales. 
                               <a href="https://github.com/fungirak" target="_blank" rel="noopener noreferrer" className="border border-dark  rounded fw-bold text-dark">
                                   Ver Perfil de Github   
                                </a><br /><br/>
                                Si te gusta mi perfil y te interesa contactarme, envíame un mensaje para estar en contacto en mi   
                                <a href="https://ar.linkedin.com/in/gabriel-lazzarini" target="_blank" rel="noopener noreferrer" className=" border border-primary  rounded fw-bold "> Cuenta de Linkedin </a>
                                ó en la sección de <b>chat</b>
                                <div className="mt-3 d-flex justify-content-center">
                                    <img src="/img/logoContacto.png" alt="..." className="icon-pres efecto" />
                                </div>
                               
                            </p>
                        </div>
                    </div>


                </div>
            </div>

            <div className="espacio"></div>

            <div className="d-flex justify-content-center">
                <p className="mt-4 text-sm text-muted">Ver política de privacidad del sitio</p>
                <IconPerfil pos={posicionar} logo="/img/logoPoliticas.png" ruta={'/politicas'} />
            </div>

            <Banda seccion={'PERFIL'} color={'bg-primary text-white'} />
            
            <div className="espacio"></div>

        </div>
    )
}

export default DescripcionPersona
