import React from 'react';
import Scene from './components/Scene';

function App() {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      {/* 3D Scene */}
      <Scene />

      {/* Overlay */}
      <div style={{
        position: 'absolute',
        top: 20,
        left: 0,
        width: '100%',
        textAlign: 'center',
        pointerEvents: 'none', // Allow clicks to pass through to the canvas if needed (though canvas is non-interactive)
        color: 'white',
        fontFamily: 'sans-serif',
        textShadow: '0 2px 4px rgba(0,0,0,0.8)'
      }}>
        <h1 style={{ margin: 0, fontSize: '2rem', letterSpacing: '2px' }}>Solar System simulation</h1>
        <p style={{ margin: '5px 0 0', opacity: 0.8 }}>author: ody9s5eus</p>
      </div>
    </div>
  );
}

export default App;
