import { useState, useEffect } from 'react'
import certificadoReact from '../../public/img/certificadoReact.png';
import certificadoPhp from '../../public/img/certificadoPhp.png';
import certificadoFullStack from '../../public/img/certificadoFullStack.png';
import certificadoMongoDB from '../../public/img/Curso-MongoDB.jpeg';
import certificadoArgPrograma1 from '../../public/img/certificadoArgPrograma1.png';

import Certificado from './helpers/Certificado';
import Banda from './helpers/Banda';

import Modal from 'react-modal'

const DescripcionEstudios = () => {
    const [currentImage, setCurrentImage] = useState()
    const [modalIsOpen, setModalIsOpen] = useState(false)

  
    useEffect(() => {
        Modal.setAppElement('body');
    })

     const modalHandler = (isOpen, image) => {
        setModalIsOpen(isOpen)
        setCurrentImage(image)
    }

    return (
        <div className="container  mb-5">
            <div className="mt-3 d-flex justify-content-center row">
                <h2 className="text-center fw-normal  mb-3 p-2 shadow-lg rounded-pill">Estudios Superiores</h2>
                    <div className="mt-2 d-flex justify-content-center">
                    <div class="loaderTitulo textLoaderTitulo"></div>
                        <h4 className=" text-center fst-normal">Tecnicatura Universitaria en Tecnologías de la Información</h4>
                    </div>
                    <h5 className=" text-center fw-lighter">Universidad Tecnológica Nacional</h5>
                <div className="row d-flex justify-content-center">
                    <div className="mt-5 mb-5 p-5 shadow rounded  justify-content-center" >
                        <div className="row col-sm-8 col-md-12 text-center">

                        <h5 className="text-center fw-bold mb-5">Algunas Certificaciones Extracurriculares:</h5>
                        <br></br>
                    
                            <Certificado certificado="/img/update/certificadoArgentinaPrograma.jpg" modH={modalHandler} titulo="CESSI" />
                            <Certificado certificado="/img/update/certificadoAzureAI.jpeg" modH={modalHandler} titulo="MICROSOFT"/>
                            <Certificado certificado="/img/update/certificadoCiscoCiberseguridad.jpg" modH={modalHandler} titulo="CISCO"/>
                            <Certificado certificado="/img/Curso-MongoDB.jpeg" modH={modalHandler} titulo="MONGODB UNIVERSITY"/>
                            <Certificado certificado="/img/update/certificadoOracleOneFullStack.png" modH={modalHandler} titulo="ORACLE" link="https://app.aluracursos.com/user/fungirak/fullCertificate/2e1c3d3b7d44e9a0db89f132d1130278"/>
                        
                        
                            <Modal isOpen={modalIsOpen}  onRequestClose={() => modalHandler(false, currentImage)} style={{content: {right: "18%", left: "18%", top: "0%"  } }} >
                                <img src={currentImage} alt="..."   className="diplomas"/>
                            </Modal>
                    
                        </div>
                    </div>
                </div>
            </div>

            <Banda seccion={'ESTUDIOS'} color={'light-blue accent-3 text-white'} />

        </div>
    )
}

export default DescripcionEstudios
