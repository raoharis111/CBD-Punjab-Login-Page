import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, User, Building, Calculator, FileText } from "lucide-react";

interface ApplicationReviewProps {
  onNavigate: (screen: string) => void;
  data: any;
}

export default function ApplicationReview({ onNavigate, data }: ApplicationReviewProps) {
  const { profile, selectedProperty, plotCategories, totalProcessingFees, totalPlotValue, totalQuantity } = data;
  const totalAmount = totalPlotValue + totalProcessingFees;
  const downPayment = totalAmount * 0.2;
  const monthlyInstallment = (totalAmount * 0.8) / 36;

  const handleNext = () => {
    onNavigate('terms-conditions');
  };

  return (
    <div className="max-w-4xl mx-auto px-6">
      {/* Progress Bar */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-between mb-4">
          <span className="text-white/80 text-sm">Step 4 of 6</span>
          <span className="text-white/80 text-sm">67% Complete</span>
        </div>
        <div className="w-full bg-white/20 rounded-full h-2">
          <div className="bg-green-500 h-2 rounded-full w-2/3 transition-all duration-500"></div>
        </div>
      </motion.div>

      {/* Page Header */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <h2 className="text-3xl font-bold text-white mb-2">Application Review</h2>
        <p className="text-white/80">Please review your application details before proceeding</p>
      </motion.div>

      <div className="space-y-6">
        {/* Applicant Profile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="bg-white/25 backdrop-blur-md border border-white/40 p-6">
            <div className="flex items-center space-x-2 mb-4">
              <User className="w-5 h-5 text-green-400" />
              <h3 className="text-xl font-bold text-white">Applicant Information</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-white/70 text-sm">Full Name</p>
                <p className="text-white font-medium">{profile?.fullName}</p>
              </div>
              <div>
                <p className="text-white/70 text-sm">CNIC</p>
                <p className="text-white font-medium">{profile?.cnic}</p>
              </div>
              <div>
                <p className="text-white/70 text-sm">Email</p>
                <p className="text-white font-medium">{profile?.email}</p>
              </div>
              <div>
                <p className="text-white/70 text-sm">Phone</p>
                <p className="text-white font-medium">{profile?.phone}</p>
              </div>
              <div>
                <p className="text-white/70 text-sm">Occupation</p>
                <p className="text-white font-medium">{profile?.occupation}</p>
              </div>
              <div>
                <p className="text-white/70 text-sm">Monthly Income</p>
                <p className="text-white font-medium">PKR {parseInt(profile?.monthlyIncome || '0').toLocaleString()}</p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Selected Property */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="bg-white/25 backdrop-blur-md border border-white/40 p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Building className="w-5 h-5 text-green-400" />
              <h3 className="text-xl font-bold text-white">Selected Property</h3>
            </div>
            <div className="flex items-start space-x-4">
              <img 
                src={selectedProperty?.image} 
                alt={selectedProperty?.name}
                className="w-24 h-24 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h4 className="text-white font-bold text-lg">{selectedProperty?.name}</h4>
                <p className="text-white/70 mb-2">{selectedProperty?.location}</p>
                <Badge className={`${
                  selectedProperty?.type === 'Commercial' ? 'bg-blue-500' :
                  selectedProperty?.type === 'Residential' ? 'bg-green-500' :
                  selectedProperty?.type === 'Industrial' ? 'bg-orange-500' :
                  'bg-purple-500'
                } text-white`}>
                  {selectedProperty?.type}
                </Badge>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Selected Plot Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="bg-white/25 backdrop-blur-md border border-white/40 p-6">
            <div className="flex items-center space-x-2 mb-4">
              <FileText className="w-5 h-5 text-green-400" />
              <h3 className="text-xl font-bold text-white">Selected Plot Categories</h3>
            </div>
            <div className="space-y-3">
              {plotCategories?.map((category: any, index: number) => (
                <div key={category.id} className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                  <div>
                    <p className="text-white font-medium">{category.name}</p>
                    <p className="text-white/70 text-sm">{category.size}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-medium">Quantity: {category.quantity}</p>
                    <p className="text-green-400 text-sm">PKR {(category.quantity * category.basePrice).toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Financial Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Card className="bg-white/25 backdrop-blur-md border border-white/40 p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Calculator className="w-5 h-5 text-green-400" />
              <h3 className="text-xl font-bold text-white">Financial Summary</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <div className="flex justify-between border-t border-white/20 pt-3">
                  <span className="text-white font-bold">Total Amount:</span>
                  <span className="text-green-400 font-bold">PKR {totalAmount.toLocaleString()}</span>
                </div>
              </div>
              <div className="bg-green-500/20 rounded-lg p-4">
                <h5 className="text-green-400 font-medium mb-3">Payment Plan</h5>
                <div className="space-y-2">
                  <div className="flex justify-between text-white/80">
                    <span>Down Payment (20%):</span>
                    <span>PKR {downPayment.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-white/80">
                    <span>Monthly Installment:</span>
                    <span>PKR {monthlyInstallment.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-white/80">
                    <span>Duration:</span>
                    <span>36 months</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Navigation Buttons */}
      <motion.div 
        className="flex justify-between mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <Button 
          onClick={() => onNavigate('plot-category-selection')}
          variant="outline"
          className="bg-white/20 border-white/40 text-white hover:bg-white/30 px-6 py-3"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Plot Selection
        </Button>
        
        <Button 
          onClick={handleNext}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3"
        >
          Accept Terms & Conditions
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </motion.div>
    </div>
  );
}