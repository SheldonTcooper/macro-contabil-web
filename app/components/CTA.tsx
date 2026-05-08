// app/components/CTA.tsx
'use client';

export default function CTA() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Headline */}
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
          Pronto para <br />
          <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
            simplificar?
          </span>
        </h2>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto font-light">
          Teste grátis por 7 dias. Sem cartão de crédito. Sem compromisso.
        </p>

        {/* CTAs Principal */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="bg-emerald-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition text-lg shadow-lg hover:shadow-emerald-500/50">
            Começar Agora
          </button>
          <button className="border-2 border-emerald-500/50 text-white px-10 py-4 rounded-lg font-semibold hover:border-emerald-400 hover:bg-emerald-500/10 transition text-lg">
            Fale Conosco
          </button>
        </div>

        {/* Trust Badges */}
        <div className="flex justify-center gap-8 flex-wrap pt-12 border-t border-gray-700">
          <div className="text-emerald-400 text-sm font-medium">
            ✓ 100% Seguro
          </div>
          <div className="text-emerald-400 text-sm font-medium">
            ✓ Certificado ICP
          </div>
          <div className="text-emerald-400 text-sm font-medium">
            ✓ Suporte 24h
          </div>
        </div>
      </div>
    </section>
  );
}