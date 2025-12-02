import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import CourseCard from '../components/CourseCard';
import Mascot from '../components/Mascot';
import { COURSES, TESTIMONIALS } from '../constants';
import { ShieldCheck, HeartPulse, Users, Star, ArrowRight, CheckCircle2, Award, Zap, Building2, GraduationCap, Calendar, Clock, MapPin } from 'lucide-react';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const featuredCourses = COURSES.filter(c => c.popular).slice(0, 3);
  
  // Logos for the marquee
  const partners = [
    { name: 'Allens Training', icon: ShieldCheck },
    { name: 'NDIS Registered', icon: HeartPulse },
    { name: 'Aust. Resuscitation Council', icon: Award },
    { name: 'Royal Life Saving', icon: Users },
    { name: 'ACECQA Approved', icon: CheckCircle2 },
    { name: 'Skills IQ', icon: Zap },
  ];

  return (
    <main className="overflow-x-hidden">
      
      {/* 1. KILLER HERO SECTION */}
      {/* Design Note: Using deep overlap, glassmorphism, and large typography for immediate authority. */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 px-4 md:px-8 bg-[#F8FAFC] overflow-hidden">
        
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-gradient-to-b from-brand-teal/10 to-transparent rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-brand-navy/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
          
          {/* Left: Copy & CTA */}
          <div className="space-y-10 animate-in slide-in-from-bottom-10 duration-1000 fade-in">
             
             {/* Trust Badge */}
             <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur border border-slate-200 px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-shadow cursor-default">
                <div className="flex -space-x-2">
                   {[1,2,3].map(i => (
                     <div key={i} className="w-6 h-6 rounded-full bg-slate-200 border-2 border-white overflow-hidden">
                       <img src={`https://images.unsplash.com/photo-${i === 1 ? '1534528741775-53994a69daeb' : i === 2 ? '1506794778202-cad84cf45f1d' : '1507003211169-0a1dd7228f2d'}?auto=format&fit=crop&w=64&q=80`} className="w-full h-full object-cover" alt="Student" />
                     </div>
                   ))}
                </div>
                <span className="text-sm font-bold text-brand-navy tracking-tight">Trusted by 10,000+ Students</span>
             </div>

             {/* Headline */}
             <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold text-brand-navy tracking-tight leading-[1.05]">
               Real skills for <br/>
               <span className="relative whitespace-nowrap">
                 <span className="relative z-10 text-brand-teal">real life.</span>
                 <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-teal/20 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                 </svg>
               </span>
             </h1>

             <p className="text-xl md:text-2xl text-slate-500 max-w-lg leading-relaxed font-medium">
               Australia's premium First Aid & NDIS training provider. 
               Paramedic-led courses that are engaging, fast, and nationally recognised.
             </p>

             {/* Action Area */}
             <div className="flex flex-col sm:flex-row gap-4 pt-2">
               <Button size="lg" className="h-16 px-10 text-lg shadow-xl shadow-brand-teal/25 hover:shadow-brand-teal/40" onClick={() => navigate('/courses')}>
                 Find a Course
               </Button>
               <Button variant="outline" size="lg" className="h-16 px-8 text-lg border-2" onClick={() => navigate('/groups')}>
                 <Building2 className="mr-2 h-5 w-5" /> Workplace Booking
               </Button>
             </div>

             {/* Live Data Badge */}
             <div className="flex items-center gap-3 text-sm font-semibold text-slate-500 pt-4">
               <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
               </span>
               Next class starting in <span className="text-brand-navy font-bold">Sydney CBD</span> tomorrow
             </div>
          </div>

          {/* Right: Premium Composition */}
          <div className="relative h-[600px] hidden lg:block perspective-1000">
             
             {/* Main Hero Image - Rounded & Tilted */}
             <div className="absolute top-0 right-0 w-[90%] h-[85%] bg-slate-200 rounded-[3rem] overflow-hidden shadow-2xl shadow-brand-navy/10 transform rotate-[-2deg] hover:rotate-0 transition-all duration-700 z-10 group">
                <img src="https://images.unsplash.com/photo-1576091160550-21878bf72a5b?auto=format&fit=crop&q=80&w=1200" alt="Training Session" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent opacity-60" />
             </div>

             {/* Floating Glass Card 1: Course Info */}
             <div className="absolute bottom-20 left-0 bg-white/90 backdrop-blur-xl p-6 rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] z-20 animate-float border border-white/50 max-w-xs">
                <div className="flex items-start justify-between mb-4">
                   <div className="bg-brand-teal/10 p-3 rounded-2xl">
                      <HeartPulse className="text-brand-teal w-6 h-6" />
                   </div>
                   <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full">Enrolling</span>
                </div>
                <h3 className="font-bold text-brand-navy text-lg leading-tight mb-1">HLTAID011 Provide First Aid</h3>
                <p className="text-slate-400 text-sm mb-4">Most popular workplace course</p>
                <div className="flex items-center gap-3 text-xs font-bold text-brand-navy">
                   <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full bg-slate-100 border border-white" />
                      <div className="w-6 h-6 rounded-full bg-slate-200 border border-white" />
                   </div>
                   + 12 joined today
                </div>
             </div>

             {/* Floating Glass Card 2: Rating */}
             <div className="absolute top-20 -right-4 bg-white p-4 rounded-2xl shadow-float z-30 animate-float" style={{ animationDelay: '2s' }}>
                 <div className="flex gap-1 mb-1">
                     {[1,2,3,4,5].map(i => <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />)}
                 </div>
                 <div className="font-bold text-brand-navy text-sm">"Incredible trainers!"</div>
             </div>

             {/* Mascot Peek */}
             <div className="absolute -bottom-10 right-20 z-30 pointer-events-none">
                <Mascot className="w-40 h-40 drop-shadow-2xl animate-bounce-slow" emotion="happy" />
             </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST (Social Proof) - Keep high to validate claim */}
      <section className="py-10 bg-white border-b border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Trusted by industry leaders</p>
        </div>
        <div className="flex overflow-hidden mask-gradient select-none">
            <div className="flex shrink-0 animate-marquee items-center justify-around gap-16 min-w-full group-hover:[animation-play-state:paused]">
                {partners.map((partner, i) => (
                    <div key={i} className="inline-flex items-center gap-3 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default px-4">
                        <partner.icon className="w-8 h-8 text-brand-teal" />
                        <span className="text-lg font-bold text-brand-navy uppercase tracking-widest">{partner.name}</span>
                    </div>
                ))}
            </div>
            <div className="flex shrink-0 animate-marquee items-center justify-around gap-16 min-w-full group-hover:[animation-play-state:paused]" aria-hidden="true">
                {partners.map((partner, i) => (
                    <div key={`dup-${i}`} className="inline-flex items-center gap-3 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default px-4">
                        <partner.icon className="w-8 h-8 text-brand-teal" />
                        <span className="text-lg font-bold text-brand-navy uppercase tracking-widest">{partner.name}</span>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* 3. NAVIGATION (Categories) - Direct them immediately */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-brand-navy tracking-tight">What do you need?</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Select a category to find the right training for your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* First Aid & CPR */}
            <div 
              onClick={() => navigate('/courses?category=firstaid')}
              className="group relative h-[360px] rounded-[2.5rem] overflow-hidden cursor-pointer bg-[#F0FDFA] hover:bg-[#E6FFFA] transition-all duration-500 border border-brand-teal/10 hover:shadow-xl hover:shadow-brand-teal/10 hover:-translate-y-1"
            >
              {/* Graphic Elements */}
              <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-brand-teal/10 rounded-full transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute top-8 right-8 bg-white p-3 rounded-2xl shadow-sm group-hover:rotate-12 transition-transform duration-500">
                 <HeartPulse className="w-8 h-8 text-brand-teal" />
              </div>

              <div className="absolute inset-0 p-12 flex flex-col items-start justify-center space-y-6 z-10">
                <div className="space-y-2 max-w-md">
                   <h3 className="text-3xl font-bold text-brand-navy">First Aid & CPR</h3>
                   <p className="text-slate-600 leading-relaxed font-medium">
                     For workplaces, childcare, and individuals. <br/>Includes HLTAID011 & HLTAID012.
                   </p>
                </div>
                <div className="flex items-center text-brand-teal font-bold group-hover:translate-x-2 transition-transform">
                   View Courses <ArrowRight className="ml-2 w-5 h-5" />
                </div>
              </div>
            </div>

            {/* NDIS & Community Care */}
            <div 
              onClick={() => navigate('/courses?category=ndis')}
              className="group relative h-[360px] rounded-[2.5rem] overflow-hidden cursor-pointer bg-[#F1F5F9] hover:bg-[#E2E8F0] transition-all duration-500 border border-brand-navy/5 hover:shadow-xl hover:shadow-brand-navy/10 hover:-translate-y-1"
            >
              {/* Graphic Elements */}
              <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-brand-navy/5 rounded-full transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute top-8 right-8 bg-white p-3 rounded-2xl shadow-sm group-hover:-rotate-12 transition-transform duration-500">
                 <Users className="w-8 h-8 text-brand-navy" />
              </div>

              <div className="absolute inset-0 p-12 flex flex-col items-start justify-center space-y-6 z-10">
                <div className="space-y-2 max-w-md">
                   <h3 className="text-3xl font-bold text-brand-navy">NDIS & Support</h3>
                   <p className="text-slate-600 leading-relaxed font-medium">
                     Specialised care skills for support workers. <br/>Bowel care, meds, seizures & more.
                   </p>
                </div>
                <div className="flex items-center text-brand-navy font-bold group-hover:translate-x-2 transition-transform">
                   View Courses <ArrowRight className="ml-2 w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DESIRE (Popular Courses) - Show the product */}
      <section className="py-24 px-4 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
             <div className="space-y-2">
                <h2 className="text-4xl font-bold text-brand-navy tracking-tight">Most Booked Training</h2>
                <p className="text-slate-500 text-lg">Join 500+ students getting certified this week.</p>
             </div>
             <Button variant="ghost" onClick={() => navigate('/courses')} className="group">
               View All Courses <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. LOGIC (Value Props) - Why us? */}
      <section className="py-24 px-4 bg-brand-navy relative overflow-hidden">
         {/* Background noise */}
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-soft-light" />
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-teal rounded-full blur-[150px] opacity-10" />

         <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16 space-y-4">
               <div className="inline-block bg-white/10 backdrop-blur border border-white/10 px-4 py-1.5 rounded-full text-brand-teal font-bold text-xs tracking-widest uppercase">
                  The LifeGuard Standard
               </div>
               <h2 className="text-4xl md:text-5xl font-bold text-white">Why we're rated 4.9 Stars</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               {[
                 { title: 'Paramedic Led', desc: 'No boring slides. Learn from active duty paramedics who share real-world stories and practical tips.', icon: ShieldCheck },
                 { title: 'We Come To You', desc: 'Flexible on-site training for groups, or join us at one of our convenient locations across the city.', icon: MapPin },
                 { title: 'Instant Certs', desc: 'Pass your course and get your certificate emailed to you the same day. No waiting around.', icon: Zap },
               ].map((item, i) => (
                 <div key={i} className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/5 hover:bg-white/10 transition-colors duration-300">
                    <div className="w-14 h-14 bg-brand-teal/20 rounded-2xl flex items-center justify-center mb-6">
                       <item.icon className="text-brand-teal w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                 </div>
               ))}
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 border-t border-white/10 pt-12">
               {[
                  { label: 'Years Experience', val: '15+' },
                  { label: 'Students Trained', val: '10k+' },
                  { label: 'Compliance', val: '100%' },
                  { label: 'Google Rating', val: '4.9' },
               ].map((stat, i) => (
                  <div key={i} className="text-center">
                     <div className="text-4xl md:text-5xl font-bold text-brand-teal mb-2">{stat.val}</div>
                     <div className="text-slate-400 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 6. EASE (Process) - Remove friction */}
      <section className="py-24 px-4 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
             <div className="relative order-2 md:order-1">
                <div className="absolute inset-0 bg-brand-teal/5 rounded-[3rem] transform rotate-3" />
                <img src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800" alt="Easy Booking" className="relative rounded-[3rem] shadow-2xl" />
                
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl flex flex-col items-center">
                   <span className="text-3xl font-bold text-brand-navy">2 min</span>
                   <span className="text-xs text-slate-500 font-bold uppercase">Booking Time</span>
                </div>
             </div>

             <div className="space-y-12 order-1 md:order-2">
                <div className="space-y-4">
                   <h2 className="text-4xl font-bold text-brand-navy">Certification made simple.</h2>
                   <p className="text-slate-500 text-lg">We've stripped away the paperwork and confusion.</p>
                </div>
                
                <div className="space-y-8">
                   {[
                      { step: '01', title: 'Book Online', desc: 'Choose a date and lock it in instantly.' },
                      { step: '02', title: 'Pre-Learning', desc: 'Short online quiz to save time in class.' },
                      { step: '03', title: 'Hands-on Fun', desc: 'Practical session with our fun team.' },
                   ].map((item) => (
                      <div key={item.step} className="flex gap-6">
                         <div className="w-12 h-12 rounded-full border-2 border-slate-100 flex items-center justify-center font-bold text-brand-teal shrink-0 mt-1">
                            {item.step}
                         </div>
                         <div>
                            <h3 className="text-xl font-bold text-brand-navy mb-1">{item.title}</h3>
                            <p className="text-slate-500">{item.desc}</p>
                         </div>
                      </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 7. UPSELL (Group Training) */}
      <section className="py-24 px-4 bg-[#F8FAFC]">
         <div className="max-w-7xl mx-auto bg-white rounded-[3rem] p-8 md:p-20 shadow-soft relative overflow-hidden group border border-slate-100">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-teal to-brand-navy" />
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div className="space-y-8">
                 <div className="inline-flex items-center gap-2 text-brand-teal font-bold tracking-widest uppercase text-sm">
                    <Building2 size={16} /> Corporate & Groups
                 </div>
                 <h2 className="text-4xl md:text-5xl font-bold text-brand-navy leading-tight">We bring the training to <span className="text-brand-teal">you.</span></h2>
                 <p className="text-slate-500 text-lg">
                   Need to train your whole team? We offer on-site training for schools, childcare centres, corporate offices, and construction sites.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-4">
                    <Button onClick={() => navigate('/groups')} className="shadow-lg shadow-brand-navy/20">Get a Quote</Button>
                    <Button variant="ghost" onClick={() => navigate('/groups')}>Learn more</Button>
                 </div>
              </div>
              <div className="relative h-80 md:h-full min-h-[300px] rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                 <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Group Training" />
                 <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-transparent transition-colors" />
              </div>
            </div>
         </div>
      </section>

      {/* 8. VALIDATION (Testimonials) */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center mb-16 px-4">
             <h2 className="text-4xl font-bold text-brand-navy mb-4">Don't just take our word for it.</h2>
             <div className="flex justify-center items-center gap-2 text-yellow-500">
                <Star className="fill-current" />
                <Star className="fill-current" />
                <Star className="fill-current" />
                <Star className="fill-current" />
                <Star className="fill-current" />
                <span className="text-brand-navy font-bold ml-2 text-lg">4.9/5</span>
             </div>
        </div>
        
        <div className="flex overflow-hidden mask-gradient-wide">
             <div className="flex shrink-0 animate-marquee-reverse gap-8 whitespace-nowrap py-8 pl-4 hover:[animation-play-state:paused]">
                 {TESTIMONIALS.concat(TESTIMONIALS).map((testimonial, i) => (
                     <div key={i} className="bg-[#F8FAFC] p-8 rounded-3xl flex flex-col hover:-translate-y-1 transition-transform duration-300 w-[400px] shrink-0 border border-slate-100 whitespace-normal">
                        <p className="text-brand-navy font-medium text-lg italic mb-8 flex-grow">"{testimonial.text}"</p>
                        <div className="flex items-center gap-4 pt-6 border-t border-slate-200/50">
                            <img src={testimonial.avatar} className="w-12 h-12 rounded-full object-cover ring-2 ring-white" alt={testimonial.name} />
                            <div>
                                <div className="font-bold text-brand-navy text-sm">{testimonial.name}</div>
                                <div className="text-xs text-slate-400 font-bold uppercase">{testimonial.company || testimonial.role}</div>
                            </div>
                        </div>
                     </div>
                 ))}
             </div>
             <div className="flex shrink-0 animate-marquee-reverse gap-8 whitespace-nowrap py-8 pl-4 hover:[animation-play-state:paused]" aria-hidden="true">
                 {TESTIMONIALS.concat(TESTIMONIALS).map((testimonial, i) => (
                     <div key={`dup-${i}`} className="bg-[#F8FAFC] p-8 rounded-3xl flex flex-col hover:-translate-y-1 transition-transform duration-300 w-[400px] shrink-0 border border-slate-100 whitespace-normal">
                        <p className="text-brand-navy font-medium text-lg italic mb-8 flex-grow">"{testimonial.text}"</p>
                        <div className="flex items-center gap-4 pt-6 border-t border-slate-200/50">
                            <img src={testimonial.avatar} className="w-12 h-12 rounded-full object-cover ring-2 ring-white" alt={testimonial.name} />
                            <div>
                                <div className="font-bold text-brand-navy text-sm">{testimonial.name}</div>
                                <div className="text-xs text-slate-400 font-bold uppercase">{testimonial.company || testimonial.role}</div>
                            </div>
                        </div>
                     </div>
                 ))}
             </div>
          </div>
      </section>

      {/* 9. PHILOSOPHY / MASCOT - Soft landing before CTA */}
      <section className="py-20 bg-[#E6FFFA]/30 border-y border-brand-teal/5">
         <div className="max-w-4xl mx-auto text-center px-4">
             <Mascot className="w-32 h-32 mx-auto mb-8 animate-float" emotion="helpful" />
             <h2 className="text-3xl font-bold text-brand-navy mb-6">Serious skills, friendly faces.</h2>
             <p className="text-lg text-slate-600 leading-relaxed">
               We believe learning to save a life shouldn't be boring or intimidating. 
               Our approach is hands-on, supportive, and designed to make complex skills stick.
             </p>
         </div>
      </section>

      {/* 10. FINAL CTA */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
            <div className="bg-brand-navy rounded-[3rem] overflow-hidden grid md:grid-cols-2 min-h-[500px] relative shadow-2xl shadow-brand-navy/30">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy to-slate-900 z-0" />
                
                {/* Left: Content */}
                <div className="p-12 md:p-20 flex flex-col justify-center space-y-8 order-2 md:order-1 relative z-10">
                    <div className="inline-flex items-center gap-2 text-brand-teal font-bold tracking-widest uppercase text-sm">
                        <Zap size={16} /> Start Today
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
                        Ready to be a <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-emerald-400">lifesaver?</span>
                    </h2>
                    <p className="text-slate-300 text-lg">
                        Book your course today in less than 2 minutes. Secure, fast, and nationally recognised.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button size="lg" className="!bg-brand-teal hover:!bg-teal-500 !text-white h-14 px-8" onClick={() => navigate('/courses')}>
                            Book Now
                        </Button>
                        <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 h-14 px-8" onClick={() => navigate('/contact')}>
                            Contact Us
                        </Button>
                    </div>
                </div>

                {/* Right: Image */}
                <div className="relative order-1 md:order-2 h-64 md:h-auto overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1516574187841-693083fadd49?auto=format&fit=crop&q=80&w=1000" className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-overlay hover:scale-105 transition-transform duration-[2s]" alt="Medical Training" />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-brand-navy" />
                </div>
            </div>
        </div>
      </section>
    </main>
  );
};

export default Home;