import React from 'react';
import Button from '../components/Button';
import { CheckCircle2, Building2, School, HardHat } from 'lucide-react';

const GroupTraining: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-20">
           <span className="text-brand-teal font-bold uppercase tracking-widest text-sm">On-Site Training</span>
           <h1 className="text-5xl font-bold text-brand-navy tracking-tight">We bring the classroom to you.</h1>
           <p className="text-xl text-slate-500">
             Tailored First Aid and NDIS training for teams of all sizes. Save time and money by training on-site.
           </p>
        </div>

        {/* Sectors */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
           {[
             { title: 'Corporate', icon: Building2, text: 'Ensure your office meets WHS compliance standards.' },
             { title: 'Education', icon: School, text: 'Specialised childcare and school training packages.' },
             { title: 'Construction', icon: HardHat, text: 'High-risk and advanced first aid for worksites.' },
           ].map((item) => (
             <div key={item.title} className="bg-brand-offWhite p-8 rounded-3xl text-center hover:-translate-y-2 transition-transform">
                <item.icon className="w-12 h-12 text-brand-teal mx-auto mb-4" />
                <h3 className="text-xl font-bold text-brand-navy mb-2">{item.title}</h3>
                <p className="text-slate-500">{item.text}</p>
             </div>
           ))}
        </div>

        {/* Form Section */}
        <div className="bg-brand-navy rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden">
           {/* Decor */}
           <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-teal rounded-full blur-[100px] opacity-20" />
           
           <div className="relative z-10 grid lg:grid-cols-2 gap-16">
              <div className="space-y-8">
                 <h2 className="text-3xl font-bold">Request a Quote</h2>
                 <p className="text-slate-300">Fill out the form and our corporate bookings team will get back to you within 2 hours with a custom quote.</p>
                 <ul className="space-y-4">
                   {['Minimum 5 participants', 'All equipment provided', 'Dates that suit you'].map(i => (
                     <li key={i} className="flex items-center gap-3 font-medium">
                       <CheckCircle2 className="text-brand-teal" /> {i}
                     </li>
                   ))}
                 </ul>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                 <div className="grid md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Organisation Name" className="w-full p-4 rounded-xl bg-white/10 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:bg-white/20" />
                    <input type="text" placeholder="Contact Person" className="w-full p-4 rounded-xl bg-white/10 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:bg-white/20" />
                 </div>
                 <div className="grid md:grid-cols-2 gap-4">
                    <input type="email" placeholder="Email Address" className="w-full p-4 rounded-xl bg-white/10 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:bg-white/20" />
                    <input type="tel" placeholder="Phone Number" className="w-full p-4 rounded-xl bg-white/10 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:bg-white/20" />
                 </div>
                 <textarea placeholder="Tell us about your training needs..." rows={4} className="w-full p-4 rounded-xl bg-white/10 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:bg-white/20" />
                 <Button fullWidth size="lg" className="!bg-brand-teal !text-white hover:bg-teal-500 border-none">
                    Send Request
                 </Button>
              </form>
           </div>
        </div>

      </div>
    </div>
  );
};

export default GroupTraining;