import logoAgenda from '../../public/img/logoAgenda.jpeg'
import logoSocio from '../../public/img/logoSocio.jpeg'
import logoAtajos from '../../public/img/atajos.png'
import logoInvitados from '../../public/img/invitados.png'
import logoGithub from '../../public/img/logoGithub.svg';
import logoFlecha from '../../public/img/logoFlecha.png';
import logoSms from '../../public/img/logoSms.jpg';
import logoAerolineas from '../../public/img/logoAerolineas.jpg';
import logoFungirakWebsite from '../../public/img/logoFungirakWebsite.png';
import logoArgProg from '../../public/img/logoArgProg.png';

import Comentarios from './Comentarios';
import Banda from './helpers/Banda';

const DescripcionPortafolio = () => {
    return (
        <>
    
        <div className="container-fluid">
            <h1 className="text-center fw-normal mt-3 p-2 shadow-lg rounded-pill">Portafolio</h1>
            <div className="row   mt-5 d-flex justify-content-center col-12">

            <div className="col-md-4  shadow rounded">
                    <div className="col-sm-10 col-md-12 text-center card-body">
                        <h4 className="text-center  bg-dark p-1 rounded-pill text-white shadow fw-normal mb-2">PROYECTO FINAL ARGENTINA PROGRAMA "MI PORTAFOLIO"</h4>
                        <h5 className="text-center   text-dark  fw-normal mb-3">• FULLSTACK • JAVA & ANGULAR •</h5>
                            <img src="/img/logoArgProg.png" alt="avion" className="app-arg-prog shadow-lg rounded efecto" />

                        <div className="text-center">
                                <a href="https://proyecto-arg-prog-frontend.web.app" target="_blank" rel="noopener noreferrer">
                                    <button className="btn btn-sm btn-primary p-2 m-3 ">
                                        <img src="/img/logoFlecha.png" alt="..." className="logo-xsm" />
                                        <span className="fw-bold">ABRIR</span>
                                    </button>
                                </a>

                                <a href="https://github.com/fungirak" target="_blank" rel="noopener noreferrer">
                                <button className="btn btn-sm btn-dark p-2 m-3">
                                    <img src="/img/logoGithub.png" alt="..." className="logo-xsm" />
                                    <span className="fw-bold">CÓDIGO</span>
                                </button>
                                </a>
                        </div>
                    </div>
                </div>


            <div className="col-md-4  shadow rounded">
                    <div className="col-sm-10 col-md-12 text-center card-body">
                        <h4 className="text-center  bg-dark p-1 rounded-pill text-white shadow fw-normal mb-2">PASAJEROS AEROLINEAS </h4>
                        <h5 className="text-center   text-dark  fw-normal mb-3">• FRONTEND • ANGULAR •</h5>
                            <img src="/img/logoAerolineas.png" alt="avion" className="app shadow-lg rounded efecto" />

                        <div className="text-center">
                                <a href="https://www.fungirak.com/pasajeros-aerolineas-angular/" target="_blank" rel="noopener noreferrer">
                                    <button className="btn btn-sm btn-primary p-2 m-3 ">
                                        <img src="/img/logoFlecha.png" alt="..." className="logo-xsm" />
                                        <span className="fw-bold">ABRIR</span>
                                    </button>
                                </a>

                                <a href="https://github.com/fungirak/pasajeros-aerolineas-angular" target="_blank" rel="noopener noreferrer">
                                <button className="btn btn-sm btn-dark p-2 m-3">
                                    <img src="/img/logoGithub.png" alt="..." className="logo-xsm" />
                                    <span className="fw-bold">CÓDIGO</span>
                                </button>
                                </a>
                        </div>
                    </div>
                </div>

            <div className="col-md-4  shadow rounded">
                    <div className="col-sm-10 col-md-12 text-center card-body">
                        <h4 className="text-center  bg-dark p-1 rounded-pill text-white shadow fw-normal mb-2">SMS APP</h4>
                        <h5 className="text-center   text-dark  fw-normal mb-3">• FULL STACK • MERN •</h5>
                            <img src={logoSms} alt="" className="app shadow-lg rounded efecto " />

                        <div className="text-center">
                                <a href="https://www.fungirak.com/sms-app-react/" target="_blank" rel="noopener noreferrer">
                                    <button className="btn btn-sm btn-primary p-2 m-3 ">
                                        <img src="/img/logoFlecha.png" alt="..." className="logo-xsm" />
                                        <span className="fw-bold">ABRIR</span>
                                    </button>
                                </a>

                                <a href="https://github.com/fungirak/sms-app-react" target="_blank" rel="noopener noreferrer">
                                <button className="btn btn-sm btn-dark p-2 m-3">
                                    <img src="/img/logoGithub.png" alt="..." className="logo-xsm" />
                                    <span className="fw-bold">CÓDIGO</span>
                                </button>
                                </a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4  shadow rounded ">
                    <div className="col-sm-10 col-md-12 text-center card-body">
                        <h4 className="text-center  bg-dark p-1 rounded-pill text-white shadow fw-normal mb-2">FUNGIRAK WEBSITE (This)</h4>
                        <h5 className="text-center  text-dark  fw-normal mb-3">• FULLSTACK • MERN •</h5>
                            <img src={logoFungirakWebsite} alt="" className="app shadow-lg rounded efecto  " />

                        <div className="text-center">
                               
                                    <span className="btn btn-sm  green accent-4  p-2 m-3 ">
                                        <img src="/img/logoFlecha.png" alt="..." className="logo-xsm" />
                                        <span className="fw-bold text-light">EN VIVO</span>
                                    </span>
                               

                                <a href="https://github.com/fungirak/new-fungirak-website-2022" target="_blank" rel="noopener noreferrer">
                                    <button className="btn btn-sm btn-dark p-2 m-3">
                                        <img src="/img/logoGithub.png" alt="..." className="logo-xsm" />
                                        <span className="fw-bold">CÓDIGO</span>
                                    </button>
                                </a>
                        </div>
                    </div>
                </div>



                <div className="col-md-4  shadow rounded ">
                    <div className="col-sm-10 col-md-12 text-center card-body">
                        <h4 className="text-center  bg-dark p-1 rounded-pill text-white shadow fw-normal mb-2">GESTIÓN DE INVITADOS</h4>
                        <h5 className="text-center  text-dark  fw-normal mb-3">• FULLSTACK • MERN •</h5>
                            <img src={logoInvitados} alt="" className="app shadow-lg rounded efecto  " />

                        <div className="text-center">
                                <a href="https://fungirak.github.io/invitados-al-evento/" target="_blank" rel="noopener noreferrer">
                                    <button className="btn btn-sm btn-primary p-2 m-3 ">
                                        <img src="/img/logoFlecha.png" alt="..." className="logo-xsm" />
                                        <span className="fw-bold">ABRIR</span>
                                    </button>
                                </a>

                                <a href="https://github.com/fungirak/invitados-al-evento" target="_blank" rel="noopener noreferrer">
                                    <button className="btn btn-sm btn-dark p-2 m-3">
                                        <img src="/img/logoGithub.png" alt="..." className="logo-xsm" />
                                        <span className="fw-bold">CÓDIGO</span>
                                    </button>
                                </a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4  shadow rounded">
                    <div className="col-sm-10 col-md-12 text-center card-body">
                        <h4 className="text-center  bg-dark p-1 rounded-pill text-white shadow fw-normal mb-2">AGENDA DE COMPRAS</h4>
                        <h5 className="text-center   text-dark  fw-normal mb-3">• FRONTEND • REACT •</h5>
                            <img src={logoAgenda} alt="" className="app shadow-lg rounded efecto " />

                        <div className="text-center">
                                <a href="https://fungirak.github.io/Lista-De-Compras-conREACT/" target="_blank" rel="noopener noreferrer">
                                    <button className="btn btn-sm btn-primary p-2 m-3 ">
                                        <img src="/img/logoFlecha.png" alt="..." className="logo-xsm" />
                                        <span className="fw-bold">ABRIR</span>
                                    </button>
                                </a>

                                <a href="https://github.com/fungirak/Lista-De-Compras-conREACT" target="_blank" rel="noopener noreferrer">
                                <button className="btn btn-sm btn-dark p-2 m-3">
                                    <img src="/img/logoGithub.png" alt="..." className="logo-xsm" />
                                    <span className="fw-bold">CÓDIGO</span>
                                </button>
                                </a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4  shadow rounded ">
                    <div className="col-sm-10 col-md-12 text-center card-body ">
                        <h4 className="text-center bg-dark p-1 rounded-pill text-white shadow fw-normal mb-2">HACETE SOCIO</h4>
                        <h5 className="text-center  text-dark fw-normal mb-3">• FRONTEND • REACT •</h5>
                      
                            <img src={logoSocio} alt="" className="app shadow-lg rounded efecto  " />
              

                        <div className="text-center">
                            <a href="https://fungirak.github.io/Hacete-Socio-COLON-UNION-ReactJS/" target="_blank" rel="noopener noreferrer">
                                <button className="btn btn-sm btn-primary p-2 m-3 ">
                                    <img src="/img/logoFlecha.png" alt="..." className="logo-xsm" />
                                    <span className="fw-bold">ABRIR</span>
                                </button>
                            </a>

                            <a href="https://github.com/fungirak/Hacete-Socio-COLON-UNION-ReactJS" target="_blank" rel="noopener noreferrer">
                                <button className="btn btn-sm btn-dark p-2 m-3">
                                    <img src="/img/logoGithub.png" alt="..." className="logo-xsm" />
                                    <span className="fw-bold">CÓDIGO</span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4  shadow rounded">
                    <div className="col-sm-10 col-md-12 text-center card-body">
                        <h4 className="text-center  bg-dark p-1  rounded-pill text-white shadow fw-normal mb-2">PANEL DEL ESTUDIANTE</h4>
                        <h5 className="text-center  text-dark  fw-normal mb-3">• FRONTEND • HTML •</h5>
                        
                            <img src={logoAtajos} alt="" className="app shadow-lg rounded  efecto" />
                        
                        <div className="text-center ">
                            <a href="https://fungirak.github.io/losAtajosDeFungi/" target="_blank" rel="noopener noreferrer">
                                <button className="btn btn-sm btn-primary p-2 m-3 ">
                                    <img src="/img/logoFlecha.png" alt="..." className="logo-xsm" />
                                    <span className="fw-bold">ABRIR</span>
                                </button>
                            </a>

                            <a href="https://github.com/fungirak/losAtajosDeFungi" target="_blank" rel="noopener noreferrer">
                                <button className="btn btn-sm btn-dark p-2 m-3">
                                    <img src="/img/logoGithub.png" alt="..." className="logo-xsm" />
                                    <span className="fw-bold">CÓDIGO</span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            

            <Comentarios />
            
            <div className="espacio"></div>

            
            <Banda seccion={'PORTAFOLIO'} color={'deep-purple accent-4 text-white'} />

        </div>

        

    </>  
    )
}

export default DescripcionPortafolio
