import LUColumn from '../common/LUColumn';
import LDColumn from '../common/LDColumn';
import { luData, ldData } from '../../types/type';

const dataUp : luData[] = [
  {
    userImg: './user1.png',
    userName: '@JOHN.DOE',
    techStatus: true,
    budget: 77.8
  },
  {
    userImg: './user2.png',
    userName: '@SPOWN.WORLD',
    techStatus: false,
    budget: 74.3
  },
  {
    userImg: './user1.png',
    userName: '@JOHN.DOE',
    techStatus: true,
    budget: 77.8
  },
  {
    userImg: './user1.png',
    userName: '@JOHN.DOE',
    techStatus: true,
    budget: 77.8
  },
  {
    userImg: './user1.png',
    userName: '@JOHN.DOE',
    techStatus: true,
    budget: 77.8
  }
]

const dataDown : ldData[] = [
  {
    kind: 'GAMMING',
    imgURL: [
      './t1.png',
      './t2.png',
      './t3.png'
    ],
    budget: 121.1
  },
  {
    kind: 'TECH',
    imgURL: [
      './t1.png',
      './t2.png',
      './t3.png'
    ],
    budget: 78.3
  },
  {
    kind: 'BEAUTY',
    imgURL: [
      './t1.png',
      './t2.png',
      './t3.png'
    ],
    budget: 76.6
  },
  {
    kind: 'FOOD',
    imgURL: [
      './t1.png',
      './t2.png',
      './t3.png'
    ],
    budget: 43.5
  },
  {
    kind: 'MUSIC',
    imgURL: [
      './t1.png',
      './t2.png',
      './t3.png'
    ],
    budget: 32.1
  }
];

const Lside = () => {

  return (
    <div className='2xl:w-[452px] mb-5'>
      <div className="border border-[#333333] w-full">
        <div className="flex items-center p-4">
          <div className="pl-[11px]">
            <img 
              src="./bighot.png" 
              className='w-9 h-9'
              alt="" 
            />
          </div>
          <div className="block mx-[16px]">
            <span className='font-[500] text-[24px] text-[#EBCF83] leading-[28.64px]'>
              WHO'S LITTY
            </span>
          </div>
        </div>
      </div>
      {dataUp.map((itemData, index) => (
        <LUColumn {...itemData} key={index} />
      ))}

      <div className="border border-[#333333] mt-[22px]">
        <div className="flex items-center p-[16px] justify-center">
          <div className="block mx-[16px]">
            <span className='font-[500] text-[24px] text-[#E5E5E5] leading-[28.64px]'>
              TRENDS
            </span>
          </div>
        </div>
      </div>
      {dataDown.map((itemData, index) => (
        <LDColumn {...itemData} key={index} />
      ))}
    </div>
  );
}

export default Lside;