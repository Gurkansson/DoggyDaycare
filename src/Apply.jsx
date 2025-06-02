import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Apply.css';

const Apply = () => {
  return (
    <>
      <Header />
      <div className="page-content apply-body">
        <div className="apply-container">
          <h1 className="apply-title">Ansök om plats</h1>
          <p>
            Välkommen att ansöka om dagisplats för din hund! Fyll i vårt formulär eller kontakta oss via mejl.
          </p>
          <ol>
            <li>Fyll i intresseformuläret</li>
            <li>Vi kontaktar dig för ett introduktionsmöte</li>
            <li>Vi bokar in en prova-på-dag</li>
            <li>Om allt känns bra, får din hund en fast plats</li>
          </ol>
          <p>
            Du kan också mejla oss direkt på: <a href="mailto:kontakt@doggydaycare.se">kontakt@doggydaycare.se</a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Apply;
