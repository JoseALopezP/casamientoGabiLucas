import React from 'react';
import './index.css';

const Introduction = () => {
    return (
        <section className="introductionBlock parallax parallaxs1">
            <h4 className="messageBlock">09 | 12 | 22</h4>
            <div className='introductionNames'>
                <h1 className='introductionName1'>Gabi</h1>
                <h1 className='introductionNameAmp'>&</h1>
                <h1 className='introductionName2'>Lucas</h1>
            </div>
            <h4 className="bibleVerse">"Uno solo puede ser vencido, pero dos pueden resistir. La cuerda de tres hilos no se rompe fácilmente."</h4>
            <h4 className="bibleVerse bibleVerse2">Eclesiastés 4, 12</h4>
        </section>
    );
}

export default Introduction;