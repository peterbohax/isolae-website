import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = ({ scrolled, hasMeasurements, cartItems = [], onCartClick }) => {
  const location = useLocation();
  
  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Your Fit', path: '/#fit' },
    { name: 'Story', path: '/#story' }
  ];

  const isActive = (path) => {
    if (path === '/shop') {
      return location.pathname.startsWith('/shop');
    }
    return location.pathname === path;
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      padding: '20px 48px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 100,
      background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      transition: 'all 0.3s ease'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '48px' }}>
        <Link to="/" style={{
          fontSize: '20px',
          fontWeight: 300,
          letterSpacing: '0.35em',
          textTransform: 'uppercase',
          color: '#FFFFFF',
          textDecoration: 'none'
        }}>
          Isolae
        </Link>
        <div style={{ display: 'flex', gap: '32px' }}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              style={{
                fontSize: '11px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#FFFFFF',
                textDecoration: 'none',
                opacity: isActive(link.path) ? 1 : 0.7,
                borderBottom: isActive(link.path) ? '1px solid #FFFFFF' : 'none',
                paddingBottom: '4px'
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        {hasMeasurements && (
          <span style={{
            fontSize: '10px',
            letterSpacing: '0.1em',
            color: '#8FBC8F',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#8FBC8F' }}/>
            Fit Saved
          </span>
        )}
        <button
          onClick={onCartClick}
          style={{ background: 'none', border: 'none', cursor: 'pointer', position: 'relative' }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.5">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 01-8 0"/>
          </svg>
          {cartItems.length > 0 && (
            <span style={{
              position: 'absolute',
              top: '-4px',
              right: '-4px',
              width: '16px',
              height: '16px',
              background: '#C0785C',
              color: '#FFFFFF',
              borderRadius: '50%',
              fontSize: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>{cartItems.length}</span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
