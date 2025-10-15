import svgPaths from "./svg-zvzm05fps7";
import imgContainer from "figma:asset/7dc9898244e924880464a6aa7eccbaea5facc300.png";
import imgContainer1 from "figma:asset/d2e5bbd1b5524ae7e72606b2e277754d4ac28674.png";

function Container() {
  return <div className="bg-[#070707] h-[3.996px] rounded-[1.75866e+07px] shrink-0 w-full" data-name="Container" />;
}

function Container1() {
  return (
    <div className="basis-0 bg-[#e3e3e3] content-stretch flex flex-col grow h-[3.996px] items-start min-h-px min-w-px overflow-clip relative rounded-[1.75866e+07px] shrink-0" data-name="Container">
      <Container />
    </div>
  );
}

function Container2() {
  return <div className="bg-[#e3e3e3] h-[3.996px] rounded-[1.75866e+07px] shrink-0 w-full" data-name="Container" />;
}

function Container3() {
  return (
    <div className="basis-0 bg-[#e3e3e3] content-stretch flex flex-col grow h-[3.996px] items-start min-h-px min-w-px overflow-clip relative rounded-[1.75866e+07px] shrink-0" data-name="Container">
      <Container2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="backdrop-blur-[2px] backdrop-filter bg-[rgba(255,255,255,0.8)] box-border content-stretch flex gap-[12px] items-center px-[14px] py-[5px] relative rounded-[1.75866e+07px] shrink-0" data-name="Container">
      <p className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black text-nowrap tracking-[-0.3125px] whitespace-pre">2023 год</p>
    </div>
  );
}

function Container6() {
  return <p className="basis-0 font-['Montserrat:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#364153] text-[14px] tracking-[-0.1504px]">За нашего сына. Ты подарила мне величайшее счастье — стать отцом. Твоя любовь и забота делают нашу семью крепче каждый день.</p>;
}

function Container8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
          <div className="content-stretch flex flex-col gap-[11.998px] items-start relative shrink-0 w-full" data-name="Container">
            <div className="h-[24.003px] relative shrink-0 w-full" data-name="MilestoneStory">
              <p className="absolute font-['Montserrat:Medium',_sans-serif] font-medium leading-[24px] left-0 text-[18px] text-black text-nowrap top-[-0.9px] tracking-[-0.3125px] whitespace-pre">Сегодня</p>
            </div>
            <p className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[22.75px] relative shrink-0 text-[#4a5565] text-[14px] tracking-[-0.1504px] w-full">Ты превратилась в удивительную женщину — уверенную, мудрую, сильную. Каждый день я восхищаюсь тем, кем ты стала. И это только начало нового этапа.</p>
          </div>
          <p className="font-['Montserrat:Italic',_sans-serif] font-normal italic leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] w-full">{`"Лучшая версия тебя — впереди"`}</p>
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-center justify-center px-[130px] py-0 relative w-full">
          <p className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[40px] relative shrink-0 text-[36px] text-center text-nowrap text-white tracking-[0.3691px] whitespace-pre">❤️</p>
        </div>
      </div>
    </div>
  );
}

function ProgressBar() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="ProgressBar">
      <Container1 />
      {[...Array(7).keys()].map((_, i) => (
        <Container3 key={i} />
      ))}
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[320px] relative shrink-0 w-full" data-name="Container">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[147.43%] left-0 max-w-none top-[-42.32%] w-full" src={imgContainer} />
      </div>
      <div className="size-full">
        <div className="h-[320px] w-full" />
      </div>
    </div>
  );
}

function IntroStory() {
  return <div className="bg-black h-[0.999px] shrink-0 w-[95.996px]" data-name="IntroStory" />;
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[36px] relative shrink-0 text-[24px] text-black text-center text-nowrap tracking-[0.0703px] whitespace-pre">Моей любимой</p>
      <IntroStory />
      <p className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[#4a5565] text-[16px] text-center tracking-[-0.3125px] w-[min-content]">История о любви, росте и путешествии длиною в жизнь</p>
    </div>
  );
}

