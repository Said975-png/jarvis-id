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

          {/* Elegant Four-Corner Layout */}

          {/* Top Elements */}
          <div className="floating-top-elements">
            <div className="top-item top-left">
              <div className="elegant-card">
                <div className="card-icon">🤖</div>
                <div className="card-title">AI Integration</div>
                <div className="card-desc">Встраиваем GPT в ваш сайт</div>
              </div>
            </div>
            <div className="top-item top-right">
              <div className="elegant-card">
                <div className="card-icon">⚡</div>
                <div className="card-title">Lightning Fast</div>
                <div className="card-desc">Мгновенные ответы ИИ</div>
              </div>
            </div>
          </div>

          {/* Left Elements */}
          <div className="floating-left-elements">
            <div className="left-item">
              <div className="stat-card">
                <div className="stat-value">24/7</div>
                <div className="stat-label">ИИ По��держка</div>
              </div>
            </div>
            <div className="left-item">
              <div className="tech-card">
                <div className="tech-badge">Modern Stack</div>
                <div className="tech-items">
                  <span>React</span>
                  <span>OpenAI</span>
                  <span>Next.js</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Elements */}
          <div className="floating-right-elements">
            <div className="right-item">
              <div className="achievement-card">
                <div className="achievement-number">150+</div>
                <div className="achievement-label">ИИ Проектов</div>
                <div className="achievement-bar">
                  <div className="bar-fill"></div>
                </div>
              </div>
            </div>
            <div className="right-item">
              <div className="capability-card">
                <div className="capability-title">ИИ Возможности</div>
                <div className="capability-grid">
                  <div className="cap-item">🎯 Персонализация</div>
                  <div className="cap-item">📊 Аналитика</div>
                  <div className="cap-item">🔄 Автоматизация</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Elements */}
          <div className="floating-bottom-elements">
            <div className="bottom-item bottom-left">
              <div className="elegant-card">
                <div className="card-icon">💡</div>
                <div className="card-title">Smart Solutions</div>
                <div className="card-desc">Умные решения для бизнеса</div>
              </div>
            </div>
            <div className="bottom-item bottom-right">
              <div className="elegant-card">
                <div className="card-icon">🚀</div>
                <div className="card-title">Innovation</div>
                <div className="card-desc">Лидеры ИИ разработки</div>
              </div>
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

              {/* Subtle Graphics */}
              <div className="subtle-graphic graph-viz">
                <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
                  <path d="M5 35L15 25L25 30L35 15L45 20L55 10" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none"/>
                  <circle cx="35" cy="15" r="1" fill="rgba(255,255,255,0.2)"/>
                  <circle cx="55" cy="10" r="1" fill="rgba(255,255,255,0.2)"/>
                </svg>
              </div>

              <div className="subtle-graphic network-viz">
                <svg width="50" height="40" viewBox="0 0 50 40" fill="none">
                  <circle cx="15" cy="15" r="1.5" fill="rgba(255,255,255,0.15)"/>
                  <circle cx="35" cy="10" r="1.5" fill="rgba(255,255,255,0.15)"/>
                  <circle cx="25" cy="30" r="1.5" fill="rgba(255,255,255,0.15)"/>
                  <line x1="15" y1="15" x2="35" y2="10" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5"/>
                  <line x1="15" y1="15" x2="25" y2="30" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5"/>
                  <line x1="25" y1="30" x2="35" y2="10" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Subtle Connection Lines */}
          <div className="connection-overlay">
            <svg className="connection-svg" width="100%" height="100%" viewBox="0 0 1400 800" fill="none">
              <path d="M150 150L350 250" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="3,6"/>
              <path d="M1050 250L1250 150" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="3,6"/>
              <path d="M150 650L350 550" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="3,6"/>
              <path d="M1050 550L1250 650" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="3,6"/>
            </svg>
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
                Мы создаем сайты с интеллектуальными ИИ ассистентами, которые революционизируют взаимодействие с ва��ими клиентами
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
