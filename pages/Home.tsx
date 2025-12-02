import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import CourseCard from '../components/CourseCard';
import Mascot from '../components/Mascot';
import { COURSES, TESTIMONIALS } from '../constants';
import { ShieldCheck, HeartPulse, Users, Star, ArrowRight, CheckCircle2, Award, Zap, Building2, GraduationCap, Calendar, FileCheck } from 'lucide-react';

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
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] pt-32 pb-20 px-4 md:px-8 flex items-center overflow-hidden bg-brand-offWhite">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-teal/5 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4 -z-10" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-tealLight rounded-full blur-3xl translate-y-1/4 -translate-x-1/4 -z-10" />

        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in slide-in-from-bottom-10 duration-1000 fade-in z-10">
             <div className="inline-flex items-center gap-2 bg-white border border-brand-teal/20 text-brand-teal px-4 py-2 rounded-full text-sm font-bold tracking-wide shadow-sm">
                <ShieldCheck size={16} /> Paramedic-Led Training
             </div>
             <h1 className="text-5xl md:text-7xl font-extrabold text-brand-navy tracking-tight leading-[1.1]">
               Training that <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-emerald-500">saves lives.</span>
             </h1>
             <p className="text-xl text-slate-500 max-w-lg leading-relaxed">
               Premium First Aid, CPR, and NDIS training delivered by real paramedics. Book your spot today or bring us to your workplace.
             </p>
             <div className="flex flex-col sm:flex-row gap-4">
               <Button size="lg" onClick={() => navigate('/courses')}>
                 Find a Course
               </Button>
               <Button variant="outline" size="lg" onClick={() => navigate('/groups')}>
                 Group Booking
               </Button>
             </div>
             <div className="pt-4 flex items-center gap-4 text-sm font-semibold text-slate-400">
               <div className="flex items-center gap-2"><div className="w-2 h-2 bg-brand-teal rounded-full"></div> Nationally Recognised</div>
               <div className="flex items-center gap-2"><div className="w-2 h-2 bg-brand-teal rounded-full"></div> Instant Certification</div>
             </div>
          </div>

          <div className="relative animate-in slide-in-from-right-10 duration-1000 fade-in delay-200 hidden md:block h-full min-h-[500px]">
             {/* Composition of images */}
             <div className="absolute top-10 right-0 w-[80%] h-[80%] rounded-[3rem] overflow-hidden shadow-2xl shadow-brand-teal/20 transform rotate-3 hover:rotate-0 transition-all duration-700 z-10">
                <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800" alt="CPR Training" className="w-full h-full object-cover" />
             </div>
             <div className="absolute bottom-10 left-0 w-[50%] h-[50%] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-brand-navy/10 transform -rotate-3 hover:rotate-0 transition-all duration-700 z-20 border-8 border-white">
                <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600" alt="Paramedic" className="w-full h-full object-cover" />
             </div>
             
             {/* Float Card */}
             <div className="absolute top-1/2 left-0 -translate-x-10 bg-white/90 backdrop-blur-xl p-5 rounded-3xl shadow-float flex items-center gap-4 z-30 animate-float border border-white/50">
               <div className="bg-brand-red/10 p-3 rounded-2xl">
                 <HeartPulse className="text-brand-red w-8 h-8" />
               </div>
               <div>
                 <div className="text-brand-navy font-bold text-lg">HLTAID011</div>
                 <div className="text-slate-500 text-sm">Most Popular</div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 2. Partners Marquee - Updated for True Infinite Loop & Pause on Hover */}
      <section className="py-12 bg-white relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white z-10 pointer-events-none" />
        <div className="flex overflow-hidden mask-gradient select-none">
            {/* Set 1 */}
            <div className="flex shrink-0 animate-marquee items-center justify-around gap-12 min-w-full py-4 group-hover:[animation-play-state:paused]">
                {partners.map((partner, i) => (
                    <div key={i} className="inline-flex items-center gap-3 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default px-4">
                        <partner.icon className="w-8 h-8 text-brand-teal" />
                        <span className="text-lg font-bold text-brand-navy uppercase tracking-widest">{partner.name}</span>
                    </div>
                ))}
            </div>
            {/* Set 2 (Duplicate for seamless loop) */}
            <div className="flex shrink-0 animate-marquee items-center justify-around gap-12 min-w-full py-4 group-hover:[animation-play-state:paused]" aria-hidden="true">
                {partners.map((partner, i) => (
                    <div key={`dup-${i}`} className="inline-flex items-center gap-3 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default px-4">
                        <partner.icon className="w-8 h-8 text-brand-teal" />
                        <span className="text-lg font-bold text-brand-navy uppercase tracking-widest">{partner.name}</span>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* NEW: Stats Section (Dark Navy from screenshot) */}
      <section className="bg-brand-navy py-16 px-4 border-y border-white/5 relative z-20">
         <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10 gap-8 md:gap-0">
               <div className="text-center px-4 py-4 md:py-0">
                  <div className="text-4xl md:text-5xl font-bold text-brand-teal mb-2">15+</div>
                  <div className="text-slate-300 font-medium">Years Experience</div>
               </div>
               <div className="text-center px-4 py-4 md:py-0">
                  <div className="text-4xl md:text-5xl font-bold text-brand-teal mb-2">10k+</div>
                  <div className="text-slate-300 font-medium">Students Trained</div>
               </div>
               <div className="text-center px-4 py-4 md:py-0">
                  <div className="text-4xl md:text-5xl font-bold text-brand-teal mb-2">100%</div>
                  <div className="text-slate-300 font-medium">Compliance</div>
               </div>
               <div className="text-center px-4 py-4 md:py-0">
                  <div className="text-4xl md:text-5xl font-bold text-brand-teal mb-2">4.9</div>
                  <div className="text-slate-300 font-medium">Average Rating</div>
               </div>
            </div>
         </div>
      </section>

      {/* 3. Category Split */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-brand-navy tracking-tight">Choose your path</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Whether you need workplace compliance or specialised care skills, we have the right course for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* First Aid & CPR */}
            <div 
              onClick={() => navigate('/courses?category=firstaid')}
              className="group relative h-[400px] rounded-[2.5rem] overflow-hidden cursor-pointer bg-brand-tealLight/50 hover:bg-brand-tealLight transition-colors duration-500 border border-brand-teal/5"
            >
              <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-brand-teal/10 rounded-[3rem] transform rotate-45 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12" />
              <div className="absolute top-1/2 right-0 w-40 h-40 bg-brand-teal/5 rounded-full blur-3xl" />

              <div className="absolute inset-0 p-12 flex flex-col items-start justify-center space-y-6 z-10">
                <div className="space-y-4 max-w-md">
                   <h3 className="text-3xl md:text-4xl font-bold text-brand-navy">First Aid & CPR</h3>
                   <p className="text-slate-600 text-lg leading-relaxed">
                     Nationally accredited training for workplaces, childcare and individuals. Includes HLTAID011 and HLTAID012.
                   </p>
                </div>
                <Button className="!bg-brand-teal text-white shadow-lg shadow-brand-teal/20 !px-8">
                   Browse Courses
                </Button>
              </div>
            </div>

            {/* NDIS & Community Care */}
            <div 
              onClick={() => navigate('/courses?category=ndis')}
              className="group relative h-[400px] rounded-[2.5rem] overflow-hidden cursor-pointer bg-blue-50/50 hover:bg-blue-50 transition-colors duration-500 border border-blue-100/50"
            >
              <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-100/60 rounded-full transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute top-20 right-20 w-20 h-20 bg-blue-200/20 rounded-full blur-2xl" />

              <div className="absolute inset-0 p-12 flex flex-col items-start justify-center space-y-6 z-10">
                <div className="space-y-4 max-w-md">
                   <h3 className="text-3xl md:text-4xl font-bold text-brand-navy">NDIS & Community Care</h3>
                   <p className="text-slate-600 text-lg leading-relaxed">
                     Specialised skills for support workers. Bowel care, medication, seizure management and more.
                   </p>
                </div>
                <Button className="!bg-brand-navy text-white shadow-lg shadow-brand-navy/20 !px-8">
                   Browse Courses
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center space-y-16 relative z-10">
          <div className="space-y-4 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-brand-navy tracking-tight">Get certified in 3 simple steps</h2>
              <p className="text-slate-500 text-lg">We've streamlined the process so you can focus on learning.</p>
          </div>
          
          <div className="relative grid md:grid-cols-3 gap-12 px-4 md:px-12">
              <div className="hidden md:block absolute top-[3.5rem] left-[20%] right-[20%] h-[2px] bg-slate-100 -z-10" />
              
              <div className="relative flex flex-col items-center group">
                  <div className="w-28 h-28 bg-white rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] group-hover:shadow-[0_20px_50px_-12px_rgba(13,148,136,0.2)] transition-all duration-300 flex items-center justify-center mb-8 relative z-10 border border-slate-50/50">
                      <Calendar className="text-brand-teal w-10 h-10" strokeWidth={1.5} />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-navy text-white rounded-full flex items-center justify-center font-bold text-sm border-4 border-white shadow-sm">1</div>
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-3">Book Online</h3>
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xs mx-auto">
                      Choose a date and location that suits you. Secure your spot in under 2 minutes.
                  </p>
              </div>

              <div className="relative flex flex-col items-center group">
                  <div className="w-28 h-28 bg-white rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] group-hover:shadow-[0_20px_50px_-12px_rgba(59,130,246,0.2)] transition-all duration-300 flex items-center justify-center mb-8 relative z-10 border border-slate-50/50">
                      <Users className="text-blue-500 w-10 h-10" strokeWidth={1.5} />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-navy text-white rounded-full flex items-center justify-center font-bold text-sm border-4 border-white shadow-sm">2</div>
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-3">Attend Training</h3>
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xs mx-auto">
                      Complete your pre-learning online, then join us for a fun, hands-on practical session.
                  </p>
              </div>

              <div className="relative flex flex-col items-center group">
                  <div className="w-28 h-28 bg-white rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] group-hover:shadow-[0_20px_50px_-12px_rgba(34,197,94,0.2)] transition-all duration-300 flex items-center justify-center mb-8 relative z-10 border border-slate-50/50">
                      <Award className="text-green-500 w-10 h-10" strokeWidth={1.5} />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-navy text-white rounded-full flex items-center justify-center font-bold text-sm border-4 border-white shadow-sm">3</div>
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-3">Get Certified</h3>
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xs mx-auto">
                      Receive your nationally recognised certificate via email on the same day.
                  </p>
              </div>
          </div>
          
          <Button size="lg" onClick={() => navigate('/courses')}>Start Your Journey</Button>
        </div>
      </section>

      {/* 4. Value Props */}
      <section className="py-24 px-4 bg-brand-offWhite">
        <div className="max-w-7xl mx-auto">
           <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Paramedic Educators', desc: 'Learn from active duty paramedics who bring real-world experience to the classroom.', icon: ShieldCheck },
                { title: 'Flexible Delivery', desc: 'We come to your workplace, or you can join our public sessions. Online pre-learning available.', icon: Building2 },
                { title: 'Instant Certification', desc: 'Receive your certificate immediately upon successful completion of your course.', icon: GraduationCap },
              ].map((item, i) => (
                <div key={i} className="bg-white p-10 rounded-3xl shadow-soft hover:-translate-y-2 transition-transform duration-300 border border-slate-100">
                   <div className="w-16 h-16 bg-brand-teal/5 rounded-2xl flex items-center justify-center mb-6">
                      <item.icon className="text-brand-teal w-8 h-8" />
                   </div>
                   <h3 className="text-xl font-bold text-brand-navy mb-3">{item.title}</h3>
                   <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 5. Featured Courses */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex justify-between items-end">
             <div className="space-y-2">
                <h2 className="text-4xl font-bold text-brand-navy tracking-tight">Popular Courses</h2>
                <p className="text-slate-500">Most booked training sessions this month.</p>
             </div>
             <Button variant="ghost" onClick={() => navigate('/courses')}>View All</Button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. "Serious Training" Rebuild */}
      <section className="py-24 px-4 bg-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-teal rounded-full blur-[150px] opacity-20" />
        
        <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <div className="inline-block bg-white/10 backdrop-blur border border-white/20 px-4 py-2 rounded-full text-white font-bold text-sm tracking-widest uppercase">
                        Our Philosophy
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
                        Serious skills,<br/>
                        <span className="text-brand-teal">friendly faces.</span>
                    </h2>
                    <p className="text-slate-300 text-xl leading-relaxed max-w-lg">
                        We believe learning to save a life shouldn't be boring or intimidating. Our approach is hands-on, supportive, and designed to make complex skills stick.
                    </p>
                    <div className="pt-4">
                        <Button className="!bg-brand-red !border-none hover:!bg-rose-600" size="lg">Meet the Team</Button>
                    </div>
                </div>

                <div className="relative h-[600px] w-full">
                    <div className="absolute inset-0 bg-white/5 backdrop-blur-3xl rounded-[3rem] border border-white/10 transform rotate-3" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                         <div className="relative">
                            <div className="absolute inset-0 bg-brand-teal/30 blur-[60px] rounded-full" />
                            <Mascot className="w-64 h-64 md:w-80 md:h-80 drop-shadow-2xl animate-float" emotion="helpful" />
                         </div>
                    </div>
                    <div className="absolute top-20 right-10 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 z-30 animate-float" style={{ animationDelay: '1s' }}>
                        <div className="bg-green-100 p-2 rounded-full text-green-600"><CheckCircle2 size={20}/></div>
                        <div>
                            <div className="text-xs text-slate-400 uppercase font-bold">Status</div>
                            <div className="font-bold text-brand-navy">Qualified</div>
                        </div>
                    </div>
                    <div className="absolute bottom-32 left-10 bg-white p-4 rounded-2xl shadow-xl z-30 animate-float max-w-[200px]" style={{ animationDelay: '2s' }}>
                        <div className="flex gap-1 mb-2">
                             {[1,2,3,4,5].map(i => <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" />)}
                        </div>
                        <div className="text-sm font-bold text-brand-navy italic">"Best training I've ever had!"</div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 7. Group Training Promo */}
      <section className="py-24 px-4 bg-white">
         <div className="max-w-7xl mx-auto bg-brand-offWhite rounded-[3rem] p-12 md:p-20 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-teal to-brand-navy" />
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div className="space-y-6">
                 <span className="text-brand-teal font-bold tracking-widest uppercase text-sm">Corporate & Groups</span>
                 <h2 className="text-4xl md:text-5xl font-bold text-brand-navy">We come to you.</h2>
                 <p className="text-slate-500 text-lg">
                   Need to train your whole team? We offer on-site training for schools, childcare centres, corporate offices, and construction sites.
                 </p>
                 <ul className="space-y-3">
                   {['Tailored content for your industry', 'Flexible scheduling', 'Group discounts available'].map(item => (
                     <li key={item} className="flex items-center gap-3 text-brand-navy font-medium">
                       <CheckCircle2 size={20} className="text-brand-teal" /> {item}
                     </li>
                   ))}
                 </ul>
                 <Button onClick={() => navigate('/groups')}>Request a Quote</Button>
              </div>
              <div className="relative h-80 md:h-full min-h-[300px] rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                 <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Group Training" />
              </div>
            </div>
         </div>
      </section>

      {/* 9. Testimonials - Updated for True Infinite Loop & Pause on Hover */}
      <section className="py-24 bg-slate-50 relative overflow-hidden group">
        <div className="max-w-7xl mx-auto space-y-12 px-4 mb-10">
          <div className="text-center">
             <h2 className="text-4xl font-bold text-brand-navy mb-4">Trusted by local heroes.</h2>
             <p className="text-slate-500">See what our students and partners have to say.</p>
          </div>
        </div>
        
        <div className="flex overflow-hidden mask-gradient-wide">
             {/* Set 1 */}
             <div className="flex shrink-0 animate-marquee-reverse gap-8 whitespace-nowrap py-8 pl-4 group-hover:[animation-play-state:paused]">
                 {TESTIMONIALS.concat(TESTIMONIALS).map((testimonial, i) => (
                     <div key={i} className="bg-white p-8 rounded-3xl shadow-soft flex flex-col hover:-translate-y-1 transition-transform duration-300 w-[400px] shrink-0 border border-slate-100 whitespace-normal">
                        <div className="flex gap-1 mb-6">
                            {[1,2,3,4,5].map(s => <Star key={s} size={18} className="text-yellow-400 fill-yellow-400" />)}
                        </div>
                        <p className="text-brand-navy font-medium text-lg italic mb-8 flex-grow">"{testimonial.text}"</p>
                        <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                            <img src={testimonial.avatar} className="w-12 h-12 rounded-full object-cover" alt={testimonial.name} />
                            <div>
                                <div className="font-bold text-brand-navy text-sm">{testimonial.name}</div>
                                <div className="text-xs text-slate-400">{testimonial.company || testimonial.role}</div>
                            </div>
                        </div>
                     </div>
                 ))}
             </div>
             {/* Set 2 (Duplicate) */}
             <div className="flex shrink-0 animate-marquee-reverse gap-8 whitespace-nowrap py-8 pl-4 group-hover:[animation-play-state:paused]" aria-hidden="true">
                 {TESTIMONIALS.concat(TESTIMONIALS).map((testimonial, i) => (
                     <div key={`dup-${i}`} className="bg-white p-8 rounded-3xl shadow-soft flex flex-col hover:-translate-y-1 transition-transform duration-300 w-[400px] shrink-0 border border-slate-100 whitespace-normal">
                        <div className="flex gap-1 mb-6">
                            {[1,2,3,4,5].map(s => <Star key={s} size={18} className="text-yellow-400 fill-yellow-400" />)}
                        </div>
                        <p className="text-brand-navy font-medium text-lg italic mb-8 flex-grow">"{testimonial.text}"</p>
                        <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                            <img src={testimonial.avatar} className="w-12 h-12 rounded-full object-cover" alt={testimonial.name} />
                            <div>
                                <div className="font-bold text-brand-navy text-sm">{testimonial.name}</div>
                                <div className="text-xs text-slate-400">{testimonial.company || testimonial.role}</div>
                            </div>
                        </div>
                     </div>
                 ))}
             </div>
          </div>
      </section>

      {/* 10. Final CTA */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
            <div className="bg-brand-navy rounded-[3rem] overflow-hidden grid md:grid-cols-2 min-h-[500px]">
                {/* Left: Content */}
                <div className="p-12 md:p-20 flex flex-col justify-center space-y-8 order-2 md:order-1">
                    <div className="inline-flex items-center gap-2 text-brand-teal font-bold tracking-widest uppercase text-sm">
                        <Zap size={16} /> Start Today
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                        Ready to be a <br/>
                        <span className="text-brand-teal">lifesaver?</span>
                    </h2>
                    <p className="text-slate-300 text-lg">
                        Book your course today in less than 2 minutes. Secure, fast, and nationally recognised.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="!bg-brand-teal hover:!bg-teal-500 !text-white" onClick={() => navigate('/courses')}>
                            Book Now
                        </Button>
                        <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10" onClick={() => navigate('/contact')}>
                            Contact Us
                        </Button>
                    </div>
                </div>

                {/* Right: Image */}
                <div className="relative order-1 md:order-2 h-64 md:h-auto">
                    <img src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1000" className="absolute inset-0 w-full h-full object-cover" alt="Medical Training" />
                    <div className="absolute inset-0 bg-brand-navy/20" />
                </div>
            </div>
        </div>
      </section>
    </main>
  );
};

export default Home;