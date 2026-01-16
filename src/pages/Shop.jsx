import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const IsolaeShopPage = () => {
  const [loaded, setLoaded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [hasMeasurements, setHasMeasurements] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  useEffect(() => {
    setLoaded(true);
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = {
    essential: {
      id: 'essential',
      name: 'The Essential',
      type: 'One Piece',
      price: 200,
      tag: 'Hero Piece',
      gradient: 'linear-gradient(165deg, #0a0a0a 0%, #1a1a1a 30%, #2d2d2d 60%, #1a1a1a 100%)',
      description: 'Engineered for your unique torso length. The one-piece that finally fits.'
    },
    lightSupport: {
      id: 'light',
      name: 'Light Support',
      type: 'Bikini Top',
      support: 'A-C Cup',
      price: 120,
      gradient: 'linear-gradient(165deg, #C0785C 0%, #D4A088 40%, #C0785C 100%)',
      description: 'Triangle silhouette with adjustable coverage. Freedom meets flattery.'
    },
    highSupport: {
      id: 'high',
      name: 'High Support',
      type: 'Bikini Top',
      support: 'C-F Cup',
      price: 120,
      gradient: 'linear-gradient(165deg, #1E4D6B 0%, #2D6A8F 40%, #1E4D6B 100%)',
      description: 'Structured cups with real support. No underwire, no compromise.'
    },
    classic: {
      id: 'classic',
      name: 'Classic',
      type: 'Bikini Bottom',
      price: 100,
      gradient: 'linear-gradient(165deg, #D4C4A8 0%, #E8D5BE 40%, #D4C4A8 100%)',
      description: 'Medium coverage, sized to your actual hip measurement.'
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
      background: '#0a0a0a',
      color: '#FFFFFF'
    }}>
      
      {/* Navigation */}
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
            <Link to="/shop" style={{
              fontSize: '11px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#FFFFFF',
              textDecoration: 'none',
              opacity: 1,
              borderBottom: '1px solid #FFFFFF',
              paddingBottom: '4px'
            }}>Shop</Link>
            <Link to="/" style={{
              fontSize: '11px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#FFFFFF',
              textDecoration: 'none',
              opacity: 0.7,
              paddingBottom: '4px'
            }}>Your Fit</Link>
            <Link to="/" style={{
              fontSize: '11px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#FFFFFF',
              textDecoration: 'none',
              opacity: 0.7,
              paddingBottom: '4px'
            }}>Story</Link>
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
            onClick={() => setCartOpen(true)}
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

      {/* Hero - Full Viewport */}
      <section style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(ellipse at 30% 20%, rgba(192,120,92,0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(30,77,107,0.15) 0%, transparent 50%), #0a0a0a'
        }} />

        <div style={{
          position: 'relative',
          textAlign: 'center',
          zIndex: 1,
          padding: '0 48px'
        }}>
          <p style={{
            fontSize: '11px',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: '#C0785C',
            marginBottom: '32px',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s ease 0.2s'
          }}>The Collection</p>
          
          <h1 style={{
            fontSize: 'clamp(64px, 15vw, 200px)',
            fontWeight: 200,
            letterSpacing: '-0.02em',
            lineHeight: 0.9,
            marginBottom: '32px',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease 0.3s'
          }}>Shop</h1>
          
          <p style={{
            fontSize: '18px',
            fontWeight: 300,
            color: 'rgba(255,255,255,0.6)',
            maxWidth: '500px',
            margin: '0 auto',
            lineHeight: 1.7,
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s ease 0.4s'
          }}>
            Four pieces. Infinite combinations.<br/>
            Every one made to your measurements.
          </p>
        </div>

        <div style={{
          position: 'absolute',
          bottom: '48px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 1s ease 0.6s'
        }}>
          <p style={{ fontSize: '9px', letterSpacing: '0.2em', opacity: 0.5 }}>SCROLL</p>
          <div style={{
            width: '1px',
            height: '48px',
            background: 'rgba(255,255,255,0.2)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              width: '100%',
              height: '50%',
              background: '#FFFFFF',
              animation: 'scrollPulse 2s ease-in-out infinite'
            }} />
          </div>
        </div>
      </section>

      {/* The Essential - Featured */}
      <section style={{
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: '1.3fr 1fr'
      }}>
        <Link
          to="/shop/the-essential"
          style={{ textDecoration: 'none', color: 'inherit' }}
          onMouseEnter={() => setHoveredProduct('essential')}
          onMouseLeave={() => setHoveredProduct(null)}
        >
          <div style={{
            height: '100%',
            minHeight: '100vh',
            background: products.essential.gradient,
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              color: 'rgba(255,255,255,0.15)'
            }}>
              <div style={{
                width: '120px',
                height: '120px',
                border: '2px dashed rgba(255,255,255,0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                fontSize: '48px'
              }}>📷</div>
              <p style={{ fontSize: '12px', letterSpacing: '0.2em' }}>PRODUCT PHOTO</p>
            </div>

            <div style={{
              position: 'absolute',
              top: '48px',
              left: '48px',
              background: '#C0785C',
              padding: '12px 24px',
              fontSize: '10px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase'
            }}>Hero Piece</div>

            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '60px 48px',
              background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 100%)',
              transform: hoveredProduct === 'essential' ? 'translateY(0)' : 'translateY(20px)',
              opacity: hoveredProduct === 'essential' ? 1 : 0,
              transition: 'all 0.4s ease'
            }}>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)' }}>
                {products.essential.description}
              </p>
            </div>
          </div>
        </Link>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          padding: '80px',
          background: '#0a0a0a'
        }}>
          <div style={{ maxWidth: '440px' }}>
            <p style={{
              fontSize: '11px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#C0785C',
              marginBottom: '16px'
            }}>{products.essential.type}</p>
            
            <h2 style={{
              fontSize: 'clamp(42px, 6vw, 64px)',
              fontWeight: 200,
              marginBottom: '16px',
              lineHeight: 1
            }}>{products.essential.name}</h2>
            
            <p style={{
              fontSize: '24px',
              fontWeight: 300,
              marginBottom: '32px',
              opacity: 0.7
            }}>€{products.essential.price}</p>
            
            <p style={{
              fontSize: '16px',
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.8,
              marginBottom: '40px'
            }}>
              The piece that started it all. Designed because one-pieces should fit everyone — 
              not just one body type. Your torso length, your proportions, your perfect fit.
            </p>

            <Link to="/shop/the-essential" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              fontSize: '12px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#FFFFFF',
              textDecoration: 'none',
              padding: '20px 48px',
              border: '1px solid #FFFFFF',
              transition: 'all 0.3s ease'
            }}>
              Shop The Essential
              <span style={{ fontSize: '18px' }}>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Bikini Section Header */}
      <section style={{
        padding: '120px 48px 80px',
        textAlign: 'center'
      }}>
        <p style={{
          fontSize: '11px',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: '#C0785C',
          marginBottom: '20px'
        }}>Mix & Match</p>
        <h2 style={{
          fontSize: 'clamp(36px, 5vw, 56px)',
          fontWeight: 200,
          marginBottom: '20px'
        }}>Build Your Bikini</h2>
        <p style={{
          fontSize: '17px',
          color: 'rgba(255,255,255,0.5)',
          maxWidth: '500px',
          margin: '0 auto'
        }}>
          49% of women need different top and bottom sizes. 
          Choose any combination — no judgment, no compromise.
        </p>
      </section>

      {/* Bikini Tops - Side by Side */}
      <section style={{
        minHeight: '90vh',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr'
      }}>
        <Link
          to="/shop/bikini-tops"
          style={{ textDecoration: 'none', color: 'inherit' }}
          onMouseEnter={() => setHoveredProduct('light')}
          onMouseLeave={() => setHoveredProduct(null)}
        >
          <div style={{
            height: '100%',
            minHeight: '90vh',
            background: products.lightSupport.gradient,
            position: 'relative',
            transition: 'all 0.4s ease',
            transform: hoveredProduct === 'light' ? 'scale(1.01)' : 'scale(1)'
          }}>
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              color: 'rgba(255,255,255,0.2)'
            }}>
              <div style={{
                width: '100px',
                height: '100px',
                border: '2px dashed rgba(255,255,255,0.15)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
                fontSize: '40px'
              }}>📷</div>
              <p style={{ fontSize: '11px', letterSpacing: '0.15em' }}>PRODUCT PHOTO</p>
            </div>

            <div style={{
              position: 'absolute',
              bottom: '48px',
              left: '48px',
              right: '48px'
            }}>
              <p style={{
                fontSize: '10px',
                letterSpacing: '0.2em',
                marginBottom: '8px',
                opacity: 0.7
              }}>BIKINI TOP • {products.lightSupport.support}</p>
              <h3 style={{
                fontSize: '32px',
                fontWeight: 200,
                marginBottom: '8px'
              }}>{products.lightSupport.name}</h3>
              <p style={{
                fontSize: '18px',
                opacity: 0.8,
                marginBottom: '16px'
              }}>€{products.lightSupport.price}</p>
              <p style={{
                fontSize: '14px',
                opacity: hoveredProduct === 'light' ? 0.8 : 0,
                transform: hoveredProduct === 'light' ? 'translateY(0)' : 'translateY(10px)',
                transition: 'all 0.3s ease'
              }}>{products.lightSupport.description}</p>
            </div>
          </div>
        </Link>

        <Link
          to="/shop/bikini-tops"
          style={{ textDecoration: 'none', color: 'inherit' }}
          onMouseEnter={() => setHoveredProduct('high')}
          onMouseLeave={() => setHoveredProduct(null)}
        >
          <div style={{
            height: '100%',
            minHeight: '90vh',
            background: products.highSupport.gradient,
            position: 'relative',
            transition: 'all 0.4s ease',
            transform: hoveredProduct === 'high' ? 'scale(1.01)' : 'scale(1)'
          }}>
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              color: 'rgba(255,255,255,0.2)'
            }}>
              <div style={{
                width: '100px',
                height: '100px',
                border: '2px dashed rgba(255,255,255,0.15)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
                fontSize: '40px'
              }}>📷</div>
              <p style={{ fontSize: '11px', letterSpacing: '0.15em' }}>PRODUCT PHOTO</p>
            </div>

            <div style={{
              position: 'absolute',
              bottom: '48px',
              left: '48px',
              right: '48px'
            }}>
              <p style={{
                fontSize: '10px',
                letterSpacing: '0.2em',
                marginBottom: '8px',
                opacity: 0.7
              }}>BIKINI TOP • {products.highSupport.support}</p>
              <h3 style={{
                fontSize: '32px',
                fontWeight: 200,
                marginBottom: '8px'
              }}>{products.highSupport.name}</h3>
              <p style={{
                fontSize: '18px',
                opacity: 0.8,
                marginBottom: '16px'
              }}>€{products.highSupport.price}</p>
              <p style={{
                fontSize: '14px',
                opacity: hoveredProduct === 'high' ? 0.8 : 0,
                transform: hoveredProduct === 'high' ? 'translateY(0)' : 'translateY(10px)',
                transition: 'all 0.3s ease'
              }}>{products.highSupport.description}</p>
            </div>
          </div>
        </Link>
      </section>

      {/* Classic Bottom */}
      <section style={{
        minHeight: '70vh',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          padding: '80px',
          background: '#0a0a0a'
        }}>
          <div style={{ maxWidth: '400px' }}>
            <p style={{
              fontSize: '11px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#C0785C',
              marginBottom: '16px'
            }}>{products.classic.type}</p>
            
            <h2 style={{
              fontSize: '42px',
              fontWeight: 200,
              marginBottom: '12px'
            }}>{products.classic.name}</h2>
            
            <p style={{
              fontSize: '20px',
              fontWeight: 300,
              marginBottom: '24px',
              opacity: 0.7
            }}>€{products.classic.price}</p>
            
            <p style={{
              fontSize: '15px',
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.8,
              marginBottom: '32px'
            }}>
              The bottom that fits your actual hips — not some standardized approximation. 
              Medium coverage, maximum comfort.
            </p>

            <Link to="/shop/bikini-tops" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              fontSize: '12px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#FFFFFF',
              textDecoration: 'none'
            }}>
              Shop Classic
              <span style={{ fontSize: '18px' }}>→</span>
            </Link>
          </div>
        </div>

        <Link
          to="/shop/bikini-tops"
          style={{ textDecoration: 'none', color: 'inherit' }}
          onMouseEnter={() => setHoveredProduct('classic')}
          onMouseLeave={() => setHoveredProduct(null)}
        >
          <div style={{
            height: '100%',
            minHeight: '70vh',
            background: products.classic.gradient,
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              color: 'rgba(0,0,0,0.2)'
            }}>
              <div style={{
                width: '100px',
                height: '100px',
                border: '2px dashed rgba(0,0,0,0.15)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
                fontSize: '40px'
              }}>📷</div>
              <p style={{ fontSize: '11px', letterSpacing: '0.15em' }}>PRODUCT PHOTO</p>
            </div>
          </div>
        </Link>
      </section>

      {/* Set Builder CTA */}
      <section style={{
        padding: '160px 48px',
        background: '#FFFFFF',
        color: '#1a1a1a'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px'
          }}>
            <div style={{
              aspectRatio: '1',
              background: products.lightSupport.gradient,
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                color: '#FFFFFF'
              }}>
                <p style={{ fontSize: '9px', letterSpacing: '0.1em', opacity: 0.7 }}>TOP</p>
                <p style={{ fontSize: '13px' }}>Light Support</p>
              </div>
            </div>
            <div style={{
              aspectRatio: '1',
              background: products.highSupport.gradient,
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                color: '#FFFFFF'
              }}>
                <p style={{ fontSize: '9px', letterSpacing: '0.1em', opacity: 0.7 }}>TOP</p>
                <p style={{ fontSize: '13px' }}>High Support</p>
              </div>
            </div>
            <div style={{
              gridColumn: 'span 2',
              aspectRatio: '2/1',
              background: products.classic.gradient,
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                color: '#1a1a1a'
              }}>
                <p style={{ fontSize: '9px', letterSpacing: '0.1em', opacity: 0.6 }}>BOTTOM</p>
                <p style={{ fontSize: '13px' }}>Classic</p>
              </div>
            </div>
          </div>

          <div>
            <p style={{
              fontSize: '11px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#C0785C',
              marginBottom: '20px'
            }}>Bikini Builder</p>
            <h2 style={{
              fontSize: '48px',
              fontWeight: 200,
              marginBottom: '24px',
              lineHeight: 1.1
            }}>Any Top.<br/>Any Bottom.</h2>
            <p style={{
              fontSize: '17px',
              color: '#666',
              lineHeight: 1.8,
              marginBottom: '32px'
            }}>
              Standard sizing assumes your top and bottom are the same. 
              For 49% of women, they're not. Mix freely — your fit, your rules.
            </p>
            <div style={{
              display: 'flex',
              gap: '32px',
              marginBottom: '40px'
            }}>
              <div>
                <p style={{ fontSize: '42px', fontWeight: 200, color: '#C0785C' }}>€220</p>
                <p style={{ fontSize: '13px', color: '#888' }}>Complete set</p>
              </div>
              <div style={{ width: '1px', background: '#e0e0e0' }} />
              <div>
                <p style={{ fontSize: '42px', fontWeight: 200 }}>€0</p>
                <p style={{ fontSize: '13px', color: '#888' }}>Extra for custom</p>
              </div>
            </div>
            <Link to="/shop/bikini-tops" style={{
              display: 'inline-block',
              background: '#1a1a1a',
              color: '#FFFFFF',
              padding: '20px 56px',
              fontSize: '12px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              textDecoration: 'none'
            }}>
              Build Your Set
            </Link>
          </div>
        </div>
      </section>

      {/* The Promise */}
      <section style={{
        padding: '160px 48px',
        background: '#0a0a0a',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{
            fontSize: '11px',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#C0785C',
            marginBottom: '32px'
          }}>The Isolae Promise</p>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 200,
            lineHeight: 1.4,
            marginBottom: '64px'
          }}>
            "If your measurements don't match our patterns,<br/>
            we make one just for you — at no extra cost."
          </h2>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '80px'
          }}>
            {[
              { number: '4', label: 'measurements' },
              { number: '5', label: 'minutes' },
              { number: '€0', label: 'for custom fit' }
            ].map((stat, i) => (
              <div key={i}>
                <p style={{
                  fontSize: '48px',
                  fontWeight: 200,
                  marginBottom: '8px'
                }}>{stat.number}</p>
                <p style={{
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.5)',
                  letterSpacing: '0.1em'
                }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section style={{
        padding: '120px 48px',
        background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)',
        textAlign: 'center'
      }}>
        <p style={{
          fontSize: '11px',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: '#C0785C',
          marginBottom: '24px'
        }}>Ready?</p>
        <h2 style={{
          fontSize: 'clamp(36px, 6vw, 64px)',
          fontWeight: 200,
          marginBottom: '40px'
        }}>Find Your Perfect Fit</h2>
        <Link to="/" style={{
          display: 'inline-block',
          background: '#FFFFFF',
          color: '#1a1a1a',
          padding: '22px 72px',
          fontSize: '12px',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          textDecoration: 'none'
        }}>
          Enter Your Measurements
        </Link>
      </section>

      {/* Cart Drawer */}
      {cartOpen && (
        <div
          onClick={() => setCartOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.6)',
            zIndex: 2000
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '440px',
              height: '100%',
              background: '#FFFFFF',
              color: '#1a1a1a',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{
              padding: '24px',
              borderBottom: '1px solid #f0f0f0',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <h2 style={{ fontSize: '14px', fontWeight: 400, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Bag ({cartItems.length})
              </h2>
              <button
                onClick={() => setCartOpen(false)}
                style={{ background: 'none', border: 'none', fontSize: '28px', cursor: 'pointer' }}
              >×</button>
            </div>

            <div style={{
              flex: 1,
              overflow: 'auto',
              padding: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{ textAlign: 'center' }}>
                <p style={{ color: '#888', marginBottom: '24px' }}>Your bag is empty</p>
                <button
                  onClick={() => setCartOpen(false)}
                  style={{
                    background: '#1a1a1a',
                    border: 'none',
                    color: '#FFFFFF',
                    padding: '16px 40px',
                    fontSize: '11px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    cursor: 'pointer'
                  }}
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes scrollPulse {
          0%, 100% { transform: translateY(-100%); }
          50% { transform: translateY(200%); }
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

const Shop = IsolaeShopPage;
export default Shop;