function IntroStory1() {
  return (
    <div className="h-[15.994px] relative shrink-0 w-[297.112px]" data-name="IntroStory">
      <p className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[16px] left-[148.6px] text-[#99a1af] text-[12px] text-center text-nowrap top-[0.52px] translate-x-[-50%] whitespace-pre">Листай вниз</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d="M8 12L16 20L24 12" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66634" />
        </g>
      </svg>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Container">
      <IntroStory1 />
      <Icon />
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-center p-[24px] relative w-full">
          <p className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[56px] relative shrink-0 text-[56px] text-center text-neutral-950 text-nowrap tracking-[0.123px] whitespace-pre">30</p>
          <Container17 />
          <Container18 />
        </div>
      </div>
    </div>
  );
}

function IntroStory2() {
  return (
    <div className="box-border content-stretch flex flex-col h-[620.993px] items-center overflow-clip relative rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="IntroStory">
      <Container16 />
      <Container19 />
    </div>
  );
}

function Container20() {
  return (
    <div className="backdrop-blur-[2px] backdrop-filter bg-[rgba(255,255,255,0.8)] box-border content-stretch flex gap-[12px] items-center px-[14px] py-[5px] relative rounded-[1.75866e+07px] shrink-0" data-name="Container">
      <p className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black text-nowrap tracking-[-0.3125px] whitespace-pre">2015 год</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[320px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgContainer1} />
        <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0.2)] inset-0 to-[rgba(0,0,0,0.8)] via-50% via-[rgba(0,0,0,0)]" />
      </div>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[320px] items-start justify-between p-[24px] relative w-full">
          <Container20 />
          <p className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[48px] relative shrink-0 text-[40px] text-nowrap text-white tracking-[0.2637px] whitespace-pre">20</p>
        </div>
      </div>
    </div>
  );
}

function MilestoneStory() {
  return (
    <div className="h-[24.003px] relative shrink-0 w-full" data-name="MilestoneStory">
      <p className="absolute font-['Montserrat:Medium',_sans-serif] font-medium leading-[24px] left-0 text-[18px] text-black text-nowrap top-[-0.9px] tracking-[-0.3125px] whitespace-pre">Встреча</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col gap-[11.998px] items-start relative shrink-0 w-full" data-name="Container">
      <MilestoneStory />
      <p className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[22.75px] relative shrink-0 text-[#4a5565] text-[14px] tracking-[-0.1504px] w-full">Это было начало всего. Молодые, полные мечтаний и надежд. Я встретил тебя и понял — вот она, та самая.</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="box-border content-stretch flex flex-col h-[32.512px] items-start pb-0 pt-[16.518px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.524px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <p className="font-['Montserrat:Italic',_sans-serif] font-normal italic leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] w-full">{`"И началась наша история..."`}</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
          <Container22 />
          <Container23 />
        </div>
      </div>
    </div>
  );
}

function MilestoneStory1() {
  return (
    <div className="box-border content-stretch flex flex-col items-start overflow-clip relative rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="MilestoneStory">
      <Container21 />
      <Container24 />
    </div>
  );
}

function Container25() {
  return (
    <div className="backdrop-blur-[2px] backdrop-filter bg-[rgba(255,255,255,0.8)] box-border content-stretch flex gap-[12px] items-center px-[14px] py-[5px] relative rounded-[1.75866e+07px] shrink-0" data-name="Container">
      <p className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black text-nowrap tracking-[-0.3125px] whitespace-pre">2017 год</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[320px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgContainer1} />
        <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0.2)] inset-0 to-[rgba(0,0,0,0.8)] via-50% via-[rgba(0,0,0,0)]" />
      </div>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[320px] items-start justify-between p-[24px] relative w-full">
          <Container25 />
          <p className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[48px] relative shrink-0 text-[40px] text-nowrap text-white tracking-[0.2637px] whitespace-pre">21</p>
        </div>
      </div>
    </div>
  );
}

