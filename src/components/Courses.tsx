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
      title: 'Базовый курс (старт 4 августа)',
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
            'Виды бирж',
            'Централизованные/Децентрализованные',
            'Оффлайн/Онлайн',
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
            'Платформы для анализа и торговли',
            'Основы риск менеджмента',
            'Риск на сделку',
            'Риск на день, неделю',
            'Психология',
            'Эмоции',
            'Дисциплина',
            'Фомо',
            'Ошибки новичков',
            'Дневник трейдера и зачем он нужен',
            'Торговая стратегия и зачем она нужна',
            'Волатильность и ликвидность',
            'Основные термины',
            'Лонг/Шорт',
            'Спред',
            'Маржа',
            'Своп',
            'Комиссия'
          ]
        }
      ]
    },
    // остальные курсы (advanced и premium) оставлены без изменений
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
                index === 0
                  ? 'border-green-500/50 hover:border-green-400'
                  : index === 1
                  ? 'border-blue-500/50 hover:border-blue-400'
                  : 'border-purple-500/50 hover:border-purple-400'
              }`}
            >
              <div className="text-center mb-8">
                <div className="text-4xl mb-4">{course.emoji}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{course.title}</h3>
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="text-slate-400 line-through text-xl">{course.oldPrice}</span>
                  <span
                    className={`text-3xl font-bold ${
                      index === 0
                        ? 'text-green-400'
                        : index === 1
                        ? 'text-blue-400'
                        : 'text-purple-400'
                    }`}
                  >
                    {course.newPrice}
                  </span>
                </div>
                <p className="text-slate-300">
                  <strong>Подходит:</strong> {course.suitable}
                </p>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-semibold text-white mb-4">Научишься:</h4>
                <ul className="space-y-2">
                  {course.skills.map((skill, i) => (
                    <li key={i} className="flex items-start text-slate-300">
                      <span className="text-purple-400 mr-2">•</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <button
                  onClick={() => toggleExpanded(course.id)}
                  className="flex items-center justify-between w-full text-left text-lg font-semibold text-white mb-4 hover:text-purple-400 transition-colors"
                >
                  📖 Подробнее о курсе
                  {expandedCourse === course.id ? <ChevronUp /> : <ChevronDown />}
                </button>

                {expandedCourse === course.id && (
                  <div className="space-y-4 bg-slate-900/50 rounded-xl p-6 border border-slate-700/50">
                    {course.modules.map((module, j) => (
                      <div key={j}>
                        <h5 className="text-white font-semibold mb-3">{module.title}:</h5>
                        <ul className="space-y-2">
                          {module.lessons.map((lesson, k) => (
                            <li key={k} className="flex items-start text-slate-300 text-sm">
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

              <button
                onClick={scrollToRegistration}
                className={`w-full py-4 px-6 rounded-2xl font-semibold text-white transition-all duration-300 transform hover:scale-105 ${
                  index === 0
                    ? 'bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400'
                    : index === 1
                    ? 'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400'
                    : 'bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400'
                }`}
              >
                👉 {index === 0
                  ? 'Получить скидку на базовый курс'
                  : index === 1
                  ? 'Получить скидку на продвинутый курс'
                  : 'Получить скидку на Premium'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
