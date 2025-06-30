import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

import certifUx from '../../../public/img/update/certif-ux.png'; 
import certifSeguridad from '../../../public/img/update/certif-seguridad.jpg'; 
import certifYoprogramo from '../../../public/img/update/certif-yoprogramo.jpg'; 
import certifMetodologias from '../../../public/img/update/certif-metodologias.png'; 

import Certificado from '../helpers/Certificado'; 

const StudiesAndCertifications = () => {
    const [currentImage, setCurrentImage] = useState();
    const [certModalIsOpen, setCertModalIsOpen] = useState(false);

    useEffect(() => {
        Modal.setAppElement('body');
    }, []);

    const certModalHandler = (isOpen, image) => {
        setCertModalIsOpen(isOpen);
        setCurrentImage(image);
    };

    return (
        <div id="studies-certifications-section" className="full-width-section" style={{ marginBottom: '2rem' }}>
            <h2 id="estudios-certificaciones" className="text-center fw-normal neomorph-out-element text-electric-green section-title-glow" 
                style={{ marginBottom: '1.5rem', fontSize: '2rem', padding: '0.75rem 1.5rem', borderRadius: '15px', maxWidth: '300px', margin: '0 auto 1.5rem auto' }}>
                Estudios y Certificaciones
            </h2>
            <div className="mt-3 d-flex justify-content-center row">
                <div className="mt-2 d-flex justify-content-center align-items-center">
                    <div className="loaderTitulo"></div>
                    <h4 className="text-center fst-normal" style={{ color: 'var(--text-light-gray)', fontSize: '1rem' }}>Tecnicatura Universitaria en Tecnologías de la Información</h4>
                </div>
                <h5 className="text-center fw-lighter text-electric-green" style={{ fontSize: '1rem', marginBottom: '1rem' }}>Universidad Tecnológica Nacional</h5>
                <div className="row d-flex justify-content-center">
                    <div className="mt-4 mb-4 p-4 neomorph-out-element justify-content-center" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                        <div className="row col-sm-8 col-md-12 text-center">
                            <h5 className="text-center fw-bold mb-4 text-electric-green" style={{fontSize: '1rem'}}>Algunas Certificaciones Extracurriculares:</h5>
                            <br></br>
                            
                            <Certificado certificado={certifUx} modH={certModalHandler} titulo="Diseño UX/UI" imageStyle={{width: '100px', height: '100px', objectFit: 'contain'}}/>
                            <Certificado certificado={certifSeguridad} modH={certModalHandler} titulo="Ciberseguridad" imageStyle={{width: '100px', height: '100px', objectFit: 'contain'}}/>
                            <Certificado certificado={certifYoprogramo} modH={certModalHandler} titulo="Argentina Programa" imageStyle={{width: '100px', height: '100px', objectFit: 'contain'}}/>
                            <Certificado certificado={certifMetodologias} modH={certModalHandler} titulo="Metodologías Ágiles" imageStyle={{width: '100px', height: '100px', objectFit: 'contain'}}/>
                            <Modal isOpen={certModalIsOpen} onRequestClose={() => certModalHandler(false, currentImage)} 
                                style={{
                                    content: { 
                                        right: "5%", left: "5%", top: "5%", bottom: "5%",
                                        maxWidth: '1200px',
                                        marginRight: 'auto', marginLeft: 'auto',
                                        transform: 'none',
                                        padding: '1rem'
                                    },
                                    overlay: { backgroundColor: 'rgba(0, 0, 0, 0.95)' }
                                }} 
                            >
                                <button 
                                    onClick={() => certModalHandler(false)} 
                                    style={{ 
                                        position: 'absolute', top: '10px', right: '10px', 
                                        background: 'none', border: 'none', fontSize: '2rem', 
                                        color: 'var(--text-light-gray)', cursor: 'pointer',
                                        zIndex: 100
                                    }}
                                >
                                    &times;
                                </button>
                                <img src={currentImage} alt="Certificado en Modal" className="diplomas" style={{maxWidth: '100%', maxHeight: '85vh', objectFit: 'contain', borderRadius: '10px'}}/>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudiesAndCertifications;