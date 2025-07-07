
import React from 'react';
import { Zap, Settings, BarChart3, Shield, Workflow, Integration, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SolutionSection = () => {
  const solutions = [
    {
      icon: Workflow,
      title: "Automação de Processos",
      description: "Automatizamos fluxos de trabalho complexos, eliminando tarefas manuais e reduzindo erros",
      benefits: ["Redução de 80% no tempo", "Zero erros manuais", "Maior produtividade"]
    },
    {
      icon: Integration,
      title: "Integração de Sistemas",
      description: "Conectamos todos os seus sistemas para que trabalhem em harmonia",
      benefits: ["Dados centralizados", "Visão única do negócio", "Decisões mais rápidas"]
    },
    {
      icon: BarChart3,
      title: "Inteligência de Negócios",
      description: "Transformamos dados em insights acionáveis para seu crescimento",
      benefits: ["Relatórios automáticos", "Alertas inteligentes", "Análises preditivas"]
    },
    {
      icon: Shield,
      title: "Segurança & Compliance",
      description: "Garantimos que suas automações sejam seguras e estejam em conformidade",
      benefits: ["Dados protegidos", "Auditoria completa", "Conformidade LGPD"]
    }
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511999999999?text=Quero conhecer as soluções da Opt1 para minha empresa!', '_blank');
  };

  return (
    <section id="solucoes" className="section-spacing bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-50 border border-green-100 rounded-full px-4 py-2 mb-6">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span className="text-green-700 text-sm font-medium">A Solução</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Transforme Problemas em
            <span className="text-gradient"> Oportunidades</span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Nossa metodologia exclusiva identifica gargalos, cria soluções personalizadas e 
            implementa automações que geram resultados imediatos.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-tech rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <solution.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {solution.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {solution.description}
              </p>
              
              <div className="space-y-3">
                {solution.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Process Overview */}
        <div className="bg-gradient-subtle rounded-3xl p-8 md:p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Nossa Metodologia Exclusiva
            </h3>
            <p className="text-xl text-gray-600">
              Processo comprovado em 3 etapas para garantir resultados
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Diagnóstico Completo",
                description: "Analisamos seus processos atuais e identificamos oportunidades de melhoria"
              },
              {
                step: "02",
                title: "Desenvolvimento Personalizado",
                description: "Criamos soluções sob medida para suas necessidades específicas"
              },
              {
                step: "03",
                title: "Implementação & Suporte",
                description: "Colocamos tudo em funcionamento e oferecemos suporte contínuo"
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-tech rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">{process.step}</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h4>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-tech rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Pronto para Transformar Seu Negócio?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Agende uma consultoria gratuita e descubra como podemos automatizar seus processos
          </p>
          
          <Button 
            onClick={handleWhatsAppClick}
            className="bg-white text-tech-blue hover:bg-gray-100 font-semibold py-4 px-8 text-lg group"
          >
            Agendar Consultoria Gratuita
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
