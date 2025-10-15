const gratitudes = [
  {
    emoji: '👶',
    text: 'За нашего сына. Ты подарила мне величайшее счастье — стать отцом. Твоя любовь и забота делают нашу семью крепче каждый день.',
  },
  {
    emoji: '💪',
    text: 'За твою невероятную силу. Я восхищаюсь тем, как ты работаешь над собой, развиваешься и становишься лучше. Твоя целеустремленность вдохновляет меня.',
  },
  {
    emoji: '🤝',
    text: 'За поддержку. В трудные моменты ты всегда рядом, веришь в меня и помогаешь двигаться вперед. Ты — моя опора.',
  },
  {
    emoji: '🌱',
    text: 'За то, что растешь вместе со мной. Мы прошли огромный путь — от молодых влюбленных до взрослой семьи. И каждый этап с тобой прекрасен.',
  },
];

export function GratitudeStory() {
  return (
    <div className="bg-white relative rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[24px] relative w-full">
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            {/* Header */}
            <div className="h-[29.998px] relative shrink-0 w-full">
              <div className="absolute h-[29.998px] left-0 top-0 w-[297.112px]">
                <p className="absolute font-['Montserrat:Medium',_sans-serif] font-medium leading-[30px] left-0 text-[20px] text-black text-nowrap top-[0.14px] tracking-[-0.4492px] whitespace-pre">Спасибо тебе</p>
              </div>
            </div>

            {/* Gratitude Items */}
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
              {gratitudes.map((item, index) => (
                <div key={index} className="content-stretch flex gap-[15.994px] items-start relative shrink-0 w-full">
                  <div className="relative shrink-0">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start relative">
                      <p className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[28.8px] relative shrink-0 text-[24px] text-neutral-950 text-nowrap tracking-[0.3164px] whitespace-pre">{item.emoji}</p>
                    </div>
                  </div>
                  <p className="basis-0 font-['Montserrat:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#364153] text-[14px] tracking-[-0.1504px]">{item.text}</p>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[12px] px-0 relative shrink-0 w-full">
              <div aria-hidden="true" className="absolute border-[0.524px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
              <p className="font-['Montserrat:Italic',_sans-serif] font-normal italic leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] w-full">Ты изменилась так сильно за эти годы — стала мудрее, сильнее, увереннее. И я горжусь каждым твоим шагом на этом пути.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
