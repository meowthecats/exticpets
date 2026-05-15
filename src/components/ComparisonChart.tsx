import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { PetData } from '../data/pets';

interface ComparisonChartProps {
  petsData: PetData[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white p-4 border border-slate-200 shadow-md rounded-lg">
        <p className="font-bold text-slate-800 mb-2">{label}</p>
        <div className="space-y-1 text-sm">
          <p className="text-emerald-700 font-medium flex items-center">
            <span className="w-3 h-3 rounded-full bg-emerald-500 mr-2 inline-block"></span>
            Lifespan: {data["Lifespan (Years)"]} years
          </p>
          <p className="text-amber-700 font-medium flex items-center">
            <span className="w-3 h-3 rounded-full bg-amber-500 mr-2 inline-block"></span>
            Setup Cost: {data.originalSetupCost}
          </p>
          <p className="text-indigo-700 font-medium flex items-center">
            <span className="w-3 h-3 rounded-full bg-indigo-600 mr-2 inline-block"></span>
            Experience Level: {data.originalExperienceLevel}
          </p>
        </div>
      </div>
    );
  }

  return null;
};

export function ComparisonChart({ petsData }: ComparisonChartProps) {
  const data = petsData.map((pet) => {
    let lifespanNum = 5;
    if (pet.id === 'gerbil') lifespanNum = 3;
    else if (pet.id === 'snake') lifespanNum = 17;
    else if (pet.id === 'bearded-dragon') lifespanNum = 12;
    else if (pet.id === 'rabbit') lifespanNum = 10;
    else if (pet.id === 'tortoise') lifespanNum = 75;
    else if (pet.id === 'chinchilla') lifespanNum = 15;
    else if (pet.id === 'ferret') lifespanNum = 8;
    else if (pet.id === 'degu') lifespanNum = 7;
    
    // Fallback if parsing needed
    if (lifespanNum === 5 && pet.lifespan) {
        const parts = pet.lifespan.replace(/[^0-9-]/g, '').split('-');
        if (parts.length === 2) {
          lifespanNum = Math.round((parseInt(parts[0]) + parseInt(parts[1])) / 2);
        } else if (parts.length === 1 && parts[0]) {
            lifespanNum = parseInt(parts[0]);
        }
    }

    return {
      name: pet.name.split(' (')[0].replace('Tortoise', 'Tortoise'),
      id: pet.id,
      "Lifespan (Years)": lifespanNum,
      "Setup Cost":
        pet.setupCost === 'Low' ? 1 : pet.setupCost === 'Medium' ? 2 : pet.setupCost === 'High' ? 3 : 4,
      originalSetupCost: pet.setupCost,
      "Experience Level":
        pet.experienceLevel === 'Beginner' ? 1 : pet.experienceLevel === 'Intermediate' ? 2 : 3,
      originalExperienceLevel: pet.experienceLevel,
    };
  });

  const handleBarClick = (data: any) => {
    if (data && data.id) {
      const el = document.getElementById(data.id);
      if (el) {
        // Need to account for fixed header, so adjusting slightly
        const y = el.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="w-full h-[500px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 60,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
          <XAxis 
            dataKey="name" 
            angle={-45} 
            textAnchor="end" 
            height={80} 
            tick={{ fill: '#475569', fontSize: 12, fontWeight: 500 }} 
          />
          <YAxis 
            yAxisId="left" 
            orientation="left" 
            stroke="#047857" 
            tick={{ fill: '#047857' }}
            label={{ value: 'Lifespan (Years)', angle: -90, position: 'insideLeft', style: { fill: '#047857', fontWeight: 600 } }} 
          />
          <YAxis 
            yAxisId="right" 
            orientation="right" 
            stroke="#3730a3" 
            tick={{ fill: '#3730a3' }}
            domain={[0, 4]}
            ticks={[1, 2, 3, 4]}
            tickFormatter={(val) => {
              if (val === 1) return 'Low/Beg';
              if (val === 2) return 'Med/Int';
              if (val === 3) return 'High/Adv';
              if (val === 4) return 'V.High';
              return '';
            }}
            label={{ value: 'Cost & Experience Scale', angle: 90, position: 'insideRight', style: { fill: '#3730a3', fontWeight: 600 } }} 
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
          <Legend wrapperStyle={{ paddingTop: '20px' }} />
          <Bar yAxisId="left" dataKey="Lifespan (Years)" fill="#10b981" radius={[4, 4, 0, 0]} barSize={20} onClick={handleBarClick} className="cursor-pointer hover:opacity-80 transition-opacity" />
          <Bar yAxisId="right" dataKey="Setup Cost" fill="#f59e0b" radius={[4, 4, 0, 0]} barSize={20} onClick={handleBarClick} className="cursor-pointer hover:opacity-80 transition-opacity" />
          <Bar yAxisId="right" dataKey="Experience Level" fill="#4f46e5" radius={[4, 4, 0, 0]} barSize={20} onClick={handleBarClick} className="cursor-pointer hover:opacity-80 transition-opacity" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
