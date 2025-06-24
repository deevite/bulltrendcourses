import React from 'react';
import { Rocket, Gift, ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToRegistration = () => {
    const element = document.getElementById('registration');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Title */}
        <div className="flex items-center justify-center mb-6">
          <Rocket className="w-8 h-8 text-purple-400 mr-3" />
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Прокачайся в трейдинге
          </h1>
        </div>
        
        <div className="text-2xl md:text-3xl font-bold text-white mb-4">
          с Bulltrend
        </div>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Онлайн-обучение для новичков и опытных трейдеров — от базовых знаний до профессиональной работы на рынке.
        </p>
        
        {/* Discount Highlight */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 mb-8 max-w-2xl mx-auto border border-purple-500/30 shadow-2xl">
          <div className="flex items-center justify-center mb-4">
            <Gift className="w-8 h-8 text-yellow-400 mr-3" />
            <span className="text-3xl font-bold text-yellow-400">Скидка 10%</span>
          </div>
          <p className="text-xl text-white/90">для клиентов партнёра</p>
        </div>
        
        {/* CTA Button */}
        <button
          onClick={scrollToRegistration}
          className="group bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xl font-semibold px-12 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center mx-auto"
        >
          👉 Получить скидку
          <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </section>
  );
};

export default Hero;