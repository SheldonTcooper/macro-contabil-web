// src/components/Header.tsx
'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="font-bold text-2xl text-blue-600">
            Macro <span className="text-gray-900">Contábil</span>
          </Link>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#recursos" className="text-gray-700 hover:text-blue-600 transition">
              Recursos
            </Link>
            <Link href="#precos" className="text-gray-700 hover:text-blue-600 transition">
              Preços
            </Link>
            <Link href="#faq" className="text-gray-700 hover:text-blue-600 transition">
              FAQ
            </Link>
            <Link href="#contato" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Fale Conosco
            </Link>
          </div>

          {/* Menu Mobile */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-blue-600">
              ☰ Menu
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}