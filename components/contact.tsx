"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, ExternalLink } from 'lucide-react'
import { Button } from "@/components/ui/button"

import type React from "react"

import { useState } from "react"

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    // Show success message
    alert("Message sent successfully!")
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="contact" ref={ref} className="py-16 md:py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="space-y-4 text-center max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        <p className="text-muted-foreground">
          Feel free to reach out for collaborations, opportunities, or just to say hello!
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <motion.div 
          variants={itemVariants} 
          transition={{ duration: 0.5 }}
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
        >
          <Card className="border-border hover:border-primary/50 transition-all duration-300 h-full bg-card/80 backdrop-blur-sm">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="p-4 rounded-full bg-primary/10 mb-4">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground mb-4">sahilkarwasara11@gmail.com</p>
              <Button variant="outline" size="sm" asChild className="mt-auto">
                <a href="mailto:sahilkarwasara11@gmail.com">
                  <Mail className="mr-2 h-4 w-4" /> Send Email
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div 
          variants={itemVariants} 
          transition={{ duration: 0.5 }}
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
        >
          <Card className="border-border hover:border-primary/50 transition-all duration-300 h-full bg-card/80 backdrop-blur-sm">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="p-4 rounded-full bg-primary/10 mb-4">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground mb-4">+91 9812408030</p>
              <Button variant="outline" size="sm" asChild className="mt-auto">
                <a href="tel:+919812408030">
                  <Phone className="mr-2 h-4 w-4" /> Call Me
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div 
          variants={itemVariants} 
          transition={{ duration: 0.5 }}
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
        >
          <Card className="border-border hover:border-primary/50 transition-all duration-300 h-full bg-card/80 backdrop-blur-sm">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="p-4 rounded-full bg-primary/10 mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground mb-4">Chandigarh, India</p>
              <Button variant="outline" size="sm" asChild className="mt-auto">
                <a href="https://maps.google.com/?q=Chandigarh,India" target="_blank" rel="noopener noreferrer">
                  <MapPin className="mr-2 h-4 w-4" /> View on Map
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12 text-center"
      >
        <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
        <div className="flex flex-wrap justify-center gap-4">
          <motion.a
            href="https://github.com/sahilkarwasra"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="h-6 w-6 text-primary" />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/sahilkarwasra"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin className="h-6 w-6 text-primary" />
          </motion.a>
          <motion.a
            href="https://instagram.com/karwasra_sahil11"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Instagram className="h-6 w-6 text-primary" />
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-16 p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-border relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to bring your app idea to life?</h3>
          <p className="text-muted-foreground mb-8">
            I'm available for freelance projects and full-time opportunities. Let's discuss how I can help you create an
            exceptional mobile experience.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-5 w-5" /> Download Resume
            </a>
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
