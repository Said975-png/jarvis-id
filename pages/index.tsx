import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

// Dynamically import 3D components to avoid SSR issues
const Scene3D = dynamic(() => import('../components/Scene3D'), {
  ssr: false,
  loading: () => <div className="scene3d-loading">Loading...</div>
});

const RobotScene3D = dynamic(() => import('../components/RobotScene3D'), {
  ssr: false,
  loading: () => <div className="scene3d-loading">Loading robot...</div>
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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Orbitron:wght@400;700;900&display=swap" rel="stylesheet" />
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
          {/* Background JARVIS Text */}
          <div className="background-text">
            <span className="bg-jarvis">JARVIS</span>
          </div>

          {/* Floating Side Elements */}
          <div className="floating-left-elements">
            <div className="side-stat">
              <div className="stat-number">99%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="side-feature">
              <div className="feature-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </div>
              <div className="feature-text">Lightning Fast</div>
            </div>
            <div className="side-quote">
              "Future of web development"
            </div>
          </div>

          <div className="floating-right-elements">
            <div className="side-tech">
              <div className="tech-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"/>
                  <polyline points="2,17 12,22 22,17"/>
                  <polyline points="2,12 12,17 22,12"/>
                </svg>
              </div>
              <div className="tech-text">Next.js</div>
            </div>
            <div className="side-metric">
              <div className="metric-value">500+</div>
              <div className="metric-label">Projects</div>
            </div>
            <div className="side-badge">
              <div className="badge-icon">✨</div>
              <div className="badge-text">AI Powered</div>
            </div>
          </div>

          <div className="hero-layout">
            <div className="hero-3d">
              <Scene3D className="scene3d-container" />

              {/* Minimal Decorative Elements */}
              <div className="decorative-element elem-1">
                <div className="pulse-dot"></div>
              </div>
              <div className="decorative-element elem-2">
                <div className="rotating-ring"></div>
              </div>
              <div className="decorative-element elem-3">
                <div className="floating-plus">+</div>
              </div>

              {/* Additional Graphics */}
              <div className="graphic-element graph-1">
                <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
                  <path d="M5 35L15 25L25 30L35 15L45 20L55 10" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none"/>
                  <circle cx="15" cy="25" r="2" fill="rgba(255,255,255,0.5)"/>
                  <circle cx="35" cy="15" r="2" fill="rgba(255,255,255,0.5)"/>
                  <circle cx="55" cy="10" r="2" fill="rgba(255,255,255,0.5)"/>
                </svg>
                <div className="graph-label">Performance</div>
              </div>

              <div className="graphic-element network-1">
                <svg width="80" height="60" viewBox="0 0 80 60" fill="none">
                  <circle cx="20" cy="20" r="3" fill="rgba(255,255,255,0.4)"/>
                  <circle cx="60" cy="15" r="3" fill="rgba(255,255,255,0.4)"/>
                  <circle cx="40" cy="40" r="3" fill="rgba(255,255,255,0.4)"/>
                  <circle cx="15" cy="45" r="3" fill="rgba(255,255,255,0.4)"/>
                  <line x1="20" y1="20" x2="60" y2="15" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
                  <line x1="20" y1="20" x2="40" y2="40" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
                  <line x1="40" y1="40" x2="60" y2="15" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
                  <line x1="15" y1="45" x2="40" y2="40" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
                </svg>
                <div className="graph-label">Network</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Platform Capabilities Section */}
      <section className="capabilities-section">
        <div className="capabilities-background">
          <div className="ai-orb ai-orb-1"></div>
          <div className="ai-orb ai-orb-2"></div>
          <div className="ai-orb ai-orb-3"></div>
        </div>
        <div className="capabilities-container">
          <div className="capabilities-layout">
            <div className="capabilities-content">
              <div className="capabilities-badge">
                <span className="badge-dot"></span>
                <span>AI-Powered Platform</span>
              </div>
              <h2 className="capabilities-title">
                В��зможности нашей
                <span className="highlight-text"> Платформы</span>
              </h2>
              <p className="capabilities-subtitle">
                Мы создаем сайты с интеллектуальными ИИ ассистентами, которые революционизируют взаимодействие с вашими клиентами
              </p>

              <div className="capabilities-features">
                <div className="feature-item">
                  <div className="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                      <path d="M2 17l10 5 10-5"/>
                      <path d="M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <div className="feature-content">
                    <h3 className="feature-title">Smart AI Assistants</h3>
                    <p className="feature-description">Интеллектуальные чат-боты и голосовые помощники с GPT интеграцией</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3"/>
                      <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"/>
                    </svg>
                  </div>
                  <div className="feature-content">
                    <h3 className="feature-title">Автоматизация бизнеса</h3>
                    <p className="feature-description">ИИ для обработки заказов, клиентской поддержки и аналитики</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                      <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                      <line x1="12" y1="22.08" x2="12" y2="12"/>
                    </svg>
                  </div>
                  <div className="feature-content">
                    <h3 className="feature-title">Персонализация</h3>
                    <p className="feature-description">Адаптивный контент �� рекомендации на основе по��едения пользователей</p>
                  </div>
                </div>
              </div>

              <div className="capabilities-buttons">
                <button className="btn-primary">
                  <span>Попробовать ИИ</span>
                  <div className="btn-shine"></div>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="btn-secondary">
                  <span>Смотреть Демо</span>
                </button>
              </div>
            </div>

            <div className="capabilities-visual">
              <RobotScene3D className="robot-scene-container" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
