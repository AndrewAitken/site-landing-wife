import imgRectangle1 from "figma:asset/2d057abff2e32b4958e2b67e304b31f747582b70.png";
import imgRectangle3 from "figma:asset/de6b3e2c18dc5c266e2681ccebd9dc9e103f9f9b.png";
import imgRectangle2 from "figma:asset/ea7d281824f758ffadd7afe4c354d4ea629065db.png";
import imgRectangle4 from "figma:asset/cc0225b42a634660cba4599fc303d9367c8a87ec.png";
import imgContainer1 from "figma:asset/6a8dad9bd6fd8f077ea3c033aefbd4a2c82bc0f6.png";
import imgRectangle5 from "figma:asset/f853c8a945665808fdf96d430ffca9885127cec2.png";
import imgRectangle6 from "figma:asset/8a1a61678c651bc3ffb79294fe12c8b2e53f56e4.png";
import imgRectangle7 from "figma:asset/e35bbfa6820d224f31371b87e5c00a1332672c82.png";
import imgRectangle8 from "figma:asset/7d419d76410b24b74e2a0e32dfefe25a552a46a7.png";
import imgRectangle9 from "figma:asset/6beebf0d9131a3edf406d2e8b16390f790537d67.png";
import imgRectangle10 from "figma:asset/dd142548e856ea8b3206ba846ccbc36df4c78f90.png";
import imgRectangle11 from "figma:asset/45b740b23fa3317921902b3e52ffa77721b329fe.png";
import imgRectangle12 from "figma:asset/1dccd51dd60b3216fb4267b9c20970fccca5d61c.png";
import imgRectangle13 from "figma:asset/4de040807d4f6539c90c802cee34e7265001acc8.png";
import imgRectangle14 from "figma:asset/110d7498f3300c1ec3ed6f04e41b1d07f968d72d.png";
import imgRectangle15 from "figma:asset/8646335146fdf2dbfe130d3ac002dbe7fc3bd14c.png";
import imgRectangle16 from "figma:asset/8b50b2c164a57fdd60aa840b7aea56def8ed37cb.png";
import imgRectangle17 from "figma:asset/7dc9898244e924880464a6aa7eccbaea5facc300.png";

const photoRows = [
  [imgRectangle1, imgRectangle3, imgRectangle2],
  [imgRectangle4, imgContainer1, imgRectangle5],
  [imgRectangle6, imgRectangle7, imgRectangle8],
  [imgRectangle9, imgRectangle10, imgRectangle11],
  [imgRectangle12, imgRectangle13, imgRectangle14],
  [imgRectangle15, imgRectangle16, imgRectangle17],
];

export function PhotoGalleryStory() {
  return (
    <div className="bg-white max-w-[480px] relative rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-full">
      <div className="max-w-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start max-w-inherit p-[24px] relative w-full">
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            <p className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] text-black text-nowrap tracking-[-0.4492px] whitespace-pre">Кусочки истории</p>
            
            {/* Photo Grid */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              {photoRows.map((row, rowIndex) => (
                <div key={rowIndex} className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
                  {row.map((img, imgIndex) => (
                    <div key={imgIndex} className="aspect-[100/100] basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0">
                      <img 
                        alt="" 
                        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" 
                        src={img} 
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          
          <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[12px] px-0 relative shrink-0 w-full">
            <p className="font-['Montserrat:Italic',_sans-serif] font-normal italic leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] w-full">Все, что было за это время, не уместить так просто.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
