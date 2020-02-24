import React from 'react';
import './SectionEight.scss';

const SectionEight = () =>{
    return(
        <footer className="container-footer">
            <div className="half footer-left">
                <h2>COME ON IN!</h2>
                <h3>WEEKDAYS</h3>
                <p>08pm - 12am</p>
                <h3>WEEKENDS</h3>
                <p>12pm - 02am</p>
                <h4>BROWSE MENU</h4>
            </div>
            <div className="half footer-right">
                <h2>CONTACT</h2>
                <h3>PHONE</h3>
                <p>(011) 4331 2200</p>
                <h3>MAIL</h3>
                <p>dperezlaborda@gmail.com</p>
                <h3>ADDRESS</h3>
                <p>171 Lake Washington Blvd, Seattle</p>
            </div>
        </footer>
    );
}

export default SectionEight;