function MilestoneStory2() {
  return (
    <div className="h-[24.003px] relative shrink-0 w-full" data-name="MilestoneStory">
      <p className="absolute font-['Montserrat:Medium',_sans-serif] font-medium leading-[24px] left-0 text-[18px] text-black text-nowrap top-[-0.9px] tracking-[-0.3125px] whitespace-pre">Свадьба</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col gap-[11.998px] items-start relative shrink-0 w-full" data-name="Container">
      <MilestoneStory2 />
      <p className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[22.75px] relative shrink-0 text-[#4a5565] text-[14px] tracking-[-0.1504px] w-full">{`Мы сказали друг другу 'Да'. Этот день стал началом нашей семьи. Ты была прекрасна, и я знал — с тобой я готов на всё.`}</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[16.518px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.524px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <p className="font-['Montserrat:Italic',_sans-serif] font-normal italic leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] w-full">{`"Лучшее решение в моей жизни"`}</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
          <Container27 />
          <Container28 />
        </div>
      </div>
    </div>
  );
}

function MilestoneStory3() {
  return (
    <div className="box-border content-stretch flex flex-col items-start overflow-clip relative rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="MilestoneStory">
      <Container26 />
      <Container29 />
    </div>
  );
}

function GrowthStory() {
  return <div className="bg-black h-[0.999px] shrink-0 w-[95.996px]" data-name="GrowthStory" />;
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[24px] relative shrink-0 text-[18px] text-black text-center text-nowrap tracking-[-0.3125px] whitespace-pre">Твой путь роста</p>
      <GrowthStory />
      <p className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[20px] min-w-full relative shrink-0 text-[#4a5565] text-[14px] tracking-[-0.1504px] w-[min-content]">За эти годы ты проделала невероятную работу над собой. Я видел каждое твое усилие, каждый шаг к лучшей версии себя.</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_4_187)" id="Icon">
          <path d={svgPaths.p1630ec80} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999986" />
          <path d="M13.3331 2V4.66667" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999986" />
          <path d="M14.6667 3.33343H12" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999986" />
          <path d="M2.66685 11.3331V12.6665" id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999986" />
          <path d="M3.33333 11.9997H2" id="Vector_5" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999986" />
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

function GrowthStory1() {
  return (
    <div className="content-stretch flex flex-col gap-[3.996px] items-start relative shrink-0 text-nowrap w-full whitespace-pre" data-name="GrowthStory">
      <p className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-black tracking-[-0.1504px]">Мудрость</p>
      <p className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#6a7282] text-[12px]">С каждым годом становишься мудрее</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cecece] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start p-[12px] relative w-full">
          <Icon1 />
          <GrowthStory1 />
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p3d7269c0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999986" />
          <path d={svgPaths.p2ad42fd8} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999986" />
        </g>
      </svg>
    </div>
  );
}

function GrowthStory2() {
  return (
    <div className="content-stretch flex flex-col gap-[3.996px] items-start relative shrink-0 text-nowrap w-full whitespace-pre" data-name="GrowthStory">
      <p className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-black tracking-[-0.1504px]">Рост</p>
      <p className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#6a7282] text-[12px]">Постоянно развиваешься и учишься</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cecece] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start p-[12px] relative w-full">
          <Icon2 />
          <GrowthStory2 />
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p22c21800} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999986" />
        </g>
      </svg>
    </div>
  );
}

function GrowthStory3() {
  return (
    <div className="content-stretch flex flex-col gap-[3.996px] items-start relative shrink-0 text-nowrap w-full whitespace-pre" data-name="GrowthStory">
      <p className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-black tracking-[-0.1504px]">Сила</p>
      <p className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#6a7282] text-[12px]">Твоя внутренняя сила восхищает</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cecece] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start p-[12px] relative w-full">
          <Icon3 />
          <GrowthStory3 />
        </div>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p16300700} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999986" />
        </g>
      </svg>
    </div>
  );
}

function GrowthStory4() {
  return (
    <div className="content-stretch flex flex-col gap-[3.996px] items-start relative shrink-0 text-nowrap w-full whitespace-pre" data-name="GrowthStory">
      <p className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-black tracking-[-0.1504px]">Уверенность</p>
      <p className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#6a7282] text-[12px]">Знаешь себе цену</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cecece] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start p-[12px] relative w-full">
          <Icon4 />
          <GrowthStory4 />
        </div>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full" data-name="Container">
      <Container31 />
      <Container32 />
      <Container33 />
      <Container34 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="box-border content-stretch flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal gap-[4px] items-start leading-[20px] px-0 py-px relative shrink-0 text-[14px] text-center text-nowrap tracking-[-0.1504px] w-full whitespace-pre" data-name="Paragraph">
      <p className="relative shrink-0 text-[#364153]">Я горжусь тобой и тем, кем ты стала.</p>
      <p className="relative shrink-0 text-black">Ты — мое вдохновение.</p>
    </div>
  );
}

function GrowthStory5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="GrowthStory">
      <Container30 />
      <Container35 />
      <Paragraph />
    </div>
  );
}

function StoryCard() {
  return (
    <div className="relative rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="StoryCard">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-start p-[24px] relative w-full">
          <GrowthStory5 />
        </div>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[320px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgContainer1} />
        <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0.2)] inset-0 to-[rgba(0,0,0,0.8)] via-50% via-[rgba(0,0,0,0)]" />
      </div>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[320px] items-start justify-between p-[24px] relative w-full">
          <Container4 />
          <p className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[48px] relative shrink-0 text-[40px] text-nowrap text-white tracking-[0.2637px] whitespace-pre">27</p>
        </div>
      </div>
    </div>
  );
}

