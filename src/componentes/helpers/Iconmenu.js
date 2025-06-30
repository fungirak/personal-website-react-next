import React from 'react';

const Iconmenu = ({ pos, logo, ruta }) => {
  return (
    <>
      <li className="nav efecto m-1 animate__animated animate__fadeInUp animate__delay-4s">
        <a href={ruta} onClick={pos} className="bg-transparent border border-0 efecto" style={{ display: 'block', padding: '0' }}>
          <img src={logo} className="icon-pres p-2" alt="..." />
        </a>
      </li>
    </>
  );
};

export default Iconmenu;