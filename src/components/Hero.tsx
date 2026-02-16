import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToWork = () => {
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-6">
      <div className="max-w-6xl w-full">
        <div className="space-y-8">
          <div className="overflow-hidden">
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-light tracking-tight animate-fade-in-up">
              Art Director
            </h1>
          </div>
          <div className="overflow-hidden">
            <h2 className="text-7xl md:text-8xl lg:text-9xl font-light tracking-tight text-gray-400 animate-fade-in-up animation-delay-200">
              Visual Storyteller
            </h2>
          </div>

          <div className="pt-8 max-w-2xl space-y-4 animate-fade-in-up animation-delay-400">
            <p className="text-sm tracking-[0.3em] text-amber-500 font-light">
              MOTAVISUAL
            </p>
            <p className="text-xl md:text-2xl font-light text-gray-300 leading-relaxed">
              Crafting impactful visual experiences for some of the world's most influential brands and artists — from global campaigns to culture-defining moments.
            </p>
          </div>

          <div className="flex gap-4 pt-4 animate-fade-in-up animation-delay-600">
            <div className="px-4 py-2 border border-amber-500/30 text-amber-500 text-sm tracking-widest">
              GRAPHIC DESIGN
            </div>
            <div className="px-4 py-2 border border-amber-500/30 text-amber-500 text-sm tracking-widest">
              DIGITAL CAMPAIGNS
            </div>
            <div className="px-4 py-2 border border-amber-500/30 text-amber-500 text-sm tracking-widest">
              EXPERIENTIAL MARKETING
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToWork}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce-slow"
        aria-label="Scroll to work"
      >
        <ArrowDown className="w-8 h-8 text-amber-500" />
      </button>
    </section>
  );
}
