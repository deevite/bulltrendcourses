import React from 'react';
import { TrendingUp, Users, Video, MessageCircle, Award } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: '3 уровня обучения',
      description: 'от нуля до про'
    },
    {
      icon: Users,
      title: 'Действующие трейдеры-преподаватели',
      description: 'реальный опыт работы на рынке'
    },
    {
      icon: Video,
      title: 'Живые занятия',
      description: 'практика в Zoom'
    },
    {
      icon: MessageCircle,
      title: 'Поддержка и обратная связь',
      description: 'чат, консультации'
    },
    {
      icon: Award,
      title: 'Более 100+ учеников',
      description: 'проверенная методика'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Почему Bulltrend?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl group"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;