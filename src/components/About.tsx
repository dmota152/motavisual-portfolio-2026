import { Award, TrendingUp, Users, Zap } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Award, label: 'Years Experience', value: '20+' },
    { icon: Users, label: 'High-Profile Organizations', value: '30+' },
    { icon: TrendingUp, label: 'Successful Campaigns', value: '100+' },
    { icon: Zap, label: 'Viral Moments Created', value: '30+' },
  ];

  const clients = [
    'Major Music Labels',
    'Global Fashion Brands',
    'Political Organizations',
    'Fortune 500 Companies',
    'Entertainment Media',
    'Tech Startups',
  ];

  return (
    <section id="about" className="min-h-screen py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-6xl md:text-7xl font-light tracking-tight mb-8">
              About
            </h2>

            <div className="space-y-6 text-lg text-gray-300 font-light leading-relaxed">
              <p>
                A creative director specializing in turning bold ideas into cultural moments.
                With over two decades of experience working with some of the world's most influential
                artists and brands, I've honed the art of creating visuals that don't just look
                good—they make an impact.
              </p>

              <p>
                From creating graphics that become iconic to orchestrating digital campaigns and
                outdoor advertising that earns a second glance, my work lives at the intersection
                of art, commerce, and culture.
              </p>

              <p>
                My approach combines strategic thinking with uncompromising aesthetics. Every project is
                an opportunity to push boundaries and create something that resonates long after the first impression.
              </p>
            </div>

            <div className="mt-12">
              <h3 className="text-sm tracking-widest text-amber-500 mb-4">WORKED WITH</h3>
              <div className="grid grid-cols-2 gap-3">
                {clients.map((client, index) => (
                  <div
                    key={index}
                    className="py-3 px-4 border border-zinc-800 text-sm text-gray-400 hover:border-amber-500/30 hover:text-amber-500 transition-all duration-300"
                  >
                    {client}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="p-8 bg-zinc-950 border border-zinc-900 hover:border-amber-500/30 transition-all duration-500 group"
                  >
                    <Icon className="w-8 h-8 text-amber-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-4xl font-light mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-400 tracking-wide">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 p-8 bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/20">
              <blockquote className="text-xl font-light italic text-gray-300">
                "Design is not just what it looks like. Design is how it makes people feel,
                how it makes them act, how it becomes part of the cultural conversation."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
