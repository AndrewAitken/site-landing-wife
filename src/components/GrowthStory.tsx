import svgPaths from "../imports/svg-886gdv0odq";

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_4_187)">
          <path d={svgPaths.p1630ec80} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999986" />
          <path d="M13.3331 2V4.66667" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999986" />
          <path d="M14.6667 3.33343H12" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999986" />
          <path d="M2.66685 11.3331V12.6665" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999986" />
          <path d="M3.33333 11.9997H2" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999986" />
        </g>
        <defs>
          <clipPath id="clip0_4_187">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g>
          <path d={svgPaths.p3d7269c0} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999986" />
          <path d={svgPaths.p2ad42fd8} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999986" />
        </g>
      </svg>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g>
          <path d={svgPaths.p22c21800} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999986" />
        </g>
      </svg>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g>
          <path d={svgPaths.p16300700} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999986" />
        </g>
      </svg>
    </div>
  );
}

const qualities = [
  { Icon: Icon1, label: 'Мудрость', description: 'С каждым годом становишься мудрее' },
  { Icon: Icon2, label: 'Самопознание', description: 'Постоянно развиваешься и работаешь над собой' },
  { Icon: Icon3, label: 'Сила', description: 'Твоя внутренняя сила восхищает' },
  { Icon: Icon4, label: 'Уверенность', description: 'Знаешь себе цену' },
];

export function GrowthStory() {
  return (
    <div className="relative rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-start p-[24px] relative w-full">
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            {/* Header */}
            <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0 w-full">
              <p className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] text-black text-nowrap tracking-[-0.4492px] whitespace-pre">Твой путь роста</p>
              <p className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[20px] min-w-full relative shrink-0 text-[#4a5565] text-[14px] tracking-[-0.1504px] w-[min-content]">За эти годы ты проделала невероятную работу над собой. Я видел каждое твое усилие, каждый шаг к лучшей версии себя.</p>
            </div>

            {/* Quality Cards */}
            <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full">
              {qualities.map((quality, index) => {
                const IconComponent = quality.Icon;
                return (
                  <div key={index} className="relative rounded-[16px] shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border border-[#cecece] border-solid inset-0 pointer-events-none rounded-[16px]" />
                    <div className="size-full">
                      <div className="box-border content-stretch flex flex-col gap-[12px] items-start p-[12px] relative w-full">
                        <IconComponent />
                        <div className="content-stretch flex flex-col gap-[3.996px] items-start relative shrink-0 text-nowrap w-full whitespace-pre">
                          <p className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-black tracking-[-0.1504px]">{quality.label}</p>
                          <p className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#6a7282] text-[12px]">{quality.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer - removed underline */}
            <div className="box-border content-stretch flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal gap-[4px] items-start leading-[20px] px-0 py-[12px] relative shrink-0 text-[14px] text-center text-nowrap tracking-[-0.1504px] w-full whitespace-pre">
              <p className="relative shrink-0 text-[#364153]">Я горжусь тобой и тем, кем ты стала.</p>
              <p className="relative shrink-0 text-black">Ты — мое вдохновение.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
