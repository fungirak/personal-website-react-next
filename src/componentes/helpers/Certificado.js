
import React from 'react';
const Certificado = ({ certificado, modH, titulo, link, imageStyle }) => {
    return (
        
        <div className="col-md-4 col-sm-6 col-12 efecto mb-3">
            <div className="neomorph-out-element neomorph-card-hover-in p-2 text-center" 
                 style={{ backgroundColor: 'var(--neomorph-base-dark)', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                <h5 className="text-electric-green mb-2" style={{ fontSize: '0.95rem' }}>{titulo}</h5>
                <button onClick={() => modH(true, certificado)} className="bg-transparent border-0" style={{ padding: '0.2rem', cursor: 'pointer' }}>
                    <a href={link ? link : null} target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
                        <img 
                            src={certificado} 
                            alt={`Certificado de ${titulo}`} 
                            className="img-fluid"
                            style={{ 
                                ...imageStyle, 
                                borderRadius: '8px',
                                boxShadow: '0 0 10px rgba(0,0,0,0.5)',
                                transition: 'transform 0.3s ease-in-out'
                            }} 
                        />
                    </a>
                </button>
            </div>
        </div>
    );
};

export default Certificado;