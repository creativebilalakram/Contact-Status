import React, { useState } from 'react';
import { COURSES } from '../constants';
import { CourseCategory } from '../types';
import CourseCard from '../components/CourseCard';
import Button from '../components/Button';
import { Filter } from 'lucide-react';

const Courses: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [locationFilter, setLocationFilter] = useState<string>('All Locations');

  const filteredCourses = COURSES.filter(course => {
    const categoryMatch = filter === 'All' || course.category === filter;
    // Location filtering would technically filter available sessions, but for UI demo we just show all
    return categoryMatch;
  });

  return (
    <div className="min-h-screen bg-brand-offWhite pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-brand-navy tracking-tight">Our Courses</h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Nationally recognised training delivered by industry experts.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-3xl shadow-sm flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="flex flex-wrap gap-2">
              <Button 
                variant={filter === 'All' ? 'primary' : 'ghost'} 
                onClick={() => setFilter('All')}
                className="!rounded-xl"
              >
                All Courses
              </Button>
              <Button 
                variant={filter === CourseCategory.FIRST_AID ? 'primary' : 'ghost'} 
                onClick={() => setFilter(CourseCategory.FIRST_AID)}
                className="!rounded-xl"
              >
                First Aid & CPR
              </Button>
              <Button 
                variant={filter === CourseCategory.NDIS ? 'primary' : 'ghost'} 
                onClick={() => setFilter(CourseCategory.NDIS)}
                className="!rounded-xl"
              >
                NDIS Support
              </Button>
           </div>
           
           <div className="flex items-center gap-3">
              <Filter className="text-slate-400" size={20} />
              <select 
                className="bg-slate-50 border-none rounded-xl py-3 pl-4 pr-10 font-medium text-brand-navy focus:ring-2 focus:ring-brand-teal"
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
              >
                <option>All Locations</option>
                <option>Sydney CBD</option>
                <option>Parramatta</option>
                <option>Online</option>
              </select>
           </div>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {filteredCourses.map(course => (
             <CourseCard key={course.id} course={course} />
           ))}
           
           {/* Coming Soon Card */}
           <div className="bg-slate-100 rounded-3xl p-8 border-2 border-dashed border-slate-300 flex flex-col items-center justify-center text-center space-y-4 hover:bg-slate-50 transition-colors">
              <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center">
                 <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-bold text-slate-500">More Coming Soon</h3>
              <p className="text-slate-400">Join our waitlist for upcoming specialized workshops.</p>
              <Button variant="outline" size="sm">Join Waitlist</Button>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Courses;