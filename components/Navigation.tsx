'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Accueil', href: '#hero' },
  { label: 'À propos', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Galerie', href: '#gallery' },
  { label: 'Tarifs', href: '#pricing' },
  { label: 'Contact', href: '#booking' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'nav-glass shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="flex gap-1">
              {['#E8C4C4', '#C4956A', '#D4B896'].map((c, i) => (
                <div
                  key={i}
                  className="w-2.5 h-5 rounded-full group-hover:scale-110 transition-transform"
                  style={{ background: c, transitionDelay: `${i * 50}ms` }}
                />
              ))}
            </div>
            <span className="font-display text-xl font-semibold tracking-tight gradient-text-dark ml-1">
              Éclat Nails
            </span>
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-sm font-medium text-warm-mid hover:text-rose-gold transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <a href="#booking" className="hidden lg:inline-flex btn-primary py-2.5 px-6 text-xs">
              Réserver
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-xl hover:bg-rose-gold/10 transition-colors"
              aria-label="Menu"
            >
              {menuOpen ? <X size={20} className="text-rose-gold" /> : <Menu size={20} className="text-warm-dark" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 z-40 nav-glass shadow-xl border-b border-rose-gold/10 py-6 px-6 lg:hidden"
          >
            {links.map(({ label, href }, i) => (
              <motion.a
                key={href}
                href={href}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-sm font-medium text-warm-mid hover:text-rose-gold transition-colors border-b border-rose-gold/5 last:border-0"
              >
                {label}
              </motion.a>
            ))}
            <a
              href="#booking"
              onClick={() => setMenuOpen(false)}
              className="btn-primary mt-4 w-full text-center"
            >
              Réserver maintenant
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
