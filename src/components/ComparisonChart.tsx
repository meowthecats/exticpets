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
    return (
      <div className="bg-white p-4 border border-slate-200 shadow-md rounded-lg">
        <p className="font-bold text-slate-800 mb-2">{label}</p>
        <div className="space-y-1 text-sm">
          <p className="text-emerald-700 font-medium">
            Lifespan: {payload[0].value} years
          </p>
          <p className="text-amber-600 font-medium">
            Setup Cost: {payload[1].value === 1 ? 'Low' : payload[1].value === 2 ? 'Medium' : payload[1].value === 3 ? 'High' : 'Very High'}
          </p>
          <p className="text-indigo-600 font-medium">
            Experience: {payload[2].value === 1 ? 'Beginner' : payload[2].value === 2 ? 'Intermediate' : 'Advanced'}
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
      "Lifespan (Years)": lifespanNum,
      "Setup Cost":
        pet.setupCost === 'Low' ? 1 : pet.setupCost === 'Medium' ? 2 : pet.setupCost === 'High' ? 3 : 4,
      "Experience Level":
        pet.experienceLevel === 'Beginner' ? 1 : pet.experienceLevel === 'Intermediate' ? 2 : 3,
    };
  });

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
            stroke="#4338ca" 
            tick={{ fill: '#4338ca' }}
            domain={[0, 4]}
            ticks={[1, 2, 3, 4]}
            tickFormatter={(val) => {
              if (val === 1) return 'Low/Beg';
              if (val === 2) return 'Med/Int';
              if (val === 3) return 'High/Adv';
              if (val === 4) return 'V.High';
              return '';
            }}
            label={{ value: 'Cost & Experience Scale', angle: 90, position: 'insideRight', style: { fill: '#4338ca', fontWeight: 600 } }} 
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend wrapperStyle={{ paddingTop: '20px' }} />
          <Bar yAxisId="left" dataKey="Lifespan (Years)" fill="#10b981" radius={[4, 4, 0, 0]} barSize={20} />
          <Bar yAxisId="right" dataKey="Setup Cost" fill="#f59e0b" radius={[4, 4, 0, 0]} barSize={20} />
          <Bar yAxisId="right" dataKey="Experience Level" fill="#4f46e5" radius={[4, 4, 0, 0]} barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
