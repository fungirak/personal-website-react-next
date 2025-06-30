import React from 'react';

// ... (todas tus importaciones de imágenes y helpers Logoskills, Comentarios) ...
import logoGithub from '../../../public/img/logoGithub.svg';
import logoFlecha from '../../../public/img/logoFlecha.png';
import logoFungirakWebsite from '../../../public/img/logoFungirakWebsite.png';
import logoArgProg from '../../../public/img/logoArgProg.png';
import logoInvitados from '../../../public/img/invitados.png';
import logoSms from '../../../public/img/logoSms.jpg';
import logoAtajos from '../../../public/img/atajos.png';
import logoSocio from '../../../public/img/logoSocio.jpeg';

// IMÁGENES PARA SKILLS (se mantienen tus rutas originales)
import logoJs from '../../../public/img/logoJs.png';
import logoTs from '../../../public/img/logoTs.png';
import logoMongodb from '../../../public/img/logoMongodb.svg';
import logoExpress from '../../../public/img/logoExpress.svg';
import logoReact from '../../../public/img/logoReact.svg';
import logoAngular from '../../../public/img/logoAngular.png';
import logoNodejs from '../../../public/img/logoNodejs.svg';
import logoMysql from '../../../public/img/logoMysql.svg';
import logoCss from '../../../public/img/logoCss.png';
import logoBootstrap from '../../../public/img/logoBootstrap.svg';
import logoMaterialize from '../../../public/img/logoMaterialize.png';
import logoSass from '../../../public/img/logoSass.svg';
import logoGit from '../../../public/img/logoGit.svg'; 
import logoUbuntu from '../../../public/img/logoUbuntu.svg';
import logoWindows from '../../../public/img/logoWindows.png';
import logoVisualStudioCode from '../../../public/img/logoVisualStudioCode.png';
import logoJava from '../../../public/img/update/logoJava.png'; 
import logoPHP from '../../../public/img/update/logoPHP.svg';


import Logoskills from '../helpers/Logoskills';
import Comentarios from '../Comentarios';


