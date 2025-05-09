"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" ref={ref} className="py-16 md:py-24 relative">
      {/* Animated background elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      
      <motion.div
        variants={variants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.6 }}
        className="space-y-4 text-center max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <motion.div 
            className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-primary/20 bg-card/80 backdrop-blur-sm"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="/assets/aboutme.webp"
              alt="Sahil Karwasra"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
          </motion.div>
          
          <motion.div 
            className="absolute -z-10 -bottom-4 -right-4 w-full h-full border-2 border-primary rounded-2xl"
            animate={{ 
              borderColor: ['hsl(142, 76%, 36%)', 'hsl(142, 76%, 50%)', 'hsl(142, 76%, 36%)'],
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          ></motion.div>
          
          {/* Floating elements */}
          <motion.div 
            className="absolute -top-6 -left-6 w-12 h-12 bg-primary/20 rounded-full"
            animate={{ 
              y: [0, -10, 0],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          ></motion.div>
          <motion.div 
            className="absolute -bottom-6 -right-6 w-12 h-12 bg-primary/20 rounded-full"
            animate={{ 
              y: [0, 10, 0],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1
            }}
          ></motion.div>
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-6"
        >
          <motion.h3 
            className="text-2xl font-bold"
            whileInView={{ 
              color: ['hsl(142, 76%, 36%)', 'hsl(142, 76%, 50%)', 'hsl(142, 76%, 36%)'],
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            Mobile App Developer
          </motion.h3>
          <p className="text-muted-foreground">
            I'm Sahil Karwasra, a passionate Mobile App Developer with expertise in creating beautiful, functional, and
            user-friendly mobile applications. With a strong foundation in Kotlin, Flutter, and various backend
            technologies, I bring ideas to life through clean code and intuitive design.
          </p>
          <p className="text-muted-foreground">
            My approach combines technical excellence with creative problem-solving to deliver applications that not
            only meet but exceed client expectations. I'm constantly learning and adapting to new technologies to stay
            at the forefront of mobile development.
          </p>
          <p className="text-muted-foreground">
            When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and sharing
            my knowledge with the developer community.
          </p>

          <motion.div 
            className="pt-4 grid grid-cols-2 gap-4"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                }
              }
            }}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="p-3 rounded-lg bg-card/80 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300"
            >
              <h4 className="font-medium text-primary">Location</h4>
              <p className="text-muted-foreground">Chandigarh, India</p>
            </motion.div>
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="p-3 rounded-lg bg-card/80 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300"
            >
              <h4 className="font-medium text-primary">Email</h4>
              <p className="text-muted-foreground">sahilkarwasra11@gmail.com</p>
            </motion.div>
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="p-3 rounded-lg bg-card/80 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300"
            >
              <h4 className="font-medium text-primary">Phone</h4>
              <p className="text-muted-foreground">+91 9812408030</p>
            </motion.div>
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="p-3 rounded-lg bg-card/80 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300"
            >
              <h4 className="font-medium text-primary">Freelance</h4>
              <p className="text-primary font-medium">Available</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
