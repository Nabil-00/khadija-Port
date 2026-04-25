/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowRight, 
  Instagram, 
  Github, 
  MessageSquare,
  Mic2,
  Code2,
  Palette,
  Target,
  Users,
  Feather
} from 'lucide-react';
import { Button, Section, FadeIn } from './components/UI';
import BuddySection from './components/BuddySection';
import Navbar from './components/Navbar';
import WorkdhdSection from './components/WorkdhdSection';

gsap.registerPlugin(ScrollTrigger);

// --- Components ---

const Hero = () => {
  return (
    <Section id="home" data-reveal-section data-hero-section="true" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-surface via-brandBlue/70 to-surface-lighter/70">
      <div data-hero-glow className="absolute top-0 right-0 w-[48vw] h-[48vw] max-w-[640px] max-h-[640px] glow-atmosphere opacity-75 pointer-events-none" />
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <FadeIn delay={0.1} className="relative z-10 text-left order-1">
          <p data-hero-item className="text-xs md:text-sm uppercase tracking-[0.22em] text-[#f3d58d] font-semibold mb-4">
            Digital Strategy & Design Insights
          </p>
          <span data-hero-item className="px-4 py-2 rounded-full border border-metalGold/55 text-metalGold text-xs font-semibold tracking-widest uppercase mb-6 inline-block bg-brandBlue/25">
            UI/UX Designer • Public Speaker
          </span>

          <h1 data-hero-item className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-medium leading-[1.08] mb-6 md:mb-8">
            Designing digital experiences.<br />
            <span className="text-gradient">Communicating ideas with clarity.</span>
          </h1>

          <p data-hero-item className="text-base md:text-lg text-[#f0e9d7]/90 max-w-2xl leading-relaxed mb-6 md:mb-7">
            Helping brands and teams turn complex ideas into meaningful digital products, clear communication, and audience-centered experiences.
          </p>

          <p data-hero-item className="text-sm md:text-base text-[#ddd2bc]/90 max-w-2xl leading-relaxed mb-8 md:mb-9">
            I’m Khadija Zubair, a Computer Scientist, UI/UX Designer, and Public Speaker working at the intersection of technology, design, and communication.
          </p>

          <div data-hero-item className="flex flex-wrap gap-3 text-sm mb-8 md:mb-10">
            {['Design Strategy', 'Public Speaking', 'Brand Communication'].map((item) => (
              <span key={item} className="glass px-4 py-2 rounded-full text-cream border-metalGold/45 font-medium">
                {item}
              </span>
            ))}
          </div>

          <div data-hero-item className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button size="lg" className="group w-full sm:w-auto" onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore Work <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto" onClick={() => document.getElementById('speaking')?.scrollIntoView({ behavior: 'smooth' })}>
              Book a Talk
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.25} direction="left" className="relative order-2 group" data-hero-portrait>
          <div className="absolute inset-0 rounded-[2.25rem] glow-atmosphere blur-[70px] opacity-90 pointer-events-none" />
          <motion.div
            initial={{ opacity: 0, scale: 1.02 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-visible"
          >
            <div className="relative rounded-[2.25rem] p-3 md:p-4 bg-brandBlue/25 border border-metalGold/45 shadow-[0_24px_60px_rgba(3,20,36,0.65)] transition-all duration-700 group-hover:shadow-[0_28px_70px_rgba(188,155,106,0.35)] group-hover:border-metalGold/65">
              <img
                src="/images/khadija-portrait-eyes.jpg"
                alt="Khadija Zubair portrait for public speaking and UI/UX design brand"
                className="w-full h-[420px] md:h-[540px] object-cover object-center rounded-[1.9rem] transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-3 lg:-left-8 top-8 glass p-4 rounded-2xl hidden md:block"
            >
              <p className="text-xs uppercase tracking-widest text-muted mb-1">Focus</p>
              <p className="text-sm font-semibold text-cream">Design Strategy</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -right-3 lg:-right-10 top-1/2 -translate-y-1/2 glass p-4 rounded-2xl hidden md:block"
            >
              <p className="text-xs uppercase tracking-widest text-muted mb-1">Focus</p>
              <p className="text-sm font-semibold text-cream">Public Speaking</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 6.8, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
              className="absolute left-6 md:left-8 bottom-4 md:bottom-8 glass p-4 rounded-2xl hidden lg:block"
            >
              <p className="text-xs uppercase tracking-widest text-muted mb-1">Focus</p>
              <p className="text-sm font-semibold text-cream">Brand Communication</p>
            </motion.div>
          </motion.div>
        </FadeIn>
      </div>
    </Section>
  );
};

const About = () => {
  const pillars = [
    { title: 'Design with intention', icon: <Target className="text-accent" /> },
    { title: 'Build with meaning', icon: <Code2 className="text-accent" /> },
    { title: 'Communicate with clarity', icon: <Mic2 className="text-accent" /> },
  ];

  return (
    <Section id="about" data-reveal-section className="bg-surface">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <FadeIn direction="right">
          <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-8">
            Design with Intent. <br /> Create for Impact.
          </h2>
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed max-w-xl">
             <p>
               I work at the intersection of technology, design, and marketing communication.
             </p>
             <p>
               With a foundation in Computer Science, I build and understand systems from a technical perspective. As a UI/UX designer, I focus on how users interact with those systems. And through public speaking and content work, I translate complex ideas into clear, engaging narratives.
             </p>
             <p>
               I’m particularly interested in how digital products and content can improve user experience, strengthen brand identity, and communicate value effectively.
             </p>
          </div>
        </FadeIn>
        
        <FadeIn direction="left" className="space-y-8">
          <div className="glass rounded-3xl p-8 md:p-12 border-accent/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
             <h3 className="text-2xl font-serif mb-8 italic">My approach</h3>
            <div className="space-y-6">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="flex items-center gap-4 group/item">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover/item:border-accent group-hover/item:text-accent transition-colors">
                    {pillar.icon}
                  </div>
                  <span className="text-xl font-medium">{pillar.title}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
};

const Services = () => {
  const services = [
    {
      category: 'Design & Development',
      items: [
        { title: 'UI/UX Design', desc: 'I design intuitive, user-centered interfaces that align with both user needs and business goals. My work focuses on usability, accessibility, and visual clarity.' },
        { title: 'Software & Systems Development', desc: 'I develop structured, efficient digital solutions grounded in Computer Science principles, ensuring performance and scalability.' }
      ]
    },
    {
      category: 'Marketing & Communication',
      items: [
        { title: 'Marketing Communication & Public Speaking', desc: 'I create and deliver clear, engaging communication, from presentations to digital content, helping brands and ideas connect with their audience effectively.' },
        { title: 'Brand & Content Communication', desc: 'Strategic messaging and visual storytelling to strengthen brand identity and communicate value effectively.' }
      ]
    }
  ];

  return (
    <Section id="services" data-reveal-section className="bg-surface-lighter">
      <FadeIn className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-serif mb-6 italic">Tailored Solutions for Your Vision</h2>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((group, idx) => (
          <FadeIn key={idx} delay={idx * 0.2} direction={idx === 0 ? 'right' : 'left'} className="space-y-8">
            <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-accent">{group.category}</h3>
            {group.items.map((service, sidx) => (
              <div key={sidx} className="glass p-8 md:p-10 rounded-3xl group hover:border-accent transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(253,181,21,0.14)]">
                <div className="flex justify-between items-start mb-6">
                  <h4 className="text-2xl font-serif">{service.title}</h4>
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all">
                    <ArrowRight size={16} className="-rotate-45" />
                  </div>
                </div>
                <p className="text-gray-400 group-hover:text-gray-200 transition-colors leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </FadeIn>
        ))}
      </div>
    </Section>
  );
};

const Skills = () => {
  const skillGroups = [
    {
      title: 'Technical',
      skills: ['Frontend Development', 'System Design', 'UI/UX Design (Figma)'],
      icon: <Code2 size={24} className="text-accent" />
    },
    {
      title: 'Communication',
      skills: ['Brand Communication', 'Content Strategy', 'Public Speaking', 'Presentation Design'],
      icon: <Mic2 size={24} className="text-accent" />
    },
    {
      title: 'Creative',
      skills: ['Visual Storytelling', 'Content Creation', 'User Experience Design', 'Research and Application'],
      icon: <Palette size={24} className="text-accent" />
    }
  ];

  return (
    <Section id="skills" data-reveal-section className="bg-surface relative">
       <div className="absolute inset-0 glow-atmosphere opacity-50 pointer-events-none" />
      <FadeIn className="mb-16">
        <h2 className="text-4xl md:text-6xl font-serif italic text-center">My Skills</h2>
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-8 relative z-10">
        {skillGroups.map((group, idx) => (
          <FadeIn key={idx} delay={idx * 0.1} direction="up" className="glass p-10 rounded-[2.5rem] border-white/5 h-full transition-all duration-300 hover:-translate-y-1 hover:border-metalGold/50 hover:shadow-[0_18px_34px_rgba(188,155,106,0.2)]">
            <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-8 border border-accent/20">
              {group.icon}
            </div>
            <h3 className="text-2xl font-serif mb-6">{group.title}</h3>
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <span key={skill} className="px-4 py-2 rounded-full border border-white/10 text-sm font-medium hover:border-accent/40 bg-white/5 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
};

const Journey = () => {
  return (
    <Section id="journey" data-reveal-section className="bg-surface-lighter py-20 lg:py-32 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div className="relative z-10 max-w-xl mb-10 lg:mb-0 lg:sticky lg:top-32">
          <FadeIn direction="right">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif mb-8 leading-tight italic">Innovation Powered By Experience.</h2>
            <div className="space-y-6 text-gray-300/85 text-sm sm:text-base lg:text-lg leading-relaxed">
              <p>
                My background in Computer Science gave me a strong understanding of how systems are built.
              </p>
              <p>
                 Over time, I expanded into UI/UX design to better understand how users experience those systems. This naturally led me into communication — where I began translating technical and creative ideas into content and presentations that are clear, structured, and engaging.
               </p>
               <p className="font-serif italic text-white text-lg sm:text-xl">
                 "Today, my work brings these areas together: Building digital products, Designing user experiences, and communicating ideas in a way that aligns with both users and brand goals."
               </p>
             </div>
            </FadeIn>
          </div>

         <div className="mt-10 lg:mt-0 space-y-10 md:space-y-12">
            {[
              { year: '2020 - 2023', title: 'Junior Product Designer', desc: 'Began my design journey by focusing on user research, insights, and prototyping.' },
              { year: '2023 - 2026', title: 'Mid-Level Product Designer', desc: 'Improved digital product usability and user flow through structured interface design.' },
              { year: '2026 - Present', title: 'UI/UX Designer & Public Speaker', desc: 'Bringing together product design, communication, and branding to create meaningful audience experiences.' }
            ].map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.15} direction="left" className="relative pl-10 sm:pl-12 group">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 group-hover:bg-accent transition-colors">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-surface border-2 border-white/10 group-hover:border-accent group-hover:bg-accent transition-all" />
              </div>
              <p className="text-accent text-sm font-bold tracking-widest mb-2">{item.year}</p>
              <h4 className="text-xl sm:text-2xl font-serif mb-4">{item.title}</h4>
              <p className="text-gray-300/85 group-hover:text-gray-100 transition-colors leading-relaxed text-sm sm:text-base">
                {item.desc}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
};

const Portfolio = () => {
  return (
    <Section id="portfolio" data-reveal-section className="bg-surface">
      <FadeIn className="text-center mb-24 md:mb-28">
        <p className="text-xs tracking-[0.22em] uppercase font-bold text-muted mb-5">Design, Communication & Impact</p>
        <h2 className="text-4xl md:text-6xl font-serif italic mb-6">Selected Projects & Insights</h2>
         <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
           Projects that explore the intersection of design, communication, and meaningful digital experiences.
         </p>
      </FadeIn>

      <div className="space-y-36 md:space-y-40">
        <WorkdhdSection sectionNumber="01" caseStudyHref="#" />
        <BuddySection sectionNumber="02" caseStudyHref="#" />
      </div>
    </Section>
  );
};

const Philosophy = () => {
  return (
    <Section data-reveal-section className="bg-surface-lighter flex flex-col items-center text-center">
      <div className="max-w-4xl">
        <FadeIn>
          <div className="w-16 h-1 w-accent bg-accent mx-auto mb-12 rounded-full" />
          <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-8">
            I focus on creating work that is not only functional and visually refined, but also <span className="italic text-accent">communicates</span> clearly and effectively, while being deep and meaningful.
          </h2>
        </FadeIn>
      </div>
    </Section>
  );
};

const SpeakingSection = () => {
  const speakingVideoUrl = "https://t31vqr7jkuq6pj39.public.blob.vercel-storage.com/lv_0_20260424111359.mp4";

  const topics = [
    { title: 'Design Communication', icon: <Feather size={20} /> },
    { title: 'Technology Storytelling', icon: <Users size={20} /> },
    { title: 'Innovation Narratives', icon: <Mic2 size={20} /> },
  ];

  return (
    <Section id="speaking" data-reveal-section className="bg-gradient-to-br from-surface to-brandBlue/60 relative">
       <div className="absolute bottom-0 right-0 w-full h-[400px] glow-atmosphere opacity-30 pointer-events-none" />
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <FadeIn direction="right">
            <h2 className="text-4xl md:text-6xl font-serif mb-8 italic text-cream">Speaking & Brand Communication</h2>
            <p className="text-muted text-lg mb-10 leading-relaxed max-w-2xl">
              I translate complex ideas into clear, engaging narratives for audiences across technology, design, communication, and innovation.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {topics.map((topic, i) => (
                <div key={i} data-topic-card className="flex items-center gap-4 p-4 rounded-2xl glass hover:border-accent transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(253,181,21,0.14)]">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                    {topic.icon}
                  </div>
                  <span className="font-medium">{topic.title}</span>
                </div>
              ))}
            </div>

            <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Book a Talk <ArrowRight className="ml-2" />
            </Button>
          </FadeIn>
        </div>

        <div className="relative">
          <FadeIn direction="left">
            <div data-speaking-video className="relative rounded-3xl p-3 md:p-4 border border-metalGold/45 bg-brandBlue/20 shadow-[0_22px_60px_rgba(6,21,36,0.75)]">
              <div className="absolute inset-0 glow-atmosphere opacity-35 rounded-3xl pointer-events-none" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-metalGold/35">
                <video
                  src={speakingVideoUrl}
                  controls
                  preload="metadata"
                  poster="/images/agrip-nigeria-launch-thumbnail.png"
                  className="w-full aspect-[4/3] rounded-[2rem] border border-[#BC9B6A]/40 object-cover shadow-2xl"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="relative px-2 pt-5 pb-2">
                <p className="text-xs font-bold tracking-[0.16em] text-accent uppercase mb-2">Latest Speaking Feature</p>
                <p className="text-xl font-serif text-cream">AGRIP Nigeria Launch Conference, 2026</p>
                <p className="text-sm text-muted mt-1">For JR Biotech</p>
                <p className="text-sm text-[#ddd2bc] mt-4 leading-relaxed">
                  Talk focus: Design, communication, and innovation storytelling for emerging ideas.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
};

const Contact = () => {
  return (
    <Section id="contact" data-reveal-section className="bg-surface relative overflow-hidden">
       <div className="absolute top-0 right-0 w-[500px] h-[500px] glow-atmosphere opacity-20 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="glass rounded-[3rem] p-10 md:p-20 relative overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right" className="space-y-8">
            <h2 className="text-5xl md:text-7xl font-serif italic mb-8">Let's <br /> <span className="not-italic text-gradient">Get in Touch</span></h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-400">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center"><MessageSquare size={20} /></div>
                <div>
                   <p className="text-[10px] uppercase tracking-widest font-bold">Email Us</p>
                 <p className="text-white text-lg">khadijazubair40@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-400">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center"><MessageSquare size={20} /></div>
                <div>
                   <p className="text-[10px] uppercase tracking-widest font-bold">WhatsApp</p>
                   <p className="text-white text-lg">+2348037021637</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" className="w-full">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                 <input type="text" placeholder="First Name" className="w-full px-6 py-4 rounded-full bg-white/5 border border-white/10 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/50 transition-all" />
                 <input type="email" placeholder="Email Address" className="w-full px-6 py-4 rounded-full bg-white/5 border border-white/10 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/50 transition-all" />
              </div>
              <textarea placeholder="Your Message" rows={4} className="w-full px-6 py-4 rounded-3xl bg-white/5 border border-white/10 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/50 transition-all" />
              <div className="flex items-center gap-3 text-sm text-gray-500 mb-6">
                <input type="checkbox" className="w-4 h-4 rounded border-white/10 bg-white/5 text-accent focus:ring-accent accent-accent" />
                <span>I would like to receive the newsletter</span>
              </div>
              <Button type="submit" variant="primary" size="lg" className="w-full group">
                Start a Conversation <ArrowRight size={20} className="ml-2 group-hover:translate-x-1" />
              </Button>
            </form>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
};

const Footer = () => {
  const socialLinks = [
    { label: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/duuhaa._' },
    { label: 'GitHub', icon: Github, href: 'https://github.com/khadijazubair40-cyber' },
    { label: 'WhatsApp', icon: MessageSquare, href: 'https://wa.me/2348037021637' },
  ];

  return (
    <footer className="bg-surface py-20 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
             <a href="#home" className="text-3xl font-bold tracking-tighter flex items-center gap-2 mb-8">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center rotate-12">
                <div className="w-4 h-4 text-white"><ArrowRight className="-rotate-45" size={16} strokeWidth={3} /></div>
              </div>
              <span className="font-serif">Khadija Zubair</span>
            </a>
            <p className="text-gray-500 mb-8 max-w-xs leading-relaxed">
              Designing digital experiences. Communicating brands with clarity.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ label, icon: Icon, href }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-500 hover:text-white hover:border-accent transition-all ring-accent/0 hover:ring-4 ring-accent/10">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-[0.2em] uppercase text-gray-300 mb-8 italic font-serif">Services</h4>
            <ul className="space-y-4 text-gray-500">
              {['Web Design', 'Graphic Design', 'UI/UX Design', 'Branding'].map(item => (
                <li key={item}><a href="#" className="hover:text-accent transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
             <h4 className="text-sm font-bold tracking-[0.2em] uppercase text-gray-300 mb-8 italic font-serif">Portfolio</h4>
            <ul className="space-y-4 text-gray-500">
              {['Featured Projects', 'Client Work', 'Case Studies', 'Testimonials'].map(item => (
                <li key={item}><a href="#" className="hover:text-accent transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
             <h4 className="text-sm font-bold tracking-[0.2em] uppercase text-gray-300 mb-8 italic font-serif">Company</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="mailto:khadijazubair40@gmail.com" className="hover:text-accent transition-colors">khadijazubair40@gmail.com</a></li>
              <li><a href="https://github.com/khadijazubair40-cyber" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">github.com/khadijazubair40-cyber</a></li>
              <li><a href="https://wa.me/2348037021637" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">WhatsApp: +2348037021637</a></li>
              <li><a href="https://www.instagram.com/duuhaa._" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">instagram.com/duuhaa._</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-xs font-bold tracking-widest uppercase">
          <p>© 2026 Khadija Zubair. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy & Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const appRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const ctx = gsap.context(() => {
      const heroItems = gsap.utils.toArray<HTMLElement>('[data-hero-item]');
      if (heroItems.length) {
        gsap.from(heroItems, {
          opacity: 0,
          y: 20,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.12,
          delay: 0.08,
        });
      }

      gsap.from('[data-hero-portrait]', {
        opacity: 0,
        y: 20,
        scale: 0.985,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2,
      });

      gsap.from('[data-hero-glow]', {
        opacity: 0,
        scale: 0.9,
        duration: 1.2,
        ease: 'power3.out',
      });

      gsap.utils.toArray<HTMLElement>('[data-reveal-section]').forEach((section) => {
        if (section.dataset.heroSection === 'true') {
          return;
        }

        gsap.fromTo(
          section,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 82%',
              once: true,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>('[data-project-card]').forEach((card, idx) => {
        const text = card.querySelector('[data-project-text]');
        const image = card.querySelector('[data-project-image]');

        if (text) {
          gsap.from(text, {
            opacity: 0,
            y: 20,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 82%',
              once: true,
            },
          });
        }

        if (image) {
          gsap.from(image, {
            opacity: 0,
            x: idx % 2 === 0 ? -24 : 24,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 78%',
              once: true,
            },
          });
        }
      });

      const topicCards = gsap.utils.toArray<HTMLElement>('[data-topic-card]');
      if (topicCards.length > 0) {
        gsap.from(topicCards, {
          opacity: 0,
          y: 18,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: topicCards[0].closest('section'),
            start: 'top 72%',
            once: true,
          },
        });
      }

      gsap.from('[data-speaking-video]', {
        opacity: 0,
        scale: 0.98,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '[data-speaking-video]',
          start: 'top 78%',
          once: true,
        },
      });
    }, appRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={appRef} className="relative selection:bg-accent selection:text-ink">
      <Navbar contactHref="/#contact" activePath="" />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Journey />
      <Portfolio />
      <Philosophy />
      <SpeakingSection />
      <Contact />
      <Footer />
    </div>
  );
}
