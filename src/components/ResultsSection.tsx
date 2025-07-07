
import React from 'react';
import { TrendingUp, DollarSign, Clock, Users, Star, Quote } from 'lucide-react';

const ResultsSection = () => {
  const results = [
    {
      icon: DollarSign,
      metric: "300%",
      label: "Aumento no ROI",
      description: "Retorno sobre investimento em até 6 meses"
    },
    {
      icon: Clock,
      metric: "80%",
      label: "Redução de Tempo",
      description: "Menos tempo em tarefas repetitivas"
    },
    {
      icon: TrendingUp,
      metric: "250%",
      label: "Crescimento",
      description: "Aumento na capacidade produtiva"
    },
    {
      icon: Users,
      metric: "95%",
      label: "Satisfação",
      description: "Das equipes com automações"
    }
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      position: "CEO, TechCorp",
      company: "Empresa de Tecnologia",
      content: "A Opt1 transformou completamente nossos processos. Reduzimos 70% do tempo em tarefas manuais e aumentamos nossa produtividade drasticamente.",
      rating: 5
    },
    {
      name: "João Santos",
      position: "Diretor Operacional",
      company: "LogiFlow Solutions",
      content: "Excelente trabalho! As integrações que fizeram conectaram todos nossos sistemas. Agora temos uma visão completa do negócio em tempo real.",
      rating: 5
    },
    {
      name: "Ana Costa",
      position: "Gerente de TI",
      company: "InnovaCorp",
      content: "Profissionais altamente qualificados. Entregaram uma solução robusta que superou nossas expectativas. Recomendo sem hesitar!",
      rating: 5
    }
  ];

  return (
    <section id="casos-sucesso" className="section-spacing bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-50 border border-green-100 rounded-full px-4 py-2 mb-6">
            <TrendingUp className="w-4 h-4 text-green-500" />
            <span className="text-green-700 text-sm font-medium">Resultados Reais</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Empresas que 
            <span className="text-gradient"> Transformaram</span>
            <br />Seus Negócios
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Veja os resultados extraordinários que nossos clientes alcançaram com nossas soluções de automação.
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {results.map((result, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-tech rounded-xl flex items-center justify-center mx-auto mb-6">
                <result.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="text-4xl font-bold text-gradient mb-3">
                {result.metric}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {result.label}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {result.description}
              </p>
            </div>
          ))}
        </div>

        {/* Case Study Highlight */}
        <div className="bg-gradient-tech rounded-3xl p-8 md:p-12 text-white mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Caso de Sucesso: E-commerce Líder
              </h3>
              <p className="text-xl text-white/90">
                Como automatizamos 15 processos e aumentamos a eficiência em 400%
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">15</div>
                <div className="text-white/80">Processos Automatizados</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">6 meses</div>
                <div className="text-white/80">Tempo de Implementação</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">R$ 2M</div>
                <div className="text-white/80">Economia Anual</div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <p className="text-lg text-center">
                "A parceria com a Opt1 foi fundamental para nosso crescimento. Conseguimos escalar o negócio sem aumentar proporcionalmente a equipe operacional."
              </p>
              <div className="text-center mt-4">
                <strong>- CEO, Empresa do E-commerce</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              O que Nossos Clientes Dizem
            </h3>
            <p className="text-xl text-gray-600">
              Depoimentos reais de empresas que transformaram seus resultados
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <Quote className="w-8 h-8 text-gray-300 mb-4" />
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t border-gray-100 pt-4">
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.position}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