function MilestoneStory4() {
  return (
    <div className="h-[24.003px] relative shrink-0 w-full" data-name="MilestoneStory">
      <p className="absolute font-['Montserrat:Medium',_sans-serif] font-medium leading-[24px] left-0 text-[18px] text-black text-nowrap top-[-0.9px] tracking-[-0.3125px] whitespace-pre">Рождение сына</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col gap-[11.998px] items-start relative shrink-0 w-full" data-name="Container">
      <MilestoneStory4 />
      <p className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[22.75px] relative shrink-0 text-[#242424] text-[14px] tracking-[-0.1504px] w-full">Самый важный день в нашей жизни. Ты подарила мне сына, и я увидел тебя в новом свете — невероятно сильной, любящей матерью. Спасибо за этот дар.</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[16.518px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.524px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <p className="font-['Montserrat:Italic',_sans-serif] font-normal italic leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] w-full">{`"Ты стала мамой, и это было прекрасно"`}</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
          <Container38 />
          <Container39 />
        </div>
      </div>
    </div>
  );
}

function MilestoneStory5() {
  return (
    <div className="box-border content-stretch flex flex-col items-start overflow-clip relative rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="MilestoneStory">
      <Container37 />
      <Container40 />
    </div>
  );
}

function GratitudeStory() {
  return (
    <div className="absolute h-[29.998px] left-0 top-0 w-[297.112px]" data-name="GratitudeStory">
      <p className="absolute font-['Montserrat:Medium',_sans-serif] font-medium leading-[30px] left-0 text-[20px] text-black text-nowrap top-[0.14px] tracking-[-0.4492px] whitespace-pre">Спасибо тебе</p>
    </div>
  );
}

function GratitudeStory1() {
  return <div className="absolute bg-black h-[0.999px] left-0 top-[37.99px] w-[63.992px]" data-name="GratitudeStory" />;
}

function Container41() {
  return (
    <div className="h-[38.99px] relative shrink-0 w-full" data-name="Container">
      <GratitudeStory />
      <GratitudeStory1 />
    </div>
  );
}

function GratitudeItem() {
  return (
    <div className="relative shrink-0" data-name="GratitudeItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start relative">
        <p className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[28.8px] relative shrink-0 text-[24px] text-neutral-950 text-nowrap tracking-[0.3164px] whitespace-pre">👶</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex gap-[15.994px] items-start relative shrink-0 w-full" data-name="Container">
      <GratitudeItem />
      <Container6 />
    </div>
  );
}

function GratitudeItem1() {
  return (
    <div className="relative shrink-0" data-name="GratitudeItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start relative">
        <p className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[28.8px] relative shrink-0 text-[24px] text-neutral-950 text-nowrap tracking-[0.3164px] whitespace-pre">💪</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex gap-[15.994px] items-start relative shrink-0 w-full" data-name="Container">
      <GratitudeItem1 />
      <p className="basis-0 font-['Montserrat:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#364153] text-[14px] tracking-[-0.1504px]">За твою невероятную силу. Я восхищаюсь тем, как ты работаешь над собой, развиваешься и становишься лучше. Твоя целеустремленность вдохновляет меня.</p>
    </div>
  );
}

function GratitudeItem2() {
  return (
    <div className="relative shrink-0 w-[24px]" data-name="GratitudeItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start relative w-[24px]">
        <p className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[28.921px] relative shrink-0 text-[24.1px] text-neutral-950 text-nowrap tracking-[0.3177px] whitespace-pre">🤝</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex gap-[15.994px] items-start relative shrink-0 w-full" data-name="Container">
      <GratitudeItem2 />
      <p className="basis-0 font-['Montserrat:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#364153] text-[14px] tracking-[-0.1504px]">За поддержку. В трудные моменты ты всегда рядом, веришь в меня и помогаешь двигаться вперед. Ты — моя опора.</p>
    </div>
  );
}

function GratitudeItem3() {
  return (
    <div className="h-[28.915px] relative shrink-0 w-[24px]" data-name="GratitudeItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[28.915px] items-start relative w-[24px]">
        <p className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[28.921px] relative shrink-0 text-[24.1px] text-neutral-950 text-nowrap tracking-[0.3177px] whitespace-pre">🌱</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex gap-[15.994px] items-start relative shrink-0 w-full" data-name="Container">
      <GratitudeItem3 />
      <p className="basis-0 font-['Montserrat:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#364153] text-[14px] tracking-[-0.1504px]">За то, что растешь вместе со мной. Мы прошли огромный путь — от молодых влюбленных до взрослой семьи. И каждый этап с тобой прекрасен.</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Container42 />
      <Container43 />
      <Container44 />
      <Container45 />
    </div>
  );
}

function Container47() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[12px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.524px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <p className="font-['Montserrat:Italic',_sans-serif] font-normal italic leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] w-full">Ты изменилась так сильно за эти годы — стала мудрее, сильнее, увереннее. И я горжусь каждым твоим шагом на этом пути.</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container41 />
      <Container46 />
      <Container47 />
    </div>
  );
}

