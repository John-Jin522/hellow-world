import Lside from './Lside';
import Center from './Center';
import Rside from './Rside';

const Layout = () => {
  return (
    <div className='xl:flex pt-[16px] justify-center px-8 pb-8'>
      <Lside />
      <Center />
      <Rside />
    </div>
  );
}

export default Layout;