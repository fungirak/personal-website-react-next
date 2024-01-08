import React from 'react';

const Certificado = ({certificado, modH, titulo, link }) => {
  return <div className="col-md-4 efecto">
            <h5>{titulo}</h5>
                  <button onClick={() => modH(true, certificado)} className="mb-4 border border-0 bg-transparent">
                        <a href={link ? link : null} target="_blank">
                              <img src={certificado} alt="" className="certificado shadow-lg" />
                        </a>
                  </button>
            
      </div>;
};

export default Certificado;
