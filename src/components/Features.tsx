// src/components/Features.tsx
'use client';

export default function Features() {
  const features = [
    {
      icon: '📄',
      title: 'NFS-e Automática',
      description: 'Emita notas fiscais de serviço com um clique. Tudo integrado e automático.',
    },
    {
      icon: '💰',
      title: 'Cobrança Automática',
      description: 'Envie cobranças automáticas aos seus clientes. Receba tudo de forma segura.',
    },
    {
      icon: '📊',
      title: 'Relatórios em Tempo Real',
      description: 'Acompanhe sua contabilidade com dashboards intuitivos e relatórios automáticos.',
    },
    {
      icon: '🔐',
      title: 'Assinatura Digital',
      description: 'Assine documentos com certificado digital Gov.br. 100% válido legalmente.',
    },
    {
      icon: '⚙️',
      title: 'Automações N8N',
      description: 'Crie workflows customizados. Automatize tudo que pode ser automatizado.',
    },
    {
      icon: '🛡️',
      title: 'Segurança Garantida',
      description: 'Dados criptografados, backup automático e conformidade LGPD completa.',
    },
  ];

  return (
    <section id="recursos" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tudo que você precisa
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Uma plataforma completa para gerir sua contabilidade digitalmente
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-8 rounded-xl bg-gray-50 hover:bg-blue-50 transition border border-gray-200">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}