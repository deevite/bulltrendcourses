import React from 'react';
import { MessageCircle } from 'lucide-react';

const Registration = () => {
  return (
    <section className="py-20 px-4" id="registration">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            📝 Получить скидку 10%
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 text-center">
            <div className="mb-8">
              <MessageCircle className="w-16 h-16 text-purple-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Получи скидку 10% на любой курс
              </h3>
              <p className="text-xl text-slate-300 mb-8">
                Напиши админу слово <span className="font-bold text-purple-400">"DISCOUNT"</span> и получи 10% скидку на курс
              </p>
            </div>
            
            <a
              href="https://t.me/bulltrend_admin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 text-xl"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Получить скидку
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;