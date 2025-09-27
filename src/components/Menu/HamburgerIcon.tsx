import React from 'react';
import './hamburger-icon.css';

interface HamburgerIconProps {
  isOpen: boolean;
  onClick: () => void;
}

export const HamburgerIcon: React.FC<HamburgerIconProps> = ({ isOpen, onClick }) => {
  return (
    <button 
      className={`hamburger-icon ${isOpen ? 'hamburger-icon--is-open' : ''}`}
      onClick={onClick}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
    >
      {/* Atauri A Logo */}
      <div className="hamburger-icon__logo">
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 40 40" 
          xmlns="http://www.w3.org/2000/svg"
          className="hamburger-icon__logo-svg"
        >
          <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" fill="none"/>
          <text x="20" y="28" textAnchor="middle" style={{fontSize:'20px', fontWeight:'bold', fill:'currentColor', fontFamily:'Arial,sans-serif'}}>A</text>
        </svg>
      </div>
      
      {/* Hamburger Lines */}
      <div className="hamburger-icon__lines">
        <span className="hamburger-icon__line hamburger-icon__line--top"></span>
        <span className="hamburger-icon__line hamburger-icon__line--middle"></span>
        <span className="hamburger-icon__line hamburger-icon__line--bottom"></span>
      </div>
    </button>
  );
};