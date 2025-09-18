import React from 'react';
import { BusIcon, School, Building2, Users, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

function StatsSection({
  stats
}: {
  stats: { totalBuses: number; schoolBuses: number; touristBuses: number; staffBuses: number; availableBuses: number };
}) {
  const items = [
    { label: 'Total Buses', value: stats.totalBuses, icon: BusIcon },
    { label: 'School Buses', value: stats.schoolBuses, icon: School },
    { label: 'Tourist Buses', value: stats.touristBuses, icon: Building2 },
    { label: 'Staff Buses', value: stats.staffBuses, icon: Users },
    { label: 'Available Now', value: stats.availableBuses, icon: CheckCircle2 }
  ];

  return (
    <section className='py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-black relative overflow-hidden'>
      {/* Subtle background accents */}
      <div className='absolute -top-40 -left-40 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl'></div>
      <div className='absolute -bottom-40 -right-40 w-[30rem] h-[30rem] bg-slate-800/10 rounded-full blur-3xl'></div>

      <div className='relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='grid grid-cols-2 md:grid-cols-5 gap-8'
        >
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className='flex flex-col items-center justify-center 
                         bg-white/5 backdrop-blur-sm border border-white/10 
                         rounded-2xl p-6 shadow-lg 
                         hover:shadow-blue-900/40 hover:border-blue-700/40 
                         hover:scale-105 transition'
            >
              <item.icon className='h-8 w-8 mb-3 text-gray-300' />
              <div className='text-3xl font-extrabold text-white mb-1'>{item.value}</div>
              <div className='text-gray-400 text-sm font-medium'>{item.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default StatsSection;
