import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    if (!cursor || !cursorDot) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let dotX = 0;
    let dotY = 0;

    const updateCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animateCursor = () => {
      // Smooth cursor following
      cursorX += (mouseX - cursorX) * 0.1;
      cursorY += (mouseY - cursorY) * 0.1;

      // Faster dot following
      dotX += (mouseX - dotX) * 0.2;
      dotY += (mouseY - dotY) * 0.2;

      if (cursor) {
        cursor.style.left = `${cursorX}px`;
        cursor.style.top = `${cursorY}px`;
      }

      if (cursorDot) {
        cursorDot.style.left = `${dotX}px`;
        cursorDot.style.top = `${dotY}px`;
      }

      requestAnimationFrame(animateCursor);
    };

    const handleMouseEnter = () => {
      cursor?.classList.add('cursor-hover');
    };

    const handleMouseLeave = () => {
      cursor?.classList.remove('cursor-hover');
    };

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    document.addEventListener('mousemove', updateCursor);
    animateCursor();

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        ref={cursorRef}
        className="fixed w-8 h-8 border-2 border-primary rounded-full pointer-events-none z-50 transition-all duration-200 mix-blend-difference"
        style={{
          left: 0,
          top: 0,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Cursor dot */}
      <div
        ref={cursorDotRef}
        className="fixed w-2 h-2 bg-primary rounded-full pointer-events-none z-50 transition-all duration-200"
        style={{
          left: 0,
          top: 0,
          transform: 'translate(-50%, -50%)',
        }}
      />

      <style jsx>{`
        .cursor-hover {
          transform: scale(1.5);
          border-color: hsl(var(--accent));
        }
      `}</style>
    </>
  );
};

export default CustomCursor;