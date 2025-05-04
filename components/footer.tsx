"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Instagram, Heart } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-0"
          >
            <Link href="#home" className="text-xl font-bold tracking-tight">
              <span className="text-primary">Sahil</span> Karwasra
            </Link>
            <p className="text-muted-foreground mt-2 text-sm">
              Mobile App Developer crafting beautiful digital experiences
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center md:items-end"
          >
            <div className="flex space-x-4 mb-4">
              <motion.a
                href="https://github.com/sahilkarwasra"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                aria-label="GitHub"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="h-5 w-5 text-primary" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/sahilkarwasra"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="h-5 w-5 text-primary" />
              </motion.a>
              <motion.a
                href="https://instagram.com/sahilkarwasra"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                aria-label="Instagram"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="h-5 w-5 text-primary" />
              </motion.a>
            </div>
            <motion.p
              className="text-sm text-muted-foreground flex items-center"
              animate={{
                color: ["hsl(var(--muted-foreground))", "hsl(var(--primary) / 0.8)", "hsl(var(--muted-foreground))"],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              Made with{" "}
              <motion.span
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, 0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                <Heart className="h-3 w-3 text-red-500 mx-1" />
              </motion.span>{" "}
              by Sahil Karwasra © {new Date().getFullYear()}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
