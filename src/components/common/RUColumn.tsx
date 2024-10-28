import { ruData } from '../../types/type';

const RUColumn = (props: ruData) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between p-[16px]">
        <div className="flex">
          <div className="w-14">
            <img 
              src={props.userImg} 
              className='w-[36px] h-[36px]' 
              alt="" 
            />
          </div>
          <div className="">
            <span className='font-[400] text-[14px] text-[#EBCF83] leading-[16.71px]'>
              {props.userName}
            </span>
            <div className="flex">
              <span className='font-[400] text-[12px] text-[#ffffff] leading-[14.32px] min-[1370px]:w-16 text-center mr-[4px] bg-[#EBCF83] rounded-[8px]'>
                GAMMING
              </span>
              <span className='font-[400] text-[12px] text-[#ffffff] leading-[14.32px] min-[1370px]:w-16 text-center mr-[4px] bg-[#EBCF83] rounded-[8px] px-1'>
                TECH
              </span>
              { 
                props.musicStatus ? 
                <span className='font-[400] text-[12px] text-[#ffffff] leading-[14.32px] min-[1370px]:w-16 text-center bg-[#EBCF83] rounded-[8px] px-1 min-[375px]:block hidden'>
                  MUSIC
                </span> : ''
              }
            </div>
          </div>
        </div>
        <div className='flex'>
          <div className="min-[1370px]:mr-4 sm:w-14 w-8">
            <img src="./del.png" className='ml-0' alt="" />
          </div>
          <div className="sm:w-14 w-8">
            <img src="./fav.png" className='ml-0' alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RUColumn;