"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronLeft,
  ChevronRight,
  Lightbulb,
  Target,
  Wrench,
  Rocket,
  Eye,
  MessageSquare,
  Users,
  Calendar,
  ClipboardList,
  FileText,
  TrendingUp,
  Heart,
  Briefcase,
  UserCheck,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { DoubleDiamondIndicator } from "@/components/double-diamond-indicator"

type Phase = "discover" | "define" | "develop" | "deliver" | null

const slides: {
  id: number
  phase: Phase
  content: React.ReactNode
}[] = [
  {
    id: 1,
    phase: null,
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Lightbulb className="w-20 h-20 mx-auto mb-6 text-yellow-400" />
        </motion.div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance text-white">
          Applying the Double Diamond Framework
        </h1>
        <p className="text-2xl md:text-3xl text-gray-300">Expanding into Product Management</p>
        <p className="text-xl md:text-2xl text-gray-400 mt-4">
          Improving Client Communication in Front-End Development
        </p>
      </div>
    ),
  },
  {
    id: 2,
    phase: null,
    content: (
      <div className="flex flex-col justify-center h-full px-12 md:px-24 max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Eye className="w-12 h-12 text-blue-400" />
          <h2 className="text-4xl md:text-5xl font-bold text-white">Introduction</h2>
        </div>
        <div className="space-y-6 text-lg md:text-xl">
          <div className="flex gap-4">
            <Target className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
            <div>
              <p className="font-semibold text-blue-400 mb-2">Context:</p>
              <p className="text-gray-300">
                As a front-end developer, I interact with the product in its most visible form.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <MessageSquare className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
            <div>
              <p className="font-semibold text-blue-400 mb-2">Observation:</p>
              <p className="text-gray-300">
                Clear communication with clients on front-end progress, changes, and challenges can often reduce
                bottlenecks.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <TrendingUp className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
            <div>
              <p className="font-semibold text-blue-400 mb-2">Opportunity:</p>
              <p className="text-gray-300">
                By applying principles of Product Management, I can act as a communication bridge between the technical
                team and the client for the projects I'm directly working on.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    phase: null,
    content: (
      <div className="flex flex-col items-center justify-center h-full px-12 md:px-24 max-w-5xl mx-auto">
        <div className="text-center space-y-12">
          <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">The Double Diamond Framework</h2>
            <p className="text-lg text-gray-300">A design thinking framework for problem-solving and innovation</p>
          </motion.div>

          <motion.div
            className="flex items-center justify-center gap-6 text-2xl md:text-3xl font-semibold flex-wrap"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3">
              <Lightbulb className="w-8 h-8 text-blue-400" />
              <span className="text-blue-400">Discover</span>
            </div>
            <span className="text-gray-400">→</span>
            <div className="flex items-center gap-3">
              <Target className="w-8 h-8 text-blue-500" />
              <span className="text-blue-500">Define</span>
            </div>
            <span className="text-gray-400">→</span>
            <div className="flex items-center gap-3">
              <Wrench className="w-8 h-8 text-green-400" />
              <span className="text-green-400">Develop</span>
            </div>
            <span className="text-gray-400">→</span>
            <div className="flex items-center gap-3">
              <Rocket className="w-8 h-8 text-green-500" />
              <span className="text-green-500">Deliver</span>
            </div>
          </motion.div>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    phase: "discover",
    content: (
      <div className="flex flex-col justify-center h-full px-12 md:px-24 max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <Lightbulb className="w-12 h-12 text-blue-400" />
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Discover</h2>
            <p className="text-xl text-blue-400">Exploring the Opportunity</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg bg-black/40 border-2 border-blue-500/30 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-8 h-8 text-blue-400" />
              <h3 className="text-xl font-semibold text-blue-400">Personal Growth</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              I want to broaden my expertise beyond front-end development and enjoy the client-facing side:
              understanding feedback, clarifying needs, and shaping solutions.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-black/40 border-2 border-blue-500/30 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-8 h-8 text-blue-400" />
              <h3 className="text-xl font-semibold text-blue-400">Bridge Role</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              There's an opportunity to be a communication bridge between clients and the development team, improving
              collaboration and reducing friction.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-black/40 border-2 border-blue-500/30 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="w-8 h-8 text-blue-400" />
              <h3 className="text-xl font-semibold text-blue-400">PM Context-Switching</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Project Managers frequently context-switch between multiple projects, limiting their capacity for in-depth
              client communication on product details. By taking ownership of client-facing product discussions, I can
              alleviate this burden.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-black/40 border-2 border-blue-500/30 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <MessageSquare className="w-8 h-8 text-blue-400" />
              <h3 className="text-xl font-semibold text-blue-400">Communication Impact</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Clear communication with clients on front-end progress, changes, and challenges can significantly reduce
              bottlenecks and improve project outcomes.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    phase: "define",
    content: (
      <div className="flex flex-col justify-center h-full px-12 md:px-24 max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <Target className="w-12 h-12 text-blue-500" />
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Define</h2>
            <p className="text-xl text-blue-500">Clarifying the Role</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg bg-black/40 border-2 border-blue-600/30 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <ClipboardList className="w-8 h-8 text-blue-500" />
              <h3 className="text-xl font-semibold text-blue-500">Scope of Role</h3>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li className="flex gap-2">
                <span className="text-blue-500">•</span>
                <span>Focus on reporting client feedback on app enhancements and fixes</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-500">•</span>
                <span>Avoid heavy legal/contract discussions</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-500">•</span>
                <span>Ensure smooth communication between clients and developers</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-lg bg-black/40 border-2 border-blue-600/30 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-8 h-8 text-blue-500" />
              <h3 className="text-xl font-semibold text-blue-500">Types of Meetings</h3>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li className="flex gap-2">
                <span className="text-blue-500">•</span>
                <span>Review sessions for app updates and bug fixes</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-500">•</span>
                <span>Feedback loops to capture pain points</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-500">•</span>
                <span>Planning alignment for future improvements</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-lg bg-black/40 border-2 border-blue-600/30 backdrop-blur-sm md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <UserCheck className="w-8 h-8 text-blue-500" />
              <h3 className="text-xl font-semibold text-blue-500">Key Responsibilities</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex gap-2">
                <span className="text-blue-500">•</span>
                <span className="text-gray-300">Active listening and note-taking</span>
              </div>
              <div className="flex gap-2">
                <span className="text-blue-500">•</span>
                <span className="text-gray-300">Summarizing back to confirm needs</span>
              </div>
              <div className="flex gap-2">
                <span className="text-blue-500">•</span>
                <span className="text-gray-300">Reporting internally on priorities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    phase: "develop",
    content: (
      <div className="flex flex-col justify-center h-full px-12 md:px-24 max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <Wrench className="w-12 h-12 text-green-400" />
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Develop</h2>
            <p className="text-xl text-green-400">Building the Solution</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg bg-black/40 border-2 border-green-500/30 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-8 h-8 text-green-400" />
              <h3 className="text-xl font-semibold text-green-400">Meeting Reports</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Concise one-page summaries of client sentiment, capturing key feedback, concerns, and priorities in an
              actionable format.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-black/40 border-2 border-green-500/30 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <MessageSquare className="w-8 h-8 text-green-400" />
              <h3 className="text-xl font-semibold text-green-400">"You Said, We Did"</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Regular updates that close the feedback loop, demonstrating responsiveness and building trust with clients
              through transparency.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-black/40 border-2 border-green-500/30 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-8 h-8 text-green-400" />
              <h3 className="text-xl font-semibold text-green-400">Shadow & Learn</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Observe experienced team members in client meetings to understand best practices, communication styles,
              and effective facilitation techniques.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-black/40 border-2 border-green-500/30 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-8 h-8 text-green-400" />
              <h3 className="text-xl font-semibold text-green-400">Visual Tools</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Experiment with dashboards, trackers, and visual summaries to make information more accessible and
              actionable for all stakeholders.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 7,
    phase: "deliver",
    content: (
      <div className="flex flex-col justify-center h-full px-12 md:px-24 max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <Rocket className="w-12 h-12 text-green-500" />
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Deliver</h2>
            <p className="text-xl text-green-500">Impact & Value</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg bg-black/40 border-2 border-green-600/30 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <MessageSquare className="w-8 h-8 text-green-500" />
              <h3 className="text-xl font-semibold text-green-500">Clear Communication</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Ensure all communication is clear, structured, and actionable, reducing misunderstandings and improving
              project efficiency.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-black/40 border-2 border-green-600/30 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-8 h-8 text-green-500" />
              <h3 className="text-xl font-semibold text-green-500">Client Trust</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Increase client trust and satisfaction by demonstrating that their feedback matters and is acted upon
              consistently.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-black/40 border-2 border-green-600/30 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-8 h-8 text-green-500" />
              <h3 className="text-xl font-semibold text-green-500">Team Prioritization</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Help the development team prioritize work effectively by providing clear insights into client needs and
              business value.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-black/40 border-2 border-green-600/30 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-8 h-8 text-green-500" />
              <h3 className="text-xl font-semibold text-green-500">Professional Growth</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Position myself as a well-rounded professional who contributes beyond code, strengthening both client
              relationships and career trajectory.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 8,
    phase: null,
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center px-12 md:px-24 max-w-4xl mx-auto">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Rocket className="w-20 h-20 mx-auto mb-6 text-green-400" />
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">Moving Forward</h2>
        <p className="text-xl md:text-2xl text-gray-300 mb-12">
          By applying the Double Diamond framework, I've mapped out a clear path to expand my role and create more value
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left w-full max-w-3xl">
          <div className="space-y-3 p-6 rounded-lg bg-black/40 border-2 border-blue-500/30 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <Lightbulb className="w-8 h-8 text-blue-400" />
              <h3 className="text-xl font-semibold text-blue-400">Problem Space</h3>
            </div>
            <p className="text-gray-300">Discovered the opportunity and defined the scope</p>
          </div>
          <div className="space-y-3 p-6 rounded-lg bg-black/40 border-2 border-green-500/30 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <Rocket className="w-8 h-8 text-green-400" />
              <h3 className="text-xl font-semibold text-green-400">Solution Space</h3>
            </div>
            <p className="text-gray-300">Developed the approach and ready to deliver value</p>
          </div>
        </div>
      </div>
    ),
  },
]

export default function PresentationPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") nextSlide()
    if (e.key === "ArrowLeft") prevSlide()
  }

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      style={{
        backgroundImage: "url(/dark2.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed", // Prevents scaling on scroll
        imageRendering: "auto", // Let browser optimize for quality
        willChange: "background-image", // Hint for smoother transitions
      }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

      <div className="relative z-10 w-full h-full">
        <div className="absolute top-0 left-0 right-0 z-20">
          <DoubleDiamondIndicator currentPhase={slides[currentSlide].phase} />
        </div>

        {/* Slide Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full h-full pt-32"
          >
            {slides[currentSlide].content}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="rounded-full bg-black/40 border-white/20 hover:bg-black/60 text-white backdrop-blur-sm"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="rounded-full bg-black/40 border-white/20 hover:bg-black/60 text-white backdrop-blur-sm"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Slide Counter */}
        <div className="absolute bottom-8 right-8 text-sm text-white/80">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>
    </div>
  )
}
