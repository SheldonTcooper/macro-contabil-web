// app/components/Testimonials.tsx
'use client';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'João Silva',
      role: 'Contador Autônomo',
      location: 'São Paulo',
      text: 'Reduzi 20 horas mensais em lançamentos. Meus clientes recebem relatórios muito mais rápido.',
      rating: 5,
    },
    {
      name: 'Maria Santos',
      role: 'Sócia de Escritório',
      location: 'Rio de Janeiro',
      text: 'Nunca mais perdi prazo fiscal. O sistema avisa tudo automaticamente.',
      rating: 5,
    },
    {
      name: 'Pedro Costa',
      role: 'Contador PJ',
      location: 'Belo Horizonte',
      text: 'O melhor custo-benefício que já contratei. Recomendo muito.',
      rating: 5,
    },
    {
      name: 'Ana Oliveira',
      role: 'Gestora Contábil',
      location: 'Curitiba',
      text: 'A integração com o banco é perfeita. Não preciso mais pedir extrato.',
      rating: 5,
    },
  ];

  return (
    <section id="depoimentos" className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            O que nossos <span className="text-emerald-600">clientes dizem</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl">
            Mais de 5.000 contadores confiam na Macro Contábil todos os dias
          </p>
        </div>

        {/* Números de Confiança - Grandes */}
        <div className="grid grid-cols-3 gap-8 md:gap-16 mb-20 max-w-3xl">
          <div className="text-center">
            <div className="text-5xl font-bold text-emerald-600 mb-2">5K+</div>
            <p className="text-gray-600 text-sm">Contadores Ativos</p>
          </div>
          <div className="text-center border-l border-r border-gray-200">
            <div className="text-5xl font-bold text-emerald-600 mb-2">50K+</div>
            <p className="text-gray-600 text-sm">Empresas</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-emerald-600 mb-2">4.9★</div>
            <p className="text-gray-600 text-sm">Avaliação</p>
          </div>
        </div>

        {/* Depoimentos Grid - Elegante */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition"
            >
              {/* Estrelas */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-emerald-400 text-lg">
                    ★
                  </span>
                ))}
              </div>

              {/* Texto */}
              <p className="text-gray-700 mb-8 leading-relaxed font-light italic">
                "{testimonial.text}"
              </p>

              {/* Info do Cliente */}
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
                <p className="text-xs text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <button className="bg-emerald-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition text-lg shadow-lg hover:shadow-emerald-500/50">
            Junte-se aos 5.000+
          </button>
        </div>
      </div>
    </section>
  );
}