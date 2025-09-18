
'use client';

import { Bus } from '@/types/bus';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

import { Badge } from '@/components/ui/badge';
import { Users, Fuel, Calendar, Gauge, Settings } from 'lucide-react';
import Button from './ui/Buttons/Button';

interface BusCardProps {
  bus: Bus;
  onInquire: (bus: Bus) => void;
}

export default function BusCard({ bus, onInquire }: BusCardProps) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'school':
        return 'bg-blue-500/20 text-blue-300 border border-blue-600/40';
      case 'tourist':
        return 'bg-green-500/20 text-green-300 border border-green-600/40';
      case 'staff':
        return 'bg-purple-500/20 text-purple-300 border border-purple-600/40';
      default:
        return 'bg-gray-500/20 text-gray-300 border border-gray-600/40';
    }
  };

  const getFuelColor = (fuelType: string) => {
    switch (fuelType) {
      case 'cng':
        return 'bg-emerald-500/20 text-emerald-300 border border-emerald-600/40';
      case 'diesel':
        return 'bg-orange-500/20 text-orange-300 border border-orange-600/40';
      case 'electric':
        return 'bg-sky-500/20 text-sky-300 border border-sky-600/40';
      default:
        return 'bg-gray-500/20 text-gray-300 border border-gray-600/40';
    }
  };

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'available':
        return 'bg-green-500/20 text-green-300 border border-green-600/40';
      case 'reserved':
        return 'bg-yellow-500/20 text-yellow-300 border border-yellow-600/40';
      case 'sold':
        return 'bg-red-500/20 text-red-300 border border-red-600/40';
      default:
        return 'bg-gray-500/20 text-gray-300 border border-gray-600/40';
    }
  };

  return (
    <Card className='group w-full max-w-md mx-auto rounded-2xl bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden'>
      {/* Image */}
      <CardHeader className='p-0 relative'>
        <div className='relative w-full h-52 overflow-hidden'>
          {bus.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={
                'https://gst-contracts.s3.ap-southeast-1.amazonaws.com/uploads/bcc/cms/asset/avatar/324800/banner6.jpg'
              }
              alt={bus.name}
              className='w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105'
            />
          ) : (
            <div className='w-full h-full bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center'>
              <div className='text-white text-6xl'>🚌</div>
            </div>
          )}

          {/* Badges on top of image */}
          <div className='absolute top-3 left-3 flex gap-2'>
            <Badge className={`${getTypeColor(bus.type)} rounded-full px-3 py-1 text-xs font-medium`}>{bus.type}</Badge>
            <Badge className={`${getAvailabilityColor(bus.availability)} rounded-full px-3 py-1 text-xs font-medium`}>
              {bus.availability}
            </Badge>
          </div>
        </div>
      </CardHeader>

      {/* Content */}
      <CardContent className='p-5'>
        <h3 className='text-xl font-semibold text-white mb-1 line-clamp-1'>{bus.name}</h3>
        <p className='text-sm text-gray-400 mb-4 line-clamp-2'>{bus.description}</p>

        {/* Details */}
        <div className='grid grid-cols-2 gap-y-3 text-sm'>
          <div className='flex items-center gap-2 text-gray-300'>
            <Users className='h-4 w-4 text-gray-500' />
            <span>{bus.seats} Seats</span>
          </div>

          <div className='flex items-center gap-2'>
            <Fuel className='h-4 w-4 text-gray-500' />
            <Badge className={`${getFuelColor(bus.fuelType)} text-xs rounded-full px-2 py-0.5`}>
              {bus.fuelType.toUpperCase()}
            </Badge>
          </div>

          <div className='flex items-center gap-2 text-gray-300'>
            <Calendar className='h-4 w-4 text-gray-500' />
            <span>{bus.year}</span>
          </div>

          <div className='flex items-center gap-2 text-gray-300'>
            <Settings className='h-4 w-4 text-gray-500' />
            <span className='capitalize'>{bus.transmission}</span>
          </div>
        </div>

        {bus.mileage > 0 && (
          <div className='flex items-center gap-2 text-sm mt-3 text-gray-300'>
            <Gauge className='h-4 w-4 text-gray-500' />
            <span>{bus.mileage} km/l</span>
          </div>
        )}

        {/* Features */}
        <div className='mt-4'>
          <h4 className='text-sm font-medium text-white mb-2'>Key Features</h4>
          <div className='flex flex-wrap gap-2 max-h-[72px] overflow-hidden'>
            {bus.features.slice(0, 4).map((feature, index) => (
              <Badge
                key={index}
                variant='outline'
                className='text-xs rounded-full px-2 py-0.5 border-gray-600 text-gray-300'
              >
                {feature}
              </Badge>
            ))}
            {bus.features.length > 4 && (
              <Badge
                variant='outline'
                className='text-xs rounded-full px-2 py-0.5 border-gray-600 text-gray-400'
              >
                +{bus.features.length - 4} more
              </Badge>
            )}
          </div>
        </div>
      </CardContent>

      {/* CTA */}
      <CardFooter className='p-5 pt-0'>
        <Button
          variant='primary'
          onClick={() => onInquire(bus)}
          disabled={bus.availability === 'sold'}
          className='w-full'
        >
          {bus.availability === 'sold' ? 'Sold Out' : bus.availability === 'reserved' ? 'Reserved' : 'Inquire Now'}
        </Button>
      </CardFooter>
    </Card>
  );
}
