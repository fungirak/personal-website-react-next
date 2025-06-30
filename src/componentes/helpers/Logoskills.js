import React from 'react';

const Logoskills = ({ url, logo, nombre, border }) => {
    return (
       
        <div className="col-md-2 col-sm-3 col-4 efecto mb-2"> 
            <div className={`card m-0 rounded neomorph-out-element neomorph-card-hover-in`} 
                 style={{ 
                    backgroundColor: 'var(--neomorph-base-dark)', 
                    border: 'none', 
                    height: 'auto', 
                    padding: '0.5rem'
                 }}>
                <button className="border-0 bg-transparent d-flex align-items-center justify-content-start w-100" 
                        style={{ padding: '0.2rem', cursor: 'pointer' }}> 
                    <a href={url} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
                        <img 
                            src={logo} 
                            alt={nombre} 
                            className="img-fluid" 
                            style={{ 
                                width: '2.2em', 
                                height: '2.2em', 
                                borderRadius: '5px', 
                                marginRight: '0.4em', 
                                boxShadow: '0 0 5px rgba(0,0,0,0.3)' 
                            }} 
                        />
                        <p className="mt-0 mb-0 text-electric-green" style={{ fontSize: '0.85rem' }}>{nombre}</p> 
                    </a>
                </button>
            </div>
        </div>
    );
};

export default Logoskills;