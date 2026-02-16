import { Mail, Linkedin, Instagram } from 'lucide-react';

export default function Contact() {
  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/danny-mota/' },
    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/dannymota152' },
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 bg-zinc-950">
      <div className="max-w-4xl w-full text-center">
        <div className="mb-12">
          <h2 className="text-6xl md:text-8xl font-light tracking-tight mb-6">
            Let's Create
          </h2>
          <p className="text-2xl text-gray-400 font-light">
            Ready to turn your vision into a cultural moment?
          </p>
        </div>

        <a
          href="mailto:dmota152@gmail.com"
          className="inline-flex items-center gap-3 px-12 py-6 bg-amber-500 text-black text-lg tracking-wider hover:bg-amber-400 transition-all duration-300 group"
        >
          <Mail className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
          <span>GET IN TOUCH</span>
        </a>

        <div className="mt-16 flex justify-center gap-8">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-zinc-800 hover:border-amber-500 hover:text-amber-500 transition-all duration-300 group"
                aria-label={link.label}
              >
                <Icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              </a>
            );
          })}
        </div>

        <div className="mt-20 pt-12 border-t border-zinc-900">
          <p className="text-sm text-gray-600 tracking-widest">
            © 2026 MOTAVISUAL — ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </section>
  );
}
