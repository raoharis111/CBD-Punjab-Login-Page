import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Building, MapPin, DollarSign, Calendar } from "lucide-react";
import { useState } from "react";

interface PropertySelectionProps {
  onNavigate: (screen: string) => void;
  onUpdateData: (data: any) => void;
  data: any;
}

// Utility functions for unit conversion
const convertSqFtToMarla = (sqft: number): number => {
  return sqft / 225; // 1 Marla = 225 sq ft
};

const formatAreaSize = (areaText: string, showInMarlas: boolean): string => {
  if (showInMarlas) {
    if (areaText.includes("Marla") || areaText.includes("Kanal")) {
      return areaText; // Already in traditional units
    } else if (areaText.includes("sq ft")) {
      const sqft = parseInt(areaText.replace(/[^\d]/g, ''));
      const marlas = convertSqFtToMarla(sqft);
      if (marlas >= 20) {
        const kanals = marlas / 20;
        return `${kanals.toFixed(1)} Kanal (${sqft} sq ft)`;
      } else {
        return `${marlas.toFixed(1)} Marla (${sqft} sq ft)`;
      }
    }
    return areaText;
  } else {
    if (areaText.includes("sq ft")) {
      return areaText; // Already in sq ft
    } else if (areaText.includes("Marla")) {
      const marlas = parseFloat(areaText);
      const sqft = marlas * 225;
      return `${sqft} sq ft (${areaText})`;
    } else if (areaText.includes("Kanal")) {
      const kanals = parseFloat(areaText);
      const sqft = kanals * 4500;
      return `${sqft} sq ft (${areaText})`;
    }
    return areaText;
  }
};

