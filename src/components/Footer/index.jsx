import './index.css'
import React from 'react';

const Footer = () => {
    return (
        <div className='footerBlock'>
            <h5> Por favor, recordá confirmar tu asistencia antes del 26 de noviembre</h5>
            <p>¡Te esperamos para compartir este momento tan importante de nuestras vidas! </p>
            <p>Gabi & Lucas</p>
            <div className="contactInfo">
                <p className='contactMsg'>Por cualquier duda o modificación, podés contactarte con cualquiera de nosotros a nuestros números de celular:</p>
                <p className='contactGabi'>264-45475366 (Gabi)</p>
                <p className='contactLucas'>264-5868113 (Lucas)</p>
            </div>
        </div>
    );
}

export default Footer;
