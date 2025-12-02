import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Button from '../components/Button';
import { CheckCircle2, ChevronRight, CreditCard } from 'lucide-react';

const Booking: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [step, setStep] = useState(1);
  const courseId = searchParams.get('course');
  
  // Dummy state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    attendees: 1
  });

  const nextStep = () => setStep(s => Math.min(s + 1, 3));

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
         
         {/* Progress Bar */}
         <div className="flex justify-between mb-12 relative">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -z-10 -translate-y-1/2 rounded-full" />
            <div className="absolute top-1/2 left-0 h-1 bg-brand-teal -z-10 -translate-y-1/2 rounded-full transition-all duration-500" style={{ width: `${((step - 1) / 2) * 100}%` }} />
            
            {[1, 2, 3].map(s => (
               <div key={s} className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg border-4 transition-colors duration-500 bg-white ${step >= s ? 'border-brand-teal text-brand-teal' : 'border-slate-200 text-slate-300'}`}>
                  {step > s ? <CheckCircle2 /> : s}
               </div>
            ))}
         </div>

         <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-brand-teal/5">
            {/* Step 1: Selection */}
            {step === 1 && (
               <div className="space-y-8 animate-in slide-in-from-right-4 fade-in">
                  <h2 className="text-3xl font-bold text-brand-navy">Choose Session</h2>
                  <div className="bg-brand-offWhite p-6 rounded-2xl border border-slate-200">
                     <p className="text-sm font-bold text-brand-teal uppercase tracking-wider mb-2">Selected Course</p>
                     <h3 className="text-xl font-bold text-brand-navy">HLTAID011 Provide First Aid</h3>
                     <p className="text-slate-500">$110.00 per person</p>
                  </div>
                  
                  <div className="space-y-4">
                     <label className="block font-bold text-brand-navy">Select Date & Location</label>
                     <div className="grid gap-4">
                        {[1,2,3].map(i => (
                           <label key={i} className="flex items-center p-4 border rounded-2xl cursor-pointer hover:border-brand-teal hover:bg-brand-teal/5 transition-colors">
                              <input type="radio" name="session" className="w-5 h-5 text-brand-teal accent-brand-teal" />
                              <div className="ml-4">
                                 <div className="font-bold text-brand-navy">Monday, 12th August</div>
                                 <div className="text-sm text-slate-500">9:00 AM • Sydney CBD</div>
                              </div>
                              <div className="ml-auto text-sm font-bold text-brand-teal">Available</div>
                           </label>
                        ))}
                     </div>
                  </div>

                  <div className="flex justify-end">
                     <Button size="lg" onClick={nextStep}>
                        Next Step <ChevronRight size={20} className="ml-2" />
                     </Button>
                  </div>
               </div>
            )}

            {/* Step 2: Details */}
            {step === 2 && (
               <div className="space-y-8 animate-in slide-in-from-right-4 fade-in">
                  <h2 className="text-3xl font-bold text-brand-navy">Your Details</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                        <label className="font-bold text-brand-navy text-sm">Full Name</label>
                        <input type="text" className="w-full p-4 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-brand-teal" placeholder="John Doe" />
                     </div>
                     <div className="space-y-2">
                        <label className="font-bold text-brand-navy text-sm">Email Address</label>
                        <input type="email" className="w-full p-4 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-brand-teal" placeholder="john@example.com" />
                     </div>
                     <div className="space-y-2">
                        <label className="font-bold text-brand-navy text-sm">Phone</label>
                        <input type="tel" className="w-full p-4 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-brand-teal" placeholder="0400 000 000" />
                     </div>
                     <div className="space-y-2">
                        <label className="font-bold text-brand-navy text-sm">Number of Attendees</label>
                        <select className="w-full p-4 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-brand-teal">
                           <option>1</option>
                           <option>2</option>
                           <option>3+</option>
                        </select>
                     </div>
                  </div>
                  <div className="flex justify-between pt-4">
                     <Button variant="ghost" onClick={() => setStep(1)}>Back</Button>
                     <Button size="lg" onClick={nextStep}>
                        Continue to Payment <ChevronRight size={20} className="ml-2" />
                     </Button>
                  </div>
               </div>
            )}

            {/* Step 3: Payment */}
            {step === 3 && (
               <div className="space-y-8 animate-in slide-in-from-right-4 fade-in text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600 mb-6">
                     <CreditCard size={40} />
                  </div>
                  <h2 className="text-3xl font-bold text-brand-navy">Payment Demo</h2>
                  <p className="text-slate-500">In a real app, Stripe/PayPal element would load here.</p>
                  
                  <div className="bg-slate-50 p-8 rounded-3xl max-w-sm mx-auto space-y-4">
                     <div className="flex justify-between font-bold text-brand-navy text-lg border-b pb-4">
                        <span>Total</span>
                        <span>$110.00</span>
                     </div>
                     <Button fullWidth size="lg">Pay Securely</Button>
                  </div>
                  
                  <Button variant="ghost" onClick={() => setStep(2)}>Back</Button>
               </div>
            )}
         </div>
      </div>
    </div>
  );
};

export default Booking;