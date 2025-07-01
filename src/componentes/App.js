
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal'; 


import Portada from './Portada'; 
import AboutMe from './sections/AboutMe';
import MyJourney from './sections/MyJourney';
import Portfolio from './sections/Portfolio';
import ContactAndPolicies from './sections/ContactAndPolicies'; 


const posicionar = (y) => {
    window.scroll({ top: y, behavior: 'smooth' });
};

export default function App() {
  
    const [policyModalIsOpen, setPolicyModalIsOpen] = useState(false);

   
    const policyModalHandler = (isOpen) => {
        setPolicyModalIsOpen(isOpen);
    };

    
    useEffect(() => {
        Modal.setAppElement('body');
    }, []);

    return (
        <div id="main-app-container">
          
            <Portada />
            
            <AboutMe 
                posicionar={posicionar} 
                policyModalHandler={policyModalHandler} 
            />
            <div className="espacio spacing-lg"></div> 
            
            <MyJourney />
            <div className="espacio spacing-lg"></div> 

           

            <Portfolio />
            <div className="espacio spacing-lg"></div> 

            <ContactAndPolicies 
                posicionar={posicionar} 
                policyModalIsOpen={policyModalIsOpen} 
                policyModalHandler={policyModalHandler} 
            />
           
        </div>
    );
}