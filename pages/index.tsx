import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>JARVIS - Custom Website Development</title>
        <meta name="description" content="Professional custom website development services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">JARVIS</h1>
            <p className="hero-subtitle">We create custom websites</p>
            <div className="hero-buttons">
              <button className="btn-primary">Get Started</button>
              <button className="btn-secondary">View Portfolio</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
