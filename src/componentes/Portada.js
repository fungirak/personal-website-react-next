import React from 'react';
import Image from 'next/image';

import fotoPerfil from '../../public/img/fotoPerfil.jpg';
import logoPoster from '../../public/img/logoPoster.png';
import logoColaboracion from '../../public/img/logoColaboracion.png';
import LogoUTN from '../../public/img/update/LogoUTN.png';

const Portada = () => {

    const youtubeVideoId = '9u4c2CqIc-A'; 
    const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1&loop=1&playlist=${youtubeVideoId}&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3`;
    const youtubeFullUrl = `https://www.youtube.com/watch?v=${youtubeVideoId}`;

    return (
        
        <div
            className="d-flex justify-content-center row mb-5"
            style={{
                backgroundColor: 'var(--bg-dark-neomorph)',
                color: 'var(--text-light-gray)',
                paddingBottom: '5rem',
                position: 'relative', 
                overflow: 'hidden' 
            }}
        >
           
            <div
                className="video-background-container"
                style={{
                    position: 'absolute', 
                    top: '0px',    
                    left: '0',
                    width: '100%',
                    height: '100%', 
                    zIndex: 0, 
                    pointerEvents: 'none' 
                }}
            >
                <iframe
                    src={youtubeEmbedUrl}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    className="video-background-iframe"
                ></iframe>
              
                <a
                    href={youtubeFullUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="video-background-overlay" 
                    style={{ zIndex: 1 }}
                >
                    <span className="video-background-play-icon">►</span>
                </a>
            </div>

            
            <div style={{ position: 'relative', zIndex: 10 }}> 

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
                        <span className="fw-bold" style={{ color: 'var(--bg-dark-neomorph)' }}>Ayudar</span>
                    </a>
                </div>


               <div className="d-flex justify-content-center" style={{ marginTop: '0em', marginLeft: '2.2em', zIndex: 90 }}>
                    <Image
                        src={fotoPerfil}
                        alt="Foto de Perfil de Gabriel"
                        className="foto-perfil neomorph-profile-picture efecto" 
                        width={150}
                        height={150}
                        style={{ objectFit: 'cover', marginTop: '12.5em' }}
                    />
                    <Image
                        src={LogoUTN}
                        alt="Logo UTN"
                        className="burbuja-flotante neomorph-floating-bubble animate__animated animate__bounceInDown border border-3"
                        width={40}
                        height={40}
                        style={{ marginTop: '13em' }} // Aquí se añade el margen superior
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
        </div>
    );
};

export default Portada;