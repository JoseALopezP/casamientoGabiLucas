import React from 'react';
import './index.css';

const Introduction = () => {
    return (
        <section className="introductionBlock parallax parallaxs1">
            <h4 className="dateBlock">09 | 12 | 22</h4>
            <div className='introductionNames'>
                <h1 className='introductionName1'>Gabi</h1>
                <h1 className='introductionNameAmp'>&</h1>
                <h1 className='introductionName2'>Lucas</h1>
            </div>
            <h4 className="bibleVerse">"Uno solo puede ser vencido pero dos pueden resistir. ¡la cuerda de tres hilos no se rompe fácilmente!" Eclesiastes 4, 12</h4>
        </section>
    );
}

export default Introduction;