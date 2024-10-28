import Logo from '../assets/logo.svg';
import Search from '../assets/search.svg';
import Post from '../assets/post.svg';
import Explore from '../assets/explore.svg';
import Mail from '../assets/mail.svg';
import Comment from '../assets/comment.svg';
import Ellipse from '../assets/ellipse.svg';


const Navbar = () => {
  return (
    <div className="bg-[#1d1d1d] border border-[#333333] py-[8px]">
      <div className="flex justify-between items-center px-[10%] 2xl:px-[28%] ">
        <div className='flex items-center'>
          <img src={Logo} className='mr-[16px]' alt="" />
          <label className="relative block">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-4">
              <img src={Search} className='h-5 w-5 fill-slate-300' alt="" />
            </span>
            <input 
              type="search" 
              placeholder='Search' 
              className="outline-none bg-inherit border border-[#333333] placeholder:text-[#EBCF83] pl-12 py-[6px] sm:w-auto w-52"
            />
          </label>
        </div>
        <div className="md:flex hidden h-[32px]">
          <img src={Post} className='mr-[16px]' alt="" />
          <img src={Explore} className='mr-[16px]' alt="" />
          <img src={Mail} className='mr-[16px]' alt="" />
          <img src={Comment} className='mr-[16px]' alt="" />
          <img src={Ellipse} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
