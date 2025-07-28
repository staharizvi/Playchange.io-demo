"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  Play,
  Heart,
  Globe,
  Star,
  Users,
  Coins,
  Gamepad2,
  ChevronDown,
  Eye,
  MessageCircle,
  Search,
  Menu,
  X,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Zap,
  Trophy,
  Shield,
  Target,
  Flame,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

// Enhanced animated background with particles (keeping original design)
const EnhancedBackground = () => {
  const [particles, setParticles] = useState<
    Array<{
      id: number
      x: number
      y: number
      size: number
      delay: number
      duration: number
      type: "heart" | "coin" | "star" | "gamepad"
    }>
  >([])

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 10,
      delay: Math.random() * 10,
      duration: 15 + Math.random() * 10,
      type: ["heart", "coin", "star", "gamepad"][Math.floor(Math.random() * 4)] as
        | "heart"
        | "coin"
        | "star"
        | "gamepad",
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated grid */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 111, 0, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 111, 0, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "60px 60px"],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, 50, -20, 0],
            rotate: [0, 360],
            scale: [0.5, 1.2, 0.8, 1],
            opacity: [0.2, 0.8, 0.3, 0.6],
          }}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        >
          {particle.type === "heart" && <Heart className="w-full h-full text-orange-400/40" />}
          {particle.type === "coin" && <Coins className="w-full h-full text-orange-500/40" />}
          {particle.type === "star" && <Star className="w-full h-full text-orange-300/40" />}
          {particle.type === "gamepad" && <Gamepad2 className="w-full h-full text-orange-600/40" />}
        </motion.div>
      ))}

      {/* Scanning lines */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/10 to-transparent h-32"
        animate={{
          y: ["-100%", "100vh"],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      {/* Pulsing orbs */}
      <motion.div
        className="absolute top-20 left-20 w-40 h-40 bg-orange-500/20 rounded-full blur-xl"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-60 h-60 bg-orange-400/15 rounded-full blur-2xl"
        animate={{
          scale: [1.2, 0.8, 1.2],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Data streams */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 bg-gradient-to-b from-transparent via-orange-500/60 to-transparent"
            style={{
              left: `${20 + i * 15}%`,
              height: "200px",
            }}
            animate={{
              y: ["-200px", "100vh"],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.5,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </div>
  )
}

// PlayStation-inspired Navigation
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("Games")

  const navItems = ["Games", "News", "Store", "Support"]

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-orange-500/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div className="flex items-center space-x-3" whileHover={{ scale: 1.05 }}>
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <Gamepad2 className="w-6 h-6 text-black" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white font-exo2">PlayChange.io</h1>
              <p className="text-xs text-orange-500 font-orbitron">IN GAMES WE TRUST</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === item
                    ? "bg-orange-500 text-black"
                    : "text-gray-300 hover:text-orange-500 hover:bg-orange-500/10"
                }`}
                onClick={() => setActiveTab(item)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.button>
            ))}
          </div>

          {/* Search and Profile */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.div className="relative" whileHover={{ scale: 1.05 }}>
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search games..."
                className="bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none"
              />
            </motion.div>
            <Link href="/auth">
              <Button className="bg-orange-500 hover:bg-orange-600 text-black font-bold">Sign In</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden mt-4 pb-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              {navItems.map((item) => (
                <motion.button
                  key={item}
                  className="block w-full text-left px-4 py-3 text-gray-300 hover:text-orange-500 hover:bg-orange-500/10 rounded-lg"
                  onClick={() => {
                    setActiveTab(item)
                    setIsMenuOpen(false)
                  }}
                >
                  {item}
                </motion.button>
              ))}
              <div className="mt-4 pt-4 border-t border-gray-700">
                <Link href="/auth">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-black font-bold">Sign In</Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

// Animated stats component
const AnimatedStats = () => {
  const [counts, setCounts] = useState({ community: 0, impact: 0, collections: 0 })

  useEffect(() => {
    const targets = { community: 50, impact: 2, collections: 5 }
    const duration = 2000
    const steps = 60

    const intervals = Object.keys(targets).map((key) => {
      const target = targets[key as keyof typeof targets]
      const increment = target / steps
      let current = 0

      const interval = setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(interval)
        }
        setCounts((prev) => ({ ...prev, [key]: Math.floor(current) }))
      }, duration / steps)

      return interval
    })

    return () => intervals.forEach(clearInterval)
  }, [])

  const stats = [
    { label: "Global Community", value: `${counts.community}K+`, icon: Globe },
    { label: "Social Impact", value: `$${counts.impact}M+`, icon: Heart },
    { label: "NFT Collections", value: counts.collections.toString(), icon: Star },
  ]

  return (
    <div className="grid grid-cols-3 gap-8 mb-12">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="text-center"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            delay: 1.2 + index * 0.2,
            duration: 0.8,
            type: "spring",
            stiffness: 100,
          }}
          whileHover={{
            scale: 1.1,
            y: -10,
            transition: { duration: 0.3 },
          }}
        >
          <motion.div
            className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-orange-500/20 border-2 border-orange-500/50"
            whileHover={{
              boxShadow: "0 0 30px rgba(255, 111, 0, 0.6)",
              borderColor: "rgba(255, 111, 0, 0.8)",
            }}
            animate={{
              boxShadow: [
                "0 0 20px rgba(255, 111, 0, 0.3)",
                "0 0 40px rgba(255, 111, 0, 0.5)",
                "0 0 20px rgba(255, 111, 0, 0.3)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <stat.icon className="w-8 h-8 text-orange-500" />
            </motion.div>
          </motion.div>
          <motion.div
            className="text-3xl font-black font-orbitron mb-2 text-orange-500"
            animate={{
              textShadow: [
                "0 0 10px rgba(255, 111, 0, 0.5)",
                "0 0 20px rgba(255, 111, 0, 0.8)",
                "0 0 10px rgba(255, 111, 0, 0.5)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            {stat.value}
          </motion.div>
          <div className="text-gray-400 font-medium">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  )
}

// Hero Banner with original background
const HeroBanner = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-black mb-6 font-exo2 text-white"
            animate={{
              textShadow: [
                "0 0 20px rgba(255, 255, 255, 0.5)",
                "0 0 40px rgba(255, 111, 0, 0.8)",
                "0 0 20px rgba(255, 255, 255, 0.5)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            Play
            <motion.span
              className="text-orange-500"
              animate={{
                scale: [1, 1.05, 1],
                textShadow: [
                  "0 0 20px rgba(255, 111, 0, 0.8)",
                  "0 0 40px rgba(255, 111, 0, 1)",
                  "0 0 20px rgba(255, 111, 0, 0.8)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              Change
            </motion.span>
            .io
          </motion.h1>

          <motion.div
            className="text-2xl md:text-3xl mb-4 font-orbitron font-bold"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.span
              className="text-orange-500"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0 }}
            >
              IN
            </motion.span>{" "}
            <motion.span
              className="text-white"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.3 }}
            >
              GAMES
            </motion.span>{" "}
            <motion.span
              className="text-orange-400"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.6 }}
            >
              WE
            </motion.span>{" "}
            <motion.span
              className="text-orange-500"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.9 }}
            >
              TRUST
            </motion.span>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl mb-12 text-gray-300 max-w-4xl mx-auto font-exo2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            The ultimate gaming platform where trust meets innovation. Join millions of gamers in a revolutionary
            ecosystem built on blockchain technology.
          </motion.p>

          <AnimatedStats />

          {/* Enhanced buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <Link href="/auth">
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 50px rgba(255, 111, 0, 0.8)",
                }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(255, 111, 0, 0.5)",
                    "0 0 40px rgba(255, 111, 0, 0.8)",
                    "0 0 20px rgba(255, 111, 0, 0.5)",
                  ],
                }}
                transition={{
                  boxShadow: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                }}
              >
                <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-bold px-12 py-6 text-xl rounded-full shadow-2xl font-exo2 relative overflow-hidden group">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full"
                    transition={{ duration: 0.8 }}
                  />
                  <span className="flex items-center relative z-10">
                    START PLAYING
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <ArrowRight className="ml-3 w-6 h-6" />
                    </motion.div>
                  </span>
                </Button>
              </motion.div>
            </Link>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black px-12 py-6 text-xl bg-transparent rounded-full font-exo2 relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-orange-500/20 scale-x-0 group-hover:scale-x-100 origin-left"
                  transition={{ duration: 0.3 }}
                />
                <span className="flex items-center relative z-10">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <Play className="mr-3 w-6 h-6" />
                  </motion.div>
                  WATCH TRAILER
                </span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Animated scroll indicator */}
          <motion.div
            className="flex justify-center"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              animate={{
                boxShadow: [
                  "0 0 10px rgba(255, 111, 0, 0.5)",
                  "0 0 30px rgba(255, 111, 0, 0.8)",
                  "0 0 10px rgba(255, 111, 0, 0.5)",
                ],
              }}
              transition={{
                boxShadow: { duration: 2, repeat: Number.POSITIVE_INFINITY },
              }}
              className="p-2 rounded-full"
            >
              <ChevronDown className="w-8 h-8 text-orange-500" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Auto-sliding Featured Games Section
const AutoSlidingGames = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const games = [
    {
      title: "CryptoBoxers Championship",
      category: "LIVE NOW",
      description: "Battle in the ultimate blockchain boxing tournament",
      image: "/placeholder.svg?height=600&width=400&text=CryptoBoxers",
      players: "2.4K",
      icon: Trophy,
      gradient: "from-orange-600 to-red-600",
    },
    {
      title: "Social Impact Racing",
      category: "COMING SOON",
      description: "Race for charity and make a real-world difference",
      image: "/placeholder.svg?height=600&width=400&text=Racing+Game",
      releaseDate: "Dec 2024",
      icon: Zap,
      gradient: "from-orange-500 to-yellow-500",
    },
    {
      title: "Community Builder",
      category: "BETA ACCESS",
      description: "Build virtual communities that impact the real world",
      image: "/placeholder.svg?height=600&width=400&text=Community+Game",
      players: "850",
      icon: Users,
      gradient: "from-orange-400 to-pink-500",
    },
    {
      title: "Eco Warriors",
      category: "NEW RELEASE",
      description: "Fight climate change through strategic gameplay",
      image: "/placeholder.svg?height=600&width=400&text=Eco+Game",
      players: "1.2K",
      icon: Shield,
      gradient: "from-orange-600 to-green-500",
    },
    {
      title: "Token Quest",
      category: "TRENDING",
      description: "Adventure through the blockchain multiverse",
      image: "/placeholder.svg?height=600&width=400&text=Token+Quest",
      players: "3.1K",
      icon: Target,
      gradient: "from-orange-500 to-purple-500",
    },
  ]

  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % games.length)
      }, 3000)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isHovered, games.length])

  return (
    <section className="py-32 px-6 bg-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 2, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-7xl md:text-9xl font-black mb-6 font-exo2"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{
              background: "linear-gradient(90deg, #ffffff, #ff6f00, #ffffff, #ff6f00, #ffffff)",
              backgroundSize: "300% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            FEATURED GAMES
          </motion.h2>
          <motion.p
            className="text-2xl text-orange-400 font-orbitron font-bold"
            animate={{
              textShadow: [
                "0 0 10px rgba(255, 111, 0, 0.5)",
                "0 0 30px rgba(255, 111, 0, 0.8)",
                "0 0 10px rgba(255, 111, 0, 0.5)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
            }}
          >
            GAMES THAT CHANGE THE WORLD
          </motion.p>
        </motion.div>

        {/* Auto-sliding columns */}
        <div
          className="relative h-[600px] overflow-hidden rounded-3xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            className="flex h-full"
            animate={{
              x: `-${currentIndex * 100}%`,
            }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
          >
            {games.map((game, index) => (
              <motion.div
                key={index}
                className="min-w-full h-full relative group cursor-pointer"
                whileHover={{ scale: 1.02 }}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image src={game.image || "/placeholder.svg"} alt={game.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${game.gradient} opacity-30`} />
                </div>

                {/* Animated overlay effects */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/20 to-orange-500/0"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-12">
                  {/* Top section */}
                  <div className="flex justify-between items-start">
                    <motion.div
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                        <game.icon className="w-6 h-6 text-black" />
                      </div>
                      <Badge className="bg-orange-500 text-black font-bold px-4 py-2 text-sm">{game.category}</Badge>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                      className="text-right"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      {game.players && (
                        <div className="bg-black/70 rounded-lg px-4 py-2 flex items-center space-x-2">
                          <Users className="w-5 h-5 text-orange-500" />
                          <span className="text-white font-bold">{game.players}</span>
                        </div>
                      )}
                      {game.releaseDate && (
                        <div className="bg-black/70 rounded-lg px-4 py-2 flex items-center space-x-2">
                          <Clock className="w-5 h-5 text-orange-500" />
                          <span className="text-white font-bold">{game.releaseDate}</span>
                        </div>
                      )}
                    </motion.div>
                  </div>

                  {/* Bottom section */}
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <motion.h3
                      className="text-6xl md:text-7xl font-black mb-4 font-exo2 text-white"
                      animate={{
                        textShadow: [
                          "0 0 20px rgba(255, 111, 0, 0.5)",
                          "0 0 40px rgba(255, 111, 0, 0.8)",
                          "0 0 20px rgba(255, 111, 0, 0.5)",
                        ],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    >
                      {game.title}
                    </motion.h3>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl font-exo2">{game.description}</p>

                    <div className="flex space-x-4">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-8 py-4 text-lg rounded-full">
                          <Play className="mr-2 w-5 h-5" />
                          PLAY NOW
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          variant="outline"
                          className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black px-8 py-4 text-lg rounded-full bg-transparent"
                        >
                          LEARN MORE
                        </Button>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>

                {/* Hover overlay */}
                <motion.div
                  className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  whileHover={{
                    background: ["rgba(255, 111, 0, 0.1)", "rgba(255, 111, 0, 0.2)", "rgba(255, 111, 0, 0.1)"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation dots */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {games.map((_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-orange-500 w-8" : "bg-white/30"
                }`}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>

          {/* Side navigation */}
          <motion.button
            className="absolute left-8 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-black transition-all duration-300"
            onClick={() => setCurrentIndex((prev) => (prev - 1 + games.length) % games.length)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowRight className="w-6 h-6 rotate-180" />
          </motion.button>
          <motion.button
            className="absolute right-8 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-black transition-all duration-300"
            onClick={() => setCurrentIndex((prev) => (prev + 1) % games.length)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowRight className="w-6 h-6" />
          </motion.button>
        </div>
      </div>
    </section>
  )
}

// Interactive Game Categories with Sliding Panels
const InteractiveCategories = () => {
  const [activeCategory, setActiveCategory] = useState(0)
  const [isAutoSliding, setIsAutoSliding] = useState(true)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const categories = [
    {
      title: "ACTION GAMES",
      icon: Flame,
      count: "12 Games",
      description: "High-octane adventures that reward skill and strategy",
      games: ["CryptoBoxers", "Battle Royale", "Arena Masters", "Combat Zone"],
      color: "from-orange-600 to-red-500",
      bgImage: "/placeholder.svg?height=400&width=600&text=Action+Games",
    },
    {
      title: "STRATEGY GAMES",
      icon: Target,
      count: "8 Games",
      description: "Think, plan, and conquer in these mind-bending challenges",
      games: ["Empire Builder", "Resource Wars", "Tactical Command", "City Planner"],
      color: "from-orange-500 to-blue-500",
      bgImage: "/placeholder.svg?height=400&width=600&text=Strategy+Games",
    },
    {
      title: "SOCIAL IMPACT",
      icon: Heart,
      count: "15 Games",
      description: "Games that make a real difference in the world",
      games: ["Eco Warriors", "Community Builder", "Charity Champions", "Green Planet"],
      color: "from-orange-400 to-green-500",
      bgImage: "/placeholder.svg?height=400&width=600&text=Social+Games",
    },
    {
      title: "NFT COLLECTION",
      icon: Sparkles,
      count: "6 Collections",
      description: "Unique digital assets that unlock exclusive content",
      games: ["CryptoBoxers NFT", "Legendary Cards", "Rare Artifacts", "Digital Pets"],
      color: "from-orange-500 to-purple-500",
      bgImage: "/placeholder.svg?height=400&width=600&text=NFT+Games",
    },
  ]

  useEffect(() => {
    if (isAutoSliding) {
      intervalRef.current = setInterval(() => {
        setActiveCategory((prev) => (prev + 1) % categories.length)
      }, 4000)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isAutoSliding, categories.length])

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Animated grid background */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 111, 0, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 111, 0, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "100px 100px"],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-7xl md:text-9xl font-black mb-6 font-exo2"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{
              background: "linear-gradient(90deg, #ffffff, #ff6f00, #ffffff)",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            GAME CATEGORIES
          </motion.h2>
          <motion.p
            className="text-2xl text-orange-400 font-orbitron font-bold"
            animate={{
              textShadow: [
                "0 0 10px rgba(255, 111, 0, 0.5)",
                "0 0 30px rgba(255, 111, 0, 0.8)",
                "0 0 10px rgba(255, 111, 0, 0.5)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
            }}
          >
            DISCOVER YOUR PERFECT GAME
          </motion.p>
        </motion.div>

        {/* Interactive sliding panels */}
        <div
          className="relative h-[500px] rounded-3xl overflow-hidden"
          onMouseEnter={() => setIsAutoSliding(false)}
          onMouseLeave={() => setIsAutoSliding(true)}
        >
          <div className="flex h-full">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                className={`relative cursor-pointer transition-all duration-700 ease-out ${
                  index === activeCategory ? "flex-[3]" : "flex-1"
                }`}
                onClick={() => setActiveCategory(index)}
                whileHover={{ scale: index === activeCategory ? 1 : 1.02 }}
              >
                {/* Background */}
                <div className="absolute inset-0">
                  <Image
                    src={category.bgImage || "/placeholder.svg"}
                    alt={category.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-40`} />
                </div>

                {/* Animated effects */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/30 to-orange-500/0"
                  animate={{
                    x: index === activeCategory ? ["-100%", "100%"] : "0%",
                  }}
                  transition={{
                    duration: 2,
                    repeat: index === activeCategory ? Number.POSITIVE_INFINITY : 0,
                    ease: "linear",
                  }}
                />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between p-8">
                  {/* Icon and title */}
                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-4"
                      animate={{
                        scale: index === activeCategory ? [1, 1.2, 1] : 1,
                        rotate: index === activeCategory ? [0, 360] : 0,
                      }}
                      transition={{
                        scale: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                        rotate: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                      }}
                    >
                      <category.icon className="w-8 h-8 text-black" />
                    </motion.div>

                    <motion.h3
                      className={`font-black font-exo2 text-white mb-2 transition-all duration-500 ${
                        index === activeCategory ? "text-3xl" : "text-xl"
                      }`}
                      animate={{
                        textShadow:
                          index === activeCategory
                            ? [
                                "0 0 10px rgba(255, 111, 0, 0.5)",
                                "0 0 30px rgba(255, 111, 0, 0.8)",
                                "0 0 10px rgba(255, 111, 0, 0.5)",
                              ]
                            : "none",
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    >
                      {category.title}
                    </motion.h3>

                    <Badge className="bg-orange-500 text-black font-bold">{category.count}</Badge>
                  </div>

                  {/* Expanded content */}
                  <AnimatePresence>
                    {index === activeCategory && (
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                      >
                        <p className="text-gray-300 mb-6 text-lg font-exo2">{category.description}</p>

                        <div className="space-y-2 mb-6">
                          {category.games.map((game, gameIndex) => (
                            <motion.div
                              key={gameIndex}
                              className="bg-black/50 rounded-lg px-4 py-2 text-orange-400 font-medium"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: gameIndex * 0.1 }}
                            >
                              {game}
                            </motion.div>
                          ))}
                        </div>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-6 py-3 rounded-full">
                            EXPLORE CATEGORY
                          </Button>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Active indicator */}
                {index === activeCategory && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Category navigation */}
        <div className="flex justify-center mt-12 space-x-4">
          {categories.map((_, index) => (
            <motion.button
              key={index}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === activeCategory ? "bg-orange-500 w-12" : "bg-white/30"
              }`}
              onClick={() => setActiveCategory(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// Enhanced Live Streams with Auto-rotation
const EnhancedLiveStreams = () => {
  const [featuredStream, setFeaturedStream] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const streams = [
    {
      streamer: "CryptoGamer_Pro",
      title: "CryptoBoxers Championship Finals - LIVE",
      game: "CryptoBoxers",
      viewers: "12.4K",
      avatar: "/placeholder.svg?height=100&width=100&text=Avatar+1",
      thumbnail: "/placeholder.svg?height=400&width=700&text=Stream+1",
      isLive: true,
      category: "TOURNAMENT",
      duration: "2:45:30",
    },
    {
      streamer: "SocialImpact_Queen",
      title: "Building Communities in Web3 Games",
      game: "Community Builder",
      viewers: "8.7K",
      avatar: "/placeholder.svg?height=100&width=100&text=Avatar+2",
      thumbnail: "/placeholder.svg?height=400&width=700&text=Stream+2",
      isLive: true,
      category: "EDUCATIONAL",
      duration: "1:23:15",
    },
    {
      streamer: "BlockchainBeast",
      title: "Token Farming Strategies & Tips",
      game: "Token Quest",
      viewers: "15.2K",
      avatar: "/placeholder.svg?height=100&width=100&text=Avatar+3",
      thumbnail: "/placeholder.svg?height=400&width=700&text=Stream+3",
      isLive: true,
      category: "STRATEGY",
      duration: "3:12:45",
    },
  ]

  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setFeaturedStream((prev) => (prev + 1) % streams.length)
      }, 5000)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isHovered, streams.length])

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-gray-900 via-purple-900/20 to-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center space-x-4 mb-6">
            <motion.div
              className="w-6 h-6 bg-red-500 rounded-full"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.h2
              className="text-7xl md:text-9xl font-black font-exo2"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              style={{
                background: "linear-gradient(90deg, #ffffff, #a855f7, #ffffff)",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              LIVE STREAMS
            </motion.h2>
          </div>
          <motion.p
            className="text-2xl text-purple-400 font-orbitron font-bold"
            animate={{
              textShadow: [
                "0 0 10px rgba(168, 85, 247, 0.5)",
                "0 0 30px rgba(168, 85, 247, 0.8)",
                "0 0 10px rgba(168, 85, 247, 0.5)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
            }}
          >
            WATCH • LEARN • EARN
          </motion.p>
        </motion.div>

        {/* Featured stream with rotating content */}
        <div
          className="relative mb-16"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            className="relative h-[500px] rounded-3xl overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background */}
            <div className="absolute inset-0">
              <Image
                src={streams[featuredStream].thumbnail || "/placeholder.svg"}
                alt={streams[featuredStream].title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-orange-900/30" />
            </div>

            {/* Animated overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-purple-500/0"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-between p-12">
              {/* Top section */}
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-4">
                  <motion.div
                    className="w-16 h-16 rounded-full overflow-hidden border-4 border-purple-500"
                    animate={{
                      borderColor: ["#a855f7", "#f97316", "#a855f7"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  >
                    <Image
                      src={streams[featuredStream].avatar || "/placeholder.svg"}
                      alt={streams[featuredStream].streamer}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-white font-exo2">{streams[featuredStream].streamer}</h3>
                    <Badge className="bg-purple-600 text-white">{streams[featuredStream].category}</Badge>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-red-500 text-white px-4 py-2 rounded-full font-bold flex items-center space-x-2">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                    <span>LIVE</span>
                  </div>
                  <div className="bg-black/70 rounded-lg px-4 py-2 flex items-center space-x-2">
                    <Eye className="w-5 h-5 text-purple-400" />
                    <span className="text-white font-bold">{streams[featuredStream].viewers}</span>
                  </div>
                  <div className="bg-black/70 rounded-lg px-4 py-2 text-white font-bold">
                    {streams[featuredStream].duration}
                  </div>
                </div>
              </div>

              {/* Bottom section */}
              <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <motion.h2
                  className="text-5xl md:text-6xl font-black mb-4 font-exo2 text-white"
                  animate={{
                    textShadow: [
                      "0 0 20px rgba(168, 85, 247, 0.5)",
                      "0 0 40px rgba(168, 85, 247, 0.8)",
                      "0 0 20px rgba(168, 85, 247, 0.5)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                >
                  {streams[featuredStream].title}
                </motion.h2>
                <p className="text-xl text-purple-300 mb-8 font-exo2">
                  Playing {streams[featuredStream].game} • Interactive gameplay with community
                </p>

                <div className="flex space-x-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-8 py-4 text-lg rounded-full">
                      <Play className="mr-2 w-5 h-5" />
                      WATCH STREAM
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="outline"
                      className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black px-8 py-4 text-lg rounded-full bg-transparent"
                    >
                      <MessageCircle className="mr-2 w-5 h-5" />
                      JOIN CHAT
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Stream navigation */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {streams.map((_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === featuredStream ? "bg-purple-500 w-8" : "bg-white/30"
                }`}
                onClick={() => setFeaturedStream(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>

        {/* Other streams grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {streams
            .filter((_, index) => index !== featuredStream)
            .map((stream, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <Card className="bg-gray-800/50 border-gray-700 overflow-hidden group-hover:border-purple-500 transition-all duration-500 relative backdrop-blur-sm">
                  <div className="relative">
                    <Image
                      src={stream.thumbnail || "/placeholder.svg"}
                      alt={stream.title}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover"
                    />

                    {/* Live Badge */}
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                      <span>LIVE</span>
                    </div>

                    {/* Viewer Count */}
                    <div className="absolute top-4 right-4 bg-black/70 rounded-lg px-3 py-1 flex items-center space-x-2">
                      <Eye className="w-4 h-4 text-purple-400" />
                      <span className="text-white text-sm">{stream.viewers}</span>
                    </div>

                    {/* Chat Preview on Hover */}
                    <motion.div
                      className="absolute bottom-4 right-4 bg-black/80 rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ scale: 0.8 }}
                      whileHover={{ scale: 1 }}
                    >
                      <div className="flex items-center space-x-2 text-xs text-gray-300 mb-1">
                        <MessageCircle className="w-3 h-3" />
                        <span>Chat</span>
                      </div>
                      <div className="text-xs text-white space-y-1">
                        <div>User123: Amazing play! 🔥</div>
                        <div>Gamer456: How did you do that?</div>
                        <div>Pro789: GG! 💪</div>
                      </div>
                    </motion.div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <Image
                        src={stream.avatar || "/placeholder.svg"}
                        alt={stream.streamer}
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full border-2 border-purple-500"
                      />
                      <div>
                        <h4 className="text-lg font-bold text-white font-exo2">{stream.streamer}</h4>
                        <p className="text-purple-400 text-sm">{stream.game}</p>
                      </div>
                    </div>

                    <h3 className="text-white font-medium mb-4 group-hover:text-purple-400 transition-colors">
                      {stream.title}
                    </h3>

                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold transition-all duration-300">
                      <Play className="mr-2 w-4 h-4" />
                      Watch Stream
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  )
}

// Standard Footer
const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-16 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <Gamepad2 className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-exo2">PlayChange.io</h3>
                <p className="text-xs text-orange-500 font-orbitron">IN GAMES WE TRUST</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              The ultimate gaming platform where trust meets innovation. Join millions of gamers in a revolutionary
              ecosystem.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-orange-500 hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-orange-500 hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-orange-500 hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-orange-500 hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Youtube className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 font-exo2">Quick Links</h4>
            <ul className="space-y-3">
              {["Games", "News", "Store", "Support", "Community", "Tournaments"].map((link) => (
                <li key={link}>
                  <motion.a
                    href="#"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 font-exo2">Resources</h4>
            <ul className="space-y-3">
              {["Help Center", "Privacy Policy", "Terms of Service", "Cookie Policy", "Careers", "Press Kit"].map(
                (link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="text-gray-400 hover:text-orange-500 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 font-exo2">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-500" />
                <span className="text-gray-400">support@playchange.io</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-500" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-orange-500" />
                <span className="text-gray-400">San Francisco, CA</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <h5 className="text-white font-bold mb-3">Stay Updated</h5>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none"
                />
                <Button className="bg-orange-500 hover:bg-orange-600 text-black font-bold">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 PlayChange.io. All rights reserved. Built with trust and innovation.
            </p>
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm">Powered by Blockchain Technology</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-500 text-sm">All Systems Operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <EnhancedBackground />
      <Navigation />
      <HeroBanner />
      <AutoSlidingGames />
      <InteractiveCategories />
      <EnhancedLiveStreams />
      <Footer />
    </div>
  )
}
