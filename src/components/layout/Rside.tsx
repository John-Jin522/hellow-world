import RUColumn from "../common/RUColumn";
import RDColumn from "../common/RDColumn";
import { ruData, rdData } from "../../types/type";

const dataUp : ruData[] = [
  {
    userImg: './user1.png',
    userName: '@JOHN.DOE',
    musicStatus: false
  },
  {
    userImg: './user1.png',
    userName: '@JOHN.DOE',
    musicStatus: true
  },
  {
    userImg: './user1.png',
    userName: '@JOHN.DOE',
    musicStatus: false
  },
  {
    userImg: './user1.png',
    userName: '@JOHN.DOE',
    musicStatus: false
  },
  {
    userImg: './user1.png',
    userName: '@JOHN.DOE',
    musicStatus: false
  }
]

const dataDown : rdData[] = [
  {
    eventImg: './rd3.png',
    content1: 'NIKE PENTHOUSE PARTY',
    content2: 'MANCHASTER, UNITED KINGDOM',
    content3: 'GAIN',
    btn: 'LANCH',
    shotImg: './shot.png',
    budget: '50K'
  },
  {
    eventImg: './rd1.png',
    content1: 'TWITCH VR PARTY',
    content2: 'VIRTUAL',
    content3: 'REQUIRED',
    btn: 'GAVEAWAY',
    shotImg: './shot.png',
    budget: '5K'
  },
  {
    eventImg: './rd2.png',
    content1: 'RSVP MANSION PARTY',
    content2: 'MANCHASTER, UNITED KINGDOM',
    content3: 'COST',
    btn: '',
    shotImg: '',
    budget: '&100'
  },
]

const Rside = () => {

  return (
    <div className='2xl:w-[452px]'>
      <div className="border border-[#333333]">
        <div className="border-b border-b-[#333333] p-[16px] text-center">
          <span className='font-[500] text-[24px] text-[#E5E5E5] leading-[28.64px]'>
            MATCH
          </span>
        </div>
        {dataUp.map((itemData, index) => (
          <RUColumn {...itemData} key={index} />
        ))}
      </div>

      <div className="border border-[#333333] mt-[22px]">
        <div className="border-b border-b-[#333333]">
          <div className="flex items-center p-[16px] justify-center">
            <div className="block mx-[16px]">
              <span className='font-[500] text-[24px] text-[#E5E5E5] leading-[28.64px]'>
                EVENTS
              </span>
            </div>
          </div>
        </div>
        {dataDown.map((itemData, index) => (
          <RDColumn {...itemData} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Rside;