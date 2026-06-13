import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-[100svh] flex items-center justify-center px-6 hero-gradient text-center">
      <div>
        <div className="flex gap-1.5 justify-center mb-8">
          {['#E8C4C4', '#C4956A', '#D4B896'].map((c) => (
            <span key={c} className="w-3 h-7 rounded-full" style={{ background: c }} />
          ))}
        </div>
        <p className="eyebrow mb-4">Erreur 404</p>
        <h1 className="font-display text-5xl md:text-6xl font-light text-warm-dark mb-5">
          Cette page <span className="gradient-text italic">n&rsquo;existe pas</span>
        </h1>
        <p className="text-warm-mid font-light max-w-md mx-auto mb-10">
          La page que vous cherchez a peut-être été déplacée. Retrouvez tous nos soins sur la page d&rsquo;accueil.
        </p>
        <Link href="/" className="btn-primary">
          Retour à l&rsquo;accueil
        </Link>
      </div>
    </main>
  );
}
