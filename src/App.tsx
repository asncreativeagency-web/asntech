import { useEffect } from 'react';
import './styles/globals.css';
import { loadFonts, defaultFontConfig } from './utils/fontLoader';
import { scrollToElement, addSmoothScrollCSS } from './utils/scrollUtils';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Container from './components/Container';
import Section from './components/Section';
import Button from './components/Button';
import Grid from './components/Grid';
import Flex from './components/Flex';
import ContactForm from './components/ContactForm';
import BlogCard from './components/BlogCard';
import WorkCard from './components/WorkCard';
import OriginalHero from './components/OriginalHero';
import TestimonialCard from './components/TestimonialCard';
import ClientLogos from './components/ClientLogos';
import ScrollProgress from './components/ScrollProgress';
import TextAnimationDemo from './components/TextAnimationDemo';
import TypingBrand from './components/TypingBrand';
import StatItem from './components/StatItem';
import styles from './styles/components.module.css';
import testimonialStyles from './styles/testimonial.module.css';
import clientStyles from './styles/clientLogos.module.css';
import './styles/animations.module.css';
import './styles/darkMode.module.css';
import './styles/parallax.module.css';

function App() {
  useEffect(() => {
    loadFonts(defaultFontConfig).catch(console.error);
    addSmoothScrollCSS();
  }, []);

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      scrollToElement(href);
    }
  };

  const navigationLinks = [
    { label: 'What We Do', href: '#what-we-do', onClick: () => handleNavClick('#what-we-do') },
    { label: 'What We Think', href: '#what-we-think', onClick: () => handleNavClick('#what-we-think') },
    { label: 'About ASN', href: '#about-asn', onClick: () => handleNavClick('#about-asn') },
    { label: 'Careers', href: '#careers', onClick: () => handleNavClick('#careers') },
    { label: 'Contact Us', href: '#contact-us', onClick: () => handleNavClick('#contact-us') },
  ];

  // Dropdown menu items with sections for Wipro-style layout
  const whatWeDoSections = [
    {
      title: 'Services',
      items: [
        { label: 'Digital Transformation', href: '#digital-transformation' },
        { label: 'Cloud Services', href: '#cloud-services' },
        { label: 'AI & Analytics', href: '#ai-analytics' },
        { label: 'Cybersecurity', href: '#cybersecurity' },
        { label: 'Application Development', href: '#app-development' },
      ]
    },
    {
      title: 'Industries',
      items: [
        { label: 'Banking & Financial Services', href: '#banking-financial' },
        { label: 'Healthcare & Life Sciences', href: '#healthcare' },
        { label: 'Manufacturing & Resources', href: '#manufacturing' },
        { label: 'Technology & Media', href: '#technology-media' },
        { label: 'Retail & Consumer', href: '#retail-consumer' },
      ]
    }
  ];

  const whatWeThinkSections = [
    {
      title: 'Insights & Research',
      items: [
        { label: 'Industry Insights', href: '#industry-insights' },
        { label: 'Research Papers', href: '#research-papers' },
        { label: 'Case Studies', href: '#case-studies' },
        { label: 'Innovation Lab', href: '#innovation-lab' },
      ]
    },
    {
      title: 'Thought Leadership',
      items: [
        { label: 'Technology Trends', href: '#technology-trends' },
        { label: 'Digital Strategy', href: '#digital-strategy' },
        { label: 'Future of Work', href: '#future-of-work' },
        { label: 'Sustainability', href: '#sustainability-insights' },
      ]
    }
  ];

  const aboutASNSections = [
    {
      title: 'Company',
      items: [
        { label: 'Our Story', href: '#our-story' },
        { label: 'Leadership Team', href: '#leadership' },
        { label: 'Global Presence', href: '#global-presence' },
        { label: 'Awards & Recognition', href: '#awards' },
      ]
    },
    {
      title: 'Values & Culture',
      items: [
        { label: 'Mission & Vision', href: '#mission-vision' },
        { label: 'Corporate Values', href: '#corporate-values' },
        { label: 'Social Responsibility', href: '#social-responsibility' },
        { label: 'Partnerships', href: '#partnerships' },
      ]
    }
  ];

  const careersSections = [
    {
      title: 'Join Our Team',
      items: [
        { label: 'Life at ASN', href: '#life-at-asn' },
        { label: 'Campus Hiring', href: '#campus-hiring' },
        { label: 'Diversity & Inclusion', href: '#diversity' },
      ]
    },
    {
      title: 'Growth & Development',
      items: [
        { label: 'Learning Programs', href: '#learning-programs' },
        { label: 'Career Paths', href: '#career-paths' },
        { label: 'Mentorship', href: '#mentorship' },
        { label: 'Employee Benefits', href: '#employee-benefits' },
      ]
    }
  ];

  const footerLinks = [
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Service', href: '#terms' },
    { label: 'Support', href: '#support' },
  ];

  const socialLinks = [
    {
      icon: <span>Email</span>,
      href: 'mailto:contact@example.com',
      label: 'Email',
    },
    {
      icon: <span>Twitter</span>,
      href: 'https://twitter.com',
      label: 'Twitter',
    },
    {
      icon: <span>LinkedIn</span>,
      href: 'https://linkedin.com',
      label: 'LinkedIn',
    },
  ];



  return (
    <div className="app">
      <ScrollProgress />
      <Navigation
        brand={
          <TypingBrand
            className={styles.animatedBrand}
            onAnimationComplete={() => console.log('Navbar typing animation completed!')}
          />
        }
        links={navigationLinks}
        dropdownMenus={{
          whatWeDo: whatWeDoSections,
          whatWeThink: whatWeThinkSections,
          aboutASN: aboutASNSections,
          careers: careersSections
        }}
        actions={
          <Flex gap={15}>
            <Button variant="nav-secondary" size="small">
              Client Portal
            </Button>
            <Button variant="nav-primary" size="small">
              Let's Talk
            </Button>
          </Flex>
        }
      />

      <main style={{ paddingTop: '72px' }}>
        {/* Hero Section - Portfolio Design */}
        <div id="home">
          <OriginalHero
            title="We Build Digital Products & Experiences"
            image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=1000&fit=crop"
            actions={
              <Flex gap={10}>
                <Button variant="primary" size="large">
                  View Our Work
                </Button>
                <Button variant="secondary" size="large">
                  Start Project
                </Button>
              </Flex>
            }
            bottomContent={
              <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                <p style={{ lineHeight: '1.6', color: 'var(--body)', fontSize: '16px', maxWidth: '400px', margin: '0', flex: '1' }}>
                  We are a creative studio specializing in UI/UX design, web development, and digital branding. We help businesses create meaningful connections with their customers through exceptional digital experiences.
                </p>
                <div className={styles.heroDivider}></div>
                <div style={{ display: 'flex', gap: '40px', flex: '1' }}>
                  <div className={styles.heroList}>
                    <div>Web Development</div>
                    <div>UI/UX Design</div>
                    <div>Brand Identity</div>
                  </div>
                  <div className={styles.heroDivider}></div>
                  <div className={styles.heroList}>
                    <div>E-commerce</div>
                    <div>Mobile Apps</div>
                    <div>Digital Strategy</div>
                  </div>
                </div>
              </div>
            }
          />
        </div>

        {/* Client Logos Section - Moved to appear right after hero */}
        <div className={clientStyles.clientsSection}>
          <Container>
            <div className={clientStyles.clientsTitle}>Trusted by Industry Leaders</div>
            <ClientLogos
              logos={[
                { name: 'Client 1', logo: '/678533eb71a46e7e23eaeb9e_8.svg' },
                { name: 'Client 2', logo: '/678533ec0d4b3e4f802bcefc_6.svg' },
                { name: 'Client 3', logo: '/678533ec0d4b3e4f802bcf03_5.svg' },
                { name: 'Client 4', logo: '/678533ec0e72f8500a198449_3.svg' },
                { name: 'Client 5', logo: '/678533ec19665507a8e29cc5_11.svg' },
                { name: 'Client 6', logo: '/678533ec33275b34a6200f7c_4.svg' },
                { name: 'Client 7', logo: '/678533ec7d737bc4bb39d442_2.svg' },
                { name: 'Client 8', logo: '/678533ec9dd1d4db7747af89_10.svg' },
                { name: 'Client 9', logo: '/678539c0e48341a80dc07dcb_VT Website Logo 1.svg' },
              ]}
              speed={30}
            />
          </Container>
        </div>

        {/* About Section */}
        <Section id="about-asn">
          <Container>
            <div style={{ marginBottom: '60px' }}>
              <h2 style={{ marginTop: '10px' }}>Our Story</h2>
            </div>
            
            <Grid cols={2} gap={60}>
              <div>
                <h3 style={{ marginBottom: '20px' }}>Our Journey</h3>
                <p style={{ lineHeight: '1.6' }}>
                  Founded with a vision to transform businesses through innovative digital solutions, 
                  ASN has grown from a small startup to a leading technology consultancy. Our journey 
                  began with a simple belief: that technology should empower businesses to achieve 
                  their greatest potential.
                </p>
                <p style={{ lineHeight: '1.6' }}>
                  Over the years, we have partnered with companies across industries, helping them 
                  navigate digital transformation and build sustainable competitive advantages through 
                  cutting-edge technology solutions.
                </p>
              </div>
              
              <div>
                <h3 style={{ marginBottom: '20px' }}>Our Vision</h3>
                <p style={{ marginBottom: '20px', lineHeight: '1.6' }}>
                  To empower businesses with innovative technology solutions that drive growth, 
                  efficiency, and meaningful customer experiences. We believe in creating lasting 
                  partnerships built on trust, expertise, and shared success.
                </p>
                <div style={{ marginTop: '30px' }}>
                  <Button variant="primary" size="large">
                    Learn More About Us
                  </Button>
                </div>
              </div>
            </Grid>
          </Container>
        </Section>

        {/* Work Portfolio Section */}
        <Section id="work">
          <Container>
            <div style={{ marginBottom: '60px' }}>
              <div className={styles.subtitle}>Featured Work</div>
              <h2 style={{ marginTop: '10px' }}>Recent Projects</h2>
            </div>
            <div className={styles.workList}>
              <WorkCard
                title="E-commerce Platform"
                category="Web Development"
                image="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
                href="#project-1"
              />
              <WorkCard
                title="Mobile Banking App"
                category="UI/UX Design"
                image="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop"
                href="#project-2"
              />
              <WorkCard
                title="Brand Identity System"
                category="Branding"
                image="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"
                href="#project-3"
              />
              <WorkCard
                title="SaaS Dashboard"
                category="Product Design"
                image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
                href="#project-4"
              />
            </div>
            <div style={{ textAlign: 'center', marginTop: '60px' }}>
              <Button variant="outline" size="large">
                View All Projects
              </Button>
            </div>
          </Container>
        </Section>

        {/* Blog Section */}
        <Section small id="blog">
          <Container>
            <div style={{ marginBottom: '60px' }}>
              <div className={styles.subtitle}>Latest Articles</div>
              <h2 style={{ marginTop: '10px' }}>From Our Blog</h2>
            </div>
            <div className={styles.blogList}>
              <BlogCard
                title="The Future of Web Design: Trends to Watch in 2024"
                date="Dec 15, 2024"
                image="https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop"
                href="#blog-1"
              />
              <BlogCard
                title="Building Scalable Design Systems"
                date="Dec 10, 2024"
                image="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"
                href="#blog-2"
              />
              <BlogCard
                title="User Experience Best Practices for E-commerce"
                date="Dec 5, 2024"
                image="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
                href="#blog-3"
              />
            </div>
            <div style={{ textAlign: 'center', marginTop: '60px' }}>
              <Button variant="outline" size="large">
                Read More Articles
              </Button>
            </div>
          </Container>
        </Section>

        {/* Services Section - Original Style */}
        <Section id="services">
          <Container>
            <div className={styles.serviceWrapper}>
              <div className={styles.serviceWrap}>
                <div className={styles.fillBlock}>
                  <div className={styles.serviceLeft}>
                    <div>
                      <div className={styles.subtitle}>What We Do</div>
                      <h2 style={{ marginTop: '10px' }}>Our Services</h2>
                      <p style={{ marginTop: '20px', maxWidth: '400px' }}>
                        We provide comprehensive digital solutions to help businesses 
                        thrive in the modern digital landscape.
                      </p>
                    </div>
                    
                    <div className={styles.serviceLists}>
                      <div className={styles.serviceItem}>
                        <div className={styles.listIcon}></div>
                        <span>Web Development</span>
                      </div>
                      <div className={styles.serviceItem}>
                        <div className={styles.listIcon}></div>
                        <span>UI/UX Design</span>
                      </div>
                      <div className={styles.serviceItem}>
                        <div className={styles.listIcon}></div>
                        <span>Mobile Apps</span>
                      </div>
                      <div className={styles.serviceItem}>
                        <div className={styles.listIcon}></div>
                        <span>Brand Identity</span>
                      </div>
                      <div className={styles.serviceItem}>
                        <div className={styles.listIcon}></div>
                        <span>E-commerce</span>
                      </div>
                      <div className={styles.serviceItem}>
                        <div className={styles.listIcon}></div>
                        <span>Digital Strategy</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={styles.fillBlock}>
                  <div className={styles.serviceRight}>
                    <div className={styles.projectWrap}>
                      <StatItem number={150} label="Projects Completed" duration={2500} />
                      <StatItem number={85} label="Happy Clients" duration={2200} />
                      <StatItem number={5} label="Years Experience" duration={1800} />
                    </div>
                    
                    <div>
                      <h3>Ready to Start Your Project?</h3>
                      <p style={{ marginTop: '15px', marginBottom: '30px' }}>
                        Let's discuss how we can help bring your vision to life.
                      </p>
                      <Button variant="primary" size="large">
                        Get Started
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>



        {/* Testimonials Section */}
        <Section id="testimonials">
          <Container>
            <div style={{ marginBottom: '60px', textAlign: 'center' }}>
              <div className={styles.subtitle}>Client Testimonials</div>
              <h2 style={{ marginTop: '10px' }}>What Our Clients Say</h2>
              <p style={{ marginTop: '20px', maxWidth: '600px', margin: '20px auto 0' }}>
                Don't just take our word for it. Here's what our clients have to say about working with us.
              </p>
            </div>
            <div className={testimonialStyles.testimonialsGrid}>
              <TestimonialCard
                name="Sarah Johnson"
                role="CEO"
                company="TechStart Inc"
                content="Working with this team was an absolute game-changer for our business. They delivered a stunning website that not only looks amazing but also converts visitors into customers at an incredible rate."
                avatar="/api/placeholder/60/60"
                rating={5}
              />
              <TestimonialCard
                name="Michael Chen"
                role="CTO"
                company="InnovateFlow"
                content="The mobile app they developed for us exceeded all expectations. The user experience is flawless, and our customer engagement has increased by 300% since launch."
                avatar="/api/placeholder/60/60"
                rating={5}
              />
              <TestimonialCard
                name="Emily Rodriguez"
                role="Marketing Director"
                company="BrandForward"
                content="Their design team completely transformed our brand identity. The new visual system they created has helped us stand out in a crowded market and attract our ideal customers."
                avatar="/api/placeholder/60/60"
                rating={5}
              />
            </div>
          </Container>
        </Section>

        {/* Text Animation Demo Section */}
        <TextAnimationDemo />

        {/* Contact Section */}
        <Section small id="contact">
          <Container>
            <div style={{ marginBottom: '60px', textAlign: 'center' }}>
              <div className={styles.subtitle}>Get In Touch</div>
              <h2 style={{ marginTop: '10px' }}>Contact Us</h2>
              <p style={{ marginTop: '20px', fontSize: '18px', color: 'var(--grey)', maxWidth: '600px', margin: '20px auto 0' }}>
                Ready to start your project? Get in touch with us today or visit one of our offices worldwide.
              </p>
            </div>
            
            <Grid cols={2} gap={60}>
              <div>
                <ContactForm onSubmit={(data) => {
                  console.log('Contact form submitted:', data);
                  alert('Thank you for your message! We\'ll get back to you soon.');
                }} />
              </div>
              
              <div>
                <h3 style={{ marginBottom: '30px', fontSize: '24px' }}>Our Offices</h3>
                
                <div style={{ marginBottom: '30px', padding: '25px', borderRadius: '8px', border: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
                  <h4 style={{ marginBottom: '10px', color: 'var(--blue-primary)', fontSize: '18px' }}>New York</h4>
                  <p style={{ lineHeight: '1.6', color: 'var(--grey)', marginBottom: '8px', fontSize: '14px' }}>
                    123 Business Avenue, Suite 450<br />
                    New York, NY 10001
                  </p>
                  <p style={{ fontSize: '14px', color: 'var(--blue-primary)', fontWeight: '500' }}>
                    +1 (555) 123-4567
                  </p>
                </div>
                
                <div style={{ marginBottom: '30px', padding: '25px', borderRadius: '8px', border: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
                  <h4 style={{ marginBottom: '10px', color: 'var(--blue-primary)', fontSize: '18px' }}>London</h4>
                  <p style={{ lineHeight: '1.6', color: 'var(--grey)', marginBottom: '8px', fontSize: '14px' }}>
                    45 Tech Square, Floor 12<br />
                    London EC2A 4DN, UK
                  </p>
                  <p style={{ fontSize: '14px', color: 'var(--blue-primary)', fontWeight: '500' }}>
                    +44 20 7123 4567
                  </p>
                </div>
                
                <div style={{ marginBottom: '30px', padding: '25px', borderRadius: '8px', border: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
                  <h4 style={{ marginBottom: '10px', color: 'var(--blue-primary)', fontSize: '18px' }}>Singapore</h4>
                  <p style={{ lineHeight: '1.6', color: 'var(--grey)', marginBottom: '8px', fontSize: '14px' }}>
                    88 Innovation Drive, Level 15<br />
                    Singapore 138589
                  </p>
                  <p style={{ fontSize: '14px', color: 'var(--blue-primary)', fontWeight: '500' }}>
                    +65 6123 4567
                  </p>
                </div>
                
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                  <Button variant="outline" size="medium">
                    View Office Details
                  </Button>
                </div>
              </div>
            </Grid>
          </Container>
        </Section>
      </main>

      <Footer
        brand={
          <div style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--white)' }}>
            ASN-Building Empire's
          </div>
        }
        links={footerLinks}
        socialLinks={socialLinks}
        copyright="© 2024 ASN-Building Empire's. All rights reserved."
      />
    </div>
  );
}

export default App
