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
        <div className="hero-background"></div>


        <div className="hero-container">
          {/* Hero Grid Layout */}
          <div className="hero-grid">
            {/* Left Content */}
            <div className="hero-left">
              <div className="hero-badge">
                <span className="badge-dot"></span>
                <span>Революционная AI-платформа</span>
              </div>

              <h1 className="hero-title">
                Создаем <span className="gradient-text">интеллектуальные</span><br />
                веб-решения будущего
              </h1>

              <p className="hero-subtitle">
                Разрабатываем сайты с ИИ-ассистентами, которые понимают в��ших клиентов,
                автоматиз��руют бизнес-процессы и увеличивают конверсию в 3 раза
              </p>

              <div className="hero-buttons">
                <button className="btn-primary">
                  <span>Начать бесплатно</span>
                  <div className="btn-shine"></div>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="btn-secondary">
                  <span>Посмотреть демо</span>
                  <div className="btn-ripple"></div>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 3L10 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>

              <div className="hero-features">
                <div className="feature-pill">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1L10.09 5.26L15 6L11 9.74L11.91 14.5L8 12.27L4.09 14.5L5 9.74L1 6L5.91 5.26L8 1Z" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                  <span>GPT-4 интеграция</span>
                </div>
                <div className="feature-pill">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1v14M1 8h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <span>No-code решения</span>
                </div>
                <div className="feature-pill">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M8 1v6m0 6v6m11-7h-6m-6 0H1" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                  <span>Реальное время</span>
                </div>
              </div>
            </div>

            {/* Center 3D Model */}
            <div className="hero-center">
              <div className="hero-3d-main">
                <Scene3D className="scene3d-container" />
              </div>

              {/* Enhanced Performance Metrics */}
              <div className="performance-display">
                <div className="metric-item">
                  <div className="metric-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                    </svg>
                  </div>
                  <div className="metric-content">
                    <span className="metric-value">127%</span>
                    <span className="metric-label">Конверсия</span>
                  </div>
                </div>
                <div className="metric-item">
                  <div className="metric-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="3"/>
                      <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"/>
                    </svg>
                  </div>
                  <div className="metric-content">
                    <span className="metric-value">95%</span>
                    <span className="metric-label">Автоматизация</span>
                  </div>
                </div>
                <div className="metric-item">
                  <div className="metric-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12,6 12,12 16,14"/>
                    </svg>
                  </div>
                  <div className="metric-content">
                    <span className="metric-value">24/7</span>
                    <span className="metric-label">Поддержка</span>
                  </div>
                </div>
              </div>

              {/* Status Indicator */}
              <div className="status-indicator">
                <div className="status-dot"></div>
                <span className="status-text">Система активна • Все модули функционируют</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Platform Capabilities Section */}
      <section className="capabilities-section">
        <div className="capabilities-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>

          {/* Advanced Particle System */}
          <div className="particle-system">
            {[...Array(40)].map((_, i) => (
              <div
                key={i}
                className={`floating-particle particle-${i % 5}`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 10}s`
                }}
              ></div>
            ))}
          </div>

          {/* Neural Network Lines */}
          <div className="neural-network">
            <svg className="neural-svg" viewBox="0 0 1920 1080">
              <defs>
                <linearGradient id="neuralGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(0,255,255,0.3)" />
                  <stop offset="50%" stopColor="rgba(255,0,255,0.2)" />
                  <stop offset="100%" stopColor="rgba(0,255,255,0.1)" />
                </linearGradient>
              </defs>
              <path className="neural-path path-1" d="M0,300 Q480,100 960,440 T1920,200" stroke="url(#neuralGradient2)" />
              <path className="neural-path path-2" d="M0,500 Q480,700 960,240 T1920,580" stroke="url(#neuralGradient2)" />
              <path className="neural-path path-3" d="M0,700 Q480,500 960,640 T1920,380" stroke="url(#neuralGradient2)" />
            </svg>
          </div>
        </div>
        <div className="capabilities-container">
          {/* Background PLATFORM Text */}
          <div className="capabilities-background-text">
            <span className="bg-platform">PLATFORM</span>
          </div>

          <div className="capabilities-layout">
            <div className="capabilities-content">
              <div className="capabilities-badge">
                <span className="badge-dot"></span>
                <span>Технологии будущего</span>
              </div>
              <h2 className="capabilities-title">
                Революционные
                <span className="highlight-text"> Решения</span>
              </h2>
              <p className="capabilities-subtitle">
                Трансформируем ваш бизнес с помощью передовых AI-технологий, создавая уникальные цифровые экосистемы для максимальной эффективности
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
                    <h3 className="feature-title">Квантовая Аналитика</h3>
                    <p className="feature-description">Продвинутые алгоритмы машинного обучения для предсказания трендов и оптимизации конверсий</p>
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
                    <h3 className="feature-title">Нейро-Персонализация</h3>
                    <p className="feature-description">Динамическая адаптация контента под каждого пользователя в режиме реального времени</p>
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
                    <h3 className="feature-title">Голографические Интерфейсы</h3>
                    <p className="feature-description">Иммерсивные 3D-интерфейсы с поддержкой AR/VR для невероятного пользовательского опыта</p>
                  </div>
                </div>
              </div>

              <div className="capabilities-buttons">
                <button className="btn-primary">
                  <span>Запустить JARVIS</span>
                  <div className="btn-shine"></div>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="btn-secondary">
                  <span>Виртуальный Тур</span>
                  <div className="btn-ripple"></div>
                </button>
              </div>
            </div>

            <div className="capabilities-visual">
              <div className="capabilities-3d-main">
                <RobotScene3D className="robot-scene-container" />

                {/* Advanced Interactive Elements */}
                <div className="orbit-ring ring-1">
                  <div className="ring-particle particle-1"></div>
                  <div className="ring-particle particle-2"></div>
                </div>
                <div className="orbit-ring ring-2">
                  <div className="ring-particle particle-3"></div>
                  <div className="ring-particle particle-4"></div>
                </div>
                <div className="orbit-ring ring-3">
                  <div className="ring-particle particle-5"></div>
                  <div className="ring-particle particle-6"></div>
                </div>

                {/* Enhanced Data Points */}
                <div className="data-point point-1">
                  <div className="data-dot">
                    <div className="dot-pulse"></div>
                  </div>
                  <div className="data-label">AI CORE</div>
                  <div className="data-connection line-1"></div>
                </div>
                <div className="data-point point-2">
                  <div className="data-dot">
                    <div className="dot-pulse"></div>
                  </div>
                  <div className="data-label">NEURAL NET</div>
                  <div className="data-connection line-2"></div>
                </div>
                <div className="data-point point-3">
                  <div className="data-dot">
                    <div className="dot-pulse"></div>
                  </div>
                  <div className="data-label">ANALYTICS</div>
                  <div className="data-connection line-3"></div>
                </div>

                {/* Energy Field */}
                <div className="energy-field">
                  <div className="energy-wave wave-1"></div>
                  <div className="energy-wave wave-2"></div>
                  <div className="energy-wave wave-3"></div>
                </div>

                {/* Holographic Grid */}
                <div className="holo-grid">
                  <div className="grid-line horizontal line-1"></div>
                  <div className="grid-line horizontal line-2"></div>
                  <div className="grid-line vertical line-3"></div>
                  <div className="grid-line vertical line-4"></div>
                </div>
              </div>

              {/* Enhanced Performance Metrics */}
              <div className="capabilities-performance-display">
                <div className="metric-item">
                  <div className="metric-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                    </svg>
                  </div>
                  <div className="metric-content">
                    <span className="metric-value">99.7%</span>
                    <span className="metric-label">Точность ИИ</span>
                  </div>
                </div>
                <div className="metric-item">
                  <div className="metric-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="3"/>
                      <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"/>
                    </svg>
                  </div>
                  <div className="metric-content">
                    <span className="metric-value">1M+</span>
                    <span className="metric-label">Операций/сек</span>
                  </div>
                </div>
                <div className="metric-item">
                  <div className="metric-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12,6 12,12 16,14"/>
                    </svg>
                  </div>
                  <div className="metric-content">
                    <span className="metric-value">0.1ms</span>
                    <span className="metric-label">Откли��</span>
                  </div>
                </div>
              </div>

              {/* Status Indicator */}
              <div className="status-indicator">
                <div className="status-dot"></div>
                <span className="status-text">Квантовые процессоры активны • Нейросеть обучается</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
