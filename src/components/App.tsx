import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Star, Users, TrendingUp, Award, Calendar, Clock, CheckCircle, ArrowRight, Video, FileText, MessageSquare } from 'lucide-react';

// Telegram Icon Component
const TelegramIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

// Zoom Icon Component
const ZoomIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M1.5 12C1.5 6.201 6.201 1.5 12 1.5S22.5 6.201 22.5 12 17.799 22.5 12 22.5 1.5 17.799 1.5 12zm8.4-3.6v7.2l5.4-3.6-5.4-3.6z"/>
  </svg>
);

function App() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [expandedLesson, setExpandedLesson] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showAdvancedDetails, setShowAdvancedDetails] = useState(false);
  const [showPremiumDetails, setShowPremiumDetails] = useState(false);

  const testimonials = [
    {
      name: "Виктория",
      text: "Кстати по вайкоффу у меня были аналогичные мысли до бултренда. Не воспринимала его серьезно и в практике не вписывала.",
      rating: 5
    },
    {
      name: "Александр М.",
      text: "Отличная программа! За 2 месяца полностью изменил свой подход к трейдингу. Результаты превзошли ожидания.",
      rating: 5
    },
    {
      name: "Елена К.",
      text: "Команда Bulltrend действительно профессионалы. Четкие объяснения, практические примеры, постоянная поддержка.",
      rating: 5
    },
    {
      name: "Дмитрий П.",
      text: "Smart Money концепция наконец стала понятной. Рекомендую всем, кто хочет торговать осознанно.",
      rating: 5
    }
  ];

  const advancedLessons = [
    {
      title: "Вводное",
      subtitle: "Занятие 1",
      details: [
        "Знакомство с участниками",
        "Обзор курса и структуры",
        "Настрой на мышление Smart Money"
      ]
    },
    {
      title: "Концепция рынка и SMC",
      subtitle: "Занятие 2",
      details: [
        "Что такое финансовый рынок, какие участники",
        "Почему SMC — это не «паттерны», а мышление",
        "Мотивация крупного участника",
        "Поведение толпы и как его эксплуатируют"
      ]
    },
    {
      title: "Ликвидность",
      subtitle: "Занятие 3",
      details: [
        "Что такое ликвидность",
        "Типы ликвидности",
        "Типы ордеров: Limit, Market",
        "Структура стакана и его логика"
      ]
    },
    {
      title: "Формирование потока приказов – Часть 1",
      subtitle: "Занятие 4",
      details: [
        "Что такое STB, BTS",
        "Методы сбора ликвидности",
        "Основы Order Flow"
      ]
    },
    {
      title: "Формирование потока приказов – Часть 2",
      subtitle: "Занятие 5",
      details: [
        "Типы ликвидности: SSL, BSL, ERL, IRL",
        "Связь этих понятий с практикой",
        "Визуализация на графике"
      ]
    },
    {
      title: "Рыночная структура – Часть 1",
      subtitle: "Занятие 6",
      details: [
        "Поток приказов через 5-свечную формацию",
        "Swing структура"
      ]
    },
    {
      title: "Рыночная структура – Часть 2",
      subtitle: "Занятие 7",
      details: [
        "Внешняя и внутренняя ликвидность",
        "MNR структура"
      ]
    },
    {
      title: "Зоны интереса – Часть 1",
      subtitle: "Занятие 8",
      details: [
        "POI, Order Block, Breaker Block",
        "Валидация POI через рыночную структуру"
      ]
    },
    {
      title: "Зоны интереса – Часть 2",
      subtitle: "Занятие 9",
      details: [
        "FVG, IMB, P|D",
        "Зоны открытия: день, неделя, месяц и т.п."
      ]
    },
    {
      title: "Торговая модель",
      subtitle: "Занятие 10",
      details: [
        "Вход в 3-фрактальной системе",
        "Торговля по Order Flow с целью",
        "Финальная проверка понимания модели"
      ]
    }
  ];

  const premiumLessons = [
    {
      title: "Стадии завершения коррекции",
      details: [
        "MNR структура как цель, торговля коррекции",
        "SUB|MNR|SUB торговля основного тренда"
      ]
    },
    {
      title: "Инверсия имбаланса",
      details: [
        "inv как нарратив без слома структуры HTF",
        "inv как инструмент для входа LTF"
      ]
    },
    {
      title: "IDM",
      details: [
        "подтверждение зоны POI",
        "внешний IDM|внутренний IDM"
      ]
    },
    {
      title: "Аккумуляция Wycoff",
      details: [
        "наилучшие торговые фазы для построения стратегии",
        "расширение по Wycoff"
      ]
    },
    {
      title: "Дистрибьюция Wycoff",
      details: [
        "наилучшие торговые фазы для построения стратегии",
        "расширение по Wycoff"
      ]
    },
    {
      title: "Реаккумуляция Wycoff",
      details: []
    },
    {
      title: "Редистрибьюция Wycoff",
      details: []
    },
    {
      title: "Работа в мультифрактале",
      details: [
        "построение нарратива движения цены с помощью структуры рынка и Wycoff"
      ]
    },
    {
      title: "Алгоритм поиска сетапа",
      details: []
    },
    {
      title: "Модель SMS",
      details: [
        "инверсия, SBOS, MBOS, IDM"
      ]
    },
    {
      title: "Модель MSR",
      details: [
        "удержание OrderFlow, торговля докорреции"
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleApplicationClick = () => {
    window.open('https://web.telegram.org/a/#1615820349', '_blank');
  };

  const scrollToDetails = (detailsType) => {
    setTimeout(() => {
      const element = document.getElementById(`${detailsType}-details`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <img src="/src/assets/лого.png" alt="Bulltrend" className="h-8 w-auto" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Bulltrend
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="hover:text-purple-400 transition-colors">О программе</button>
              <button onClick={() => scrollToSection('mentors')} className="hover:text-purple-400 transition-colors">Менторы</button>
              <button onClick={() => scrollToSection('program')} className="hover:text-purple-400 transition-colors">Программа</button>
              <button onClick={() => scrollToSection('pricing')} className="hover:text-purple-400 transition-colors">Тарифы</button>
              <button onClick={() => scrollToSection('testimonials')} className="hover:text-purple-400 transition-colors">Отзывы</button>
            </div>
            <button 
              onClick={handleApplicationClick}
              className="bg-gradient-to-r from-purple-600 to-cyan-600 px-6 py-2 rounded-full hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
            >
              Оставить заявку
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Smart Money
            </span>
            <br />
            <span className="text-white">Mentorship 2.0</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Усовершенствованная программа обучения трейдингу от команды Bulltrend Team
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
              <div className="text-3xl font-bold text-purple-400 mb-2">350+</div>
              <div className="text-gray-300">Выпускников</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
              <div className="text-3xl font-bold text-cyan-400 mb-2">119%</div>
              <div className="text-gray-300">Прибыли в год</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
              <div className="text-3xl font-bold text-pink-400 mb-2">9 лет</div>
              <div className="text-gray-300">В трейдинге</div>
            </div>
          </div>

          <button 
            onClick={handleApplicationClick}
            className="bg-gradient-to-r from-purple-600 to-cyan-600 px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Начать обучение
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              О программе
            </span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-purple-400">Mentorship 2.0</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Mentorship 2.0 - это усовершенствованная программа от нашей команды Bulltrend Team. 
                В данной программе рассматриваются легкие и адаптивные инструменты чтения контекста, 
                эффективные модели для открытия внутридневных позиций.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Материал данного Mentorship вбирает в себя все методы анализа нашей команды, 
                накопленные за годы торговли. Все уроки проводятся в живом формате на платформе Zoom 
                с возможностью задавать вопросы в режиме реального времени.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <ZoomIcon className="w-5 h-5 text-blue-400" />
                  <span>Живые уроки на платформе Zoom в режиме реального времени</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FileText className="w-5 h-5 text-green-400" />
                  <span>PDF материалы после каждого занятия для закрепления</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Video className="w-5 h-5 text-red-400" />
                  <span>Записи всех уроков в Telegram группе для повторного изучения</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-purple-400" />
                  <span>Занятия по понедельникам и пятницам в 17:00 МСК</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageSquare className="w-5 h-5 text-cyan-400" />
                  <span>Поддержка и ответы на вопросы в закрытой Telegram группе</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
                <h4 className="text-xl font-semibold mb-4 text-cyan-400">Market Drill</h4>
                <p className="text-gray-300 mb-4">
                  2 месячный доступ к практическим торговым сессиям. 2 дня практики и 3 дня торговли 
                  на реальном рынке вместе с командой Bulltrend Team.
                </p>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>Понедельник и пятница в 11:00 МСК</span>
                </div>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
                <h4 className="text-xl font-semibold mb-4 text-purple-400">Smart Money DAG</h4>
                <p className="text-gray-300 mb-4">
                  2 месячный доступ к закрытому коммьюнити 250+ опытных трейдеров. 
                  Публикация сделок команды, видео-анализы 3 дня в неделю.
                </p>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span>Живая торговля по вторникам в 12:00 МСК</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section id="mentors" className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Наши менторы
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-purple-400">
                <img 
                  src="/src/assets/превью саша.png" 
                  alt="Александр" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-purple-400">Александр</h3>
              <p className="text-cyan-400 mb-4">Эксперт по техническому анализу</p>
              <p className="text-gray-300 mb-2">4 года опыта в трейдинге</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Эксперт по техническому анализу и Smart Money концепциям. 
                Специализируется на внутридневной торговле и обучении продвинутым стратегиям.
              </p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-cyan-400">
                <img 
                  src="/src/assets/адилет превью.png" 
                  alt="Адилет" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-cyan-400">Адилет</h3>
              <p className="text-purple-400 mb-4">Ведущий трейдер по обучению</p>
              <p className="text-gray-300 mb-2">5 лет опыта в трейдинге</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Ведущий трейдер по обучению трейдингу и ментальной подготовке. 
                Автор уникальных методик анализа рынка и управления рисками.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section id="program" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Программа обучения
            </span>
          </h2>
          
          <div className="text-center mb-12">
            <p className="text-xl text-gray-300">
              Выберите тариф, чтобы увидеть подробную программу обучения
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Тарифы
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Advanced Plan */}
            <div 
              className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 cursor-pointer ${
                selectedPlan === 'advanced' 
                  ? 'border-cyan-400 shadow-lg shadow-cyan-400/20 scale-105' 
                  : 'border-gray-700 hover:border-cyan-400/50'
              }`}
              onClick={() => setSelectedPlan(selectedPlan === 'advanced' ? null : 'advanced')}
            >
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Продвинутый</h3>
              <div className="text-4xl font-bold mb-6">$559</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>1 месяц обучения + 2 месяца доступ</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>10 занятий по Smart Money</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>PDF материалы и записи</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Market Drill доступ</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Smart Money DAG доступ</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Живая торговля</span>
                </li>
              </ul>
              
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setShowAdvancedDetails(!showAdvancedDetails);
                  if (!showAdvancedDetails) {
                    scrollToDetails('advanced');
                  }
                }}
                className="w-full mb-4 bg-gray-700 hover:bg-gray-600 py-2 rounded-full transition-colors text-sm"
              >
                Подробнее о курсе
              </button>
              
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  handleApplicationClick();
                }}
                className="w-full bg-gradient-to-r from-cyan-600 to-cyan-700 py-3 rounded-full hover:from-cyan-700 hover:to-cyan-800 transition-all duration-300"
              >
                Оставить заявку
              </button>
            </div>

            {/* Premium Plan */}
            <div 
              className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 cursor-pointer relative ${
                selectedPlan === 'premium' 
                  ? 'border-purple-400 shadow-lg shadow-purple-400/20 scale-105' 
                  : 'border-gray-700 hover:border-purple-400/50'
              }`}
              onClick={() => setSelectedPlan(selectedPlan === 'premium' ? null : 'premium')}
            >
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-1 rounded-full text-sm font-semibold">
                  Премиум
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Премиум</h3>
              <div className="text-4xl font-bold mb-6">$770</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Все из продвинутого тарифа</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>12 дополнительных продвинутых уроков</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Методы Wyckoff</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Продвинутые торговые модели</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Мультифрактальный анализ</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Алгоритм поиска сетапов</span>
                </li>
              </ul>
              
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setShowPremiumDetails(!showPremiumDetails);
                  if (!showPremiumDetails) {
                    scrollToDetails('premium');
                  }
                }}
                className="w-full mb-4 bg-gray-700 hover:bg-gray-600 py-2 rounded-full transition-colors text-sm"
              >
                Подробнее о курсе
              </button>
              
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  handleApplicationClick();
                }}
                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 py-3 rounded-full hover:from-purple-700 hover:to-purple-800 transition-all duration-300"
              >
                Оставить заявку
              </button>
            </div>
          </div>

          {/* Advanced Course Details */}
          {showAdvancedDetails && (
            <div id="advanced-details" className="mt-12 max-w-6xl mx-auto">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400">
                <h3 className="text-2xl font-bold mb-6 text-cyan-400">Программа продвинутого курса</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {advancedLessons.map((lesson, index) => (
                    <div key={index} className="bg-gray-700/50 rounded-xl p-4">
                      <h4 className="text-lg font-semibold text-cyan-300 mb-2">
                        {lesson.title}
                      </h4>
                      <p className="text-gray-400 text-sm mb-3">{lesson.subtitle}</p>
                      <ul className="space-y-1">
                        {lesson.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start space-x-2">
                            <CheckCircle className="w-3 h-3 text-green-400 mt-1 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Premium Course Details */}
          {showPremiumDetails && (
            <div id="premium-details" className="mt-12 max-w-6xl mx-auto">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-400">
                <h3 className="text-2xl font-bold mb-6 text-purple-400">Дополнительные уроки премиум курса</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {premiumLessons.map((lesson, index) => (
                    <div key={index} className="bg-gray-700/50 rounded-xl p-4">
                      <h4 className="text-lg font-semibold text-purple-300 mb-3">
                        {index + 1}. {lesson.title}
                      </h4>
                      {lesson.details.length > 0 && (
                        <ul className="space-y-1">
                          {lesson.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start space-x-2">
                              <CheckCircle className="w-3 h-3 text-green-400 mt-1 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Отзывы учеников
            </span>
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 relative">
              <div className="absolute -top-3 left-8 w-6 h-6 bg-gray-800 transform rotate-45 border-l border-t border-gray-700"></div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-purple-400">
                    {testimonials[currentTestimonial].name}
                  </p>
                  <p className="text-gray-400 text-sm">Выпускник программы</p>
                </div>
                
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentTestimonial ? 'bg-purple-400' : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <button 
                onClick={() => window.open('https://web.telegram.org/a/#-1001370993888', '_blank')}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-cyan-600 px-6 py-3 rounded-full hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                <TelegramIcon className="w-5 h-5" />
                <span>Все отзывы</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Свяжитесь с нами
            </span>
          </h2>
          
          {/* Mobile-friendly social links */}
<div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-12">
  <a 
    href="https://t.me/BullTrendChannel" 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-700 hover:border-purple-400 transition-colors w-full sm:w-auto justify-center"
  >
    <TelegramIcon className="w-6 h-6" />
    <span>Telegram</span>
  </a>

  {/* Новостной Telegram (Отзывы) */}
  <a 
    href="https://t.me/+5V0NUD70uO9iOTNi" 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-700 hover:border-blue-400 transition-colors w-full sm:w-auto justify-center"
  >
    <TelegramIcon className="w-6 h-6" />
    <span>Отзывы Telegram</span>
  </a>

  <a 
    href="https://www.instagram.com/dagaziev.r/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-700 hover:border-pink-400 transition-colors w-full sm:w-auto justify-center"
  >
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
    <span>Instagram</span>
  </a>

  <a 
    href="https://www.youtube.com/@dagaziev1872/featured" 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-700 hover:border-red-400 transition-colors w-full sm:w-auto justify-center"
  >
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
    <span>YouTube</span>
  </a>
</div>

<button 
  onClick={handleApplicationClick}
  className="bg-gradient-to-r from-purple-600 to-cyan-600 px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
>
  Начать обучение сегодня
</button>