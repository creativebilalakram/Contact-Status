export enum CourseCategory {
  FIRST_AID = 'First Aid & CPR',
  NDIS = 'NDIS & Community',
}

export interface Course {
  id: string;
  code?: string;
  title: string;
  description: string;
  shortDescription: string;
  price: number;
  duration: string; // e.g., "1 Day", "4 Hours"
  category: CourseCategory;
  image: string;
  popular?: boolean;
  learningOutcomes?: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company?: string;
  text: string;
  avatar: string;
}

export interface BookingState {
  courseId: string | null;
  date: string | null;
  location: string | null;
  attendees: number;
  step: number;
}
