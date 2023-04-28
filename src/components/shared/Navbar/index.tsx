import Image from 'next/image';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgProfile } from 'react-icons/cg';
import { IconContext } from 'react-icons';
import { useState } from 'react';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import titanIcon from '@/../public/images/titanIcon.png';

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [accountDropdownVisible, setAccountDropdownVisible] = useState(false);

  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <nav
      className={`${
        menuVisible && 'h-screen fixed'
      } md:h-auto md:block z-20 w-full bg-primary`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <a href="#" className="flex items-center rounded-lg px-4 py-2">
          <Image
            src={titanIcon}
            className="h-8 w-7 mr-4"
            alt="Gunn Alumni Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Gunn Alumni
          </span>
        </a>
        <button
          className="inline-flex items-center p-2 ml-3 text-sm text-white hover:bg-gray-700/30 rounded-lg md:hidden"
          onClick={() => setMenuVisible((b) => !b)}
        >
          <IconContext.Provider value={{ size: '30' }}>
            <GiHamburgerMenu />
          </IconContext.Provider>
        </button>

        <div
          className={`${
            !menuVisible ? 'hidden' : 'relative'
          } w-full md:block md:w-auto`}
        >
          <ul className="flex flex-col font-medium p-4 space-y-4 md:space-y-0 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-2 md:mt-0 md:border-0">
            {session === null ? (
              <>
                <div className="md:order-2 md:ml-64">
                  <a
                    className="block px-4 py-2 text-center outline md:outline-none text-white text-xl font-bold md:text-base md:font-normal rounded-lg hover:bg-gray-700/30 md:bg-transparent"
                    href={'/login'}
                  >
                    Login
                  </a>
                </div>
                <div className="md:order-2">
                  <a
                    className="block px-4 py-2 text-center text-white text-xl font-bold md:text-base md:font-normal rounded-lg hover:bg-gray-700/30  bg-black md:hover:outline-white md:hover:outline md:hover:outline-2"
                    href={'/signup'}
                  >
                    Sign Up
                  </a>
                </div>
              </>
            ) : (
              <>
                <div className="hidden md:block order-2 ml-64">
                  <button>
                    <CgProfile color="white" size={40} />
                  </button>
                  <div className="z-20 mt-2 -translate-x-1/2 block absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                    <div className="px-4 py-3 text-sm text-gray-900">
                      <div className="font-medium ">Name User</div>
                      <div className="truncate">name@gmail.com</div>
                    </div>
                    <ul className="py-2 text-sm text-gray-700">
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 hover:text-white"
                        >
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 hover:text-white"
                        >
                          Settings
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 hover:text-white"
                        >
                          Earnings
                        </a>
                      </li>
                    </ul>
                    <div className="py-2">
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100  hover:text-white"
                      >
                        Sign out
                      </a>
                    </div>
                  </div>
                </div>
                <button
                  className="px-4 py-2 text-white outline rounded-lg text-xl font-bold md:hidden"
                  onClick={() => supabase.auth.signOut()}
                >
                  Logout
                </button>
              </>
            )}
            <hr />
            {[
              { title: 'Team', to: '/team' },
              { title: 'Classmates', to: '/classmates' },
              { title: 'News', to: '/news' },
              { title: 'Donate', to: '/donate' }
            ].map(({ title, to }) => (
              <a
                key={title}
                href={to}
                className="block px-4 py-2 text-white text-4xl font-bold md:text-base md:font-normal rounded-lg hover:bg-gray-700/30 md:bg-transparent"
              >
                {title}
              </a>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
