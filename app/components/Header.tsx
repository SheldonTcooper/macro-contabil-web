// app/components/Header.tsx
'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-300 rounded-lg"></div>
          <span className="text-xl font-bold text-white">
            Macro <span className="text-emerald-400">Contábil</span>
          </span>
        </Link>

        {/* Links - Minimalista */}
        <div className="hidden md:flex gap-12 items-center">
          <Link
            href="#recursos"
            className="text-gray-300 hover:text-emerald-400 transition font-medium text-sm"
          >
            Recursos
          </Link>
          <Link
            href="#precos"
            className="text-gray-300 hover:text-emerald-400 transition font-medium text-sm"
          >
            Preços
          </Link>
          <Link
            href="#faq"
            className="text-gray-300 hover:text-emerald-400 transition font-medium text-sm"
          >
            FAQ
          </Link>
        </div>

        {/* CTA Button */}
        <button className="bg-emerald-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-emerald-700 transition text-sm shadow-lg hover:shadow-emerald-500/50">
          Fale Conosco
        </button>
      </nav>
    </header>
  );
}