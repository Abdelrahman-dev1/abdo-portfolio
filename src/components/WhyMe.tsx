'use client';

import { portfolioData } from '@/data/portfolioData';
import { BookOpen, Award, Star } from 'lucide-react';

export default function WhyMe() {
  const { whyMe } = portfolioData;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return (
          <BookOpen className='w-7 h-7 text-emerald-400 group-hover:rotate-12 transition-transform duration-300' />
        );
      case 'Palette':
        return (
          <Award className='w-7 h-7 text-blue-400 group-hover:scale-125 transition-transform duration-300' />
        );
      case 'Zap':
        return (
          <Star className='w-7 h-7 text-rose-400 group-hover:rotate-45 transition-transform duration-300' />
        );
      default:
        return <BookOpen className='w-7 h-7 text-emerald-400' />;
    }
  };

  return (
    <section
      id='whyme'
      className='py-24 bg-[#050814] relative border-y border-gray-800'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <h2 className='text-3xl sm:text-5xl font-black text-white tracking-tight mb-4'>
            Why <span className='text-emerald-400'>Choose Me?</span>
          </h2>
          <p className='text-gray-400 text-base sm:text-lg'>
            Specialized methods and robust standards designed for maximum
            student progress and engagement
          </p>
        </div>

        {/* Cards with heavy interactive hover animations */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {whyMe.map((item, index) => (
            <div
              key={index}
              className='p-8 bg-gray-900/90 border-2 border-gray-800 rounded-3xl hover:border-blue-500 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl hover:shadow-blue-600/30 transition-all duration-300 flex flex-col items-start group cursor-pointer'
            >
              <div className='p-4 rounded-2xl bg-gray-950 border border-gray-800 mb-6 group-hover:bg-blue-950/40 group-hover:border-blue-500/50 transition-all duration-300 shadow-inner'>
                {getIcon(item.icon)}
              </div>
              <h3 className='text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300'>
                {item.title}
              </h3>
              <p className='text-gray-300 text-sm leading-relaxed'>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
