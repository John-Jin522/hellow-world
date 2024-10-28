import Navhot from '../../assets/navhot.svg';
import { ldData } from '../../types/type';

const LDColumn = (props: ldData) => {
  return (
    <div className="border border-[#333333]">
      <div className="flex items-center justify-between py-4 px-[20px]">
        <div className="w-[64px] h-[16px] bg-[#EBCF83] rounded-[8px] text-center">
          <span className="font-[400] text-[12px] text-[#ffffff] leading-[14.32px] mr-[4px] align-super">
            {props.kind}
          </span>
        </div>
        <div className="block mx-[16px] w-[]">
          <div>
            <span className="font-[400] text-[12px] text-[#E5E5E5] leading-[14.32px]">
              POSTS
            </span>
          </div>
          <div>
            <span className="font-[400] text-[12px] text-[#E5E5E5] leading-[14.32px]">
              123K
            </span>
          </div>
        </div>
        <div className="flex w-[93px]">
          {
            props.imgURL.map((url, index) => (
              <img src={url} className="" key={index} alt="" />
            ))
          }
        </div>
        <div className="flex justify-end">
          <span className='sm:block hidden'>{props.budget}M</span>
          <img src={Navhot} className="ml-[14.7px] md:block hidden" alt="" />
        </div>
      </div>
    </div>
  );
}

export default LDColumn;