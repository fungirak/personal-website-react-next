import React from 'react';


import fungi1 from '../../../public/img/fungi1.jpg';
import fungi2 from '../../../public/img/fungi2.jpg';
import logoContacto from '../../../public/img/logoContacto.png';
import logoPoliticas from '../../../public/img/logoPoliticas.png';


const AboutMe = ({ posicionar, policyModalHandler }) => {
    return (
        <div id="about-me-section" className="full-width-section" style={{ marginBottom: '2rem' }}> 
            <h2 id="acerca-de-mi" className="text-center fw-normal neomorph-out-element text-electric-green section-title-glow" 
                style={{ marginBottom: '1.5rem', fontSize: '2rem', padding: '0.75rem 1.5rem', borderRadius: '15px', maxWidth: '300px', margin: '0 auto 1.5rem auto' }}>
                Acerca de Mí
            </h2>

            <div className="d-flex justify-content-center mt-3 p-3 neomorph-out-element" style={{ flexWrap: 'wrap', maxWidth: '1000px', margin: '0 auto' }}> 
                <div className="row d-flex justify-content-center m-0 w-100"> 
                   
                    <div className="card col-md-5 m-2 p-3 rounded neomorph-out-element neomorph-card-hover-in" style={{ minHeight: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: 'var(--text-light-gray)', backgroundColor: 'var(--neomorph-base-dark)' }}> 
                        <div className="card-header d-flex justify-content-center bg-transparent border-0 pb-2" style={{ padding: '0.75rem' }}> 
                            <img src={fungi1.src} alt="Perfil de Gabriel" className="img-fluid fungi neomorph-card-image-border" style={{ width: '100px', height: '100px', objectFit: 'cover' }} /> 
                        </div>
                        <div className="card-body" style={{ color: 'var(--text-medium-gray)', fontSize: '0.95rem', lineHeight: '1.5' }}> 
                            <p style={{marginBottom: '0.75rem'}}> 
                                ¡Hola! Soy Gabriel, un santotomesino apasionado por la tecnología, la música, el arte y el espacio.
                                Mi herramienta es el código, pero mi impulso es la claridad. Soy una mente en construcción constante, que elige avanzar con propósito.
                            </p>
                            <p style={{marginBottom: '0'}}>
                                Poseo 3 años de experiencia laboral en el desarrollo de software full-stack.
                                Actualmente, me dedico a mejorar continuamente mis habilidades, investigando y y poniendo a prueba diversas tecnologías de frontend, backend y bases de datos,
                                Presto atención a las últimas tendencias sólidas del mercado que sirvan para mejorar, mantener, actualizar proyectos existentes y cumplir con el éxito de los proyectos en los que participo.
                            </p>
                        </div>
                    </div>

                 
                    <div className="card col-md-5 m-2 p-3 rounded neomorph-out-element neomorph-card-hover-in" style={{ minHeight: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: 'var(--text-light-gray)', backgroundColor: 'var(--neomorph-base-dark)' }}>
                        <div className="card-header d-flex justify-content-center bg-transparent border-0 pb-2" style={{ padding: '0.75rem' }}>
                            <img src={fungi2.src} alt="Imagen de GitHub" className="img-fluid fungi neomorph-card-image-border" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                        </div>
                        <div className="card-body d-flex flex-column justify-content-between text-center" style={{ color: 'var(--text-medium-gray)', fontSize: '0.95rem', lineHeight: '1.5' }}>
                            <p style={{marginBottom: '0.75rem'}}>
                                Explora mi trabajo en GitHub, donde hago público algunos de los códigos fuente de mis proyectos personales.
                            </p>
                            <a href="https://github.com/fungirak" target="_blank" rel="noopener noreferrer" className="neomorph-link-button" style={{ padding: '0.6rem 1rem', fontSize: '0.9rem' }}> 
                                Ver Perfil de Github
                            </a>
                            <p className="mt-3" style={{marginBottom: '0.75rem'}}>
                                Si te gusta mi perfil y te interesa contactarme, envíame un mensaje para estar en contacto en mi <br />
                                <a href="https://ar.linkedin.com/in/gabriel-lazzarini" target="_blank" rel="noopener noreferrer" className="neomorph-link-button" style={{ padding: '0.6rem 1rem', fontSize: '0.9rem' }}>
                                    Cuenta de LinkedIn
                                </a>
                                <br /> o en la sección de <b className="text-electric-green">chat</b>.
                            </p>
                            <div className="mt-2 d-flex justify-content-center"> 
                                <a href="#contact-section" className="neomorph-icon-circle-button" style={{ width: '50px', height: '50px' }} onClick={(e) => { e.preventDefault(); posicionar(document.getElementById('contact-section').offsetTop - 100); }}> 
                                    <img src={logoContacto.src} alt="Logo de Contacto" style={{ width: '35px', height: '35px' }} /> 
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="espacio" style={{ height: '2rem' }}></div> 

        
            <div className="espacio" style={{ height: '2rem' }}></div> 
        </div>
    );
};

export default AboutMe;