import React, { useState, useEffect } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Worldview', href: '#worldview' },
    { name: 'Factions', href: '#factions' },
    { name: 'Characters', href: '#characters' },
  ];

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-void text-zinc-300 font-sans selection:bg-blood-900 selection:text-white">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-void/90 backdrop-blur-md border-b border-zinc-800 py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="text-2xl font-serif font-black tracking-widest text-white cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            DISTORTION
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 text-sm tracking-widest uppercase font-medium">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={() => scrollTo(link.href)}
                className="hover:text-white hover:text-glow transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Nav Toggle */}
          <button 
            className="md:hidden text-zinc-300 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav Menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-void/95 backdrop-blur-lg border-b border-zinc-800 p-4 flex flex-col space-y-4 shadow-xl">
             {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={() => scrollTo(link.href)}
                className="text-left py-2 text-zinc-300 tracking-widest uppercase text-sm"
              >
                {link.name}
              </button>
            ))}
          </div>
        )}
      </nav>

      <main>
        {children}
      </main>

      <footer className="bg-black py-12 border-t border-zinc-900 mt-24">
        <div className="max-w-7xl mx-auto px-6 text-center text-zinc-600 text-sm">
          <p className="font-serif font-bold tracking-widest mb-2">DISTORTION RP WORLDVIEW</p>
          <p>2250년 대한민국 기반 다크 판타지 포스트 아포칼립스</p>
        </div>
      </footer>
    </div>
  );
};