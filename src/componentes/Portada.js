import fotoPerfil from '../../public/img/fotoPerfil.jpg';
import logoPoster from '../../public/img/logoPoster.png'; 
import logoColaboracion from '../../public/img/logoColaboracion.png';
import LogoUTN from '../../public/img/update/LogoUTN.png'; 

const Portada = () => {
    return (
        <div className="d-flex justify-content-center row mb-5" style={{ backgroundColor: 'var(--bg-dark-neomorph)', color: 'var(--text-light-gray)', paddingBottom: '5rem' }}>

           

          
            <div className="d-flex superior justify-content-end animate__animated animate__fadeIn animate__delay-5s" 
                 style={{ 
                     position: 'absolute', 
                     top: '20px', 
                     right: '20px', 
                     zIndex: 100 
                 }}>
                <a href="https://mpago.la/242gBtS" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="neomorph-donate-button font-sm"
                   style={{ alignItems: 'center' }} 
                >
                    <img src={logoColaboracion.src} alt="colaborar" className="logoColab me-2" />
                    <span className="fw-bold" style={{ color: 'var(--bg-dark-neomorph)' }}>COLABORAR</span> 
                </a>
            </div>

            
            <div className="d-flex justify-content-center" style={{ marginTop: '7.3em', zIndex: 90 }}> 
                <img 
                    src={fotoPerfil.src} 
                    alt="Foto de Perfil de Gabriel" 
                    className="foto-perfil neomorph-profile-picture efecto" 
                />
                <img 
                    src={LogoUTN.src}
                    alt="Logo UTN" 
                    className="burbuja-flotante neomorph-floating-bubble animate__animated animate__bounceInDown" 
                />
            </div>

           
            <div className="d-flex justify-content-center">
                <div className="mt-2 mb-5 text-center">
                    <h3 className="text-center fst-normal animate__animated animate__bounceInLeft portada-text-highlight"> 
                        Gabriel (fungirak) Lazzarini
                    </h3>
                    <h5 className="text-center fst-normal animate__animated animate__bounceInRight animate__delay-1s portada-text-normal"> 
                        Desarrollador de Software Full Stack
                    </h5>
                    <h5 className="text-center fw-normal animate__animated animate__fadeIn animate__delay-2s portada-text-normal"> 
                        Tecnicatura en Tecnologías de la Información
                    </h5>
                    <h6 className="text-center fw-lighter animate__animated animate__fadeIn animate__delay-3s portada-text-normal">
                        UTN FRSF
                    </h6>
                </div>
            </div>
        </div>
    );
};

export default Portada;