import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const springConfig = { damping: 20, stiffness: 250, restDelta: 0.001 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX - 10);
      cursorY.set(e.clientY - 10);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Outer Glow */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] border border-gold/30 bg-gold/10 blur-[2px]"
        style={{
          x: cursorX,
          y: cursorY,
          scale: isHovering ? 2.2 : 1.2,
          opacity: isHovering ? 0.8 : 0.4,
          transition: { scale: { type: 'spring', damping: 15 } }
        }}
      />
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999] bg-gold shadow-[0_0_10px_rgba(255,215,0,0.8)]"
        style={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 0.5 : 1,
        }}
      />
    </>
  );
};

export default Cursor;
