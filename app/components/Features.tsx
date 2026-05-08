// app/components/Features.tsx
'use client';

export default function Features() {
  const features = [
    {
      icon: '📊',
      title: 'Dashboard Completo',
      description: 'Visualize sua contabilidade em um painel intuitivo e atualizado em tempo real.',
    },
    {
      icon: '🔗',
      title: 'Integrações Automáticas',
      description: 'Conecte com seu banco, fornecedores e clientes. Tudo sincroniza sozinho.',
    },
    {
      icon: '📄',
      title: 'NFS-e Automática',
      description: 'Emita notas fiscais em segundos, sem erros ou retrabalho manual.',
    },
    {
      icon: '🔐',
      title: '100% Seguro',
      description: 'Criptografia de nível bancário e certificação ISO 27001.',
    },
    {
      icon: '⚠️',
      title: 'Alertas Fiscais',
      description: 'Receba notificações de prazos de obrigações antes que vençam.',
    },
    {
      icon: '💬',
      title: 'Suporte 24h',
      description: 'Time especializado pronto para ajudar por chat, email ou WhatsApp.',
    },
  ];

  return (
    <section id="recursos" className="py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Recursos <span className="text-emerald-600">poderosos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl">
            Tudo que você precisa para gerenciar sua contabilidade profissionalmente
          </p>
        </div>

        {/* Features Grid - 3 colunas, mais espaço */}
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition group"
            >
              {/* Ícone */}
              <div className="text-5xl mb-6 group-hover:scale-110 transition">
                {feature.icon}
              </div>

              {/* Título */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>

              {/* Descrição */}
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}