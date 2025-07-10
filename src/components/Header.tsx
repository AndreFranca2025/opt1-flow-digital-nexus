
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-tech rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">O1</span>
            </div>
            <span className="text-2xl font-bold text-gradient">Opt1</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-tech-blue transition-colors font-medium"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('solucoes')}
              className="text-gray-700 hover:text-tech-blue transition-colors font-medium"
            >
              Soluções
            </button>
            <button 
              onClick={() => scrollToSection('casos-sucesso')}
              className="text-gray-700 hover:text-tech-blue transition-colors font-medium"
            >
              Casos de Sucesso
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-gray-700 hover:text-tech-blue transition-colors font-medium"
            >
              Sobre
            </button>
            <button 
              onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre as soluções da Opt1.', '_blank')}
              className="text-gray-700 hover:text-tech-blue transition-colors font-medium"
            >
              Contato
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre as soluções da Opt1.', '_blank')}
              className="btn-gradient"
            >
              Falar com Especialista
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left px-4 py-2 text-gray-700 hover:text-tech-blue transition-colors font-medium"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('solucoes')}
                className="text-left px-4 py-2 text-gray-700 hover:text-tech-blue transition-colors font-medium"
              >
                Soluções
              </button>
              <button 
                onClick={() => scrollToSection('casos-sucesso')}
                className="text-left px-4 py-2 text-gray-700 hover:text-tech-blue transition-colors font-medium"
              >
                Casos de Sucesso
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-left px-4 py-2 text-gray-700 hover:text-tech-blue transition-colors font-medium"
              >
                Sobre
              </button>
              <button 
                onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre as soluções da Opt1.', '_blank')}
                className="text-left px-4 py-2 text-gray-700 hover:text-tech-blue transition-colors font-medium"
              >
                Contato
              </button>
              <div className="px-4 pt-2">
                <Button 
                  onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre as soluções da Opt1.', '_blank')}
                  className="btn-gradient w-full"
                >
                  Falar com Especialista
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
