import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card } from "./ui/card";
import { Switch } from "./ui/switch";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Plus, Minus, Calculator, ToggleLeft } from "lucide-react";
import { useState, useEffect } from "react";

interface PlotCategorySelectionProps {
  onNavigate: (screen: string) => void;
  onUpdateData: (data: any) => void;
  data: any;
}

// Utility functions for unit conversion
const convertSqFtToMarla = (sqft: number): number => {
  return sqft / 225; // 1 Marla = 225 sq ft
};

const formatPlotSize = (baseSize: string, showInMarlas: boolean): string => {
  if (showInMarlas) {
    if (baseSize.includes("Marla")) {
      return baseSize; // Already in Marlas
    } else if (baseSize.includes("Kanal")) {
      return baseSize; // Keep Kanal as is
    } else {
      // Convert sq ft to Marla
      const sqft = parseInt(baseSize.replace(/[^\d]/g, ''));
      const marlas = convertSqFtToMarla(sqft);
      return `${marlas.toFixed(1)} Marla (${sqft} sq ft)`;
    }
  } else {
    if (baseSize.includes("sq ft")) {
      return baseSize; // Already in sq ft
    } else if (baseSize.includes("Marla")) {
      const marlas = parseFloat(baseSize);
      const sqft = marlas * 225;
      return `${sqft} sq ft (${baseSize})`;
    } else if (baseSize.includes("Kanal")) {
      const kanals = parseFloat(baseSize);
      const sqft = kanals * 4500;
      return `${sqft} sq ft (${baseSize})`;
    }
    return baseSize;
  }
};

