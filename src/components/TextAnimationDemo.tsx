import React, { useState } from 'react';
import AnimatedText from './AnimatedText';
import TextAnimation from './TextAnimation';
import Container from './Container';
import Section from './Section';
import Button from './Button';
import Flex from './Flex';
import Grid from './Grid';
import textAnimationData from '../animations/textFadeIn.json';
import styles from '../styles/components.module.css';

const TextAnimationDemo: React.FC = () => {
  const [selectedAnimation, setSelectedAnimation] = useState<'fadeIn' | 'slideIn' | 'typewriter' | 'bounce' | 'custom'>('fadeIn');
  const [triggerKey, setTriggerKey] = useState(0);

  const triggerAnimation = () => {
    setTriggerKey(prev => prev + 1);
  };

  const animationTexts = {
    fadeIn: "ASN-Technologies: Building Tomorrow's Digital Solutions",
    slideIn: "Innovative. Reliable. Future-Ready.",
    typewriter: "Welcome to the future of digital transformation...",
    bounce: "🚀 ASN-Technologies",
    custom: "Custom Lottie Animation"
  };

  return (
    <div style={{ backgroundColor: '#f8f9fa', padding: '80px 0' }}>
      <Section>
        <Container>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ marginBottom: '20px', fontSize: '36px', fontWeight: '600' }}>
            Text Animation Examples
          </h2>
          <p style={{ color: 'var(--grey)', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
            Choose different animation types to see how they work with your content
          </p>
        </div>

        {/* Animation Controls */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <Flex gap={15} justify="center" wrap>
            <Button
              variant={selectedAnimation === 'fadeIn' ? 'primary' : 'outline'}
              size="small"
              onClick={() => setSelectedAnimation('fadeIn')}
            >
              Fade In
            </Button>
            <Button
              variant={selectedAnimation === 'slideIn' ? 'primary' : 'outline'}
              size="small"
              onClick={() => setSelectedAnimation('slideIn')}
            >
              Slide In
            </Button>
            <Button
              variant={selectedAnimation === 'typewriter' ? 'primary' : 'outline'}
              size="small"
              onClick={() => setSelectedAnimation('typewriter')}
            >
              Typewriter
            </Button>
            <Button
              variant={selectedAnimation === 'bounce' ? 'primary' : 'outline'}
              size="small"
              onClick={() => setSelectedAnimation('bounce')}
            >
              Bounce
            </Button>
            <Button
              variant={selectedAnimation === 'custom' ? 'primary' : 'outline'}
              size="small"
              onClick={() => setSelectedAnimation('custom')}
            >
              Custom JSON
            </Button>
          </Flex>
          
          <div style={{ marginTop: '20px' }}>
            <Button
              variant="secondary"
              size="small"
              onClick={triggerAnimation}
            >
              Trigger Animation
            </Button>
          </div>
        </div>

        {/* Animation Display */}
        <div style={{ 
          backgroundColor: 'white', 
          borderRadius: '12px', 
          padding: '60px 40px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
          minHeight: '200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {selectedAnimation === 'custom' ? (
            <TextAnimation
              key={triggerKey}
              animationData={textAnimationData}
              style={{ maxWidth: '500px', height: '200px' }}
              onAnimationComplete={() => console.log('Lottie animation completed!')}
            />
          ) : (
            <AnimatedText
              key={triggerKey}
              text={animationTexts[selectedAnimation]}
              animationType={selectedAnimation}
              duration={selectedAnimation === 'typewriter' ? 3000 : 1000}
              style={{
                fontSize: selectedAnimation === 'bounce' ? '32px' : '28px',
                fontWeight: '600',
                color: 'var(--black)',
                lineHeight: '1.4'
              }}
              onAnimationComplete={() => console.log(`${selectedAnimation} animation completed!`)}
            />
          )}
        </div>

        {/* Integration Examples */}
        <div style={{ marginTop: '80px' }}>
          <h3 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '24px' }}>
            Integration Examples
          </h3>
          
          <Grid cols={2} gap={40}>
            <div style={{ 
              backgroundColor: 'white', 
              borderRadius: '8px', 
              padding: '30px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' 
            }}>
              <h4 style={{ marginBottom: '20px' }}>Hero Title Animation</h4>
              <AnimatedText
                text="Transform Your Business with ASN-Technologies"
                animationType="fadeIn"
                duration={1200}
                delay={500}
                style={{
                  fontSize: '32px',
                  fontWeight: '700',
                  color: 'var(--blue-primary)',
                  lineHeight: '1.2'
                }}
              />
            </div>

            <div style={{ 
              backgroundColor: 'white', 
              borderRadius: '8px', 
              padding: '30px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' 
            }}>
              <h4 style={{ marginBottom: '20px' }}>Subtitle Animation</h4>
              <AnimatedText
                text="Leading digital transformation with innovative solutions"
                animationType="slideIn"
                duration={1000}
                delay={800}
                style={{
                  fontSize: '18px',
                  fontWeight: '400',
                  color: 'var(--grey)',
                  lineHeight: '1.5'
                }}
              />
            </div>

            <div style={{ 
              backgroundColor: 'white', 
              borderRadius: '8px', 
              padding: '30px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' 
            }}>
              <h4 style={{ marginBottom: '20px' }}>Typewriter Effect</h4>
              <AnimatedText
                text="Building exceptional digital experiences since 2020..."
                animationType="typewriter"
                duration={4000}
                style={{
                  fontSize: '16px',
                  fontWeight: '400',
                  color: 'var(--black)',
                  fontFamily: 'monospace'
                }}
              />
            </div>

            <div style={{ 
              backgroundColor: 'white', 
              borderRadius: '8px', 
              padding: '30px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' 
            }}>
              <h4 style={{ marginBottom: '20px' }}>Call-to-Action Animation</h4>
              <AnimatedText
                text="🎯 Ready to start your project?"
                animationType="bounce"
                duration={800}
                delay={1000}
                style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: 'var(--blue-primary)'
                }}
              />
            </div>
          </Grid>
        </div>

        {/* Code Examples */}
        <div style={{ marginTop: '60px', textAlign: 'center' }}>
          <h3 style={{ marginBottom: '20px' }}>Implementation Guide</h3>
          <div style={{ 
            backgroundColor: '#1a1a1a', 
            borderRadius: '8px', 
            padding: '20px',
            textAlign: 'left',
            overflow: 'auto'
          }}>
            <pre style={{ 
              color: '#e6e6e6', 
              fontSize: '14px', 
              lineHeight: '1.5',
              margin: 0,
              fontFamily: 'Monaco, Menlo, monospace'
            }}>
{`// Basic usage
<AnimatedText
  text="Your animated text"
  animationType="fadeIn"
  duration={1000}
  delay={500}
/>

// With custom styling
<AnimatedText
  text="Custom styled text"
  animationType="slideIn"
  style={{
    fontSize: '24px',
    color: '#007bff'
  }}
  onAnimationComplete={() => console.log('Done!')}
/>

// Lottie JSON animation
<TextAnimation
  animationData={yourJsonData}
  onAnimationComplete={() => {}}
/>`}
            </pre>
          </div>
        </div>
      </Container>
      </Section>
    </div>
  );
};

export default TextAnimationDemo;