import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineHome } from 'react-icons/ai';
import { CiBaseball } from 'react-icons/ci';
import { GiBaseballBat, GiBaseballGlove} from 'react-icons/gi';

const sidebar = () => {
  const router = useRouter();

  const menuItems = [
    {
      href: '/',
      title: 'Home',
      icon: 'AiOutlineHome',
    },
    {
      href: '/about',
      title: 'about',
      icon: 'CiBaseball',
    },
    {
      href: '/predictiongames',
      title: 'Prediction Games',
      icon: 'GiBaseballGlove',
    },
  ];

  return (
    <div className="flex flex-col md:flex-row flex-1">
      <aside className="bg-green-200 w-full md:w-60">
        <nav>
          <ul>
            {menuItems.map(({ href, title, icon }) => (
              <li className="m-2" key={title}>
                <Link legacyBehavior href={href}>
                  <a className={`flex p-2 bg-green-300 rounded hover:bg-green-500 cursor-pointer ${router.asPath === href && 'bg-green-700 text-white'}`}>
                    {icon}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
};

const SidebarIcon = ({ icon, text = })

export default sidebar;