export default function PlotCategorySelection({ onNavigate, onUpdateData, data }: PlotCategorySelectionProps) {
  const selectedProperty = data.selectedProperty;
  const [showInMarlas, setShowInMarlas] = useState(true); // Default to Marlas for Pakistani context
  
  const [plotCategories, setPlotCategories] = useState([
    {
      id: 1,
      name: "5 Marla",
      size: "5 Marla (1125 sq ft)",
      basePrice: 2500000,
      processingFee: 25000,
      quantity: 0,
      available: 15
    },
    {
      id: 2,
      name: "10 Marla",
      size: "10 Marla (2250 sq ft)",
      basePrice: 4500000,
      processingFee: 45000,
      quantity: 0,
      available: 12
    },
    {
      id: 3,
      name: "1 Kanal",
      size: "1 Kanal (4500 sq ft)",
      basePrice: 8000000,
      processingFee: 80000,
      quantity: 0,
      available: 8
    },
    {
      id: 4,
      name: "2 Kanal",
      size: "2 Kanal (9000 sq ft)",
      basePrice: 15000000,
      processingFee: 150000,
      quantity: 0,
      available: 4
    }
  ]);

  const [totalProcessingFees, setTotalProcessingFees] = useState(0);
  const [totalPlotValue, setTotalPlotValue] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    const fees = plotCategories.reduce((sum, category) => 
      sum + (category.quantity * category.processingFee), 0
    );
    const value = plotCategories.reduce((sum, category) => 
      sum + (category.quantity * category.basePrice), 0
    );
    const quantity = plotCategories.reduce((sum, category) => sum + category.quantity, 0);
    
    setTotalProcessingFees(fees);
    setTotalPlotValue(value);
    setTotalQuantity(quantity);
  }, [plotCategories]);

  const updateQuantity = (id: number, change: number) => {
    setPlotCategories(prev => prev.map(category => {
      if (category.id === id) {
        const newQuantity = Math.max(0, Math.min(category.available, category.quantity + change));
        return { ...category, quantity: newQuantity };
      }
      return category;
    }));
  };

  const setQuantity = (id: number, quantity: number) => {
    setPlotCategories(prev => prev.map(category => {
      if (category.id === id) {
        const newQuantity = Math.max(0, Math.min(category.available, quantity));
        return { ...category, quantity: newQuantity };
      }
      return category;
    }));
  };

  const handleNext = () => {
    const selectedCategories = plotCategories.filter(cat => cat.quantity > 0);
    if (selectedCategories.length === 0) return;
    
    onUpdateData({ 
      plotCategories: selectedCategories,
      totalProcessingFees,
      totalPlotValue,
      totalQuantity
    });
    onNavigate('application-review');
  };

  return (
    <div className="max-w-6xl mx-auto px-6">
      {/* Progress Bar */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-between mb-4">
          <span className="text-white/80 text-sm">Step 3 of 6</span>
          <span className="text-white/80 text-sm">50% Complete</span>
        </div>
        <div className="w-full bg-white/20 rounded-full h-2">
          <div className="bg-green-500 h-2 rounded-full w-1/2 transition-all duration-500"></div>
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
            <h2 className="text-3xl font-bold text-white mb-2">Plot Category Selection</h2>
            <p className="text-white/80">Select plot categories and quantities for {selectedProperty?.name}</p>
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Plot Categories */}
        <div className="lg:col-span-2 space-y-4">
          {plotCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <Card className="bg-white/25 backdrop-blur-md border border-white/40 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">{category.name}</h3>
                    <p className="text-white/70 text-sm mb-2">
                      {formatPlotSize(category.size, showInMarlas)}
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-white/70">Base Price</p>
                        <p className="text-white font-medium">PKR {category.basePrice.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-white/70">Processing Fee</p>
                        <p className="text-white font-medium">PKR {category.processingFee.toLocaleString()}</p>
                      </div>
                    </div>
                    <p className="text-white/60 text-sm mt-2">Available: {category.available} plots</p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex flex-col items-center space-y-3">
                    <Label className="text-white/90 text-sm">Quantity</Label>
                    <div className="flex items-center space-x-3">
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-white/20 border-white/40 text-white hover:bg-white/30 w-8 h-8 p-0"
                        onClick={() => updateQuantity(category.id, -1)}
                        disabled={category.quantity === 0}
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      
                      <Input
                        type="number"
                        value={category.quantity}
                        onChange={(e) => setQuantity(category.id, parseInt(e.target.value) || 0)}
                        className="w-16 text-center bg-white/20 border-white/30 text-white"
                        min="0"
                        max={category.available}
                      />
                      
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-white/20 border-white/40 text-white hover:bg-white/30 w-8 h-8 p-0"
                        onClick={() => updateQuantity(category.id, 1)}
                        disabled={category.quantity >= category.available}
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    {category.quantity > 0 && (
                      <div className="text-center">
                        <p className="text-green-400 text-sm font-medium">
                          Subtotal: PKR {(category.quantity * category.basePrice).toLocaleString()}
                        </p>
                        <p className="text-white/70 text-xs">
                          Fees: PKR {(category.quantity * category.processingFee).toLocaleString()}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Summary Panel */}
        <div className="lg:col-span-1">
          <motion.div
            className="sticky top-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-white/25 backdrop-blur-md border border-white/40 p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Calculator className="w-5 h-5 text-green-400" />
                <h3 className="text-xl font-bold text-white">Order Summary</h3>
              </div>

              <div className="space-y-4">
                <div className="border-b border-white/20 pb-4">
                  <h4 className="text-white font-medium mb-3">Selected Plots</h4>
                  {plotCategories.filter(cat => cat.quantity > 0).length === 0 ? (
                    <p className="text-white/60 text-sm">No plots selected</p>
                  ) : (
                    plotCategories
                      .filter(cat => cat.quantity > 0)
                      .map(category => (
                        <div key={category.id} className="flex justify-between text-sm text-white/80 mb-2">
                          <span>{category.name} × {category.quantity}</span>
                          <span>PKR {(category.quantity * category.basePrice).toLocaleString()}</span>
                        </div>
                      ))
                  )}
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-white/80">Total Plots:</span>
                    <span className="text-white font-medium">{totalQuantity}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-white/80">Plot Value:</span>
                    <span className="text-white font-medium">PKR {totalPlotValue.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-white/80">Processing Fees:</span>
                    <span className="text-white font-medium">PKR {totalProcessingFees.toLocaleString()}</span>
                  </div>
                  
                  <div className="border-t border-white/20 pt-3">
                    <div className="flex justify-between">
                      <span className="text-white font-bold">Total Amount:</span>
                      <span className="text-green-400 font-bold text-lg">
                        PKR {(totalPlotValue + totalProcessingFees).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                {totalQuantity > 0 && (
                  <div className="bg-green-500/20 rounded-lg p-4 mt-4">
                    <h5 className="text-green-400 font-medium mb-2">Payment Breakdown</h5>
                    <div className="text-sm space-y-1">
                      <div className="flex justify-between text-white/80">
                        <span>Down Payment (20%):</span>
                        <span>PKR {((totalPlotValue + totalProcessingFees) * 0.2).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-white/80">
                        <span>Monthly Installment:</span>
                        <span>PKR {(((totalPlotValue + totalProcessingFees) * 0.8) / 36).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <motion.div 
        className="flex justify-between mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <Button 
          onClick={() => onNavigate('property-selection')}
          variant="outline"
          className="bg-white/20 border-white/40 text-white hover:bg-white/30 px-6 py-3"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Properties
        </Button>
        
        <Button 
          onClick={handleNext}
          disabled={totalQuantity === 0}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 disabled:bg-gray-500 disabled:cursor-not-allowed"
        >
          Review Application
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </motion.div>
    </div>
  );
}