import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Prices.css';

const Prices = () => {
  return (
    <>
      <Header />
      <div className="page-content prices-body">
        <div className="prices-container">
          <h1 className="prices-title">Priser</h1>
          <p>
            Vi erbjuder konkurrenskraftiga priser baserade på hur ofta din hund vistas hos oss.
          </p>
          <p>
            <strong>Heltid (5 dagar/vecka):</strong> 3 800 kr/månad  
            <br />
            <strong>Deltid (3 dagar/vecka):</strong> 2 700 kr/månad  
            <br />
            <strong>Enstaka dagar:</strong> 320 kr/dag
          </p>
          <p>
            I alla alternativ ingår promenader, rastning, lek och vila i trygga lokaler.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Prices;
