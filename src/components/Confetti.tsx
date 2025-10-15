import { useEffect } from 'react';
import confetti from 'canvas-confetti';

export function Confetti() {
  useEffect(() => {
    // Задержка перед запуском конфетти
    const timer = setTimeout(() => {
      const duration = 3000;
      const animationEnd = Date.now() + duration;
      const defaults = { 
        startVelocity: 30, 
        spread: 360, 
        ticks: 60, 
        zIndex: 9999,
        colors: ['#ff69b4', '#ff1493', '#ffc0cb', '#ffb6c1', '#ff69b4', '#da70d6']
      };

      function randomInRange(min: number, max: number) {
        return Math.random() * (max - min) + min;
      }

      const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        
        // Запуск конфетти слева
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
        });
        
        // Запуск конфетти справа
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
        });
      }, 250);

      // Дополнительный взрыв в начале
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff69b4', '#ff1493', '#ffc0cb', '#ffb6c1', '#ff69b4', '#da70d6']
      });

      return () => clearInterval(interval);
    }, 500); // Задержка 500мс перед началом

    return () => clearTimeout(timer);
  }, []);

  return null;
}
