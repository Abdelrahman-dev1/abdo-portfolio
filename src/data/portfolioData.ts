export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  type: 'image' | 'video';
  url: string;
  thumbnail?: string;
  description: string;
}

export const portfolioData = {
  hero: {
    greeting: "Assalamu Alaikum, I am",
    name: "Abdo Ashraf",
    title: "Quran, Arabic & Islamic Tutor for Non-Native Speakers",
    description: "Al-Azhar University Graduate, holder of Ijazah in Hafs 'an Asim. Specializing in teaching Quran, Tajweed, and Arabic to children in English with engaging, interactive methods.",
    // avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop", // 💡 استبدل الرابط برابط صورتك أو حط صورتك في مجلد public وحط مسارها هنا مثل "/my-photo.jpg"
    avatar: "/me1.jpg",
    primaryAction: "Explore Gallery",
    secondaryAction: "Contact Me",
  },
  gallery: [
    {
      id: "1",
      title: "Interactive Lesson Sample 1",
      category: "YouTube Video Demo",
      type: "video",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      thumbnail: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1000&auto=format&fit=crop",
      description: "A recorded snippet showing how we engage young students with visual aids and proper pronunciation techniques."
    },
    {
      id: "2",
      title: "Interactive Lesson Sample 2",
      category: "YouTube Video Demo",
      type: "video",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      thumbnail: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop",
      description: "Demonstrating fun activities and gamified rewards used during Quran and Arabic sessions."
    },
    {
      id: "3",
      title: "Fun Learning Environment",
      category: "Teaching Approach",
      type: "image",
      url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1000&auto=format&fit=crop",
      description: "Creating a vibrant, immersive, and encouraging atmosphere for non-native kids."
    },
  ] as GalleryItem[],
  whyMe: [
    {
      title: "Multi-Sensory Learning",
      description: "We engage children through all senses—writing, listening, visual stimulation, and correct pronunciation to ensure zero boredom.",
      icon: "Code"
    },
    {
      title: "Al-Azhar Certified & Expert",
      description: "Graduated from Al-Azhar University with an authenticated Ijazah in Hafs 'an Asim, delivering authentic Islamic and Arabic education.",
      icon: "Palette"
    },
    {
      title: "Gamified & Engaging Sessions",
      description: "Using interactive activities, diverse questions, and mini-games designed specifically to make kids love learning and progress effortlessly.",
      icon: "Zap"
    }
  ],
  contact: {
    title: "Start Your Child's Journey Today",
    subtitle: "Ready to make learning Quran and Arabic an enjoyable experience? Get in touch with me now.",
    email: "abdo.ashraf.work1@gmail.com",
    whatsapp: "+201016605189"
  }
};
