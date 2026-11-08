'use client';

import { useState } from 'react';
import { portfolioData } from '@/data/portfolioData';
import { Mail, MessageSquare, Send, Check, Copy, Flame } from 'lucide-react';

export default function Contact() {
  const { contact } = portfolioData;
  const [copied, setCopied] = useState(false);

  // الرسالة الجاهزة للواتساب
  const whatsappMessage = encodeURIComponent(
    'Assalamu Alaikum! I would like to inquire about the packages and subscription details for non-native Arabic & Quran lessons.',
  );

  // الرسالة الجاهزة للإيميل (Gmail Pre-filled Subject & Body)
  const emailSubject = encodeURIComponent(
    'Inquiry Regarding Quran & Arabic Lessons',
  );
  const emailBody = encodeURIComponent(
    'Assalamu Alaikum Teacher Abdo,\n\nI am interested in booking lessons for my child. Could you please share the subscription packages and available schedules?\n\nThank you!',
  );

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id='contact' className='py-24 relative bg-[#050814]'>
      <div className='max-w-4xl mx-auto px-4 relative z-10'>
        <div className='p-8 sm:p-12 bg-gray-900 border-2 border-gray-800 rounded-3xl shadow-2xl text-center hover:border-emerald-500/50 transition-all duration-500 relative overflow-hidden group'>
          {/* Background Ambient Glow */}
          <div className='absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none group-hover:scale-150 transition-transform duration-700'></div>

          <div className='inline-flex p-4 rounded-2xl bg-emerald-950 text-emerald-400 border border-emerald-800/50 mb-6 shadow-lg shadow-emerald-950/80 animate-pulse-slow'>
            <Send className='w-7 h-7' />
          </div>

          <h2 className='text-3xl sm:text-5xl font-black text-white tracking-tight mb-4'>
            {contact.title}
          </h2>
          <p className='text-gray-300 text-base sm:text-lg max-w-xl mx-auto mb-10'>
            {contact.subtitle}
          </p>

          {/* Action Buttons with High-intensity Hover & Animation */}
          <div className='flex flex-col sm:flex-row items-center justify-center gap-5'>
            {/* WhatsApp Button */}
            <a
              href={`https://wa.me/201016605189?text=${whatsappMessage}`}
              target='_blank'
              rel='noopener noreferrer'
              className='w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-bold text-base shadow-xl shadow-emerald-900/60 hover:scale-110 hover:shadow-2xl hover:shadow-emerald-500/80 active:scale-95 transition-all duration-300'
            >
              <MessageSquare className='w-5 h-5 animate-bounce' />
              <span>Chat on WhatsApp</span>
            </a>

            {/* Gmail Button with Pre-filled Message */}
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}&su=${emailSubject}&body=${emailBody}`}
              target='_blank'
              rel='noopener noreferrer'
              className='w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold text-base shadow-xl shadow-blue-900/60 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/80 active:scale-95 transition-all duration-300'
            >
              <Mail className='w-5 h-5 animate-pulse' />
              <span>Send Email (Preset)</span>
            </a>

            {/* Copy Email Button */}
            <button
              onClick={handleCopyEmail}
              className='w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-gray-950 border-2 border-rose-600/60 text-white font-bold text-base shadow-xl shadow-rose-950/50 hover:bg-rose-600 hover:scale-110 active:scale-95 transition-all duration-300'
              title='Copy email address'
            >
              {copied ? (
                <>
                  <Check className='w-5 h-5 text-emerald-400' />
                  <span className='text-emerald-400'>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className='w-5 h-5 text-rose-400 group-hover:text-white' />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>

          <div className='mt-8 text-xs text-gray-400 font-mono tracking-wider bg-gray-950 py-2 px-4 rounded-xl inline-block border border-gray-800'>
            {contact.email}
          </div>
        </div>
      </div>
    </section>
  );
}
