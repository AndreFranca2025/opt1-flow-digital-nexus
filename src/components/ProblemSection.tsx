
import React from 'react';
import { AlertCircle, Clock, TrendingDown, Users, FileX, Repeat } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    {
      icon: Clock,
      title: "Perda de Tempo em Tarefas Repetitivas",
      description: "Sua equipe gasta horas fazendo trabalho manual que poderia ser automatizado",
      impact: "até 60% do tempo perdido"
    },
    {
      icon: FileX,
      title: "Sistemas Desconectados",
      description: "Dados espalhados em planilhas e sistemas que não conversam entre si",
      impact: "retrabalho constante"
    },
    {
      icon: TrendingDown,
      title: "Crescimento Limitado",
      description: "Processos manuais impedem o crescimento escalável do seu negócio",
      impact: "oportunidades perdidas"
    },
    {
      icon: Users,
      title: "Equipe Sobrecarregada",
      description: "Colaboradores desmotivados com excesso de tarefas operacionais",
      impact: "alta rotatividade"
    }
  ];

  return (
    <section className="section-spacing bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-red-50 border border-red-100 rounded-full px-4 py-2 mb-6">
            <AlertCircle className="w-4 h-4 text-red-500" />
            <span className="text-red-700 text-sm font-medium">O Problema</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Sua Empresa Está 
            <span className="text-red-500"> Perdendo Dinheiro</span> 
            <br />Todos os Dias
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Enquanto você lê isso, processos ineficientes estão custando tempo, dinheiro e oportunidades. 
            <span className="font-semibold text-gray-800"> É hora de mudar essa realidade.</span>
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <problem.icon className="w-6 h-6 text-red-500" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {problem.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {problem.description}
                  </p>
                  
                  <div className="inline-flex items-center bg-red-50 rounded-full px-3 py-1">
                    <span className="text-red-700 text-sm font-semibold">
                      {problem.impact}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Statistics */}
        <div className="mt-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">
            O Custo Real da Ineficiência
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">R$ 50k</div>
              <div className="text-red-100">perdidos por mês em retrabalho</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">40h</div>
              <div className="text-red-100">semanais em tarefas manuais</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">60%</div>
              <div className="text-red-100">dos erros são humanos</div>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <p className="text-lg">
              <span className="font-bold">Empresas que não automatizam</span> perdem competitividade e ficam para trás no mercado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
