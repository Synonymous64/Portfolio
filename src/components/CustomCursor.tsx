import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if the device is a touch device
    const checkIfTouchDevice = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };

    checkIfTouchDevice();
    window.addEventListener('resize', checkIfTouchDevice);

    return () => {
      window.removeEventListener('resize', checkIfTouchDevice);
    };
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    // Set cursor as active after component mounts
    const activateTimeout = setTimeout(() => {
      setIsActive(true);
    }, 1000);

    const updateCursorPosition = (e: MouseEvent) => {
      if (!isActive) return;
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateCursorType = () => {
      if (!isActive) return;
      try {
        const target = document.elementFromPoint(position.x, position.y) as HTMLElement;
        const isClickable = target?.closest('button, a, [role="button"], input, select, textarea');
        setIsPointer(!!isClickable);
      } catch (error) {
        console.error("Cursor update error:", error);
      }
    };

    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    window.addEventListener('mousemove', updateCursorPosition);
    window.addEventListener('mousemove', updateCursorType);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    // Add error handling for cursor
    try {
      document.body.style.cursor = 'none';
    } catch (error) {
      console.error("Setting cursor style error:", error);
    }

    return () => {
      clearTimeout(activateTimeout);
      window.removeEventListener('mousemove', updateCursorPosition);
      window.removeEventListener('mousemove', updateCursorType);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      
      try {
        document.body.style.cursor = 'auto';
      } catch (error) {
        console.error("Resetting cursor style error:", error);
      }
    };
  }, [position, isActive, isTouchDevice]);

  if (!isActive || isTouchDevice) return null;

  return (
    <>
      <motion.div
        className={`fixed z-50 pointer-events-none ${isHidden ? 'opacity-0' : 'opacity-100'}`}
        animate={{
          x: position.x - 5,
          y: position.y - 5,
          scale: isPointer ? 0.5 : 1,
          opacity: isHidden ? 0 : 1,
        }}
        transition={{ type: "spring", mass: 0.1, stiffness: 800, damping: 30 }}
      >
        <div className={`w-10 h-10 rounded-full border-2 border-primary ${isPointer ? 'bg-primary bg-opacity-20' : ''}`}></div>
      </motion.div>
      <motion.div
        className={`fixed z-50 pointer-events-none ${isHidden ? 'opacity-0' : 'opacity-100'}`}
        animate={{
          x: position.x - 2.5,
          y: position.y - 2.5,
          scale: isPointer ? 2 : 1,
        }}
        transition={{ type: "spring", mass: 0.2, stiffness: 1000, damping: 30 }}
      >
        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
      </motion.div>
    </>
  );
};

export default CustomCursor;