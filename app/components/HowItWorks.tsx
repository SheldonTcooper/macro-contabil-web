// app/components/HowItWorks.tsx
'use client';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Cadastre sua Empresa',
      description: 'Crie sua conta em 2 minutos. Sem complicação.',
      icon: '📝',
    },
    {
      number: '02',
      title: 'Conecte suas Contas',
      description: 'Integre banco e fornecedores. Tudo sincroniza.',
      icon: '🔗',
    },
    {
      number: '03',
      title: 'Emita NFS-e',
      description: 'Notas fiscais em segundos, sem retrabalho.',
      icon: '⚡',
    },
    {
      number: '04',
      title: 'Acompanhe em Tempo Real',
      description: 'Dashboard atualizado, sempre sob controle.',
      icon: '📊',
    },
  ];

  return (
    <section id="como-funciona" className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Como <span className="text-emerald-600">funciona</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl">
            4 passos simples para revolucionar sua contabilidade
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Linha conectora */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-200 -z-10"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Número grande */}
              <div className="text-6xl font-bold text-gray-100 mb-4">
                {step.number}
              </div>

              {/* Círculo */}
              <div className="w-14 h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 relative z-10 shadow-lg">
                {step.icon}
              </div>

              {/* Conteúdo */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <button className="bg-emerald-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition text-lg shadow-lg hover:shadow-emerald-500/50">
            Começar Teste Gratuito
          </button>
        </div>
      </div>
    </section>
  );
}