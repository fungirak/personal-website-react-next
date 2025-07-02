// components/Portfolio.js
import React from 'react';
import Image from 'next/image';

// --- Importaciones de LOGOS ---
import logoGithub from '../../../public/img/logoGithub.svg';
import logoFlecha from '../../../public/img/logoFlecha.png';
// import logoFungirakWebsite from '../../../public/img/logoFungirakWebsite.png'; // No se usa en el código actual
// import logoArgProg from '../../../public/img/logoArgProg.png'; // No se usa en el código actual

import logoJs from '../../../public/img/logoJs.png';
import logoTs from '../../../public/img/logoTs.png';
import logoMongodb from '../../../public/img/logoMongodb.svg';
import logoExpress from '../../../public/img/logoExpress.svg';
import logoReact from '../../../public/img/logoReact.svg';
import logoNodejs from '../../../public/img/logoNodejs.svg';
import logoMysql from '../../../public/img/logoMysql.svg';
import logoCss from '../../../public/img/logoCss.png';
import logoSass from '../../../public/img/logoSass.svg';
import logoGit from '../../../public/img/logoGit.svg'; 
import logoJava from '../../../public/img/update/logoJava.png'; 
import logoPHP from '../../../public/img/update/logoPHP.svg';

import logoSpringJWT from '../../../public/img/logoSpringJWT.jpg';
import logoWebsite from '../../../public/img/logoWebsite.png'; // Usado para el proyecto "FUNGIRAK WEBSITE"

// --- Importaciones de COMPONENTES AUXILIARES ---
import Comentarios from '../../componentes/Comentarios'; // Por favor, verifica que la ruta sea correcta
import Logoskills from '../../componentes/helpers/Logoskills'; // Por favor, verifica que la ruta sea correcta


