import React from 'react';
import Image from 'next/image';

import fungi1 from '../../../public/img/fungi1.jpg'; // Tu foto de perfil
import fungi2 from '../../../public/img/fungi2.jpg';
import logoContacto from '../../../public/img/logoContacto.png';
import logoPoliticas from '../../../public/img/logoPoliticas.png';


const AboutMe = ({ posicionar, policyModalHandler }) => {
   


    return (
            <div id="about-me-section" className="full-width-section mt-2" style={{ marginBottom: '2rem', marginTop: '-200px', position: 'relative', zIndex: 3 }}>
                <h2 id="acerca-de-mi" className="text-center fw-normal neomorph-out-element text-electric-green section-title-glow"
                    style={{ marginBottom: '1.5rem', fontSize: '2rem', padding: '0.75rem 1.5rem', borderRadius: '15px', maxWidth: '300px', margin: '0 auto 1.5rem auto' }}>
                    Acerca de Mí
                </h2>

                <div className="d-flex justify-content-center mt-3 p-3" style={{ flexWrap: 'wrap', maxWidth: '1000px', margin: '0 auto' }}>
                    <div className="row d-flex justify-content-center m-0 w-100">

                        <div className="card col-md-5 m-2 p-3 rounded neomorph-out-element neomorph-card-hover-in" style={{ minHeight: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: 'var(--text-light-gray)', backgroundColor: 'var(--neomorph-base-dark)' }}>
                            <div className="card-header d-flex justify-content-center bg-transparent border-0 pb-2" style={{ padding: '0.75rem' }}>
                               
                                <Image
                                    src={fungi1}
                                    alt="Perfil de Gabriel"
                                    className="img-fluid fungi neomorph-card-image-border foto-perfil-z-index" 
                                    width={100}
                                    height={100}
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div className="card-body" style={{ color: 'var(--text-medium-gray)', fontSize: '0.95rem', lineHeight: '1.5' }}>
                                <p style={{ marginBottom: '0.75rem' }}>
                                    ¡Hola! Soy Gabriel, un santotomesino apasionado por la tecnología, la música, el arte y el espacio.
                                    Mi herramienta es el código, pero mi impulso es la claridad de avanzar con propósito.
                                </p>
                                <p style={{ marginBottom: '0' }}>
                                    Poseo 3 años de experiencia laboral en el desarrollo de software full-stack.
                                    Actualmente, me dedico a mejorar continuamente mis habilidades, investigando y poniendo a prueba diversas tecnologías de frontend, backend y bases de datos,
                                    Presto atención a las últimas tendencias sólidas del mercado que sirvan para mejorar, mantener, actualizar, proyectos existentes y cumplir con el éxito de los proyectos en los que participo.
                                </p>
                            </div>
                        </div>


                        <div className="card col-md-5 m-2 p-3 rounded neomorph-out-element neomorph-card-hover-in" style={{ minHeight: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: 'var(--text-light-gray)', backgroundColor: 'var(--neomorph-base-dark)' }}>
                            <div className="card-header d-flex justify-content-center bg-transparent border-0 pb-2" style={{ padding: '0.75rem' }}>
                                <Image
                                    src={fungi2}
                                    alt="Imagen de GitHub"
                                    className="img-fluid fungi neomorph-card-image-border"
                                    width={100}
                                    height={100}
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div className="card-body d-flex flex-column justify-content-between text-center" style={{ color: 'var(--text-medium-gray)', fontSize: '0.95rem', lineHeight: '1.5' }}>
                                <p style={{ marginBottom: '0.75rem' }}>
                                    Explora mi trabajo en GitHub, donde hago público algunos de los código fuente de mis proyectos personales.
                                </p>
                                <a href="https://github.com/fungirak" target="_blank" rel="noopener noreferrer" className="neomorph-link-button" style={{ padding: '0.6rem 1rem', fontSize: '0.9rem' }}>
                                    Ver Perfil de Github
                                </a>
                                <p className="mt-3" style={{ marginBottom: '0.75rem' }}>
                                    Si te gusta mi perfil y te interesa contactarme, envíame un mensaje para estar en contacto en mi <br /><br />
                                    <a href="https://ar.linkedin.com/in/gabriel-lazzarini" target="_blank" rel="noopener noreferrer" className="neomorph-link-button" style={{ padding: '0.6rem 1rem', fontSize: '0.9rem' }}>
                                        Cuenta de LinkedIn
                                    </a>

                                </p>

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