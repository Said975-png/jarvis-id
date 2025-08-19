import React, { useEffect } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

// Dynamically import 3D component to avoid SSR issues
const Scene3D = dynamic(() => import('../components/Scene3D'), {
  ssr: false,
  loading: () => <div className="scene3d-loading">Loading...</div>
});

export default function Home() {
  useEffect(() => {
    let isTransitioning = false;
    let currentSection = 0;
    const sections = ['hero', 'about'];

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (isTransitioning) return;

      const direction = e.deltaY > 0 ? 1 : -1; // 1 для вниз, -1 для вверх
      const targetSection = currentSection + direction;

      if (targetSection < 0 || targetSection >= sections.length) return;

      isTransitioning = true;
      currentSection = targetSection;

      const heroSection = document.querySelector('.hero-section') as HTMLElement;
      const aboutSection = document.querySelector('.about-section') as HTMLElement;

      if (currentSection === 0) {
        // Переход к hero секции
        heroSection.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        aboutSection.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';

        heroSection.style.opacity = '1';
        heroSection.style.transform = 'translateY(0px)';
        aboutSection.style.transform = 'translateY(100px)';
        aboutSection.style.zIndex = '1';

        setTimeout(() => {
          isTransitioning = false;
        }, 800);
      } else if (currentSection === 1) {
        // Переход к about секции
        heroSection.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        aboutSection.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';

        heroSection.style.opacity = '0';
        heroSection.style.transform = 'translateY(-100px)';
        aboutSection.style.transform = 'translateY(0px)';
        aboutSection.style.zIndex = '100';

        setTimeout(() => {
          isTransitioning = false;
        }, 800);
      }
    };

    // Установка начального состояния
    const heroSection = document.querySelector('.hero-section') as HTMLElement;
    const aboutSection = document.querySelector('.about-section') as HTMLElement;

    if (heroSection && aboutSection) {
      heroSection.style.opacity = '1';
      heroSection.style.transform = 'translateY(0px)';
      aboutSection.style.transform = 'translateY(100px)';
      aboutSection.style.zIndex = '1';
    }

    // Поддержка touch событий для мобильных
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY - touchEndY;

      if (Math.abs(diff) > 50) { // Минимальное расстояние для свайпа
        const direction = diff > 0 ? 1 : -1;
        const fakeWheelEvent = { deltaY: direction * 100, preventDefault: () => {} } as WheelEvent;
        handleWheel(fakeWheelEvent);
      }
    };

    // Блокируем обычный скролл и добавляем обработчики
    document.body.style.overflow = 'hidden';
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <>
      <Head>
        <title>Custom Website Development - Modern Solutions</title>
        <meta name="description" content="We create custom websites with modern solutions for online business" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>


      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-content">
            <div className="navbar-logo">
              <span className="logo-text">JARVIS</span>
            </div>
            <div className="navbar-menu">
              <button className="nav-btn">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M14 14L10.5 10.5M12 6.5C12 9.53757 9.53757 12 6.5 12C3.46243 12 1 9.53757 1 6.5C1 3.46243 3.46243 1 6.5 1C9.53757 1 12 3.46243 12 6.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Поиск</span>
              </button>
              <a href="#reviews" className="nav-btn">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1L10.09 5.26L15 6L11 9.74L11.91 14.5L8 12.27L4.09 14.5L5 9.74L1 6L5.91 5.26L8 1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Отзывы</span>
              </a>
              <button className="nav-btn">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M1 4H15V12C15 12.5523 14.5523 13 14 13H2C1.44772 13 1 12.5523 1 12V4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M1 4L8 8L15 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Цены</span>
              </button>
            </div>
            <div className="navbar-auth">
              <button className="auth-btn login">
                <span>Вход</span>
              </button>
              <button className="auth-btn register">
                <span>Регистрация</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>
        <div className="hero-container">
          <div className="hero-layout">
            <div className="hero-content">
              <div className="hero-badge">
                <span className="badge-dot"></span>
                <span>Premium Web Development</span>
              </div>
              <h1 className="hero-title">
              Create Amazing
              <span className="highlight-text"> Websites</span>
            </h1>
            <p className="hero-subtitle">
              We build modern, fast and beautiful websites that help your business grow online
            </p>
              <div className="hero-buttons">
                <button className="btn-primary">
                <span>Start Project</span>
                <div className="btn-shine"></div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="btn-secondary">
                <span>View Portfolio</span>
              </button>
              </div>
              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-number">250+</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">99%</div>
                  <div className="stat-label">Client Satisfaction</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">Support Available</div>
                </div>
              </div>
            </div>
            <div className="hero-3d">
              <Scene3D className="scene3d-container" />

              {/* Floating Glass Widgets */}
              <div className="floating-widget widget-1">
                <div className="widget-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/>
                  </svg>
                </div>
                <div className="widget-text">
                  <div className="widget-title">Fast Loading</div>
                  <div className="widget-subtitle">98% Speed Score</div>
                </div>
              </div>

              <div className="floating-widget widget-2">
                <div className="widget-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <div className="widget-text">
                  <div className="widget-title">Secure</div>
                  <div className="widget-subtitle">SSL Protected</div>
                </div>
              </div>

              <div className="floating-widget widget-3">
                <div className="widget-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                </div>
                <div className="widget-text">
                  <div className="widget-title">Responsive</div>
                  <div className="widget-subtitle">All Devices</div>
                </div>
              </div>


              {/* Decorative Elements */}
              <div className="decorative-element elem-1">
                <div className="pulse-dot"></div>
              </div>
              <div className="decorative-element elem-2">
                <div className="rotating-ring"></div>
              </div>
              <div className="decorative-element elem-3">
                <div className="floating-plus">+</div>
              </div>
            </div>
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
              <div className="review-stars">���★★★★</div>
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
