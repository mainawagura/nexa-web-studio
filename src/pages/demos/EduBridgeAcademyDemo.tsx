import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { 
  GraduationCap, BookOpen, Clock, Award, Users, CheckCircle2, 
  HelpCircle, ArrowRight, Phone, Mail 
} from 'lucide-react';
import { eduBridgeData } from '../../data/demoData';
import { siteConfig } from '../../config/siteConfig';

export const EduBridgeAcademyDemo: React.FC = () => {
  const { openRequestModal } = useOutletContext<{ openRequestModal: () => void }>();
  const [activeCourseId, setActiveCourseId] = useState(eduBridgeData.courses[0].id);
  const [admissionSent, setAdmissionSent] = useState(false);

  const activeCourse = eduBridgeData.courses.find(c => c.id === activeCourseId) || eduBridgeData.courses[0];

  return (
    <div className="bg-slate-50 text-slate-800 font-sans">
      
      {/* Academy Header */}
      <header className="bg-blue-900 text-white sticky top-10 z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-amber-400 text-blue-950 flex items-center justify-center font-bold">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight text-white">EDUBRIDGE</span>
              <span className="text-[10px] uppercase font-bold text-amber-300 block -mt-1 tracking-wider">Academy & Tech Institute</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6 text-xs font-bold uppercase tracking-wider text-blue-100">
            <a href="#courses" className="hover:text-amber-300 transition-colors">Programs</a>
            <a href="#faculty" className="hover:text-amber-300 transition-colors">Instructors</a>
            <a href="#admissions" className="hover:text-amber-300 transition-colors">Apply</a>
            <a href="#contact" className="hover:text-amber-300 transition-colors">Contact</a>
          </div>

          <button
            onClick={openRequestModal}
            className="px-4 py-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-blue-950 font-bold text-xs uppercase tracking-wider transition-colors"
          >
            Request Academy Site
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-blue-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <span className="text-xs uppercase tracking-widest font-bold text-amber-300 bg-blue-800/80 px-3 py-1 rounded-full border border-blue-700">
            Career Transition & Applied Digital Skills
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Master In-Demand Tech & Business Skills
          </h1>
          <p className="text-base text-blue-100 max-w-xl mx-auto leading-relaxed">
            Project-based, mentor-led programs designed to prepare students for remote global employment and high-growth African startups.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <a href="#admissions" className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-blue-950 font-bold text-xs uppercase tracking-wider shadow-lg">
              Enroll in Upcoming Cohort
            </a>
          </div>
        </div>
      </section>

      {/* Courses Catalog with Preview Tabs */}
      <section id="courses" className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest font-bold text-blue-600">Curriculum</span>
          <h2 className="text-3xl font-extrabold text-slate-950 mt-1">Our Certificate Programs</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Course Selector Cards */}
          <div className="lg:col-span-5 space-y-3">
            {eduBridgeData.courses.map(course => (
              <button
                key={course.id}
                onClick={() => setActiveCourseId(course.id)}
                className={`w-full p-5 rounded-2xl text-left border transition-all ${
                  activeCourseId === course.id
                    ? 'bg-blue-900 text-white border-blue-900 shadow-md'
                    : 'bg-white text-slate-800 border-slate-200 hover:border-blue-300'
                }`}
              >
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-sm">{course.title}</h3>
                  <span className={`text-xs font-mono font-bold ${activeCourseId === course.id ? 'text-amber-300' : 'text-blue-600'}`}>
                    {course.price}
                  </span>
                </div>
                <div className={`mt-2 flex gap-3 text-xs ${activeCourseId === course.id ? 'text-blue-200' : 'text-slate-500'}`}>
                  <span>{course.duration}</span> • <span>{course.format}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Active Course Detail Preview */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-slate-200 shadow-card space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs font-bold uppercase text-amber-600">{activeCourse.level}</span>
                <h3 className="text-2xl font-bold text-slate-950 mt-1">{activeCourse.title}</h3>
              </div>
              <span className="text-2xl font-black text-blue-900 font-mono">{activeCourse.price}</span>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">{activeCourse.desc}</p>

            <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-slate-100 text-xs">
              <div>
                <span className="text-slate-400 block font-medium">Program Duration:</span>
                <span className="font-bold text-slate-800 text-sm">{activeCourse.duration}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Delivery Format:</span>
                <span className="font-bold text-slate-800 text-sm">{activeCourse.format}</span>
              </div>
            </div>

            <div className="space-y-2 text-xs text-slate-600">
              <p className="font-bold text-slate-800">Key Outcomes:</p>
              <p className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Build 4 capstone production portfolio projects</p>
              <p className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Weekly 1-on-1 industry mentor code reviews</p>
              <p className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Certificate of Completion & career placement assistance</p>
            </div>

            <a
              href="#admissions"
              className="inline-block w-full py-3 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider text-center rounded-xl transition-colors shadow-sm"
            >
              Apply for {activeCourse.title}
            </a>
          </div>

        </div>
      </section>

      {/* Instructors */}
      <section id="faculty" className="py-20 bg-slate-100 border-t border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-xs uppercase tracking-widest font-bold text-blue-600">Mentorship</span>
          <h2 className="text-3xl font-extrabold text-slate-950 mt-1">Industry Practitioners</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
            {eduBridgeData.instructors.map((ins, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-card text-left">
                <h3 className="font-bold text-base text-slate-950">{ins.name}</h3>
                <p className="text-xs text-blue-600 font-semibold">{ins.role}</p>
                <p className="text-xs text-slate-500 mt-1">{ins.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Form */}
      <section id="admissions" className="py-20 max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-card">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-widest font-bold text-blue-600">Next Cohort Admissions</span>
            <h2 className="text-2xl font-bold text-slate-950 mt-1">Enrollment Application</h2>
            <p className="text-xs text-slate-500 mt-1">Submit your details to secure an enrollment interview.</p>
          </div>

          {admissionSent ? (
            <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-2">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h3 className="font-bold text-slate-900">Application Registered</h3>
              <p className="text-xs text-slate-600">Our admissions counselor will schedule your entrance assessment.</p>
            </div>
          ) : (
            <form onSubmit={e => { e.preventDefault(); setAdmissionSent(true); }} className="space-y-4 text-left">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Student Name</label>
                  <input required type="text" placeholder="e.g. Kelvin Mutiso" className="w-full p-2.5 border rounded-lg text-xs outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                  <input required type="email" placeholder="kelvin@gmail.com" className="w-full p-2.5 border rounded-lg text-xs outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Program of Interest</label>
                <select className="w-full p-2.5 border rounded-lg text-xs outline-none bg-white">
                  {eduBridgeData.courses.map(c => <option key={c.id}>{c.title}</option>)}
                </select>
              </div>
              <button type="submit" className="w-full py-3 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors">
                Submit Admission Request
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-blue-950 text-slate-400 py-10 text-xs border-t border-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© EduBridge Academy. Westlands Innovation Hub, Nairobi.</p>
          <button onClick={openRequestModal} className="text-amber-400 font-bold hover:underline">
            Request Education & Training Website →
          </button>
        </div>
      </footer>

    </div>
  );
};
