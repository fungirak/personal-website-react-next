import Head from 'next/head';


import App from '../componentes/App'; 



export default function Home() {
  return (
    <>
      <Head>
        <title>Gabriel Lazzarini - Desarrollador Full Stack</title>
        <meta name="description" content="Portfolio y perfil de Gabriel Lazzarini, desarrollador de software Full Stack. Explorá proyectos, habilidades y contacta." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" /> 
      </Head>
      <main className="black-background">
        <App />
      </main>
    </>
  );
}