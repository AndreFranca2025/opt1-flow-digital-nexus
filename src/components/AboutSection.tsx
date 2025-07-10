import React from 'react';
import { Users, Target, Award, Rocket, CheckCircle, Clock, Shield, Zap } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Foco em Resultados",
      description: "Cada automação é pensada para gerar impacto real no seu negócio"
    },
    {
      icon: Shield,
      title: "Confiabilidade",
      description: "Soluções robustas e seguras que você pode confiar"
    },
    {
      icon: Zap,
      title: "Agilidade",
      description: "Implementação rápida sem comprometer a qualidade"
    },
    {
      icon: Users,
      title: "Parceria",
      description: "Trabalhamos lado a lado com sua equipe para o sucesso"
    }
  ];

  const stats = [
    { number: "500+", label: "Projetos Entregues" },
    { number: "200+", label: "Empresas Atendidas" },
    { number: "5 anos", label: "De Experiência" },
    { number: "95%", label: "Clientes Satisfeitos" }
  ];

  return (
    <section id="sobre" className="section-spacing bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2 mb-6">
            <Users className="w-4 h-4 text-blue-500" />
            <span className="text-blue-700 text-sm font-medium">Sobre a Opt1</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Especialistas em
            <span className="text-gradient"> Transformação Digital</span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Somos uma empresa especializada em automações e integrações que conecta tecnologia com resultados reais. 
            Nossa missão é simplificar processos complexos e potencializar o crescimento dos nossos clientes.
          </p>
        </div>

        {/* Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Nossa História
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Fundada em 2019, a Opt1 nasceu da necessidade de simplificar processos empresariais 
                através de tecnologia. Nossos fundadores, com mais de 15 anos de experiência em TI 
                e automação, identificaram uma lacuna no mercado: empresas que precisavam de soluções 
                personalizadas mas não encontravam parceiros especializados.
              </p>
              <p>
                Desde então, ajudamos mais de 200 empresas a automatizar seus processos, 
                integrar sistemas e otimizar operações. Nossa abordagem combina expertise técnica 
                com compreensão profunda dos desafios empresariais.
              </p>
              <p>
                Hoje, somos reconhecidos como líderes em automação digital, oferecendo soluções 
                que vão desde integrações simples até transformações completas de processos.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-subtle rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-gradient mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Nossos Valores
            </h3>
            <p className="text-xl text-gray-600">
              Os princípios que guiam nosso trabalho e relacionamento com clientes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center card-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-tech rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h4>
                
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission */}
        <div className="bg-gradient-tech rounded-3xl p-8 md:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <Award className="w-16 h-16 mx-auto mb-6 opacity-80" />
            
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Nossa Missão
            </h3>
            
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Democratizar o acesso a tecnologias de automação, permitindo que empresas de todos os tamanhos 
              possam otimizar seus processos, reduzir custos e focar no que realmente importa: 
              <strong className="text-white"> o crescimento do negócio</strong>.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>Soluções Personalizadas</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>Entrega Rápida</span>
              </div>
              <div className="flex items-center space-x-2">
                <Rocket className="w-5 h-5" />
                <span>Resultados Garantidos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;