export default function PropertySelection({ onNavigate, onUpdateData, data }: PropertySelectionProps) {
  const [selectedProperty, setSelectedProperty] = useState<any>(null);
  const [showInMarlas, setShowInMarlas] = useState(true); // Default to Marlas for Pakistani context

  const mockProperties = [
    {
      id: 1,
      name: "Commercial Complex A",
      location: "Phase 1, CBD Punjab",
      type: "Commercial",
      availablePlots: 24,
      processingFees: 50000,
      totalPrice: 15000000,
      downPaymentPercentage: 20,
      installments: 36,
      monthlyInstallment: 350000,
      features: ["Prime Location", "Modern Infrastructure", "24/7 Security"],
      plotSizes: ["5000 sq ft", "8000 sq ft", "12000 sq ft"],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      name: "Residential Phase 1",
      location: "Sector B, CBD Punjab",
      type: "Residential",
      availablePlots: 18,
      processingFees: 35000,
      totalPrice: 8500000,
      downPaymentPercentage: 25,
      installments: 48,
      monthlyInstallment: 150000,
      features: ["Family Friendly", "Parks & Recreation", "School Nearby"],
      plotSizes: ["5 Marla", "10 Marla", "1 Kanal"],
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      name: "Industrial Zone B",
      location: "Phase 2, CBD Punjab",
      type: "Industrial",
      availablePlots: 12,
      processingFees: 75000,
      totalPrice: 25000000,
      downPaymentPercentage: 15,
      installments: 60,
      monthlyInstallment: 350000,
      features: ["Wide Roads", "Power Backup", "Logistics Access"],
      plotSizes: ["1 Kanal", "2 Kanal", "1 Acre"],
      image: "https://images.unsplash.com/photo-1565611741207-7c9bcde70beb?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      name: "Mixed Use Development",
      location: "Central Area, CBD Punjab",
      type: "Mixed Use",
      availablePlots: 8,
      processingFees: 65000,
      totalPrice: 18000000,
      downPaymentPercentage: 30,
      installments: 42,
      monthlyInstallment: 300000,
      features: ["Versatile Usage", "Central Location", "High ROI"],
      plotSizes: ["6000 sq ft", "10000 sq ft", "15000 sq ft"],
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=250&fit=crop"
    }
  ];

  const handlePropertySelect = (property: any) => {
    setSelectedProperty(property);
  };

  const handleNext = () => {
    if (!selectedProperty) return;
    onUpdateData({ selectedProperty });
    onNavigate('plot-category-selection');
  };

  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Progress Bar */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-between mb-4">
          <span className="text-white/80 text-sm">Step 2 of 6</span>
          <span className="text-white/80 text-sm">33% Complete</span>
        </div>
        <div className="w-full bg-white/20 rounded-full h-2">
          <div className="bg-green-500 h-2 rounded-full w-1/3 transition-all duration-500"></div>
        </div>
      </motion.div>

      {/* Page Header with Unit Toggle */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Property Selection</h2>
            <p className="text-white/80">Choose from our available property schemes</p>
          </div>
          
          {/* Unit Toggle */}
          <div className="bg-white/20 backdrop-blur-md rounded-lg p-4 border border-white/30">
            <div className="flex items-center space-x-3">
              <Label className="text-white/90 text-sm">Display Units:</Label>
              <div className="flex items-center space-x-2">
                <span className={`text-sm ${!showInMarlas ? 'text-white font-medium' : 'text-white/60'}`}>
                  Sq Ft
                </span>
                <Switch
                  checked={showInMarlas}
                  onCheckedChange={setShowInMarlas}
                  className="data-[state=checked]:bg-green-500"
                />
                <span className={`text-sm ${showInMarlas ? 'text-white font-medium' : 'text-white/60'}`}>
                  Marla/Kanal
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Properties Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {mockProperties.map((property, index) => (
          <motion.div
            key={property.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
          >
            <Card 
              className={`bg-white/25 backdrop-blur-md border border-white/40 cursor-pointer transition-all duration-300 hover:bg-white/30 ${
                selectedProperty?.id === property.id ? 'ring-2 ring-green-500 bg-white/35' : ''
              }`}
              onClick={() => handlePropertySelect(property)}
            >
              <div className="p-6">
                {/* Property Image */}
                <div className="relative mb-4 rounded-lg overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge className={`${
                      property.type === 'Commercial' ? 'bg-blue-500' :
                      property.type === 'Residential' ? 'bg-green-500' :
                      property.type === 'Industrial' ? 'bg-orange-500' :
                      'bg-purple-500'
                    } text-white`}>
                      {property.type}
                    </Badge>
                  </div>
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-black/50 text-white">
                      {property.availablePlots} plots available
                    </Badge>
                  </div>
                </div>

                {/* Property Details */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{property.name}</h3>
                    <div className="flex items-center text-white/70 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      {property.location}
                    </div>
                  </div>

                  {/* Plot Sizes */}
                  <div>
                    <p className="text-white/80 text-sm mb-2">Available Plot Sizes:</p>
                    <div className="flex flex-wrap gap-2">
                      {property.plotSizes.map((size, idx) => (
                        <Badge key={idx} variant="outline" className="text-white/80 border-white/30">
                          {formatAreaSize(size, showInMarlas)}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <p className="text-white/80 text-sm mb-2">Key Features:</p>
                    <div className="flex flex-wrap gap-2">
                      {property.features.map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="text-white/80 border-white/30">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Pricing Grid */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
                    <div>
                      <p className="text-white/70 text-sm">Processing Fees</p>
                      <p className="text-white font-bold">PKR {property.processingFees.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-white/70 text-sm">Starting Price</p>
                      <p className="text-white font-bold">PKR {property.totalPrice.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-white/70 text-sm">Down Payment</p>
                      <p className="text-white font-bold">{property.downPaymentPercentage}% (from {(property.totalPrice * property.downPaymentPercentage / 100).toLocaleString()})</p>
                    </div>
                    <div>
                      <p className="text-white/70 text-sm">Monthly from</p>
                      <p className="text-white font-bold">PKR {property.monthlyInstallment.toLocaleString()}</p>
                    </div>
                  </div>

                  {/* Installment Info */}
                  <div className="flex items-center justify-between pt-2 border-t border-white/20">
                    <div className="flex items-center text-white/70 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {property.installments} months plan
                    </div>
                    {selectedProperty?.id === property.id && (
                      <Badge className="bg-green-500 text-white">Selected</Badge>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <motion.div 
        className="flex justify-between"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <Button 
          onClick={() => onNavigate('applicant-profile')}
          variant="outline"
          className="bg-white/20 border-white/40 text-white hover:bg-white/30 px-6 py-3"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Profile
        </Button>
        
        <Button 
          onClick={handleNext}
          disabled={!selectedProperty}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 disabled:bg-gray-500 disabled:cursor-not-allowed"
        >
          Continue to Plot Selection
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </motion.div>
    </div>
  );
}