"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Smartphone, Code, Server, Database, Layers, RefreshCw, Shield, Zap } from "lucide-react"

const services = [
  {
    title: "Mobile App Development",
    description: "Building native and cross-platform mobile applications with Kotlin, Java, Flutter, and React Native.",
    icon: <Smartphone className="h-10 w-10 text-primary" />,
  },
  {
    title: "Responsive UI Design",
    description: "Creating beautiful, intuitive, and responsive user interfaces that work across all screen sizes.",
    icon: <Layers className="h-10 w-10 text-primary" />,
  },
  {
    title: "Backend Integration",
    description: "Connecting mobile applications to backend services, APIs, and databases for seamless data flow.",
    icon: <Server className="h-10 w-10 text-primary" />,
  },
  {
    title: "Database Design",
    description: "Designing efficient database structures for optimal data storage, retrieval, and management.",
    icon: <Database className="h-10 w-10 text-primary" />,
  },
  {
    title: "API Development",
    description: "Building robust RESTful APIs and GraphQL endpoints for mobile and web applications.",
    icon: <Code className="h-10 w-10 text-primary" />,
  },
  {
    title: "App Maintenance & Updates",
    description: "Providing ongoing support, maintenance, and feature updates for existing applications.",
    icon: <RefreshCw className="h-10 w-10 text-primary" />,
  },
  {
    title: "Authentication Systems",
    description: "Implementing secure authentication and authorization systems for user management.",
    icon: <Shield className="h-10 w-10 text-primary" />,
  },
  {
    title: "Performance Optimization",
    description: "Optimizing application performance for speed, efficiency, and battery consumption.",
    icon: <Zap className="h-10 w-10 text-primary" />,
  },
]

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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
    <section id="services" ref={ref} className="py-16 md:py-24 relative">
      {/* Animated background elements */}
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="space-y-4 text-center max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          My <span className="text-primary">Services</span>
        </h2>
        <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        <p className="text-muted-foreground">Professional services I offer to help bring your ideas to life</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            transition={{ duration: 0.5 }}
            whileHover={{
              y: -10,
              transition: { duration: 0.3 },
            }}
          >
            <Card className="h-full border-border hover:border-primary/50 transition-all duration-300 hover:shadow-md group bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <motion.div
                  className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors mb-4"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    delay: index * 0.3,
                  }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
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
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="#contact">Get in Touch</a>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
