import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Custom Website Development - Modern Solutions</title>
        <meta name="description" content="We create custom websites with modern solutions for online business" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">We create custom websites</h1>
            <p className="hero-subtitle">Modern solutions for online business</p>
            <button className="cta-button">Order a website</button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-section">
        <div className="container">
          <h2 className="section-title">About Us</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🎨</div>
              <h3 className="service-title">Custom Design</h3>
              <p className="service-description">Unique designs tailored to your brand and business needs</p>
            </div>
            <div className="service-card">
              <div className="service-icon">💻</div>
              <h3 className="service-title">Development</h3>
              <p className="service-description">Modern, responsive websites built with latest technologies</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🚀</div>
              <h3 className="service-title">Optimization</h3>
              <p className="service-description">Fast loading, SEO optimized websites for better performance</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🔧</div>
              <h3 className="service-title">Support</h3>
              <p className="service-description">Ongoing maintenance and support for your website</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Works Section */}
      <section className="works-section">
        <div className="container">
          <h2 className="section-title">Our Works</h2>
          <div className="works-grid">
            <div className="work-card">
              <div className="work-image">
                <div className="work-placeholder">E-Commerce Store</div>
              </div>
              <div className="work-content">
                <h3 className="work-title">Online Fashion Store</h3>
                <p className="work-description">Modern e-commerce platform with payment integration</p>
                <div className="work-tags">
                  <span className="tag">React</span>
                  <span className="tag">Next.js</span>
                  <span className="tag">Stripe</span>
                </div>
              </div>
            </div>
            <div className="work-card">
              <div className="work-image">
                <div className="work-placeholder">Corporate Website</div>
              </div>
              <div className="work-content">
                <h3 className="work-title">Tech Company Landing</h3>
                <p className="work-description">Professional corporate website with CMS integration</p>
                <div className="work-tags">
                  <span className="tag">WordPress</span>
                  <span className="tag">PHP</span>
                  <span className="tag">MySQL</span>
                </div>
              </div>
            </div>
            <div className="work-card">
              <div className="work-image">
                <div className="work-placeholder">Web App</div>
              </div>
              <div className="work-content">
                <h3 className="work-title">SaaS Dashboard</h3>
                <p className="work-description">Complex web application with real-time analytics</p>
                <div className="work-tags">
                  <span className="tag">Vue.js</span>
                  <span className="tag">Node.js</span>
                  <span className="tag">MongoDB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Reviews Section */}
      <section className="reviews-section">
        <div className="container">
          <h2 className="section-title">Client Reviews</h2>
          <div className="reviews-grid">
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">"Exceptional work! The team delivered exactly what we needed - a modern, fast website that perfectly represents our brand."</p>
              <div className="review-author">
                <div className="author-name">Sarah Johnson</div>
                <div className="author-company">CEO, TechStart Inc.</div>
              </div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">"Professional service from start to finish. Our new website has significantly improved our online presence and customer engagement."</p>
              <div className="review-author">
                <div className="author-name">Michael Chen</div>
                <div className="author-company">Marketing Director, Growth Co.</div>
              </div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">"Outstanding results! The website is not only beautiful but also highly functional. Sales increased by 40% after launch."</p>
              <div className="review-author">
                <div className="author-name">Emily Rodriguez</div>
                <div className="author-company">Founder, Style Boutique</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3 className="footer-title">Contact Us</h3>
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span>hello@customwebsites.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
            <div className="footer-section">
              <h3 className="footer-title">Follow Us</h3>
              <div className="social-links">
                <a href="#" className="social-link">Twitter</a>
                <a href="#" className="social-link">LinkedIn</a>
                <a href="#" className="social-link">Instagram</a>
                <a href="#" className="social-link">GitHub</a>
              </div>
            </div>
            <div className="footer-section">
              <h3 className="footer-title">Services</h3>
              <div className="footer-links">
                <a href="#" className="footer-link">Web Development</a>
                <a href="#" className="footer-link">E-commerce</a>
                <a href="#" className="footer-link">Web Design</a>
                <a href="#" className="footer-link">SEO Optimization</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Custom Websites. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
