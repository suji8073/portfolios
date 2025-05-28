import React from 'react';
import {
  FaGithubSquare,
  FaBlogger,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUserCircle,
  FaCode,
  FaUserGraduate,
  FaBriefcase,
} from 'react-icons/fa';
import logo from '../../asset/logo.png';

interface MenuItem {
  id: string;
  icon: JSX.Element;
  label: string;
}

interface SocialLink {
  href: string;
  icon: JSX.Element;
  label: string;
}

const menuItems: MenuItem[] = [
  {
    id: 'profile',
    icon: <FaUserCircle size={16} />,
    label: 'Profile',
  },
  { id: 'career', icon: <FaBriefcase size={16} />, label: 'Career' },
  {
    id: 'background',
    icon: <FaUserGraduate size={16} />,
    label: 'Background',
  },
  {
    id: 'project',
    icon: <FaCode size={16} />,
    label: 'Projects',
  },
];

const socialLinks: SocialLink[] = [
  {
    href: 'https://github.com/suji8073/',
    icon: <FaGithubSquare size={20} />,
    label: 'GitHub',
  },
  {
    href: 'https://suji-sw.tistory.com/',
    icon: <FaBlogger size={20} />,
    label: 'Blog',
  },
  {
    href: 'mailto:suzy8073@naver.com',
    icon: <FaEnvelope size={20} />,
    label: 'Email',
  },
];

export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const headerOffset = 60;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};

const Navigation: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <nav className='sticky top-8 w-full space-y-6'>
      <div className='rounded-2xl bg-white px-2 py-3 shadow-sm ring-1 ring-gray-100'>
        {/* 프로필 헤더 */}
        <div className='px-2 py-4'>
          <div
            className='group flex items-center gap-3 border-b border-gray-100 pb-5'
            onClick={scrollToTop}
          >
            <div className='relative'>
              <img
                src={logo}
                alt='Logo'
                className='h-12 w-12 cursor-pointer rounded-xl object-contain transition-all hover:scale-105'
              />
              <div className='absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-green-400'></div>
            </div>
            <div className='flex flex-col'>
              <span className='mb-1 text-base font-bold text-gray-800'>
                채수지 ʕ·͡ᴥ·ʔ
              </span>
              <span className='text-sm font-medium text-blue-900'>
                Frontend Developer
              </span>
            </div>
          </div>
        </div>

        <div className='px-2 pb-4'>
          {/* 네비게이션 메뉴 */}
          <div className='space-y-1'>
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className='group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all hover:bg-gray-50'
              >
                <span className='flex h-8 w-8 items-center justify-center text-gray-600 transition-all group-hover:text-blue-600'>
                  {item.icon}
                </span>
                <span className='font-medium text-gray-700 transition-all group-hover:text-blue-600'>
                  {item.label}
                </span>
              </button>
            ))}
          </div>

          {/* 위치 정보 */}
          <div className='mt-8 flex items-center justify-center'>
            <span className='flex items-center gap-1.5 px-3 py-1.5 text-xs text-gray-400'>
              <FaMapMarkerAlt size={12} />
              <span>Seoul, South Korea</span>
            </span>
          </div>

          {/* 소셜 링크 */}
          <div className='mt-4 flex justify-center space-x-3 border-t border-gray-100 pt-4'>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target='_blank'
                rel='noopener noreferrer'
                className='p-2 text-gray-600 transition-all hover:scale-105 hover:bg-blue-50 hover:text-blue-600'
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
