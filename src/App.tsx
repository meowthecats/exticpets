/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CheckCircle2, XCircle, Info, Clock, DollarSign, Activity, AlertTriangle, ShieldCheck, HeartPulse, ExternalLink, ChevronRight, Menu, X, ArrowUpCircle, Star } from 'lucide-react';
import { petsData } from './data/pets';
import { ComparisonChart } from './components/ComparisonChart';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPets = petsData.filter(pet => 
    pet.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const scrollToID = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="font-sans bg-slate-50 min-h-screen text-slate-900 pb-12 relative scroll-smooth selection:bg-emerald-200">
      
      {/* Navigation */}
      <nav className="fixed w-full bg-emerald-800 text-white z-50 border-b-4 border-emerald-950 shrink-0 top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center cursor-pointer gap-3" onClick={scrollToTop}>
              <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-emerald-800"></div>
              </div>
              <span className="font-bold text-xl tracking-tight uppercase">Exotic Pet Compass</span>
            </div>
            
            {/* Desktop Quick Links */}
            <div className="hidden md:flex space-x-6 overflow-x-auto items-center">
              <span className="text-[10px] font-bold text-emerald-200 uppercase tracking-widest">Quick Jump:</span>
              {petsData.map(pet => (
                <button
                  key={`nav-${pet.id}`}
                  onClick={() => scrollToID(pet.id)}
                  className="text-sm font-medium hover:text-emerald-200 transition-colors"
                >
                  {pet.name.split(' ')[0]}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white hover:text-emerald-200 focus:outline-none"
              >
                {mobileMenuOpen ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-emerald-800 border-b-4 border-emerald-950 px-2 pt-2 pb-3 space-y-1 shadow-lg text-white">
            <div className="px-3 pb-2 pt-1">
              <input
                type="text"
                placeholder="Search pets..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3 py-2 bg-emerald-900 border border-emerald-700 rounded-md text-white placeholder-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
              />
            </div>
            {filteredPets.length > 0 ? (
              filteredPets.map(pet => (
                <button
                  key={`mobilenav-${pet.id}`}
                  onClick={() => scrollToID(pet.id)}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:text-emerald-200 hover:bg-emerald-900 transition-colors"
                >
                  {pet.name}
                </button>
              ))
            ) : (
              <div className="px-3 py-2 text-sm text-emerald-300 italic">
                No pets found matching "{searchQuery}"
              </div>
            )}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 max-w-7xl mx-auto text-center flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-6 uppercase">
          Exotic Pet <span className="text-emerald-700 border-b-4 border-emerald-500">Compass</span>
        </h1>
        <p className="text-sm md:text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Thinking of expanding your family beyond a cat or dog? Exotic and small mammals, reptiles, and rodents offer incredible companionship. Compare their lifespans, setup costs, and care requirements to find the perfect fit for your lifestyle.
        </p>
      </section>

      {/* Recommended Beginner Highlight */}
      <section className="max-w-5xl mx-auto px-4 mb-20 scroll-mt-24 flex" id="beginner-recommendation">
        <div className="bg-emerald-100 p-6 md:p-10 border-l-4 border-emerald-600 rounded-r-lg shadow-sm flex-1">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <span className="text-[10px] font-black uppercase text-emerald-700 tracking-widest block mb-1">Top Recommendation</span>
              <h2 className="text-2xl md:text-3xl font-bold leading-tight mt-1 italic text-slate-900 mb-4">The Gerbil</h2>
              <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                While every pet requires dedication, the <strong><button onClick={() => scrollToID('gerbil')} className="text-emerald-700 underline font-semibold">Gerbil</button></strong> is widely considered the easiest on this list regarding <em>setup and environmental cost</em>. 
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 mt-1 shrink-0"></div>
                  <p className="text-xs font-semibold text-slate-800">Simple Environment: A 20-gallon long glass tank with a heavy lid and deep bedding is all they need.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 mt-1 shrink-0"></div>
                  <p className="text-xs font-semibold text-slate-800">Straightforward Diet: High-quality commercial seed/pellet mix and water.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 mt-1 shrink-0"></div>
                  <p className="text-xs font-semibold text-slate-800">Low Odor/Mess: Being desert animals, they produce very little urine.</p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white border border-slate-200 rounded-lg">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Honorable Mention</h3>
                <p className="text-[11px] leading-relaxed italic text-slate-500">
                  "If you prefer reptiles, the Corn Snake is incredibly low-maintenance daily, but their initial heating setup requires strict precision."
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 aspect-square overflow-hidden rounded border border-slate-200 shadow-sm relative group bg-white">
                <img src={petsData.find(p => p.id === 'gerbil')?.imageUrl} alt="Gerbil" className="object-contain w-full h-full grayscale-[20%] group-hover:grayscale-0 transition duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="max-w-7xl mx-auto px-4 mb-24 flex flex-col">
        <div className="bg-white border border-slate-200 rounded-lg overflow-hidden flex-1 shadow-sm">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead className="bg-slate-900 text-white">
              <tr>
                <th className="p-3 text-[11px] font-bold uppercase tracking-wider">Pet</th>
                <th className="p-3 text-[11px] font-bold uppercase tracking-wider">Lifespan</th>
                <th className="p-3 text-[11px] font-bold uppercase tracking-wider">Setup Cost</th>
                <th className="p-3 text-[11px] font-bold uppercase tracking-wider">Experience</th>
                <th className="p-3 text-[11px] font-bold uppercase tracking-wider">Interaction</th>
                <th className="p-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {petsData.map((pet, idx) => (
                <tr key={`${pet.id}-row`} className={`hover:bg-emerald-50/30 transition-colors bg-white`}>
                  <td className="p-3 text-xs font-bold text-slate-900 flex items-center space-x-3">
                    <div className="w-8 h-8 rounded bg-slate-200 overflow-hidden shrink-0">
                      <img src={pet.imageUrl} alt={pet.name} className="w-full h-full object-contain" />
                    </div>
                    <span>{pet.name}</span>
                  </td>
                  <td className="p-3 text-xs text-slate-600">{pet.lifespan}</td>
                  <td className="p-3 text-slate-600">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase 
                      ${pet.setupCost === 'Low' ? 'bg-emerald-100 text-emerald-800' : 
                        pet.setupCost === 'Medium' ? 'bg-amber-100 text-amber-800' : 
                        'bg-rose-100 text-rose-800'}`}>
                      {pet.setupCost}
                    </span>
                  </td>
                  <td className="p-3 text-xs text-slate-600 font-semibold uppercase">{pet.experienceLevel}</td>
                  <td className="p-3 text-xs text-slate-600 uppercase font-semibold">{pet.interactionLevel}</td>
                  <td className="p-3 text-slate-600 text-right">
                    <button 
                      onClick={() => scrollToID(pet.id)}
                      className="text-emerald-700 hover:text-emerald-900 font-bold text-[10px] uppercase tracking-wider inline-flex items-center"
                    >
                      View <ChevronRight className="w-3 h-3 ml-1" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Detailed Pet Reviews */}
      <section className="max-w-6xl mx-auto px-4 space-y-16">
        {petsData.map((pet, index) => (
          <div key={pet.id} id={pet.id} className="scroll-mt-24 bg-white rounded-lg border border-slate-200 shadow-sm flex flex-col overflow-hidden">
            <div className={`flex flex-col lg:flex-row`}>
              
              {/* Pet Image Area */}
              <div className="w-full lg:w-2/5 h-64 lg:h-auto border-b lg:border-b-0 lg:border-r border-slate-200 bg-slate-100 overflow-hidden relative">
                <img src={pet.imageUrl} alt={pet.name} className="absolute inset-0 w-full h-full object-contain" />
                <div className="absolute inset-x-0 bottom-0 bg-slate-900/80 p-4">
                  <h3 className="text-2xl font-bold text-white uppercase tracking-tight">{pet.name}</h3>
                  <p className="text-[10px] text-emerald-300 font-bold uppercase tracking-widest mt-1">
                    {pet.scientificName}
                  </p>
                </div>
              </div>

              {/* Pet Info Area */}
              <div className="w-full lg:w-3/5 p-6 lg:p-8">
                {pet.experienceLevel === 'Beginner' && (
                  <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-xs uppercase tracking-wider mb-5 border border-emerald-200 shadow-sm">
                    <Star className="w-4 h-4 mr-2 fill-emerald-500 text-emerald-500" />
                    Best Beginner
                  </div>
                )}
                <p className="text-sm text-slate-600 mb-6 italic border-l-4 border-slate-200 pl-4 py-1 leading-relaxed">
                  "{pet.quickSummary}"
                </p>

                {/* Badges */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                    <div className="bg-slate-50 p-3 rounded border border-slate-200 flex flex-col justify-center">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-1">Lifespan</span>
                      <span className="font-bold text-slate-800 text-sm">{pet.lifespan}</span>
                    </div>
                    <div className="bg-slate-50 p-3 rounded border border-slate-200 flex flex-col justify-center">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-1">Setup Cost</span>
                      <span className="font-bold text-slate-800 text-sm">{pet.setupCost}</span>
                    </div>
                    <div className="bg-slate-50 p-3 rounded border border-slate-200 flex flex-col justify-center">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-1">Skill Level</span>
                      <span className="font-bold text-slate-800 text-sm">{pet.experienceLevel}</span>
                    </div>
                    <div className="bg-slate-50 p-3 rounded border border-slate-200 flex flex-col justify-center">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-1">Interaction</span>
                      <span className="font-bold text-slate-800 text-sm">{pet.interactionLevel}</span>
                    </div>
                </div>

                {/* Pros & Cons */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2 uppercase text-xs tracking-widest text-emerald-700">
                      Core Pros
                    </h4>
                    <ul className="space-y-3">
                      {pet.pros.map((pro, i) => (
                        <li key={i} className="text-sm text-slate-600 flex items-start font-medium">
                          <span className="w-1.5 h-1.5 bg-emerald-500 mt-1.5 mr-2 shrink-0"></span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2 uppercase text-xs tracking-widest text-rose-700">
                      Core Cons
                    </h4>
                    <ul className="space-y-3">
                      {pet.cons.map((con, i) => (
                        <li key={i} className="text-sm text-slate-600 flex items-start font-medium">
                          <span className="w-1.5 h-1.5 bg-rose-500 mt-1.5 mr-2 shrink-0"></span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Care Requirements */}
                <div className="bg-slate-50 rounded p-6 mb-8 border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-4 uppercase text-[11px] tracking-widest">
                    Care Requirements
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <strong className="text-xs text-slate-900 block mb-1 uppercase tracking-wide">Housing & Environment</strong>
                      <p className="text-sm text-slate-600">{pet.careRequirements.housing}</p>
                    </div>
                    <div>
                      <strong className="text-xs text-slate-900 block mb-1 uppercase tracking-wide">Diet</strong>
                      <p className="text-sm text-slate-600">{pet.careRequirements.diet}</p>
                    </div>
                    <div>
                      <strong className="text-xs text-slate-900 block mb-1 uppercase tracking-wide">Health & Maintenance</strong>
                      <p className="text-sm text-slate-600">{pet.careRequirements.healthAndMaintenance}</p>
                    </div>
                  </div>
                </div>

                {/* Lifestyle & Sources */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 uppercase text-[11px] tracking-widest">Lifestyle Suitability</h4>
                    <p className="text-sm text-slate-600 italic">
                      "{pet.lifestyleSuitability}"
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 uppercase text-[11px] tracking-widest">Reputable Sources</h4>
                    <div className="flex flex-col gap-2">
                      {pet.reputableSources.map((source, i) => (
                        <a 
                          key={i} 
                          href={source.url} 
                          target="_blank" 
                          rel="noreferrer"
                          className="inline-flex items-center text-xs font-bold text-emerald-700 hover:text-emerald-500 transition-colors uppercase tracking-wide"
                        >
                          <ChevronRight className="w-3 h-3 mr-1" />
                          {source.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Visual Comparison Chart */}
      <section className="max-w-7xl mx-auto px-4 mt-24 mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-2 uppercase tracking-tighter">
          Visual Comparison Chart
        </h2>
        <p className="text-slate-500 mb-8 max-w-2xl font-medium">
          A visual summary of the key features of each pet, including lifespan, setup cost, and experience level.
        </p>
        <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-6 lg:p-10">
          <ComparisonChart petsData={petsData} />
        </div>
      </section>

      {/* Floating back to top button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-emerald-600 text-white p-3 rounded-full shadow-lg hover:bg-emerald-700 transition transform hover:-translate-y-1 z-50 focus:outline-none"
        aria-label="Back to top"
      >
        <ArrowUpCircle className="w-6 h-6" />
      </button>

      {/* Footer */}
      <footer className="mt-24 h-16 bg-slate-200 flex items-center px-4 md:px-8 justify-between shrink-0 border-t-2 border-slate-300">
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest italic">Data Verified by Veterinary Sources 2024</span>
        <div className="flex gap-4">
           <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">A-Z List: 01-{petsData.length < 10 ? `0${petsData.length}` : petsData.length}</span>
        </div>
      </footer>
    </div>
  );
}