const Portfolio = () => {
    // --- DECLARACIÓN DE URLS PARA LAS HABILIDADES ---
    const urlJavascript = "https://developer.mozilla.org/es/docs/Web/JavaScript"; 
    const urlTypescript = "https://www.typescriptlang.org"; 
    const urlMongodb = "https://www.mongodb.com/es"; 
    const urlExpress = "https://expressjs.com/es/"; 
    const urlReactjs = "https://es.reactjs.org/"; 
    // const urlAngular = "https://angular.io"; // Esta URL no se está utilizando en `allSkills`, puedes eliminarla si no la necesitas.
    const urlNodejs = "https://nodejs.org/es/"; 
    const urlMysql = "https://www.mysql.com/"; 
    const urlCss = "https://developer.mozilla.org/en-US/docs/Web/CSS"; 
    const urlSass = "https://sass-lang.com/"; 
    const urlGit = "https://git-scm.com/"; 
    const urlJava = "https://www.java.com/en/download/help/whatis_java.html"; 
    const urlPHP = "https://www.php.net/"; 

    // --- DECLARACIÓN DE ALLSKILLS ---
    const allSkills = [
        { name: 'Java', logo: logoJava.src, url: urlJava },
        { name: 'JavaScript', logo: logoJs.src, url: urlJavascript },
        { name: 'TypeScript', logo: logoTs.src, url: urlTypescript },
        { name: 'PHP', logo: logoPHP.src, url: urlPHP },
        { name: 'MongoDB', logo: logoMongodb.src, url: urlMongodb },
        { name: 'Express.js', logo: logoExpress.src, url: urlExpress },
        { name: 'React.js', logo: logoReact.src, url: urlReactjs },
        { name: 'Node.js', logo: logoNodejs.src, url: urlNodejs },
        { name: 'MySQL', logo: logoMysql.src, url: urlMysql },
        { name: 'CSS 3', logo: logoCss.src, url: urlCss },
        { name: 'Sass', logo: logoSass.src, url: urlSass },
        { name: 'GIT', logo: logoGit.src, url: urlGit },
    ];

    return (
        <>
            {/* --- SECCIÓN SKILLS --- */}
            <div id="skills-section" className="full-width-section" style={{ marginBottom: '2rem' }}>
                <h2 id="skills" className="text-center fw-normal neomorph-out-element text-electric-green section-title-glow" 
                    style={{ marginBottom: '1.5rem', fontSize: '2rem', padding: '0.75rem 1.5rem', borderRadius: '15px', maxWidth: '300px', margin: '0 auto 1.5rem auto' }}>
                    Skills
                </h2>
                <div className="neomorph-out-element p-3" style={{ maxWidth: '1200px', margin: '0 auto' }}> 
                    <h6 className="text-center fw-light text-electric-green mb-3" style={{fontSize: '0.95rem'}}>Caja de herramientas:</h6>
                    <div className="skills-marquee-container">
                        <div className="skills-marquee-row">
                            {/* Aquí se usa allSkills, ahora definida */}
                            {allSkills.map((skill, index) => (
                                <Logoskills key={`s1-${index}`} url={skill.url} logo={skill.logo} nombre={skill.name}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="espacio" style={{ height: '2rem' }}></div>

            {/* --- SECCIÓN PORTAFOLIO --- */}
            {/* Es crucial que este div tenga el ID "portfolio-section" */}
            <div id="portfolio-section" className="full-width-section">
                <div className="row mt-4 d-flex justify-content-between mx-auto" style={{ maxWidth: '1000px' }}>
                    <h2 className="text-center fw-normal neomorph-out-element text-electric-green section-title-glow p-3">
                        Proyectos Públicos
                    </h2>
                    {/* Contenido de tus proyectos */}
                    <div className="col-12 col-md-4 p-2">
                        <div className="neomorph-out-element p-3 rounded d-flex flex-column align-items-center text-center"
                            style={{ backgroundColor: 'var(--neomorph-base-dark)', width: '100%', marginBottom: '0.8rem' }}>
                            {/* Contenido del proyecto Fungirak Website */}
                            <div style={{
                                width: '100%', height: '10em', overflow: 'hidden', borderRadius: '8px', marginBottom: '0.8rem',
                                boxShadow: 'inset 5px 5px 10px var(--neomorph-dark-shadow), inset -5px -5px 10px var(--neomorph-light-shadow)',
                                background: 'var(--neomorph-base-dark)'
                            }}>
                                <Image src={logoWebsite.src} alt="Fungirak Website" width={200} height={160} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <h5 className="text-center p-1 rounded-pill fw-normal mb-1 text-electric-green" style={{ backgroundColor: 'var(--neomorph-base-dark)', fontSize: '1rem' }}>FUNGIRAK WEBSITE CON NEXT ACTUALIZADO 2025 (This)</h5>
                            <h6 className="text-center fw-normal mb-2 text-medium-gray" style={{ fontSize: '0.85rem' }}>• NEXT.JS & NEOMORPHISM •</h6>
                            <div className="text-center mt-3 d-flex justify-content-center flex-wrap" style={{ width: '100%' }}>
                                <span className="neomorph-live-button" style={{ padding: '0.5rem 0.8rem', fontSize: '0.85rem', marginRight: '0.5rem', marginBottom: '0.5rem' }}>
                                    <Image src={logoFlecha.src} alt="En Vivo" width={18} height={18} style={{ filter: 'brightness(0) invert(0)' }} />
                                    <span className="fw-bold">EN VIVO</span>
                                </span>
                                <a href="https://github.com/fungirak/fungirak.com" target="_blank" rel="noopener noreferrer" className="neomorph-project-button" style={{ padding: '0.5rem 0.8rem', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                                    <Image src={logoGithub.src} alt="Código" width={18} height={18} />
                                    <span className="fw-bold">CÓDIGO</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-4 p-2">
                        <div className="neomorph-out-element p-3 rounded d-flex flex-column align-items-center text-center"
                            style={{ backgroundColor: 'var(--neomorph-base-dark)', width: '100%', marginBottom: '0.8rem' }}>
                            {/* Contenido del proyecto Backend Java */}
                            <div style={{
                                width: '100%', height: '10em', overflow: 'hidden', borderRadius: '8px', marginBottom: '0.8rem',
                                boxShadow: 'inset 5px 5px 10px var(--neomorph-dark-shadow), inset -5px -5px 10px var(--neomorph-light-shadow)',
                                background: 'var(--neomorph-base-dark)'
                            }}>
                                <Image src={logoSpringJWT} alt="Logo Argentina Programa" width={200} height={160} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <h5 className="text-center p-1 rounded-pill fw-normal mb-1 text-electric-green" style={{ backgroundColor: 'var(--neomorph-base-dark)', fontSize: '1rem' }}>BACKEND JAVA MULTIUSUARIO CON AUTENTICACIÓN Y ROLES</h5>
                            <h6 className="text-center fw-normal mb-2 text-medium-gray" style={{ fontSize: '0.85rem' }}>• JAVA • MySQL</h6>
                            <div className="text-center mt-3 d-flex justify-content-center flex-wrap" style={{ width: '100%' }}>
                                <a href="https://deploy-next-front-historias.vercel.app/#/login" target="_blank" rel="noopener noreferrer" className="neomorph-project-button" style={{ padding: '0.5rem 0.8rem', fontSize: '0.85rem', marginRight: '0.5rem', marginBottom: '0.5rem' }}>
                                    <Image src={logoFlecha.src} alt="Abrir" width={18} height={18} />
                                    <span className="fw-bold">ABRIR</span>
                                </a>
                                <a href="https://github.com/fungirak/backend-historias-java-spring" target="_blank" rel="noopener noreferrer" className="neomorph-project-button" style={{ padding: '0.5rem 0.8rem', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                                    <Image src={logoGithub.src} alt="Código" width={18} height={18} />
                                    <span className="fw-bold">CÓDIGO</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-4 p-2">
                        <Comentarios />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Portfolio;