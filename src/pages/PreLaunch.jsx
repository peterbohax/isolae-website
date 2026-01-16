import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const IsolaePreLaunch = () => {
  const [loaded, setLoaded] = useState(false);
  const [currentStep, setCurrentStep] = useState('intro'); // intro, measurements, complete
  const [measurementStep, setMeasurementStep] = useState(0);
  const [email, setEmail] = useState('');
  const [measurements, setMeasurements] = useState({
    torso: '',
    bust: '',
    underbust: '',
    hip: ''
  });
  const [showVideo, setShowVideo] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const measurementGuide = [
    {
      key: 'torso',
      label: 'Torso Length',
      instruction: 'Stand straight. Measure from your shoulder, down the front of your body, through your legs, and back up to the same shoulder.',
      why: 'This is why one-pieces never fit. Everyone\'s torso is different — short torso, long torso, it matters. We need this to make yours perfect.',
      tip: 'Keep the tape snug but not tight. Have someone help if possible.',
      icon: '📏',
      range: '120-180 cm typical'
    },
    {
      key: 'bust',
      label: 'Bust Circumference',
      instruction: 'Without a bra, measure around the fullest part of your bust. Keep the tape parallel to the floor.',
      why: 'Standard sizes assume your bust matches your hip. For 49% of women, it doesn\'t. This measurement determines your cup coverage.',
      tip: 'Breathe normally. Don\'t pull the tape too tight or too loose.',
      icon: '👙',
      range: '75-120 cm typical'
    },
    {
      key: 'underbust',
      label: 'Underbust Circumference',
      instruction: 'Without a bra, measure directly under your bust where a bra band would sit.',
      why: 'The difference between your bust and underbust determines your support needs. This is how we match you to our Light or High Support tops.',
      tip: 'This should feel snug, like a well-fitting band.',
      icon: '📐',
      range: '65-100 cm typical'
    },
    {
      key: 'hip',
      label: 'Lower Hip Size',
      instruction: 'Measure around the widest part of your lower hips and bottom. Stand with feet together.',
      why: 'Bottoms that fit your waist but not your hips? Or vice versa? This measurement solves that. We size to your actual body.',
      tip: 'Usually 20-25cm below your natural waist. Find the widest point.',
      icon: '✨',
      range: '85-130 cm typical'
    }
  ];

  const handleSubmit = () => {
    // In production, this would submit to backend
    setCurrentStep('complete');
  };

  const allMeasurementsComplete = Object.values(measurements).every(v => v !== '');

  return (
    <div style={{
      minHeight: '100vh',
      fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
      background: '#0a0a0a',
      color: '#FFFFFF'
    }}>
      
      {/* Navigation - Minimal */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '24px 48px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 100,
        background: 'linear-gradient(180deg, rgba(10,10,10,0.9) 0%, transparent 100%)'
      }}>
        <Link to="/" style={{
          fontSize: '22px',
          fontWeight: 300,
          letterSpacing: '0.35em',
          textTransform: 'uppercase',
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(-10px)',
          transition: 'all 0.8s ease',
          color: '#FFFFFF',
          textDecoration: 'none'
        }}>
          Isolae
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <Link to="/shop" style={{
            fontSize: '11px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#FFFFFF',
            textDecoration: 'none',
            opacity: 0.7
          }}>Preview Shop</Link>
          <div style={{
            fontSize: '11px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#C0785C',
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.8s ease 0.2s'
          }}>
            Coming Spring 2026
          </div>
        </div>
      </nav>

      {/* Intro Section */}
      {currentStep === 'intro' && (
        <section style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column'
        }}>
          {/* Hero */}
          <div style={{
            flex: 1,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            alignItems: 'center',
            padding: '120px 48px 60px',
            position: 'relative',
            gap: '60px'
          }}>
            {/* Left - Content */}
            <div style={{ position: 'relative', zIndex: 10 }}>
              <p style={{
                fontSize: '11px',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: '#C0785C',
                marginBottom: '32px',
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.8s ease 0.2s'
              }}>
                Swimwear That Actually Fits
              </p>
              
              <h1 style={{
                fontSize: 'clamp(36px, 5vw, 56px)',
                fontWeight: 200,
                lineHeight: 1.15,
                marginBottom: '28px',
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.8s ease 0.3s'
              }}>
                Standard sizing is broken.<br />
                <span style={{ color: '#C0785C' }}>We're fixing it.</span>
              </h1>

              <p style={{
                fontSize: '16px',
                fontWeight: 300,
                lineHeight: 1.8,
                color: 'rgba(255,255,255,0.7)',
                maxWidth: '480px',
                marginBottom: '40px',
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.8s ease 0.4s'
              }}>
                Four measurements. That's all we need to craft swimwear that fits 
                your actual body — not some arbitrary S, M, L invented 80 years ago.
              </p>

              <div style={{
                display: 'flex',
                gap: '16px',
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.8s ease 0.5s'
              }}>
                <button
                  onClick={() => setCurrentStep('measurements')}
                  style={{
                    background: '#FFFFFF',
                    border: 'none',
                    color: '#0a0a0a',
                    padding: '18px 40px',
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
                    e.target.style.color = '#0a0a0a';
                  }}
                >
                  Join the Waitlist
                </button>
              </div>

              <p style={{
                marginTop: '16px',
                fontSize: '12px',
                color: 'rgba(255,255,255,0.4)',
                opacity: loaded ? 1 : 0,
                transition: 'opacity 0.8s ease 0.6s'
              }}>
                Takes ~5 minutes • Get guaranteed first access
              </p>
            </div>

            {/* Right - Hero Image Composition */}
            <div style={{
              position: 'relative',
              height: '100%',
              minHeight: '500px',
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateX(0)' : 'translateX(30px)',
              transition: 'all 1s ease 0.4s'
            }}>
              {/* Main image placeholder - model silhouette */}
              <div style={{
                position: 'absolute',
                top: '5%',
                right: '10%',
                width: '65%',
                height: '90%',
                background: 'linear-gradient(165deg, #1E4D6B 0%, #2D6A8F 40%, #1E4D6B 100%)',
                overflow: 'hidden'
              }}>
                {/* Silhouette suggestion */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '70%',
                  height: '95%',
                  background: 'linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.05) 20%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.05) 80%, transparent 100%)',
                  borderRadius: '40% 40% 0 0'
                }} />
                {/* Swimsuit indication */}
                <div style={{
                  position: 'absolute',
                  top: '15%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '40%',
                  height: '50%',
                  background: 'rgba(0,0,0,0.3)',
                  borderRadius: '30% 30% 40% 40%'
                }} />
                {/* Water reflection effect */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '30%',
                  background: 'linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.05) 100%)'
                }} />
              </div>

              {/* Secondary image - terracotta */}
              <div style={{
                position: 'absolute',
                bottom: '10%',
                left: '0',
                width: '45%',
                aspectRatio: '3/4',
                background: 'linear-gradient(165deg, #C0785C 0%, #D4A088 50%, #C0785C 100%)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
                overflow: 'hidden'
              }}>
                {/* Silhouette */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '80%',
                  height: '90%',
                  background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.05) 100%)',
                  borderRadius: '35% 35% 0 0'
                }} />
                {/* Product tag */}
                <div style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  background: 'rgba(255,255,255,0.95)',
                  padding: '8px 12px',
                  fontSize: '10px',
                  color: '#1a1a1a',
                  letterSpacing: '0.1em'
                }}>
                  THE ESSENTIAL • 
                </div>
              </div>

              {/* Accent shape */}
              <div style={{
                position: 'absolute',
                top: '0',
                right: '0',
                width: '120px',
                height: '120px',
                border: '1px solid rgba(192, 120, 92, 0.3)',
                borderRadius: '50%'
              }} />
            </div>
          </div>

          {/* Stats Bar */}
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            padding: '48px',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '32px',
            maxWidth: '1000px',
            margin: '0 auto',
            width: '100%'
          }}>
            {[
              { stat: '49%', label: 'of women need different top & bottom sizes' },
              { stat: '40%', label: 'industry return rate for swimwear' },
              { stat: '4', label: 'measurements for perfect fit' },
              { stat: 'Free', label: 'custom fit at no extra cost' }
            ].map((item, i) => (
              <div key={i} style={{
                textAlign: 'center',
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.6s ease ${0.6 + i * 0.1}s`
              }}>
                <p style={{
                  fontSize: '36px',
                  fontWeight: 200,
                  color: '#C0785C',
                  marginBottom: '8px'
                }}>{item.stat}</p>
                <p style={{
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.5)',
                  lineHeight: 1.5
                }}>{item.label}</p>
              </div>
            ))}
          </div>

          {/* Product Preview Section */}
          <div style={{
            padding: '100px 48px',
            background: '#FFFFFF',
            color: '#1a1a1a'
          }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                <p style={{
                  fontSize: '11px',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  color: '#C0785C',
                  marginBottom: '16px'
                }}>The Collection</p>
                <h2 style={{
                  fontSize: '42px',
                  fontWeight: 200,
                  marginBottom: '16px',
                  color: '#1a1a1a'
                }}>Four Styles. Made for You.</h2>
                <p style={{
                  fontSize: '16px',
                  color: '#666',
                  maxWidth: '500px',
                  margin: '0 auto'
                }}>
                  Premium swimwear launching Spring 2026. Each piece crafted to your measurements.
                </p>
              </div>

              {/* Hero Product - The Essential One Piece */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1.1fr 1fr',
                gap: '40px',
                marginBottom: '60px',
                alignItems: 'center'
              }}>
                {/* Large Image */}
                <div style={{
                  aspectRatio: '4/5',
                  background: 'linear-gradient(165deg, #1a1a1a 0%, #2d2d2d 30%, #1a1a1a 70%, #0a0a0a 100%)',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  {/* Photo placeholder indicator */}
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    color: 'rgba(255,255,255,0.3)'
                  }}>
                    <div style={{
                      width: '80px',
                      height: '80px',
                      border: '2px dashed rgba(255,255,255,0.2)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 16px',
                      fontSize: '32px'
                    }}>📷</div>
                    <p style={{ fontSize: '12px', letterSpacing: '0.1em' }}>PRODUCT PHOTO</p>
                    <p style={{ fontSize: '10px', marginTop: '4px', opacity: 0.6 }}>Model wearing The Essential</p>
                  </div>
                  {/* Lifestyle suggestion overlay */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '40%',
                    background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.6) 100%)'
                  }} />
                  <div style={{
                    position: 'absolute',
                    top: '24px',
                    left: '24px',
                    background: '#C0785C',
                    color: '#FFFFFF',
                    padding: '8px 16px',
                    fontSize: '10px',
                    letterSpacing: '0.15em'
                  }}>HERO PIECE</div>
                </div>

                {/* Product Info */}
                <div style={{ padding: '40px 0' }}>
                  <p style={{
                    fontSize: '11px',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: '#C0785C',
                    marginBottom: '16px'
                  }}>One Piece</p>
                  <h3 style={{
                    fontSize: '48px',
                    fontWeight: 200,
                    marginBottom: '16px',
                    color: '#1a1a1a'
                  }}>The Essential</h3>
                  <p style={{
                    fontSize: '16px',
                    color: '#666',
                    lineHeight: 1.8,
                    marginBottom: '32px',
                    maxWidth: '400px'
                  }}>
                    Engineered for your unique torso length. Full coverage meets flattering cut. 
                    The piece that started it all — because one-pieces should fit everyone.
                  </p>
                  <div style={{
                    display: 'flex',
                    gap: '24px',
                    marginBottom: '32px'
                  }}>
                    <div>
                      <p style={{ fontSize: '11px', color: '#999', marginBottom: '4px' }}>TORSO-MAPPED</p>
                      <p style={{ fontSize: '14px', color: '#1a1a1a' }}>Custom length fit</p>
                    </div>
                    <div>
                      <p style={{ fontSize: '11px', color: '#999', marginBottom: '4px' }}>COVERAGE</p>
                      <p style={{ fontSize: '14px', color: '#1a1a1a' }}>Full</p>
                    </div>
                    <div>
                      <p style={{ fontSize: '11px', color: '#999', marginBottom: '4px' }}>MATERIAL</p>
                      <p style={{ fontSize: '14px', color: '#1a1a1a' }}>Italian Lycra</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bikini Grid - 3 products */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '24px',
                marginBottom: '60px'
              }}>
                {/* Light Support Top */}
                <div>
                  <div style={{
                    aspectRatio: '4/5',
                    background: 'linear-gradient(165deg, #C0785C 0%, #D4A088 40%, #C0785C 100%)',
                    position: 'relative',
                    overflow: 'hidden',
                    marginBottom: '20px'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      textAlign: 'center',
                      color: 'rgba(255,255,255,0.4)'
                    }}>
                      <div style={{
                        width: '60px',
                        height: '60px',
                        border: '2px dashed rgba(255,255,255,0.3)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 12px',
                        fontSize: '24px'
                      }}>📷</div>
                      <p style={{ fontSize: '10px', letterSpacing: '0.1em' }}>PRODUCT PHOTO</p>
                    </div>
                  </div>
                  <p style={{ fontSize: '10px', letterSpacing: '0.15em', color: '#888', marginBottom: '6px' }}>BIKINI TOP • A-C CUP</p>
                  <h4 style={{ fontSize: '20px', fontWeight: 300, color: '#1a1a1a' }}>Light Support</h4>
                </div>

                {/* High Support Top */}
                <div>
                  <div style={{
                    aspectRatio: '4/5',
                    background: 'linear-gradient(165deg, #1E4D6B 0%, #2D6A8F 40%, #1E4D6B 100%)',
                    position: 'relative',
                    overflow: 'hidden',
                    marginBottom: '20px'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      textAlign: 'center',
                      color: 'rgba(255,255,255,0.4)'
                    }}>
                      <div style={{
                        width: '60px',
                        height: '60px',
                        border: '2px dashed rgba(255,255,255,0.3)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 12px',
                        fontSize: '24px'
                      }}>📷</div>
                      <p style={{ fontSize: '10px', letterSpacing: '0.1em' }}>PRODUCT PHOTO</p>
                    </div>
                  </div>
                  <p style={{ fontSize: '10px', letterSpacing: '0.15em', color: '#888', marginBottom: '6px' }}>BIKINI TOP • C-F CUP</p>
                  <h4 style={{ fontSize: '20px', fontWeight: 300, color: '#1a1a1a' }}>High Support</h4>
                </div>

                {/* Classic Bottom */}
                <div>
                  <div style={{
                    aspectRatio: '4/5',
                    background: 'linear-gradient(165deg, #D4C4A8 0%, #E8D5BE 40%, #D4C4A8 100%)',
                    position: 'relative',
                    overflow: 'hidden',
                    marginBottom: '20px'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      textAlign: 'center',
                      color: 'rgba(0,0,0,0.3)'
                    }}>
                      <div style={{
                        width: '60px',
                        height: '60px',
                        border: '2px dashed rgba(0,0,0,0.2)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 12px',
                        fontSize: '24px'
                      }}>📷</div>
                      <p style={{ fontSize: '10px', letterSpacing: '0.1em' }}>PRODUCT PHOTO</p>
                    </div>
                  </div>
                  <p style={{ fontSize: '10px', letterSpacing: '0.15em', color: '#888', marginBottom: '6px' }}>BIKINI BOTTOM</p>
                  <h4 style={{ fontSize: '20px', fontWeight: 300, color: '#1a1a1a' }}>Classic</h4>
                </div>
              </div>

              {/* Lifestyle Image Strip */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '2fr 1fr 1fr',
                gap: '16px',
                marginBottom: '60px'
              }}>
                <div style={{
                  aspectRatio: '16/9',
                  background: 'linear-gradient(135deg, #2D6A8F 0%, #1E4D6B 50%, #0a0a0a 100%)',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    color: 'rgba(255,255,255,0.3)'
                  }}>
                    <p style={{ fontSize: '11px', letterSpacing: '0.15em' }}>LIFESTYLE PHOTO</p>
                    <p style={{ fontSize: '10px', marginTop: '4px', opacity: 0.6 }}>Beach / Pool scene</p>
                  </div>
                </div>
                <div style={{
                  aspectRatio: '1',
                  background: 'linear-gradient(165deg, #C0785C 0%, #D4A088 100%)',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    color: 'rgba(255,255,255,0.3)'
                  }}>
                    <p style={{ fontSize: '10px', letterSpacing: '0.1em' }}>DETAIL SHOT</p>
                  </div>
                </div>
                <div style={{
                  aspectRatio: '1',
                  background: 'linear-gradient(165deg, #E8D5BE 0%, #D4C4A8 100%)',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    color: 'rgba(0,0,0,0.25)'
                  }}>
                    <p style={{ fontSize: '10px', letterSpacing: '0.1em' }}>DETAIL SHOT</p>
                  </div>
                </div>
              </div>

              {/* Mix & Match Banner */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                background: '#f8f8f8',
                marginBottom: '48px'
              }}>
                <div style={{ padding: '48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <p style={{ fontSize: '11px', letterSpacing: '0.2em', color: '#C0785C', marginBottom: '12px' }}>MIX & MATCH</p>
                  <h3 style={{ fontSize: '28px', fontWeight: 300, marginBottom: '16px', color: '#1a1a1a' }}>Build Your Perfect Set</h3>
                  <p style={{ fontSize: '15px', color: '#666', lineHeight: 1.7, marginBottom: '24px' }}>
                    49% of women need different top and bottom sizes. Finally, swimwear that lets you mix any top with any bottom.
                  </p>
                  <div style={{ display: 'flex', gap: '32px' }}>
                    <div>
                      <p style={{ fontSize: '24px', fontWeight: 300, color: '#C0785C', marginBottom: '4px' }}>2 Tops</p>
                      <p style={{ fontSize: '12px', color: '#888' }}>Light or High Support</p>
                    </div>
                    <div style={{ borderLeft: '1px solid #e0e0e0', paddingLeft: '32px' }}>
                      <p style={{ fontSize: '24px', fontWeight: 300, color: '#1a1a1a', marginBottom: '4px' }}>No Extra</p>
                      <p style={{ fontSize: '12px', color: '#888' }}>For custom fit</p>
                    </div>
                  </div>
                </div>
                <div style={{
                  background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    color: 'rgba(255,255,255,0.3)'
                  }}>
                    <p style={{ fontSize: '11px', letterSpacing: '0.15em' }}>BIKINI SET PHOTO</p>
                    <p style={{ fontSize: '10px', marginTop: '4px', opacity: 0.6 }}>Top + Bottom styled together</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div style={{ textAlign: 'center' }}>
                <button
                  onClick={() => setCurrentStep('measurements')}
                  style={{
                    background: '#1a1a1a',
                    border: 'none',
                    color: '#FFFFFF',
                    padding: '20px 64px',
                    fontSize: '12px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'background 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.background = '#C0785C'}
                  onMouseLeave={(e) => e.target.style.background = '#1a1a1a'}
                >
                  Join Waitlist — Get First Access
                </button>
                <p style={{ marginTop: '16px', fontSize: '13px', color: '#888' }}>
                  Be the first to shop when we launch Spring 2026
                </p>
              </div>
            </div>
          </div>

          {/* How It Works Preview */}
          <div style={{
            padding: '80px 48px',
            background: '#0a0a0a',
            borderTop: '1px solid rgba(255,255,255,0.05)'
          }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
              <h2 style={{
                fontSize: '28px',
                fontWeight: 300,
                textAlign: 'center',
                marginBottom: '60px'
              }}>How It Works</h2>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '48px'
              }}>
                {[
                  {
                    num: '01',
                    title: 'Share Your Measurements',
                    desc: 'Four simple measurements with our video guides. Takes about 5 minutes.'
                  },
                  {
                    num: '02',
                    title: 'We Find Your Fit',
                    desc: 'Our system matches you to a pattern or creates a custom one at no extra cost.'
                  },
                  {
                    num: '03',
                    title: 'Crafted for You',
                    desc: 'Made in the EU. Ships in 3-5 days (standard) or 2-3 weeks (custom).'
                  }
                ].map((step, i) => (
                  <div key={i} style={{ textAlign: 'center' }}>
                    <p style={{
                      fontSize: '48px',
                      fontWeight: 200,
                      color: 'rgba(255,255,255,0.1)',
                      marginBottom: '16px'
                    }}>{step.num}</p>
                    <h3 style={{
                      fontSize: '16px',
                      fontWeight: 500,
                      marginBottom: '12px'
                    }}>{step.title}</h3>
                    <p style={{
                      fontSize: '14px',
                      color: 'rgba(255,255,255,0.5)',
                      lineHeight: 1.7
                    }}>{step.desc}</p>
                  </div>
                ))}
              </div>

              <div style={{ textAlign: 'center', marginTop: '60px' }}>
                <button
                  onClick={() => setCurrentStep('measurements')}
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(255,255,255,0.3)',
                    color: '#FFFFFF',
                    padding: '16px 40px',
                    fontSize: '11px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#FFFFFF';
                    e.target.style.color = '#0a0a0a';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.color = '#FFFFFF';
                  }}
                >
                  Start Now — Get First Access
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Measurements Section */}
      {currentStep === 'measurements' && (
        <section style={{
          minHeight: '100vh',
          display: 'flex',
          paddingTop: '80px'
        }}>
          {/* Left - Progress & Info */}
          <div style={{
            width: '400px',
            background: 'rgba(255,255,255,0.02)',
            borderRight: '1px solid rgba(255,255,255,0.08)',
            padding: '48px',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <button
              onClick={() => setCurrentStep('intro')}
              style={{
                background: 'none',
                border: 'none',
                color: 'rgba(255,255,255,0.5)',
                fontSize: '12px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '48px',
                padding: 0
              }}
            >
              ← Back
            </button>

            <h2 style={{
              fontSize: '24px',
              fontWeight: 300,
              marginBottom: '12px'
            }}>Your Measurements</h2>
            <p style={{
              fontSize: '13px',
              color: 'rgba(255,255,255,0.5)',
              marginBottom: '48px'
            }}>
              Complete all four to join the waitlist
            </p>

            {/* Progress Steps */}
            <div style={{ flex: 1 }}>
              {measurementGuide.map((step, i) => (
                <div
                  key={i}
                  onClick={() => setMeasurementStep(i)}
                  style={{
                    display: 'flex',
                    gap: '16px',
                    padding: '20px 0',
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                    cursor: 'pointer',
                    opacity: measurementStep === i ? 1 : 0.5,
                    transition: 'opacity 0.2s'
                  }}
                >
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: measurements[step.key] ? '#C0785C' : 'rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '16px',
                    transition: 'background 0.3s'
                  }}>
                    {measurements[step.key] ? '✓' : step.icon}
                  </div>
                  <div>
                    <p style={{
                      fontSize: '14px',
                      fontWeight: measurementStep === i ? 500 : 400,
                      marginBottom: '4px'
                    }}>{step.label}</p>
                    {measurements[step.key] && (
                      <p style={{
                        fontSize: '13px',
                        color: '#C0785C'
                      }}>{measurements[step.key]} cm</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Email Input */}
            <div style={{ marginTop: '32px' }}>
              <p style={{
                fontSize: '11px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.4)',
                marginBottom: '12px'
              }}>Your Email</p>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                style={{
                  width: '100%',
                  padding: '16px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#FFFFFF',
                  fontSize: '14px',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          {/* Right - Current Measurement */}
          <div style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '48px'
          }}>
            <div style={{ maxWidth: '560px', width: '100%' }}>
              {/* Current Step Header */}
              <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px',
                  fontSize: '36px'
                }}>
                  {measurementGuide[measurementStep].icon}
                </div>
                <p style={{
                  fontSize: '11px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#C0785C',
                  marginBottom: '12px'
                }}>Measurement {measurementStep + 1} of 4</p>
                <h3 style={{
                  fontSize: '32px',
                  fontWeight: 300,
                  marginBottom: '16px'
                }}>{measurementGuide[measurementStep].label}</h3>
              </div>

              {/* Video Tutorial */}
              <div
                onClick={() => setShowVideo(true)}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  aspectRatio: '16/9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '32px',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                }}
              >
                <div style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '50%',
                  background: '#C0785C',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.3s ease'
                }}>
                  <span style={{ color: '#FFFFFF', fontSize: '24px', marginLeft: '4px' }}>▶</span>
                </div>
                <p style={{
                  position: 'absolute',
                  bottom: '20px',
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.5)',
                  letterSpacing: '0.1em'
                }}>Watch how to measure</p>
              </div>

              {/* Instruction */}
              <div style={{
                background: 'rgba(255,255,255,0.03)',
                padding: '24px',
                marginBottom: '24px'
              }}>
                <p style={{
                  fontSize: '15px',
                  lineHeight: 1.7,
                  color: 'rgba(255,255,255,0.8)',
                  marginBottom: '16px'
                }}>
                  {measurementGuide[measurementStep].instruction}
                </p>
                <p style={{
                  fontSize: '13px',
                  color: 'rgba(255,255,255,0.5)',
                  fontStyle: 'italic'
                }}>
                  💡 {measurementGuide[measurementStep].tip}
                </p>
              </div>

              {/* Why This Matters */}
              <div style={{
                padding: '20px 24px',
                background: 'rgba(192, 120, 92, 0.1)',
                borderLeft: '3px solid #C0785C',
                marginBottom: '32px'
              }}>
                <p style={{
                  fontSize: '13px',
                  color: 'rgba(255,255,255,0.7)',
                  lineHeight: 1.7
                }}>
                  <strong style={{ color: '#C0785C' }}>Why this matters:</strong> {measurementGuide[measurementStep].why}
                </p>
              </div>

              {/* Input */}
              <div style={{
                display: 'flex',
                gap: '16px',
                alignItems: 'center',
                marginBottom: '32px'
              }}>
                <div style={{ flex: 1, position: 'relative' }}>
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
                      padding: '20px 70px 20px 24px',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      color: '#FFFFFF',
                      fontSize: '20px',
                      textAlign: 'center',
                      outline: 'none',
                      transition: 'border-color 0.2s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#C0785C'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.15)'}
                  />
                  <span style={{
                    position: 'absolute',
                    right: '24px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    fontSize: '16px',
                    color: 'rgba(255,255,255,0.4)'
                  }}>cm</span>
                </div>
              </div>

              <p style={{
                fontSize: '12px',
                color: 'rgba(255,255,255,0.3)',
                textAlign: 'center',
                marginBottom: '32px'
              }}>
                Typical range: {measurementGuide[measurementStep].range}
              </p>

              {/* Navigation */}
              <div style={{ display: 'flex', gap: '12px' }}>
                {measurementStep > 0 && (
                  <button
                    onClick={() => setMeasurementStep(measurementStep - 1)}
                    style={{
                      flex: 1,
                      padding: '18px',
                      background: 'transparent',
                      border: '1px solid rgba(255,255,255,0.2)',
                      color: '#FFFFFF',
                      fontSize: '11px',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      cursor: 'pointer'
                    }}
                  >Previous</button>
                )}
                
                {measurementStep < 3 ? (
                  <button
                    onClick={() => setMeasurementStep(measurementStep + 1)}
                    disabled={!measurements[measurementGuide[measurementStep].key]}
                    style={{
                      flex: 2,
                      padding: '18px',
                      background: measurements[measurementGuide[measurementStep].key] ? '#FFFFFF' : 'rgba(255,255,255,0.1)',
                      border: 'none',
                      color: measurements[measurementGuide[measurementStep].key] ? '#0a0a0a' : 'rgba(255,255,255,0.3)',
                      fontSize: '11px',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      cursor: measurements[measurementGuide[measurementStep].key] ? 'pointer' : 'not-allowed'
                    }}
                  >Next Measurement</button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={!allMeasurementsComplete || !email}
                    style={{
                      flex: 2,
                      padding: '18px',
                      background: (allMeasurementsComplete && email) ? '#C0785C' : 'rgba(255,255,255,0.1)',
                      border: 'none',
                      color: '#FFFFFF',
                      fontSize: '11px',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      cursor: (allMeasurementsComplete && email) ? 'pointer' : 'not-allowed'
                    }}
                  >
                    {!email ? 'Enter Email to Complete' : 'Join the Waitlist'}
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Complete Section */}
      {currentStep === 'complete' && (
        <section style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '48px',
          textAlign: 'center'
        }}>
          <div style={{ maxWidth: '600px' }}>
            {/* Success Animation */}
            <div style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #C0785C 0%, #D4A088 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 40px',
              fontSize: '48px',
              animation: 'scaleIn 0.5s ease'
            }}>
              ✓
            </div>

            <h1 style={{
              fontSize: '42px',
              fontWeight: 200,
              marginBottom: '24px'
            }}>You're In.</h1>

            <p style={{
              fontSize: '17px',
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.8,
              marginBottom: '40px'
            }}>
              Thank you for sharing your measurements. You've secured 
              <strong style={{ color: '#C0785C' }}> guaranteed first access</strong> when 
              we launch in Spring 2026.
            </p>

            {/* Your Measurements Summary */}
            <div style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.1)',
              padding: '32px',
              marginBottom: '40px',
              textAlign: 'left'
            }}>
              <h3 style={{
                fontSize: '14px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.4)',
                marginBottom: '24px'
              }}>Your Measurements</h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px'
              }}>
                {measurementGuide.map((m, i) => (
                  <div key={i}>
                    <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginBottom: '4px' }}>
                      {m.label}
                    </p>
                    <p style={{ fontSize: '24px', fontWeight: 300 }}>
                      {measurements[m.key]} <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)' }}>cm</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* What's Next */}
            <div style={{
              background: 'rgba(192, 120, 92, 0.1)',
              padding: '24px',
              marginBottom: '40px'
            }}>
              <h4 style={{
                fontSize: '14px',
                fontWeight: 500,
                marginBottom: '12px',
                color: '#C0785C'
              }}>What happens next?</h4>
              <p style={{
                fontSize: '14px',
                color: 'rgba(255,255,255,0.6)',
                lineHeight: 1.7
              }}>
                We'll email you at <strong>{email}</strong> with exclusive updates 
                and first access to shop when we launch. Your measurements are saved 
                — no need to re-enter them.
              </p>
            </div>

            {/* Social Share */}
            <p style={{
              fontSize: '13px',
              color: 'rgba(255,255,255,0.4)',
              marginBottom: '20px'
            }}>Know someone who struggles with swimwear fit?</p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
              <button style={{
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.2)',
                color: '#FFFFFF',
                padding: '12px 24px',
                fontSize: '11px',
                letterSpacing: '0.1em',
                cursor: 'pointer'
              }}>
                Share on Instagram
              </button>
              <button style={{
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.2)',
                color: '#FFFFFF',
                padding: '12px 24px',
                fontSize: '11px',
                letterSpacing: '0.1em',
                cursor: 'pointer'
              }}>
                Copy Link
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer style={{
        padding: '32px 48px',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)' }}>
          © 2025 Isolae. Made in the EU.
        </p>
        <div style={{ display: 'flex', gap: '32px' }}>
          {['Instagram', 'TikTok'].map((s, i) => (
            <a key={i} href="#" style={{
              fontSize: '11px',
              color: 'rgba(255,255,255,0.4)',
              textDecoration: 'none'
            }}>{s}</a>
          ))}
        </div>
      </footer>

      <style>{`
        @keyframes scaleIn {
          from { transform: scale(0); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
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
        
        ::placeholder {
          color: rgba(255,255,255,0.3);
        }
      `}</style>
    </div>
  );
};

export default IsolaePreLaunch;

const PreLaunch = IsolaePreLaunch;
export { PreLaunch };
