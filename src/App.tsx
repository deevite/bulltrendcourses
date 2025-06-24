import React, { useState } from 'react';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Courses from './components/Courses';
import Testimonials from './components/Testimonials';
import Comparison from './components/Comparison';
import Registration from './components/Registration';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>
      
      <div className="relative z-10">
        <Hero />
        <Benefits />
        <Courses />
        <Testimonials />
        <Comparison />
        <Registration />
      </div>
    </div>
  );
}

export default App;