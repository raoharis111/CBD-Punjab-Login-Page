import backgroundImage from "./assets/4dddf96460095568287aea0b16ed64cf2de1e273.png";
import cbdLogo from "./assets/CBDLogoWhite.avif";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Checkbox } from "./components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";
import { Textarea } from "./components/ui/textarea";
import { motion } from "motion/react";
import { useState } from "react";
import {
  Shield,
  Crown,
  Lightbulb,
  ArrowLeft,
  User,
  Mail,
  Lock,
  Phone,
  MapPin,
  CreditCard,
  Calendar,
  Briefcase,
} from "lucide-react";

// Import components
import Dashboard from "./components/Dashboard";
import ApplicantProfile from "./components/ApplicantProfile";
import PropertySelection from "./components/PropertySelection";
import PlotCategorySelection from "./components/PlotCategorySelection";
import ApplicationReview from "./components/ApplicationReview";
import TermsAndConditions from "./components/TermsAndConditions";
import PaymentPage from "./components/PaymentPage";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<string>('login');
  const [applicationData, setApplicationData] = useState({
    profile: {},
    selectedProperty: null,
    plotCategories: [],
    totalFees: 0
  });

  const handleLogin = () => {
    setCurrentScreen('dashboard');
  };

  const handleSignUp = () => {
    // In a real app, you would handle the signup logic here
    setCurrentScreen('login');
  };

  const navigateToScreen = (screen: string) => {
    setCurrentScreen(screen);
  };

  const updateApplicationData = (data: any) => {
    setApplicationData(prev => ({ ...prev, ...data }));
  };

  // Sign Up Screen
  if (currentScreen === 'signup') {
    return (
      <div className="min-h-screen relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          {/* Overlay for better readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 min-h-screen">
          {/* Header */}
          <div className="w-full pt-6 pb-4">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex items-center space-x-4">
                <div className="bg-black/30 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-white/40">
                  <img 
                    src={cbdLogo} 
                    alt="CBD Punjab Logo" 
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div className="text-white">
                  <h1 className="text-2xl font-bold">CBD Punjab</h1>
                  <p className="text-sm opacity-90">Central Business District</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex items-start pt-4 pb-8">
            <div className="max-w-4xl mx-auto px-6 w-full">
              <motion.div 
                className="bg-white/25 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/40"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Header */}
                <div className="text-center mb-8">
                  <motion.h2 
                    className="text-3xl font-bold text-white mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    Create Your Account
                  </motion.h2>
                  <motion.p 
                    className="text-white/80"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    Join CBD Punjab and start your property investment journey
                  </motion.p>
                </div>

                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleSignUp(); }}>
                  {/* Personal Information Section */}
                  <motion.div 
                    className="space-y-4"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <User className="w-5 h-5 mr-2 text-green-400" />
                      Personal Information
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-white/90 mb-2">
                          Full Name *
                        </label>
                        <Input
                          type="text"
                          placeholder="Enter your full name"
                          className="w-full h-12 bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-green-600"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-white/90 mb-2">
                          Father's Name *
                        </label>
                        <Input
                          type="text"
                          placeholder="Enter your father's name"
                          className="w-full h-12 bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-green-600"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-white/90 mb-2">
                          <CreditCard className="w-4 h-4 inline mr-1" />
                          CNIC Number *
                        </label>
                        <Input
                          type="text"
                          placeholder="12345-6789012-3"
                          pattern="[0-9]{5}-[0-9]{7}-[0-9]{1}"
                          className="w-full h-12 bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-green-600"
                          required
                        />
                        <p className="text-white/60 text-xs mt-1">Format: 12345-6789012-3</p>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-white/90 mb-2">
                          <Calendar className="w-4 h-4 inline mr-1" />
                          Date of Birth *
                        </label>
                        <Input
                          type="date"
                          className="w-full h-12 bg-white/20 border-white/30 text-white focus:border-green-600"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white/90 mb-2">
                        <Briefcase className="w-4 h-4 inline mr-1" />
                        Occupation *
                      </label>
                      <Select>
                        <SelectTrigger className="w-full h-12 bg-white/20 border-white/30 text-white">
                          <SelectValue placeholder="Select your occupation" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="business">Business Owner</SelectItem>
                          <SelectItem value="employed">Employed</SelectItem>
                          <SelectItem value="self-employed">Self Employed</SelectItem>
                          <SelectItem value="retired">Retired</SelectItem>
                          <SelectItem value="government">Government Employee</SelectItem>
                          <SelectItem value="professional">Professional</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </motion.div>

                  {/* Contact Information Section */}
                  <motion.div 
                    className="space-y-4"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <Phone className="w-5 h-5 mr-2 text-green-400" />
                      Contact Information
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-white/90 mb-2">
                          <Mail className="w-4 h-4 inline mr-1" />
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          placeholder="your.email@example.com"
                          className="w-full h-12 bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-green-600"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-white/90 mb-2">
                          <Phone className="w-4 h-4 inline mr-1" />
                          Mobile Number *
                        </label>
                        <Input
                          type="tel"
                          placeholder="+92 300 1234567"
                          pattern="(\+92|0)?[0-9]{10}"
                          className="w-full h-12 bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-green-600"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white/90 mb-2">
                        <MapPin className="w-4 h-4 inline mr-1" />
                        Complete Address *
                      </label>
                      <Textarea
                        placeholder="Enter your complete address including city and province"
                        className="w-full bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-green-600 min-h-[80px]"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-white/90 mb-2">
                          City *
                        </label>
                        <Select>
                          <SelectTrigger className="w-full h-12 bg-white/20 border-white/30 text-white">
                            <SelectValue placeholder="Select your city" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="lahore">Lahore</SelectItem>
                            <SelectItem value="karachi">Karachi</SelectItem>
                            <SelectItem value="islamabad">Islamabad</SelectItem>
                            <SelectItem value="rawalpindi">Rawalpindi</SelectItem>
                            <SelectItem value="faisalabad">Faisalabad</SelectItem>
                            <SelectItem value="multan">Multan</SelectItem>
                            <SelectItem value="peshawar">Peshawar</SelectItem>
                            <SelectItem value="quetta">Quetta</SelectItem>
                            <SelectItem value="sialkot">Sialkot</SelectItem>
                            <SelectItem value="gujranwala">Gujranwala</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-white/90 mb-2">
                          Province *
                        </label>
                        <Select>
                          <SelectTrigger className="w-full h-12 bg-white/20 border-white/30 text-white">
                            <SelectValue placeholder="Select your province" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="punjab">Punjab</SelectItem>
                            <SelectItem value="sindh">Sindh</SelectItem>
                            <SelectItem value="kpk">Khyber Pakhtunkhwa</SelectItem>
                            <SelectItem value="balochistan">Balochistan</SelectItem>
                            <SelectItem value="azad-kashmir">Azad Kashmir</SelectItem>
                            <SelectItem value="gilgit-baltistan">Gilgit-Baltistan</SelectItem>
                            <SelectItem value="islamabad">Islamabad Capital Territory</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </motion.div>

                  {/* Account Security Section */}
                  <motion.div 
                    className="space-y-4"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <Lock className="w-5 h-5 mr-2 text-green-400" />
                      Account Security
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-white/90 mb-2">
                          Password *
                        </label>
                        <Input
                          type="password"
                          placeholder="Create a strong password"
                          className="w-full h-12 bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-green-600"
                          required
                        />
                        <p className="text-white/60 text-xs mt-1">At least 8 characters with numbers and symbols</p>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-white/90 mb-2">
                          Confirm Password *
                        </label>
                        <Input
                          type="password"
                          placeholder="Confirm your password"
                          className="w-full h-12 bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-green-600"
                          required
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* Terms and Agreement */}
                  <motion.div 
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <div className="bg-blue-500/20 rounded-lg p-4">
                      <h4 className="text-blue-400 font-medium mb-2">Important Information</h4>
                      <ul className="text-white/80 text-sm space-y-1">
                        <li>• All information provided must be accurate and verifiable</li>
                        <li>• CNIC verification is mandatory for account activation</li>
                        <li>• You will receive email and SMS confirmations</li>
                        <li>• Account approval may take 24-48 hours</li>
                      </ul>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="terms"
                        className="border-white/40 data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500 mt-1"
                        required
                      />
                      <label
                        htmlFor="terms"
                        className="text-sm text-white/80"
                      >
                        I agree to the <span className="text-green-400 underline cursor-pointer">Terms & Conditions</span> and <span className="text-green-400 underline cursor-pointer">Privacy Policy</span> of CBD Punjab. I confirm that all information provided is accurate and I consent to verification processes.
                      </label>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="marketing"
                        className="border-white/40 data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500 mt-1"
                      />
                      <label
                        htmlFor="marketing"
                        className="text-sm text-white/80"
                      >
                        I agree to receive important updates, promotional offers, and property information via email and SMS.
                      </label>
                    </div>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div 
                    className="pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <Button type="submit" className="w-full h-14 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg text-lg">
                      Create Account →
                    </Button>
                  </motion.div>

                  {/* Navigation */}
                  <motion.div 
                    className="flex items-center justify-between pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                  >
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setCurrentScreen('login')}
                      className="bg-white/20 border-white/40 text-white hover:bg-white/30"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back to Login
                    </Button>
                    
                    <p className="text-sm text-white/70">
                      Already have an account?{" "}
                      <button
                        type="button"
                        onClick={() => setCurrentScreen('login')}
                        className="text-green-400 hover:text-green-300 font-medium"
                      >
                        Sign in here
                      </button>
                    </p>
                  </motion.div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Login Screen
  if (currentScreen === 'login') {
    return (
      <div className="min-h-screen relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          {/* Overlay for better readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 min-h-screen flex flex-col">
          {/* Header/Title Section */}
          <div className="w-full pt-8 pb-4">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-black/30 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/40">
                  <img 
                    src={cbdLogo} 
                    alt="CBD Punjab Logo" 
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div className="text-white">
                  <h1 className="text-4xl font-bold">
                    CBD Punjab
                  </h1>
                  <p className="text-xl opacity-90">
                    Central Business District
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 flex items-start pt-4">
            <div className="max-w-7xl mx-auto px-6 w-full">
              <div className="grid grid-cols-12 gap-8 items-start">
                {/* Left Content */}
                <div className="col-span-8 space-y-8">
                  {/* Welcome Section */}
                  <div className="space-y-3 -mt-8 -ml-4">
                    <motion.h2 
                      className="text-5xl font-bold text-white drop-shadow-2xl"
                      style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.8)' }}
                      initial={{ opacity: 0, y: 50, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ 
                        duration: 1.2, 
                        delay: 0.2,
                        type: "spring",
                        stiffness: 100,
                        damping: 12
                      }}
                    >
                      Welcome to Punjab's
                    </motion.h2>
                    <motion.h2 
                      className="text-5xl font-bold text-green-300 drop-shadow-2xl"
                      style={{ 
                        textShadow: '0 0 20px rgba(34, 197, 94, 0.8), 0 4px 30px rgba(0, 0, 0, 0.9), 0 0 40px rgba(34, 197, 94, 0.4)'
                      }}
                      initial={{ opacity: 0, y: 50, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ 
                        duration: 1.2, 
                        delay: 0.5,
                        type: "spring",
                        stiffness: 100,
                        damping: 12
                      }}
                    >
                      Premier Business Hub
                    </motion.h2>
                  </div>
                </div>

                {/* Right Content - Translucent Login Form */}
                <div className="col-span-4 flex justify-end">
                  <div className="w-full max-w-md">
                    <motion.div 
                      className="bg-white/25 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/40"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    >
                      <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          Access Portal
                        </h3>
                        <p className="text-white/80">
                          Sign in to continue your journey
                        </p>
                      </div>

                      <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
                        <div>
                          <label className="block text-sm font-medium text-white/90 mb-2">
                            Email Address
                          </label>
                          <Input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full h-12 bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-green-600"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-white/90 mb-2">
                            Password
                          </label>
                          <Input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full h-12 bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-green-600"
                          />
                        </div>

                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="remember"
                            className="border-white/40 data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500"
                          />
                          <label
                            htmlFor="remember"
                            className="text-sm text-white/80"
                          >
                            Remember me
                          </label>
                        </div>

                        <Button type="submit" className="w-full h-12 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg">
                          Access Portal →
                        </Button>
                      </form>

                      <div className="text-center mt-6">
                        <p className="text-sm text-white/70">
                          Don't have an account?{" "}
                          <button
                            onClick={() => setCurrentScreen('signup')}
                            className="text-green-400 hover:text-green-300 font-medium"
                          >
                            Sign up here
                          </button>
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Feature Boxes */}
          <div className="w-full pb-8 pt-6">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <motion.div 
                  className="bg-white/20 backdrop-blur-md rounded-lg p-4 border border-white/30"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <div className="flex items-center space-x-2">
                    <div className="bg-green-500/20 p-2 rounded-md">
                      <Shield className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-white font-medium">
                      Secure Government Portal
                    </span>
                  </div>
                </motion.div>

                <motion.div 
                  className="bg-white/20 backdrop-blur-md rounded-lg p-4 border border-white/30"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <div className="flex items-center space-x-2">
                    <div className="bg-green-500/20 p-2 rounded-md">
                      <Crown className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-white font-medium">
                      Premium Property Access
                    </span>
                  </div>
                </motion.div>

                <motion.div 
                  className="bg-white/20 backdrop-blur-md rounded-lg p-4 border border-white/30"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  <div className="flex items-center space-x-2">
                    <div className="bg-green-500/20 p-2 rounded-md">
                      <Lightbulb className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-white font-medium">
                      Smart City Innovation
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Other screens with shared background and header
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen">
        {/* Header */}
        <div className="w-full pt-6 pb-4">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="bg-black/30 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-white/40">
                  <img 
                    src={cbdLogo} 
                    alt="CBD Punjab Logo" 
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div className="text-white">
                  <h1 className="text-2xl font-bold">CBD Punjab</h1>
                  <p className="text-sm opacity-90">Central Business District</p>
                </div>
              </div>
              <Button 
                onClick={() => setCurrentScreen('login')} 
                variant="outline" 
                className="bg-white/20 backdrop-blur-sm border-white/40 text-white hover:bg-white/30"
              >
                Logout
              </Button>
            </div>
          </div>
        </div>

        {/* Screen Content */}
        <div className="flex-1 pb-8">
          {currentScreen === 'dashboard' && (
            <Dashboard onNavigate={navigateToScreen} />
          )}
          {currentScreen === 'applicant-profile' && (
            <ApplicantProfile 
              onNavigate={navigateToScreen} 
              onUpdateData={updateApplicationData}
              data={applicationData}
            />
          )}
          {currentScreen === 'property-selection' && (
            <PropertySelection 
              onNavigate={navigateToScreen} 
              onUpdateData={updateApplicationData}
              data={applicationData}
            />
          )}
          {currentScreen === 'plot-category-selection' && (
            <PlotCategorySelection 
              onNavigate={navigateToScreen} 
              onUpdateData={updateApplicationData}
              data={applicationData}
            />
          )}
          {currentScreen === 'application-review' && (
            <ApplicationReview 
              onNavigate={navigateToScreen} 
              data={applicationData}
            />
          )}
          {currentScreen === 'terms-conditions' && (
            <TermsAndConditions 
              onNavigate={navigateToScreen} 
            />
          )}
          {currentScreen === 'payment' && (
            <PaymentPage 
              onNavigate={navigateToScreen} 
              data={applicationData}
            />
          )}
        </div>
      </div>
    </div>
  );
}