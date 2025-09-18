import {  Award, Star, CheckCircle, Crown, Shield, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function BuyFromTheBest() {
  return (
    <section className='relative bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white overflow-hidden'>
      {/* Overlay */}
      <div className='absolute inset-0 bg-black/40'></div>

      {/* Subtle glow accents - matching Hero */}
      <div className='absolute -top-40 -left-40 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl'></div>
      <div className='absolute -bottom-40 -right-40 w-[30rem] h-[30rem] bg-slate-800/30 rounded-full blur-3xl'></div>

      <div className='relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-28'>
        {/* Luxury Heading */}
        <div className='text-center mb-20'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className='inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 text-gray-200 px-6 py-3 text-sm rounded-full mb-8'
          >
            <Crown className='h-4 w-4 text-yellow-400' />
            <span className='font-medium'>Exclusive Partnership</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className='text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white'
          >
            Buy from the Best
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className='text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed'
          >
            Connect directly with our certified sales expert for personalized service, exclusive deals, and premium
            support.
          </motion.p>
        </div>

        {/* Luxury Profile Card */}
        <div>
          <Card className='relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl shadow-2xl hover:shadow-blue-900/20 transition-all duration-500 group'>
            <CardContent className='p-16'>
              <div className='flex flex-col xl:flex-row items-center gap-16'>
                {/* Luxury Profile Image */}
                <div className='relative flex-shrink-0'>
                  <div className='relative'>
                    <Image
                      src='/assets/ravinder-kumar.JPG'
                      width={224}
                      height={224}
                      alt='Ravinder Kumar'
                      className='w-56 h-56 rounded-full object-cover border-4 border-white/20 shadow-2xl group-hover:scale-105 transition-transform duration-500'
                    />

                    {/* Luxury status indicator */}
                    <div className='absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full border-4 border-white/20 flex items-center justify-center shadow-xl'>
                      <CheckCircle className='h-6 w-6 text-white' />
                    </div>
                  </div>
                </div>

                {/* Luxury Info Section */}
                <div className='flex-1 text-center xl:text-left space-y-10'>
                  {/* Name and Title */}
                  <div>
                    <h3 className='text-4xl font-extrabold text-white mb-3'>Ravinder Kumar</h3>
                    <p className='text-xl text-gray-300 mb-4'>Senior Sales Manager</p>

                    {/* Company badge - matching Hero style */}
                    <div className='inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 text-gray-200 px-6 py-3 text-sm rounded-full'>
                      <Star className='h-4 w-4 text-gray-400' />
                      <span className='font-medium'>SML ISUZU</span>
                    </div>
                  </div>

                  {/* Luxury Contact Info */}
                  {/* <div className='space-y-6'>
                    <div className='flex items-center justify-center xl:justify-start gap-6 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300'>
                      <div className='p-4 bg-white/10 rounded-xl'>
                        <Mail className='h-6 w-6 text-gray-400' />
                      </div>
                      <a
                        href='mailto:ravinderkumar5170206@gmail.com'
                        className='text-gray-200 hover:text-white transition-colors duration-300 font-medium text-lg'
                      >
                        ravinderkumar5170206@gmail.com
                      </a>
                    </div>

                    <div className='flex items-center justify-center xl:justify-start gap-6 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300'>
                      <div className='p-4 bg-white/10 rounded-xl'>
                        <Phone className='h-6 w-6 text-gray-400' />
                      </div>
                      <a
                        href='tel:+919958790005'
                        className='text-gray-200 hover:text-white transition-colors duration-300 font-medium text-lg'
                      >
                        +91 99587 90005
                      </a>
                    </div>

                    <div className='flex items-center justify-center xl:justify-start gap-6 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300'>
                      <div className='p-4 bg-white/10 rounded-xl'>
                        <Globe className='h-6 w-6 text-gray-400' />
                      </div>
                      <a
                        href='https://smlisuzu.com'
                        target='_blank'
                        className='text-gray-200 hover:text-white transition-colors duration-300 font-medium text-lg'
                      >
                        smlisuzu.com
                      </a>
                    </div>
                  </div> */}

                  {/* Luxury CTA - matching Hero button style */}
                  {/* <div className='pt-6'>
                    <a
                      href='https://wa.me/919958790005'
                      target='_blank'
                      className='inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-300 text-lg px-12 py-5 rounded-xl shadow-lg'
                    >
                      <MessageCircle className='h-5 w-5' />
                      <span>Start Conversation</span>
                    </a>
                  </div> */}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Luxury Trust indicators - matching Hero badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className='mt-20 flex flex-wrap justify-center gap-6'
        >
          <div className='bg-white/5 backdrop-blur-sm border border-white/10 text-gray-200 px-6 py-4 text-sm rounded-full hover:bg-white/10 transition'>
            <div className='flex items-center gap-3'>
              <Award className='h-4 w-4 text-gray-400' />
              <span className='font-medium'>Certified Expert</span>
            </div>
          </div>

          <div className='bg-white/5 backdrop-blur-sm border border-white/10 text-gray-200 px-6 py-4 text-sm rounded-full hover:bg-white/10 transition'>
            <div className='flex items-center gap-3'>
              <Shield className='h-4 w-4 text-gray-400' />
              <span className='font-medium'>Quality Assured</span>
            </div>
          </div>

          <div className='bg-white/5 backdrop-blur-sm border border-white/10 text-gray-200 px-6 py-4 text-sm rounded-full hover:bg-white/10 transition'>
            <div className='flex items-center gap-3'>
              <Zap className='h-4 w-4 text-gray-400' />
              <span className='font-medium'>Premium Service</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
