// src/components/CTA.tsx
'use client';

import Link from 'next/link';

export default function CTA() {
  return (
    <section id="contato" className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Pronto para começar?
        </h2>
        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
          Teste gratuitamente por 7 dias. Sem cartão de crédito. Sem compromisso.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="https://wa.me/551199999999"
            target="_blank"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition text-lg"
          >
            Fale Conosco no WhatsApp
          </Link>
          <Link 
            href="mailto:contato@mccontabil.digital"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition text-lg"
          >
            Enviar Email
          </Link>
        </div>

        <p className="text-blue-100 mt-8 text-sm">
          💬 Resposta em menos de 1 hora
        </p>
      </div>
    </section>
  );
}