import React, { useState } from "react";
import { motion } from "motion/react";
import { cinematicEase } from "../lib/easings";
import { MessageCircle, Mail, Calendar as CalendarIcon, ChevronDown, Check } from "lucide-react";
import * as Select from '@radix-ui/react-select';
import * as Popover from '@radix-ui/react-popover';
import { DayPicker } from 'react-day-picker';
import { ptBR } from 'date-fns/locale';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    event: "",
    city: "",
    message: ""
  });
  const [date, setDate] = useState<Date | undefined>();
  const [duration, setDuration] = useState("");
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedDate = date ? format(date, "dd/MM/yyyy", { locale: ptBR }) : "Não informado";
    const text = `Olá, Oziel Melo! Gostaria de solicitar um orçamento.

Nome: ${formData.name}
Tipo de evento: ${formData.event}
Data: ${formattedDate}
Cidade/Local: ${formData.city}
Duração da apresentação: ${duration || "Não informado"}
Detalhes: ${formData.message || "Não informado"}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/558299488812?text=${encodedText}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contato" className="py-24 md:py-32 bg-brand-black relative">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16">
          
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: cinematicEase }}
            className="flex flex-col justify-center"
          >
            <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
              <span className="w-8 sm:w-12 h-[1px] bg-brand-gold/50"></span>
              <p className="text-brand-gold uppercase tracking-[0.4em] text-[9px] sm:text-[10px] font-medium">Vamos conversar</p>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6 sm:mb-10 font-light">
              Transforme seu evento em uma <br className="hidden sm:block"/><span className="italic text-brand-champagne/80">experiência memorável</span>.
            </h2>
            <p className="text-white/50 font-light text-sm sm:text-base md:text-lg mb-10 sm:mb-16 max-w-md leading-relaxed">
              Entre em contato para verificar disponibilidade e solicitar um orçamento personalizado para o seu evento.
            </p>

            <div className="space-y-10">
              <a href="https://wa.me/558299488812" target="_blank" rel="noopener noreferrer" aria-label="Falar com Oziel Melo pelo WhatsApp" className="flex items-center gap-8 group cursor-pointer w-fit">
                <div className="w-20 h-20 flex items-center justify-center border border-brand-gray/50 group-hover:border-brand-gold group-hover:bg-brand-gold/5 transition-all duration-700 ease-out">
                  <MessageCircle className="text-white/50 group-hover:text-brand-gold group-hover:scale-110 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" strokeWidth={1} size={28} />
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-[0.4em] text-brand-gold/60 mb-2 font-medium group-hover:text-brand-gold transition-colors duration-500">WhatsApp</p>
                  <p className="text-lg text-white font-light group-hover:text-brand-champagne transition-colors tracking-wide duration-500">(82) 9948-8812</p>
                </div>
              </a>

              <a href="mailto:ozielmelo2@gmail.com" aria-label="Enviar email para Oziel Melo" className="flex items-center gap-8 group cursor-pointer w-fit">
                <div className="w-20 h-20 flex items-center justify-center border border-brand-gray/50 group-hover:border-brand-gold group-hover:bg-brand-gold/5 transition-all duration-700 ease-out">
                  <Mail className="text-white/50 group-hover:text-brand-gold group-hover:scale-110 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" strokeWidth={1} size={28} />
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-[0.4em] text-brand-gold/60 mb-2 font-medium group-hover:text-brand-gold transition-colors duration-500">Email</p>
                  <p className="text-lg text-white font-light group-hover:text-brand-champagne transition-colors tracking-wide duration-500">ozielmelo2@gmail.com</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: cinematicEase }}
            className="group/form bg-[#0a0a0a]/60 backdrop-blur-3xl p-10 md:p-14 lg:p-16 xl:p-20 border border-brand-gray/20 relative shadow-[0_20px_60px_rgba(0,0,0,0.8)] mx-2 md:mx-0 overflow-hidden"
          >
            {/* Cinematic glows */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-[80px] pointer-events-none transition-all duration-[2s] group-hover/form:bg-brand-gold/10"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-[80px] pointer-events-none transition-all duration-[2s] group-hover/form:bg-brand-gold/10"></div>
            
            {/* Elegant Background Texture */}
            <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}></div>

            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-4 h-[1px] bg-brand-gold/60"></div>
            <div className="absolute top-0 left-0 w-[1px] h-4 bg-brand-gold/60"></div>
            <div className="absolute top-0 right-0 w-4 h-[1px] bg-brand-gold/60"></div>
            <div className="absolute top-0 right-0 w-[1px] h-4 bg-brand-gold/60"></div>
            <div className="absolute bottom-0 left-0 w-4 h-[1px] bg-brand-gold/60"></div>
            <div className="absolute bottom-0 left-0 w-[1px] h-4 bg-brand-gold/60"></div>
            <div className="absolute bottom-0 right-0 w-4 h-[1px] bg-brand-gold/60"></div>
            <div className="absolute bottom-0 right-0 w-[1px] h-4 bg-brand-gold/60"></div>

            <div className="relative z-10">
              <h3 className="font-serif text-3xl mb-12 text-white font-light tracking-wide flex items-center gap-4">
                Solicitar Orçamento
                <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-gray/30 to-transparent"></span>
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-10">
              <div className="space-y-2 group relative">
                <label htmlFor="name" className="text-[9px] uppercase tracking-[0.4em] text-white/40 font-medium group-focus-within:text-brand-gold transition-colors duration-500">Nome Completo</label>
                <div className="relative">
                  <input
                    id="name"
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full h-10 bg-transparent border-b border-brand-gray/50 text-white focus:outline-none focus:border-brand-gold transition-colors duration-500 font-light text-base"
                  />
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-700 ease-out group-focus-within:w-full"></span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2 group relative">
                  <label htmlFor="event" className="text-[9px] uppercase tracking-[0.4em] text-white/40 font-medium group-focus-within:text-brand-gold transition-colors duration-500">Tipo de Evento</label>
                  <div className="relative">
                    <input
                      id="event"
                      required
                      type="text"
                      name="event"
                      placeholder="Ex: Casamento..."
                      value={formData.event}
                      onChange={handleChange}
                      className="w-full h-10 bg-transparent border-b border-brand-gray/50 text-white focus:outline-none focus:border-brand-gold transition-colors duration-500 font-light text-sm md:text-base placeholder:text-white/20"
                    />
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-700 ease-out group-focus-within:w-full"></span>
                  </div>
                </div>

                <div className="space-y-2 group relative flex flex-col justify-start">
                  <label id="date-label" className="text-[9px] uppercase tracking-[0.4em] text-white/40 font-medium group-focus-within:text-brand-gold transition-colors duration-500">Data</label>
                  <Popover.Root open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
                    <Popover.Trigger asChild>
                      <button 
                        type="button" 
                        aria-labelledby="date-label"
                        className={`w-full h-10 bg-transparent border-b text-left flex items-center justify-between transition-colors duration-500 font-light text-sm md:text-base outline-none relative group/btn ${isCalendarOpen ? 'border-brand-gold text-white' : 'border-brand-gray/50 text-white/50 hover:border-brand-gold/50'} ${date ? 'text-white' : ''}`}
                      >
                        {date ? format(date, "dd 'de' MMMM, yyyy", { locale: ptBR }) : "Selecione uma data"}
                        <CalendarIcon size={16} className={`transition-colors duration-500 ${isCalendarOpen ? 'text-brand-gold' : 'text-white/40 group-hover/btn:text-brand-gold/70'}`} />
                        <span className={`absolute bottom-[-1px] left-0 h-[1px] bg-brand-gold transition-all duration-700 ease-out ${isCalendarOpen ? 'w-full' : 'w-0'}`}></span>
                      </button>
                    </Popover.Trigger>
                    <Popover.Portal>
                      <Popover.Content sideOffset={4} className="z-[100] bg-[#141414] border border-brand-gray/40 p-3 shadow-[0_10px_40px_rgba(0,0,0,0.8)] outline-none rounded-sm">
                        <DayPicker
                          mode="single"
                          selected={date}
                          onSelect={(d) => { setDate(d); setIsCalendarOpen(false); }}
                          locale={ptBR}
                          className="dark-day-picker"
                        />
                      </Popover.Content>
                    </Popover.Portal>
                  </Popover.Root>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2 group relative">
                  <label htmlFor="city" className="text-[9px] uppercase tracking-[0.4em] text-white/40 font-medium group-focus-within:text-brand-gold transition-colors duration-500">Cidade / Local</label>
                  <div className="relative">
                    <input
                      id="city"
                      required
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full h-10 bg-transparent border-b border-brand-gray/50 text-white focus:outline-none focus:border-brand-gold transition-colors duration-500 font-light text-sm md:text-base"
                    />
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-700 ease-out group-focus-within:w-full"></span>
                  </div>
                </div>
                
                <div className="space-y-2 group">
                  <label htmlFor="duration-trigger" className="text-[9px] uppercase tracking-[0.4em] text-white/40 font-medium group-focus-within:text-brand-gold transition-colors duration-500">Quantidade de horas</label>
                  <div className="relative">
                    <Select.Root value={duration} onValueChange={setDuration} required>
                      <Select.Trigger id="duration-trigger" aria-label="Quantidade de horas" className="w-full h-10 bg-transparent border-b border-brand-gray/50 text-left flex items-center justify-between focus:outline-none focus:border-brand-gold transition-all duration-500 font-light text-sm md:text-base outline-none group/sel data-[state=open]:border-brand-gold">
                        <Select.Value placeholder={<span className="text-white/50">Selecione...</span>} />
                        <Select.Icon className="text-white/40 group-data-[state=open]/sel:text-brand-gold transition-colors duration-300">
                          <ChevronDown size={16} />
                        </Select.Icon>
                        <div className="absolute bottom-[-1px] left-0 w-0 h-[1px] bg-brand-gold transition-all duration-700 ease-out group-data-[state=open]/sel:w-full group-focus-within:w-full"></div>
                      </Select.Trigger>
                      <Select.Portal>
                        <Select.Content 
                          position="popper" 
                          sideOffset={4} 
                          className="z-[100] bg-[#141414] border border-brand-gray/40 shadow-[0_10px_40px_rgba(0,0,0,0.8)] w-[var(--radix-select-trigger-width)] outline-none overflow-hidden rounded-sm"
                        >
                          <Select.Viewport className="p-1">
                            {["1h", "2h", "3h", "4h", "Mais de 4h"].map((item) => (
                              <Select.Item 
                                key={item} 
                                value={item}
                                className="relative flex items-center h-12 px-8 text-sm text-white/80 font-light hover:bg-brand-gold/10 hover:text-brand-champagne focus:bg-brand-gold/15 focus:text-brand-champagne focus:outline-none cursor-pointer transition-colors duration-300 rounded-sm"
                              >
                                <Select.ItemText>{item}</Select.ItemText>
                                <Select.ItemIndicator className="absolute left-3 inline-flex items-center text-brand-gold">
                                  <Check size={14} />
                                </Select.ItemIndicator>
                              </Select.Item>
                            ))}
                          </Select.Viewport>
                        </Select.Content>
                      </Select.Portal>
                    </Select.Root>
                  </div>
                </div>
              </div>

              <div className="space-y-2 group relative">
                <label htmlFor="message" className="text-[9px] uppercase tracking-[0.4em] text-white/40 font-medium group-focus-within:text-brand-gold transition-colors duration-500">Mensagem / Detalhes (Opcional)</label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={2}
                    className="w-full min-h-[40px] bg-transparent border-b border-brand-gray/50 py-2 text-white focus:outline-none focus:border-brand-gold transition-colors duration-500 font-light text-sm md:text-base resize-none"
                  ></textarea>
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-700 ease-out group-focus-within:w-full"></span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-10 relative group/btn overflow-hidden bg-brand-gold/5 border border-brand-gold/30 text-brand-champagne py-6 transition-all duration-700 shadow-[0_0_0_transparent] hover:shadow-[0_0_40px_rgba(201,185,119,0.15)] hover:border-brand-gold backdrop-blur-md"
              >
                <div className="absolute inset-0 bg-brand-gold translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"></div>
                <span className="relative z-10 uppercase tracking-[0.4em] text-[10px] sm:text-[11px] font-medium group-hover/btn:text-brand-black transition-colors duration-500 drop-shadow-md">
                  Enviar via WhatsApp
                </span>
              </button>
            </form>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
