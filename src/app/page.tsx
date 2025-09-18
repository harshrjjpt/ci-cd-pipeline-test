'use client';

import { useState, useMemo } from 'react';
import { Bus, FilterOptions } from '@/types/bus';
import { buses } from '@/data/buses';
import BusCard from '@/components/BusCard';
import BusFilters from '@/components/BusFilters';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Bus as BusIcon} from 'lucide-react';
import Hero from '@/components/Hero';
import WhyChooseUs from '@/components/WhyChooseUs';
import BuyFromTheBest from '@/components/BuyFromTheBest';
import Footer from '@/components/Footer';

export default function Home() {
  const [filters, setFilters] = useState<FilterOptions>({
    type: [],
    fuelType: [],
    minSeats: 0,
    maxSeats: 100,
    minPrice: 0,
    maxPrice: 10000000,
    searchTerm: ''
  });

  const filteredBuses = useMemo(() => {
    return buses.filter((bus) => {
      // Search filter
      if (filters.searchTerm && !bus.name.toLowerCase().includes(filters.searchTerm.toLowerCase())) {
        return false;
      }

      // Type filter
      if (filters.type.length > 0 && !filters.type.includes(bus.type)) {
        return false;
      }

      // Fuel type filter
      if (filters.fuelType.length > 0 && !filters.fuelType.includes(bus.fuelType)) {
        return false;
      }

      // Seat count filter
      if (bus.seats < filters.minSeats || bus.seats > filters.maxSeats) {
        return false;
      }

      // Price filter
      if (bus.price < filters.minPrice || bus.price > filters.maxPrice) {
        return false;
      }

      return true;
    });
  }, [filters]);

  const handleInquire = (bus: Bus) => {
    // In a real app, this would open a modal or redirect to a contact form
    alert(`Inquiry for ${bus.name}\n\nPlease contact us for more details!`);
  };

  const stats = {
    totalBuses: buses.length,
    schoolBuses: buses.filter((b) => b.type === 'school').length,
    touristBuses: buses.filter((b) => b.type === 'tourist').length,
    staffBuses: buses.filter((b) => b.type === 'staff').length,
    availableBuses: buses.filter((b) => b.availability === 'available').length
  };

  return (
    <div className='min-h-screen bg-gray-50 dark:bg-gray-900'>
      {/* Hero Section */}
      <Hero stats={stats} />

      {/* Buy From The Best Section */}
      <BuyFromTheBest />

      {/* Stats Section */}
      {/* <StatsSection stats={stats} /> */}

      {/* Features Section */}
      <WhyChooseUs />

      {/* Buses Section */}
      <section
        id='buses-section'
        className='py-16 bg-white dark:bg-black'
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-4'>Our Bus Collection</h2>
            <p className='text-lg text-gray-600 dark:text-gray-300'>
              Browse through our extensive collection of premium buses
            </p>
          </div>

          <div className='grid lg:grid-cols-4 gap-8'>
            {/* Filters Sidebar */}
            <div className='lg:col-span-1'>
              <BusFilters
                filters={filters}
                onFiltersChange={setFilters}
                totalBuses={buses.length}
                filteredCount={filteredBuses.length}
              />
            </div>

            {/* Buses Grid */}
            <div className='lg:col-span-3'>
              {filteredBuses.length === 0 ? (
                <Card className='p-12 text-center'>
                  <CardContent>
                    <BusIcon className='h-16 w-16 text-gray-400 mx-auto mb-4' />
                    <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'>No buses found</h3>
                    <p className='text-gray-600 dark:text-gray-300 mb-4'>
                      Try adjusting your filters to see more results
                    </p>
                    <Button
                      onClick={() =>
                        setFilters({
                          type: [],
                          fuelType: [],
                          minSeats: 0,
                          maxSeats: 100,
                          minPrice: 0,
                          maxPrice: 10000000,
                          searchTerm: ''
                        })
                      }
                    >
                      Clear All Filters
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-6'>
                  {filteredBuses.map((bus) => (
                    <BusCard
                      key={bus.id}
                      bus={bus}
                      onInquire={handleInquire}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Footer />
    </div>
  );
}
