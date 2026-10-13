import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { 
  HeartPulse, Calendar, Clock, MapPin, Phone, ShieldCheck, 
  CheckCircle2, AlertCircle, HelpCircle, UserCheck, MessageSquare, X
} from 'lucide-react';
import { willowCareData } from '../../data/demoData';
import { siteConfig } from '../../config/siteConfig';

export const CityCareClinicDemo: React.FC = () => {
  const { openRequestModal } = useOutletContext<{ openRequestModal: () => void }>();
  const [appointmentSent, setAppointmentSent] = useState(false);
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [chosenDept, setChosenDept] = useState("Comprehensive Family Medicine");
  const [chosenDoctor, setChosenDoctor] = useState("Dr. Evelyn M. Nduta (Consultant Physician)");

  const handleApptSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (patientName && patientPhone) {
      setAppointmentSent(true);
    }
  };

  return (
    <div className="bg-[#FFFFFF] text-slate-800 font-sans min-h-screen">
      
      {/* Clinic Header Navigation */}
      <header className="bg-white border-b border-slate-200 sticky top-10 z-30 shadow-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#088395] flex items-center justify-center text-white shadow-md">
              <HeartPulse className="w-6 h-6" />
            </div>
            <div>
              <span className="font-extrabold text-2xl tracking-tight text-[#0A4D68] block">WILLOWCARE</span>
              <span className="text-[10px] uppercase font-bold text-[#088395] block -mt-1 tracking-widest">
                Medical Centre & Diagnostics
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-7 text-xs font-bold uppercase tracking-wider text-slate-600">
            <a href="#departments" className="hover:text-[#088395] transition-colors">Specialties</a>
            <a href="#practitioners" className="hover:text-[#088395] transition-colors">Practitioners</a>
            <a href="#appointment" className="hover:text-[#088395] transition-colors">Book Visit</a>
            <a href="#hours" className="hover:text-[#088395] transition-colors">Hours & Triage</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={siteConfig.getWhatsAppLink(undefined, "WillowCare Medical Centre")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Clinic WhatsApp</span>
            </a>
            <button
              onClick={openRequestModal}
              className="px-4 py-2 rounded-lg bg-[#088395] hover:bg-[#066e7d] text-white font-bold text-xs uppercase tracking-wider transition-all"
            >
              Request Clinic Site
            </button>
          </div>

        </div>
      </header>

      {/* 24/7 Triage & Emergency Info Ribbon */}
      <div className="bg-[#EBF4F6] border-b border-[#088395]/20 py-2 px-4 text-center text-xs text-[#0A4D68] font-semibold">
        <span>Emergency Triage & 24/7 Pharmacy: <strong>Open Continuous Care</strong> • Emergency Line: {willowCareData.emergencyContact}</span>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-[#EBF4F6]/70 via-white to-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest font-bold text-[#088395] bg-[#088395]/10 px-3.5 py-1 rounded-full border border-[#088395]/20">
            Compassionate Family & Specialist Outpatient Care
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0A4D68] tracking-tight leading-tight">
            Accredited Medical Care Built Around Patient Trust
          </h1>

          <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            From pediatric milestones and routine checkups to specialized diagnostic radiology, WillowCare delivers compassionate, evidence-based family care.
          </p>

          <div className="pt-2 flex justify-center gap-4">
            <a 
              href="#appointment" 
              className="px-8 py-3.5 rounded-xl bg-[#088395] hover:bg-[#066e7d] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all"
            >
              Request Doctor Appointment
            </a>
            <a 
              href="#departments" 
              className="px-8 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider transition-all"
            >
              Explore Departments
            </a>
          </div>
        </div>
      </section>

      {/* Specialty Departments */}
      <section id="departments" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest font-bold text-[#088395]">Clinical Disciplines</span>
          <h2 className="text-3xl font-black text-[#0A4D68]">Specialty Departments</h2>
          <p className="text-xs text-slate-600">Modern medical infrastructure equipped with on-site diagnostics.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {willowCareData.departments.map((dept, i) => (
            <div key={i} className="p-7 rounded-3xl bg-[#EBF4F6]/40 border border-[#088395]/20 hover:border-[#088395] transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#088395]/10 text-[#088395] flex items-center justify-center font-black">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#0A4D68]">{dept.name}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{dept.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Practitioners Directory */}
      <section id="practitioners" className="py-20 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest font-bold text-[#088395]">Physician Directory</span>
            <h2 className="text-3xl font-black text-[#0A4D68]">Consultant Practitioners</h2>
            <p className="text-xs text-slate-600">Board-certified clinicians with verified clinical experience.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {willowCareData.practitioners.map((doc, idx) => (
              <div key={idx} className="bg-white p-7 rounded-3xl border border-slate-200 shadow-card space-y-3">
                <h3 className="font-bold text-base text-[#0A4D68]">{doc.name}</h3>
                <p className="text-xs font-semibold text-[#088395]">{doc.role}</p>
                <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 space-y-1">
                  <p>Experience: <strong>{doc.experience}</strong></p>
                  <p>Consulting Hours: <strong>{doc.availability}</strong></p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Appointment Request Form */}
      <section id="appointment" className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="text-center space-y-2">
          <span className="text-xs uppercase tracking-widest font-bold text-[#088395]">Online Triage</span>
          <h2 className="text-3xl font-black text-[#0A4D68]">Request a Consultation Visit</h2>
          <p className="text-xs text-slate-600">Experience our accessible patient scheduling workflow.</p>
        </div>

        <div className="bg-[#EBF4F6]/60 p-8 rounded-3xl border border-[#088395]/20">
          {appointmentSent ? (
            <div className="text-center py-6 space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h3 className="text-2xl font-bold text-[#0A4D68]">Appointment Details Formatted!</h3>
              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                Thank you, <strong>{patientName}</strong>. Your appointment request for {chosenDept} is prepared:
              </p>
              <a
                href={siteConfig.getWhatsAppLink(`Hi WillowCare Medical Centre, I would like to schedule an appointment with ${chosenDoctor} (${chosenDept}). Patient: ${patientName}, Phone: ${patientPhone}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Transmit to Clinic WhatsApp Triage</span>
              </a>
            </div>
          ) : (
            <form onSubmit={handleApptSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Patient Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Grace Wambui"
                    value={patientName}
                    onChange={e => setPatientName(e.target.value)}
                    className="w-full p-3 rounded-xl border border-slate-200 bg-white"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Direct Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+254 7XX XXX XXX"
                    value={patientPhone}
                    onChange={e => setPatientPhone(e.target.value)}
                    className="w-full p-3 rounded-xl border border-slate-200 bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Specialty Department</label>
                  <select
                    value={chosenDept}
                    onChange={e => setChosenDept(e.target.value)}
                    className="w-full p-3 rounded-xl border border-slate-200 bg-white"
                  >
                    {willowCareData.departments.map(d => (
                      <option key={d.name}>{d.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Preferred Practitioner</label>
                  <select
                    value={chosenDoctor}
                    onChange={e => setChosenDoctor(e.target.value)}
                    className="w-full p-3 rounded-xl border border-slate-200 bg-white"
                  >
                    {willowCareData.practitioners.map(doc => (
                      <option key={doc.name}>{doc.name} ({doc.role})</option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#088395] hover:bg-[#066e7d] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all mt-2"
              >
                Schedule Appointment Request
              </button>
            </form>
          )}
        </div>

      </section>

      {/* Operating Hours & Location */}
      <section id="hours" className="py-14 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs space-y-2">
          <p className="text-slate-300">{willowCareData.hours}</p>
          <p className="text-slate-400">Location: Willow Plaza, Ground Floor, Argwings Kodhek Rd, Hurlingham, Nairobi</p>
        </div>
      </section>

    </div>
  );
};
