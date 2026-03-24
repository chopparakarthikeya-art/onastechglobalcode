import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle
} from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import BackgroundSection from './BackgroundSection';
import { Link as RouterLink } from 'react-router-dom';

const Hero = forwardRef((props, ref) => {
  const slides = props.slides || [];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    let timer;
    if (slides.length > 0) {
      timer = setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 4000);
    }
    return () => clearTimeout(timer);
  }, [currentSlide, slides]);

  useImperativeHandle(ref, () => ({
    setSlide: (index) => {
      if (index >= 0 && index < slides.length) {
        setCurrentSlide(index);
      }
    }
  }));

  return (
    <BackgroundSection
      sx={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: { xs: 8, md: 0 },
        fontFamily: 'sans-serif'
      }}
    >
      {/* ================= BACKGROUND VIDEO ================= */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          '&::after': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(135deg, rgba(11,76,116,0.85), rgba(0,0,0,0.7))'
          }
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        >
          <source src="/videos/BG.mp4" type="video/mp4" />
        </video>
      </Box>

      {/* ================= CONTENT ================= */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          maxWidth: '1200px',
          px: { xs: 2, md: 0 }
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* ===== Coming Soon Badge ===== */}
          <Box
            sx={{
              position: 'absolute',
              top: { xs: -20, md: -10 },
              right: { xs: -20, md: 0 },
              transform: 'rotate(5deg)',
              zIndex: 10
            }}
          >
            <Box
              sx={{
                background:
                  'linear-gradient(135deg, #0B4C74 0%, #4CAF50 100%)',
                px: 3,
                py: 1,
                borderRadius: 2,
                boxShadow: '0 6px 20px rgba(0,0,0,0.4)',
                border: '2px solid rgba(255,255,255,0.3)'
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: '#fff',
                  fontWeight: 800,
                  fontSize: '0.85rem'
                }}
              >
                🚀 Coming Soon <b style={{ color: '#FFEB3B' }}>Foyerbasic.com</b> from ONAS
              </Typography>
            </Box>
          </Box>

          {/* ===== Hero Heading ===== */}
          <Typography
            variant="h1"
            sx={{
              color: '#fff',
              fontSize: {
                xs: '2.4rem',
                sm: '2.5rem',
                md: '2.5rem'
              },
              fontWeight: 700,
              lineHeight: 1.1,
              mb: 1,
              textShadow: '0 2px 10px rgba(0,0,0,0.4)'
            }}
          >
            Shaping Tomorrow's Digital Landscape...
          </Typography>

          {/* Subheader */}
{/*           <Typography */}
{/*             variant="h8" */}
{/*             sx={{ */}
{/*               color: 'rgba(255, 255, 255, 0.9)', */}
{/*               fontSize: { */}
{/*                 xs: '0.2rem', */}
{/*                 sm: '0.8rem', */}
{/*                 md: '1.2rem' */}
{/*               }, */}
{/*               fontWeight: 500, */}
{/*               lineHeight: 1.3, */}
{/*               mb: 3, */}
{/*               fontStyle: 'italic', */}
{/*               textShadow: '0 1px 5px rgba(0,0,0,0.3)' */}
{/*             }} */}
{/*           > */}
{/*             Don't adopt AI. Adapt with AI. */}
{/*           </Typography> */}

          {/* "Future Powered by AI" decorative element */}
          <Typography
            component="div"
            sx={{
              fontSize: {
                xs: '1.8rem',
                sm: '1.8rem',
                md: '1.8]]rem'
              },
              fontWeight: 800,
              position: 'relative',
              color: 'transparent',
              textAlign: 'Left',
              mb: 4,
              '&::before': {
                content: '"Future Powered by AI"',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, #0B4C74, #4CAF50)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                zIndex: 2
              },
              '&::after': {
                content: '"Future Powered by AI"',
                position: 'absolute',
                top: '3px',
                left: '3px',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, #0B4C74, #4CAF50)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'brightness(0.6)',
                zIndex: 1
              }
            }}
          >
            Future Powered by AI
          </Typography>

          {/* ===== Subtitle ===== */}
          <Typography
            variant="h6"
            sx={{
              color: '#0FFCBE',
              maxWidth: 600,
              mb: 5
            }}
          >
            Driving innovation through AI solutions, exceptional talent,
            and transformative technologies that shape tomorrow's digital landscape.
          </Typography>

          {/* ===== Buttons ===== */}
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Button
              size="large"
              variant="contained"
              component={RouterLink}
              to="/#explore-us"
              sx={{
                bgcolor: '#0B4C74',
                '&:hover': {
                  bgcolor: '#083A59',
                  transform: 'translateY(-2px)'
                }
              }}
            >
              Explore Services
            </Button>

            <Button
              size="large"
              variant="outlined"
              component={RouterLink}
              to="/resources/contact-us/"
              sx={{
                color: '#fff',
                borderColor: '#fff',
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.1)',
                  transform: 'translateY(-2px)'
                }
              }}
            >
              Consult Us
            </Button>
          </Box>

          {/* ===== Advertisement Box ===== */}
          <Box
            sx={{
              mt: 6,
              p: 3,
              maxWidth: 500,
              background:
                'linear-gradient(135deg, rgba(11,76,116,0.95), rgba(76,175,80,0.85))',
              borderRadius: 3,
              border: '2px solid rgba(255,255,255,0.2)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
            }}
          >
            <Typography
              variant="h8"
              sx={{ color: '#106EBE', fontWeight: 700, mb: 1 }}
            >
              Revolutionizing E-commerce :
            </Typography>
<br></br>
            <Typography variant="h8" sx={{ color: '#282825', mb: 0 }}>
              Get ready for our revolutionary e-commerce platform! Built with cutting-edge AI technology and seamless user experience at its core.
            </Typography>
<br></br>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                flexWrap: 'wrap',
              }}>
                <Box sx={{
                  display: 'flex',
                  gap: 0.5,
                  mr: 2,
                }}>
                  {['#0B4C74', '#4CAF50', '#FFFFFF'].map((color, index) => (
                    <Box
                      key={index}
                      sx={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        backgroundColor: color,
                        border: '1px solid rgba(255,255,255,0.3)',
                      }}
                    />
                  ))}
                </Box>

                <Typography
                  variant="caption"
                  sx={{
                    color: '#C8E6C9',
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 600,
                    letterSpacing: '0.5px',
                  }}
                >
                  Powered by ONAS Innovation
                </Typography>
              </Box>
              <br></br>
            <Button
              size="small"
              variant="contained"
              sx={{
                bgcolor: '#fff',
                color: '#0B4C74',
                fontWeight: 700,
                '&:hover': {
                  bgcolor: '#F5F5F5'
                }
              }}
              onClick={() =>
                alert('Join our waitlist for Foyerbasic.com!')
              }
            >

              Notify Me on Launch
            </Button>
          </Box>

          {/* ===== Slide Indicators ===== */}
          {slides.length > 0 && (
            <Box
              sx={{
                mt: 5,
                display: 'flex',
                gap: 1
              }}
            >
              {slides.map((_, index) => (
                <Box
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    cursor: 'pointer',
                    bgcolor:
                      currentSlide === index
                        ? '#fff'
                        : 'rgba(255,255,255,0.4)'
                  }}
                />
              ))}
            </Box>
          )}
        </motion.div>
      </Box>
    </BackgroundSection>
  );
});

export default Hero;
