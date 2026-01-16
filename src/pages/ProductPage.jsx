import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const IsolaeProductPage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [measurementModalOpen, setMeasurementModalOpen] = useState(false);
  const [measurementStep, setMeasurementStep] = useState(0);
  const [measurements, setMeasurements] = useState({
    torso: '',
    bust: '',
    underbust: '',
    hip: ''
  });
  const [hasMeasurements, setHasMeasurements] = useState(false);
  const [fitType, setFitType] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-advance gallery
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % 5);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const product = {
    name: 'The Essential',
    type: 'One Piece',
    price: 200,
    tagline: 'Engineered for your torso',
    description: 'The piece that started it all. Designed because one-pieces should fit everyone — not just one body type. Your torso length, your proportions, your perfect fit.'
  };

  const measurementGuide = [
    { key: 'torso', label: 'Torso Length', instruction: 'Measure from shoulder, down the front, through legs, back up to shoulder.', tip: 'The most important measurement for one-pieces.', icon: '📏' },
    { key: 'bust', label: 'Bust', instruction: 'Without a bra, measure around the fullest part of your bust.', tip: 'Keep tape parallel to floor.', icon: '👙' },
    { key: 'underbust', label: 'Underbust', instruction: 'Measure directly under your bust where a band would sit.', tip: 'Should feel snug like a well-fitting band.', icon: '📐' },
    { key: 'hip', label: 'Lower Hip', instruction: 'Measure around the widest part of your hips and bottom.', tip: 'Usually 20-25cm below natural waist.', icon: '✨' }
  ];

  const galleryImages = [
    { gradient: 'linear-gradient(165deg, #0a0a0a 0%, #1a1a1a 30%, #2d2d2d 60%, #1a1a1a 100%)', label: 'Front' },
    { gradient: 'linear-gradient(165deg, #1a1a1a 0%, #2d2d2d 50%, #0a0a0a 100%)', label: 'Back' },
    { gradient: 'linear-gradient(135deg, #1E4D6B 0%, #0a0a0a 70%)', label: 'Poolside' },
    { gradient: 'linear-gradient(165deg, #2d2d2d 0%, #1a1a1a 40%, #0a0a0a 100%)', label: 'Detail' },
    { gradient: 'linear-gradient(165deg, #0a0a0a 0%, #1E4D6B 30%, #0a0a0a 100%)', label: 'Movement' }
  ];

  const handleMeasurementSubmit = () => {
    const isStandard = Math.random() > 0.3;
    setFitType(isStandard ? 'standard' : 'custom');
    setHasMeasurements(true);
    setMeasurementModalOpen(false);
    setMeasurementStep(0);
  };

  const addToCart = () => {
    setCartItems([...cartItems, { ...product, fitType }]);
    setCartOpen(true);
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
              opacity: 0.7
            }}>Your Fit</Link>
            <Link to="/" style={{
              fontSize: '11px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#FFFFFF',
              textDecoration: 'none',
              opacity: 0.7
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

      {/* Hero - Full Viewport Product Shot */}
      <section style={{
        height: '100vh',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Gallery */}
        {galleryImages.map((img, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: img.gradient,
              opacity: currentImage === index ? 1 : 0,
              transition: 'opacity 1s ease-in-out'
            }}
          >
            {/* Photo placeholder */}
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
              <p style={{ fontSize: '12px', letterSpacing: '0.2em' }}>{img.label.toUpperCase()} VIEW</p>
            </div>
          </div>
        ))}

        {/* Gradient overlay for text readability */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '60%',
          background: 'linear-gradient(180deg, transparent 0%, rgba(10,10,10,0.8) 100%)',
          pointerEvents: 'none'
        }} />

        {/* Product Info Overlay */}
        <div style={{
          position: 'absolute',
          bottom: '80px',
          left: '48px',
          right: '48px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end'
        }}>
          <div style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease 0.3s'
          }}>
            <p style={{
              fontSize: '11px',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#C0785C',
              marginBottom: '16px'
            }}>{product.type}</p>
            <h1 style={{
              fontSize: 'clamp(56px, 10vw, 120px)',
              fontWeight: 200,
              letterSpacing: '0.02em',
              lineHeight: 0.95,
              marginBottom: '16px'
            }}>{product.name}</h1>
            <p style={{
              fontSize: '20px',
              fontWeight: 300,
              opacity: 0.7
            }}>€{product.price}</p>
          </div>

          {/* Gallery Dots */}
          <div style={{
            display: 'flex',
            gap: '12px',
            marginBottom: '20px'
          }}>
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                style={{
                  width: currentImage === index ? '48px' : '12px',
                  height: '4px',
                  borderRadius: '2px',
                  background: currentImage === index ? '#FFFFFF' : 'rgba(255,255,255,0.3)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.4s ease'
                }}
              />
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
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
          transition: 'opacity 1s ease 0.8s'
        }}>
          <p style={{ fontSize: '9px', letterSpacing: '0.2em', opacity: 0.5 }}>SCROLL</p>
          <div style={{
            width: '1px',
            height: '40px',
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

      {/* Tagline Section */}
      <section style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 48px',
        background: '#0a0a0a',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '900px' }}>
          <p style={{
            fontSize: 'clamp(28px, 5vw, 48px)',
            fontWeight: 200,
            lineHeight: 1.4,
            color: 'rgba(255,255,255,0.9)'
          }}>
            "{product.description}"
          </p>
        </div>
      </section>

      {/* Why This Piece Section */}
      <section style={{
        minHeight: '80vh',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr'
      }}>
        {/* Left - Content */}
        <div style={{
          background: '#FFFFFF',
          color: '#1a1a1a',
          display: 'flex',
          alignItems: 'center',
          padding: '80px'
        }}>
          <div style={{ maxWidth: '480px' }}>
            <p style={{
              fontSize: '11px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#C0785C',
              marginBottom: '24px'
            }}>Why This Piece</p>
            <h2 style={{
              fontSize: '36px',
              fontWeight: 200,
              marginBottom: '32px',
              lineHeight: 1.2
            }}>
              One-pieces are the hardest to fit. We solved it.
            </h2>
            <p style={{
              fontSize: '15px',
              color: '#666',
              lineHeight: 1.9,
              marginBottom: '24px'
            }}>
              Standard sizing assumes everyone has the same torso length. They don't. 
              Some of us are long-waisted, some short. The Essential is the first 
              one-piece designed around your actual torso measurement.
            </p>
            <p style={{
              fontSize: '15px',
              color: '#666',
              lineHeight: 1.9
            }}>
              No more riding up. No more pulling down. Just a swimsuit that fits 
              like it was made for you — because it was.
            </p>
          </div>
        </div>

        {/* Right - Image */}
        <div style={{
          background: galleryImages[2].gradient,
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: 'rgba(255,255,255,0.15)'
          }}>
            <p style={{ fontSize: '11px', letterSpacing: '0.15em' }}>LIFESTYLE PHOTO</p>
          </div>
        </div>
      </section>

      {/* Details Section - Full Width */}
      <section style={{
        padding: '120px 48px',
        background: '#0a0a0a'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '60px'
        }}>
          {/* Details */}
          <div>
            <h3 style={{
              fontSize: '11px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#C0785C',
              marginBottom: '24px'
            }}>Details</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[
                'Italian Lycra with 4-way stretch',
                'UPF 50+ sun protection',
                'Fully lined for opacity',
                'Adjustable straps',
                'Scoop back design',
                'Medium-high leg cut'
              ].map((item, i) => (
                <li key={i} style={{
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.6)',
                  lineHeight: 2.2,
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                  paddingBottom: '8px',
                  marginBottom: '8px'
                }}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Care */}
          <div>
            <h3 style={{
              fontSize: '11px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#C0785C',
              marginBottom: '24px'
            }}>Care</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[
                'Rinse in cool water after each wear',
                'Hand wash with mild detergent',
                'Do not wring or twist',
                'Lay flat to dry',
                'Avoid direct sunlight when drying',
                'Do not iron or dry clean'
              ].map((item, i) => (
                <li key={i} style={{
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.6)',
                  lineHeight: 2.2,
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                  paddingBottom: '8px',
                  marginBottom: '8px'
                }}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Shipping */}
          <div>
            <h3 style={{
              fontSize: '11px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#C0785C',
              marginBottom: '24px'
            }}>Shipping & Returns</h3>
            <div style={{ marginBottom: '24px' }}>
              <p style={{ fontSize: '14px', fontWeight: 500, marginBottom: '4px' }}>Standard Fit</p>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>Ships in 3-5 business days</p>
            </div>
            <div style={{ marginBottom: '24px' }}>
              <p style={{ fontSize: '14px', fontWeight: 500, marginBottom: '4px' }}>Custom Fit</p>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>Ready in 2-3 weeks</p>
            </div>
            <div style={{
              padding: '16px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)'
            }}>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
                <strong style={{ color: '#FFFFFF' }}>Returns:</strong> Standard fit items can be returned within 14 days if hygienic seal is intact. Custom pieces are final sale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Split Section - Fit & Add to Bag */}
      <section style={{
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr'
      }}>
        {/* Left - Image */}
        <div style={{
          background: galleryImages[1].gradient,
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: 'rgba(255,255,255,0.15)'
          }}>
            <p style={{ fontSize: '11px', letterSpacing: '0.15em' }}>PRODUCT PHOTO</p>
          </div>
        </div>

        {/* Right - Action */}
        <div style={{
          background: '#FFFFFF',
          color: '#1a1a1a',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px'
        }}>
          <div style={{ maxWidth: '400px', width: '100%' }}>
            <p style={{
              fontSize: '11px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#C0785C',
              marginBottom: '16px'
            }}>Your Fit</p>
            
            <h2 style={{
              fontSize: '36px',
              fontWeight: 200,
              marginBottom: '24px'
            }}>Made for You</h2>

            {!hasMeasurements ? (
              <>
                <p style={{
                  fontSize: '15px',
                  color: '#666',
                  lineHeight: 1.8,
                  marginBottom: '32px'
                }}>
                  We need 4 quick measurements to craft this piece to your body. 
                  It takes about 5 minutes and ensures a perfect fit.
                </p>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '16px',
                  marginBottom: '32px'
                }}>
                  {measurementGuide.map((m, i) => (
                    <div key={i} style={{
                      padding: '16px',
                      background: '#f8f8f8',
                      textAlign: 'center'
                    }}>
                      <span style={{ fontSize: '24px' }}>{m.icon}</span>
                      <p style={{ fontSize: '12px', marginTop: '8px', color: '#666' }}>{m.label}</p>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setMeasurementModalOpen(true)}
                  style={{
                    width: '100%',
                    padding: '20px',
                    background: '#1a1a1a',
                    border: 'none',
                    color: '#FFFFFF',
                    fontSize: '12px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    cursor: 'pointer'
                  }}
                >
                  Enter Your Measurements
                </button>
              </>
            ) : (
              <>
                <div style={{
                  padding: '24px',
                  background: fitType === 'standard' ? '#E8F5E9' : '#FFF3E0',
                  marginBottom: '24px'
                }}>
                  <p style={{
                    fontSize: '16px',
                    fontWeight: 500,
                    color: fitType === 'standard' ? '#2E7D32' : '#E65100',
                    marginBottom: '8px'
                  }}>
                    {fitType === 'standard' ? '✓ Standard Fit Available' : '✦ Custom Fit For You'}
                  </p>
                  <p style={{ fontSize: '14px', color: '#666' }}>
                    {fitType === 'standard' 
                      ? 'Ships in 3-5 business days'
                      : 'Crafted in 2-3 weeks'
                    }
                  </p>
                </div>

                <button
                  onClick={addToCart}
                  style={{
                    width: '100%',
                    padding: '20px',
                    background: '#1a1a1a',
                    border: 'none',
                    color: '#FFFFFF',
                    fontSize: '12px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    marginBottom: '16px'
                  }}
                >
                  Add to Bag — €{product.price}
                </button>

                <button
                  onClick={() => setMeasurementModalOpen(true)}
                  style={{
                    width: '100%',
                    padding: '16px',
                    background: 'transparent',
                    border: '1px solid #e0e0e0',
                    color: '#666',
                    fontSize: '11px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    cursor: 'pointer'
                  }}
                >
                  Edit Measurements
                </button>
              </>
            )}

            <p style={{
              fontSize: '12px',
              color: '#888',
              textAlign: 'center',
              marginTop: '24px'
            }}>
              Free EU shipping over €150
            </p>
          </div>
        </div>
      </section>

      {/* Complete Your Look */}
      <section style={{
        padding: '120px 48px',
        background: '#0a0a0a'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: 200,
            textAlign: 'center',
            marginBottom: '64px'
          }}>Complete Your Look</h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px'
          }}>
            {[
              { name: 'Light Support', type: 'Bikini Top', support: 'A-C Cup', price: 120, gradient: 'linear-gradient(165deg, #C0785C 0%, #D4A088 100%)' },
              { name: 'High Support', type: 'Bikini Top', support: 'C-F Cup', price: 120, gradient: 'linear-gradient(165deg, #1E4D6B 0%, #2D6A8F 100%)' },
              { name: 'Classic', type: 'Bikini Bottom', support: '', price: 100, gradient: 'linear-gradient(165deg, #D4C4A8 0%, #E8D5BE 100%)' }
            ].map((item, i) => (
              <div
                key={i}
                style={{ cursor: 'pointer' }}
                onMouseEnter={(e) => {
                  e.currentTarget.querySelector('.product-image').style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.querySelector('.product-image').style.transform = 'scale(1)';
                }}
              >
                <div style={{
                  aspectRatio: '3/4',
                  overflow: 'hidden',
                  marginBottom: '20px'
                }}>
                  <div
                    className="product-image"
                    style={{
                      width: '100%',
                      height: '100%',
                      background: item.gradient,
                      transition: 'transform 0.6s ease',
                      position: 'relative'
                    }}
                  >
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      color: 'rgba(255,255,255,0.2)',
                      fontSize: '11px',
                      letterSpacing: '0.1em'
                    }}>PRODUCT PHOTO</div>
                  </div>
                </div>
                <p style={{
                  fontSize: '10px',
                  letterSpacing: '0.15em',
                  color: 'rgba(255,255,255,0.5)',
                  marginBottom: '8px'
                }}>{item.type} {item.support && `• ${item.support}`}</p>
                <p style={{
                  fontSize: '18px',
                  fontWeight: 300,
                  marginBottom: '4px'
                }}>{item.name}</p>
                <p style={{
                  fontSize: '15px',
                  color: 'rgba(255,255,255,0.6)'
                }}>€{item.price}</p>
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
          marginBottom: '32px'
        }}>Find Your Perfect Fit</h2>
        <button
          onClick={() => setMeasurementModalOpen(true)}
          style={{
            background: '#FFFFFF',
            border: 'none',
            color: '#1a1a1a',
            padding: '20px 64px',
            fontSize: '12px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = '#C0785C';
            e.target.style.color = '#FFFFFF';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = '#FFFFFF';
            e.target.style.color = '#1a1a1a';
          }}
        >
          {hasMeasurements ? 'Add to Bag' : 'Enter Measurements'}
        </button>
      </section>

      {/* Measurement Modal */}
      {measurementModalOpen && (
        <div
          onClick={() => setMeasurementModalOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.9)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(10px)'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#FFFFFF',
              color: '#1a1a1a',
              width: '100%',
              maxWidth: '520px',
              maxHeight: '90vh',
              overflow: 'auto'
            }}
          >
            <button
              onClick={() => setMeasurementModalOpen(false)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'none',
                border: 'none',
                fontSize: '32px',
                cursor: 'pointer',
                color: '#1a1a1a',
                lineHeight: 1
              }}
            >×</button>

            <div style={{ padding: '48px 40px' }}>
              {/* Progress */}
              <div style={{ display: 'flex', gap: '8px', marginBottom: '48px' }}>
                {measurementGuide.map((_, i) => (
                  <div key={i} style={{
                    flex: 1,
                    height: '3px',
                    background: i <= measurementStep ? '#1a1a1a' : '#e8e8e8'
                  }} />
                ))}
              </div>

              {/* Current Step */}
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '50%',
                  background: '#f8f8f8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px',
                  fontSize: '32px'
                }}>{measurementGuide[measurementStep].icon}</div>

                <p style={{
                  fontSize: '11px',
                  letterSpacing: '0.15em',
                  color: '#C0785C',
                  marginBottom: '12px'
                }}>STEP {measurementStep + 1} OF 4</p>

                <h3 style={{
                  fontSize: '28px',
                  fontWeight: 300,
                  marginBottom: '16px'
                }}>{measurementGuide[measurementStep].label}</h3>

                <p style={{
                  fontSize: '14px',
                  color: '#666',
                  lineHeight: 1.7,
                  marginBottom: '32px'
                }}>{measurementGuide[measurementStep].instruction}</p>

                {/* Video Placeholder */}
                <div style={{
                  background: '#f0f0f0',
                  aspectRatio: '16/9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '32px',
                  cursor: 'pointer'
                }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: '#1a1a1a',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <span style={{ color: '#FFFFFF', fontSize: '20px', marginLeft: '4px' }}>▶</span>
                  </div>
                </div>

                {/* Input */}
                <div style={{ position: 'relative', marginBottom: '16px' }}>
                  <input
                    type="number"
                    value={measurements[measurementGuide[measurementStep].key]}
                    onChange={(e) => setMeasurements(prev => ({
                      ...prev,
                      [measurementGuide[measurementStep].key]: e.target.value
                    }))}
                    placeholder="Enter measurement"
                    style={{
                      width: '100%',
                      padding: '20px 60px 20px 24px',
                      border: '2px solid #e0e0e0',
                      fontSize: '20px',
                      textAlign: 'center',
                      outline: 'none',
                      transition: 'border-color 0.2s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#1a1a1a'}
                    onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                  />
                  <span style={{
                    position: 'absolute',
                    right: '24px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    fontSize: '16px',
                    color: '#999'
                  }}>cm</span>
                </div>

                <p style={{
                  fontSize: '13px',
                  color: '#888',
                  marginBottom: '32px'
                }}>💡 {measurementGuide[measurementStep].tip}</p>

                {/* Navigation */}
                <div style={{ display: 'flex', gap: '12px' }}>
                  {measurementStep > 0 && (
                    <button
                      onClick={() => setMeasurementStep(measurementStep - 1)}
                      style={{
                        flex: 1,
                        padding: '18px',
                        background: 'transparent',
                        border: '1px solid #e0e0e0',
                        fontSize: '11px',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        cursor: 'pointer'
                      }}
                    >Back</button>
                  )}
                  <button
                    onClick={() => {
                      if (measurementStep < 3) {
                        setMeasurementStep(measurementStep + 1);
                      } else {
                        handleMeasurementSubmit();
                      }
                    }}
                    disabled={!measurements[measurementGuide[measurementStep].key]}
                    style={{
                      flex: 2,
                      padding: '18px',
                      background: measurements[measurementGuide[measurementStep].key] ? '#1a1a1a' : '#e0e0e0',
                      border: 'none',
                      color: '#FFFFFF',
                      fontSize: '11px',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      cursor: measurements[measurementGuide[measurementStep].key] ? 'pointer' : 'not-allowed'
                    }}
                  >
                    {measurementStep === 3 ? 'Find My Fit' : 'Continue'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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

            <div style={{ flex: 1, overflow: 'auto', padding: '24px' }}>
              {cartItems.length === 0 ? (
                <p style={{ color: '#888', textAlign: 'center', paddingTop: '60px' }}>Your bag is empty</p>
              ) : (
                cartItems.map((item, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    gap: '20px',
                    paddingBottom: '24px',
                    marginBottom: '24px',
                    borderBottom: '1px solid #f0f0f0'
                  }}>
                    <div style={{
                      width: '100px',
                      height: '120px',
                      background: 'linear-gradient(165deg, #1a1a1a 0%, #2d2d2d 100%)'
                    }} />
                    <div style={{ flex: 1 }}>
                      <h4 style={{ fontSize: '15px', fontWeight: 400, marginBottom: '4px' }}>{item.name}</h4>
                      <p style={{ fontSize: '12px', color: '#888', marginBottom: '12px' }}>{item.type}</p>
                      <p style={{ fontSize: '15px' }}>€{item.price}</p>
                      <p style={{
                        fontSize: '11px',
                        marginTop: '12px',
                        color: item.fitType === 'standard' ? '#2E7D32' : '#C0785C'
                      }}>
                        {item.fitType === 'standard' ? '✓ Ships in 3-5 days' : '✦ Custom: 2-3 weeks'}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cartItems.length > 0 && (
              <div style={{ padding: '24px', borderTop: '1px solid #f0f0f0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <span style={{ fontSize: '14px' }}>Subtotal</span>
                  <span style={{ fontSize: '20px', fontWeight: 300 }}>
                    €{cartItems.reduce((sum, item) => sum + item.price, 0)}
                  </span>
                </div>
                <button style={{
                  width: '100%',
                  padding: '18px',
                  background: '#1a1a1a',
                  border: 'none',
                  color: '#FFFFFF',
                  fontSize: '11px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  cursor: 'pointer'
                }}>
                  Checkout
                </button>
                <p style={{ fontSize: '11px', color: '#888', textAlign: 'center', marginTop: '12px' }}>
                  Free EU shipping over €150
                </p>
              </div>
            )}
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
        
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        
        input[type=number] {
          -moz-appearance: textfield;
        }
      `}</style>
    </div>
  );
};

export default IsolaeProductPage;

const ProductPage = IsolaeProductPage;
export { ProductPage };
