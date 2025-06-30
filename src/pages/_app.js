import React from 'react';
import dynamic from 'next/dynamic';
import '@/styles/globals.css';
import '@/componentes/materialize/css/materialize.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const DynamicApp = dynamic(() => import('../componentes/App'), { ssr: false });

export default function App({ Component, pageProps }) {
  
  if (typeof document !== 'undefined') {
   
  }

  return (
    <div>
      <DynamicApp/>
    </div>
  );
}