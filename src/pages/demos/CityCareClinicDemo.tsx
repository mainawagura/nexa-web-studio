import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { 
  HeartPulse, Calendar, Clock, MapPin, Phone, ShieldCheck, 
  CheckCircle2, AlertCircle, HelpCircle, UserCheck 
} from 'lucide-react';
import { cityCareData } from '../../data/demoData';
import { siteConfig } from '../../config/siteConfig';

export const CityCareClinicDemo: React.FC = () => {
  const { openRequestModal } = useOutletContext<{ openRequestModal: () => void }>();
  const [appointmentSent, setAppointmentSent] = useState(false);

  return (
    <div className="bg-white text-slate-800 font-sans">
      
      {/* Clinic Header */}
      <header className="bg-white border-b border-slate-200 sticky top-10 z-30 shadow-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-600 flex items-center justify-center text-white">
              <HeartPulse className="w-6 h-6" />
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight text-sky-950">CITYCARE</span>
              <span className="text-[10px] uppercase font-bold text-teal-600 block -mt-1 tracking-wider">Medical Clinic & Diagnostics</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-7 text-xs font-bold uppercase tracking-wider text-slate-600">
            <a href="#services" className="hover:text-sky-600 transition-colors">Specialties</a>
            <a href="#doctors" className="hover:text-sky-600 transition-colors">Doctors</a>
            <a href="#appointment" className="hover:text-sky-600 transition-colors">Book Visit</a>
            <a href="#hours" className="hover:text-sky-600 transition-colors">Hours</a>
          </div>

          <button
            onClick={openRequestModal}
            className="px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs uppercase tracking-wider transition-colors"
          >
            Request Clinic Website
          </button>
        </div>
      </header>

      {/* Emergency Notice Banner */}
      <div className="bg-sky-50 border-b border-sky-100 py-2 px-4 text-center text-xs text-sky-900 font-medium">
        <span>Emergency Pharmacy & Urgent Triage: <strong>Open 24 Hours / 7 Days</strong> • Direct Line: (020) 800-CARE</span>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-sky-50/60 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest font-bold text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Comprehensive Outpatient Care in Nairobi
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Compassionate, Modern Healthcare for Your Entire Family
          </h1>
          <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Board-certified physicians, same-day laboratory results, digital diagnostics, and dental care delivered with warmth, dignity, and minimal wait times.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <a href="#appointment" className="px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs uppercase tracking-wider shadow-md">
              Schedule Appointment
            </a>
          </div>
        </div>
      </section>

      {/* Specialty Departments */}
      <section id="services" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest font-bold text-sky-600">Departments</span>
          <h2 className="text-3xl font-extrabold text-slate-950 mt-1">Our Medical Specialties</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cityCareData.departments.map((dept, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-card hover:border-sky-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4">
                <HeartPulse className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900">{dept.name}</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">{dept.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Doctor Profiles */}
      <section id="doctors" className="py-20 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest font-bold text-teal-700">Medical Staff</span>
            <h2 className="text-3xl font-extrabold text-slate-950 mt-1">Attending Physicians</h2>
            <p className="text-xs text-slate-500 mt-1">Fictional sample medical profiles for demonstration purposes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {cityCareData.doctors.map((doc, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-card">
                <div className="w-14 h-14 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-lg mb-4">
                  Dr
                </div>
                <h3 className="font-bold text-base text-slate-900">{doc.name}</h3>
                <p className="text-xs text-teal-700 font-semibold">{doc.specialty}</p>
                <p className="text-xs text-slate-500 mt-2">{doc.experience}</p>
                <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-600 flex items-center gap-1.5 font-medium">
                  <Clock className="w-3.5 h-3.5 text-sky-600" />
                  <span>{doc.hours}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Request Form */}
      <section id="appointment" className="py-20 max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-card">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-widest font-bold text-sky-600">Online Triage</span>
            <h2 className="text-2xl font-bold text-slate-950 mt-1">Request a Consultation</h2>
            <p className="text-xs text-slate-500 mt-1">Reserve an appointment time with our reception desk.</p>
          </div>

          {appointmentSent ? (
            <div className="p-6 bg-teal-50 border border-teal-200 rounded-2xl text-center space-y-2">
              <CheckCircle2 className="w-10 h-10 text-teal-600 mx-auto" />
              <h3 className="font-bold text-slate-900">Appointment Request Received</h3>
              <p className="text-xs text-slate-600">Our patient relations team will confirm your clinic time via SMS.</p>
            </div>
          ) : (
            <form onSubmit={e => { e.preventDefault(); setAppointmentSent(true); }} className="space-y-4 text-left">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Patient Name</label>
                  <input required type="text" placeholder="e.g. John Doe" className="w-full p-2.5 border rounded-lg text-xs outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Contact Phone</label>
                  <input required type="tel" placeholder="+254 7..." className="w-full p-2.5 border rounded-lg text-xs outline-none" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Department</label>
                  <select className="w-full p-2.5 border rounded-lg text-xs outline-none bg-white">
                    <option>General Medicine</option>
                    <option>Pediatrics</option>
                    <option>Dental Surgery</option>
                    <option>Laboratory Diagnostics</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Preferred Time</label>
                  <select className="w-full p-2.5 border rounded-lg text-xs outline-none bg-white">
                    <option>Morning (8:30 AM - 12:00 PM)</option>
                    <option>Afternoon (1:00 PM - 5:00 PM)</option>
                    <option>Evening Clinic (5:30 PM - 8:00 PM)</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="w-full py-3 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors">
                Confirm Appointment Request
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer id="hours" className="bg-slate-950 text-slate-400 py-10 text-xs border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© CityCare Clinic & Diagnostic Center. Ngong Road, Nairobi. Demo project.</p>
          <button onClick={openRequestModal} className="text-sky-400 font-bold hover:underline">
            Request Medical Clinic Website →
          </button>
        </div>
      </footer>

    </div>
  );
};
