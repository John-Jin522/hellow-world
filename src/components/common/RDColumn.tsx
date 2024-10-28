import { rdData } from '../../types/type';

const RDColumn = (props: rdData) => {
  return (
    <div className="w-full py-2 2xl:text-[14px] xl:text-[12px] text-[10px]">
      <div className="flex items-center justify-between border-y border-y-[#EBCF83] p-4">
        <div className="px-3">
          <img 
            src={props.eventImg} 
            className='w-full h-[76px]' 
            alt="" 
          />
        </div>
        <div className="block w-[60.84%]">
          <div className="flex justify-between">
            <p className='font-[500] text-[#EBCF83]'>{props.content1}</p>
            { props.btn ? <span className='py-0.5 sm:px-3 px-1 rounded-lg bg-[#EBCF83] text-[#1A1A1A] sm:text-[12px] text-[10px] font-[400] h-4'>{props.btn}</span> : '' }
          </div>
          <p className='font-[500]'>{props.content2}</p>
          <div className="flex justify-between">
            <p className='font-[500]'>{props.content3}</p>
            <div className="flex">
              { props.shotImg ? <img src="./shot.png" className='mr-3' alt="" /> : '' }
              {props.budget}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RDColumn;