const Portfolio = () => {
    
    const urlJavascript = "https://developer.mozilla.org/es/docs/Web/JavaScript"; 
    const urlTypescript = "https://www.typescriptlang.org"; 
    const urlMongodb = "https://www.mongodb.com/es"; 
    const urlExpress = "https://expressjs.com/es/"; 
    const urlReactjs = "https://es.reactjs.org/"; 
    const urlAngular = "https://angular.io"; 
    const urlNodejs = "https://nodejs.org/es/"; 
    const urlMysql = "https://www.mysql.com/"; 
    const urlCss = "https://developer.mozilla.org/en-US/docs/Web/CSS"; 
    const urlBootstrap = "https://getbootstrap.com/"; 
    const urlMaterialize = "https://materializecss.com/"; 
    const urlSass = "https://sass-lang.com/"; 
    const urlGit = "https://git-scm.com/"; 
    const urlUbuntu = "https://ubuntu.com/"; 
    const urlWindows = "https://www.microsoft.com/en-us/windows?r=1"; 
    const urlVisualStudioCode = "https://code.visualstudio.com/"; 
    const urlGithubUrl = "https://github.com/"; 
    const urlJava = "https://www.java.com/en/download/help/whatis_java.html"; 
    const urlPHP = "https://www.php.net/"; 


    const allSkills = [
        { name: 'Java', logo: logoJava.src, url: urlJava },
        { name: 'JavaScript', logo: logoJs.src, url: urlJavascript },
        { name: 'TypeScript', logo: logoTs.src, url: urlTypescript },
        { name: 'PHP', logo: logoPHP.src, url: urlPHP },
        { name: 'MongoDB', logo: logoMongodb.src, url: urlMongodb },
        { name: 'Express.js', logo: logoExpress.src, url: urlExpress },
        { name: 'React.js', logo: logoReact.src, url: urlReactjs },
        { name: 'Node.js', logo: logoNodejs.src, url: urlNodejs },
        { name: 'Angular', logo: logoAngular.src, url: urlAngular },
        { name: 'MySQL', logo: logoMysql.src, url: urlMysql },
        { name: 'CSS 3', logo: logoCss.src, url: urlCss },
        { name: 'Bootstrap', logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png", url: urlBootstrap },
        { name: 'Materialize', logo: "https://materializecss.com/res/materialize.svg", url: urlMaterialize },
        { name: 'Sass', logo: logoSass.src, url: urlSass },
        { name: 'GIT', logo: logoGit.src, url: urlGit },
        { name: 'Github', logo: logoGithub.src, url: urlGithubUrl },
        { name: 'Ubuntu Linux', logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Ubuntu-Logo_svg.svg/1200px-Ubuntu-Logo_svg.svg.png", url: urlUbuntu },
        { name: 'Windows', logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Microsoft_Windows_2012_logo.svg/1200px-Microsoft_Windows_2012_logo.svg.png", url: urlWindows },
        { name: 'VS Code', logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1200px-Visual_Studio_Code_1.35_icon.svg.png", url: urlVisualStudioCode },
    ];

    return (
        <>
            
            <div id="skills-section" className="full-width-section" style={{ marginBottom: '2rem' }}>
                <h2 id="skills" className="text-center fw-normal neomorph-out-element text-electric-green section-title-glow" 
                    style={{ marginBottom: '1.5rem', fontSize: '2rem', padding: '0.75rem 1.5rem', borderRadius: '15px', maxWidth: '300px', margin: '0 auto 1.5rem auto' }}>
                    Skills
                </h2>
                
                <div className="neomorph-out-element p-3" style={{ maxWidth: '1200px', margin: '0 auto' }}> 
                    <h6 className="text-center fw-light text-electric-green mb-3" style={{fontSize: '0.95rem'}}>Caja de herramientas:</h6>

                    
                    <div className="skills-marquee-container">
                       
                        <div className="skills-marquee-row">
                           
                            {allSkills.map((skill, index) => (
                                <Logoskills key={`s1-${index}`} url={skill.url} logo={skill.logo} nombre={skill.name} />
                            ))}
                         
                            {allSkills.map((skill, index) => (
                                <Logoskills key={`s1-dup-${index}`} url={skill.url} logo={skill.logo} nombre={skill.name} />
                            ))}
                        </div>

                       

                    </div>
                </div>
            </div>
            <div className="espacio" style={{ height: '2rem' }}></div>

            
            <div id="portfolio-section" className="full-width-section" style={{ marginBottom: '2rem' }}>
                <h2 id="portafolio" className="text-center fw-normal neomorph-out-element text-electric-green section-title-glow" 
                    style={{ marginBottom: '1.5rem', fontSize: '2rem', padding: '0.75rem 1.5rem', borderRadius: '15px', maxWidth: '300px', margin: '0 auto 1.5rem auto' }}>
                    Portafolio
                </h2>
                <div className="row mt-4 d-flex justify-content-center col-12" style={{ maxWidth: '1000px', margin: '0 auto' }}>

                  
                    <div className="col-md-4 neomorph-out-element m-2 p-3 rounded" style={{ backgroundColor: 'var(--neomorph-base-dark)' }}>
                        <div className="col-sm-10 col-md-12 text-center card-body" style={{padding: '0.8rem'}}>
                            <h5 className="text-center p-1 rounded-pill fw-normal mb-1 text-electric-green" style={{ backgroundColor: 'var(--neomorph-base-dark)', fontSize: '1rem' }}>BACKEND JAVA MULTIUSUARIO CON AUTENTICACIÓN Y ROLES</h5>
                            <h6 className="text-center fw-normal mb-2 text-medium-gray" style={{fontSize: '0.85rem'}}>• JAVA • MySQL</h6>
                            <img src={logoArgProg.src} alt="Logo Argentina Programa" className="app rounded neomorph-card-image-border" style={{width: '14em', height: '14em'}}/>
                            <div className="text-center mt-3">
                                <a href="https://proyecto-arg-prog-frontend.web.app" target="_blank" rel="noopener noreferrer" className="neomorph-project-button" style={{padding: '0.5rem 0.8rem', fontSize: '0.85rem'}}>
                                    <img src={logoFlecha.src} alt="Abrir" style={{ width: '18px', height: '18px' }} />
                                    <span className="fw-bold">ABRIR</span>
                                </a>
                                <a href="https://github.com/fungirak" target="_blank" rel="noopener noreferrer" className="neomorph-project-button" style={{padding: '0.5rem 0.8rem', fontSize: '0.85rem'}}>
                                    <img src={logoGithub.src} alt="Código" style={{ width: '18px', height: '18px' }} />
                                    <span className="fw-bold">CÓDIGO</span>
                                </a>
                            </div>
                        </div>
                    </div>

                   

                   

                    <div className="col-md-4 neomorph-out-element m-2 p-3 rounded" style={{ backgroundColor: 'var(--neomorph-base-dark)' }}>
                        <div className="col-sm-10 col-md-12 text-center card-body">
                            <h5 className="text-center p-1 rounded-pill fw-normal mb-1 text-electric-green" style={{ backgroundColor: 'var(--neomorph-base-dark)', fontSize: '1rem' }}>FUNGIRAK WEBSITE (This)</h5>
                            <h6 className="text-center fw-normal mb-2 text-medium-gray" style={{fontSize: '0.85rem'}}>• NEXT.JS & NEOMORPHISM •</h6>
                            <img src={logoFungirakWebsite.src} alt="Fungirak Website" className="app rounded neomorph-card-image-border" style={{width: '14em', height: '14em'}}/>
                            <div className="text-center mt-3">
                                <span className="neomorph-live-button" style={{padding: '0.5rem 0.8rem', fontSize: '0.85rem'}}>
                                    <img src={logoFlecha.src} alt="En Vivo" style={{ width: '18px', height: '18px', filter: 'brightness(0) invert(0)' }} />
                                    <span className="fw-bold">EN VIVO</span>
                                </span>
                                <a href="https://github.com/fungirak/new-fungirak-website-2022" target="_blank" rel="noopener noreferrer" className="neomorph-project-button" style={{padding: '0.5rem 0.8rem', fontSize: '0.85rem'}}>
                                    <img src={logoGithub.src} alt="Código" style={{ width: '18px', height: '18px' }} />
                                    <span className="fw-bold">CÓDIGO</span>
                                </a>
                            </div>
                        </div>
                    </div>

                   

                    
                </div>
                <Comentarios />
            </div>
        </>
    );
};

export default Portfolio;