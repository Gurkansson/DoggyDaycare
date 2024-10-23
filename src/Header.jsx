import React from 'react';
import { Link } from 'react-router-dom'; 
import './Header.css';

const Header = () => (
    <Link to="/start"> 
    <header className="header">
            <img 
                src="https://cdn.prod.website-files.com/616ca8cb37a2ff9ce0323209/63a219f1be4b3d80ae2ba86e_SquareIcon.png" 
                alt="Dog in Doghouse" className="logo"/>
        <h1 className="title">Doggy Daycare</h1>    
    </header>
    </Link>
);

export default Header;
