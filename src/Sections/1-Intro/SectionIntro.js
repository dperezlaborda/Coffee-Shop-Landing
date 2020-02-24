import React from 'react';
import './SectionIntro.scss';

const SectionIntro = () =>{
    return(
        <section className="intro-image">
            <div className= "text-container">
                <h1 className="title">Portwell, Inc.</h1>
                <h2 className="sub">Serving only the best since 2019</h2>
                <h3 className="explore">E X P L O R E</h3>
            </div>
            <span>
                <i className="fa fa-arrow-down" aria-hidden="true">
                </i>
            </span>
        </section>
    )
};

export default SectionIntro;