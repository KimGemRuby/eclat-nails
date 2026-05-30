'use client';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Heart } from 'lucide-react';

const links = [
  { label: 'À propos', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Galerie', href: '#gallery' },
  { label: 'Tarifs', href: '#pricing' },
  { label: 'Contact', href: '#booking' },
];

export default function Footer() {
  return (
    <footer className="bg-warm-dark text-white py-16 px-6 relative overflow-hidden">
      {/* Decorative gradient top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-gold/40 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-rose-gold/30" />

      {/* Background orbs */}
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(196,149,106,0.08) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1">
                {['#E8C4C4', '#C4956A', '#D4B896'].map((c, i) => (
                  <div key={i} className="w-2 h-5 rounded-full" style={{ background: c }} />
                ))}
              </div>
              <span className="font-display text-xl font-semibold gradient-text ml-1">Éclat Nails</span>
            </div>
            <p className="text-white/50 text-sm font-light leading-relaxed max-w-xs">
              Manucure professionnelle à domicile. Des mains sublimes, une expérience unique.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-medium tracking-widest text-white/40 uppercase mb-5">Navigation</h4>
            <ul className="space-y-2.5">
              {links.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className="text-white/60 text-sm hover:text-rose-gold-light transition-colors font-light">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & CTA */}
          <div>
            <h4 className="text-xs font-medium tracking-widest text-white/40 uppercase mb-5">Suivez-nous</h4>
            <div className="flex gap-3 mb-6">
              {[
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Facebook, href: '#', label: 'Facebook' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-rose-gold/40 hover:text-rose-gold transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <a href="#booking" className="btn-primary text-xs py-3 px-6">
              Prendre rendez-vous
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs font-light">
            © 2025 Sreynouv Rann — Éclat Nails. Tous droits réservés.
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/25 text-xs flex items-center gap-1"
          >
            Fait avec <Heart size={10} className="text-rose-gold/60" fill="currentColor" /> pour mes clientes
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
