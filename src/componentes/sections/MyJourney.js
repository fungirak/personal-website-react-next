import React from 'react';


import utnLogo from '../../../public/img/update/LogoUTN.png'; 
import unlLogo from '../../../public/img/update/LogoUTN.png';
import gobiernoSantaFeLogo from '../../../public/img/update/LogoUTN.png'; 
import certificadoLogo from '../../../public/img/update/LogoUTN.png'; 
import premioLogo from '../../../public/img/update/LogoUTN.png'; 
import idiomaLogo from '../../../public/img/update/LogoUTN.png';

const MyJourney = () => {
    return (
        <div id="my-journey-section" className="full-width-section" style={{ marginBottom: '2rem' }}> 
            <h2 id="trayectoria-vision" className="text-center fw-normal neomorph-out-element text-electric-green section-title-glow" 
                style={{ marginBottom: '1.5rem', fontSize: '2rem', padding: '0.75rem 1.5rem', borderRadius: '15px', maxWidth: '300px', margin: '0 auto 1.5rem auto' }}> 
                Trayectoria y Visión
            </h2>
            <div className="d-flex justify-content-center mt-4 p-4 neomorph-out-element" style={{ flexDirection: 'column', alignItems: 'center', maxWidth: '1000px', margin: '0 auto' }}> 
                <p style={{ fontSize: '0.95rem', lineHeight: '1.5', textAlign: 'center', maxWidth: '700px', marginBottom: '1.5rem', color: 'var(--text-medium-gray)' }}> 
                    No me defino por un stack, ni por un título. Me defino por la forma en que abordo los problemas.
                    Mi herramienta es el código, mi impulso es la claridad. Soy una mente en construcción constante, que elige avanzar con propósito.
                    Trabajo en la frontera donde las ideas toman forma y se vuelven funcionales. Ahí me vas a encontrar.
                </p>

             
                <div className="row d-flex justify-content-center m-0 w-100"> 
                    <div className="col-md-4 m-2 p-3 rounded neomorph-out-element neomorph-card-hover-in" style={{ color: 'var(--text-medium-gray)', backgroundColor: 'var(--neomorph-base-dark)' }}> 
                        <h3 className="fw-bold text-electric-green" style={{fontSize: '1.1rem'}}>Lógico</h3> 
                        <p style={{fontSize: '0.9rem', lineHeight: '1.4'}}> 
                            Pienso en sistemas. Cada línea de código responde a un propósito. Me muevo con lógica, diseño con intención y entrego valor. No busco reinventar: busco que lo complejo funcione con simplicidad. Hablo de soluciones que viven, evolucionan y escalan.
                        </p>
                    </div>
                    <div className="col-md-4 m-2 p-3 rounded neomorph-out-element neomorph-card-hover-in" style={{ color: 'var(--text-medium-gray)', backgroundColor: 'var(--neomorph-base-dark)' }}>
                        <h3 className="fw-bold text-electric-green" style={{fontSize: '1.1rem'}}>Técnico</h3>
                        <p style={{fontSize: '0.9rem', lineHeight: '1.4'}}>
                            El desarrollo es estrategia. Entiendo el requerimiento antes de escribir. Sé cuándo optimizar, abstraer y entregar. Mi valor es anticipar problemas y construir pensando a futuro. Diseño para escalar, documento para el equipo, y entrego funcionalidad.
                        </p>
                    </div>
                    <div className="col-md-4 m-2 p-3 rounded neomorph-out-element neomorph-card-hover-in" style={{ color: 'var(--text-medium-gray)', backgroundColor: 'var(--neomorph-base-dark)' }}>
                        <h3 className="fw-bold text-electric-green" style={{fontSize: '1.1rem'}}>Pragmático</h3>
                        <p style={{fontSize: '0.9rem', lineHeight: '1.4'}}>
                            No idealizo herramientas; las uso. Mi enfoque es directo: resolver. Cada proyecto es un sistema a entender. Evito complejidad innecesaria. Prefiero soluciones limpias y estables. Desarrollo con criterio. Entregar bien y a tiempo es parte del producto.
                        </p>
                    </div>
                </div>

                <div className="w-100 mt-4 p-3 neomorph-out-element"> 
                    <h3 className="fw-bold text-electric-green">Más sobre mí y mi visión</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '1rem', color: 'var(--text-medium-gray)', fontSize: '0.9rem', lineHeight: '1.4' }}> 
                            <span className="text-electric-green">• 🎒 Stack y Propósito:</span> Mi kit de herramientas incluye **Spring Boot, Java, MySQL, React, Node y JavaScript**. Diseño soluciones innovadoras que abordan problemas sociales reales y generan un impacto significativo. No solo escribo código, construyo puentes hacia un futuro mejor.
                        </li>
                        <li style={{ marginBottom: '1rem', color: 'var(--text-medium-gray)', fontSize: '0.9rem', lineHeight: '1.4' }}>
                            <span className="text-electric-green">• 🧘🏻 Edad, Estrategia y Acción:</span> A mis **26 años**, he aprendido que cada desafío es una oportunidad. Mi enfoque es estratégico y mi acción decidida frente a las dificultades ha fortalecido mi autonomía y determinación.
                        </li>
                        <li style={{ marginBottom: '1rem', color: 'var(--text-medium-gray)', fontSize: '0.9rem', lineHeight: '1.4' }}>
                            <span className="text-electric-green">• 🌟 Liderazgo y Valores:</span> El verdadero liderazgo nace de competencia, control emocional y gestión óptima de recursos, incluyendo mis valores fundamentales. Lidero con el ejemplo y la integridad.
                        </li>
                        <li style={{ marginBottom: '1rem', color: 'var(--text-medium-gray)', fontSize: '0.9rem', lineHeight: '1.4' }}>
                            <span className="text-electric-green">• 🔥 Ambición e Innovación:</span> Expreso ambición bien dirigida y compromiso inquebrantable con la innovación. Siempre busco aportar valor real, impulsando nuevas ideas y soluciones que trasciendan lo convencional.
                        </li>
                        <li style={{ marginBottom: '0.5rem', color: 'var(--text-medium-gray)', fontSize: '0.9rem', lineHeight: '1.4' }}>
                            <span className="text-electric-green">• 🍀 Proyección e Influencia:</span> Mi plan a futuro es proyectar una influencia creciente y positiva a través de la tecnología. Busco inspirar, educar y contribuir a una comunidad tecnológica que evolucione constantemente.
                        </li>
                    </ul>
                </div>

                ---

              
                <div className="w-100 mt-4 p-3 neomorph-out-element"> 
                    <h3 className="fw-bold text-electric-green section-title-glow">Experiencia Laboral</h3>
                    <div className="neomorph-out-element" style={{ marginBottom: '1rem', backgroundColor: 'var(--neomorph-base-dark)' }}> 
                        <div className="d-flex align-items-center mb-1"> 
                            <div className="list-item-neomorph-icon" style={{width: '2em', height: '2em'}}> 
                                <img src={gobiernoSantaFeLogo} alt="Logo Gobierno de Santa Fe" />
                            </div>
                            <h4 className="text-electric-green" style={{ margin: '0', fontSize: '1rem' }}>Software Developer</h4>
                        </div>
                        <p style={{ color: 'var(--text-medium-gray)', margin: '0', fontSize: '0.9rem' }}>Gobierno de la Provincia de Santa Fe · Jornada completa</p>
                        <p style={{ color: 'var(--text-muted-gray)', fontSize: '0.85rem' }}>mar. 2022 - actualidad · 3 años 4 meses</p> 
                        <p style={{ color: 'var(--text-muted-gray)', fontSize: '0.85rem' }}>Santo Tomé, Santa Fe, Argentina</p>
                        <ul style={{ color: 'var(--text-medium-gray)', listStyle: 'disc', paddingLeft: '1.2rem', marginTop: '0.8rem', fontSize: '0.9rem' }}> 
                            <li><span className="text-electric-green">✏️ MINISTERIO DE EDUCACIÓN:</span> Interfaz visual con <span className="text-electric-green">React.js [SIPAU]</span>.</li>
                            <li><span className="text-electric-green">📂 MINISTERIO DE GOBIERNO:</span> Backend Java (JWT), Microservicio de patentes con <span className="text-electric-green">Spring, Maven y Oracle</span>.</li>
                            <li><span className="text-electric-green">🍃 MINISTERIO DE MEDIO AMBIENTE:</span> Desarrollo con <span className="text-electric-green">Symfony, PHP, Doctrine y Twig</span>.</li>
                        </ul>
                    </div>
                </div>

                ---

               
                <div className="w-100 mt-4 p-3 neomorph-out-element"> 
                    <h3 className="fw-bold text-electric-green section-title-glow">Aptitudes Clave</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
                        {['BACKEND', 'FRONTEND', 'React.js', 'MySQL', 'Oracle SQL Developer', 'Hibernate', 'API', 'Java', 'Mapeo objeto-relacional', 'Spring Framework', 'Spring Security', 'PHP', 'Git'].map(skill => (
                            <span key={skill} className="skill-tag" style={{padding: '6px 10px', fontSize: '0.85rem'}}>{skill}</span> 
                        ))}
                    </div>
                </div>

             

               
                <div className="w-100 mt-4 p-3 neomorph-out-element">
                    <h3 className="fw-bold text-electric-green section-title-glow">Educación</h3>
                    <div className="neomorph-out-element neomorph-glow-highlight" style={{ backgroundColor: 'var(--neomorph-base-dark)', marginBottom: '0.8rem' }}> 
                        <div className="d-flex align-items-center mb-1">
                            <div className="list-item-neomorph-icon" style={{width: '2em', height: '2em'}}>
                             
                                <img src={utnLogo} alt="Educación UTN" /> 
                            </div>
                            <h4 className="text-electric-green" style={{ margin: '0', fontSize: '1rem' }}>Universidad Tecnológica Nacional (Actual)</h4>
                        </div>
                        <p style={{ color: 'var(--text-medium-gray)', margin: '0', fontSize: '0.9rem' }}>Tecnicatura en Tecnologías de la Información, Desarrollo de Sistemas de Software</p>
                        <p style={{ color: 'var(--text-muted-gray)', fontSize: '0.85rem' }}>2023 - 2025 · A punto de recibirme.</p>
                        <p style={{ color: 'var(--text-medium-gray)', fontSize: '0.85rem' }}>Aptitudes: <span className="text-electric-green">Metodologías ágiles</span></p>
                    </div>
                    <div className="neomorph-out-element" style={{ backgroundColor: 'var(--neomorph-base-dark)', marginTop: '0.8rem' }}> 
                        <div className="d-flex align-items-center mb-1">
                            <div className="list-item-neomorph-icon" style={{width: '2em', height: '2em'}}>
                               
                                <img src={unlLogo} alt="Educación UNL" />
                            </div>
                            <h4 className="text-electric-green" style={{ margin: '0', fontSize: '1rem' }}>Universidad Nacional del Litoral</h4>
                        </div>
                        <p style={{ color: 'var(--text-medium-gray)', margin: '0', fontSize: '0.9rem' }}>Ingeniería en Informática</p>
                        <p style={{ color: 'var(--text-muted-gray)', fontSize: '0.85rem' }}>2021 - 2023</p>
                    </div>
                    <div className="neomorph-out-element" style={{ backgroundColor: 'var(--neomorph-base-dark)', marginTop: '0.8rem' }}>
                        <div className="d-flex align-items-center mb-1">
                            <div className="list-item-neomorph-icon" style={{width: '2em', height: '2em'}}>
                               
                                <img src={utnLogo} alt="Educación UTN" />
                            </div>
                            <h4 className="text-electric-green" style={{ margin: '0', fontSize: '1rem' }}>Universidad Tecnológica Nacional</h4>
                        </div>
                        <p style={{ color: 'var(--text-medium-gray)', margin: '0', fontSize: '0.9rem' }}>Ingeniería en Sistemas de Información</p>
                        <p style={{ color: 'var(--text-muted-gray)', fontSize: '0.85rem' }}>2018 - 2020</p>
                    </div>
                </div>

                

             
                <div className="w-100 mt-4 p-3 neomorph-out-element"> 
                    <h3 className="fw-bold text-electric-green section-title-glow">Licencias y Certificaciones</h3>
                    {[
                        { title: 'Cybersecurity Fundamentals', issuer: 'IBM', date: 'ago. 2024' },
                        { title: 'ORACLE ONE FullStack', issuer: 'Oracle', date: 'oct. 2022', skills: ['Desarrollo back end', 'SQL'] }, 
                        { title: 'Argentina Programa 2022 #YoProgramo', issuer: 'CESSI', date: 'sept. 2022', skills: ['FRONTEND', 'BACKEND'] }, 
                        { title: 'Cloud Computing', issuer: 'Google Actívate', date: 'jun. 2021' },
                        { title: 'Frontend Developer', issuer: 'LinkedIn', date: 'ene. 2021' },
                        { title: 'Full Stack Developer JavaScript', issuer: 'LinkedIn', date: 'ene. 2021' },
                    ].map((cert, index) => (
                        <div key={index} className="neomorph-out-element" style={{ backgroundColor: 'var(--neomorph-base-dark)', marginBottom: '0.8rem' }}> 
                            <div className="d-flex align-items-center mb-1">
                                <div className="list-item-neomorph-icon" style={{width: '2em', height: '2em'}}>
                                    <img src={certificadoLogo} alt="Certificado" />
                                </div>
                                <h4 className="text-electric-green" style={{ margin: '0', fontSize: '1rem' }}>{cert.title}</h4>
                            </div>
                            <p style={{ color: 'var(--text-medium-gray)', margin: '0', fontSize: '0.9rem' }}>{cert.issuer}</p>
                            <p style={{ color: 'var(--text-muted-gray)', fontSize: '0.85rem' }}>Expedición: {cert.date}</p>
                            {cert.skills && (
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginTop: '0.5rem' }}> 
                                    {cert.skills.map(skill => (
                                        <span key={skill} className="skill-tag" style={{padding: '4px 8px', fontSize: '0.8rem'}}>{skill}</span> 
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                

                
                <div className="w-100 mt-4 p-3 neomorph-out-element"> 
                    <h3 className="fw-bold text-electric-green section-title-glow">Reconocimientos y Premios</h3>
                    <div className="neomorph-out-element" style={{ backgroundColor: 'var(--neomorph-base-dark)' }}>
                        <div className="d-flex align-items-center mb-1">
                            <div className="list-item-neomorph-icon" style={{width: '2em', height: '2em'}}>
                                <img src={premioLogo} alt="Premio" />
                            </div>
                            <h4 className="text-electric-green" style={{ marginBottom: '0.5rem', margin: '0', fontSize: '1rem' }}>DIPLOMA DE HONOR</h4>
                        </div>
                        <p style={{ color: 'var(--text-medium-gray)', margin: '0', fontSize: '0.9rem' }}>Colegio Profesional de Maestros Mayores de Obras y Técnicos de la Arquitectura, Industria e Ingeniería de Santa Fe · dic. 2017</p> 
                        <p style={{ color: 'var(--text-muted-gray)', fontSize: '0.85rem' }}>Mejor promedio informático en el colegio secundario.</p>
                    </div>
                </div>

                ---

              
                <div className="w-100 mt-4 p-3 neomorph-out-element"> 
                    <h3 className="fw-bold text-electric-green section-title-glow">Idiomas</h3>
                    <div className="neomorph-out-element" style={{ backgroundColor: 'var(--neomorph-base-dark)' }}>
                        <div className="d-flex align-items-center mb-1">
                            <div className="list-item-neomorph-icon" style={{width: '2em', height: '2em'}}>
                                <img src={idiomaLogo} alt="Idioma" />
                            </div>
                            <h4 className="text-electric-green" style={{ marginBottom: '0.5rem', margin: '0', fontSize: '1rem' }}>Inglés</h4>
                        </div>
                        <p style={{ color: 'var(--text-medium-gray)', margin: '0', fontSize: '0.9rem' }}>Competencia básica</p>
                    </div>
                </div>

                ---

                
                <div className="w-100 mt-4 p-3 neomorph-out-element"> 
                    <h3 className="fw-bold text-electric-green section-title-glow">Intereses</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
                        {['Educación', 'Política', 'Tecnología', 'Arte y Cultura'].map(interest => ( 
                            <span key={interest} className="skill-tag" style={{padding: '6px 10px', fontSize: '0.85rem'}}>{interest}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyJourney;