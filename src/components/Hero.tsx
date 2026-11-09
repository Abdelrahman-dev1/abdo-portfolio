'use client';

import { portfolioData } from '@/data/portfolioData';
import { ArrowRight, BookOpen, Flame } from 'lucide-react';

export default function Hero() {
  const { hero } = portfolioData;

  return (
    <section
      id='hero'
      className='relative min-h-screen flex items-center justify-center pt-32 pb-16 overflow-hidden'
    >
      {/* Background Rich Lighting */}
      <div className='absolute top-1/4 left-1/3 -translate-x-1/2 w-[500px] h-[350px] bg-blue-700/10 rounded-full blur-[140px] pointer-events-none animate-pulse-slow'></div>
      <div className='absolute bottom-1/4 right-1/3 w-[450px] h-[300px] bg-rose-600/10 rounded-full blur-[150px] pointer-events-none'></div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16'>
          {/* Main Text Content */}
          <div className='flex-1 text-center lg:text-left flex flex-col items-center lg:items-start'>
            {/* Badge (تم تغيير الأيقونة بالكامل إلى BookOpen أكاديمية بحتة) */}
            <div className='inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gray-900 border border-blue-500/40 text-blue-400 text-xs sm:text-sm mb-6 shadow-lg shadow-blue-950/50 animate-pulse-slow'>
              <BookOpen className='w-4 h-4 text-emerald-400' />
              <span>{hero.greeting}</span>
            </div>

            {/* Name & Title */}
            <h1 className='text-4xl sm:text-5xl lg:text-7xl font-black text-white tracking-tight mb-4 drop-shadow-md'>
              {hero.name}
            </h1>
            <p className='text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-rose-400 mb-6 max-w-xl'>
              {hero.title}
            </p>

            {/* Description */}
            <p className='text-base sm:text-lg text-gray-300 mb-8 max-w-xl leading-relaxed'>
              {hero.description}
            </p>

            {/* Action Buttons */}
            <div className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 w-full sm:w-auto'>
              <a
                href='#gallery'
                className='w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-bold text-base shadow-xl shadow-emerald-900/60 hover:scale-110 hover:shadow-2xl hover:shadow-emerald-600/80 active:scale-95 transition-all duration-300 group'
              >
                <span>{hero.primaryAction}</span>
                <ArrowRight className='w-5 h-5 group-hover:translate-x-2 transition-transform duration-300' />
              </a>

              <a
                href='#contact'
                className='w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gray-900 border-2 border-rose-600/60 text-white font-bold text-base shadow-xl shadow-rose-950/40 hover:bg-rose-600 hover:border-rose-500 hover:scale-110 active:scale-95 transition-all duration-300'
              >
                <Flame className='w-5 h-5 text-rose-400' />
                <span>{hero.secondaryAction}</span>
              </a>
            </div>
          </div>

          {/* Floating Image Container */}
          <div className='flex-shrink-0 relative group animate-float'>
            <div className='absolute -inset-2 rounded-3xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-rose-600 blur-2xl opacity-70 group-hover:opacity-100 transition duration-700'></div>

            <div className='relative w-72 h-72 sm:w-85 sm:h-85 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-4 border-gray-800 group-hover:border-blue-500 bg-gray-950 shadow-2xl group-hover:scale-105 transition-all duration-500'>
              <img
                src='/meq.jpg'
                alt='Abdo Ashraf'
                className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
