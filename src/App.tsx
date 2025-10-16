import { useState } from 'react';
import { ProgressBar } from './components/ProgressBar';
import { StoryContainer } from './components/StoryContainer';
import { IntroStory } from './components/IntroStory';
import { MilestoneStory } from './components/MilestoneStory';
import { TodayStory } from './components/TodayStory';
import { GrowthStory } from './components/GrowthStory';
import { GratitudeStory } from './components/GratitudeStory';
import { YouLoveStory } from './components/YouLoveStory';
import { PhotoGalleryStory } from './components/PhotoGalleryStory';
import { FinalStory } from './components/FinalStory';
import { Confetti } from './components/Confetti';
import { BackgroundManager } from './components/BackgroundManager';

import imgContainer1 from "figma:asset/6a8dad9bd6fd8f077ea3c033aefbd4a2c82bc0f6.png";
import imgContainer2 from "figma:asset/cd8343917a5a979b1bcde06c13bf38e2d14132d9.png";
import imgContainer3 from "figma:asset/a6449bab9c841119a821b66c0b65bd182e39acd1.png";
import imgContainer4 from "figma:asset/3a6339be2ffdfc56dde71ece83feaa77e405fcb4.png";

export default function App() {
  const totalStories = 10;
  const [activeStory, setActiveStory] = useState(1);

  const handleActiveStoryChange = (storyIndex: number) => {
    console.log('App: Story changed to:', storyIndex);
    setActiveStory(storyIndex);
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Manager */}
      <BackgroundManager activeStory={activeStory} />
      
      {/* Confetti Animation */}
      <div className="relative z-20">
        <Confetti />
      </div>
      
      <div className="relative z-10">
        <ProgressBar 
          totalStories={totalStories} 
          onActiveStoryChange={handleActiveStoryChange}
        />
        
        <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        {/* Intro */}
        <StoryContainer id="story-0">
          <IntroStory />
        </StoryContainer>

        {/* 20 лет - Встреча (2015) */}
        <StoryContainer id="story-1">
          <MilestoneStory
            year={2015}
            age={20}
            title="Встреча"
            description="Это было начало всего. Молодые, полные мечтаний и надежд. Я встретил тебя и понял — вот она, та самая."
            quote="И началась наша история..."
            imageUrl={imgContainer1}
          />
        </StoryContainer>

        {/* Благодарность */}
        <StoryContainer id="story-2">
          <GratitudeStory />
        </StoryContainer>

        {/* 21 год - Свадьба (2017) */}
        <StoryContainer id="story-3">
          <MilestoneStory
            year={2017}
            age={21}
            title="Свадьба"
            description="Мы сказали друг другу 'Да'. Этот день стал началом нашей семьи. Ты была прекрасна, и я знал — с тобой я готов на всё."
            quote="Лучшее решение в моей жизни"
            imageUrl={imgContainer2}
          />
        </StoryContainer>

        {/* Путь роста */}
        <StoryContainer id="story-4">
          <GrowthStory />
        </StoryContainer>

        {/* 27 лет - Рождение сына (2023) */}
        <StoryContainer id="story-5">
          <MilestoneStory
            year={2023}
            age={27}
            title="Рождение сына"
            description="Самый важный день в нашей жизни. Ты подарила мне сына, и я увидел тебя в новом свете — невероятно сильной, любящей матерью. Спасибо за этот дар."
            quote="Ты стала мамой, и это было прекрасно"
            imageUrl={imgContainer3}
          />
        </StoryContainer>

        {/* Ты любишь */}
        <StoryContainer id="story-6">
          <YouLoveStory />
        </StoryContainer>

        {/* Кусочки истории */}
        <StoryContainer id="story-7">
          <PhotoGalleryStory />
        </StoryContainer>

        {/* 30 лет - Сегодня (2025) */}
        <StoryContainer id="story-8">
          <TodayStory
            year={2025}
            age={30}
            title="Сегодня"
            description="Ты превратилась в удивительную женщину — уверенную, мудрую, сильную. Каждый день я восхищаюсь тем, кем ты стала. И это только начало нового этапа."
            quote="Лучшая версия тебя — впереди"
            imageUrl={imgContainer4}
          />
        </StoryContainer>

        {/* Финал */}
        <StoryContainer id="story-9">
          <FinalStory />
        </StoryContainer>
        </div>
      </div>
    </div>
  );
}
