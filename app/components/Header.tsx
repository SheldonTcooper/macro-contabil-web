// app/components/Header.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo SVG */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.svg"
            alt="Macro Contábil"
            width={80}
            height={142}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Links - Minimalista */}
        <div className="hidden md:flex gap-12 items-center">
          <Link
            href="#recursos"
            className="text-gray-700 hover:text-emerald-600 transition font-medium text-sm"
          >
            Recursos
          </Link>
          <Link
            href="#precos"
            className="text-gray-700 hover:text-emerald-600 transition font-medium text-sm"
          >
            Preços
          </Link>
          <Link
            href="#faq"
            className="text-gray-700 hover:text-emerald-600 transition font-medium text-sm"
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