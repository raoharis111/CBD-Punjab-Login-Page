import React from "react";
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
import { ImageWithFallback } from "./figma/ImageWithFallback";
import pmInaugurationImage from '../assets/pmInaugurationImage.jpeg';
import lahoreGlobalVillageImage from '../assets/lahoreGlobalVillageImage.jpeg';

import { 
  Plus, 
  Eye, 
  Download, 
  FileText, 
  TrendingUp, 
  Users, 
  MessageSquare, 
  Calendar, 
  MapPin,
  ChevronRight,
  Star,
  Clock,
  ThumbsUp,
  Share2,
  Bookmark
} from "lucide-react";

interface DashboardProps {
  onNavigate: (screen: string) => void;
  onUpdateData?: (data: any) => void;
}

export default function Dashboard({ onNavigate, onUpdateData }: DashboardProps) {
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

  const trendingProjects = [
    {
      id: 1,
      name: "CBD Tower One",
      location: "Main Boulevard",
      price: "PKR 2.85-32.1 Cr",
      type: "Commercial",
      features: ["Offices", "Retail"],
      image: "https://images.unsplash.com/photo-1739511878985-110a7f05ef26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb21tZXJjaWFsJTIwY29tcGxleCUyMHBha2lzdGFuJTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNzU3NDEzMzQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
     
    },
    {
      id: 2,
      name: "Green Valley Residences",
      location: "Sector B",
      price: "PKR 1.44-11.83 Cr",
      type: "Residential",
      features: ["Apartments", "Penthouses"],
      image: "https://images.unsplash.com/photo-1739511878985-110a7f05ef26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxyZXNpZGVudGlhbCUyMGhvdXNpbmclMjBwcm9qZWN0JTIwbW9kZXJuJTIwcGFraXN0YW58ZW58MXx8fHwxNzU3NDEzMzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
     
    },
    {
      id: 3,
      name: "Industrial Hub Central",
      location: "Industrial Zone",
      price: "PKR 2.3-68.5 Cr",
      type: "Industrial",
      features: ["Warehouses", "Manufacturing"],
      image: "https://images.unsplash.com/photo-1753978546850-c6ba96be5ba2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZGV2ZWxvcG1lbnQlMjBtb2Rlcm4lMjBidWlsZGluZ3N8ZW58MXx8fHwxNzU3NDEzMzUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
   
    }
  ];

  const communityContent = [
    {
      id: 1,
      type: "news",
      title: "Prime Minister Pakistan Inaugurated the Highly Anticipated Projects of Bab-e-Pakistan & Walton Road Upgradation",
      excerpt: "PM Mian Muhammad Shehbaz Sharif inaugurated the Bab-e-Pakistan Development and Walton Road Upgradation Project executed by PCBDDA",
      date: "11 February 2023",
      category: "Infrastructure",
      image: pmInaugurationImage,
      likes: 156,
      comments: 23
    },
    {
      id: 2,
      type: "news",
      title: "CBD Punjab Unveiled the Lahore Global Village During a Prestigious Investor Summit Graced by the Presence of CM Punjab",
      excerpt: "PCBDDA organized an Investor Summit for the highly anticipated Lahore Global Village (LGV) project to attract potential buyers",
      date: "15 March 2023",
      category: "Investment",
      image: lahoreGlobalVillageImage,
      likes: 198,
      comments: 34
    }
  ];

  const newsItems = [
    {
      id: 1,
      title: "CBD Punjab Launches New Global City Initiative",
      excerpt: "Revolutionary smart city project aims to transform urban landscape with cutting-edge technology integration.",
      date: "December 20, 2024",
      category: "Global City",
      readTime: "3 min read",
      image: lahoreGlobalVillageImage
    },
    {
      id: 2,
      title: "Major Infrastructure Development Approved",
      excerpt: "New road networks and utility connections approved for upcoming commercial and residential zones.",
      date: "December 18, 2024",
      category: "Infrastructure",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1753978546850-c6ba96be5ba2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZGV2ZWxvcG1lbnQlMjBtb2Rlcm4lMjBidWlsZGluZ3N8ZW58MXx8fHwxNzU3NDEzMzUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 3,
      title: "Investment Opportunities in Green Buildings",
      excerpt: "CBD Punjab announces new incentives for environmentally sustainable construction projects.",
      date: "December 15, 2024",
      category: "Investment",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1652565436975-5ac0c22fb3ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBvZmZpY2UlMjBwYWtpc3RhbnxlbnwxfHx8fDE3NTc0MTMzNTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
                        onClick={() => {
                          if (onUpdateData) {
                            onUpdateData({ selectedApplicationNo: application.applicationNo });
                          }
                          onNavigate('application-view');
                        }}
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

      {/* CBD Projects Section - Compact */}
      <motion.div 
        className="bg-white/25 backdrop-blur-md rounded-xl border border-white/40 overflow-hidden mt-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="p-3 border-b border-white/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <h3 className="text-base text-white flex items-center">
                <TrendingUp className="w-4 h-4 mr-2 text-orange-400" />
                CBD Projects
              </h3>
              <Badge className="bg-red-500 text-white text-xs px-2 py-0.5">
                Trending
              </Badge>
            </div>
            <Button 
              variant="outline"
              size="sm"
              className="bg-white/20 border-white/40 text-white hover:bg-white/30 h-6 px-2 text-xs"
            >
              View All
              <ChevronRight className="w-3 h-3 ml-1" />
            </Button>
          </div>
        </div>
        
        <div className="p-3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {trendingProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-white/15 rounded-lg overflow-hidden border border-white/20 hover:bg-white/20 transition-all cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              >
                <div className="relative">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.name}
                    className="w-full h-24 object-cover"
                  />
                  {project.hot && (
                    <Badge className="absolute top-1 left-1 bg-red-500 text-white text-xs px-1 py-0.5">
                      HOT
                    </Badge>
                  )}
                  <div className="absolute top-1 right-1">
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white/20 border-white/40 text-white hover:bg-white/30 h-5 w-5 p-0"
                    >
                      <Bookmark className="w-2.5 h-2.5" />
                    </Button>
                  </div>
                </div>
                
                <div className="p-2">
                  <div className="mb-1">
                    <p className="text-white font-medium text-xs mb-0.5 line-clamp-1">{project.name}</p>
                    <p className="text-white/70 text-xs flex items-center">
                      <MapPin className="w-2.5 h-2.5 mr-1" />
                      {project.location}
                    </p>
                  </div>
                  
                  <div className="mb-1">
                    <p className="text-green-400 font-medium text-xs">{project.price}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-0.5 mb-1">
                    {project.features.slice(0, 2).map((feature, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary" 
                        className="bg-blue-500/20 text-blue-300 border-blue-500/40 text-xs px-1 py-0.5"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Badge 
                      variant="secondary" 
                      className="bg-purple-500/20 text-purple-300 border-purple-500/40 text-xs px-1 py-0.5"
                    >
                      {project.type}
                    </Badge>
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white/10 border-white/30 text-white hover:bg-white/20 h-4 px-1.5 text-xs"
                    >
                      View
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* CBD News & Events Section - Compact */}
      <motion.div 
        className="bg-white/25 backdrop-blur-md rounded-xl border border-white/40 overflow-hidden mt-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="p-3 border-b border-white/20">
          <div className="flex items-center justify-between">
            <h3 className="text-base text-white flex items-center">
              <FileText className="w-4 h-4 mr-2 text-green-400" />
              CBD News & Events
            </h3>
            <Button 
              variant="outline"
              size="sm"
              className="bg-white/20 border-white/40 text-white hover:bg-white/30 h-6 px-2 text-xs"
            >
              View All
              <ChevronRight className="w-3 h-3 ml-1" />
            </Button>
          </div>
        </div>
        
        <div className="p-3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {newsItems.map((news, index) => (
              <motion.div
                key={news.id}
                className="bg-white/15 rounded-lg overflow-hidden border border-white/20 hover:bg-white/20 transition-all cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              >
                <ImageWithFallback
                  src={news.image}
                  alt={news.title}
                  className="w-full h-20 object-cover"
                />
                
                <div className="p-2">
                  <div className="flex items-center justify-between mb-1">
                    <Badge 
                      variant="secondary" 
                      className="bg-green-500/20 text-green-300 border-green-500/40 text-xs px-1 py-0.5"
                    >
                      {news.category}
                    </Badge>
                    <div className="flex items-center text-white/50 text-xs">
                      <Clock className="w-2.5 h-2.5 mr-1" />
                      {news.readTime}
                    </div>
                  </div>
                  
                  <h4 className="text-white font-medium text-xs mb-1 line-clamp-2">
                    {news.title}
                  </h4>
                  
                  <p className="text-white/70 text-xs mb-1 line-clamp-2">
                    {news.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-white/50 text-xs">
                      <Calendar className="w-2.5 h-2.5 mr-1" />
                      {news.date.split(',')[0]}
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white/10 border-white/30 text-white hover:bg-white/20 h-4 px-1.5 text-xs"
                    >
                      Read
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* CBD Community Section - Compact */}
      <motion.div 
        className="bg-white/25 backdrop-blur-md rounded-xl border border-white/40 overflow-hidden mt-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="p-3 border-b border-white/20">
          <div className="flex items-center justify-between">
            <h3 className="text-base text-white flex items-center">
              <Users className="w-4 h-4 mr-2 text-blue-400" />
              CBD Community
            </h3>
          </div>
        </div>
        
        <div className="p-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* News Section */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-white font-medium text-xs flex items-center">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1.5"></div>
                  Community News
                </h4>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-green-400 hover:text-green-300 hover:bg-white/10 h-5 px-1.5 text-xs"
                >
                  View All
                </Button>
              </div>
              {communityContent.slice(0, 2).map((item, index) => (
                <motion.div
                  key={item.id}
                  className="bg-white/10 rounded-lg p-2 border border-white/20 hover:bg-white/15 cursor-pointer transition-all"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                >
                  <div className="flex space-x-2">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1652565436975-5ac0c22fb3ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBvZmZpY2UlMjBwYWtpc3RhbnxlbnwxfHx8fDE3NTc0MTMzNTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt={item.title}
                      className="w-8 h-8 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-xs font-medium line-clamp-2 mb-0.5">
                        {item.title}
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-white/50 text-xs">{item.date.split(' ')[0]}</p>
                        <div className="flex items-center space-x-1.5">
                          <div className="flex items-center space-x-0.5">
                            <ThumbsUp className="w-2.5 h-2.5 text-white/40" />
                            <span className="text-white/40 text-xs">{item.likes}</span>
                          </div>
                          <div className="flex items-center space-x-0.5">
                            <MessageSquare className="w-2.5 h-2.5 text-white/40" />
                            <span className="text-white/40 text-xs">{item.comments}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Blogs Section */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-white font-medium text-xs flex items-center">
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-1.5"></div>
                  Investment Blogs
                </h4>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-orange-400 hover:text-orange-300 hover:bg-white/10 h-5 px-1.5 text-xs"
                >
                  View All
                </Button>
              </div>
              <motion.div
                className="bg-white/10 rounded-lg p-3 border border-white/20 hover:bg-white/15 cursor-pointer transition-all"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 1.0 }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1652565436975-5ac0c22fb3ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBvZmZpY2UlMjBwYWtpc3RhbnxlbnwxfHx8fDE3NTc0MTMzNTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Investment Guide"
                  className="w-full h-24 object-cover rounded-lg mb-2"
                />
                <div>
                  <p className="text-white text-sm font-medium mb-1.5 line-clamp-2">
                    Complete Investment Guide for CBD Punjab
                  </p>
                  <p className="text-white/70 text-xs mb-2 line-clamp-2">
                    Learn about investment opportunities, market trends, and strategic planning for CBD Punjab properties.
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge 
                      variant="secondary" 
                      className="bg-orange-500/20 text-orange-300 border-orange-500/40 text-xs px-2 py-1"
                    >
                      Investment
                    </Badge>
                    <p className="text-white/50 text-xs">5 min read</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}