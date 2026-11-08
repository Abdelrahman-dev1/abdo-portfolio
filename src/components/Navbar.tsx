'use client';

import { useState } from 'react';
import { Menu, X, BookOpen, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='fixed top-0 left-0 w-full z-50 bg-[#030712]/90 backdrop-blur-md border-b border-gray-800/80 transition-all duration-300 shadow-2xl'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-20'>
          {/* Logo with interactive hover */}
          <a
            href='#'
            className='flex items-center gap-3 text-lg font-bold tracking-wide text-white group'
          >
            <span className='p-2.5 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-900 text-white shadow-lg shadow-blue-900/50 group-hover:scale-125 group-hover:rotate-6 transition-all duration-300'>
              <BookOpen className='w-5 h-5' />
            </span>
            <span className='group-hover:text-blue-400 transition-colors'>
              ABDO <span className='text-emerald-400 font-normal'>ASHRAF</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className='hidden md:flex items-center gap-8 text-sm font-medium text-gray-300'>
            <a
              href='#hero'
              className='hover:text-emerald-400 hover:scale-110 transition-all duration-200'
            >
              Home
            </a>
            <a
              href='#gallery'
              className='hover:text-blue-400 hover:scale-110 transition-all duration-200'
            >
              Gallery
            </a>
            <a
              href='#whyme'
              className='hover:text-rose-400 hover:scale-110 transition-all duration-200'
            >
              Philosophy
            </a>
            <a
              href='#contact'
              className='hover:text-amber-400 hover:scale-110 transition-all duration-200'
            >
              Contact
            </a>
          </div>

          {/* CTA Button with active scaling */}
          <div className='hidden md:block'>
            <a
              href='#contact'
              className='px-6 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-rose-600 rounded-xl shadow-lg shadow-indigo-900/50 hover:scale-110 hover:shadow-rose-900/80 active:scale-95 transition-all duration-300 inline-block'
            >
              Book a Trial
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden flex items-center'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='text-gray-300 hover:text-white p-2 rounded-lg bg-gray-900 border border-gray-800'
            >
              {isOpen ? (
                <X className='w-6 h-6' />
              ) : (
                <Menu className='w-6 h-6' />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className='md:hidden bg-[#030712] border-b border-gray-800 px-6 py-5 space-y-3'>
          <a
            href='#hero'
            onClick={() => setIsOpen(false)}
            className='block py-2 text-gray-300 hover:text-emerald-400 font-medium'
          >
            Home
          </a>
          <a
            href='#gallery'
            onClick={() => setIsOpen(false)}
            className='block py-2 text-gray-300 hover:text-blue-400 font-medium'
          >
            Gallery
          </a>
          <a
            href='#whyme'
            onClick={() => setIsOpen(false)}
            className='block py-2 text-gray-300 hover:text-rose-400 font-medium'
          >
            Philosophy
          </a>
          <a
            href='#contact'
            onClick={() => setIsOpen(false)}
            className='block py-2 text-gray-300 hover:text-amber-400 font-medium'
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
