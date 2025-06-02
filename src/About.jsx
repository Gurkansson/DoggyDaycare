import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './About.css';

const About = () => {
  return (
    <>
      <Header />
      <div className="page-content about-body">
        <div className="about-container">
          <h1 className="about-title">Om Oss</h1>
          <p>
            Vi har utbildad personal som arbetar med hundar i små grupper för att ge individuell uppmärksamhet och trygghet. 
            Våra lokaler är anpassade för både lek, vila och motion.
          </p>
          <p>
            Vi är övertygade om att en glad hund är en frisk hund. Därför erbjuder vi en miljö där hundar får leka fritt, 
            knyta band med andra och känna sig älskade.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
