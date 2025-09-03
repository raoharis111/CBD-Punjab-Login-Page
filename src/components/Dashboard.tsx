import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { motion } from "motion/react";
import { Plus, Eye, Download, FileText } from "lucide-react";

interface DashboardProps {
  onNavigate: (screen: string) => void;
}

export default function Dashboard({ onNavigate }: DashboardProps) {
  const mockApplications = [
    {
      applicationNo: "CBD2024001",
      scheme: "Commercial Complex A",
      plotType: "Commercial",
      plotSize: "5000 sq ft",
      status: "Under Review",
      statusColor: "bg-yellow-500"
    },
    {
      applicationNo: "CBD2024002",
      scheme: "Residential Phase 1",
      plotType: "Residential",
      plotSize: "10 Marla",
      status: "Approved",
      statusColor: "bg-green-500"
    },
    {
      applicationNo: "CBD2024003",
      scheme: "Industrial Zone B",
      plotType: "Industrial",
      plotSize: "2 Kanal",
      status: "Payment Pending",
      statusColor: "bg-orange-500"
    },
    {
      applicationNo: "CBD2024004",
      scheme: "Mixed Use Development",
      plotType: "Mixed Use",
      plotSize: "8000 sq ft",
      status: "Submitted",
      statusColor: "bg-blue-500"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Page Header */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Dashboard</h2>
            <p className="text-white/80">Manage your property applications</p>
          </div>
          <Button 
            onClick={() => onNavigate('applicant-profile')}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium"
          >
            <Plus className="w-5 h-5 mr-2" />
            New Application
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <motion.div 
            className="bg-white/25 backdrop-blur-md rounded-lg p-6 border border-white/40"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center space-x-3">
              <div className="bg-blue-500/20 p-3 rounded-lg">
                <FileText className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="text-white/70 text-sm">Total Applications</p>
                <p className="text-white text-2xl font-bold">4</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white/25 backdrop-blur-md rounded-lg p-6 border border-white/40"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center space-x-3">
              <div className="bg-green-500/20 p-3 rounded-lg">
                <FileText className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <p className="text-white/70 text-sm">Approved</p>
                <p className="text-white text-2xl font-bold">1</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white/25 backdrop-blur-md rounded-lg p-6 border border-white/40"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center space-x-3">
              <div className="bg-yellow-500/20 p-3 rounded-lg">
                <FileText className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <p className="text-white/70 text-sm">Under Review</p>
                <p className="text-white text-2xl font-bold">2</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white/25 backdrop-blur-md rounded-lg p-6 border border-white/40"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center space-x-3">
              <div className="bg-orange-500/20 p-3 rounded-lg">
                <FileText className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <p className="text-white/70 text-sm">Pending Payment</p>
                <p className="text-white text-2xl font-bold">1</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Applications Table */}
      <motion.div 
        className="bg-white/25 backdrop-blur-md rounded-2xl border border-white/40 overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="p-6 border-b border-white/20">
          <h3 className="text-xl font-bold text-white">Current Applications</h3>
        </div>
        
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-white/20 hover:bg-white/5">
                <TableHead className="text-white/90 font-medium">Application No.</TableHead>
                <TableHead className="text-white/90 font-medium">Scheme</TableHead>
                <TableHead className="text-white/90 font-medium">Plot Type</TableHead>
                <TableHead className="text-white/90 font-medium">Plot Size</TableHead>
                <TableHead className="text-white/90 font-medium">Status</TableHead>
                <TableHead className="text-white/90 font-medium">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockApplications.map((application, index) => (
                <motion.tr
                  key={application.applicationNo}
                  className="border-white/20 hover:bg-white/5 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <TableCell className="text-white font-medium">
                    {application.applicationNo}
                  </TableCell>
                  <TableCell className="text-white/90">
                    {application.scheme}
                  </TableCell>
                  <TableCell className="text-white/90">
                    {application.plotType}
                  </TableCell>
                  <TableCell className="text-white/90">
                    {application.plotSize}
                  </TableCell>
                  <TableCell>
                    <Badge 
                      className={`${application.statusColor} text-white hover:${application.statusColor}/80`}
                    >
                      {application.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="bg-white/20 border-white/40 text-white hover:bg-white/30"
                      >
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="bg-white/20 border-white/40 text-white hover:bg-white/30"
                      >
                        <Download className="w-4 h-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </TableCell>
                </motion.tr>
              ))}
            </TableBody>
          </Table>
        </div>
      </motion.div>
    </div>
  );
}