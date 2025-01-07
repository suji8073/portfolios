import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../asset/logo.png';

import '../../styles/Main.css';

const menuItems = [
  { name: 'Profile', path: '/profile' },
  { name: 'Project', path: '/project' },
  { name: 'Blog', url: 'https://suji-sw.tistory.com/' },
  { name: 'Github', url: 'https://github.com/suji8073/' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-10 w-full bg-white transition-shadow duration-300 ${
        isScrolled ? 'shadow-md' : ''
      }`}
    >
      <div className='flex h-full w-full items-center justify-between px-44'>
        <NavLink to='/' className='hover:opacity-80'>
          <img
            src={logo}
            alt='MySite Logo'
            className='h-16 w-auto sm:h-20 md:h-24'
          />
        </NavLink>

        <nav className='flex space-x-8 font-gmk text-gray-800'>
          {menuItems.map((item) =>
            item.url ? (
              <a
                key={item.name}
                href={item.url}
                target='_blank'
                rel='noopener noreferrer'
                className="relative after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-0 after:bg-blue-900 after:transition-all after:duration-300 after:content-[''] hover:after:w-full"
              >
                {item.name}
              </a>
            ) : (
              <NavLink
                key={item.name}
                to={item.path ?? '/'}
                className={({ isActive }) =>
                  `relative after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:content-[''] ${
                    isActive
                      ? 'after:w-full after:bg-blue-900'
                      : 'after:w-0 after:bg-blue-900 hover:after:w-full'
                  } after:transition-all after:duration-300`
                }
              >
                {item.name}
              </NavLink>
            )
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
