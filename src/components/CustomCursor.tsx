import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Move touch detection to useEffect to handle it properly
  useEffect(() => {
    const checkTouchDevice = () => {
      const isTouchCapable =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia("(pointer: coarse)").matches ||
        window.matchMedia("(hover: none)").matches;

      setIsTouchDevice(isTouchCapable);
      
      // Reset cursor style for touch devices
      if (isTouchCapable) {
        document.body.style.cursor = "auto";
      }
    };

    // Check initially
    checkTouchDevice();

    // Add resize listener to handle device orientation changes
    window.addEventListener("resize", checkTouchDevice);

    return () => {
      window.removeEventListener("resize", checkTouchDevice);
      document.body.style.cursor = "auto";
    };
  }, []);

  useEffect(() => {
    // Don't set up mouse events if it's a touch device
    if (isTouchDevice) return;

    const activateTimeout = setTimeout(() => {
      setIsActive(true);
    }, 100);

    const updateCursorPosition = (e: MouseEvent) => {
      if (!isActive) return;
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateCursorType = () => {
      if (!isActive) return;
      const target = document.elementFromPoint(
        position.x,
        position.y
      ) as HTMLElement;
      const isClickable = target?.closest(
        'button, a, [role="button"], input, select, textarea'
      );
      setIsPointer(!!isClickable);
    };

    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    window.addEventListener("mousemove", updateCursorPosition);
    window.addEventListener("mousemove", updateCursorType);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.body.style.cursor = "none";

    return () => {
      clearTimeout(activateTimeout);
      window.removeEventListener("mousemove", updateCursorPosition);
      window.removeEventListener("mousemove", updateCursorType);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      document.body.style.cursor = "auto";
    };
  }, [isActive, position.x, position.y, isTouchDevice]);

  // Don't render anything for touch devices or when not active
  if (isTouchDevice || !isActive) return null;

  return (
    <>
      {/* Main cursor ring */}
      <motion.div
        className={`fixed z-50 pointer-events-none ${
          isHidden ? "opacity-0" : "opacity-100"
        }`}
        animate={{
          x: position.x - 12,
          y: position.y - 12,
          scale: isPointer ? 1.2 : 1,
          opacity: isHidden ? 0 : 1,
        }}
        transition={{ type: "spring", mass: 0.1, stiffness: 800, damping: 30 }}
      >
        <div className="relative w-6 h-6">
          {/* Code brackets */}
          <div className="absolute inset-0 flex items-center justify-between">
            <span className="text-primary text-lg font-mono transform -translate-x-1">{`{`}</span>
            <span className="text-primary text-lg font-mono transform translate-x-1">{`}`}</span>
          </div>
          {/* Animated ring */}
          <div
            className={`absolute inset-0 rounded-full border-2 border-primary/50 
              ${isPointer ? 'animate-ping-slow' : ''}`}
          />
        </div>
      </motion.div>

      {/* Center dot */}
      <motion.div
        className={`fixed z-50 pointer-events-none ${
          isHidden ? "opacity-0" : "opacity-100"
        }`}
        animate={{
          x: position.x - 2,
          y: position.y - 2,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{ type: "spring", mass: 0.2, stiffness: 1000, damping: 30 }}
      >
        <div className="w-1 h-1 bg-primary rounded-full" />
      </motion.div>
    </>
  );
};

export default CustomCursor;
