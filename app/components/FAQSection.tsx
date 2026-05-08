// app/components/FAQSection.tsx
'use client';

import { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Quanto tempo leva para começar?',
      answer:
        'Apenas 2 minutos! Você cria a conta, preenche dados básicos e já começa a usar. Nosso onboarding é rápido e intuitivo.',
    },
    {
      question: 'Meus dados estão seguro?',
      answer:
        'Sim! Criptografia de nível bancário, certificação ISO 27001 e conformidade total com LGPD. Seus dados são mais seguros conosco do que em planilhas.',
    },
    {
      question: 'Posso cancelar quando quiser?',
      answer:
        'Sim, sem multa ou burocracia. Cancele a qualquer momento pelo painel. Acreditamos que você vai querer ficar.',
    },
    {
      question: 'Vocês emitem NFS-e automaticamente?',
      answer:
        'Sim! Integrado com NFse.io. Registre a venda e a nota é emitida em segundos. Sem erros, sem retrabalho.',
    },
    {
      question: 'Qual é o suporte disponível?',
      answer:
        'Suporte 24/5 por email, chat e WhatsApp. Tempo médio de resposta: menos de 1 hora. Além disso, temos base de conhecimento com vídeos.',
    },
    {
      question: 'Preciso de software adicional?',
      answer:
        'Não! Tudo funciona pelo navegador. Acesse de qualquer lugar, em qualquer dispositivo - sempre sincronizado.',
    },
  ];

  return (
    <section id="faq" className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Título */}
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Dúvidas <span className="text-emerald-600">frequentes</span>
          </h2>
          <p className="text-xl text-gray-600">
            Respostas para as perguntas mais comuns dos nossos contadores
          </p>
        </div>

        {/* FAQ Accordion - Elegante */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl overflow-hidden hover:border-emerald-300 transition"
            >
              {/* Pergunta */}
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full px-8 py-6 flex items-center justify-between bg-white hover:bg-gray-50 transition text-left"
              >
                <span className="font-semibold text-gray-900 text-lg">
                  {faq.question}
                </span>
                <span
                  className={`text-2xl text-emerald-600 transition transform flex-shrink-0 ml-4 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  ↓
                </span>
              </button>

              {/* Resposta */}
              {openIndex === index && (
                <div className="px-8 py-6 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Final */}
        <div className="text-center mt-20 bg-gradient-to-r from-emerald-50 to-teal-50 p-12 rounded-2xl border border-emerald-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ainda tem dúvidas?
          </h3>
          <p className="text-gray-600 mb-8">
            Nosso time especializado está pronto para ajudar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 text-white px-10 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition shadow-lg hover:shadow-emerald-500/50">
              Chat com Especialista
            </button>
            <button className="border-2 border-emerald-600 text-emerald-600 px-10 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition">
              Agendar Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}