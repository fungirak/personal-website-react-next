import { useState, useEffect, useRef } from 'react';
import swal from 'sweetalert';


const Comentarios = () => {
    const [todoEnPantalla, setTodoEnPantalla] = useState(false);
    const [completo, setCompleto] = useState(false);
    const [enviado, setEnviado] = useState(false); 
    const [comentariosMostrados, setComentariosMostrados] = useState([]);
    const [comentariosCompletos, setComentariosCompletos] = useState([]); 
    const [contador, setContador] = useState(3); 

    const [comentarioForm, setComentarioForm] = useState({
        nombre: '',
        apellido: '',
        comentarioUsuario: ''
    });

    const handleInputChange = (event) => {
        setComentarioForm({
            ...comentarioForm,
            [event.target.name]: event.target.value
        });
    };

    // Habilita el botón Enviar.
    useEffect(() => {
        if (comentarioForm.nombre && comentarioForm.apellido && comentarioForm.comentarioUsuario) {
            setCompleto(true);
        } else {
            setCompleto(false);
        }
    }, [comentarioForm]);

    const enviarDatos = async (e) => {
        e.preventDefault();

        const confirmSend = await swal({
            title: 'Confirmar Envío',
            text: 'fungirak.com le agradece su comentario',
            icon: 'success',
            buttons: true
        });

        if (confirmSend) {
            try {
                
                if (typeof window !== 'undefined' && window.M && window.M.toast) {
                    window.M.toast({html: 'COMENTARIO ENVIADO', classes: 'rounded bg-dark fs-5 fixed-top d-flex justify-content-center mx-auto' ,displayLength: 1500 });
                }

                swal({ title: 'Comentario', text: 'ENVIADO', icon: 'success', buttons: false, timer: 1500 });

                setComentarioForm({
                    nombre: '',
                    apellido: '',
                    comentarioUsuario: ''
                });
                setCompleto(false);
                setEnviado(prev => !prev); 
            } catch (error) {
                console.error("Error al enviar el comentario:", error);
                swal({ title: 'Error', text: 'Hubo un problema al enviar tu comentario.', icon: 'error', buttons: false, timer: 2000 });
            }
        } else {
            swal({ title: 'Comentario', text: 'NO ENVIADO', icon: 'info', buttons: false, timer: 1000 });
        }
    };

    const obtenerComentarios = async () => {
        console.log('Se ejecuta función obtenerComentarios()');
        try {
          
        } catch (error) {
            console.error("Error al obtener comentarios:", error);
           
        }
    };

    useEffect(() => {
        obtenerComentarios();
    }, [enviado]); 

   
    useEffect(() => {
        if (comentariosCompletos.length > 0) {
            const currentDisplayed = comentariosCompletos.slice(0, contador);
            setComentariosMostrados(currentDisplayed);
            setTodoEnPantalla(contador >= comentariosCompletos.length); 
        } else {
            setComentariosMostrados([]); 
            setTodoEnPantalla(true); 
        }
    }, [comentariosCompletos, contador]);

    const handleVerMas = () => {
        setContador(prev => prev + 3); 
    };

    
    useEffect(() => {
        if (typeof window !== 'undefined' && window.M && window.M.CharacterCounter) {
            const textarea = document.querySelector('#comentarioUsuario');
            if (textarea) {
                window.M.CharacterCounter.init(textarea);
            }
        }
    }, []);

    return (
        <div className="" style={{ marginBottom: '2rem' }}>
            <div className="neomorph-out-element p-4" style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <h3 className="text-center fw-normal neomorph-out-element text-electric-green section-title-glow" 
                    style={{ marginBottom: '0.5rem', fontSize: '1.5rem', padding: '0.6rem 1rem', borderRadius: '12px', maxWidth: '250px', margin: '0 auto' }}>
                    Haz un comentario
                </h3>
                
                <div className="row justify-content-center m-0 p-0 w-100">
                    <form className="col s12" onSubmit={enviarDatos} style={{ padding: '0 0.5rem' }}>
                        <div className="row m-0 p-0" style={{ marginBottom: '0.5rem' }}>
                            <div className="input-field col s6">
                                <input id="nombre" type="text" maxLength="64" pattern="[a-zA-ZñÑ ]{2,64}" 
                                    className="validate neomorph-input-field" required onChange={handleInputChange} 
                                    name="nombre" value={comentarioForm.nombre} 
                                    style={{ padding: '0.6rem 0.8rem', fontSize: '0.95rem' }} />
                                <label htmlFor="nombre" className="neomorph-input-label" style={{ fontSize: '0.9rem' }}>Nombre *</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="apellido" type="text" maxLength="64" pattern="[a-zA-ZñÑ ]{2,64}" 
                                    className="validate neomorph-input-field" required onChange={handleInputChange} 
                                    name="apellido" value={comentarioForm.apellido} 
                                    style={{ padding: '0.6rem 0.8rem', fontSize: '0.95rem' }} />
                                <label htmlFor="apellido" className="neomorph-input-label" style={{ fontSize: '0.9rem' }}>Apellido *</label>
                            </div>
                        </div>

                        <div className="row m-0 p-0" style={{ marginBottom: '0.5rem' }}>
                            <div className="input-field col s12">
                                <textarea id="comentarioUsuario" maxLength="222" required 
                                    className="materialize-textarea neomorph-input-field" 
                                    onChange={handleInputChange} name="comentarioUsuario" 
                                    value={comentarioForm.comentarioUsuario} data-length="222" 
                                    style={{ padding: '0.6rem 0.8rem', fontSize: '0.95rem', minHeight: '60px' }}></textarea>
                                <label htmlFor="comentarioUsuario" className="neomorph-input-label" style={{ fontSize: '0.9rem' }}>Comentario *</label>
                                <span className="helper-text" data-error="Inválido" data-success="Válido" style={{ color: 'var(--text-muted-gray)', fontSize: '0.8rem' }}>222 caracteres máximo</span>
                            </div>
                        </div>

                        <div className="row col s12 text-center m-0 p-0" style={{ marginTop: '0.8rem' }}>
                            <button className={`btn waves-effect waves-light ${completo ? 'neomorph-button-highlight' : 'neomorph-link-button disabled'}`} type="submit" disabled={!completo}
                                style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}>
                                <p className="fw-bold" style={{ color: completo ? 'var(--bg-dark-neomorph)' : 'var(--text-muted-gray)', margin: 0 }}>ENVIAR</p>
                            </button>
                        </div>
                    </form>
                </div>

              
                <h3 className="text-center fw-normal neomorph-out-element text-electric-green section-title-glow" 
                    style={{ marginTop: '1.5rem', marginBottom: '0.5rem', fontSize: '1.5rem', padding: '0.6rem 1rem', borderRadius: '12px', maxWidth: '250px', margin: '1.5rem auto 0.5rem auto' }}>
                    Comentarios
                </h3>
                <div className="row justify-content-center m-0 p-0 w-100" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {comentariosMostrados.length > 0 ? (
                        comentariosMostrados.map((comentario) => (
                            <div className="row m-0 p-0 w-100" key={comentario._id} style={{ marginBottom: '0.8rem' }}>
                                <div className="col-12 d-flex neomorph-out-element p-3 rounded" style={{ backgroundColor: 'var(--neomorph-base-dark)' }}>
                                    <div className="col-1 mt-1 ms-2" style={{ flexShrink: 0, width: 'auto' }}>
                                       
                                        <i className="material-icons" style={{ color: 'var(--text-light-gray)', fontSize: '1.8rem' }}>account_circle</i>
                                    </div>
                                    <div className="col-11 ms-3" style={{ flexGrow: 1 }}>
                                        <div className="text-electric-green fw-bold mt-1" style={{ fontSize: '0.9rem' }}>
                                            <span>{comentario.nombre}</span> <span>{comentario.apellido}</span>
                                        </div>
                                        <div className="">
                                            <p style={{ fontSize: '0.85rem', lineHeight: '1.4', margin: '0.2rem 0' }}>{comentario.comentarioUsuario}</p>
                                            <div className="col-12 text-end" style={{ marginTop: '0.5rem' }}>
                                                <span className="text-muted" style={{ fontSize: '0.75rem' }}>Publicado el {comentario.createdAt}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center" style={{ color: 'var(--text-muted-gray)', fontSize: '0.9rem' }}>No hay comentarios aún. ¡Sé el primero en dejar uno!</p>
                    )}
                </div>

              
                {comentariosCompletos.length > 0 && !todoEnPantalla && (
                    <div className="row justify-content-center m-0 p-0 w-100" style={{ marginTop: '1.5rem' }}>
                        <button className="neomorph-link-button" onClick={handleVerMas} style={{ maxWidth: '180px', padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}>
                            VER MÁS
                        </button>
                    </div>
                )}
                {comentariosCompletos.length > 0 && todoEnPantalla && (
                    <p className="text-center" style={{ color: 'var(--text-muted-gray)', fontSize: '0.85rem', marginTop: '1rem' }}>Todos los comentarios cargados.</p>
                )}
            </div>
        </div>
    );
};

export default Comentarios;