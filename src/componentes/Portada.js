//import portada from './video/video-liviano.mp4';
import fotoPerfil from '../../public/img/fotoPerfil.jpg';
import logoPoster from '../../public/img/logoPoster.png';
import logoColaboracion from '../../public/img/logoColaboracion.png';


const Portada = () => {

    

    return (
        <div className="d-flex justify-content-center row mb-5">

            
                <div>
                    <video src="/video/video-liviano.mp4" poster="/img/logoPoster"  alt="" loop autoPlay muted  className="col-md-12 col-sm-12  portada shadow-lg" />
                </div> 
            


            <div className=" d-flex superior justify-content-end  animate__animated animate__fadeIn animate__delay-5s">
                <h6 className="text-white fw-bold  font-sm"></h6>
                <a href="https://mpago.la/242gBtS" target="_blank" rel="noopener noreferrer" alt="Colaborar con el sitio" className=" mt-3 d-flex justify-content-center text-white fw-bold  btn btn-sm ms-4 bg-verde   rounded">
                    <img src="/img/logoColaboracion.png" alt="colaborar" className="logoColab me-2 " />
                    <h6 className="font-sm"></h6>
                </a>
                <div className="me-3"></div>
            </div>


            <div className="d-flex justify-content-center">
                <img src="/img/fotoPerfil.jpg" alt="" className="foto-perfil ajuste-perfil shadow-lg efecto"/>
                <img src="/img/update/LogoUTN.png" alt="" className="burbuja-flotante shadow efecto animate__animated animate__bounceInDown"/>
            </div>

            <div className="d-flex justify-content-center">
           
           

            <div className="mt-2 mb-5 text-center">
                <h3 className=" text-center fst-normal animate__animated animate__bounceInLeft ">GABRIEL LAZZARINI</h3>
                <h5 className=" text-center fst-normal animate__animated animate__bounceInRight animate__delay-1s">Desarrollador de Software</h5>
                <h5 className=" text-center fw-normal  animate__animated animate__fadeIn animate__delay-2s">Estudiante de Tecnicatura en Tecnologías de la Información</h5>
                <h6 className=" text-center fw-lighter animate__animated animate__fadeIn animate__delay-3s">Universidad Tecnológica Nacional</h6>
            </div>

            
            
            </div>

        </div>
    )
}

export default Portada
