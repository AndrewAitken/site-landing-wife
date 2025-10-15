import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface ProgressBarProps {
  totalStories: number;
}

interface ProgressSegmentProps {
  isActive: boolean;
  onClick: () => void;
}

function ProgressSegment({ isActive, onClick }: ProgressSegmentProps) {
  return (
    <button
      onClick={onClick}
      className="basis-0 bg-[#e3e3e3] content-stretch flex flex-col grow h-[3.996px] items-start min-h-px min-w-px overflow-clip relative rounded-[1.75866e+07px] shrink-0 cursor-pointer hover:bg-[#d0d0d0] transition-colors"
      aria-label="Go to story"
    >
      <motion.div 
        className="bg-[#070707] h-[3.996px] rounded-[1.75866e+07px] shrink-0"
        initial={{ width: '0%' }}
        animate={{ width: isActive ? '100%' : '0%' }}
        transition={{ duration: 0.3 }}
      />
    </button>
  );
}

export function ProgressBar({ totalStories }: ProgressBarProps) {
  const [activeStory, setActiveStory] = useState(0);

  const scrollToStory = (index: number) => {
    const storyElement = document.getElementById(`story-${index}`);
    if (storyElement) {
      storyElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    // Use Intersection Observer for more accurate detection
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Consider story active when 50% visible
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const storyId = entry.target.id;
          const storyIndex = parseInt(storyId.split('-')[1], 10);
          if (!isNaN(storyIndex)) {
            setActiveStory(storyIndex);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all story containers
    for (let i = 0; i < totalStories; i++) {
      const storyElement = document.getElementById(`story-${i}`);
      if (storyElement) {
        observer.observe(storyElement);
      }
    }

    return () => {
      observer.disconnect();
    };
  }, [totalStories]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
      <div className="max-w-[480px] mx-auto px-[24px] py-[24px]">
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
          {Array.from({ length: totalStories }).map((_, i) => (
            <ProgressSegment 
              key={i} 
              isActive={i === activeStory} 
              onClick={() => scrollToStory(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
