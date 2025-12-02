import React from 'react';
import Mascot from './Mascot';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12 border-b border-white/10 pb-12">
         <div className="col-span-1 space-y-6">
            <div className="flex items-center gap-2">
               <Mascot className="w-8 h-8" emotion="happy" />
               <span className="font-bold text-xl">LifeGuard Academy</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
               Premium First Aid and NDIS training delivered by experienced paramedics. 
            </p>
         </div>
         
         <div>
            <h4 className="font-bold mb-6">Courses</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
               <li><a href="#" className="hover:text-brand-teal transition-colors">First Aid & CPR</a></li>
               <li><a href="#" className="hover:text-brand-teal transition-colors">Childcare First Aid</a></li>
               <li><a href="#" className="hover:text-brand-teal transition-colors">Mental Health First Aid</a></li>
               <li><a href="#" className="hover:text-brand-teal transition-colors">NDIS Support</a></li>
            </ul>
         </div>

         <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
               <li><a href="#" className="hover:text-brand-teal transition-colors">About Us</a></li>
               <li><a href="#" className="hover:text-brand-teal transition-colors">Group Training</a></li>
               <li><a href="#" className="hover:text-brand-teal transition-colors">Contact</a></li>
               <li><a href="#" className="hover:text-brand-teal transition-colors">Privacy Policy</a></li>
            </ul>
         </div>

         <div>
            <h4 className="font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
               <li>1300 000 000</li>
               <li>hello@lifeguardacademy.com.au</li>
               <li>Sydney, NSW</li>
            </ul>
         </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 pt-8 text-center text-slate-600 text-xs">
         © {new Date().getFullYear()} LifeGuard Academy. All rights reserved. Built with precision.
      </div>
    </footer>
  );
};

export default Footer;