import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const IsolaeBikiniTops = () => {
  const [selectedTop, setSelectedTop] = useState('light'); // 'light' or 'high'
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
  const [scrolled, setScrolled] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [builderOpen, setBuilderOpen] = useState(false);
  const [selectedBottom, setSelectedBottom] = useState(null);

  useEffect(() => {
    setLoaded(true);
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-advance gallery
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, [selectedTop]);

  // Reset image when switching tops
  useEffect(() => {
    setCurrentImage(0);
  }, [selectedTop]);

  const tops = {
    light: {
      name: 'Light Support',
      type: 'Bikini Top',
      support: 'A-C Cup',
      price: 120,
      tagline: 'Freedom meets flattery',
      description: 'Designed for smaller busts who want support without structure. Triangle cups that actually fit, sized to your measurements.',
      gradient: 'linear-gradient(165deg, #C0785C 0%, #D4A088 40%, #C0785C 100%)',
      gradientAlt: 'linear-gradient(165deg, #D4A088 0%, #C0785C 100%)',
      images: [
        { gradient: 'linear-gradient(165deg, #C0785C 0%, #D4A088 40%, #C0785C 100%)', label: 'Front' },
        { gradient: 'linear-gradient(165deg, #D4A088 0%, #C0785C 60%, #D4A088 100%)', label: 'Back' },
        { gradient: 'linear-gradient(135deg, #C0785C 0%, #1a1a1a 80%)', label: 'Lifestyle' },
        { gradient: 'linear-gradient(165deg, #D4A088 0%, #C0785C 100%)', label: 'Detail' }
      ],
      features: [
        'Triangle cup design',
        'Adjustable ties at neck and back',
        'Removable padding',
        'Italian Lycra with 4-way stretch',
        'UPF 50+ sun protection'
      ]
    },
    high: {
      name: 'High Support',
      type: 'Bikini Top',
      support: 'C-F Cup',
      price: 120,
      tagline: 'Finally, support that fits',
      description: 'Real support for bigger busts. Underwire-free structure that holds you in place, sized to your actual bust and underbust.',
      gradient: 'linear-gradient(165deg, #1E4D6B 0%, #2D6A8F 40%, #1E4D6B 100%)',
      gradientAlt: 'linear-gradient(165deg, #2D6A8F 0%, #1E4D6B 100%)',
      images: [
        { gradient: 'linear-gradient(165deg, #1E4D6B 0%, #2D6A8F 40%, #1E4D6B 100%)', label: 'Front' },
        { gradient: 'linear-gradient(165deg, #2D6A8F 0%, #1E4D6B 60%, #2D6A8F 100%)', label: 'Back' },
        { gradient: 'linear-gradient(135deg, #1E4D6B 0%, #0a0a0a 80%)', label: 'Lifestyle' },
        { gradient: 'linear-gradient(165deg, #2D6A8F 0%, #1E4D6B 100%)', label: 'Detail' }
      ],
      features: [
        'Structured cup design',
        'Wide underband for support',
        'Adjustable straps',
        'Power mesh lining',
        'Italian Lycra with 4-way stretch',
        'UPF 50+ sun protection'
      ]
    }
  };

  const currentTop = tops[selectedTop];

  const measurementGuide = [
    { key: 'torso', label: 'Torso Length', instruction: 'Measure from shoulder, down the front, through legs, back up to shoulder.', tip: 'Important for one-pieces and overall fit.', icon: '📏' },
    { key: 'bust', label: 'Bust', instruction: 'Without a bra, measure around the fullest part of your bust.', tip: 'This determines your cup coverage.', icon: '👙' },
    { key: 'underbust', label: 'Underbust', instruction: 'Measure directly under your bust where a band would sit.', tip: 'This determines Light vs High Support recommendation.', icon: '📐' },
    { key: 'hip', label: 'Lower Hip', instruction: 'Measure around the widest part of your hips and bottom.', tip: 'Essential for bottoms that actually fit.', icon: '✨' }
  ];

  const handleMeasurementSubmit = () => {
    const isStandard = Math.random() > 0.3;
    setFitType(isStandard ? 'standard' : 'custom');
    setHasMeasurements(true);
    setMeasurementModalOpen(false);
    setMeasurementStep(0);
  };

  const addToCart = (item) => {
    setCartItems([...cartItems, { ...item, fitType }]);
    setCartOpen(true);
  };

  const addSetToCart = () => {
    if (selectedBottom) {
      setCartItems([
        ...cartItems,
        { ...currentTop, fitType },
        { name: 'Classic', type: 'Bikini Bottom', price: 100, fitType }
      ]);
      setBuilderOpen(false);
      setCartOpen(true);
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

      {/* Hero - Split Screen Product Selector */}
      <section style={{
        height: '100vh',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        position: 'relative'
      }}>
        {/* Light Support Side */}
        <div
          onClick={() => setSelectedTop('light')}
          style={{
            background: tops.light.gradient,
            position: 'relative',
            cursor: 'pointer',
            transition: 'all 0.5s ease',
            opacity: selectedTop === 'light' ? 1 : 0.6
          }}
        >
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

          {/* Label */}
          <div style={{
            position: 'absolute',
            bottom: '60px',
            left: '40px',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s ease 0.3s'
          }}>
            <p style={{
              fontSize: '10px',
              letterSpacing: '0.2em',
              marginBottom: '8px',
              opacity: 0.7
            }}>A-C CUP</p>
            <h2 style={{
              fontSize: '32px',
              fontWeight: 200
            }}>Light Support</h2>
          </div>

          {/* Selection Indicator */}
          {selectedTop === 'light' && (
            <div style={{
              position: 'absolute',
              top: '40px',
              left: '40px',
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: '#FFFFFF'
            }} />
          )}
        </div>

        {/* High Support Side */}
        <div
          onClick={() => setSelectedTop('high')}
          style={{
            background: tops.high.gradient,
            position: 'relative',
            cursor: 'pointer',
            transition: 'all 0.5s ease',
            opacity: selectedTop === 'high' ? 1 : 0.6
          }}
        >
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

          {/* Label */}
          <div style={{
            position: 'absolute',
            bottom: '60px',
            right: '40px',
            textAlign: 'right',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s ease 0.4s'
          }}>
            <p style={{
              fontSize: '10px',
              letterSpacing: '0.2em',
              marginBottom: '8px',
              opacity: 0.7
            }}>C-F CUP</p>
            <h2 style={{
              fontSize: '32px',
              fontWeight: 200
            }}>High Support</h2>
          </div>

          {/* Selection Indicator */}
          {selectedTop === 'high' && (
            <div style={{
              position: 'absolute',
              top: '40px',
              right: '40px',
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: '#FFFFFF'
            }} />
          )}
        </div>

        {/* Center Overlay - Product Name */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          pointerEvents: 'none',
          zIndex: 10
        }}>
          <p style={{
            fontSize: '11px',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#FFFFFF',
            marginBottom: '16px',
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.8s ease 0.2s'
          }}>Bikini Tops</p>
          <h1 style={{
            fontSize: 'clamp(48px, 8vw, 96px)',
            fontWeight: 200,
            letterSpacing: '0.02em',
            color: '#FFFFFF',
            textShadow: '0 4px 30px rgba(0,0,0,0.3)',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s ease 0.3s'
          }}>Choose Your<br/>Support</h1>
        </div>

        {/* Scroll Indicator */}
        <div style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          zIndex: 10
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

      {/* Selected Product Detail */}
      <section style={{
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: '1.2fr 1fr'
      }}>
        {/* Left - Gallery */}
        <div style={{
          position: 'relative',
          overflow: 'hidden'
        }}>
          {currentTop.images.map((img, index) => (
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
                transition: 'opacity 0.8s ease'
              }}
            >
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'rgba(255,255,255,0.15)',
                textAlign: 'center'
              }}>
                <p style={{ fontSize: '11px', letterSpacing: '0.15em' }}>{img.label.toUpperCase()} VIEW</p>
              </div>
            </div>
          ))}

          {/* Gallery Navigation */}
          <div style={{
            position: 'absolute',
            bottom: '40px',
            left: '40px',
            display: 'flex',
            gap: '12px'
          }}>
            {currentTop.images.map((_, index) => (
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
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>
        </div>

        {/* Right - Product Info */}
        <div style={{
          background: '#FFFFFF',
          color: '#1a1a1a',
          display: 'flex',
          alignItems: 'center',
          padding: '80px'
        }}>
          <div style={{ maxWidth: '440px' }}>
            {/* Top Switcher */}
            <div style={{
              display: 'flex',
              gap: '24px',
              marginBottom: '32px'
            }}>
              <button
                onClick={() => setSelectedTop('light')}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '12px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: selectedTop === 'light' ? '#1a1a1a' : '#999',
                  cursor: 'pointer',
                  paddingBottom: '8px',
                  borderBottom: selectedTop === 'light' ? '2px solid #C0785C' : '2px solid transparent'
                }}
              >
                Light Support
              </button>
              <button
                onClick={() => setSelectedTop('high')}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '12px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: selectedTop === 'high' ? '#1a1a1a' : '#999',
                  cursor: 'pointer',
                  paddingBottom: '8px',
                  borderBottom: selectedTop === 'high' ? '2px solid #1E4D6B' : '2px solid transparent'
                }}
              >
                High Support
              </button>
            </div>

            <p style={{
              fontSize: '11px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: selectedTop === 'light' ? '#C0785C' : '#1E4D6B',
              marginBottom: '12px'
            }}>{currentTop.support}</p>

            <h2 style={{
              fontSize: '42px',
              fontWeight: 200,
              marginBottom: '12px'
            }}>{currentTop.name}</h2>

            <p style={{
              fontSize: '22px',
              fontWeight: 300,
              marginBottom: '24px'
            }}>€{currentTop.price}</p>

            <p style={{
              fontSize: '15px',
              color: '#666',
              lineHeight: 1.8,
              marginBottom: '32px'
            }}>{currentTop.description}</p>

            {/* Features */}
            <div style={{ marginBottom: '32px' }}>
              {currentTop.features.map((feature, i) => (
                <p key={i} style={{
                  fontSize: '13px',
                  color: '#888',
                  lineHeight: 2,
                  paddingLeft: '16px',
                  position: 'relative'
                }}>
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    color: selectedTop === 'light' ? '#C0785C' : '#1E4D6B'
                  }}>—</span>
                  {feature}
                </p>
              ))}
            </div>

            {/* Actions */}
            {!hasMeasurements ? (
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
                  cursor: 'pointer',
                  marginBottom: '12px'
                }}
              >
                Enter Measurements to Continue
              </button>
            ) : (
              <>
                <div style={{
                  padding: '16px',
                  background: fitType === 'standard' ? '#E8F5E9' : '#FFF3E0',
                  marginBottom: '16px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div>
                    <p style={{
                      fontSize: '13px',
                      fontWeight: 500,
                      color: fitType === 'standard' ? '#2E7D32' : '#E65100'
                    }}>
                      {fitType === 'standard' ? '✓ Standard Fit' : '✦ Custom Fit'}
                    </p>
                    <p style={{ fontSize: '12px', color: '#666' }}>
                      {fitType === 'standard' ? '3-5 days' : '2-3 weeks'}
                    </p>
                  </div>
                  <button
                    onClick={() => setMeasurementModalOpen(true)}
                    style={{
                      background: 'none',
                      border: 'none',
                      fontSize: '11px',
                      color: '#888',
                      textDecoration: 'underline',
                      cursor: 'pointer'
                    }}
                  >Edit</button>
                </div>

                <button
                  onClick={() => addToCart(currentTop)}
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
                    marginBottom: '12px'
                  }}
                >
                  Add to Bag — €{currentTop.price}
                </button>
              </>
            )}

            <button
              onClick={() => setBuilderOpen(true)}
              style={{
                width: '100%',
                padding: '18px',
                background: 'transparent',
                border: '1px solid #1a1a1a',
                color: '#1a1a1a',
                fontSize: '12px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                cursor: 'pointer'
              }}
            >
              Build a Set — €220
            </button>

            <p style={{
              fontSize: '12px',
              color: '#888',
              textAlign: 'center',
              marginTop: '20px'
            }}>
              49% of women need different top & bottom sizes
            </p>
          </div>
        </div>
      </section>

      {/* Why Two Tops Section */}
      <section style={{
        padding: '120px 48px',
        background: '#0a0a0a',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{
            fontSize: '11px',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#C0785C',
            marginBottom: '24px'
          }}>Why Two Tops?</p>
          <h2 style={{
            fontSize: 'clamp(28px, 5vw, 42px)',
            fontWeight: 200,
            lineHeight: 1.4,
            marginBottom: '48px'
          }}>
            Because a C-cup and an A-cup don't need the same swimwear. 
            Your measurements tell us which one is right for you.
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '48px',
            textAlign: 'left'
          }}>
            <div style={{
              padding: '32px',
              background: 'rgba(192, 120, 92, 0.1)',
              borderLeft: '3px solid #C0785C'
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: 400,
                marginBottom: '12px'
              }}>Light Support</h3>
              <p style={{
                fontSize: '14px',
                color: 'rgba(255,255,255,0.6)',
                lineHeight: 1.7
              }}>
                For A-C cups. Triangle design with adjustable ties. 
                Freedom of movement without sacrificing shape.
              </p>
            </div>
            <div style={{
              padding: '32px',
              background: 'rgba(30, 77, 107, 0.1)',
              borderLeft: '3px solid #1E4D6B'
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: 400,
                marginBottom: '12px'
              }}>High Support</h3>
              <p style={{
                fontSize: '14px',
                color: 'rgba(255,255,255,0.6)',
                lineHeight: 1.7
              }}>
                For C-F cups. Structured cups with wide underband. 
                Real support without underwire discomfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Split */}
      <section style={{
        minHeight: '80vh',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr'
      }}>
        <div style={{
          background: tops.light.gradient,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'rgba(255,255,255,0.15)',
            fontSize: '11px',
            letterSpacing: '0.15em'
          }}>LIFESTYLE PHOTO</div>
          <div style={{
            position: 'absolute',
            bottom: '48px',
            left: '48px'
          }}>
            <p style={{ fontSize: '11px', letterSpacing: '0.15em', opacity: 0.7, marginBottom: '8px' }}>A-C CUP</p>
            <h3 style={{ fontSize: '28px', fontWeight: 300 }}>Light Support</h3>
            <p style={{ fontSize: '18px', marginTop: '8px', opacity: 0.8 }}>€120</p>
          </div>
        </div>
        <div style={{
          background: tops.high.gradient,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'rgba(255,255,255,0.15)',
            fontSize: '11px',
            letterSpacing: '0.15em'
          }}>LIFESTYLE PHOTO</div>
          <div style={{
            position: 'absolute',
            bottom: '48px',
            right: '48px',
            textAlign: 'right'
          }}>
            <p style={{ fontSize: '11px', letterSpacing: '0.15em', opacity: 0.7, marginBottom: '8px' }}>C-F CUP</p>
            <h3 style={{ fontSize: '28px', fontWeight: 300 }}>High Support</h3>
            <p style={{ fontSize: '18px', marginTop: '8px', opacity: 0.8 }}>€120</p>
          </div>
        </div>
      </section>

      {/* Complete the Set CTA */}
      <section style={{
        padding: '120px 48px',
        background: '#FFFFFF',
        color: '#1a1a1a',
        textAlign: 'center'
      }}>
        <p style={{
          fontSize: '11px',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: '#C0785C',
          marginBottom: '24px'
        }}>Build Your Set</p>
        <h2 style={{
          fontSize: '36px',
          fontWeight: 200,
          marginBottom: '16px'
        }}>Any Top + Any Bottom = €220</h2>
        <p style={{
          fontSize: '16px',
          color: '#666',
          marginBottom: '40px'
        }}>
          Mix sizes freely. Your top and bottom don't have to match.
        </p>
        <button
          onClick={() => setBuilderOpen(true)}
          style={{
            background: '#1a1a1a',
            border: 'none',
            color: '#FFFFFF',
            padding: '20px 64px',
            fontSize: '12px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            cursor: 'pointer'
          }}
        >
          Build Your Set
        </button>
      </section>

      {/* Bikini Builder Slide-out */}
      {builderOpen && (
        <div
          onClick={() => setBuilderOpen(false)}
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
              width: '520px',
              height: '100%',
              background: '#FFFFFF',
              color: '#1a1a1a',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{
              padding: '24px 32px',
              borderBottom: '1px solid #f0f0f0',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <h2 style={{ fontSize: '16px', fontWeight: 400, letterSpacing: '0.1em' }}>Build Your Set</h2>
              <button
                onClick={() => setBuilderOpen(false)}
                style={{ background: 'none', border: 'none', fontSize: '28px', cursor: 'pointer' }}
              >×</button>
            </div>

            <div style={{ flex: 1, overflow: 'auto', padding: '32px' }}>
              {/* Top Selection */}
              <div style={{ marginBottom: '32px' }}>
                <p style={{
                  fontSize: '11px',
                  letterSpacing: '0.15em',
                  color: '#888',
                  marginBottom: '16px'
                }}>1. CHOOSE YOUR TOP</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  {['light', 'high'].map((top) => (
                    <div
                      key={top}
                      onClick={() => setSelectedTop(top)}
                      style={{
                        padding: '16px',
                        border: selectedTop === top ? '2px solid #1a1a1a' : '1px solid #e0e0e0',
                        cursor: 'pointer',
                        textAlign: 'center'
                      }}
                    >
                      <div style={{
                        width: '100%',
                        aspectRatio: '1',
                        background: tops[top].gradient,
                        marginBottom: '12px'
                      }} />
                      <p style={{ fontSize: '13px', fontWeight: 500 }}>{tops[top].name}</p>
                      <p style={{ fontSize: '11px', color: '#888' }}>{tops[top].support}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Selection */}
              <div style={{ marginBottom: '32px' }}>
                <p style={{
                  fontSize: '11px',
                  letterSpacing: '0.15em',
                  color: '#888',
                  marginBottom: '16px'
                }}>2. ADD YOUR BOTTOM</p>
                <div
                  onClick={() => setSelectedBottom('classic')}
                  style={{
                    padding: '16px',
                    border: selectedBottom ? '2px solid #1a1a1a' : '1px solid #e0e0e0',
                    cursor: 'pointer',
                    display: 'flex',
                    gap: '16px',
                    alignItems: 'center'
                  }}
                >
                  <div style={{
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(165deg, #D4C4A8 0%, #E8D5BE 100%)'
                  }} />
                  <div>
                    <p style={{ fontSize: '14px', fontWeight: 500 }}>Classic Bottom</p>
                    <p style={{ fontSize: '12px', color: '#888' }}>Medium coverage</p>
                  </div>
                </div>
              </div>

              {/* Fit Status */}
              {!hasMeasurements ? (
                <div style={{
                  padding: '20px',
                  background: '#f8f8f8',
                  marginBottom: '24px',
                  textAlign: 'center'
                }}>
                  <p style={{ fontSize: '13px', color: '#666', marginBottom: '12px' }}>
                    Enter your measurements for the perfect fit
                  </p>
                  <button
                    onClick={() => {
                      setBuilderOpen(false);
                      setMeasurementModalOpen(true);
                    }}
                    style={{
                      background: '#1a1a1a',
                      border: 'none',
                      color: '#FFFFFF',
                      padding: '12px 24px',
                      fontSize: '11px',
                      letterSpacing: '0.1em',
                      cursor: 'pointer'
                    }}
                  >
                    Enter Measurements
                  </button>
                </div>
              ) : (
                <div style={{
                  padding: '16px',
                  background: fitType === 'standard' ? '#E8F5E9' : '#FFF3E0',
                  marginBottom: '24px'
                }}>
                  <p style={{
                    fontSize: '13px',
                    color: fitType === 'standard' ? '#2E7D32' : '#E65100'
                  }}>
                    {fitType === 'standard' ? '✓ Ships in 3-5 days' : '✦ Custom fit: 2-3 weeks'}
                  </p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div style={{
              padding: '24px 32px',
              borderTop: '1px solid #f0f0f0',
              background: '#fafafa'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '16px'
              }}>
                <span style={{ fontSize: '14px' }}>Set Total</span>
                <span style={{ fontSize: '24px', fontWeight: 300 }}>€220</span>
              </div>
              <button
                onClick={hasMeasurements && selectedBottom ? addSetToCart : () => {}}
                style={{
                  width: '100%',
                  padding: '18px',
                  background: hasMeasurements && selectedBottom ? '#1a1a1a' : '#e0e0e0',
                  border: 'none',
                  color: '#FFFFFF',
                  fontSize: '11px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  cursor: hasMeasurements && selectedBottom ? 'pointer' : 'not-allowed'
                }}
              >
                {!hasMeasurements ? 'Enter Measurements First' : !selectedBottom ? 'Select a Bottom' : 'Add Set to Bag'}
              </button>
            </div>
          </div>
        </div>
      )}

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
                color: '#1a1a1a'
              }}
            >×</button>

            <div style={{ padding: '48px 40px' }}>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '48px' }}>
                {measurementGuide.map((_, i) => (
                  <div key={i} style={{
                    flex: 1,
                    height: '3px',
                    background: i <= measurementStep ? '#1a1a1a' : '#e8e8e8'
                  }} />
                ))}
              </div>

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
                  marginBottom: '32px'
                }}>{measurementGuide[measurementStep].instruction}</p>

                <div style={{
                  background: '#f0f0f0',
                  aspectRatio: '16/9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '32px'
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
                      outline: 'none'
                    }}
                  />
                  <span style={{
                    position: 'absolute',
                    right: '24px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#999'
                  }}>cm</span>
                </div>

                <p style={{
                  fontSize: '13px',
                  color: '#888',
                  marginBottom: '32px'
                }}>💡 {measurementGuide[measurementStep].tip}</p>

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
                      background: item.gradient || 'linear-gradient(165deg, #D4C4A8 0%, #E8D5BE 100%)'
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
        }
        
        input[type=number] {
          -moz-appearance: textfield;
        }
      `}</style>
    </div>
  );
};

export default IsolaeBikiniTops;

const BikiniTops = IsolaeBikiniTops;
export { BikiniTops };
