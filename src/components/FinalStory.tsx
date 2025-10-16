import imgRectangle9 from "figma:asset/6beebf0d9131a3edf406d2e8b16390f790537d67.png";

export function FinalStory() {
  return (
    <div className="bg-[#212121] relative rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-full">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-center p-[32px] relative w-full">
          {/* Avatar */}
          <div className="relative rounded-[1000px] shrink-0 size-[120px]">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[1000px] size-full" src={imgRectangle9} />
          </div>
          
          <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full">
            {/* Main Content */}
            <div className="content-stretch flex flex-col gap-[23.995px] items-center relative shrink-0 w-full">
              <p className="font-medium leading-[24px] relative shrink-0 text-[18px] text-center text-nowrap text-white tracking-[-0.3125px] whitespace-pre">С Днём Рождения!</p>
              
              <div className="content-stretch flex flex-col font-normal gap-[15.994px] items-start leading-[24px] relative shrink-0 text-[15px] text-center tracking-[-0.3125px] w-full">
                <p className="relative shrink-0 text-[#d1d5dc] w-full">30 лет — это не просто цифра. Это история о том, как девушка, которую я встретил в 20 лет, стала удивительной женщиной, матерью и моей опорой.</p>
                <p className="relative shrink-0 text-[#d1d5dc] w-full">Спасибо за эти 10 лет вместе. За любовь, за смех, за слезы, за рост. За то, что ты рядом каждый день.</p>
                <p className="relative shrink-0 text-white w-full">Я люблю тебя больше, чем вчера, и меньше, чем завтра.</p>
              </div>

              <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full">
                <div className="bg-[rgba(255,255,255,0.3)] h-[0.999px] shrink-0 w-[127.992px]" />
                <div className="h-[15.994px] relative shrink-0 w-[297.112px]">
                  <p className="absolute font-normal leading-[16px] left-[149.35px] text-[#99a1af] text-[12px] text-center text-nowrap top-[0.52px] translate-x-[-50%] whitespace-pre">С любовью, твой муж</p>
                </div>
                <div className="h-[15.994px] relative shrink-0 w-[297.112px]">
                  <p className="absolute font-normal leading-[16px] left-[149.06px] text-[#6a7282] text-[12px] text-center text-nowrap top-[0.52px] translate-x-[-50%] whitespace-pre">17 октября 2025</p>
                </div>
              </div>
            </div>

            {/* Heart Emoji */}
            <div className="relative shrink-0 w-full">
              <div className="flex flex-col items-center justify-center size-full">
                <div className="box-border content-stretch flex flex-col gap-[8px] items-center justify-center px-[130px] py-0 relative w-full">
                  <p className="font-normal leading-[16px] relative shrink-0 text-[14.4px] text-center text-nowrap text-white tracking-[0.1477px] whitespace-pre">❤️</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
