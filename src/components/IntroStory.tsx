import imgContainer from "figma:asset/7645434355f626fd37bb7766d9c713224e0c36e9.png";

function Icon() {
  return (
    <div className="relative shrink-0 size-[32px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g>
          <path d="M8 12L16 20L24 12" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66634" />
        </g>
      </svg>
    </div>
  );
}

export function IntroStory() {
  return (
    <div className="box-border content-stretch flex flex-col items-center overflow-clip relative rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-full">
      {/* Background Image */}
      <div className="h-[320px] relative shrink-0 w-full">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgContainer} />
        </div>
        <div className="size-full">
          <div className="h-[320px] w-full" />
        </div>
      </div>

      {/* Content */}
      <div className="bg-white relative shrink-0 w-full">
        <div className="flex flex-col items-center size-full">
          <div className="box-border content-stretch flex flex-col gap-[16px] items-center p-[24px] relative w-full">
            <p className="font-normal leading-[56px] relative shrink-0 text-[56px] text-center text-neutral-950 text-nowrap tracking-[0.123px] whitespace-pre">30 лет</p>
            
            <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
              <p className="font-medium leading-[36px] relative shrink-0 text-[24px] text-black text-center text-nowrap tracking-[0.0703px] whitespace-pre">Моей любимой</p>
              <div className="bg-black h-[0.999px] shrink-0 w-[95.996px]" />
              <p className="font-normal leading-[24px] min-w-full relative shrink-0 text-[#4a5565] text-[16px] text-center tracking-[-0.3125px] w-[min-content]">История о любви, росте и путешествии длиною в жизнь</p>
            </div>

            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
              <div className="h-[15.994px] relative shrink-0 w-[297.112px]">
                <p className="absolute font-normal leading-[16px] left-[148.6px] text-[#99a1af] text-[12px] text-center text-nowrap top-[0.52px] translate-x-[-50%] whitespace-pre">Листай вниз</p>
              </div>
              <Icon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
