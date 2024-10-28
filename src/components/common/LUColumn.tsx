import { useState } from 'react';
import classnames from 'classnames';
import Navhot from '../../assets/navhot.svg';
import { luData } from '../../types/type';

const LUColumn = (props: luData) => {
  const [clicked, setClicked] = useState<boolean>(false);

  const onClick = () => {
    setClicked(!clicked);
  }

  return (
    <div
      className={
        classnames('border border-[#333333]', {
          'bg-[#EBCF8380]': clicked,
          'bg-[#1A1A1A]': !clicked
        })
      }
      onClick={onClick}
    >
      <div className="flex items-center justify-between p-[16px]">
        <div className="flex">
          <div className="px-3">
            <img 
              src={props.userImg} 
              className='w-[36px] h-[36px]' 
              alt="" 
            />
          </div>
          <div className="block mx-[16px]">
            <span className={
              classnames(
                'font-[400] sm:text-[14px] text-[10px] leading-[16.71px]', {
                  'text-[#EBCF83]': !clicked,
                  'text-[#FFFFFF]': clicked
                }
              )
            }>
              {props.userName}
            </span>
            <div className="flex font-[400] sm:text-[12px] text-[8px] text-[#ffffff] leading-[14.32px]">
              <span className='sm:w-16 w-12 text-center mr-[4px] bg-[#EBCF83] rounded-[8px]'>
                GAMMING
              </span>
              { 
                props.techStatus ? 
                <span className='sm:w-16 w-10 text-center bg-[#EBCF83] rounded-[8px]'>
                  TECH
                </span> : ''
              }
            </div>
          </div>
        </div>
        <div className={classnames(
          'flex items-center sm:text-[18px] text-[10px]', {
            'text-[#EBCF83]': !clicked,
            'text-[#FFFFFF]': clicked
          }
        )}>
          <span>{props.budget}K</span>
          <img src={Navhot} className='ml-[14.7px] sm:block hidden' alt="" />
        </div>
      </div>
    </div>
  );
}

export default LUColumn;