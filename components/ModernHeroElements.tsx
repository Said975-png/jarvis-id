import React from 'react';

export default function ModernHeroElements() {
  return (
    <>
      {/* Modern v0.dev Style Layout */}
      
      {/* Top Elements */}
      <div className="floating-top-elements">
        <div className="modern-item">
          <span className="modern-text">🤖 AI Integration</span>
        </div>
        <div className="modern-item">
          <span className="modern-text">⚡ Lightning Fast</span>
        </div>
      </div>

      {/* Left Elements */}
      <div className="floating-left-elements">
        <div className="modern-item">
          <span className="modern-number">24/7</span>
        </div>
        <div className="modern-item">
          <span className="modern-text">React + AI</span>
        </div>
        <div className="modern-item">
          <span className="modern-text">Smart Automation</span>
        </div>
      </div>

      {/* Right Elements */}
      <div className="floating-right-elements">
        <div className="modern-item">
          <span className="modern-number">150+</span>
        </div>
        <div className="modern-item">
          <span className="modern-text">🎯 Personalization</span>
        </div>
        <div className="modern-item">
          <span className="modern-text">📊 Analytics</span>
        </div>
      </div>

      {/* Bottom Elements */}
      <div className="floating-bottom-elements">
        <div className="modern-item">
          <span className="modern-text">💡 Smart Solutions</span>
        </div>
        <div className="modern-item">
          <span className="modern-text">🚀 Innovation Leader</span>
        </div>
      </div>

      {/* Subtle Connection Lines */}
      <div className="connection-overlay">
        <svg className="connection-svg" width="100%" height="100%" viewBox="0 0 1400 800" fill="none">
          <path d="M150 150L350 250" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="4,8"/>
          <path d="M1050 250L1250 150" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="4,8"/>
          <path d="M150 650L350 550" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="4,8"/>
          <path d="M1050 550L1250 650" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="4,8"/>
        </svg>
      </div>
    </>
  );
}
