// app/components/Hero.tsx
'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="pt-32 pb-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Badge de Prova Social */}
        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
          <span className="text-emerald-400 text-sm font-medium">
            ✨ 5.000+ contadores já confiam
          </span>
        </div>

        {/* Headline Principal - GIGANTE */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
          Contabilidade <br />
          <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
            simples e inteligente
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          Gerencie sua contabilidade, emita NFS-e e acompanhe obrigações fiscais. Tudo em um lugar, sem complicação.
        </p>

        {/* CTAs Principal */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <Link 
            href="#contato"
            className="bg-emerald-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition text-lg shadow-lg hover:shadow-emerald-500/50"
          >
            Começar Grátis →
          </Link>
          <Link 
            href="#demo"
            className="border-2 border-emerald-500/50 text-white px-10 py-4 rounded-lg font-semibold hover:border-emerald-400 hover:bg-emerald-500/10 transition text-lg"
          >
            Ver Demo
          </Link>
        </div>

        {/* Números de Prova Social - Grandes e Impactantes */}
        <div className="grid grid-cols-3 gap-8 md:gap-12 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">
              5K+
            </div>
            <p className="text-gray-400 text-sm md:text-base">Contadores Ativos</p>
          </div>
          <div className="text-center border-l border-r border-gray-700">
            <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">
              50K+
            </div>
            <p className="text-gray-400 text-sm md:text-base">Empresas Gerenciadas</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">
              4.9★
            </div>
            <p className="text-gray-400 text-sm md:text-base">Avaliação</p>
          </div>
        </div>
      </div>
    </section>
  );
}