'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='py-8 border-t border-gray-800 bg-[#030712] text-center text-sm text-gray-400'>
      <div className='max-w-7xl mx-auto px-4'>
        <p>
          Designed & Developed with excellence by{' '}
          <span className='text-emerald-400 font-bold'>Abdo Ashraf</span> ©{' '}
          {currentYear}
        </p>
      </div>
    </footer>
  );
}
