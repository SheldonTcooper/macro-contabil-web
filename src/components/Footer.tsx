// src/components/Footer.tsx
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-white mb-4">Macro Contábil</h3>
            <p className="text-sm leading-relaxed">
              Plataforma SaaS de contabilidade digital para MEI e Simples Nacional.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Produto</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#recursos" className="hover:text-white transition">Recursos</Link></li>
              <li><Link href="#precos" className="hover:text-white transition">Preços</Link></li>
              <li><Link href="#faq" className="hover:text-white transition">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#sobre" className="hover:text-white transition">Sobre</Link></li>
              <li><Link href="#blog" className="hover:text-white transition">Blog</Link></li>
              <li><Link href="#contato" className="hover:text-white transition">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#privacidade" className="hover:text-white transition">Privacidade</Link></li>
              <li><Link href="#termos" className="hover:text-white transition">Termos</Link></li>
              <li><Link href="#cookies" className="hover:text-white transition">Cookies</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              © 2024 Macro Contábil. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white transition">Twitter</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition">LinkedIn</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition">Instagram</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}