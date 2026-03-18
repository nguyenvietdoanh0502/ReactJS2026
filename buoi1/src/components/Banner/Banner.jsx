import React from "react";
import './Banner.css';

const Banner = () => {

  return (
    <>
        <section className="hero-section">
            <div className="hero-container">
                <div className="hero-content">
                    <h1>Promote Your App with SoftLand</h1>
                    <p>We are team of talented designers making websites with Bootstrap</p>
                    <div className="hero-buttons">
                        <a href="#" className="btn-store">
                            <i className="fab fa-google-play"></i> Google Play
                        </a>
                        <a href="#" className="btn-store">
                            <i className="fab fa-apple"></i> App Store
                        </a>
                    </div>
                </div>
                <div className="hero-images">
                    <img 
                        src="../../assets/phone_2.png" 
                        alt="App mockup back" 
                        className="phone-back" 
                    />
                    <img 
                        src="../../assets/phone_1.png" 
                        alt="App mockup front" 
                        className="phone-front" 
                    />
                </div>

            </div>
        </section>
    </>
  );
};

export default Banner; 