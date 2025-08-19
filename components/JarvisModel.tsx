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
        src="https://cdn.builder.io/o/assets%2F10fe30a11cee45b9b71e1d7d7d51e7d1%2Fd76f3c260cc549d886f5842a1fab1641?alt=media&token=79723d88-68bd-46cc-86d2-0320b5e73429&apiKey=10fe30a11cee45b9b71e1d7d7d51e7d1"
        alt="JARVIS Robot"
        autoRotate
        cameraControls
        environmentImage="neutral"
        exposure="1"
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
