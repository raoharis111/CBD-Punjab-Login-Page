import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, User, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

interface ApplicantProfileProps {
  onNavigate: (screen: string) => void;
  onUpdateData: (data: any) => void;
  data: any;
}

export default function ApplicantProfile({ onNavigate, onUpdateData, data }: ApplicantProfileProps) {
  const [profileData, setProfileData] = useState({
    fullName: "John Doe",
    email: "john.doe@email.com",
    phone: "+92 300 1234567",
    cnic: "12345-6789012-3",
    address: "123 Main Street, Lahore, Punjab",
    occupation: "Business Owner",
    monthlyIncome: "500000",
    ...data.profile
  });

  const handleInputChange = (field: string, value: string) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    onUpdateData({ profile: profileData });
    onNavigate('property-selection');
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
          <span className="text-white/80 text-sm">Step 1 of 6</span>
          <span className="text-white/80 text-sm">17% Complete</span>
        </div>
        <div className="w-full bg-white/20 rounded-full h-2">
          <div className="bg-green-500 h-2 rounded-full w-1/6 transition-all duration-500"></div>
        </div>
      </motion.div>

      {/* Page Header */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <h2 className="text-3xl font-bold text-white mb-2">Applicant Profile</h2>
        <p className="text-white/80">Please confirm or update your profile information</p>
      </motion.div>

      {/* Profile Form */}
      <motion.div 
        className="bg-white/25 backdrop-blur-md rounded-2xl p-8 border border-white/40 mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Personal Information Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <User className="w-5 h-5 text-green-400" />
              <h3 className="text-xl font-bold text-white">Personal Information</h3>
            </div>
          </div>

          <div>
            <Label className="text-white/90 mb-2 block">Full Name</Label>
            <Input
              value={profileData.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
              className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-green-600"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <Label className="text-white/90 mb-2 block">CNIC Number</Label>
            <Input
              value={profileData.cnic}
              onChange={(e) => handleInputChange('cnic', e.target.value)}
              className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-green-600"
              placeholder="12345-6789012-3"
            />
          </div>

          {/* Contact Information Section */}
          <div className="md:col-span-2 mt-6">
            <div className="flex items-center space-x-2 mb-6">
              <Phone className="w-5 h-5 text-green-400" />
              <h3 className="text-xl font-bold text-white">Contact Information</h3>
            </div>
          </div>

          <div>
            <Label className="text-white/90 mb-2 block">Email Address</Label>
            <Input
              type="email"
              value={profileData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-green-600"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <Label className="text-white/90 mb-2 block">Phone Number</Label>
            <Input
              value={profileData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-green-600"
              placeholder="+92 300 1234567"
            />
          </div>

          <div className="md:col-span-2">
            <Label className="text-white/90 mb-2 block">Current Address</Label>
            <Textarea
              value={profileData.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
              className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-green-600 min-h-[100px]"
              placeholder="Enter your complete address"
            />
          </div>

          {/* Professional Information Section */}
          <div className="md:col-span-2 mt-6">
            <div className="flex items-center space-x-2 mb-6">
              <MapPin className="w-5 h-5 text-green-400" />
              <h3 className="text-xl font-bold text-white">Professional Information</h3>
            </div>
          </div>

          <div>
            <Label className="text-white/90 mb-2 block">Occupation</Label>
            <Input
              value={profileData.occupation}
              onChange={(e) => handleInputChange('occupation', e.target.value)}
              className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-green-600"
              placeholder="Your profession or business"
            />
          </div>

          <div>
            <Label className="text-white/90 mb-2 block">Monthly Income (PKR)</Label>
            <Input
              value={profileData.monthlyIncome}
              onChange={(e) => handleInputChange('monthlyIncome', e.target.value)}
              className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-green-600"
              placeholder="500000"
            />
          </div>
        </div>
      </motion.div>

      {/* Navigation Buttons */}
      <motion.div 
        className="flex justify-between"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Button 
          onClick={() => onNavigate('dashboard')}
          variant="outline"
          className="bg-white/20 border-white/40 text-white hover:bg-white/30 px-6 py-3"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Button>
        
        <Button 
          onClick={handleNext}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3"
        >
          Continue to Property Selection
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </motion.div>
    </div>
  );
}