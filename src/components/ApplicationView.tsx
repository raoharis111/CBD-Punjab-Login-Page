import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";
import { 
  ArrowLeft, 
  Download, 
  Printer, 
  MapPin, 
  Calendar, 
  User, 
  Building,
  CreditCard,
  FileText,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  AlertCircle,
  DollarSign,
  Calculator,
  Home,
  Briefcase,
  ChevronDown,
  ChevronUp
} from "lucide-react";

interface ApplicationViewProps {
  onNavigate: (screen: string) => void;
  applicationNo?: string;
}

export default function ApplicationView({ onNavigate, applicationNo = "CBD2024001" }: ApplicationViewProps) {
  const [showInstallmentDetails, setShowInstallmentDetails] = useState(false);
  const [showLumpSumDetails, setShowLumpSumDetails] = useState(false);
  // Mock detailed application data
  const applicationData = {
    applicationNo: "CBD2024001",
    dateSubmitted: "2024-12-15",
    lastUpdated: "2024-12-20",
    status: "Under Review",
    statusColor: "bg-yellow-500",
    scheme: "Commercial Complex A",
    plotType: "Commercial",
    plotSize: "5000 sq ft",
    plotNo: "CC-A-101",
    sector: "Sector C",
    phase: "Phase 1",
    
    // Applicant Details
    applicant: {
      fullName: "Muhammad Ahmed Khan",
      fatherName: "Abdul Rahman Khan", 
      cnic: "12345-6789012-3",
      dateOfBirth: "1985-03-15",
      occupation: "Business Owner",
      email: "ahmed.khan@email.com",
      phone: "+92 300 1234567",
      address: "House 123, Street 45, Gulberg III, Lahore, Punjab"
    },

    // Property Details
    property: {
      plotCategory: "Premium Commercial",
      frontage: "50 ft",
      depth: "100 ft",
      corner: true,
      facing: "Main Boulevard",
      utilities: ["Electricity", "Gas", "Water", "Sewerage", "Internet"],
      nearbyFacilities: ["Shopping Mall", "Hospital", "School", "Bank"]
    },

    // Financial Details
    financial: {
      plotPrice: 15000000,
      registrationFee: 50000,
      processingFee: 25000,
      developmentCharges: 750000,
      totalAmount: 15825000,
      paidAmount: 0,
      balanceAmount: 15825000,
      installmentPlan: "36 Months",
      monthlyInstallment: 439583
    },

    // Timeline
    timeline: [
      {
        date: "2024-12-15",
        title: "Application Submitted",
        description: "Application submitted successfully with all required documents",
        status: "completed",
        icon: FileText
      },
      {
        date: "2024-12-16",
        title: "Document Verification",
        description: "Documents are being verified by our team",
        status: "completed",
        icon: CheckCircle
      },
      {
        date: "2024-12-18",
        title: "Technical Review",
        description: "Plot allocation and technical specifications under review",
        status: "current",
        icon: AlertCircle
      },
      {
        date: "Expected: 2024-12-25",
        title: "Approval Decision",
        description: "Final approval decision will be communicated",
        status: "pending",
        icon: Clock
      },
      {
        date: "Expected: 2024-12-30",
        title: "Payment Processing",
        description: "Payment instructions will be sent upon approval",
        status: "pending",
        icon: DollarSign
      }
    ],

    // Documents
    documents: [
      { name: "CNIC Copy", status: "Verified", uploadDate: "2024-12-15" },
      { name: "Income Certificate", status: "Verified", uploadDate: "2024-12-15" },
      { name: "Bank Statement", status: "Verified", uploadDate: "2024-12-15" },
      { name: "Affidavit", status: "Verified", uploadDate: "2024-12-15" },
      { name: "Passport Photos", status: "Verified", uploadDate: "2024-12-15" }
    ]
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-PK', {
      style: 'currency',
      currency: 'PKR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Header */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <Button 
              onClick={() => onNavigate('dashboard')}
              variant="outline"
              className="bg-white/20 border-white/40 text-white hover:bg-white/30"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
            <div>
              <h2 className="text-3xl text-white mb-1">Application Details</h2>
              <p className="text-white/80">Application #{applicationData.applicationNo}</p>
            </div>
          </div>
          <div className="flex space-x-3">
            <Button 
              variant="outline"
              className="bg-white/20 border-white/40 text-white hover:bg-white/30"
            >
              <Printer className="w-4 h-4 mr-2" />
              Print
            </Button>
            <Button 
              variant="outline"
              className="bg-white/20 border-white/40 text-white hover:bg-white/30"
            >
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </div>

        {/* Status Card */}
        <motion.div 
          className="bg-white/25 backdrop-blur-md rounded-xl p-6 border border-white/40 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-500/20 p-3 rounded-lg">
                <FileText className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="text-white/70 text-sm">Application No.</p>
                <p className="text-white font-bold">{applicationData.applicationNo}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-green-500/20 p-3 rounded-lg">
                <Calendar className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <p className="text-white/70 text-sm">Date Submitted</p>
                <p className="text-white font-bold">{new Date(applicationData.dateSubmitted).toLocaleDateString()}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-purple-500/20 p-3 rounded-lg">
                <Clock className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <p className="text-white/70 text-sm">Last Updated</p>
                <p className="text-white font-bold">{new Date(applicationData.lastUpdated).toLocaleDateString()}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-yellow-500/20 p-3 rounded-lg">
                <AlertCircle className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <p className="text-white/70 text-sm">Current Status</p>
                <Badge className={`${applicationData.statusColor} text-white`}>
                  {applicationData.status}
                </Badge>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Details */}
        <div className="lg:col-span-2 space-y-8">
          {/* Applicant Information */}
          <motion.div 
            className="bg-white/25 backdrop-blur-md rounded-xl border border-white/40 overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-6 border-b border-white/20">
              <h3 className="text-xl text-white flex items-center">
                <User className="w-5 h-5 mr-2 text-blue-400" />
                Applicant Information
              </h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-white/70 text-sm mb-1">Full Name</p>
                  <p className="text-white">{applicationData.applicant.fullName}</p>
                </div>
                <div>
                  <p className="text-white/70 text-sm mb-1">Father's Name</p>
                  <p className="text-white">{applicationData.applicant.fatherName}</p>
                </div>
                <div>
                  <p className="text-white/70 text-sm mb-1">CNIC Number</p>
                  <p className="text-white">{applicationData.applicant.cnic}</p>
                </div>
                <div>
                  <p className="text-white/70 text-sm mb-1">Date of Birth</p>
                  <p className="text-white">{new Date(applicationData.applicant.dateOfBirth).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-white/70 text-sm mb-1">Occupation</p>
                  <p className="text-white flex items-center">
                    <Briefcase className="w-4 h-4 mr-1" />
                    {applicationData.applicant.occupation}
                  </p>
                </div>
                <div>
                  <p className="text-white/70 text-sm mb-1">Email</p>
                  <p className="text-white flex items-center">
                    <Mail className="w-4 h-4 mr-1" />
                    {applicationData.applicant.email}
                  </p>
                </div>
                <div>
                  <p className="text-white/70 text-sm mb-1">Phone</p>
                  <p className="text-white flex items-center">
                    <Phone className="w-4 h-4 mr-1" />
                    {applicationData.applicant.phone}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-white/70 text-sm mb-1">Address</p>
                <p className="text-white flex items-start">
                  <MapPin className="w-4 h-4 mr-1 mt-0.5 flex-shrink-0" />
                  {applicationData.applicant.address}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Property Information */}
          <motion.div 
            className="bg-white/25 backdrop-blur-md rounded-xl border border-white/40 overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="p-6 border-b border-white/20">
              <h3 className="text-xl text-white flex items-center">
                <Building className="w-5 h-5 mr-2 text-green-400" />
                Property Details
              </h3>
            </div>
            <div className="p-6 space-y-4">
              {/* Property Image */}
              <div className="mb-6">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1652503591857-0dbb07631692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBjb21wbGV4JTIwcGFraXN0YW58ZW58MXx8fHwxNzU3NDEzMDU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Commercial Complex A - Property View"
                  className="w-full h-48 object-cover rounded-lg border border-white/20"
                />
                <p className="text-white/70 text-sm mt-2 text-center">{applicationData.scheme} - Artist's Impression</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-white/70 text-sm mb-1">Scheme</p>
                  <p className="text-white">{applicationData.scheme}</p>
                </div>
                <div>
                  <p className="text-white/70 text-sm mb-1">Plot Type</p>
                  <p className="text-white">{applicationData.plotType}</p>
                </div>
                <div>
                  <p className="text-white/70 text-sm mb-1">Plot Number</p>
                  <p className="text-white">{applicationData.plotNo}</p>
                </div>
                <div>
                  <p className="text-white/70 text-sm mb-1">Plot Size</p>
                  <p className="text-white">{applicationData.plotSize}</p>
                </div>
                <div>
                  <p className="text-white/70 text-sm mb-1">Sector</p>
                  <p className="text-white">{applicationData.sector}</p>
                </div>
                <div>
                  <p className="text-white/70 text-sm mb-1">Phase</p>
                  <p className="text-white">{applicationData.phase}</p>
                </div>
                <div>
                  <p className="text-white/70 text-sm mb-1">Frontage</p>
                  <p className="text-white">{applicationData.property.frontage}</p>
                </div>
                <div>
                  <p className="text-white/70 text-sm mb-1">Depth</p>
                  <p className="text-white">{applicationData.property.depth}</p>
                </div>
                <div>
                  <p className="text-white/70 text-sm mb-1">Corner Plot</p>
                  <p className="text-white">{applicationData.property.corner ? "Yes" : "No"}</p>
                </div>
                <div>
                  <p className="text-white/70 text-sm mb-1">Facing</p>
                  <p className="text-white">{applicationData.property.facing}</p>
                </div>
              </div>
              
              <Separator className="bg-white/20" />
              
              <div>
                <p className="text-white/70 text-sm mb-2">Available Utilities</p>
                <div className="flex flex-wrap gap-2">
                  {applicationData.property.utilities.map((utility, index) => (
                    <Badge key={index} variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/40">
                      {utility}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <p className="text-white/70 text-sm mb-2">Nearby Facilities</p>
                <div className="flex flex-wrap gap-2">
                  {applicationData.property.nearbyFacilities.map((facility, index) => (
                    <Badge key={index} variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/40">
                      {facility}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Financial Information */}
          <motion.div 
            className="bg-white/25 backdrop-blur-md rounded-xl border border-white/40 overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="p-6 border-b border-white/20">
              <h3 className="text-xl text-white flex items-center">
                <Calculator className="w-5 h-5 mr-2 text-purple-400" />
                Financial Details
              </h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-white/70 text-sm mb-1">Plot Price</p>
                  <p className="text-white text-lg">{formatCurrency(applicationData.financial.plotPrice)}</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-white/70 text-sm mb-1">Registration Fee</p>
                  <p className="text-white text-lg">{formatCurrency(applicationData.financial.registrationFee)}</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-white/70 text-sm mb-1">Processing Fee</p>
                  <p className="text-white text-lg">{formatCurrency(applicationData.financial.processingFee)}</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-white/70 text-sm mb-1">Development Charges</p>
                  <p className="text-white text-lg">{formatCurrency(applicationData.financial.developmentCharges)}</p>
                </div>
              </div>
              
              <Separator className="bg-white/20" />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-green-500/20 rounded-lg p-4 border border-green-500/40">
                  <p className="text-green-300 text-sm mb-1">Total Amount</p>
                  <p className="text-white text-xl">{formatCurrency(applicationData.financial.totalAmount)}</p>
                </div>
                <div className="bg-blue-500/20 rounded-lg p-4 border border-blue-500/40">
                  <p className="text-blue-300 text-sm mb-1">Paid Amount</p>
                  <p className="text-white text-xl">{formatCurrency(applicationData.financial.paidAmount)}</p>
                </div>
                <div className="bg-orange-500/20 rounded-lg p-4 border border-orange-500/40">
                  <p className="text-orange-300 text-sm mb-1">Balance Amount</p>
                  <p className="text-white text-xl">{formatCurrency(applicationData.financial.balanceAmount)}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-white/70 text-sm mb-1">Installment Plan</p>
                  <p className="text-white">{applicationData.financial.installmentPlan}</p>
                </div>
                <div>
                  <p className="text-white/70 text-sm mb-1">Monthly Installment</p>
                  <p className="text-white">{formatCurrency(applicationData.financial.monthlyInstallment)}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Payment Options - Compact */}
          <motion.div 
            className="bg-white/25 backdrop-blur-md rounded-xl border border-white/40 overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="p-6 border-b border-white/20">
              <h3 className="text-xl text-white flex items-center">
                <CreditCard className="w-5 h-5 mr-2 text-green-400" />
                Payment Options
              </h3>
              <p className="text-white/70 text-sm mt-1">Quick payment options for your application</p>
            </div>
            <div className="p-6 space-y-4">
              {/* Next Installment Option */}
              <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/30 rounded-lg border border-blue-500/40">
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-500/30 p-2 rounded-lg">
                        <Calendar className="w-5 h-5 text-blue-300" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Next Installment</p>
                        <p className="text-blue-300 text-sm">Due: Jan 15, 2025 • {formatCurrency(applicationData.financial.monthlyInstallment)}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button 
                        onClick={() => setShowInstallmentDetails(!showInstallmentDetails)}
                        variant="outline"
                        size="sm"
                        className="bg-white/20 border-white/40 text-white hover:bg-white/30"
                      >
                        {showInstallmentDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </Button>
                      <Button 
                        onClick={() => onNavigate('payment')}
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        Pay Now
                      </Button>
                    </div>
                  </div>
                  
                  {/* Expandable Details */}
                  {showInstallmentDetails && (
                    <motion.div 
                      className="mt-4 pt-4 border-t border-white/20"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="bg-white/10 rounded-lg p-3">
                          <p className="text-white/70 text-sm">Installment Amount</p>
                          <p className="text-white">{formatCurrency(applicationData.financial.monthlyInstallment)}</p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-3">
                          <p className="text-white/70 text-sm">Processing Fee</p>
                          <p className="text-white">PKR 1,500</p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-blue-500/20 rounded-lg">
                        <span className="text-white font-medium">Total Payable</span>
                        <span className="text-white">{formatCurrency(applicationData.financial.monthlyInstallment + 1500)}</span>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Lump Sum Option */}
              <div className="bg-gradient-to-r from-green-500/20 to-green-600/30 rounded-lg border border-green-500/40">
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="bg-green-500/30 p-2 rounded-lg">
                        <DollarSign className="w-5 h-5 text-green-300" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Pay Full Balance</p>
                        <p className="text-green-300 text-sm">Save 5% • {formatCurrency(applicationData.financial.balanceAmount * 0.95)}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button 
                        onClick={() => setShowLumpSumDetails(!showLumpSumDetails)}
                        variant="outline"
                        size="sm"
                        className="bg-white/20 border-white/40 text-white hover:bg-white/30"
                      >
                        {showLumpSumDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </Button>
                      <Button 
                        onClick={() => onNavigate('payment')}
                        size="sm"
                        className="bg-green-600 hover:bg-green-700 text-white"
                      >
                        Pay Full
                      </Button>
                    </div>
                  </div>
                  
                  {/* Expandable Details */}
                  {showLumpSumDetails && (
                    <motion.div 
                      className="mt-4 pt-4 border-t border-white/20"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="bg-white/10 rounded-lg p-3">
                          <p className="text-white/70 text-sm">Outstanding Balance</p>
                          <p className="text-white">{formatCurrency(applicationData.financial.balanceAmount)}</p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-3">
                          <p className="text-white/70 text-sm">Early Payment Discount</p>
                          <p className="text-green-300">-{formatCurrency(applicationData.financial.balanceAmount * 0.05)}</p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-green-500/20 rounded-lg">
                        <span className="text-white font-medium">Final Amount</span>
                        <span className="text-white">{formatCurrency(applicationData.financial.balanceAmount * 0.95)}</span>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Quick Payment Options */}
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="text-white font-medium mb-3">Other Payment Options</h4>
                <div className="grid grid-cols-2 gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                  >
                    Pay 3 Months
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                  >
                    Custom Amount
                  </Button>
                </div>
              </div>

              {/* Accepted Payment Methods */}
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="text-white font-medium mb-2">Accepted Methods</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-orange-500/20 text-orange-300 border-orange-500/40 text-xs">
                    JazzCash
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/40 text-xs">
                    EasyPaisa
                  </Badge>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/40 text-xs">
                    Bank Transfer
                  </Badge>
                  <Badge variant="secondary" className="bg-red-500/20 text-red-300 border-red-500/40 text-xs">
                    Online Banking
                  </Badge>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Timeline & Documents */}
        <div className="space-y-8">
          {/* Application Timeline */}
          <motion.div 
            className="bg-white/25 backdrop-blur-md rounded-xl border border-white/40 overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-6 border-b border-white/20">
              <h3 className="text-xl text-white flex items-center">
                <Clock className="w-5 h-5 mr-2 text-yellow-400" />
                Application Timeline
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {applicationData.timeline.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <div className={`p-2 rounded-lg ${
                        item.status === 'completed' ? 'bg-green-500/20' : 
                        item.status === 'current' ? 'bg-yellow-500/20' : 
                        'bg-gray-500/20'
                      }`}>
                        <Icon className={`w-4 h-4 ${
                          item.status === 'completed' ? 'text-green-400' : 
                          item.status === 'current' ? 'text-yellow-400' : 
                          'text-gray-400'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <p className="text-white font-medium text-sm">{item.title}</p>
                          <p className="text-white/60 text-xs">{item.date}</p>
                        </div>
                        <p className="text-white/70 text-sm">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Documents Status */}
          <motion.div 
            className="bg-white/25 backdrop-blur-md rounded-xl border border-white/40 overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="p-6 border-b border-white/20">
              <h3 className="text-xl text-white flex items-center">
                <FileText className="w-5 h-5 mr-2 text-green-400" />
                Documents Status
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                {applicationData.documents.map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                    <div>
                      <p className="text-white text-sm font-medium">{doc.name}</p>
                      <p className="text-white/60 text-xs">Uploaded: {doc.uploadDate}</p>
                    </div>
                    <Badge className="bg-green-500 text-white">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      {doc.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div 
            className="bg-white/25 backdrop-blur-md rounded-xl border border-white/40 overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="p-6 border-b border-white/20">
              <h3 className="text-xl text-white">Quick Actions</h3>
            </div>
            <div className="p-6 space-y-3">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                <Mail className="w-4 h-4 mr-2" />
                Contact Support
              </Button>
              <Button variant="outline" className="w-full bg-white/20 border-white/40 text-white hover:bg-white/30">
                <Download className="w-4 h-4 mr-2" />
                Download Application
              </Button>
              <Button variant="outline" className="w-full bg-white/20 border-white/40 text-white hover:bg-white/30">
                <FileText className="w-4 h-4 mr-2" />
                View Documents
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}