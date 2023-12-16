import { useEffect, useState } from 'react';

const useKeyPress = (targetKey: string) => {
  // State to track whether the key is currently pressed
  const [isKeyPressed, setIsKeyPressed] = useState(false);

  // Event handler to set the state when the key is pressed or released
  const handleKeyDown = ({ key }: { key: string}) => {
    if (key === targetKey) {
      setIsKeyPressed(true);
    }
  };

  const handleKeyUp = ({ key }: { key: string}) => {
    if (key === targetKey) {
      setIsKeyPressed(false);
    }
  };

  // Effect to add and remove event listeners
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    // Cleanup: remove event listeners when the component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []); // Empty dependency array means this effect runs once when the component mounts

  // Return the current state of the key
  return isKeyPressed;
};

export default useKeyPress;
