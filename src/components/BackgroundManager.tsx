import { useState, useEffect } from 'react';

interface BackgroundManagerProps {
  activeStory: number;
}

// Создание SVG паттерна с эмодзи с большими отступами и рандомными наклонами
const createEmojiPattern = (emoji: string, color: string) => {
  // Генерируем позиции с большими отступами для эмодзи 180px (радиус ~90px)
  const positions = [
    { x: 150, y: 120, rotation: -25 + Math.random() * 15 }, // Левый верх
    { x: 450, y: 140, rotation: 15 + Math.random() * 20 }, // Правый верх  
    { x: 130, y: 420, rotation: 10 + Math.random() * 25 }, // Левый низ
    { x: 470, y: 400, rotation: -30 + Math.random() * 20 }, // Правый низ
  ];
  
  const svg = `
    <svg width="600" height="540" viewBox="0 0 600 540" xmlns="http://www.w3.org/2000/svg">
      ${positions.map((pos, i) => `
        <text x="${pos.x}" y="${pos.y}" text-anchor="middle" font-size="180" font-family="system-ui" 
              transform="rotate(${pos.rotation.toFixed(1)} ${pos.x} ${pos.y})">${emoji}</text>
      `).join('')}
    </svg>
  `;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
};

// Конфигурация фонов для каждого слайда по макетам
const STORY_CONFIGS = {
  // Первый и последний слайды без фона
  0: null, // IntroStory
  1: {
    emoji: '💑',
    gradient: 'linear-gradient(135deg, #87CEEB 0%, #B0E0E6 50%, #E0F6FF 100%)', // Голубой как в макете
    name: 'Встреча'
  },
  2: {
    emoji: '🙏',
    gradient: 'linear-gradient(135deg, #F0E68C 0%, #FFFFE0 50%, #FFFACD 100%)', // Желтый как в макете
    name: 'Благодарность'
  },
  3: {
    emoji: '👰',
    gradient: 'linear-gradient(135deg, #E6E6FA 0%, #F0F0FF 50%, #F5F5FF 100%)', // Светло-фиолетовый
    name: 'Свадьба'
  },
  4: {
    emoji: '✨',
    gradient: 'linear-gradient(135deg, #FFE4E1 0%, #FFEFD5 50%, #FFF8DC 100%)', // Персиковый
    name: 'Рост'
  },
  5: {
    emoji: '👶',
    gradient: 'linear-gradient(135deg, #E0FFFF 0%, #F0FFFF 50%, #F5FFFA 100%)', // Бирюзовый
    name: 'Рождение сына'
  },
  6: {
    emoji: '🍝',
    gradient: 'linear-gradient(135deg, #98FB98 0%, #F0FFF0 50%, #F5FFFA 100%)', // Зеленый как в макете
    name: 'Ты любишь'
  },
  7: {
    emoji: '🎬',
    gradient: 'linear-gradient(135deg, #E6E6FA 0%, #F0F0FF 50%, #F8F8FF 100%)', // Лавандовый
    name: 'Кусочки истории'
  },
  8: {
    emoji: '✨',
    gradient: 'linear-gradient(135deg, #FFFACD 0%, #FFFFE0 50%, #FFFFFAF 100%)', // Кремовый
    name: 'Сегодня'
  },
  9: {
    emoji: '😘',
    gradient: 'linear-gradient(135deg, #FFB6C1 0%, #FFC0CB 50%, #FFCCCB 100%)', // Розовый
    name: 'Финал'
  },
  10: null, // FinalStory
} as const;

export function BackgroundManager({ activeStory }: BackgroundManagerProps) {
  const [currentGradient, setCurrentGradient] = useState<string>('transparent');
  const [currentPattern, setCurrentPattern] = useState<string>('none');

  const config = STORY_CONFIGS[activeStory as keyof typeof STORY_CONFIGS];

  // Обновление градиента и паттерна при смене слайда
  useEffect(() => {
    console.log('BackgroundManager: Changing to story', activeStory, config);
    
    if (config?.gradient) {
      setCurrentGradient(config.gradient);
      // Создаем новый рандомный паттерн каждый раз при смене слайда
      setCurrentPattern(createEmojiPattern(config.emoji, 'transparent'));
    } else {
      setCurrentGradient('transparent');
      setCurrentPattern('none');
    }
  }, [config, activeStory]);

  // Возвращаем null для слайдов без фона
  if (!config) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 pointer-events-none transition-all duration-1500 ease-in-out"
      style={{
        background: currentGradient,
        backgroundImage: currentPattern,
        backgroundRepeat: 'repeat',
        backgroundSize: '600px 540px', // Размер для паттерна с 4 эмодзи 180px без пересечений
        backgroundPosition: '0 0', // Простое позиционирование
        zIndex: 0,
        minHeight: '100vh',
        width: '100vw',
        opacity: 0.9,
      }}
    >
    </div>
  );
}