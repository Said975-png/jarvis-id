import React from 'react';

// Declare model-viewer for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': any;
    }
  }
}

const JarvisModel: React.FC = () => {
  return (
    <div className="jarvis-model-container">
      <model-viewer
        src="https://cdn.builder.io/o/assets%2F10fe30a11cee45b9b71e1d7d7d51e7d1%2F99723090f3894e608d1cbe413ad3a507?alt=media&token=3d7d1175-ad87-4b0b-beaa-b9f6eb9ee26f&apiKey=10fe30a11cee45b9b71e1d7d7d51e7d1"
        alt="JARVIS Robot"
        autoRotate
        cameraControls
        environmentImage="neutral"
        exposure="1"
        autoplay
        animationName=""
        cameraOrbit="-90deg 75deg 2.5m"
        style={{
          width: '100%',
          height: '100%',
          background: 'transparent'
        }}
      />
    </div>
  );
};

export default JarvisModel;
