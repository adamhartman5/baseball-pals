import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineHome } from 'react-icons/ai';
import { CiBaseball } from 'react-icons/ci';
import { GiBaseballBat, GiBaseballGlove} from 'react-icons/gi';

const sidebar = () => {

  // const menuItems = [
  //   {
  //     href: '/',
  //     title: 'Home',
  //     icon: 'AiOutlineHome',
  //   },
  //   {
  //     href: '/about',
  //     title: 'about',
  //     icon: 'CiBaseball',
  //   },
  //   {
  //     href: '/predictiongames',
  //     title: 'Prediction Games',
  //     icon: 'GiBaseballGlove',
  //   },
  // ];

  return (
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-white dark:bg-gray-900 shadow-lg">
     
    </div>
  );
};

const SidebarIcon = ({ icon, title, link}) => {
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">
      {title}
    </span>
  </div>
}

export default sidebar;