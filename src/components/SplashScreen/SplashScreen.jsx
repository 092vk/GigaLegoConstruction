import React, { useEffect } from 'react';
import './SplashScreen.css'; // Create this CSS file for styling

const SplashScreen = ({ onLoaded }) => {
  useEffect(() => {
    // Simulate loading time or some async task
    const timer = setTimeout(() => {
      onLoaded(); // Callback to hide the splash screen
    }, 3000); // Show splash screen for 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, [onLoaded]);

  return (
    <div className="splash-screen">
      <img src="./G4.svg" alt="Loading..." className="rotating-image" />
    </div>
  );
};

export default SplashScreen;
