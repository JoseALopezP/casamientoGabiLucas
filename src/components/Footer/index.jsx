import './index.css'
import React from 'react';

const Footer = () => {
    return (
        <div className='footerBlock'>
            <div className="footerMsg">
                <h5 className='greenPart'> Por favor, recordá confirmar tu asistencia antes del 17 de noviembre</h5>
                <p className='greenPart'>¡Te esperamos para compartir este momento tan importante de nuestras vidas! </p>
                <p className='goldenPart'>Gabi & Lucas</p>
            </div>
            <div className="contactInfo">
                <p className='contactMsg'>Por cualquier duda o modificación, podés contactarte con cualquiera de nosotros a nuestros números de celular:</p>
                <p className='contactGabi'>264-5475366 (Gabi)</p>
                <p className='contactLucas'>264-5868113 (Lucas)</p>
            </div>
        </div>
    );
}

export default Footer;
