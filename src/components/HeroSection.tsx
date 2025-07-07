
import React from 'react';
import { Play, ArrowRight, Zap, Target, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Quero transformar meu negócio com automações da Opt1.', '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0 bg-gradient-subtle opacity-60"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-tech-blue/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-energy-orange/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-tech-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="relative container mx-auto px-4 text-center z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-8 animate-fade-in">
            <Zap className="w-4 h-4 text-energy-orange" />
            <span className="text-white/90 text-sm font-medium">Líderes em Automação Digital</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            Transforme Seu Negócio com
            <span className="block text-gradient bg-gradient-to-r from-tech-blue to-energy-orange bg-clip-text text-transparent">
              Automações Inteligentes
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Conectamos seus sistemas, otimizamos processos e multiplicamos sua produtividade com tecnologia de ponta.
            <span className="block mt-2 text-energy-orange font-semibold">Resultados reais. Crescimento sustentável.</span>
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-white/70">Automações Implementadas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">80%</div>
              <div className="text-white/70">Redução de Tempo Manual</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">200+</div>
              <div className="text-white/70">Empresas Transformadas</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              onClick={handleWhatsAppClick}
              className="btn-gradient group px-8 py-4 text-lg"
            >
              Começar Agora
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline"
              className="btn-outline-gradient px-8 py-4 text-lg bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white hover:text-tech-blue"
              onClick={() => document.getElementById('demo-video')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Play className="mr-2 w-5 h-5" />
              Ver Demonstração
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <p className="text-white/60 text-sm mb-6">Confiado por empresas líderes do mercado</p>
            <div className="flex items-center justify-center space-x-8 opacity-60">
              <div className="w-24 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-semibold">EMPRESA 1</span>
              </div>
              <div className="w-24 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-semibold">EMPRESA 2</span>
              </div>
              <div className="w-24 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-semibold">EMPRESA 3</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
