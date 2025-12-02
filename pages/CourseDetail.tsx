import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { COURSES } from '../constants';
import Button from '../components/Button';
import { Check, Calendar, MapPin, Clock, Info } from 'lucide-react';
import Mascot from '../components/Mascot';

const CourseDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = COURSES.find(c => c.id === id);

  if (!course) return <div className="pt-40 text-center">Course not found</div>;

  return (
    <div className="bg-white min-h-screen">
       {/* Hero */}
       <div className="bg-brand-navy pt-32 pb-24 px-4 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-teal rounded-full blur-[120px] opacity-20 translate-x-1/2 -translate-y-1/2" />
          <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-3 gap-12">
             <div className="md:col-span-2 space-y-6">
                <div className="inline-block bg-white/10 px-3 py-1 rounded-full text-sm font-semibold tracking-wider uppercase">
                   {course.code || 'NDIS Workshop'}
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">{course.title}</h1>
                <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">{course.description}</p>
                <div className="flex flex-wrap gap-6 pt-4">
                   <div className="flex items-center gap-2">
                      <Clock className="text-brand-teal" /> <span>{course.duration}</span>
                   </div>
                   <div className="flex items-center gap-2">
                      <Info className="text-brand-teal" /> <span>From ${course.price}</span>
                   </div>
                   <div className="flex items-center gap-2">
                      <Check className="text-brand-teal" /> <span>Nationally Recognised</span>
                   </div>
                </div>
             </div>
             <div className="hidden md:block">
               {/* Mascot placement */}
                <Mascot className="w-48 h-48 ml-auto opacity-80" emotion="helpful" />
             </div>
          </div>
       </div>

       {/* Content */}
       <div className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-16">
             
             {/* Outcomes */}
             <section>
                <h2 className="text-2xl font-bold text-brand-navy mb-6">What you will learn</h2>
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                   <ul className="grid sm:grid-cols-2 gap-4">
                      {course.learningOutcomes?.map((outcome, i) => (
                         <li key={i} className="flex items-start gap-3">
                            <div className="mt-1 min-w-[20px] min-h-[20px] bg-brand-teal text-white rounded-full flex items-center justify-center text-xs">✓</div>
                            <span className="text-brand-navy font-medium">{outcome}</span>
                         </li>
                      )) || <li className="text-slate-500">Comprehensive module list available on request.</li>}
                   </ul>
                </div>
             </section>

             {/* Who is it for */}
             <section>
                <h2 className="text-2xl font-bold text-brand-navy mb-6">Who is this for?</h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                   This course is designed for individuals requiring certification for their workplace, parents wanting to learn life-saving skills, or support workers needing NDIS-compliant training.
                </p>
             </section>

             {/* FAQ */}
             <section>
                <h2 className="text-2xl font-bold text-brand-navy mb-6">Common Questions</h2>
                <div className="space-y-4">
                   <details className="bg-white border border-slate-200 rounded-2xl p-4 open:bg-slate-50 cursor-pointer">
                      <summary className="font-bold text-brand-navy">Is pre-course work required?</summary>
                      <p className="pt-2 text-slate-600">Yes, most accredited courses require a short online quiz to be completed prior to the practical session.</p>
                   </details>
                   <details className="bg-white border border-slate-200 rounded-2xl p-4 open:bg-slate-50 cursor-pointer">
                      <summary className="font-bold text-brand-navy">How long is the certificate valid?</summary>
                      <p className="pt-2 text-slate-600">CPR is valid for 12 months. First Aid is valid for 3 years.</p>
                   </details>
                </div>
             </section>
          </div>

          {/* Sidebar Booking */}
          <div className="lg:col-span-1">
             <div className="sticky top-32 bg-white rounded-3xl shadow-xl shadow-slate-200 border border-slate-100 p-8">
                <h3 className="text-xl font-bold text-brand-navy mb-6">Upcoming Dates</h3>
                
                <div className="space-y-4 mb-8">
                   {[
                     { date: 'Mon, 12 Aug', time: '9:00am - 4:00pm', loc: 'Sydney CBD', seats: 4 },
                     { date: 'Wed, 14 Aug', time: '9:00am - 4:00pm', loc: 'Parramatta', seats: 8 },
                     { date: 'Fri, 16 Aug', time: '9:00am - 4:00pm', loc: 'North Sydney', seats: 2 },
                   ].map((session, i) => (
                      <div key={i} className="group border border-slate-200 rounded-2xl p-4 hover:border-brand-teal cursor-pointer transition-colors" onClick={() => navigate(`/booking?course=${course.id}&date=${session.date}`)}>
                         <div className="flex justify-between items-start mb-2">
                            <div className="font-bold text-brand-navy flex items-center gap-2">
                               <Calendar size={16} className="text-brand-teal" /> {session.date}
                            </div>
                            <span className="text-xs font-bold text-brand-red bg-rose-50 px-2 py-1 rounded-full">{session.seats} spots</span>
                         </div>
                         <div className="text-sm text-slate-500 flex items-center gap-2 mb-1">
                            <Clock size={14} /> {session.time}
                         </div>
                         <div className="text-sm text-slate-500 flex items-center gap-2">
                            <MapPin size={14} /> {session.loc}
                         </div>
                      </div>
                   ))}
                </div>

                <Button fullWidth size="lg" onClick={() => navigate(`/booking?course=${course.id}`)}>
                   Book Now
                </Button>
                <p className="text-center text-xs text-slate-400 mt-4">Secure payment via Stripe</p>
             </div>

             <div className="mt-8 bg-brand-navy rounded-3xl p-8 text-center text-white">
                <h3 className="font-bold text-lg mb-2">Need a group booking?</h3>
                <p className="text-slate-300 text-sm mb-4">We can come to your workplace.</p>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10" fullWidth onClick={() => navigate('/groups')}>
                   Enquire Now
                </Button>
             </div>
          </div>
       </div>
    </div>
  );
};

export default CourseDetail;