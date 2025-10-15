interface TodayStoryProps {
  year: number;
  age: number;
  title: string;
  description: string;
  quote: string;
  imageUrl: string;
}

export function TodayStory({ year, age, title, description, quote, imageUrl }: TodayStoryProps) {
  return (
    <div className="box-border content-stretch flex flex-col items-start overflow-clip relative rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-full">
      {/* Image Section */}
      <div className="h-[320px] relative shrink-0 w-full">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imageUrl} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0.8)] via-50% via-[rgba(0,0,0,0)] pointer-events-none" />
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="box-border content-stretch flex flex-col h-[320px] items-start justify-between p-[24px] relative w-full">
            <div className="backdrop-blur-[2px] backdrop-filter bg-[rgba(255,255,255,0.8)] box-border content-stretch flex gap-[12px] items-center px-[14px] py-[5px] relative rounded-[1.75866e+07px] shrink-0">
              <p className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black text-nowrap tracking-[-0.3125px] whitespace-pre">{year} год</p>
            </div>
            <p className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[48px] relative shrink-0 text-[40px] text-nowrap text-white tracking-[0.2637px] whitespace-pre">{age}</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative shrink-0 w-full">
        <div className="size-full">
          <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
            <div className="content-stretch flex flex-col gap-[11.998px] items-start relative shrink-0 w-full">
              <div className="h-[24.003px] relative shrink-0 w-full">
                <p className="absolute font-['Montserrat:Medium',_sans-serif] font-medium leading-[24px] left-0 text-[18px] text-black text-nowrap top-[-0.9px] tracking-[-0.3125px] whitespace-pre">{title}</p>
              </div>
              <p className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[22.75px] relative shrink-0 text-[#4a5565] text-[14px] tracking-[-0.1504px] w-full">{description}</p>
            </div>
            <p className="font-['Montserrat:Italic',_sans-serif] font-normal italic leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] w-full">"{quote}"</p>
          </div>
        </div>
      </div>
    </div>
  );
}
