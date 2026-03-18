import React from "react";
import './Footer.css';

const Footer = () => {

  return (
    <>
        <footer className="site-footer">
            <div className="footer-container">
                <h2 className="footer-logo">SoftLand</h2>
                <p className="footer-description">
                    Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.
                </p>
                <div className="social-links">
                    <a href="#" className="social-icon"><span style={{ fontWeight: 'bold' }}>X</span></a>
                    <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="social-icon"><i className="fab fa-skype"></i></a>
                    <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <div className="footer-bottom">
                    <div className="copyright">
                        &copy; Copyright <strong>SoftLand</strong> All Rights Reserved
                    </div>
                    <div className="credits">
                        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                    </div>
                </div>
            </div>
            <a href="#" className="back-to-top">
                <i className="fas fa-arrow-up"></i>
            </a>
        </footer>
    </>
  );
};

export default Footer; 