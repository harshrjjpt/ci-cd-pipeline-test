import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='relative bg-gradient-to-br from-gray-950 via-gray-900 to-black text-gray-300 border-t border-white/10'>
      
      <div className='max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20'>
        {/* Heading */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-extrabold tracking-tight text-white mb-4'>Get In Touch</h2>
          <p className='text-lg text-gray-400 max-w-2xl mx-auto'>
            Ready to find your perfect bus? Contact us today for premium assistance.
          </p>
        </div>

        {/* Contact Grid */}
        <div className='grid md:grid-cols-3 gap-12 text-center'>
          {/* Call */}
          <div className='flex flex-col items-center'>
            <div className='w-14 h-14 flex items-center justify-center rounded-full bg-black shadow-[0_0_20px_rgba(59,130,246,0.4)] mb-6'>
              <Phone className='h-7 w-7 text-white' />
            </div>
            <h3 className='text-lg font-semibold text-white mb-1'>Call Us</h3>
            <p className='text-gray-400 mb-1'>(Ravinder Kumar)</p>
            <p className='text-gray-200 font-medium'>+91 99587 90005</p>
            <p className='text-gray-200 font-medium'>+91 96674 66865</p>
          </div>

          {/* Email */}
          <div className='flex flex-col items-center'>
            <div className='w-14 h-14 flex items-center justify-center rounded-full bg-black shadow-[0_0_20px_rgba(59,130,246,0.4)] mb-6'>
              <Mail className='h-7 w-7 text-white' />
            </div>
            <h3 className='text-lg font-semibold text-white mb-1'>Email Us</h3>
            <p className='text-gray-200 font-medium'>ravinderkumar5170206@gmail.com</p>
          </div>

          {/* Visit */}
          <div className='flex flex-col items-center'>
            <div className='w-14 h-14 flex items-center justify-center rounded-full bg-black shadow-[0_0_20px_rgba(59,130,246,0.4)] mb-6'>
              <MapPin className='h-7 w-7 text-white' />
            </div>
            <h3 className='text-lg font-semibold text-white mb-1'>Visit Us</h3>
            <p className='text-gray-200 font-medium'>SML ISUZU Dealership</p>
            <p className='text-gray-400'>Delhi NCR, India</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-t border-white/10 py-6 text-center text-sm text-gray-500'>
        <p>© {new Date().getFullYear()} SML ISUZU — All Rights Reserved.</p>
      </div>
    </footer>
  );
}
