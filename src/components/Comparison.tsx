import React from 'react';
import { Check } from 'lucide-react';

const Comparison = () => {
  const courses = [
    {
      name: 'Базовый',
      target: 'С нуля',
      level: '👶',
      price: '$100',
      format: 'Онлайн'
    },
    {
      name: 'Продвинутый',
      target: 'Торгует без системы',
      level: '🧠',
      price: '$500',
      format: 'Онлайн'
    },
    {
      name: 'Premium',
      target: 'Хочет стать профи',
      level: '💼',
      price: '$700',
      format: 'Онлайн'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Сравнение курсов
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-900/50 border-b border-slate-700/50">
                  <th className="text-left p-6 text-white font-semibold">Курс</th>
                  <th className="text-left p-6 text-white font-semibold">Для кого</th>
                  <th className="text-left p-6 text-white font-semibold">Уровень</th>
                  <th className="text-left p-6 text-white font-semibold">Цена со скидкой</th>
                  <th className="text-left p-6 text-white font-semibold">Формат</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course, index) => (
                  <tr
                    key={index}
                    className="border-b border-slate-700/30 hover:bg-slate-700/30 transition-colors"
                  >
                    <td className="p-6">
                      <span className="text-white font-semibold">{course.name}</span>
                    </td>
                    <td className="p-6 text-slate-300">{course.target}</td>
                    <td className="p-6">
                      <span className="text-2xl">{course.level}</span>
                    </td>
                    <td className="p-6">
                      <span className={`text-xl font-bold ${
                        index === 0 ? 'text-green-400' :
                        index === 1 ? 'text-blue-400' :
                        'text-purple-400'
                      }`}>
                        {course.price}
                      </span>
                    </td>
                    <td className="p-6">
                      <div className="flex items-center text-slate-300">
                        <Check className="w-5 h-5 text-green-400 mr-2" />
                        {course.format}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;