import React from 'react';

const IconPerfil = ({ pos, logo, ruta, className, style, imageStyle }) => {
  return (
    <>
     
      <li className={`nav efecto m-1 animate__animated animate__fadeInUp animate__delay-1s ${className || ''}`} style={style}>
        <a 
          href={ruta} 
          onClick={pos} 
          className="bg-transparent border border-0 efecto" 
          style={{ display: 'block', padding: '0', cursor: 'pointer' }} 
        >
          
          <img src={logo} className="icon-pres p-2" alt="..." style={imageStyle} />
        </a>
      </li>
    </>
  );
};

export default IconPerfil;