function GratitudeStory2() {
  return (
    <div className="bg-white relative rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="GratitudeStory">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[24px] relative w-full">
          <Container48 />
        </div>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="backdrop-blur-[2px] backdrop-filter bg-[rgba(255,255,255,0.8)] box-border content-stretch flex gap-[12px] items-center px-[14px] py-[5px] relative rounded-[1.75866e+07px] shrink-0" data-name="Container">
      <p className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black text-nowrap tracking-[-0.3125px] whitespace-pre">2025 год</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[320px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgContainer1} />
        <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0.2)] inset-0 to-[rgba(0,0,0,0.8)] via-50% via-[rgba(0,0,0,0)]" />
      </div>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[320px] items-start justify-between p-[24px] relative w-full">
          <Container49 />
          <p className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[48px] relative shrink-0 text-[40px] text-nowrap text-white tracking-[0.2637px] whitespace-pre">30</p>
        </div>
      </div>
    </div>
  );
}

function MilestoneStory7() {
  return (
    <div className="box-border content-stretch flex flex-col items-start overflow-clip relative rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="MilestoneStory">
      <Container50 />
      <Container8 />
    </div>
  );
}

function FinalStory() {
  return (
    <div className="content-stretch flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal gap-[15.994px] items-start leading-[24px] relative shrink-0 text-[16px] text-center tracking-[-0.3125px] w-full" data-name="FinalStory">
      <p className="relative shrink-0 text-[#d1d5dc] w-full">30 лет — это не просто цифра. Это история о том, как девушка, которую я встретил в 20, стала удивительной женщиной, матерью и моей опорой.</p>
      <p className="relative shrink-0 text-[#d1d5dc] w-full">Спасибо за эти 10 лет вместе. За любовь, за смех, за слезы, за рост. За то, что ты рядом каждый день.</p>
      <p className="relative shrink-0 text-white w-full">Я люблю тебя больше, чем вчера, и меньше, чем завтра.</p>
    </div>
  );
}

function Container53() {
  return <div className="bg-[rgba(255,255,255,0.3)] h-[0.999px] shrink-0 w-[127.992px]" data-name="Container" />;
}

function Paragraph1() {
  return (
    <div className="h-[15.994px] relative shrink-0 w-[297.112px]" data-name="Paragraph">
      <p className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[16px] left-[149.35px] text-[#99a1af] text-[12px] text-center text-nowrap top-[0.52px] translate-x-[-50%] whitespace-pre">С любовью, твой муж</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[15.994px] relative shrink-0 w-[297.112px]" data-name="Paragraph">
      <p className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[16px] left-[149.06px] text-[#6a7282] text-[12px] text-center text-nowrap top-[0.52px] translate-x-[-50%] whitespace-pre">15 октября 2025</p>
    </div>
  );
}

function FinalStory1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="FinalStory">
      <Container53 />
      <Paragraph1 />
      <Paragraph2 />
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col gap-[23.995px] items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[24px] relative shrink-0 text-[18px] text-center text-nowrap text-white tracking-[-0.3125px] whitespace-pre">С Днём Рождения!</p>
      <FinalStory />
      <FinalStory1 />
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Container">
      <Container54 />
      <Container10 />
    </div>
  );
}

function FinalStory2() {
  return (
    <div className="bg-[#212121] relative rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="FinalStory">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-center p-[32px] relative w-full">
          <Container56 />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[56px] items-start px-0 py-[40px] relative shrink-0 w-full" data-name="App">
      <IntroStory2 />
      <MilestoneStory1 />
      <MilestoneStory3 />
      <StoryCard />
      <MilestoneStory5 />
      <GratitudeStory2 />
      <MilestoneStory7 />
      <FinalStory2 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="Сайт-лендинг для жены">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col items-center px-[24px] py-[32px] relative size-full">
          <ProgressBar />
          <App />
        </div>
      </div>
    </div>
  );
}