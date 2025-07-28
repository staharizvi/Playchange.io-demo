"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Play,
  Heart,
  Globe,
  Star,
  Users,
  Coins,
  Gamepad2,
  Trophy,
  Shield,
  Zap,
  Rocket,
  ChevronDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

// Enhanced animated background with particles
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

// Enhanced feature cards
const FeatureCard = ({ feature, index }: { feature: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
      }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.05,
        y: -10,
        rotateY: 5,
        transition: { duration: 0.3 },
      }}
      className="group cursor-pointer"
    >
      <Card className="bg-gray-900/50 border-gray-800 p-8 h-80 flex flex-col justify-between group-hover:border-orange-500 transition-all duration-500 relative overflow-hidden">
        {/* Card glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 opacity-0 group-hover:opacity-100"
          initial={false}
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 2,
            ease: "easeInOut",
          }}
        />

        <div>
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 bg-orange-500/20 border-2 border-orange-500/50 group-hover:bg-orange-500/30 group-hover:border-orange-500/80 transition-all duration-300"
            whileHover={{
              rotate: [0, -10, 10, 0],
              scale: 1.1,
            }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
            >
              <feature.icon className="w-10 h-10 text-orange-500 group-hover:text-orange-400 transition-colors" />
            </motion.div>
          </motion.div>

          <motion.h3
            className="text-2xl font-bold mb-4 group-hover:text-orange-500 transition-colors font-exo2"
            whileHover={{
              scale: 1.05,
              textShadow: "0 0 10px rgba(255, 111, 0, 0.8)",
            }}
          >
            {feature.title}
          </motion.h3>
          <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed font-exo2">
            {feature.description}
          </p>
        </div>

        <div className="flex justify-between items-center">
          <motion.span
            className="font-bold text-xl font-orbitron text-orange-500"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            {feature.stats}
          </motion.span>
          <motion.div whileHover={{ x: 10, scale: 1.2 }} transition={{ duration: 0.2 }}>
            <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-orange-500 transition-colors" />
          </motion.div>
        </div>
      </Card>
    </motion.div>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <EnhancedBackground />

      {/* Hero Section */}
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
                GAMING
              </motion.span>{" "}
              <motion.span
                className="text-white"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.3 }}
              >
                FOR
              </motion.span>{" "}
              <motion.span
                className="text-orange-400"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.6 }}
              >
                GOOD
              </motion.span>
            </motion.div>

            <motion.p
              className="text-xl md:text-2xl mb-12 text-gray-300 max-w-4xl mx-auto font-exo2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              PlayChange.io is reinventing gaming as a force for social change. This digital‑subscription platform
              empowers gamers and creators to co-build meaningful experiences while giving back.
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
                      JOIN THE MOVEMENT
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
                    EXPLORE PLATFORM
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

      {/* Mission Section */}
      <section className="py-32 px-6 relative">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.h2
              className="text-6xl md:text-8xl font-black mb-8 font-exo2"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
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
              OUR MISSION
            </motion.h2>
            <motion.p
              className="text-2xl text-gray-400 max-w-3xl mx-auto font-exo2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            >
              A community‑run gaming ecosystem built on blockchain and tokenized models
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Innovation",
                description: "Cutting-edge blockchain technology powering the future of gaming",
                stats: "Web3 Ready",
              },
              {
                icon: Users,
                title: "Inclusivity",
                description: "Breaking down barriers to create an accessible gaming ecosystem for all",
                stats: "Global Access",
              },
              {
                icon: Coins,
                title: "Financial Empowerment",
                description: "Earn PlayChange tokens while making a real-world impact through gaming",
                stats: "Token Rewards",
              },
            ].map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features Section */}
      <section className="py-32 px-6 relative">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.h2
              className="text-6xl md:text-8xl font-black mb-8 font-exo2"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
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
              PLATFORM FEATURES
            </motion.h2>
            <motion.p
              className="text-2xl text-gray-400 max-w-3xl mx-auto font-exo2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            >
              No gaming consoles needed—play with any standard internet device
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Gamepad2,
                title: "Accessibility First",
                description: "Play on any device with internet access. No expensive consoles required.",
                stats: "Device Agnostic",
              },
              {
                icon: Trophy,
                title: "Tournament Rewards",
                description: "Compete in tournaments and earn PlayChange tokens for your achievements.",
                stats: "Token Prizes",
              },
              {
                icon: Shield,
                title: "Freemium Model",
                description: "Start free, upgrade when ready. First members get exclusive limited subscriptions.",
                stats: "Free to Start",
              },
              {
                icon: Star,
                title: "NFT Collections",
                description: "CryptoBoxers NFTs unlock in-game bonuses while supporting social causes.",
                stats: "Round 1 Live",
              },
              {
                icon: Globe,
                title: "Global Community",
                description: "Connect with gamers, creators, and athletes from around the world.",
                stats: "Worldwide",
              },
              {
                icon: Zap,
                title: "Real Impact",
                description: "Your gameplay translates to tangible real-world social impact.",
                stats: "Social Good",
              },
            ].map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-32 px-6 relative">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-orange-600/10 to-orange-500/20"
          animate={{
            background: [
              "linear-gradient(90deg, rgba(255, 111, 0, 0.2), rgba(255, 111, 0, 0.1), rgba(255, 111, 0, 0.2))",
              "linear-gradient(90deg, rgba(255, 111, 0, 0.3), rgba(255, 111, 0, 0.15), rgba(255, 111, 0, 0.3))",
              "linear-gradient(90deg, rgba(255, 111, 0, 0.2), rgba(255, 111, 0, 0.1), rgba(255, 111, 0, 0.2))",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-6xl md:text-8xl font-black mb-8 font-exo2 text-white"
              animate={{
                textShadow: [
                  "0 0 30px rgba(255, 111, 0, 0.8)",
                  "0 0 60px rgba(255, 111, 0, 1)",
                  "0 0 30px rgba(255, 111, 0, 0.8)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              Why It <span className="text-orange-500">MATTERS</span>
            </motion.h2>

            <motion.p
              className="text-2xl text-gray-300 mb-8 max-w-4xl mx-auto font-exo2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              PlayChange democratizes gaming, removes financial entry barriers, and blends entertainment with tangible
              impact.
            </motion.p>

            <motion.p
              className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto font-exo2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Professional athletes act as ambassadors, hosting events and amplifying our mission to create positive
              change through gaming.
            </motion.p>

            <Link href="/auth">
              <motion.div
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 80px rgba(255, 111, 0, 1)",
                }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    "0 0 40px rgba(255, 111, 0, 0.6)",
                    "0 0 80px rgba(255, 111, 0, 0.9)",
                    "0 0 40px rgba(255, 111, 0, 0.6)",
                  ],
                }}
                transition={{
                  boxShadow: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                }}
              >
                <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-bold px-16 py-8 text-2xl rounded-full shadow-2xl font-exo2 relative overflow-hidden group">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full"
                    transition={{ duration: 1 }}
                  />
                  <span className="flex items-center relative z-10">
                    PLAY, CREATE, IMPACT
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        rotate: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                        scale: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                      }}
                    >
                      <Rocket className="ml-4 w-8 h-8" />
                    </motion.div>
                  </span>
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
