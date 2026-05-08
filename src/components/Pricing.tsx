// src/components/Pricing.tsx
'use client';

export default function Pricing() {
  const plans = [
    {
      name: 'Iniciante',
      price: '99',
      description: 'Para MEI e autônomos',
      features: [
        '✓ Gestão básica',
        '✓ Até 50 emissões/mês',
        '✓ 1 usuário',
        '✓ Suporte por email',
      ],
      cta: 'Começar',
      highlighted: false,
    },
    {
      name: 'Profissional',
      price: '199',
      description: 'Para pequenos negócios',
      features: [
        '✓ Tudo do Iniciante',
        '✓ Emissões ilimitadas',
        '✓ Até 5 usuários',
        '✓ Automações N8N',
        '✓ Suporte prioritário',
      ],
      cta: 'Começar',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Personalizado',
      description: 'Para grandes operações',
      features: [
        '✓ Tudo do Profissional',
        '✓ Usuários ilimitados',
        '✓ API customizada',
        '✓ Consultor dedicado',
        '✓ SLA garantido',
      ],
      cta: 'Contatar',
      highlighted: false,
    },
  ];

  return (
    <section id="precos" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Preços Simples e Diretos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Escolha o plano perfeito para seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-xl p-8 transition ${
                plan.highlighted 
                  ? 'bg-white border-2 border-blue-600 shadow-lg scale-105' 
                  : 'bg-white border border-gray-200'
              }`}
            >
              {plan.highlighted && (
                <span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  Mais Popular
                </span>
              )}
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {plan.name}
              </h3>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              
              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-900">
                  {plan.price === 'Personalizado' ? '?' : `R$ ${plan.price}`}
                </span>
                {plan.price !== 'Personalizado' && (
                  <span className="text-gray-600">/mês</span>
                )}
              </div>

              <button 
                className={`w-full py-3 rounded-lg font-semibold transition mb-8 ${
                  plan.highlighted
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {plan.cta}
              </button>

              <div className="space-y-4">
                {plan.features.map((feature, i) => (
                  <p key={i} className="text-gray-700">
                    {feature}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}