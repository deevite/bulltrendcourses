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
          lessons: ['Что такое трейдинг', 'История трейдинга']
        }
      ]
    },
    {
      id: 'advanced',
      emoji: '📈',
      title: 'Продвинутый курс (старт 30 июня)',
      oldPrice: '$559',
      newPrice: '$500',
      suitable: 'тем, кто уже торгует, но без системы',
      skills: ['Smart Money мышлению', 'Как работает крупный участник'],
      modules: [
        {
          title: 'Вводное',
          lessons: []
        },
        {
          title: 'Занятие 1',
          lessons: [
            'Знакомство с участниками',
            'Обзор курса и структуры',
            'Настрой на мышление Smart Money',
            'Концепция рынка и SMC'
          ]
        },
        {
          title: 'Занятие 2',
          lessons: [
            'Что такое финансовый рынок, какие участники',
            'Почему SMC — это не «паттерны», а мышление',
            'Мотивация крупного участника',
            'Поведение толпы и как его эксплуатируют',
            'Ликвидность'
          ]
        },
        {
          title: 'Занятие 3',
          lessons: [
            'Что такое ликвидность',
            'Типы ликвидности',
            'Типы ордеров: Limit, Market',
            'Структура стакана и его логика',
            'Формирование потока приказов – Часть 1'
          ]
        },
        {
          title: 'Занятие 4',
          lessons: [
            'Что такое STB, BTS',
            'Методы сбора ликвидности',
            'Основы Order Flow',
            'Формирование потока приказов – Часть 2'
          ]
        },
        {
          title: 'Занятие 5',
          lessons: [
            'Типы ликвидности: SSL, BSL, ERL, IRL',
            'Связь этих понятий с практикой',
            'Визуализация на графике',
            'Рыночная структура – Часть 1'
          ]
        },
        {
          title: 'Занятие 6',
          lessons: [
            'Поток приказов через 5-свечную формацию',
            'Swing структура',
            'Рыночная структура – Часть 2'
          ]
        },
        {
          title: 'Занятие 7',
          lessons: [
            'Внешняя и внутренняя ликвидность',
            'MNR структура',
            'Зоны интереса – Часть 1'
          ]
        },
        {
          title: 'Занятие 8',
          lessons: [
            'POI, Order Block, Breaker Block',
            'Валидация POI через рыночную структуру',
            'Зоны интереса – Часть 2'
          ]
        },
        {
          title: 'Занятие 9',
          lessons: [
            'FVG, IMB, P|D',
            'Зоны открытия: день, неделя, месяц и т.п.',
            'Торговая модель'
          ]
        },
        {
          title: 'Занятие 10',
          lessons: [
            'Вход в 3-фрактальной системе',
            'Торговля по Order Flow с целью',
            'Финальная проверка понимания модели'
          ]
        }
      ]
    },
    {
      id: 'premium',
      emoji: '🔥',
      title: 'Premium курс (старт 4 августа)',
      oldPrice: '$770',
      newPrice: '$700',
      suitable: 'тем, кто хочет профессионально работать на рынке',
      skills: ['Wycoff', 'Инверсия', 'Стратегии'],
      modules: [
        {
          title: '1. Стратегии',
          lessons: ['Стадии завершения коррекции', 'SUB|MNR|SUB торговля']
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
        {/* остальной JSX код остаётся как есть */}
      </div>
    </section>
  );
};

export default Courses;