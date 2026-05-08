// app/components/Pricing.tsx
'use client';

export default function Pricing() {
  const plans = [
    {
      name: 'Iniciante',
      price: 195,
      period: '/mês',
      description: 'Para MEI que está começando',
      features: [
        'Dashboard básico',
        '1 empresa',
        'Até 50 notas/mês',
        'Email de suporte',
        'Backup automático',
      ],
      highlighted: false,
    },
    {
      name: 'Profissional',
      price: 395,
      period: '/mês',
      description: 'Mais vendido entre contadores',
      features: [
        'Dashboard completo',
        'Até 5 empresas',
        'NFS-e ilimitada',
        'Integrações com banco',
        'Chat 24/5',
        'Relatórios avançados',
      ],
      highlighted: true,
    },
    {
      name: 'Empresa',
      price: 795,
      period: '/mês',
      description: 'Para escritórios de contabilidade',
      features: [
        'Tudo do Profissional',
        'Empresas ilimitadas',
        'Usuários ilimitados',
        'Suporte prioritário',
        'Integrações customizadas',
        'Consultoria incluída',
      ],
      highlighted: false,
    },
  ];

  return (
    <section id="precos" className="py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Preços <span className="text-emerald-600">transparentes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Escolha o plano ideal. Sem contratos longos, cancele quando quiser.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-10 transition transform ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-emerald-600 to-emerald-700 text-white shadow-2xl scale-105 relative'
                  : 'bg-white border border-gray-200 hover:border-emerald-300 hover:shadow-lg'
              }`}
            >
              {/* Badge Mais Popular */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-white text-emerald-600 px-4 py-1 rounded-full text-sm font-bold">
                    MAIS POPULAR
                  </div>
                </div>
              )}

              {/* Nome do Plano */}
              <h3 className={`text-2xl font-bold mb-2 ${
                plan.highlighted ? 'text-white' : 'text-gray-900'
              }`}>
                {plan.name}
              </h3>

              {/* Descrição */}
              <p className={`text-sm mb-8 ${
                plan.highlighted ? 'text-emerald-100' : 'text-gray-600'
              }`}>
                {plan.description}
              </p>

              {/* Preço */}
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className={`text-5xl font-bold ${
                    plan.highlighted ? 'text-white' : 'text-gray-900'
                  }`}>
                    R$ {plan.price}
                  </span>
                  <span className={`${
                    plan.highlighted ? 'text-emerald-100' : 'text-gray-600'
                  }`}>
                    {plan.period}
                  </span>
                </div>
                <p className={`text-xs mt-2 ${
                  plan.highlighted ? 'text-emerald-100' : 'text-gray-500'
                }`}>
                  Teste grátis por 7 dias
                </p>
              </div>

              {/* CTA Button */}
              <button className={`w-full py-3 rounded-lg font-semibold transition mb-8 ${
                plan.highlighted
                  ? 'bg-white text-emerald-600 hover:bg-gray-100'
                  : 'border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50'
              }`}>
                Começar Agora
              </button>

              {/* Features List */}
              <div className="space-y-4">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className={`text-lg mt-0.5 ${
                      plan.highlighted ? 'text-emerald-200' : 'text-emerald-600'
                    }`}>
                      ✓
                    </span>
                    <span className={`${
                      plan.highlighted ? 'text-white' : 'text-gray-700'
                    } text-sm`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <div className="text-center mt-16">
          <p className={`text-gray-600 mb-2`}>
            Todos os planos incluem suporte completo e atualização de recursos
          </p>
          <p className={`text-sm text-gray-500`}>
            Sem cartão de crédito. Cancelamento a qualquer momento.
          </p>
        </div>
      </div>
    </section>
  );
}