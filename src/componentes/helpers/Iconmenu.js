import React from 'react';
import { Link } from "react-router-dom";
import Image from 'next/image';

const Iconmenu = ({pos, logo, ruta}) => {
  return <div>
      <>
      <li className="nav efecto m-1 animate__animated animate__fadeInUp animate__delay-4s">
            <Link to={ruta}>
                <button className="m-1 bg-transparent border border-0 efecto" onClick={pos} >
                    <Image width="10" height="10" src={logo} className="icon-pres  p-2" alt="..." />
                </button>
            </Link>
      </li>
      </>
  </div>;
};

export default Iconmenu;
