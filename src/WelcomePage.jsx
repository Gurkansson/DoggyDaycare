import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './WelcomePage.css';

const WelcomePage = () => {
  return (
    <>
      <Header />
      <div className="page-content welcome-body">
        <div className="welcome-container">
          <h2 className="welcome-title">Välkommen till Doggy Daycare</h2>
          <p className="welcome-text">Här tar vi hand om din fyrbenta vän!</p>

          <nav className="welcome-nav">
            <Link to="/ansok" className="nav-link">Ansök om dagisplats</Link>
            <Link to="/priser" className="nav-link">Priser</Link>
            <Link to="/om-oss" className="nav-link">Om oss</Link>
            <Link to="/dogs" className="nav-link">Se våra dagishundar</Link>
          </nav>

          <p>
            På Doggy Daycare älskar vi hundar! Vår passion är att ge alla hundar den bästa upplevelsen medan deras ägare är borta.
          </p>

          <img
            src="https://plus.unsplash.com/premium_photo-1679521026472-5f9348b7803a?w=900&auto=format&fit=crop&q=60"
            alt="Hundar som leker"
            className="welcome-image"
          />

          <h3>En trygg och rolig miljö</h3>
          <p>
            Vi erbjuder en trygg och rolig miljö där varje hund får sin egen plats att känna sig hemma.
          </p>

          <img
            src="https://images.unsplash.com/photo-1638766211363-96560786b7c1?q=80"
            alt="Hundar på äventyr"
            className="welcome-image"
          />

          <h3>Vår hängivenhet</h3>
          <p>
            Vårt dedikerade team består av hundälskare med stor erfarenhet. Vi erbjuder skräddarsydda program för varje hund.
          </p>

          <img
            src="https://wallpapers.com/images/high/dogs-background-g9y08bcelqthsede.webp"
            alt="Bakgrund av glada hundar"
            className="welcome-image"
          />

          <p>
            Vi ser fram emot att träffa dig och din hund! Kontakta oss för att boka en rundtur eller få mer information.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WelcomePage;
