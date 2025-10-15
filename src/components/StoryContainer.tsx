import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface StoryContainerProps {
  children: ReactNode;
  id: string;
}

export function StoryContainer({ children, id }: StoryContainerProps) {
  return (
    <div 
      id={id}
      className="min-h-screen w-full flex items-center justify-center snap-start snap-always px-[24px] py-[80px]"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="w-full max-w-[480px]"
      >
        {children}
      </motion.div>
    </div>
  );
}
