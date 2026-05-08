// app/components/Footer.tsx
'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Grid Principal */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Coluna 1: Logo e Descrição */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-gradient-to-br from-emerald-400 to-teal-300 rounded-lg"></div>
              <span className="text-white font-bold">
                Macro <span className="text-emerald-400">Contábil</span>
              </span>
            </div>
            <p className="text-sm text-gray-500">
              Contabilidade digital simples e poderosa para MEI e Simples Nacional.
            </p>
          </div>

          {/* Coluna 2: Produto */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wide">
              Produto
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#recursos" className="text-gray-500 hover:text-emerald-400 transition">
                  Recursos
                </a>
              </li>
              <li>
                <a href="#precos" className="text-gray-500 hover:text-emerald-400 transition">
                  Preços
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-500 hover:text-emerald-400 transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-emerald-400 transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Empresa */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wide">
              Empresa
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-gray-500 hover:text-emerald-400 transition">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-emerald-400 transition">
                  Contato
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-emerald-400 transition">
                  Carreiras
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-emerald-400 transition">
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Legal */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wide">
              Legal
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-gray-500 hover:text-emerald-400 transition">
                  Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-emerald-400 transition">
                  Termos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-emerald-400 transition">
                  Cookies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-emerald-400 transition">
                  LGPD
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Copyright */}
            <p className="text-sm text-gray-500">
              © 2024 Macro Contábil. Todos os direitos reservados.
            </p>

            {/* Social Links */}
            <div className="flex gap-8">
              <a href="#" className="text-gray-500 hover:text-emerald-400 transition text-sm">
                Twitter
              </a>
              <a href="#" className="text-gray-500 hover:text-emerald-400 transition text-sm">
                LinkedIn
              </a>
              <a href="#" className="text-gray-500 hover:text-emerald-400 transition text-sm">
                Instagram
              </a>
              <a href="#" className="text-gray-500 hover:text-emerald-400 transition text-sm">
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="text-center text-xs text-gray-600 mt-8">
          <p>
            📧{' '}
            <a href="mailto:contato@mccontabil.digital" className="text-emerald-400 hover:text-emerald-300 transition">
              contato@mccontabil.digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}