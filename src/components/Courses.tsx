import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Courses = () => {
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);

  const scrollToRegistration = () => {
    const element = document.getElementById('registration');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleExpanded = (courseId: string) => {
    setExpandedCourse(expandedCourse === courseId ? null : courseId);
  };

  const courses = [
    {
      id: 'basic',
      emoji: '💡',
      title: 'Базовый курс',
      oldPrice: '$119',
      newPrice: '$100',
      suitable: 'тем, кто совсем с нуля',
      skills: [
        'Что такое трейдинг, биржи, активы',
        'Как читать графики',
        'Что влияет на цену',
        'Как открыть первую сделку',
        'Как не слить депо'
      ],
      modules: [
        {
          title: '1. Введение',
          lessons: [
            'Что такое трейдинг',
            'История трейдинга',
            'Зачем нужны финансовые рынки и какие они существуют',
            'Участники рынка',
            'Инвестирование и трейдинг, разница',
            'Виды бирж (Централизованные/Децентрализованные, Оффлайн/Онлайн)',
            'Устройство биржи',
            'Какие активы существуют',
            'Как формируется цена и что на неё влияет'
          ]
        },
        {
          title: '2. База',
          lessons: [
            'Что такое фьючерс, CFD, опционы, спот, маржинальная торговля',
            'Виды рынков',
            'Кредитное плечо',
            'Виды ордеров',
            'График и таймфреймы',
            'Демо-счёт'
          ]
        },
        {
          title: '3. Практика',
          lessons: [
            'Платформы для торговли анализа и торговли',
            'Основы риск менеджмента (Риск на сделку, на день, неделю)',
            'Психология (Эмоции, Дисциплина, Фомо)',
            'Ошибки новичков',
            'Дневник трейдера и зачем он нужен',
            'Торговая стратега и зачем она нужна',
            'Волатильность и ликвидность',
            'Основные термины (Лонг/Шорт, Спред, Маржа, Своп, Комиссия)'
          ]
        }
      ]
    },
    {
      id: 'advanced',
      emoji: '📈',
      title: 'Продвинутый курс',
      oldPrice: '$559',
      newPrice: '$500',
      suitable: 'тем, кто уже торгует, но без системы',
      skills: [
        'Smart Money мышлению',
        'Как работает крупный участник',
        'Liquidity & Order Flow',
        'Торговым моделям и точкам входа'
      ],
      modules: [
        {
          title: '10 занятий',
          lessons: [
            '1) Вводное - Знакомство с участниками, обзор курса, настрой на мышление Smart Money',
            '2) Концепция рынка и SMC - Финансовый рынок, участники, мотивация крупного участника',
            '3) Ликвидность - Типы ликвидности, ордеров, структура стакана',
            '4) Формирование потока приказов – Часть 1 - STB, BTS, методы сбора ликвидности',
            '5) Формирование потока приказов – Часть 2 - SSL, BSL, ERL, IRL',
            '6) Рыночная структура – Часть 1 - 5-свечная формация, Swing структура',
            '7) Рыночная структура – Часть 2 - Внешняя и внутренняя ликвидность, MNR структура',
            '8) Зоны интереса – Часть 1 - POI, Order Block, Breaker Block',
            '9) Зоны интереса – Часть 2 - FVG, IMB, P|D, зоны открытия',
            '10) Торговая модель - Вход в 3-фрактальной системе, торговля по Order Flow'
          ]
        }
      ]
    },
    {
      id: 'premium',
      emoji: '🔥',
      title: 'Premium курс',
      oldPrice: '$770',
      newPrice: '$700',
      suitable: 'тем, кто хочет профессионально работать на рынке',
      skills: [
        'Wycoff, мультифрактал, нарратив цены',
        'Инверсия, удержание ордеров, модели SMS/MSR',
        'Алгоритмы построения стратегии'
      ],
      modules: [
        {
          title: '12 модулей',
          lessons: [
            '1. Стадии завершения коррекции - MNR структура как цель',
            '2. SUB|MNR|SUB торговля основного тренда',
            '3. Инверсия имбаланса - inv как нарратив без слома структуры HTF',
            '4. IDM - подтверждение зоны POI, внешний/внутренний IDM',
            '5. Аккумуляция Wycoff - торговые фазы для построения стратегии',
            '6. Дистрибьюция Wycoff - торговые фазы, расширение по Wycoff',
            '7. Реаккумуляция Wycoff',
            '8. Редистрибьюция Wycoff',
            '9. Работа в мультифрактале, нарратив движения цены',
            '10. Алгоритм поиска сетапа',
            '11. Модель SMS - инверсия, SBOS, MBOS, IDM',
            '12. Модель MSR - удержание OrderFlow, торговля докоррекции'
          ]
        }
      ]
    }
  ];

  return (
    <section className="py-20 px-4" id="courses">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Курсы обучения
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className={`bg-slate-800/50 backdrop-blur-sm border-2 rounded-3xl p-8 hover:transform hover:scale-105 transition-all duration-300 ${
                index === 0 ? 'border-green-500/50 hover:border-green-400' :
                index === 1 ? 'border-blue-500/50 hover:border-blue-400' :
                'border-purple-500/50 hover:border-purple-400'
              }`}
            >
              {/* Header */}
              <div className="text-center mb-8">
                <div className="text-4xl mb-4">{course.emoji}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{course.title}</h3>
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="text-slate-400 line-through text-xl">{course.oldPrice}</span>
                  <span className={`text-3xl font-bold ${
                    index === 0 ? 'text-green-400' :
                    index === 1 ? 'text-blue-400' :
                    'text-purple-400'
                  }`}>
                    {course.newPrice}
                  </span>
                </div>
                <p className="text-slate-300">
                  <strong>Подходит:</strong> {course.suitable}
                </p>
              </div>
              
              {/* Skills */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-white mb-4">Научишься:</h4>
                <ul className="space-y-2">
                  {course.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-start text-slate-300">
                      <span className="text-purple-400 mr-2">•</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Modules Toggle */}
              <div className="mb-8">
                <button
                  onClick={() => toggleExpanded(course.id)}
                  className="flex items-center justify-between w-full text-left text-lg font-semibold text-white mb-4 hover:text-purple-400 transition-colors"
                >
                  🧩 Программа курса
                  {expandedCourse === course.id ? <ChevronUp /> : <ChevronDown />}
                </button>
                
                {expandedCourse === course.id && (
                  <div className="space-y-4 bg-slate-900/50 rounded-xl p-6 border border-slate-700/50">
                    {course.modules.map((module, moduleIndex) => (
                      <div key={moduleIndex}>
                        <h5 className="text-white font-semibold mb-3">{module.title}:</h5>
                        <ul className="space-y-2">
                          {module.lessons.map((lesson, lessonIndex) => (
                            <li key={lessonIndex} className="flex items-start text-slate-300 text-sm">
                              <span className="text-purple-400 mr-2 mt-1">•</span>
                              {lesson}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {/* CTA Button */}
              <button
                onClick={scrollToRegistration}
                className={`w-full py-4 px-6 rounded-2xl font-semibold text-white transition-all duration-300 transform hover:scale-105 ${
                  index === 0 ? 'bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400' :
                  index === 1 ? 'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400' :
                  'bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400'
                }`}
              >
                👉 {index === 0 ? 'Получить скидку на базовый курс' :
                    index === 1 ? 'Получить скидку на продвинутый курс' :
                    'Получить скидку на Premium'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;