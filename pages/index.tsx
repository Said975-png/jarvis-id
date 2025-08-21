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

const JarvisScene3D = dynamic(() => import('../components/JarvisScene3D'), {
  ssr: false,
  loading: () => <div className="scene3d-loading">Loading JARVIS...</div>
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
            {/* Logo */}
            <div className="navbar-logo">
              <span className="logo-text">JARVIS</span>
            </div>

            {/* Search */}
            <div className="navbar-search">
              <div className="search-container">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="search-icon">
                  <path d="M14 14L10.5 10.5M12 6.5C12 9.53757 9.53757 12 6.5 12C3.46243 12 1 9.53757 1 6.5C1 3.46243 3.46243 1 6.5 1C9.53757 1 12 3.46243 12 6.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <input type="text" placeholder="Поиск" className="search-input" />
              </div>
            </div>

            {/* Auth */}
            <div className="navbar-auth">
              <button className="auth-btn">
                <span>Войти</span>
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
                автоматизируют бизнес-процессы и увелич��вают к����нверсию в 3 раза
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
        <div className="capabilities-background"></div>
        <div className="capabilities-container">
          <div className="capabilities-layout">
            <div className="capabilities-content">
              <div className="capabilities-badge">
                <span className="badge-dot"></span>
                <span>Технологии ��удущего</span>
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
                    <p className="feature-description">Продвинутые алгоритмы машинно��о обучен��я для предска��ания трендов и оптимизации конверсий</p>
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
                <span className="status-text">Квантовы�� процессоры активны • Нейросеть обучается</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <div className="pricing-background"></div>
        <div className="pricing-container">
          <div className="pricing-header">
            <div className="pricing-badge">
              <span className="badge-dot"></span>
              <span>Наши тарифы</span>
            </div>
            <h2 className="pricing-title">
              Выберите идеальный
              <span className="gradient-text"> план</span>
            </h2>
            <p className="pricing-subtitle">
              Гибкие тарифные планы для любого размера бизнеса - от стартапов до крупных корпораций
            </p>
          </div>

          <div className="pricing-grid">
            {/* Basic Plan */}
            <div className="pricing-card">
              <div className="pricing-card-header">
                <h3 className="plan-name">Basic</h3>
                <p className="plan-description">Стартовое решение</p>
                <div className="plan-price">
                  <span className="price-amount">2,500,000</span>
                  <span className="price-currency">сумм</span>
                </div>
                <p className="plan-ideal">Идеально для небольших проектов и стартапов</p>
              </div>
              <div className="pricing-features">
                <div className="feature-list">
                  <div className="feature-item">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>До 5 страниц сайта</span>
                  </div>
                  <div className="feature-item">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Современный дизайн</span>
                  </div>
                  <div className="feature-item">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Адаптивная верстка</span>
                  </div>
                  <div className="feature-item">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>SEO оптимизация</span>
                  </div>
                  <div className="feature-item">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Техподдержка email</span>
                  </div>
                </div>
              </div>
              <button className="pricing-btn basic-btn">
                <span>Выбрать Basic</span>
              </button>
            </div>

            {/* Pro Plan */}
            <div className="pricing-card featured">
              <div className="featured-badge">Лучший выбор</div>
              <div className="pricing-card-header">
                <h3 className="plan-name">Pro</h3>
                <p className="plan-description">Лучший выбор</p>
                <div className="plan-price">
                  <span className="price-amount">4,000,000</span>
                  <span className="price-currency">сумм</span>
                </div>
                <p className="plan-ideal">Лучший выбор для растущего бизнеса</p>
              </div>
              <div className="pricing-features">
                <div className="feature-list">
                  <div className="feature-item">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Все из Basic</span>
                  </div>
                  <div className="feature-item">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>До 15 страниц сайта</span>
                  </div>
                  <div className="feature-item">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>ИИ ассистент интеграция</span>
                  </div>
                  <div className="feature-item">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Продвинутая аналитика</span>
                  </div>
                  <div className="feature-item">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Приоритетная поддержка</span>
                  </div>
                </div>
              </div>
              <button className="pricing-btn pro-btn">
                <span>Выбрать Pro</span>
              </button>
            </div>

            {/* Max Plan */}
            <div className="pricing-card">
              <div className="pricing-card-header">
                <h3 className="plan-name">Max</h3>
                <p className="plan-description">Премиум решение</p>
                <div className="plan-price">
                  <span className="price-amount">5,000,000</span>
                  <span className="price-currency">сумм</span>
                </div>
                <p className="plan-ideal">Максимум возможностей для крупного бизнеса</p>
              </div>
              <div className="pricing-features">
                <div className="feature-list">
                  <div className="feature-item">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Все из Pro</span>
                  </div>
                  <div className="feature-item">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Безли��итные страницы</span>
                  </div>
                  <div className="feature-item">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>ДЖАРВИС ИИ полная версия</span>
                  </div>
                  <div className="feature-item">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Индивидуальные решения</span>
                  </div>
                  <div className="feature-item">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>VIP поддержка 24 часа в сутки</span>
                  </div>
                </div>
              </div>
              <button className="pricing-btn max-btn">
                <span>Выбрать Max</span>
              </button>
            </div>
          </div>

          <div className="pricing-footer">
            <p className="pricing-note">
              Все планы включают бесплатное SSL-сертификат и доменное имя на первый год
            </p>
          </div>
        </div>
      </section>

      {/* JARVIS Team Replacement Section */}
      <section className="team-replacement-section">
        <div className="team-background"></div>
        <div className="team-container">
          {/* Header */}
          <div className="team-header">
            <div className="team-badge">
              <span className="badge-dot"></span>
              <span>Замена штата продавцов</span>
            </div>
            <h2 className="team-title">
              <span className="highlight-text">1 ИИ</span> заменяет<br />
              <span className="gradient-text">20+ консультантов</span>
            </h2>
            <p className="team-subtitle">
              Один умный ассистент выполняет работ�� десятков сотрудников. ДЖАРВИС ведет естественные диалоги с клиентами, предлагает товары, консультирует и находит лучшие предложения 24 часа в сутки без перерывов и выходных.
            </p>
          </div>

          {/* Features Grid */}
          <div className="team-features-grid">
            <div className="team-feature-card">
              <div className="feature-card-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <h3 className="feature-card-title">Живое общение</h3>
              <p className="feature-card-description">О��щается к��к человек</p>
              <div className="feature-details">
                <div className="detail-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                  <span>Понимает эмоции клиентов</span>
                </div>
                <div className="detail-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                  <span>Естественные диалоги</span>
                </div>
                <div className="detail-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                  <span>Адаптируется под клиента</span>
                </div>
              </div>
            </div>

            <div className="team-feature-card">
              <div className="feature-card-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.35-4.35"/>
                </svg>
              </div>
              <h3 className="feature-card-title">Умный подбор товаров</h3>
              <p className="feature-card-description">Анализирует потребности клиента</p>
              <div className="feature-details">
                <div className="detail-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                  <span>Изучает предпочтения</span>
                </div>
                <div className="detail-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                  <span>Персональные рекомендации</span>
                </div>
                <div className="detail-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                  <span>Точные предложения</span>
                </div>
              </div>
            </div>

            <div className="team-feature-card">
              <div className="feature-card-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="feature-card-title">Поиск выгодных аналогов</h3>
              <p className="feature-card-description">Находит дешевые альтернативы</p>
              <div className="feature-details">
                <div className="detail-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                  <span>Сравнивает цены</span>
                </div>
                <div className="detail-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                  <span>Находит скидки</span>
                </div>
                <div className="detail-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                  <span>Экономит деньги клиентов</span>
                </div>
              </div>
            </div>

            <div className="team-feature-card">
              <div className="feature-card-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12,6 12,12 16,14"/>
                </svg>
              </div>
              <h3 className="feature-card-title">24 часа без перерывов</h3>
              <p className="feature-card-description">Всегда го��ов помочь</p>
              <div className="feature-details">
                <div className="detail-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                  <span>Работает 24/7/365</span>
                </div>
                <div className="detail-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                  <span>Никогда не устает</span>
                </div>
                <div className="detail-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                  <span>Мгновенные ответы</span>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="team-statistics">
            <div className="statistics-card">
              <h3 className="statistics-title">��пе��атляющие результаты ДЖАРВИС</h3>
              <div className="statistics-grid">
                <div className="stat-item">
                  <span className="stat-number">1</span>
                  <span className="stat-label">ИИ заменяет 20+ сотрудников</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Работает без перерывов</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">90%</span>
                  <span className="stat-label">Экономия на зарплатах</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Клиентов в день</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">98%</span>
                  <span className="stat-label">Удовлетворенность клиентов</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">0</span>
                  <span className="stat-label">Больничных и отпусков</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews-section" id="reviews">
        <div className="reviews-background"></div>
        <div className="reviews-container">
          <div className="reviews-header">
            <div className="reviews-badge">
              <span className="badge-dot"></span>
              <span>Отзывы наших кли��нтов</span>
            </div>
            <h2 className="reviews-title">
              Что говорят о нас
              <span className="gradient-text"> наши клиенты</span>
            </h2>
            <p className="reviews-subtitle">
              Узнайте что говорят наши клиенты о работе с JARVIS
            </p>
          </div>

          <div className="reviews-slider">
            <div className="reviews-track">
              {/* Review 1 */}
              <div className="review-card">
                <div className="review-content">
                  <div className="stars">
                    <span>⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className="review-text">
                    "Я не разбираюсь в сайтах, но в Jarvis всё объяснили простыми словами. Сделал магазин, подключил оплату, и теперь я продаю в 3 странах. Рекомендую!"
                  </p>
                  <div className="review-author">
                    <div className="author-info">
                      <span className="author-name">Умид А.</span>
                      <span className="author-location">Ташкент, Freelance</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Review 2 */}
              <div className="review-card">
                <div className="review-content">
                  <div className="stars">
                    <span>⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className="review-text">
                    "Создала сайт с Jarvis Intercoma для своего магазина одежды. Работать стало легче: бот помогает клиентам выбирать стиль, отвеча���� на вопросы, а я только получаю заказы. Очень довольна!"
                  </p>
                  <div className="review-author">
                    <div className="author-info">
                      <span className="author-name">Алимова М.</span>
                      <span className="author-location">Чебоксары, Freelance</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Review 3 */}
              <div className="review-card">
                <div className="review-content">
                  <div className="stars">
                    <span>⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className="review-text">
                    "Сделала сайт для своего бутика с Jarvis. Удобно и быстро, клиенты довольны. Бот помогает им найти нужные товары, даже ночью."
                  </p>
                  <div className="review-author">
                    <div className="author-info">
                      <span className="author-name">Романова И.</span>
                      <span className="author-location">Уфа, Freelance</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Review 4 */}
              <div className="review-card">
                <div className="review-content">
                  <div className="stars">
                    <span>⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className="review-text">
                    "Создала интернет-магазин с помощью Jarvis. Весь процесс автоматизирован, а бот отвечает на вопросы клиентов в любое время дня и ночи."
                  </p>
                  <div className="review-author">
                    <div className="author-info">
                      <span className="author-name">Алексеева Л.</span>
                      <span className="author-location">Казань, Freelance</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Review 5 */}
              <div className="review-card">
                <div className="review-content">
                  <div className="stars">
                    <span>⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className="review-text">
                    "Решил попробовать Jarvis для создания сайта магазина бытовой техники. Результат впечатлил: ��от быстро и точно помогает клиентам выбрать товар."
                  </p>
                  <div className="review-author">
                    <div className="author-info">
                      <span className="author-name">Шарипов М.</span>
                      <span className="author-location">Бухара, Freelance</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Review 6 */}
              <div className="review-card">
                <div className="review-content">
                  <div className="stars">
                    <span>⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className="review-text">
                    "Мой магазин ювелирных изделий стал более удобным благодаря Jarvis. Бот помогает клиентам выбрать подходящие украшения и отвечает на все вопрос��."
                  </p>
                  <div className="review-author">
                    <div className="author-info">
                      <span className="author-name">Васильева О.</span>
                      <span className="author-location">Набережные Ч��лны, Freelance</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Review 7 */}
              <div className="review-card">
                <div className="review-content">
                  <div className="stars">
                    <span>⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className="review-text">
                    "Создала сайт для своего магазина с Jarvis. Клиенты часто обращаются за помощью, и бот всегда подскажет им нужную информацию."
                  </p>
                  <div className="review-author">
                    <div className="author-info">
                      <span className="author-name">Захарова Т.</span>
                      <span className="author-location">Самара, Freelance</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Review 8 */}
              <div className="review-card">
                <div className="review-content">
                  <div className="stars">
                    <span>⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className="review-text">
                    "Сайт для онлайн-магазина с Jarvis стал отличным решением. Бот быстро помогает покупателям, что существенно увеличило количество заказов."
                  </p>
                  <div className="review-author">
                    <div className="author-info">
                      <span className="author-name">Розенбаум В.</span>
                      <span className="author-location">Санкт-Петербург, Freelance</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Review 9 */}
              <div className="review-card">
                <div className="review-content">
                  <div className="stars">
                    <span>⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className="review-text">
                    "С Jarvis сайт для моего магазина одежды стал суперудобным. Бот помогает клиентам найти нужный товар и оформ��ть заказ без проблем."
                  </p>
                  <div className="review-author">
                    <div className="author-info">
                      <span className="author-name">Петрова М.</span>
                      <span className="author-location">Нижний Новгород, Freelance</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Review 10 */}
              <div className="review-card">
                <div className="review-content">
                  <div className="stars">
                    <span>⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className="review-text">
                    "Заказал сайт от Jarvis Intercoma онлайн-магазин с ИИ Джарвисом, и не пожалел! Всё сделали быстро, магазин сразу начал приносить заказы. Особенно понравилось, что бот отвечает клиентам мгновенно, даже ночью."
                  </p>
                  <div className="review-author">
                    <div className="author-info">
                      <span className="author-name">Карим</span>
                      <span className="author-location">Ташкент, Freelance</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Review 11 */}
              <div className="review-card">
                <div className="review-content">
                  <div className="stars">
                    <span>⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className="review-text">
                    "Мне сделали сайт с Jarvis Intercoma под мою студию украшений. Красиво, удобно, и всё автоматизировано. Теперь я занимаюсь только заказами, а не сижу целый день в переписках с клиентами."
                  </p>
                  <div className="review-author">
                    <div className="author-info">
                      <span className="author-name">Мадина Р.</span>
                      <span className="author-location">Ташкент, Freelance</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Review 12 */}
              <div className="review-card">
                <div className="review-content">
                  <div className="stars">
                    <span>⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className="review-text">
                    "Создала магазин косметики с Jarvis. Бот идеально консультирует клиентов по уходу за кожей, подбирает продукты по типу кожи. Продажи выросли в 4 раза!"
                  </p>
                  <div className="review-author">
                    <div className="author-info">
                      <span className="author-name">Елен�� К.</span>
                      <span className="author-location">Москва, Freelance</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Duplicate cards for infinite scroll */}
              <div className="review-card">
                <div className="review-content">
                  <div className="stars">
                    <span>⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className="review-text">
                    "Я не разбираюсь в сайтах, но в Jarvis всё объяснил�� простыми словами. С��елал магазин, ��одключил оплат��, и теперь я продаю в 3 странах. Рекомендую!"
                  </p>
                  <div className="review-author">
                    <div className="author-info">
                      <span className="author-name">Умид А.</span>
                      <span className="author-location">Ташкент, Freelance</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="review-card">
                <div className="review-content">
                  <div className="stars">
                    <span>⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className="review-text">
                    "Создала сайт с Jarvis Intercoma для своего магазина одежды. Работать стало легче: бот помогает клиентам выбирать стиль, отвечает на вопросы, а я только получаю заказы. Очень довольна!"
                  </p>
                  <div className="review-author">
                    <div className="author-info">
                      <span className="author-name">Алимова М.</span>
                      <span className="author-location">Чебоксары, Freelance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-background"></div>
        <div className="footer-container">
          <div className="footer-content">

            {/* Main Footer */}
            <div className="footer-main">
              <div className="footer-grid">

                {/* Company Info */}
                <div className="footer-column company-info">
                  <div className="footer-logo">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="footer-logo-icon">
                      <circle cx="12" cy="12" r="2"/>
                      <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"/>
                    </svg>
                    <span className="footer-logo-text">JARVIS</span>
                  </div>
                  <p className="footer-description">
                    Революционный ИИ-ассистент, которы�� понимает ваши потребности и превосходит ваши ожидания, будучи самым мощным представителем вашей компании.
                  </p>
                </div>

                {/* Product */}
                <div className="footer-column">
                  <h3 className="footer-column-title">Продукт</h3>
                  <ul className="footer-links">
                    <li><a href="#" className="footer-link">Главная</a></li>
                    <li><a href="#" className="footer-link">Возможности</a></li>
                    <li><a href="#" className="footer-link">Тарифы</a></li>
                  </ul>
                </div>

                {/* Company */}
                <div className="footer-column">
                  <h3 className="footer-column-title">Компания</h3>
                  <ul className="footer-links">
                    <li><a href="#" className="footer-link">О проекте</a></li>
                    <li><a href="#" className="footer-link">Команда</a></li>
                    <li><a href="#" className="footer-link">Карьера</a></li>
                    <li><a href="#" className="footer-link">Блог</a></li>
                  </ul>
                </div>

                {/* Support */}
                <div className="footer-column">
                  <h3 className="footer-column-title">Поддержка</h3>
                  <ul className="footer-links">
                    <li><a href="#" className="footer-link">Документация</a></li>
                    <li><a href="#" className="footer-link">API</a></li>
                    <li><a href="#" className="footer-link">Статус</a></li>
                    <li><a href="#" className="footer-link">Безопасность</a></li>
                  </ul>
                </div>

                {/* Contact */}
                <div className="footer-column">
                  <h3 className="footer-column-title">Контакты</h3>
                  <div className="footer-contact">
                    <div className="contact-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                      <span>info@jarvis.uz</span>
                    </div>
                    <div className="contact-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                      <span>+998 (90) 123-45-67</span>
                    </div>
                    <div className="contact-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                      <span>Та��кент, Узбекистан</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
              <div className="footer-bottom-content">
                <div className="footer-copyright">
                  <span>&copy; 2024, JARVIS AI. Все права защищены.</span>
                </div>
                <div className="footer-actions">
                  <div className="chat-support">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                    <span>Чат с Джарвисом</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="5"/>
                    </svg>
                  </div>
                  <div className="language-selector">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="2" y1="12" x2="22" y2="12"/>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                    <span>Русский</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </footer>

    </>
  );
}
