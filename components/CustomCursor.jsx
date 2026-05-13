import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div
          className="fixed w-8 h-8 border-2 border-mint-400 rounded-full pointer-events-none z-50 mix-blend-screen transition-transform duration-100"
          style={{
            left: `${position.x - 16}px`,
            top: `${position.y - 16}px`,
            opacity: isVisible ? 1 : 0,
          }}
        />
      )}
    </>
  );
}
