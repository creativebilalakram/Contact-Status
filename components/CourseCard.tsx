import React from 'react';
import { Course } from '../types';
import Button from './Button';
import { Clock, Tag, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const navigate = useNavigate();

  return (
    <div className="group relative bg-white rounded-3xl p-3 shadow-card hover:shadow-soft hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
      {/* Image Container with FlyHyer-style rounding */}
      <div className="relative h-56 w-full overflow-hidden rounded-2xl">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-brand-navy tracking-wide uppercase shadow-sm">
            {course.code || 'NDIS'}
          </span>
        </div>
        {course.popular && (
          <div className="absolute top-4 right-4">
            <span className="bg-brand-red text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase shadow-sm">
              Popular
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
           <h3 className="text-xl font-bold text-brand-navy leading-tight group-hover:text-brand-teal transition-colors">
            {course.title}
          </h3>
        </div>

        <p className="text-slate-500 text-sm mb-4 line-clamp-2">
          {course.shortDescription}
        </p>

        <div className="flex items-center gap-4 text-sm text-slate-400 font-medium mb-6">
          <div className="flex items-center gap-1.5">
            <Clock size={16} />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Tag size={16} />
            <span>{course.category === 'NDIS & Community' ? 'NDIS' : 'First Aid'}</span>
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100">
          <div>
            <span className="text-xs text-slate-400 uppercase font-semibold">From</span>
            <div className="text-2xl font-bold text-brand-navy">${course.price}</div>
          </div>
          <div className="flex gap-2">
             <Button 
                variant="outline" 
                size="sm" 
                className="!rounded-xl"
                onClick={() => navigate(`/course/${course.id}`)}
              >
               Details
             </Button>
             <Button 
                variant="primary" 
                size="sm" 
                className="!rounded-xl"
                onClick={() => navigate(`/booking?course=${course.id}`)}
             >
               Book <ArrowRight size={16} className="ml-1" />
             </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;