import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { motion } from "motion/react";
import { 
  ArrowLeft, 
  CreditCard, 
  Building, 
  Smartphone, 
  CheckCircle, 
  Copy,
  Phone,
  Mail,
  MessageSquare,
  Banknote,
  Wallet,
  Building2,
  CreditCard as CreditCardIcon,
  Shield
} from "lucide-react";
import { useState } from "react";

interface PaymentPageProps {
  onNavigate: (screen: string) => void;
  data: any;
}

export default function PaymentPage({ onNavigate, data }: PaymentPageProps) {
  const [paymentMethod, setPaymentMethod] = useState("cbd-psid");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedPSID, setCopiedPSID] = useState(false);

  const { totalPlotValue, totalProcessingFees } = data;
  const totalAmount = totalPlotValue + totalProcessingFees;
  const downPayment = totalAmount * 0.2;

  // CBD Punjab PSID Number
  const cbdPSID = "1011400906250915000226853";

  const handleCopyPSID = () => {
    navigator.clipboard.writeText(cbdPSID);
    setCopiedPSID(true);
    setTimeout(() => setCopiedPSID(false), 2000);
  };

  const handleSubmit = () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSubmitted(true);
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto px-6">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="bg-white/25 backdrop-blur-md border border-white/40 p-8">
            <div className="mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
              </motion.div>
              <h2 className="text-3xl font-bold text-white mb-2">Application Submitted Successfully!</h2>
              <p className="text-white/80">Your application has been received and is being processed.</p>
            </div>

            <div className="bg-green-500/20 rounded-lg p-4 mb-6">
              <h3 className="text-green-400 font-bold mb-2">What's Next?</h3>
              <ul className="text-white/80 text-sm space-y-1">
                <li>• You will receive a confirmation email within 24 hours</li>
                <li>• Our team will verify your documents within 3-5 business days</li>
                <li>• Payment instructions will be sent after approval</li>
                <li>• You can track your application status in the dashboard</li>
              </ul>
            </div>

            <div className="space-y-4">
              <Button 
                onClick={() => onNavigate('dashboard')}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3"
              >
                Go to Dashboard
              </Button>
              <Button 
                variant="outline"
                className="w-full bg-white/20 border-white/40 text-white hover:bg-white/30 py-3"
              >
                Download Application Copy
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6">
      {/* Progress Bar */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-between mb-4">
          <span className="text-white/80 text-sm">Step 6 of 6</span>
          <span className="text-white/80 text-sm">100% Complete</span>
        </div>
        <div className="w-full bg-white/20 rounded-full h-2">
          <div className="bg-green-500 h-2 rounded-full w-full transition-all duration-500"></div>
        </div>
      </motion.div>

      {/* Page Header */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <h2 className="text-3xl font-bold text-white mb-2">Payment & Submission</h2>
        <p className="text-white/80">Complete your application by submitting the required payment</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Payment Methods */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-white/25 backdrop-blur-md border border-white/40 p-6 mb-6">
              <h3 className="text-xl font-bold text-white mb-4">Select Payment Method</h3>
              
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                <div className="grid gap-4">
                  {/* CBD PSID Payment */}
                  <div className="flex items-center space-x-3 p-4 rounded-lg border border-white/20 hover:bg-white/10">
                    <RadioGroupItem value="cbd-psid" id="cbd-psid" className="text-green-500" />
                    <Shield className="w-5 h-5 text-green-400" />
                    <div className="flex-1">
                      <Label htmlFor="cbd-psid" className="text-white font-medium cursor-pointer">
                        CBD Punjab Digital Payment
                      </Label>
                      <p className="text-white/70 text-sm">Pay via Mobile Banking, ATM, or 1Bill</p>
                    </div>
                  </div>

                  {/* Bank Transfer */}
                  <div className="flex items-center space-x-3 p-4 rounded-lg border border-white/20 hover:bg-white/10">
                    <RadioGroupItem value="bank-transfer" id="bank-transfer" className="text-green-500" />
                    <Building className="w-5 h-5 text-blue-400" />
                    <div className="flex-1">
                      <Label htmlFor="bank-transfer" className="text-white font-medium cursor-pointer">
                        Bank Transfer
                      </Label>
                      <p className="text-white/70 text-sm">Direct transfer to CBD Punjab account</p>
                    </div>
                  </div>

                  {/* Online Banking */}
                  <div className="flex items-center space-x-3 p-4 rounded-lg border border-white/20 hover:bg-white/10">
                    <RadioGroupItem value="online-banking" id="online-banking" className="text-green-500" />
                    <Smartphone className="w-5 h-5 text-green-400" />
                    <div className="flex-1">
                      <Label htmlFor="online-banking" className="text-white font-medium cursor-pointer">
                        Online Banking
                      </Label>
                      <p className="text-white/70 text-sm">Pay through your bank's online portal</p>
                    </div>
                  </div>

                  {/* Credit/Debit Card */}
                  <div className="flex items-center space-x-3 p-4 rounded-lg border border-white/20 hover:bg-white/10">
                    <RadioGroupItem value="card-payment" id="card-payment" className="text-green-500" />
                    <CreditCard className="w-5 h-5 text-purple-400" />
                    <div className="flex-1">
                      <Label htmlFor="card-payment" className="text-white font-medium cursor-pointer">
                        Credit/Debit Card
                      </Label>
                      <p className="text-white/70 text-sm">Secure card payment (Processing fee: 2%)</p>
                    </div>
                  </div>
                </div>
              </RadioGroup>
            </Card>

            {/* CBD PSID Payment Details */}
            {paymentMethod === "cbd-psid" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Card className="bg-white/25 backdrop-blur-md border border-white/40 p-6 mb-6">
                  {/* Header with PSID */}
                  <div className="bg-green-500/20 rounded-lg p-4 mb-6">
                    <div className="text-center">
                      <h4 className="text-2xl font-bold text-green-400 mb-2">CBD Punjab</h4>
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-white/80">PSID:</span>
                        <span className="text-xl font-mono font-bold text-white">{cbdPSID}</span>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={handleCopyPSID}
                          className="bg-white/20 border-white/40 text-white hover:bg-white/30 h-8"
                        >
                          {copiedPSID ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Where to Pay Section */}
                    <div>
                      <h5 className="text-lg font-bold text-white mb-4 flex items-center">
                        <Wallet className="w-5 h-5 mr-2 text-green-400" />
                        Where to Pay CBD PSID?
                      </h5>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2">
                          <Smartphone className="w-4 h-4 text-blue-400" />
                          <span className="text-white/80">Mobile Banking</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Building className="w-4 h-4 text-blue-400" />
                          <span className="text-white/80">Internet Banking</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CreditCardIcon className="w-4 h-4 text-blue-400" />
                          <span className="text-white/80">ATM</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Building2 className="w-4 h-4 text-blue-400" />
                          <span className="text-white/80">Bank Branches (OTC)</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4 text-blue-400" />
                          <span className="text-white/80">Telcos' Agent Network (OTC)</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Wallet className="w-4 h-4 text-blue-400" />
                          <span className="text-white/80">Mobile Wallets</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Smartphone className="w-4 h-4 text-blue-400" />
                          <span className="text-white/80">Mobile Payments</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Banknote className="w-4 h-4 text-blue-400" />
                          <span className="text-white/80">Branchless Banking</span>
                        </div>
                      </div>
                    </div>

                    {/* How to Pay Section */}
                    <div>
                      <h5 className="text-lg font-bold text-white mb-4 flex items-center">
                        <Shield className="w-5 h-5 mr-2 text-green-400" />
                        How to Pay:
                      </h5>
                      <div className="space-y-2 text-sm">
                        <div className="flex">
                          <span className="text-green-400 font-bold mr-2">1.</span>
                          <span className="text-white/80">Login to Mobile/Internet Banking</span>
                        </div>
                        <div className="flex">
                          <span className="text-green-400 font-bold mr-2">2.</span>
                          <span className="text-white/80">Go to Bill Payment</span>
                        </div>
                        <div className="flex">
                          <span className="text-green-400 font-bold mr-2">3.</span>
                          <span className="text-white/80">Select 1Bill</span>
                        </div>
                        <div className="flex">
                          <span className="text-green-400 font-bold mr-2">4.</span>
                          <span className="text-white/80">Choose Voucher/Invoice</span>
                        </div>
                        <div className="flex">
                          <span className="text-green-400 font-bold mr-2">5.</span>
                          <span className="text-white/80">Enter CBD PSID: <span className="font-mono text-green-400">{cbdPSID}</span></span>
                        </div>
                        <div className="flex">
                          <span className="text-green-400 font-bold mr-2">6.</span>
                          <span className="text-white/80">Verify Details</span>
                        </div>
                        <div className="flex">
                          <span className="text-green-400 font-bold mr-2">7.</span>
                          <span className="text-white/80">Enter PIN/OTP</span>
                        </div>
                        <div className="flex">
                          <span className="text-green-400 font-bold mr-2">8.</span>
                          <span className="text-white/80">Pay Amount</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 24/7 Support Section */}
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <h5 className="text-lg font-bold text-white mb-4">24/7 Support</h5>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-green-400" />
                        <div>
                          <span className="text-white/80">UAN:</span>
                          <div className="text-white font-medium">(042) 111 11 CBDP (2237)</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-green-400" />
                        <div>
                          <span className="text-white/80">Email:</span>
                          <div className="text-white font-medium">support@cbdpunjab.gov.pk</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MessageSquare className="w-4 h-4 text-green-400" />
                        <div>
                          <span className="text-white/80">WhatsApp:</span>
                          <div className="text-white font-medium">+92-333-1234567</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Upload Receipt */}
                  <div className="mt-6">
                    <Label className="text-white/90 mb-2 block">Upload Payment Receipt (Optional)</Label>
                    <Input
                      type="file"
                      accept="image/*,.pdf"
                      className="bg-white/20 border-white/30 text-white file:bg-green-500 file:text-white file:border-0 file:rounded"
                    />
                    <p className="text-white/60 text-xs mt-1">Upload screenshot or receipt after payment for faster processing</p>
                  </div>
                </Card>
              </motion.div>
            )}

            {/* Bank Transfer Details */}
            {paymentMethod === "bank-transfer" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Card className="bg-white/25 backdrop-blur-md border border-white/40 p-6">
                  <h4 className="text-lg font-bold text-white mb-4">Bank Transfer Details</h4>
                  <div className="bg-blue-500/20 rounded-lg p-4 mb-4">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-white/80">Bank Name:</span>
                        <span className="text-white font-medium">Habib Bank Limited (HBL)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/80">Account Title:</span>
                        <span className="text-white font-medium">CBD Punjab Development</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/80">Account Number:</span>
                        <span className="text-white font-medium">12345678901234</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/80">IBAN:</span>
                        <span className="text-white font-medium">PK12HABB1234567890123456</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Label className="text-white/90 mb-2 block">Upload Payment Receipt</Label>
                    <Input
                      type="file"
                      accept="image/*,.pdf"
                      className="bg-white/20 border-white/30 text-white file:bg-green-500 file:text-white file:border-0 file:rounded"
                    />
                  </div>
                </Card>
              </motion.div>
            )}

            {paymentMethod === "card-payment" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Card className="bg-white/25 backdrop-blur-md border border-white/40 p-6">
                  <h4 className="text-lg font-bold text-white mb-4">Card Payment Details</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <Label className="text-white/90 mb-2 block">Card Number</Label>
                      <Input
                        placeholder="1234 5678 9012 3456"
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                      />
                    </div>
                    <div>
                      <Label className="text-white/90 mb-2 block">Expiry Date</Label>
                      <Input
                        placeholder="MM/YY"
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                      />
                    </div>
                    <div>
                      <Label className="text-white/90 mb-2 block">CVV</Label>
                      <Input
                        placeholder="123"
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label className="text-white/90 mb-2 block">Cardholder Name</Label>
                      <Input
                        placeholder="John Doe"
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                      />
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Payment Summary */}
        <div className="lg:col-span-1">
          <motion.div
            className="sticky top-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="bg-white/25 backdrop-blur-md border border-white/40 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Payment Summary</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-white/80">Plot Value:</span>
                  <span className="text-white">PKR {totalPlotValue?.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/80">Processing Fees:</span>
                  <span className="text-white">PKR {totalProcessingFees?.toLocaleString()}</span>
                </div>
                {paymentMethod === "card-payment" && (
                  <div className="flex justify-between">
                    <span className="text-white/80">Card Processing (2%):</span>
                    <span className="text-white">PKR {(totalAmount * 0.02).toLocaleString()}</span>
                  </div>
                )}
                <div className="border-t border-white/20 pt-3">
                  <div className="flex justify-between">
                    <span className="text-white font-bold">Down Payment Due:</span>
                    <span className="text-green-400 font-bold">
                      PKR {(paymentMethod === "card-payment" ? downPayment + (totalAmount * 0.02) : downPayment).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-500/20 rounded-lg p-4 mb-6">
                <h5 className="text-blue-400 font-medium mb-2">Important Notes:</h5>
                <ul className="text-white/80 text-sm space-y-1">
                  <li>• Payment must be completed within 7 days</li>
                  <li>• Keep payment receipt for records</li>
                  <li>• Remaining amount in monthly installments</li>
                  <li>• PSID payment is processed instantly</li>
                </ul>
              </div>

              <Button 
                onClick={handleSubmit}
                disabled={isProcessing}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3"
              >
                {isProcessing ? "Processing..." : "Submit Application & Pay"}
              </Button>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <motion.div 
        className="flex justify-between mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Button 
          onClick={() => onNavigate('terms-conditions')}
          variant="outline"
          className="bg-white/20 border-white/40 text-white hover:bg-white/30 px-6 py-3"
          disabled={isProcessing}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Terms
        </Button>
      </motion.div>

      {/* Processing Overlay */}
      {isProcessing && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <Card className="bg-white/25 backdrop-blur-md border border-white/40 p-8 text-center">
            <div className="animate-spin w-8 h-8 border-2 border-green-500 border-t-transparent rounded-full mx-auto mb-4"></div>
            <h3 className="text-white font-bold mb-2">Processing Payment...</h3>
            <p className="text-white/70">Please wait while we process your application</p>
          </Card>
        </div>
      )}
    </div>
  );
}