import React from 'react';
import './SectionEight.scss';

const SectionEight = () =>{
    return(
        <footer className="container-footer">
            <div className="half footer-left">
                <h2 className="footer-title">COME ON IN!</h2>
                <h3 className="footer-sub-t">WEEKDAYS</h3>
                <p className="footer-text">08pm - 12am</p>
                <h3 className="footer-sub-t">WEEKENDS</h3>
                <p className="footer-text">12pm - 02am</p>
                <h4 className="browse-menu">BROWSE MENU</h4>
            </div>
            <div className="half footer-right">
                <h2 className="footer-title">CONTACT</h2>
                <h3 className="footer-sub-t">PHONE</h3>
                <p className="footer-text">(011) 4331 2200</p>
                <h3 className="footer-sub-t">MAIL</h3>
                <p className="footer-text">dperezlaborda@gmail.com</p>
                <h3 className="footer-sub-t">ADDRESS</h3>
                <p className="footer-text">171 Lake Washington Blvd, Seattle</p>
            </div>
        </footer>
    );
}

export default SectionEight;