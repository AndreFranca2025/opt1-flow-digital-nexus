
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, UserRound } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Olá! Vim do site da Opt1.
    
Nome: ${formData.name}
Email: ${formData.email}
Empresa: ${formData.company}
Telefone: ${formData.phone}

Mensagem: ${formData.message}`;

    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="section-spacing bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Vamos 
            <span className="text-gradient"> Transformar</span>
            <br />Seu Negócio Juntos?
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Entre em contato conosco e descubra como podemos automatizar seus processos 
            e multiplicar seus resultados.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Fale com Nossos Especialistas
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Nossa equipe está pronta para entender suas necessidades e criar a solução perfeita para sua empresa.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-tech rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Telefone</h4>
                    <p className="text-gray-600">(11) 99999-9999</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-tech rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">contato@opt1.com.br</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-tech rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Endereço</h4>
                    <p className="text-gray-600">São Paulo, SP - Brasil</p>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-gradient-subtle rounded-xl p-6 border border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-2">Tempo de Resposta</h4>
                <p className="text-gray-600">
                  Respondemos em até <span className="font-semibold text-tech-blue">2 horas</span> durante horário comercial
                </p>
              </div>
            </div>

            {/* Chatwoot Contact */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 text-center">
              <div className="mb-6">
                <div className="w-20 h-20 bg-gradient-tech rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserRound className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Atendimento Online
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Fale conosco agora mesmo através do nosso chat online. Nossa equipe está pronta para ajudar você!
                </p>
              </div>

              <Button
                onClick={() => {
                  if ((window as any).chatwootSDK) {
                    (window as any).chatwootSDK.toggle();
                  } else {
                    console.log('Chatwoot não está carregado');
                  }
                }}
                className="btn-gradient group text-lg px-8 py-3"
              >
                Iniciar Conversa
                <UserRound className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              </Button>

              <p className="text-sm text-gray-500 mt-4">
                Clique no botão acima ou no ícone flutuante para iniciar o atendimento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
