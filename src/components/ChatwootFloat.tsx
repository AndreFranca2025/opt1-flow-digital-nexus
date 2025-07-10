
import React, { useState, useEffect } from 'react';
import { UserRound, X } from 'lucide-react';

const ChatwootFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Show tooltip after another 2 seconds
      setTimeout(() => setShowTooltip(true), 2000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Auto-hide tooltip after 5 seconds
    if (showTooltip) {
      const timer = setTimeout(() => {
        setShowTooltip(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showTooltip]);

  const handleChatwootClick = () => {
    // Aqui você deve configurar o script do Chatwoot
    // Por enquanto, vou abrir uma janela de chat genérica
    // Substitua por sua configuração real do Chatwoot
    if ((window as any).chatwootSDK) {
      (window as any).chatwootSDK.toggle();
    } else {
      // Fallback caso o Chatwoot não esteja carregado
      console.log('Chatwoot não está carregado');
    }
    setShowTooltip(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Tooltip */}
      {showTooltip && (
        <div className="fixed bottom-24 right-4 z-50 animate-fade-in">
          <div className="bg-white rounded-lg shadow-2xl border border-gray-200 p-4 max-w-xs relative">
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -top-2 -right-2 w-6 h-6 bg-gray-500 text-white rounded-full flex items-center justify-center text-xs hover:bg-gray-600 transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
            
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <UserRound className="w-5 h-5 text-white" />
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">
                  Especialista Opt1
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Olá! 👋 Precisa de ajuda? Fale conosco agora mesmo!
                </p>
              </div>
            </div>
            
            {/* Speech bubble arrow */}
            <div className="absolute bottom-0 right-6 transform translate-y-1/2 rotate-45 w-3 h-3 bg-white border-r border-b border-gray-200"></div>
          </div>
        </div>
      )}

      {/* Chatwoot Button */}
      <button
        onClick={handleChatwootClick}
        className="chatwoot-float group bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse-glow"
        aria-label="Atendimento Online"
      >
        <UserRound className="w-6 h-6 group-hover:scale-110 transition-transform" />
        
        {/* Pulse rings */}
        <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-20"></div>
        <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-10" style={{ animationDelay: '0.5s' }}></div>
      </button>
    </>
  );
};

export default ChatwootFloat;
