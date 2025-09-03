import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Card } from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, FileText, Shield } from "lucide-react";
import { useState } from "react";

interface TermsAndConditionsProps {
  onNavigate: (screen: string) => void;
}

export default function TermsAndConditions({ onNavigate }: TermsAndConditionsProps) {
  const [agreed, setAgreed] = useState(false);

  const handleNext = () => {
    if (!agreed) return;
    onNavigate('payment');
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
          <span className="text-white/80 text-sm">Step 5 of 6</span>
          <span className="text-white/80 text-sm">83% Complete</span>
        </div>
        <div className="w-full bg-white/20 rounded-full h-2">
          <div className="bg-green-500 h-2 rounded-full w-5/6 transition-all duration-500"></div>
        </div>
      </motion.div>

      {/* Page Header */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <h2 className="text-3xl font-bold text-white mb-2">Terms & Conditions</h2>
        <p className="text-white/80">Please read and accept the terms and conditions to proceed</p>
      </motion.div>

      {/* Terms Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Card className="bg-white/25 backdrop-blur-md border border-white/40 p-6 mb-6">
          <div className="flex items-center space-x-2 mb-6">
            <FileText className="w-5 h-5 text-green-400" />
            <h3 className="text-xl font-bold text-white">CBD Punjab Terms & Conditions</h3>
          </div>
          
          <ScrollArea className="h-96 w-full rounded-md border border-white/20 p-4 bg-white/10">
            <div className="space-y-4 text-white/90 text-sm">
              <section>
                <h4 className="font-bold text-white mb-2">1. GENERAL TERMS</h4>
                <p className="mb-4">
                  These terms and conditions govern your use of CBD Punjab services and your property purchase within 
                  the Central Business District. By proceeding with this application, you agree to be bound by these terms.
                </p>
              </section>

              <section>
                <h4 className="font-bold text-white mb-2">2. PAYMENT TERMS</h4>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Down payment must be made within 7 days of application approval</li>
                  <li>Monthly installments are due on the same date each month</li>
                  <li>Late payment charges of 2% per month will apply on overdue amounts</li>
                  <li>All payments must be made through approved banking channels</li>
                </ul>
              </section>

              <section>
                <h4 className="font-bold text-white mb-2">3. PROPERTY DEVELOPMENT</h4>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Development timeline is subject to government approvals and weather conditions</li>
                  <li>Infrastructure development will be completed as per approved master plan</li>
                  <li>Possession will be given after completion of development work</li>
                  <li>Any changes to the master plan will be communicated to plot holders</li>
                </ul>
              </section>

              <section>
                <h4 className="font-bold text-white mb-2">4. CANCELLATION POLICY</h4>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Cancellation requests must be submitted in writing</li>
                  <li>Processing fee is non-refundable under any circumstances</li>
                  <li>Refund processing takes 60-90 business days after approval</li>
                  <li>Cancellation charges may apply as per the payment schedule</li>
                </ul>
              </section>

              <section>
                <h4 className="font-bold text-white mb-2">5. TRANSFER OF OWNERSHIP</h4>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Plot can be transferred after 25% payment completion</li>
                  <li>Transfer fee of 2% of plot value will be charged</li>
                  <li>All dues must be cleared before transfer</li>
                  <li>Transfer is subject to approval by CBD Punjab management</li>
                </ul>
              </section>

              <section>
                <h4 className="font-bold text-white mb-2">6. FORCE MAJEURE</h4>
                <p className="mb-4">
                  CBD Punjab shall not be liable for any delay or failure in performance due to circumstances 
                  beyond reasonable control, including but not limited to natural disasters, government actions, 
                  or other unforeseeable events.
                </p>
              </section>

              <section>
                <h4 className="font-bold text-white mb-2">7. DISPUTE RESOLUTION</h4>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>All disputes will be resolved through arbitration in Lahore, Pakistan</li>
                  <li>Applicable law shall be the law of Pakistan</li>
                  <li>Courts in Lahore shall have exclusive jurisdiction</li>
                </ul>
              </section>

              <section>
                <h4 className="font-bold text-white mb-2">8. PRIVACY POLICY</h4>
                <p className="mb-4">
                  Your personal information will be handled in accordance with our privacy policy. 
                  We are committed to protecting your privacy and will not share your information 
                  with third parties without your consent.
                </p>
              </section>
            </div>
          </ScrollArea>

          {/* Agreement Checkbox */}
          <div className="mt-6 p-4 bg-white/10 rounded-lg">
            <div className="flex items-start space-x-3">
              <Checkbox
                id="terms-agreement"
                checked={agreed}
                onCheckedChange={(checked) => setAgreed(checked === true)}
                className="border-white/40 data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500 mt-1"
              />
              <div className="flex-1">
                <label
                  htmlFor="terms-agreement"
                  className="text-white/90 text-sm cursor-pointer leading-relaxed"
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <Shield className="w-4 h-4 text-green-400" />
                    <span className="font-medium">I agree to the Terms & Conditions</span>
                  </div>
                  I have read and understood all the terms and conditions mentioned above. 
                  I agree to comply with all the terms, conditions, and policies of CBD Punjab. 
                  I understand that this agreement is legally binding.
                </label>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Navigation Buttons */}
      <motion.div 
        className="flex justify-between"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Button 
          onClick={() => onNavigate('application-review')}
          variant="outline"
          className="bg-white/20 border-white/40 text-white hover:bg-white/30 px-6 py-3"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Review
        </Button>
        
        <Button 
          onClick={handleNext}
          disabled={!agreed}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 disabled:bg-gray-500 disabled:cursor-not-allowed"
        >
          Proceed to Payment
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </motion.div>
    </div>
  );
}