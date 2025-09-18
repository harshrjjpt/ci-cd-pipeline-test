import React from 'react';
import { Badge } from './ui/badge';
import { BusIcon, Shield, Star } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

function Hero({ stats }: { stats: { totalBuses: number } }) {
  return (
    <section className='relative h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white overflow-hidden'>
      {/* Overlay */}
      <div className='absolute inset-0 bg-black/40'></div>

      {/* Subtle glow accents */}
      <div className='absolute -top-40 -left-40 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl'></div>
      <div className='absolute -bottom-40 -right-40 w-[30rem] h-[30rem] bg-slate-800/30 rounded-full blur-3xl'></div>

      <div className='relative h-full flex justify-center items-center max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-28'>
        <div className='text-center'>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className='text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white'
          >
            Premium Bus Sales
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className='text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10'
          >
            Trusted marketplace for modern, safe, and reliable buses — built for Schools, Tourists, and Staff.
          </motion.p>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className='flex flex-wrap justify-center gap-4 mb-12'
          >
            <Badge className='bg-white/5 backdrop-blur-sm border border-white/10 text-gray-200 px-4 py-2 text-sm rounded-full hover:bg-white/10 transition'>
              <BusIcon className='h-4 w-4 mr-2 text-gray-400' />
              {stats.totalBuses} Buses Available
            </Badge>
            <Badge className='bg-white/5 backdrop-blur-sm border border-white/10 text-gray-200 px-4 py-2 text-sm rounded-full hover:bg-white/10 transition'>
              <Shield className='h-4 w-4 mr-2 text-gray-400' />
              Quality Assured
            </Badge>
            <Badge className='bg-white/5 backdrop-blur-sm border border-white/10 text-gray-200 px-4 py-2 text-sm rounded-full hover:bg-white/10 transition'>
              <Star className='h-4 w-4 mr-2 text-gray-400' />
              Best Prices
            </Badge>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Button
              size='lg'
              className='bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-300 text-lg px-10 py-4 rounded-xl shadow-lg'
              onClick={() => document.getElementById('buses-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Browse Buses
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
