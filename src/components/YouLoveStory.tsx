function BulletIcon() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g>
          <circle cx="10" cy="10.4961" fill="black" r="4" />
        </g>
      </svg>
    </div>
  );
}

interface ListItemProps {
  text: string;
}

function ListItem({ text }: ListItemProps) {
  return (
    <div className="content-stretch flex gap-[15.994px] items-start relative shrink-0 w-full">
      <BulletIcon />
      <p className="basis-0 font-['Montserrat:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#364153] text-[14px] tracking-[-0.1504px]">{text}</p>
    </div>
  );
}

const interests = [
  'Горные лыжи',
  'Вкусную еду',
  'Путешествия',
  'Гулять',
  'Горные лыжи',
  'Петь',
  'Встречаться с друзьями',
  'Смотреть сериалы и фильмы',
  'Ездить на дачу',
];

export function YouLoveStory() {
  return (
    <div className="bg-white relative rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[24px] relative w-full">
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            {/* Header */}
            <div className="h-[29.998px] relative shrink-0 w-full">
              <p className="absolute font-['Montserrat:Medium',_sans-serif] font-medium leading-[24px] left-0 text-[16px] text-black text-nowrap top-[0.14px] tracking-[-0.4492px] whitespace-pre">Ты любишь</p>
            </div>

            {/* List */}
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
              {interests.map((interest, index) => (
                <ListItem key={index} text={interest} />
              ))}
            </div>

            {/* Footer - removed underline */}
            <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[12px] px-0 relative shrink-0 w-full">
              <p className="font-['Montserrat:Italic',_sans-serif] font-normal italic leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] w-full">Тебе интересно множество вещей и ты так много хочешь еще увидеть и попробовать — я обязательно помогу твоим мечтам сбыться.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
