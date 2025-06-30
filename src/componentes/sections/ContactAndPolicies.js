import React, { useState, useEffect } from 'react';
import swal from 'sweetalert';
import Modal from 'react-modal';
import { FormControlLabel, Checkbox } from '@mui/material';

import logoGithub from '../../../public/img/logoGithub.svg'; 


const ContactAndPolicies = ({ posicionar, policyModalIsOpen, policyModalHandler }) => {
   
    const [boolCompleto, setBoolCompleto] = useState(false);
    const [boolPoliticas, setBoolPoliticas] = useState(true);
    const [datos, setDatos] = useState({
        asunto: '',
        nombre: '',
        apellido: '',
        company: '',
        website: '',
        emisor: '',
        telefono: '',
        mensaje: ''
    });

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        });
    };

    useEffect(() => {
        if (datos.asunto && datos.nombre && datos.apellido && datos.emisor && datos.mensaje && boolPoliticas) {
            setBoolCompleto(true);
        } else {
            setBoolCompleto(false);
        }
    }, [datos, boolPoliticas]);

    const enviarDatos = async (e) => {
        e.preventDefault();

        const confirmSend = await swal({
            title: "Confirmar Envío",
            text: "¡FUNGIRAK Agradece tu interés!",
            icon: "success",
            buttons: true,
        });

        if (confirmSend) {
            try {
                const response = await fetch('https://evening-ocean-33508.herokuapp.com/contacto', {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify(datos)
                });
                const data = await response.json();
                console.log(data);
                
                setDatos({
                    asunto: '', nombre: '', apellido: '', company: '', website: '', emisor: '', telefono: '', mensaje: ''
                });
                setBoolCompleto(false);
                swal({ title: "MENSAJE", text: "ENVIADO", icon: "success", buttons: false, timer: 1500 });
            } catch (error) {
                console.error("Error al enviar el formulario:", error);
                swal({ title: "Error", text: "Hubo un problema al enviar tu mensaje. Inténtalo de nuevo más tarde.", icon: "error", buttons: false, timer: 2000 });
            }
        } else {
            swal({ title: "Correo Electrónico", text: "NO ENVIADO", icon: "info", buttons: false, timer: 1000 });
        }
    };

    const handlePoliticas = () => {
        setBoolPoliticas(!boolPoliticas);
    };


    useEffect(() => {
        Modal.setAppElement('body');
    }, []);

    return (
        <>
            {/* --- SECCIÓN 6: CONTACTO --- */}
            <div id="contact-section" className="full-width-section" style={{ marginBottom: '2rem' }}>
                <h2 id="contacto" className="text-center fw-normal neomorph-out-element text-electric-green section-title-glow" 
                    style={{ marginBottom: '1.5rem', fontSize: '2rem', padding: '0.75rem 1.5rem', borderRadius: '15px', maxWidth: '300px', margin: '0 auto 1.5rem auto' }}>
                    Escribe un email
                </h2>
                <div className="container col-md-6 mb-3 mt-2 neomorph-out-element rounded p-4" style={{ color: 'var(--text-medium-gray)', maxWidth: '700px', margin: '0 auto' }}>
                    <div className="row">
                        <form className="col s12" onSubmit={enviarDatos} style={{ padding: '0 0.5rem' }}>
                            <div className="row">
                                <div className="input-field col s6">
                                    <input id="nombre" type="text" maxLength="64" pattern="[a-zA-ZñÑ ]{2,64}" className="validate neomorph-input-field"  required onChange={handleInputChange} name="nombre" value={datos.nombre} style={{ padding: '0.6rem 0.8rem', fontSize: '0.95rem' }} />
                                    <label htmlFor="nombre" className="neomorph-input-label" style={{ fontSize: '0.9rem' }}>Nombre *</label>
                                </div>
                                <div className="input-field col s6">
                                    <input id="apellido" type="text" maxLength="64" pattern="[a-zA-ZñÑ ]{2,64}" className="validate neomorph-input-field" required onChange={handleInputChange} name="apellido" value={datos.apellido} style={{ padding: '0.6rem 0.8rem', fontSize: '0.95rem' }} />
                                    <label htmlFor="apellido" className="neomorph-input-label" style={{ fontSize: '0.9rem' }}>Apellido *</label>
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="asunto" type="text" maxLength="64" className="validate neomorph-input-field" pattern="[a-zA-ZñÑ /.-_!¡¿?]{2,64}" required onChange={handleInputChange} name="asunto" value={datos.asunto} style={{ padding: '0.6rem 0.8rem', fontSize: '0.95rem' }} />
                                    <label htmlFor="asunto" className="neomorph-input-label" style={{ fontSize: '0.9rem' }}>Asunto *</label>
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-field col s12">
                                    <textarea id="mensaje" maxLength="222" required 
                                        className="materialize-textarea neomorph-input-field" 
                                        onChange={handleInputChange} name="mensaje" 
                                        value={datos.mensaje} data-length="222" 
                                        style={{ padding: '0.6rem 0.8rem', fontSize: '0.95rem', minHeight: '60px' }}></textarea>
                                    <label htmlFor="mensaje" className="neomorph-input-label" style={{ fontSize: '0.9rem' }}>Mensaje *</label>
                                    <span className="helper-text" data-error="Inválido" data-success="Válido" style={{ color: 'var(--text-muted-gray)', fontSize: '0.8rem' }}>222 caracteres máximo</span>
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-field col s6">
                                    <input id="emisor" type="email" pattern="^[^@]+@[^@]+\.[a-zA-Z]{2,}$" maxLength="64" className="validate neomorph-input-field" required onChange={handleInputChange} name="emisor" value={datos.emisor} style={{ padding: '0.6rem 0.8rem', fontSize: '0.95rem' }} />
                                    <label htmlFor="emisor" className="neomorph-input-label" style={{ fontSize: '0.9rem' }}>Email *</label>
                                </div>
                                <div className="input-field col s6">
                                    <input id="telefono" type="number" className="validate neomorph-input-field" onChange={handleInputChange} name="telefono" value={datos.telefono} style={{ padding: '0.6rem 0.8rem', fontSize: '0.95rem' }} />
                                    <label htmlFor="telefono" className="neomorph-input-label" style={{ fontSize: '0.9rem' }}>Teléfono (opcional)</label>
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-field col s6">
                                    <input id="company" type="text" pattern="[a-zA-Z0-9ñÑ.-_!¡¿?/ ]{2,64}" maxLength="64" className="validate neomorph-input-field" onChange={handleInputChange} name="company" value={datos.company} style={{ padding: '0.6rem 0.8rem', fontSize: '0.95rem' }} />
                                    <label htmlFor="company" className="neomorph-input-label" style={{ fontSize: '0.9rem' }}>Compañía (opcional)</label>
                                </div>
                                <div className="input-field col s6">
                                    <input id="website" type="text" maxLength="256" pattern="[a-zA-Z0-9ñÑ./_-$']{3,256}" className="validate neomorph-input-field" onChange={handleInputChange} name="website" value={datos.website} style={{ padding: '0.6rem 0.8rem', fontSize: '0.95rem' }} />
                                    <label htmlFor="website" className="fs-6 neomorph-input-label" style={{ fontSize: '0.9rem' }}>Sitio Web (opcional)</label>
                                </div>
                            </div>

                            <div className="neomorph-checkbox-container mt-2" style={{ padding: '8px 12px' }}>
                                <FormControlLabel 
                                    control={<Checkbox defaultChecked={boolPoliticas} color="success" onChange={handlePoliticas} style={{ color: 'var(--contrast-electric-green)', transform: 'scale(0.9)' }} />} 
                                    label="Acepto la Política de Privacidad" 
                                    style={{ color: 'var(--text-light-gray)', fontSize: '0.9rem' }} 
                                />
                            </div>

                            <div className="row col s12 text-center mt-3">
                                <button className={`btn waves-effect waves-light ${boolPoliticas && boolCompleto ? 'neomorph-button-highlight' : 'neomorph-link-button disabled'}`} type="submit" disabled={!boolCompleto} style={{ padding: '0.75rem 1.5rem', fontSize: '1rem' }}>
                                    <p className="fw-bold" style={{ color: boolPoliticas && boolCompleto ? 'var(--bg-dark-neomorph)' : 'var(--text-muted-gray)', margin: 0 }}>ENVIAR</p>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="espacio" style={{ height: '2rem' }}></div>

            {/* --- SECCIÓN 7: POLÍTICA DE PRIVACIDAD (CONTENIDO EN MODAL) --- */}
            <Modal isOpen={policyModalIsOpen} onRequestClose={() => policyModalHandler(false)} 
                style={{
                    content: { 
                        top: '50%', left: '50%', right: 'auto', bottom: 'auto',
                        marginRight: '-50%', transform: 'translate(-50%, -50%)',
                        width: '90%',
                        maxWidth: '900px',
                        maxHeight: '90vh',
                        overflowY: 'auto',
                        padding: '1.5rem'
                    },
                    overlay: { backgroundColor: 'rgba(0, 0, 0, 0.8)' }
                }} 
            >
                <div className="neomorph-out-element p-4" style={{ backgroundColor: 'var(--neomorph-base-dark)', color: 'var(--text-medium-gray)' }}>
                    <button 
                        onClick={() => policyModalHandler(false)} 
                        style={{ position: 'absolute', top: '10px', right: '10px', background: 'none', border: 'none', fontSize: '1.3rem', color: 'var(--text-light-gray)', cursor: 'pointer' }}
                        className="neomorph-icon-circle-button"
                    >
                        &times;
                    </button>
                    <h4 className="text-center mt-2 fw-normal rounded-pill neomorph-out-element text-electric-green section-title-glow" style={{ padding: '0.5rem 1rem', fontSize: '1.5rem', marginBottom: '1.5rem', maxWidth: '350px', margin: '0.5rem auto 1.5rem auto' }}>POLÍTICA DE PRIVACIDAD</h4>
                    <div className="row mt-2 p-1">
                        <p style={{ lineHeight: '1.7', fontSize: '0.95rem' }}>
                            <h2 className="text-center text-electric-green section-title-glow" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>POLÍTICA DE PRIVACIDAD DEL SITIO WEB</h2>
                            <h3 className="text-center" style={{ color: 'var(--text-light-gray)', fontSize: '1.1rem' }}>www.fungirak.com</h3>
                            <h4 className="mt-3 text-electric-green fw-bold" style={{ fontSize: '1rem' }}>I. POLÍTICA DE PRIVACIDAD Y PROTECCIÓN DE DATOS</h4>
                            <p style={{ userSelect: "none", color: 'var(--text-medium-gray)', fontSize: '0.9rem', marginBottom: '1rem' }}>Respetando lo establecido en la legislación vigente, FUNGIRAK WEBSITE (en adelante, también Sitio Web) se compromete a adoptar las medidas técnicas y organizativas necesarias, según el nivel de seguridad adecuado al riesgo de los datos recogidos.

                            <br/><br/>Leyes que incorpora esta política de privacidad:
                            Esta política de privacidad está adaptada a la normativa Argentina vigente en materia de protección de datos personales en internet. En concreto, la misma respeta la siguiente:

                            <br/><br/>**Ley 25.326**, relativo a la protección de los datos personales.
                            <br/><br/>Identidad del responsable del tratamiento de los datos personales
                            <br/>Dirección: Santo Tomé, Santa Fe, (Argentina)

                            <br/>Email de contacto: <a href="mailto:fungirak@gmail.com" className="text-electric-green">fungirak@gmail.com</a> <br/><br/>

                            Registro de Datos de Carácter Personal
                            En cumplimiento de lo establecido en las normativas vigentes, le informamos que los datos personales recabados por FUNGIRAK WEBSITE, mediante los formularios extendidos en sus páginas quedarán incorporados y serán tratados en nuestro fichero con el fin de poder facilitar, agilizar y cumplir los compromisos establecidos entre FUNGIRAK WEBSITE y el Usuario o el mantenimiento de la relación que se establezca en los formularios que este rellene, o para atender una solicitud o consulta del mismo. 

                            <br/><br/>Principios aplicables al tratamiento de los datos personales
                            El tratamiento de los datos personales del Usuario se someterá a los siguientes principios recogidos en la normativa vigente:

                            <br/><br/>**Principio de licitud, lealtad y transparencia:** se requerirá en todo momento el consentimiento del Usuario previa información completamente transparente de los fines para los cuales se recogen los datos personales.
                            <br/>**Principio de limitación de la finalidad:** los datos personales serán recogidos con fines determinados, explícitos y legítimos.
                            <br/>**Principio de minimización de datos:** los datos personales recogidos serán únicamente los estrictamente necesarios en relación con los fines para los que son tratados.
                            <br/>**Principio de exactitud:** los datos personales deben ser exactos y estar siempre actualizados.
                            <br/>**Principio de limitación del plazo de conservación:** los datos personales solo serán mantenidos de forma que se permita la identificación del Usuario durante el tiempo necesario para los fines de su tratamiento.
                            <br/>**Principio de integridad y confidencialidad:** los datos personales serán tratados de manera que se garantice su seguridad y confidencialidad.
                            <br/>**Principio de responsabilidad proactiva:** el Responsable del tratamiento será responsable de asegurar que los principios anteriores se cumplen.
                            <br/><br/>Categorías de datos personales
                            Las categorías de datos que se tratan en FUNGIRAK WEBSITE son únicamente datos identificativos. 

                            <br/><br/>Base legal para el tratamiento de los datos personales:
                            La base legal para el tratamiento de los datos personales es el consentimiento. FUNGIRAK WEBSITE se compromete a recabar el consentimiento expreso y verificable del Usuario para el tratamiento de sus datos personales para uno o varios fines específicos.

                            <br/><br/>El Usuario tendrá derecho a retirar su consentimiento en cualquier momento.

                            <br/><br/>En las ocasiones en las que el Usuario deba o pueda facilitar sus datos a través de formularios para realizar consultas, solicitar información o por motivos relacionados con el contenido del Sitio Web, se le informará en caso de que la cumplimentación de alguno de ellos sea obligatoria debido a que los mismos sean imprescindibles para el correcto desarrollo de la operación realizada.

                            <br/><br/>Fines del tratamiento a que se destinan los datos personales:
                            Los datos personales son recabados y gestionados por FUNGIRAK WEBSITE con la finalidad de poder facilitar, agilizar y cumplir los compromisos establecidos entre el Sitio Web y el Usuario o el mantenimiento de la relación que se establezca en los formularios que este último rellene o para atender una solicitud o consulta.

                            <br/><br/>Igualmente, los datos podrán ser utilizados con una finalidad comercial de personalización, operativa y estadística, y actividades propias del objeto social de FUNGIRAK WEBSITE, así como para la extracción, almacenamiento de datos y estudios de marketing para adecuar el Contenido ofertado al Usuario, así como mejorar la calidad, funcionamiento y navegación por el Sitio Web.


                            <br/><br/>Períodos de retención de los datos personales:
                            Los datos personales solo serán retenidos durante el tiempo mínimo necesario para los fines de su tratamiento y, en todo caso, únicamente durante el siguiente plazo: **10 años**, o hasta que el Usuario solicite su supresión.

                            <br/><br/>Destinatarios de los datos personales:
                            Los datos personales del Usuario no serán compartidos con terceros.

                            <br/><br/>Secreto y seguridad de los datos personales:
                            FUNGIRAK WEBSITE se compromete a adoptar las medidas técnicas y organizativas necesarias, según el nivel de seguridad adecuado al riesgo de los datos recogidos, de forma que se garantice la seguridad de los datos de carácter personal y se evite la destrucción, pérdida o alteración accidental o ilícita de datos personales transmitidos, conservados o tratados de otra forma, o la comunicación o acceso no autorizados a dichos datos.

                            <br/><br/>El Sitio Web cuenta con un **certificado SSL (Secure Socket Layer)**, que asegura que los datos personales se transmiten de forma segura y confidencial, al ser la transmisión de los datos entre el servidor y el Usuario, y en retroalimentación, totalmente cifrada o encriptada.

                            <br/><br/>Sin embargo, debido a que FUNGIRAK WEBSITE no puede garantizar la inexpugnabilidad de internet ni la ausencia total de hackers u otros que accedan de modo fraudulento a los datos personales, el Responsable del tratamiento se compromete a comunicar al Usuario sin dilación indebida cuando ocurra una violación de la seguridad de los datos personales que sea probable que entrañe un alto riesgo para los derechos y libertades de las personas físicas. Se entiende por violación de la seguridad de los datos personales toda violación de la seguridad que ocasione la destrucción, pérdida o alteración accidental o ilícita de datos personales transmitidos, conservados o tratados de otra forma, o la comunicación o acceso no autorizados a dichos datos.
                            </p>

                            <h4 className="mt-3 text-electric-green fw-bold" style={{ fontSize: '1rem' }}>II. ACEPTACIÓN Y CAMBIOS EN ESTA POLÍTICA DE PRIVACIDAD</h4>
                            <p style={{ color: 'var(--text-medium-gray)', fontSize: '0.9rem', marginBottom: '1rem' }}>Es necesario que el Usuario haya leído y esté conforme con las condiciones sobre la protección de datos de carácter personal contenidas en esta Política de Privacidad, así como que acepte el tratamiento de sus datos personales para que el Responsable del tratamiento pueda proceder al mismo en la forma, durante los plazos y para las finalidades indicadas. El uso del Sitio Web implicará la aceptación de la Política de Privacidad del mismo.

                            <br/><br/>FUNGIRAK WEBSITE se reserva el derecho a modificar su Política de Privacidad, de acuerdo a su propio criterio, o motivado por un cambio en la normativa vigente. Los cambios o actualizaciones de esta Política de Privacidad no serán notificados de forma explícita al Usuario. Se recomienda al Usuario consultar esta página de forma periódica para estar al tanto de los últimos cambios o actualizaciones.
                            </p>

                            <h6 className="text-center mt-4 text-electric-green" style={{ fontSize: '0.85rem' }}>TODOS LOS DERECHOS RESERVADOS.</h6>
                            <h6 className="text-center text-electric-green" style={{ fontSize: '0.85rem' }}>© {new Date().getFullYear()} FUNGIRAK.COM</h6>
                        </p>
                    </div>
                </div>
            </Modal>
            {/* --- FIN SECCIÓN 7: POLÍTICA DE PRIVACIDAD (CONTENIDO EN MODAL) --- */}

            {/* --- SECCIÓN 8: FOOTER GLOBAL --- */}

            {/* --- SECCIÓN 8: FOOTER GLOBAL --- */}
            <footer className="site-footer" style={{ padding: '1.5rem 0' }}>
                {/* Contenedor INTERNO para centralizar y limitar el ancho del contenido del footer */}
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}> 
                    <div className="row">
                        {/* Columna de Navegación */}
                        <div className="col-md-4 col-sm-6 footer-col" style={{ marginBottom: '1.5rem' }}>
                            <h5 className="footer-section-title" style={{ fontSize: '1.1rem', marginBottom: '0.8rem' }}>Navegación</h5>
                            <ul style={{ paddingLeft: '0' }}> {/* Cambiado de '1rem' a '0' si la lista está ya dentro de una columna con padding */}
                                <li><a href="#about-me-section" onClick={(e) => { e.preventDefault(); posicionar(document.getElementById('about-me-section').offsetTop); }} style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>Acerca de Mí</a></li>
                                <li><a href="#my-journey-section" onClick={(e) => { e.preventDefault(); posicionar(document.getElementById('my-journey-section').offsetTop); }} style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>Trayectoria y Visión</a></li>
                                <li><a href="#studies-certifications-section" onClick={(e) => { e.preventDefault(); posicionar(document.getElementById('studies-certifications-section').offsetTop); }} style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>Estudios y Certificaciones</a></li>
                                <li><a href="#skills-section" onClick={(e) => { e.preventDefault(); posicionar(document.getElementById('skills-section').offsetTop); }} style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>Skills</a></li>
                                <li><a href="#portfolio-section" onClick={(e) => { e.preventDefault(); posicionar(document.getElementById('portfolio-section').offsetTop); }} style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>Portafolio</a></li>
                                <li><a href="#contact-section" onClick={(e) => { e.preventDefault(); posicionar(document.getElementById('contact-section').offsetTop); }} style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>Contacto</a></li>
                                <li><a href="#" onClick={(e) => { e.preventDefault(); policyModalHandler(true); }} style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>Política de Privacidad</a></li>
                            </ul>
                        </div>

                        {/* Columna de Contacto Rápido */}
                        <div className="col-md-4 col-sm-6 footer-col" style={{ marginBottom: '1.5rem' }}>
                            <h5 className="footer-section-title" style={{ fontSize: '1.1rem', marginBottom: '0.8rem' }}>Contacto Rápido</h5>
                            <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>Email: <a href="mailto:fungirak@gmail.com" className="text-electric-green">fungirak@gmail.com</a></p>
                            <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>LinkedIn: <a href="https://ar.linkedin.com/in/gabriel-lazzarini" target="_blank" rel="noopener noreferrer" className="text-electric-green">/in/gabriel-lazzarini</a></p>
                            <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>GitHub: <a href="https://github.com/fungirak" target="_blank" rel="noopener noreferrer" className="text-electric-green">/fungirak</a></p>
                        </div>

                        {/* Columna de Sígueme */}
                        <div className="col-md-4 col-sm-12 footer-col" style={{ marginBottom: '1.5rem' }}>
                            <h5 className="footer-section-title" style={{ fontSize: '1.1rem', marginBottom: '0.8rem' }}>Sígueme</h5>
                            <div className="social-icons" style={{ gap: '10px', display: 'flex' }}> {/* Asegurar display flex para el gap */}
                                <a href="https://github.com/fungirak" target="_blank" rel="noopener noreferrer" title="GitHub"><img src={logoGithub.src} alt="GitHub" style={{ width: '25px', height: '25px', filter: 'brightness(0) invert(1)' }} /></a>
                                <a href="https://ar.linkedin.com/in/gabriel-lazzarini" target="_blank" rel="noopener noreferrer" title="LinkedIn"><img src="https://upload.wikimedia.org/wikipedia/commons/f/f8/LinkedIn_icon_2.svg" alt="LinkedIn" style={{ width: '25px', height: '25px', filter: 'brightness(0) invert(1)' }} /></a>
                            </div>
                            <p className="mt-2" style={{ color: 'var(--text-muted-gray)', fontSize: '0.85rem' }}>
                                Estoy siempre abierto a nuevas conexiones y proyectos. ¡No dudes en contactarme!
                            </p>
                        </div>
                    </div>
                    <div className="row"> {/* Esta fila es para el texto inferior de copyright */}
                        <div className="col-12 text-center footer-bottom-text" style={{ paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                            <p style={{ fontSize: '0.8rem', marginBottom: '0.3rem' }}>&copy; {new Date().getFullYear()} Gabriel Lazzarini. Todos los derechos reservados.</p>
                            <p style={{ fontSize: '0.8rem', marginBottom: '0' }}>Diseñado y desarrollado con pasión por FUNGIRAK</p>
                        </div>
                    </div>
                </div> {/* Cierre del contenedor INTERNO */}
            </footer>
        </>
    );
};

export default ContactAndPolicies;