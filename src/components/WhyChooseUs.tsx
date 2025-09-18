import { Shield, Fuel, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function WhyChooseUs() {
  return (
    <section className='py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-black relative overflow-hidden'>
      {/* Subtle gradient accents */}
      <div className='absolute -top-40 -left-40 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl'></div>
      <div className='absolute -bottom-40 -right-40 w-[30rem] h-[30rem] bg-purple-800/10 rounded-full blur-3xl'></div>

      <div className='relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12'>
        {/* Heading */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-extrabold text-white mb-4 tracking-tight'>Why Choose Our Buses?</h2>
          <p className='text-lg text-gray-400 max-w-2xl mx-auto'>
            We deliver premium quality buses with cutting-edge features and unmatched reliability.
          </p>
        </div>

        {/* Cards */}
        <div className='grid md:grid-cols-3 gap-8'>
          <Card
            className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 
                           text-center shadow-lg hover:shadow-blue-900/40 hover:border-blue-700/40 
                           hover:scale-105 transition'
          >
            <CardContent className='pt-6'>
              <Shield className='h-12 w-12 text-blue-400 mx-auto mb-6' />
              <h3 className='text-xl font-semibold text-white mb-3'>Safety First</h3>
              <p className='text-gray-400'>
                Every bus includes GPS tracking, CCTV cameras, and emergency systems for maximum passenger safety.
              </p>
            </CardContent>
          </Card>

          <Card
            className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 
                           text-center shadow-lg hover:shadow-green-900/40 hover:border-green-700/40 
                           hover:scale-105 transition'
          >
            <CardContent className='pt-6'>
              <Fuel className='h-12 w-12 text-green-400 mx-auto mb-6' />
              <h3 className='text-xl font-semibold text-white mb-3'>Fuel Efficient</h3>
              <p className='text-gray-400'>
                Choose CNG, Diesel, or Electric — all engineered for excellent mileage and eco-friendly performance.
              </p>
            </CardContent>
          </Card>

          <Card
            className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 
                           text-center shadow-lg hover:shadow-purple-900/40 hover:border-purple-700/40 
                           hover:scale-105 transition'
          >
            <CardContent className='pt-6'>
              <Users className='h-12 w-12 text-purple-400 mx-auto mb-6' />
              <h3 className='text-xl font-semibold text-white mb-3'>Comfortable Seating</h3>
              <p className='text-gray-400'>
                Spacious, ergonomic, and customizable seating designed to ensure comfort on every trip.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
