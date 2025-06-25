import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Объясняют доступно, поддержка на каждом этапе!",
      author: "Александр К."
    },
    {
      text: "Впервые начал понимать рынок. Курс стоит своих денег.",
      author: "Мария Д."
    },
    {
      text: "Отличная структура обучения, всё по делу, без воды.",
      author: "Дмитрий П."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Отзывы учеников
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300 hover:transform hover:scale-105"
            >
              <Quote className="w-8 h-8 text-purple-400 mb-4" />
              <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="text-purple-400 font-semibold">
                — {testimonial.author}
              </div>
            </div>
          ))}
        </div>

        {/* Кнопка Все отзывы */}
        <div className="text-center mt-12">
          <a
            href="https://t.me/a/#-1001370993888" //
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-500 transition"
          >
            Все отзывы →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;