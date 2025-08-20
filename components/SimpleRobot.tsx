import React from 'react';

interface SimpleRobotProps {
  className?: string;
}

function SimpleRobot({ className }: SimpleRobotProps) {
  return (
    <div className={className}>
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(255, 255, 255, 0.02)',
        border: '1px solid rgba(0, 255, 255, 0.2)',
        borderRadius: '20px',
        backdropFilter: 'blur(20px)',
        fontSize: '3rem',
        color: 'rgba(0, 255, 255, 0.8)'
      }}>
        🤖
      </div>
    </div>
  );
}

export default SimpleRobot;
