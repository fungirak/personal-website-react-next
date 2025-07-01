import React, { useState, useEffect } from 'react'; 
import Modal from 'react-modal'; 
import Image from 'next/image';

import utnLogo from '../../../public/img/update/LogoUTN.png';
import unlLogo from '../../../public/img/LogoUNL.png'; 
import logoGobiernoSantaFe from '../../../public/img/logoGobiernoSantaFe.png';


import logoYoProgramo from '../../../public/img/update/certif-yoprogramo.jpg';
import logoUxUi from '../../../public/img/update/certif-ux.png';
import logoMetodologias from '../../../public/img/update/certif-metodologias.png';
import logoSeguridad from '../../../public/img/update/certif-seguridad.jpg';



const MyJourney = () => {
    
    const [certModalIsOpen, setCertModalIsOpen] = useState(false);
    const [currentCertImage, setCurrentCertImage] = useState(null);

    
    useEffect(() => {
        Modal.setAppElement('body');
    }, []);

    const openCertModal = (imageSrc) => {
        setCurrentCertImage(imageSrc);
        setCertModalIsOpen(true);
    };

    const closeCertModal = () => {
        setCertModalIsOpen(false);
        setCurrentCertImage(null);
    };

    return (
        <div id="my-journey-section" className="full-width-section" style={{ marginBottom: '2rem' }}>
            <h2 id="trayectoria-vision" className="text-center fw-normal neomorph-out-element text-electric-green section-title-glow"
                style={{ marginBottom: '1.5rem', fontSize: '2rem', padding: '0.75rem 1.5rem', borderRadius: '15px', maxWidth: '300px', margin: '0 auto 1.5rem auto' }}>
                Trayectoria y Visión
            </h2>
            <div className="d-flex justify-content-center mt-4 p-4 " style={{ flexDirection: 'column', alignItems: 'center', maxWidth: '1000px', margin: '0 auto' }}>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.5', textAlign: 'center', maxWidth: '700px', marginBottom: '1.5rem', color: 'var(--text-medium-gray)' }}>
                    No me defino por un stack, ni por un título. Me defino por las ganas de resolver con las que abordo los problemas.
                    Trabajo en la frontera donde las ideas toman forma y se vuelven funcionales.
                </p>


                <div className="row d-flex justify-content-center m-0 w-100">
                    <div className="col-md-4 m-2 p-3 rounded neomorph-out-element neomorph-card-hover-in" style={{ color: 'var(--text-medium-gray)', backgroundColor: 'var(--neomorph-base-dark)' }}>
                        <h3 className="fw-bold text-electric-green" style={{ fontSize: '1.1rem' }}>Soy Lógico</h3>
                        <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>
                            Pienso en sistemas. Cada línea de código responde a un propósito. Me muevo con lógica, diseño con intención y entrego valor. No busco reinventar: busco que lo complejo funcione con simplicidad. Hablo de soluciones que viven, evolucionan y escalan.
                        </p>
                    </div>
                    <div className="col-md-4 m-2 p-3 rounded neomorph-out-element neomorph-card-hover-in" style={{ color: 'var(--text-medium-gray)', backgroundColor: 'var(--neomorph-base-dark)' }}>
                        <h3 className="fw-bold text-electric-green" style={{ fontSize: '1.1rem' }}>Soy Técnico</h3>
                        <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>
                            El desarrollo es estrategia. Sé cuándo optimizar, abstraer y entregar valor. Construir pensando a futuro. Diseñar para escalar, documentar para el equipo lo mínimo necesario, y entregar funcionalidad valiosa que hable por si sola.
                        </p>
                    </div>
                    <div className="col-md-4 m-2 p-3 rounded neomorph-out-element neomorph-card-hover-in" style={{ color: 'var(--text-medium-gray)', backgroundColor: 'var(--neomorph-base-dark)' }}>
                        <h3 className="fw-bold text-electric-green" style={{ fontSize: '1.1rem' }}>Soy Pragmático</h3>
                        <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>
                            No idealizo herramientas; las uso. Mi enfoque es directo: resolver. Cada proyecto es un sistema. Evito complejidad innecesaria. Prefiero soluciones limpias y estables. Entregar a tiempo es parte del producto.
                        </p>
                    </div>
                </div>

                <br />

                <div className="w-100 mt-4 p-3 ">
                    <h3 className="fw-bold text-electric-green">Más sobre mí y mi visión</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '1rem', color: 'var(--text-medium-gray)', fontSize: '0.9rem', lineHeight: '1.4' }} className="neomorph-out-element p-3">
                            <span className="text-electric-green ">• 🎒 Stack y Propósito:</span> Mi kit de herramientas incluye Spring Boot, Java, MySQL, React, Next, Node, JavaScript y Typescript. Actualmente diseño en privado soluciones innovadoras que abordan problemas sociales reales y generen un impacto significativamente positivo al validarse con los beneficiarios últimos que son la piedra angular de mi trabajo. No solo escribo código, construyo puentes hacia un futuro mejor.
                        </li>
                        <br />
                        <li style={{ marginBottom: '1rem', color: 'var(--text-medium-gray)', fontSize: '0.9rem', lineHeight: '1.4' }} className="neomorph-out-element p-3">
                            <span className="text-electric-green">• 🧘🏻 Estrategia y Acción:</span> A mis 26 años, he aprendido que cada desafío es una oportunidad. Mi enfoque es estratégico y mi acción decidida frente a las dificultades ha fortalecido mi autonomía y determinación.
                        </li>
                        <br />
                        <li style={{ marginBottom: '1rem', color: 'var(--text-medium-gray)', fontSize: '0.9rem', lineHeight: '1.4' }} className="neomorph-out-element p-3">
                            <span className="text-electric-green">• 🌟 Liderazgo y Valores:</span> El verdadero liderazgo nace de la necesidad instrínseca que tenemos los emprendedores de resolver un problema en el mundo, del control emocional y de la gestión óptima de recursos, incluyendo mis valores personales.
                        </li>
                        <br />
                        <li style={{ marginBottom: '1rem', color: 'var(--text-medium-gray)', fontSize: '0.9rem', lineHeight: '1.4' }} className="neomorph-out-element p-3">
                            <span className="text-electric-green">• 🔥 Ambición e Innovación:</span> Compromiso inquebrantable con la innovación real. Busco aportar valor al pueblo, impulsando nuevas ideas y soluciones que trasciendan lo convencional y defectuoso.
                        </li>
                        <br />
                        <li style={{ marginBottom: '0.5rem', color: 'var(--text-medium-gray)', fontSize: '0.9rem', lineHeight: '1.4' }} className="neomorph-out-element p-3">
                            <span className="text-electric-green">• 🍀 Proyección e Influencia:</span> Mi plan a futuro es proyectar una influencia creciente y positiva a través de la confianza en la tecnología aplicada socialmente para resolver problemas reales. Busco inspirar, educar y contribuir a una comunidad tecnológica que evolucione constantemente y se mantenga fiel al compromiso de que la tecnología está creada para resolver problemas. No para crearlos.
                        </li>
                        <br />
                    </ul>
                </div>


                <div className="w-100 mt-4 p-3 ">
                    <h3 className="fw-bold text-electric-green section-title-glow">Experiencia Laboral</h3>
                    <div className="neomorph-out-element p-3" style={{ marginBottom: '1rem', backgroundColor: 'var(--neomorph-base-dark)' }}>
                        <div className="d-flex align-items-center mb-1">
                            <div className="list-item-neomorph-icon" style={{
                                width: '6em',
                                height: '6em',
                                borderRadius: '50%',
                                overflow: 'hidden',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginRight: '1rem',
                                boxShadow: 'inset 5px 5px 10px var(--neomorph-dark-shadow), inset -5px -5px 10px var(--neomorph-light-shadow)',
                                background: 'var(--neomorph-base-dark)'
                            }}>
                                <Image
                                    src={logoGobiernoSantaFe}
                                    alt="Logo Gobierno de Santa Fe"
                                    width={96}
                                    height={96}
                                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                                />
                            </div>

                           
                            <div style={{ flexGrow: 1 }}>
                                <h4 className="text-electric-green" style={{ margin: '0', fontSize: '1.1rem' }}>Software Developer</h4>
                                <p style={{ color: 'var(--text-medium-gray)', margin: '0', fontSize: '0.9rem' }}>SECRETARÍA DE TECNOLOGÍAS PARA LA GESTIÓN</p>
                                <p style={{ color: 'var(--text-medium-gray)', margin: '0', fontSize: '0.9rem' }}>Ministerio de Gobierno e Innovación Pública</p>
                                <p style={{ color: 'var(--text-medium-gray)', margin: '0', fontSize: '0.9rem' }}>Gobierno de la Provincia de Santa Fe · Jornada completa</p>
                                <p style={{ color: 'var(--text-muted-gray)', fontSize: '0.85rem' }}>Desde Marzo de 2022 - Actualidad · 3 años</p>
                            </div>
                        </div>

                        <ul style={{ color: 'var(--text-medium-gray)', listStyle: 'disc', paddingLeft: '1.2rem', marginTop: '0.8rem', fontSize: '0.9rem' }}>
                            <p style={{ color: 'var(--text-muted-gray)', fontSize: '0.85rem' }}>En colaboración con:</p>
                            <br />
                            <li><span className="text-electric-green">✏️ MINISTERIO DE EDUCACIÓN: </span>Desarrollo de Interfaz visual con <span className="text-electric-green">React.js</span> en <span className="text-electric-green"> SISTEMA SIPAU </span> y Backend con <span className="text-electric-green">Spring Boot y Oracle database</span>.</li>
                            <br />
                            <li><span className="text-electric-green">📂 MINISTERIO DE GOBIERNO: </span> Desarrollo Backend Java, <span className="text-electric-green">JWT</span>, Microservicio de patentes con <span className="text-electric-green">Spring Boot y Oracle database</span>.</li>
                            <br />
                            <li><span className="text-electric-green">🍃 MINISTERIO DE MEDIO AMBIENTE: </span> Desarrollo con <span className="text-electric-green">Symfony, PHP, Doctrine y Twig</span>. en <span className="text-electric-green">PUERTOS FISCALIZADORES</span> </li>
                        </ul>
                    </div>
                </div>



                <div className="w-100 mt-4 p-3 neomorph-out-element">
                    <h3 className="fw-bold text-electric-green section-title-glow">Aptitudes Clave</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
                        {['BACKEND', 'FRONTEND', 'React.js', 'MySQL', 'Oracle SQL Developer', 'Hibernate', 'API', 'Java', 'Mapeo objeto-relacional', 'Spring Framework', 'Spring Security', 'PHP', 'Git'].map(skill => (
                            <span key={skill} className="skill-tag" style={{ padding: '6px 10px', fontSize: '0.85rem' }}>{skill}</span>
                        ))}
                    </div>
                </div>


                <div className="w-100 mt-4 p-3 neomorph-out-element">
                    <h3 className="fw-bold text-electric-green section-title-glow p-3">Educación</h3>

                    {/* Primer bloque de educación: UTN (Actual) */}
                    <div className="neomorph-out-element neomorph-glow-highlight p-3" style={{ backgroundColor: 'var(--neomorph-base-dark)', marginBottom: '0.8rem' }}>
                        <div className="d-flex align-items-center mb-1">
                            <div className="list-item-neomorph-icon" style={{
                                width: '4em',
                                height: '4em',
                                borderRadius: '50%',
                                overflow: 'hidden',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginRight: '1rem',
                                boxShadow: 'inset 5px 5px 10px var(--neomorph-dark-shadow), inset -5px -5px 10px var(--neomorph-light-shadow)',
                                background: 'var(--neomorph-base-dark)'
                            }}>
                                <Image src={utnLogo} alt="Educación UTN" width={64} height={64} style={{ objectFit: 'contain', width: '100%', height: '100%' }} />
                            </div>
                            <div style={{ flexGrow: 1 }}>
                                <h4 className="text-electric-green" style={{ margin: '0', fontSize: '1rem' }}>UNIVERSIDAD TECNOLÓGICA NACIONAL (UTN FRSF)</h4>
                                <h3 style={{ color: 'var(--text-medium-gray)', margin: '0', fontSize: '0.9rem' }}>Tecnicatura en Tecnologías de la Información</h3>
                                <p style={{ color: 'var(--text-medium-gray)', margin: '0', fontSize: '0.9rem' }}>(Análisis, Diseño y Desarrollo de Sistemas de Software).</p>
                                <p style={{ color: 'var(--text-muted-gray)', fontSize: '0.85rem' }}>2023 - 2025</p>
                            </div>
                        </div>
                    </div>

                    {/* Segundo bloque de educación: UNL */}
                    <div className="neomorph-out-element p-3" style={{ backgroundColor: 'var(--neomorph-base-dark)', marginTop: '0.8rem' }}>
                        <div className="d-flex align-items-center mb-1">
                            <div className="list-item-neomorph-icon" style={{
                                width: '4em',
                                height: '4em',
                                borderRadius: '50%',
                                overflow: 'hidden',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginRight: '1rem',
                                boxShadow: 'inset 5px 5px 10px var(--neomorph-dark-shadow), inset -5px -5px 10px var(--neomorph-light-shadow)',
                                background: 'var(--neomorph-base-dark)'
                            }}>
                                <Image src={unlLogo} alt="Educación UNL" width={64} height={64} style={{ objectFit: 'contain', width: '100%', height: '100%' }} />
                            </div>
                            <div style={{ flexGrow: 1 }}>
                                <h4 className="text-electric-green" style={{ margin: '0', fontSize: '1rem' }}>Universidad Nacional del Litoral</h4>
                                <p style={{ color: 'var(--text-medium-gray)', margin: '0', fontSize: '0.9rem' }}>Ingeniería en Informática</p>
                                <p style={{ color: 'var(--text-muted-gray)', fontSize: '0.85rem' }}>2021 - 2023</p>
                            </div>
                        </div>
                    </div>

                    {/* Tercer bloque de educación */}
                    <div className="neomorph-out-element p-3" style={{ backgroundColor: 'var(--neomorph-base-dark)', marginTop: '0.8rem' }}>
                        <div className="d-flex align-items-center mb-1">
                            <div className="list-item-neomorph-icon" style={{
                                width: '4em',
                                height: '4em',
                                borderRadius: '50%',
                                overflow: 'hidden',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginRight: '1rem',
                                boxShadow: 'inset 5px 5px 10px var(--neomorph-dark-shadow), inset -5px -5px 10px var(--neomorph-light-shadow)',
                                background: 'var(--neomorph-base-dark)'
                            }}>
                                <Image src={utnLogo} alt="Educación UTN" width={64} height={64} style={{ objectFit: 'contain', width: '100%', height: '100%' }} />
                            </div>
                            <div style={{ flexGrow: 1 }}>
                                <h4 className="text-electric-green" style={{ margin: '0', fontSize: '1rem' }}>Universidad Tecnológica Nacional</h4>
                                <p style={{ color: 'var(--text-medium-gray)', margin: '0', fontSize: '0.9rem' }}>Ingeniería en Sistemas de Información</p>
                                <p style={{ color: 'var(--text-muted-gray)', fontSize: '0.85rem' }}>2018 - 2020</p>
                            </div>
                        </div>
                    </div>
                </div>


                <br /><br />
                <div className="w-100 mt-4 p-3 neomorph-out-element p-3">
                    <h3 className="fw-bold text-electric-green section-title-glow">Licencias y Certificaciones</h3>

                    {/* Contenedor Flexbox para las 4 certificaciones en una fila */}
                    <div className="d-flex flex-wrap justify-content-center">

                        {/* Certificación 1: Yo Programo */}
                        <div className="col-12 col-sm-6 col-md-3 d-flex p-2">
                            <div className="neomorph-out-element p-3 rounded d-flex flex-column align-items-center text-center"
                                style={{ backgroundColor: 'var(--neomorph-base-dark)', width: '100%', marginBottom: '0.8rem', cursor: 'pointer' }}
                                onClick={() => openCertModal(logoYoProgramo.src)}
                            >
                                <div style={{
                                    width: '100%', 
                                    height: '10em', 
                                    overflow: 'hidden',
                                    borderRadius: '8px', 
                                    marginBottom: '0.5rem',
                                    boxShadow: 'inset 5px 5px 10px var(--neomorph-dark-shadow), inset -5px -5px 10px var(--neomorph-light-shadow)',
                                    background: 'var(--neomorph-base-dark)'
                                }}>
                                    <Image
                                        src={logoYoProgramo}
                                        alt="Certificación Yo Programo - Argentina Programa"
                                        width={200} 
                                        height={160} 
                                        style={{ objectFit: 'cover', width: '100%', height: '100%' }} 
                                    />
                                </div>
                                <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <h4 className="text-electric-green" style={{ margin: '0', fontSize: '0.95rem' }}>Certificación Yo Programo  Argentina Programa</h4>
                                    <p style={{ color: 'var(--text-medium-gray)', margin: '0', fontSize: '0.85rem' }}>Cámara Argentina del Software</p>
                                    <p style={{ color: 'var(--text-muted-gray)', fontSize: '0.8rem' }}>Expedición: 2022</p>
                                </div>
                            </div>
                        </div>

                        {/* Certificación 2: Diseño UX-UI */}
                        <div className="col-12 col-sm-6 col-md-3 d-flex p-2">
                            <div className="neomorph-out-element p-3 rounded d-flex flex-column align-items-center text-center"
                                style={{ backgroundColor: 'var(--neomorph-base-dark)', width: '100%', marginBottom: '0.8rem', cursor: 'pointer' }}
                                onClick={() => openCertModal(logoUxUi.src)}
                            >
                                <div style={{
                                    width: '100%',
                                    height: '10em',
                                    overflow: 'hidden',
                                    borderRadius: '8px',
                                    marginBottom: '0.5rem',
                                    boxShadow: 'inset 5px 5px 10px var(--neomorph-dark-shadow), inset -5px -5px 10px var(--neomorph-light-shadow)',
                                    background: 'var(--neomorph-base-dark)'
                                }}>
                                    <Image
                                        src={logoUxUi}
                                        alt="Certificación en Diseño de Experiencia de Usuario UX-UI"
                                        width={200}
                                        height={160}
                                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                                    />
                                </div>
                                <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <h4 className="text-electric-green" style={{ margin: '0', fontSize: '0.95rem' }}>Diseño de Experiencia de Usuario UX-UI</h4>
                                    <p style={{ color: 'var(--text-medium-gray)', margin: '0', fontSize: '0.85rem' }}>LinkedinLearning</p>
                                    <p style={{ color: 'var(--text-muted-gray)', fontSize: '0.8rem' }}>Expedición: 2021</p>
                                </div>
                            </div>
                        </div>

                        {/* Certificación 3: Metodologías Ágiles */}
                        <div className="col-12 col-sm-6 col-md-3 d-flex p-2">
                            <div className="neomorph-out-element p-3 rounded d-flex flex-column align-items-center text-center"
                                style={{ backgroundColor: 'var(--neomorph-base-dark)', width: '100%', marginBottom: '0.8rem', cursor: 'pointer' }}
                                onClick={() => openCertModal(logoMetodologias.src)}
                            >
                                <div style={{
                                    width: '100%',
                                    height: '10em',
                                    overflow: 'hidden',
                                    borderRadius: '8px',
                                    marginBottom: '0.5rem',
                                    boxShadow: 'inset 5px 5px 10px var(--neomorph-dark-shadow), inset -5px -5px 10px var(--neomorph-light-shadow)',
                                    background: 'var(--neomorph-base-dark)'
                                }}>
                                    <Image
                                        src={logoMetodologias}
                                        alt="Certificación de Metodologías Ágiles"
                                        width={200}
                                        height={160}
                                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                                    />
                                </div>
                                <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <h4 className="text-electric-green" style={{ margin: '0', fontSize: '0.95rem' }}>Certificación de Metodologías Ágiles</h4>
                                    <p style={{ color: 'var(--text-medium-gray)', margin: '0', fontSize: '0.85rem' }}>LinkedinLearning</p>
                                    <p style={{ color: 'var(--text-muted-gray)', fontSize: '0.8rem' }}>Expedición: 2021</p>
                                </div>
                            </div>
                        </div>

                        {/* Certificación 4: Seguridad Informática */}
                        <div className="col-12 col-sm-6 col-md-3 d-flex p-2">
                            <div className="neomorph-out-element p-3 rounded d-flex flex-column align-items-center text-center"
                                style={{ backgroundColor: 'var(--neomorph-base-dark)', width: '100%', marginBottom: '0.8rem', cursor: 'pointer' }}
                                onClick={() => openCertModal(logoSeguridad.src)}
                            >
                                <div style={{
                                    width: '100%',
                                    height: '10em',
                                    overflow: 'hidden',
                                    borderRadius: '8px',
                                    marginBottom: '0.5rem',
                                    boxShadow: 'inset 5px 5px 10px var(--neomorph-dark-shadow), inset -5px -5px 10px var(--neomorph-light-shadow)',
                                    background: 'var(--neomorph-base-dark)'
                                }}>
                                    <Image
                                        src={logoSeguridad}
                                        alt="Certificación en Seguridad Informática"
                                        width={200}
                                        height={160}
                                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                                    />
                                </div>
                                <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <h4 className="text-electric-green" style={{ margin: '0', fontSize: '0.95rem' }}>Seguridad Informática</h4>
                                    <p style={{ color: 'var(--text-medium-gray)', margin: '0', fontSize: '0.85rem' }}>CISCO</p>
                                    <p style={{ color: 'var(--text-muted-gray)', fontSize: '0.8rem' }}>Expedición: 2023</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="w-100 mt-4 p-3 neomorph-out-element">
                    <h3 className="fw-bold text-electric-green section-title-glow">Reconocimientos y Premios</h3>
                    <div className="p-3" style={{ backgroundColor: 'var(--neomorph-base-dark)' }}>
                        <div className="d-flex align-items-center mb-1">
                           
                            <div style={{ flexGrow: 1 }}>
                                <h4 className="text-electric-green" style={{ marginBottom: '0.5rem', margin: '0', fontSize: '1rem' }}>DIPLOMA DE HONOR</h4>
                                <p style={{ color: 'var(--text-medium-gray)', margin: '0', fontSize: '0.9rem' }}>Colegio Profesional de Maestros Mayores de Obras y Técnicos de la Arquitectura, Industria e Ingeniería de Santa Fe · dic. 2017</p>
                                <p style={{ color: 'var(--text-muted-gray)', fontSize: '0.85rem' }}>Mejor promedio informático en el colegio secundario.</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="w-100 mt-4 p-3 neomorph-out-element">
                    <h3 className="fw-bold text-electric-green section-title-glow">Idiomas</h3>
                    <div className=" p-3" >
                        <div className="d-flex align-items-center mb-1">
                            
                            <div style={{ flexGrow: 1 }}>
                                <h4 className="text-electric-green" style={{ marginBottom: '0.5rem', margin: '0', fontSize: '1rem' }}>Inglés</h4>
                                <p style={{ color: 'var(--text-medium-gray)', margin: '0', fontSize: '0.9rem' }}>Competencia básica</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="w-100 mt-4 p-3 neomorph-out-element">
                    <h3 className="fw-bold text-electric-green section-title-glow">Intereses</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
                        {['Educación', 'Política', 'Tecnología', 'Arte y Cultura'].map(interest => (
                            <span key={interest} className="skill-tag" style={{ padding: '6px 10px', fontSize: '0.85rem' }}>{interest}</span>
                        ))}
                    </div>
                </div>
            </div>
           
            <Modal
                isOpen={certModalIsOpen}
                onRequestClose={closeCertModal}
                style={{
                    content: {
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                        background: 'var(--neomorph-base-dark)',
                        border: 'none',
                        borderRadius: '15px',
                        padding: '1rem',
                        maxWidth: '90%', 
                        maxHeight: '90vh', 
                        overflow: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '10px 10px 20px var(--neomorph-dark-shadow), -10px -10px 20px var(--neomorph-light-shadow)'
                    },
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.95)',
                        zIndex: 1000 
                    }
                }}
            >
                <button
                    onClick={closeCertModal}
                    style={{
                        position: 'absolute',
                        top: '15px',
                        right: '15px',
                        background: 'none',
                        border: 'none',
                        fontSize: '2.5rem',
                        color: 'var(--text-light-gray)',
                        cursor: 'pointer',
                        zIndex: 1001 
                    }}
                >
                    &times;
                </button>
                {currentCertImage && (
                    <img
                        src={currentCertImage}
                        alt="Certificado en Modal"
                        style={{
                            maxWidth: '100%',
                            maxHeight: '80vh', 
                            objectFit: 'contain',
                            borderRadius: '10px'
                        }}
                    />
                )}
            </Modal>
        </div>
    );
};

export default MyJourney;