import React, { useEffect, useRef } from 'react';
import Scrollbar from 'smooth-scrollbar';

interface SmoothScrollWrapperProps {
  children: React.ReactNode;
}

const SmoothScrollWrapper: React.FC<SmoothScrollWrapperProps> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      const scrollbar = Scrollbar.init(scrollRef.current, {
        damping: 0.05, // Adjust for your desired smoothness
      });
      return () => scrollbar.destroy();
    }
  }, []);

  return (
    <div ref={scrollRef} style={{ height: '100vh', overflow: 'hidden' }}>
      {children}
    </div>
  );
};

export default SmoothScrollWrapper;