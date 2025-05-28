import React from 'react';
import { FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';
import SubTitle from '../common/SubTitle';
import { SectionItemProps } from '../../types/type';

interface IProps {
  id: string;
  title: string;
  items: SectionItemProps;
}

const BackgroundSection: React.FC<IProps> = ({ id, title, items }) => {
  return (
    <div id={id} className='w-full'>
      <SubTitle title={title} />

      <div className='rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-md'>
        <div className='divide-y divide-gray-100'>
          {items.map((item, index) => (
            <div
              key={index}
              className='group relative space-y-4 py-8 first:pt-0 last:pb-0'
            >
              {/* 상단 영역: 연도 및 제목 */}
              <div className='relative flex items-start justify-between gap-4'>
                <div className='flex items-center space-x-3'>
                  <div className='relative'>
                    <div className='absolute -inset-2 hidden rounded-full bg-blue-100/50 group-hover:block' />
                    <FaMapMarkerAlt
                      size={14}
                      className={`relative transition-colors group-hover:text-blue-500 ${
                        item.activate ? 'text-blue-500' : 'text-gray-300'
                      }`}
                    />
                  </div>
                  <span className='text-sm font-medium text-gray-900'>
                    {item.year}
                  </span>
                </div>
                {item.link && (
                  <a
                    href={item.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='relative flex items-center gap-1.5 rounded-full bg-gray-50 px-3.5 py-1.5 text-xs text-gray-600 transition-all hover:bg-blue-50 hover:text-blue-600 hover:shadow-sm group-hover:bg-blue-50'
                  >
                    <FaExternalLinkAlt size={10} />
                    <span className='hidden sm:inline'>바로가기</span>
                  </a>
                )}
              </div>

              {/* 제목 */}
              <h3 className='text-lg font-medium text-gray-900 group-hover:text-blue-600'>
                {item.name}
              </h3>

              {/* 상세 정보 */}
              <div className='space-y-3.5 text-sm text-gray-600'>
                {item.detail.map((detail, detailIndex) => {
                  if (
                    detail.match(
                      /^(주최|주관|내용|역할|소속|성과|학회|논문 제목|발표 주제|주요 프로젝트|활동 내용|자격):/
                    )
                  ) {
                    return (
                      <div key={detailIndex} className='space-y-2'>
                        <p className='font-medium text-gray-900'>{detail}</p>
                      </div>
                    );
                  }
                  // 불릿 포인트로 시작하는 상세 내용
                  else if (detail.startsWith('•')) {
                    return (
                      <p
                        key={detailIndex}
                        className='ml-4 flex items-start pl-3'
                      >
                        <span className='mr-2.5 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-300 group-hover:bg-blue-300' />
                        <span>{detail.substring(1).trim()}</span>
                      </p>
                    );
                  }
                  // 일반 텍스트
                  return (
                    <p key={detailIndex} className='pl-3'>
                      {detail}
                    </p>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BackgroundSection;
