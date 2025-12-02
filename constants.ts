import { Course, CourseCategory, Testimonial } from './types';

// Using specific Unsplash IDs for consistent, high-quality medical/training imagery
const IMAGES = {
  cpr: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800',
  firstAid: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
  childcare: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=800',
  advanced: 'https://images.unsplash.com/photo-1516574187841-693083fadd49?auto=format&fit=crop&q=80&w=800',
  mental: 'https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?auto=format&fit=crop&q=80&w=800',
  youth: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800',
  ndis1: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=800',
  ndis2: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=800',
  ndis3: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800',
  user1: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
  user2: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
  user3: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
};

export const COURSES: Course[] = [
  // First Aid & CPR
  {
    id: 'hltaid009',
    code: 'HLTAID009',
    title: 'Provide Cardiopulmonary Resuscitation',
    description: 'Learn the skills and knowledge required to perform cardiopulmonary resuscitation (CPR) in line with the Australian Resuscitation Council (ARC) guidelines.',
    shortDescription: 'Essential life-saving CPR skills for home or work.',
    price: 55,
    duration: '2.5 Hours',
    category: CourseCategory.FIRST_AID,
    image: IMAGES.cpr,
    learningOutcomes: ['Respond to an emergency situation', 'Perform CPR procedures', 'Communicate details of the incident'],
    popular: true
  },
  {
    id: 'hltaid011',
    code: 'HLTAID011',
    title: 'Provide First Aid & CPR',
    description: 'Our most popular course. Gives you the skills and knowledge required to provide a first aid response to a casualty in line with first aid guidelines.',
    shortDescription: 'The standard requirement for most Australian workplaces.',
    price: 110,
    duration: '1 Day',
    category: CourseCategory.FIRST_AID,
    image: IMAGES.firstAid,
    learningOutcomes: ['CPR & Defibrillation', 'Anaphylaxis & Asthma', 'Wound management', 'Fractures & sprains'],
    popular: true
  },
  {
    id: 'hltaid012',
    code: 'HLTAID012',
    title: 'Childcare First Aid',
    description: 'Designed for educators and support staff working within an education and care setting who are required to respond to a first aid emergency.',
    shortDescription: 'Mandatory for childcare and education workers.',
    price: 130,
    duration: '1 Day',
    category: CourseCategory.FIRST_AID,
    image: IMAGES.childcare
  },
  {
    id: 'hltaid014',
    code: 'HLTAID014',
    title: 'Advanced First Aid',
    description: 'Advanced techniques for high-risk workplaces or those seeking a higher level of first aid capability.',
    shortDescription: 'Advanced response for high-risk environments.',
    price: 185,
    duration: '2 Days',
    category: CourseCategory.FIRST_AID,
    image: IMAGES.advanced
  },
  {
    id: 'mhfa-std',
    title: 'Mental Health First Aid',
    description: 'Learn how to assist a co-worker, friend or family member who may be developing a mental health problem or experiencing a mental health crisis.',
    shortDescription: 'Support others through mental health crises.',
    price: 150,
    duration: '2 Days',
    category: CourseCategory.FIRST_AID,
    image: IMAGES.mental
  },
  {
    id: 'mhfa-youth',
    title: 'Youth Mental Health First Aid',
    description: 'Specialised training for adults who work with or support adolescents.',
    shortDescription: 'Supporting adolescents in crisis.',
    price: 180,
    duration: '2 Days',
    category: CourseCategory.FIRST_AID,
    image: IMAGES.youth
  },

  // NDIS & Community
  {
    id: 'ndis-bowel',
    title: 'Complex Bowel Care',
    description: 'Training for support workers assisting participants with complex bowel care needs.',
    shortDescription: 'Specialised support for bowel care needs.',
    price: 80,
    duration: '3 Hours',
    category: CourseCategory.NDIS,
    image: IMAGES.ndis1
  },
  {
    id: 'ndis-seizure',
    title: 'Seizure Management',
    description: 'Recognise seizure activity and administer emergency medication.',
    shortDescription: 'Epilepsy and seizure emergency response.',
    price: 80,
    duration: '3 Hours',
    category: CourseCategory.NDIS,
    image: IMAGES.ndis2
  },
  {
    id: 'ndis-stoma',
    title: 'Stoma Care',
    description: 'Best practice for stoma maintenance and care.',
    shortDescription: 'Hygienic and effective stoma support.',
    price: 80,
    duration: '2 Hours',
    category: CourseCategory.NDIS,
    image: IMAGES.ndis3
  },
  {
    id: 'ndis-enteral',
    title: 'Enteral Feeding',
    description: 'Safe management of PEG tubes and enteral feeding systems.',
    shortDescription: 'PEG feeding and tube management.',
    price: 80,
    duration: '3 Hours',
    category: CourseCategory.NDIS,
    image: IMAGES.ndis1
  },
  {
    id: 'ndis-cath',
    title: 'Urinary Catheter Support',
    description: 'Infection control and management of urinary catheters.',
    shortDescription: 'Catheter care and infection control.',
    price: 80,
    duration: '2 Hours',
    category: CourseCategory.NDIS,
    image: IMAGES.ndis2
  },
  {
    id: 'ndis-meds',
    title: 'Medication Management',
    description: 'Safe administration of medication in a community setting.',
    shortDescription: 'Administer medication safely and correctly.',
    price: 110,
    duration: '4 Hours',
    category: CourseCategory.NDIS,
    image: IMAGES.ndis3,
    popular: true
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Centre Director",
    company: "Little Stars Early Learning",
    text: "The paramedic-led training made a huge difference. The team felt confident and engaged, not just bored looking at slides.",
    avatar: IMAGES.user1
  },
  {
    id: 2,
    name: "Michael Ross",
    role: "NDIS Coordinator",
    company: "Community Connect",
    text: "Professional, clean, and incredibly practical. The NDIS specific modules were exactly what our support workers needed.",
    avatar: IMAGES.user2
  },
  {
    id: 3,
    name: "Dr. Emily Chen",
    role: "General Practitioner",
    text: "I recommend LifeGuard Academy to all my patients needing CPR certification. The standard of teaching is medical-grade.",
    avatar: IMAGES.user3
  }
];

export const LOCATIONS = [
  "Sydney CBD",
  "Parramatta",
  "North Sydney",
  "Liverpool",
  "Online (Blended)"
];
