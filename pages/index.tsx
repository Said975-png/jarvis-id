import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

// Dynamically import 3D component to avoid SSR issues
const Scene3D = dynamic(() => import('../components/Scene3D'), {
  ssr: false,
  loading: () => <div className="scene3d-loading">Loading...</div>
});

export default function Home() {
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
    </>
  );
}
