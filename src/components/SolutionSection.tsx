
import React from 'react';
import { Zap, Settings, BarChart3, Shield, Workflow, CheckCircle, ArrowRight, Building2, Stethoscope, Pizza, Car, ShoppingBag, Users2 } from 'lucide-react';
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
      icon: Settings,
      title: "Integração de CRMs & Sistemas",
      description: "Conectamos HubSpot, Salesforce, Pipedrive, RD Station e todos os seus sistemas",
      benefits: ["Sincronização automática", "Dados unificados", "Workflow inteligente"]
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

        {/* CRM Integrations */}
        <div className="text-center mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Integrações com os Principais CRMs
          </h3>
          <p className="text-xl text-gray-600 mb-12">
            Conectamos automaticamente com as plataformas líderes do mercado
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { name: "HubSpot", logo: "🎯" },
              { name: "Salesforce", logo: "☁️" },
              { name: "Pipedrive", logo: "📊" },
              { name: "RD Station", logo: "🚀" },
              { name: "Bitrix24", logo: "💼" },
              { name: "ActiveCampaign", logo: "📧" },
              { name: "Zoho CRM", logo: "🔧" },
              { name: "Monday.com", logo: "📋" }
            ].map((crm, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">{crm.logo}</div>
                <div className="font-semibold text-gray-800">{crm.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Segments */}
        <div className="bg-gradient-subtle rounded-3xl p-8 md:p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Segmentos que Atendemos
            </h3>
            <p className="text-xl text-gray-600">
              Soluções especializadas para diversos tipos de negócio
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Stethoscope,
                title: "Clínicas Médicas",
                description: "Agendamentos, prontuários e integração com convênios",
                automations: ["Confirmação automática", "Lembretes de consulta", "Controle de estoque"]
              },
              {
                icon: Pizza,
                title: "Pizzarias & Restaurantes",
                description: "Pedidos, delivery e gestão de cardápio integrados",
                automations: ["Pedidos WhatsApp", "Controle delivery", "Gestão de estoque"]
              },
              {
                icon: Car,
                title: "Concessionárias",
                description: "Vendas, pós-venda e gestão de leads automotivos",
                automations: ["Qualificação de leads", "Follow-up automático", "Agendamento test-drive"]
              },
              {
                icon: ShoppingBag,
                title: "E-commerce",
                description: "Vendas online, estoque e relacionamento com cliente",
                automations: ["Abandono de carrinho", "Upsell automático", "Gestão de reviews"]
              },
              {
                icon: Building2,
                title: "Imobiliárias",
                description: "Captação, visitas e processo de vendas/locação",
                automations: ["Captação de leads", "Agendamento visitas", "Contratos digitais"]
              },
              {
                icon: Users2,
                title: "Consultoria & Serviços",
                description: "Gestão de projetos, clientes e faturamento",
                automations: ["Propostas automáticas", "Controle de horas", "Cobrança recorrente"]
              }
            ].map((segment, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="w-14 h-14 bg-gradient-tech rounded-xl flex items-center justify-center mb-4">
                  <segment.icon className="w-7 h-7 text-white" />
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3">{segment.title}</h4>
                <p className="text-gray-600 mb-4 leading-relaxed">{segment.description}</p>
                
                <div className="space-y-2">
                  {segment.automations.map((automation, autoIndex) => (
                    <div key={autoIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{automation}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
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
