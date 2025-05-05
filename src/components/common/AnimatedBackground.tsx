import React, { useRef, useEffect } from 'react';

interface AnimatedBackgroundProps {
  opacity?: number;
}

// Dark matte texture fallback as a data URL
const FALLBACK_TEXTURE = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Cfilter id='noise' x='0' y='0'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23noise)' fill='%23080808'/%3E%3C/svg%3E`;

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ opacity = 0.3 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fallbackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const lastFrameTimeRef = useRef<number>(0);
  const targetFPSRef = useRef<number>(30); // Frame rate when tab is active
  
  // Check if device is likely low-powered
  const isLowPoweredDevice = () => {
    // If it's a mobile device, or has less than 4 logical cores, consider it low-powered
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
           (navigator.hardwareConcurrency !== undefined && navigator.hardwareConcurrency < 4);
  };
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const fallback = fallbackRef.current;
    
    if (!canvas) return;
    
    // Check if device is low-powered, use fallback if so
    if (isLowPoweredDevice()) {
      if (fallback) fallback.style.display = 'block';
      canvas.style.display = 'none';
      return;
    }
    
    // Check if canvas is supported
    const ctx = canvas.getContext('2d', { alpha: false, desynchronized: true });
    if (!ctx) {
      if (fallback) fallback.style.display = 'block';
      return;
    }
    
    // Handle tab visibility changes
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Reduce FPS when tab is not visible
        targetFPSRef.current = 5;
      } else {
        // Return to normal FPS when tab is visible
        targetFPSRef.current = 30;
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // Set canvas to full screen
    const resizeCanvas = () => {
      // Use a slightly lower resolution for better performance
      const pixelRatio = Math.min(window.devicePixelRatio, 1.5);
      
      canvas.width = window.innerWidth * pixelRatio;
      canvas.height = window.innerHeight * pixelRatio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      
      ctx.scale(pixelRatio, pixelRatio);
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Particles for the animation
    const particleCount = isLowPoweredDevice() ? 20 : 40;
    const particles: {
      x: number;
      y: number;
      size: number;
      speed: number;
      direction: number;
      alpha: number;
      color: string;
    }[] = [];
    
    // Highlights - fewer, larger and more subtle
    const highlights: {
      x: number;
      y: number;
      size: number;
      alpha: number;
    }[] = [
      {
        x: window.innerWidth * 0.1,
        y: window.innerHeight * 0.1,
        size: window.innerHeight * 0.8,
        alpha: 0.03
      },
      {
        x: window.innerWidth * 0.8,
        y: window.innerHeight * 0.6,
        size: window.innerHeight * 0.5,
        alpha: 0.02
      }
    ];
    
    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 160 + 80, // Larger brushstrokes
        speed: Math.random() * 0.5 + 0.1, // Slow movement
        direction: Math.random() * Math.PI * 2,
        alpha: Math.random() * 0.08 + 0.02, // Very subtle opacity
        color: `rgba(${Math.floor(Math.random() * 30)}, ${Math.floor(Math.random() * 30)}, ${Math.floor(Math.random() * 30)}, 1)`
      });
    }
    
    // Animation function
    const animate = (timestamp: number) => {
      // Throttle FPS
      const elapsed = timestamp - lastFrameTimeRef.current;
      const frameInterval = 1000 / targetFPSRef.current;
      
      if (elapsed < frameInterval) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      
      lastFrameTimeRef.current = timestamp - (elapsed % frameInterval);
      
      // Fill with deep black
      ctx.fillStyle = '#0a0a0a';
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
      
      // Draw highlights first
      highlights.forEach(highlight => {
        const gradient = ctx.createRadialGradient(
          highlight.x, highlight.y, 0,
          highlight.x, highlight.y, highlight.size
        );
        
        gradient.addColorStop(0, `rgba(50, 50, 50, ${highlight.alpha})`);
        gradient.addColorStop(0.5, `rgba(30, 30, 30, ${highlight.alpha / 2})`);
        gradient.addColorStop(1, 'rgba(10, 10, 10, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(highlight.x, highlight.y, highlight.size, 0, Math.PI * 2);
        ctx.fill();
      });
      
      // Draw texture overlay
      ctx.fillStyle = 'rgba(0, 0, 0, 0.02)';
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
      
      // Draw and update particles
      particles.forEach(particle => {
        // Move particle
        particle.x += Math.cos(particle.direction) * particle.speed;
        particle.y += Math.sin(particle.direction) * particle.speed;
        
        // Wrap around screen
        if (particle.x < -particle.size) particle.x = window.innerWidth + particle.size;
        if (particle.x > window.innerWidth + particle.size) particle.x = -particle.size;
        if (particle.y < -particle.size) particle.y = window.innerHeight + particle.size;
        if (particle.y > window.innerHeight + particle.size) particle.y = -particle.size;
        
        // Slowly change direction
        particle.direction += (Math.random() - 0.5) * 0.01;
        
        // Draw particle as a soft gradient
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size
        );
        
        gradient.addColorStop(0, `rgba(20, 20, 20, ${particle.alpha})`);
        gradient.addColorStop(0.5, `rgba(10, 10, 10, ${particle.alpha / 2})`);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });
      
      // Only add noise texture when tab is visible for performance
      if (!document.hidden) {
        // Create subtle noise texture
        for (let i = 0; i < 10; i++) {
          const x = Math.random() * window.innerWidth;
          const y = Math.random() * window.innerHeight;
          const size = Math.random() * 2 + 0.5;
          const alpha = Math.random() * 0.02; // Very faint
          
          ctx.fillStyle = `rgba(10, 10, 10, ${alpha})`;
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    // Start animation
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);
  
  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1]"
        style={{ opacity }}
      />
      <div 
        ref={fallbackRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] hidden"
        style={{ 
          backgroundImage: `url("${FALLBACK_TEXTURE}")`, 
          backgroundSize: 'cover',
          opacity
        }}
      />
    </>
  );
};

export default AnimatedBackground; 