const Center = () => {
  return (
    <div className="xl:px-4 2xl:w-[920px] xl:w-[600px] mb-3">
      <div className="relative">
        <img src="./Frame 8.png" className="" alt="" />
        <img src="./Ellipse 8.png" className="absolute w-[13.913%] bottom-[-25%] left-[6.96%] max-[1250px]:hidden" alt="" />
      </div>
      <div className="flex mt-4 justify-between min-[1250px]:pl-[22.6%]">
        <div className="flex w-[206px]">
          <div className="grid">
            <span className="font-[700] text-[24px] text-[#ffffff]">Spawn World</span>
            <span className="font-[700] text-[18px] text-[#EBCF83] leading-[21.48px]">@spawn.world</span>
          </div>
          <img src="./cil_cog.png" className="w-9 h-9 ml-4 sm:block hidden" alt="" />
        </div>
        <div className="flex items-center justify-between max-[1500px]:w-[101px]">
          <div className="flex max-[1500px]:block">
            <button className="font-[700] text-[12px] text-[#1A1A1A] leading-[14.32px] bg-[#EBCF83] rounded-[8px] w-[101px] px-6 text-center h-[26px] outline-none max-[1500px]:mb-1">
              MESSAGE
            </button>
            <button className="font-[700] text-[12px] text-[#1A1A1A] leading-[14.32px] bg-[#EBCF83] rounded-[8px] w-[101px] px-6 text-center h-[26px] outline-none min-[1500px]:ml-4">
              FOLLOW
            </button>
          </div>
          <img src="./Vector.png" className="w-[21px] h-[3.5px] max-[1500px]:hidden" alt="" />
        </div>
      </div>
      <div className="min-[1475px]:pl-[23%] text-center uppercase text-[18px] font-[400] leading-[21.48px] mt-6 mb-4 max-[1730px]:text-[14px]">
        <p>Creating a new MMORPG which features fast paced action combat</p>
        <p className="mb-3">And a world that evolves around the player base <span className="text-[#EBCF83]"> #Spawn</span></p>
        <span className="text-[#EBCF83]">SPAWN.WORLD</span>
      </div>
      <div className="px-[10.43%] max-[1660px]:text-center font-[700] xl:text-[14px] 2xl:text-[18px] text-[12px] leading-[21.48px] border-b-[#EBCF8380] border-b">
        <div className="justify-between flex items-center">
          <div className="min-[1660px]:w-40 py-4">60 POSTS</div>
          <div className="min-[1660px]:w-40 py-4">5 PRODUCTS</div>
          <div className="min-[1660px]:w-40 py-4">12.2K FOLLOWERS</div>
          <div className="sm:flex hidden items-center min-[1660px]:pl-8">
            <img src="./nav-hot 3.png" alt="" />
            <span className="text-[#EBCF83] pl-4">74.3K</span>
          </div>
        </div>
        <div className="justify-between flex text-center text-[#EBCF83]">
          <div className="w-40 py-4 border-b-[3px] border-b-[#EBCF83]">POSTS</div>
          <div className="w-40 py-4">SHOP</div>
          <div className="w-40 py-4">SUBSCRIBE</div>
          <div className="w-40 py-4">COLLABORATE</div>
        </div>
      </div>
      <div className="flex bg-[#1D1D1D] border border-[#333333] md:px-8 sm:px-4 px-1 text-[#EBCF83] md:my-4 my-1 md:py-4 py-2 overflow-scroll">
        <div className="px-1 2xl:px-4 text-center">
          <img src="./e1.png" alt="" />
          <span className="font-[400] text-[11px] md:block hidden">GAMEPLAY</span>
        </div>
        <div className="px-1 2xl:px-4 text-center">
          <img src="./e2.png" alt="" />
          <span className="font-[400] text-[11px] md:block hidden">PROMO</span>
        </div>
        <div className="px-1 2xl:px-4 text-center">
          <img src="./e3.png" alt="" />
          <span className="font-[400] text-[11px] md:block hidden">CHARACTERS</span>
        </div>
        <div className="px-1 2xl:px-4 text-center">
          <img src="./e4.png" alt="" />
          <span className="font-[400] text-[11px] md:block hidden">ENVIRONMENTS</span>
        </div>
        <div className="px-1 2xl:px-4 text-center">
          <img src="./e4.png" alt="" />
          <span className="font-[400] text-[11px] md:block hidden">CONCEPTS</span>
        </div>
      </div>
      <div className="flex">
        <div className="grid-cols-4">
          <img src="./Frame 73.png" alt="" />
        </div>
        <div className="grid-cols-4 mx-8">
          <img src="./Frame 74.png" alt="" />
        </div>
        <div className="grid-cols-4">
          <img src="./Frame 75.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Center;
