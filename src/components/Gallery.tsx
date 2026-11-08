'use client';

import { portfolioData } from '@/data/portfolioData';
import { ExternalLink, Play, Image as ImageIcon } from 'lucide-react';

export default function Gallery() {
  const { gallery } = portfolioData;

  return (
    <section id='gallery' className='py-24 relative bg-[#030712]'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <h2 className='text-3xl sm:text-5xl font-black text-white tracking-tight mb-4'>
            Works <span className='text-blue-400'>& Lesson Gallery</span>
          </h2>
          <p className='text-gray-400 text-base sm:text-lg'>
            Explore sample lessons, video demonstrations, and interactive
            teaching assets
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {gallery.map((item) => (
            <div
              key={item.id}
              className='group relative bg-gray-900 border-2 border-gray-800 rounded-3xl overflow-hidden hover:border-emerald-500 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-900/40 transition-all duration-300 flex flex-col'
            >
              <div className='relative h-56 w-full overflow-hidden bg-gray-950'>
                <img
                  src={
                    item.type === 'video' && item.thumbnail
                      ? item.thumbnail
                      : item.url
                  }
                  alt={item.title}
                  className='w-full h-full object-cover group-hover:scale-115 transition-transform duration-700'
                />

                <div className='absolute top-3 right-3 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md text-xs text-white border border-gray-700 flex items-center gap-1.5 shadow-lg'>
                  {item.type === 'video' ? (
                    <>
                      <Play className='w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse' />
                      <span>YouTube Video</span>
                    </>
                  ) : (
                    <>
                      <ImageIcon className='w-3.5 h-3.5 text-blue-400' />
                      <span>Image</span>
                    </>
                  )}
                </div>

                {item.type === 'video' && (
                  <a
                    href={item.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='absolute inset-0 bg-black/50 flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity'
                  >
                    <div className='w-16 h-16 rounded-full bg-rose-600 text-white flex items-center justify-center pl-1 shadow-2xl group-hover:scale-125 group-hover:bg-rose-500 transition-all duration-300'>
                      <Play className='w-7 h-7 fill-white' />
                    </div>
                  </a>
                )}
              </div>

              <div className='p-6 flex flex-col flex-grow'>
                <div className='text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2'>
                  {item.category}
                </div>
                <h3 className='text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors'>
                  {item.title}
                </h3>
                <p className='text-sm text-gray-300 mb-6 flex-grow leading-relaxed'>
                  {item.description}
                </p>

                <div>
                  <a
                    href={item.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors group-hover:translate-x-2 transform duration-300'
                  >
                    <span>
                      {item.type === 'video'
                        ? 'Watch on YouTube'
                        : 'View Image'}
                    </span>
                    <ExternalLink className='w-4 h-4' />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
