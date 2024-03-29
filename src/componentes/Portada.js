//import portada from './video/video-liviano.mp4';
import fotoPerfil from '../../public/img/fotoPerfil.jpg';
//import logoPoster from './img/logoPoster.png';
import logoColaboracion from '../../public/img/logoColaboracion.png';


const Portada = () => {

    

    return (
        <div className="d-flex justify-content-center row mb-5">

            {/* 
                <div>
                    <video src={portada} poster={logoPoster} alt="" loop autoPlay muted  className="col-md-12 col-sm-12  portada shadow-lg" />
                </div> 
            */}

            <div className="bg-verde d-flex superior justify-content-end p-2 animate__animated animate__fadeIn animate__delay-5s">
                <h6 className="text-white fw-bold mt-2 font-sm">¡Hacer una Colaboración!</h6>
                <a href="https://mpago.la/242gBtS" target="_blank" rel="noopener noreferrer" className=" d-flex justify-content-center text-white fw-bold  btn btn-sm ms-4 bg-verde border border-2 border-white rounded">
                    <img src="/img/logoColaboracion.png" alt="colaborar" className="logoColab me-2" />
                    <h6 className="mt-1 font-sm">YO COLABORO</h6>
                </a>
                <div className="me-3"></div>
            </div>


            <div className="d-flex justify-content-center">
                <img src="/img/fotoPerfil.jpg" alt="" className="foto-perfil ajuste-perfil shadow-lg efecto animate__animated animate__bounceInDown"/>
            </div>

            <div className="d-flex justify-content-center">
           
           

            <div className="mt-2 mb-5">
                <h2 className=" text-center fst-normal animate__animated animate__bounceInLeft">GABRIEL LAZZARINI</h2>
                <h4 className=" text-center fst-normal animate__animated animate__bounceInRight animate__delay-1s">Programador Full Stack</h4>
                <h4 className=" text-center fw-normal  animate__animated animate__fadeIn animate__delay-2s">Estudiante de Ingeniería en Informática</h4>
                <h5 className=" text-center fw-lighter animate__animated animate__fadeIn animate__delay-3s">Universidad Nacional del Litoral</h5>
            </div>

            
            
            </div>

        </div>
    )
}

export default Portada
