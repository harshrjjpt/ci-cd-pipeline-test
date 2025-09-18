"use client";

import { useState } from 'react';
import { FilterOptions } from '@/types/bus';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, X } from 'lucide-react';

interface BusFiltersProps {
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
  totalBuses: number;
  filteredCount: number;
}

export default function BusFilters({ filters, onFiltersChange, totalBuses, filteredCount }: BusFiltersProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleTypeChange = (type: string) => {
    const newTypes = filters.type.includes(type)
      ? filters.type.filter(t => t !== type)
      : [...filters.type, type];
    
    onFiltersChange({ ...filters, type: newTypes });
  };

  const handleFuelTypeChange = (fuelType: string) => {
    const newFuelTypes = filters.fuelType.includes(fuelType)
      ? filters.fuelType.filter(f => f !== fuelType)
      : [...filters.fuelType, fuelType];
    
    onFiltersChange({ ...filters, fuelType: newFuelTypes });
  };

  const clearAllFilters = () => {
    onFiltersChange({
      type: [],
      fuelType: [],
      minSeats: 0,
      maxSeats: 100,
      minPrice: 0,
      maxPrice: 10000000,
      searchTerm: ''
    });
  };

  const hasActiveFilters = filters.type.length > 0 || 
                          filters.fuelType.length > 0 || 
                          filters.minSeats > 0 || 
                          filters.maxSeats < 100 || 
                          filters.minPrice > 0 || 
                          filters.maxPrice < 10000000 || 
                          filters.searchTerm.length > 0;

  return (
    <Card className="w-full mb-6">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filters
            {hasActiveFilters && (
              <Badge variant="secondary" className="ml-2">
                {filteredCount} of {totalBuses}
              </Badge>
            )}
          </CardTitle>
          <div className="flex items-center gap-2">
            {hasActiveFilters && (
              <Button
                variant="outline"
                size="sm"
                onClick={clearAllFilters}
                className="text-xs"
              >
                <X className="h-3 w-3 mr-1" />
                Clear All
              </Button>
            )}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="md:hidden"
            >
              {isExpanded ? 'Hide' : 'Show'} Filters
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className={`space-y-4 ${isExpanded ? 'block' : 'hidden md:block'}`}>
        {/* Search */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Search Buses</label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by bus name or model..."
              value={filters.searchTerm}
              onChange={(e) => onFiltersChange({ ...filters, searchTerm: e.target.value })}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
        </div>

        {/* Bus Type */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Bus Type</label>
          <div className="flex flex-wrap gap-2">
            {['school', 'tourist', 'staff'].map((type) => (
              <Button
                key={type}
                variant={filters.type.includes(type) ? "default" : "outline"}
                size="sm"
                onClick={() => handleTypeChange(type)}
                className="capitalize"
              >
                {type}
              </Button>
            ))}
          </div>
        </div>

        {/* Fuel Type */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Fuel Type</label>
          <div className="flex flex-wrap gap-2">
            {['cng', 'diesel', 'electric'].map((fuelType) => (
              <Button
                key={fuelType}
                variant={filters.fuelType.includes(fuelType) ? "default" : "outline"}
                size="sm"
                onClick={() => handleFuelTypeChange(fuelType)}
                className="uppercase"
              >
                {fuelType}
              </Button>
            ))}
          </div>
        </div>

        {/* Seat Range */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Seat Count</label>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-xs text-gray-500">Min Seats</label>
              <input
                type="number"
                min="0"
                max="100"
                value={filters.minSeats}
                onChange={(e) => onFiltersChange({ ...filters, minSeats: parseInt(e.target.value) || 0 })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div>
              <label className="text-xs text-gray-500">Max Seats</label>
              <input
                type="number"
                min="0"
                max="100"
                value={filters.maxSeats}
                onChange={(e) => onFiltersChange({ ...filters, maxSeats: parseInt(e.target.value) || 100 })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
          </div>
        </div>

        {/* Price Range */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Price Range</label>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-xs text-gray-500">Min Price (₹)</label>
              <input
                type="number"
                min="0"
                max="10000000"
                step="100000"
                value={filters.minPrice}
                onChange={(e) => onFiltersChange({ ...filters, minPrice: parseInt(e.target.value) || 0 })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div>
              <label className="text-xs text-gray-500">Max Price (₹)</label>
              <input
                type="number"
                min="0"
                max="10000000"
                step="100000"
                value={filters.maxPrice}
                onChange={(e) => onFiltersChange({ ...filters, maxPrice: parseInt(e.target.value) || 10000000 })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
