import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <div className='flex'>
      
      <div className="md:w-[22%] w-[32%]">
      <Header></Header>
      </div>
      
      <div className="md:w-[78%] w-[68%]">
      <Outlet></Outlet>
      {/* <Footer></Footer> */}
      </div>
      
    </div>
  );
};

export default Root;