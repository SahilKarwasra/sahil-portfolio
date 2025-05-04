"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Server, Smartphone, PenToolIcon as Tool, Wrench, Cpu, Lock } from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code className="h-6 w-6 text-primary" />,
    skills: ["Kotlin", "Java", "Python", "Dart", "JavaScript"],
  },
  {
    title: "Mobile Development",
    icon: <Smartphone className="h-6 w-6 text-primary" />,
    skills: ["Jetpack Compose", "Flutter", "Android Studio", "Ktor Client", "Retrofit", "RESTful APIs"],
  },
  {
    title: "Backend Development",
    icon: <Server className="h-6 w-6 text-primary" />,
    skills: ["Node.js", "Express.js", "FastAPI", "Springboot", "Firebase"],
  },
  {
    title: "Databases",
    icon: <Database className="h-6 w-6 text-primary" />,
    skills: ["MySQL", "MongoDB", "RoomDB"],
  },
  {
    title: "Tools & Frameworks",
    icon: <Tool className="h-6 w-6 text-primary" />,
    skills: ["GitHub", "Postman", "Android Emulator", "VS Code"],
  },
  {
    title: "Specialized Skills",
    icon: <Wrench className="h-6 w-6 text-primary" />,
    skills: ["Real-time data integration", "Authentication systems", "Web Scrapping"],
  },
]

export default function Skills() {
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
    <section id="skills" ref={ref} className="py-16 md:py-24 relative">
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
          My <span className="text-primary">Skills</span>
        </h2>
        <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        <p className="text-muted-foreground">
          A comprehensive set of technical skills I've developed throughout my career
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <Card className="h-full overflow-hidden border-border hover:border-primary/50 transition-colors group bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <motion.div
                    className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, 0, -5, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      delay: index * 0.5,
                    }}
                  >
                    {category.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.li
                      key={skillIndex}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ duration: 0.3, delay: 0.5 + skillIndex * 0.1 }}
                    >
                      <motion.div
                        className="h-1.5 w-1.5 rounded-full bg-primary mr-2"
                        animate={{
                          scale: [1, 1.5, 1],
                          backgroundColor: ["hsl(142, 76%, 36%)", "hsl(142, 76%, 50%)", "hsl(142, 76%, 36%)"],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "reverse",
                          delay: skillIndex * 0.2,
                        }}
                      ></motion.div>
                      <span>{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-16 text-center"
      >
        <h3 className="text-2xl font-bold mb-6">Technical Proficiency</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <motion.div
            className="flex flex-col items-center p-4 rounded-lg bg-card/80 backdrop-blur-sm border border-border hover:border-primary/50 transition-colors"
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <Smartphone className="h-10 w-10 text-primary mb-2" />
            </motion.div>
            <h4 className="font-medium">Mobile Development</h4>
            <p className="text-sm text-muted-foreground text-center mt-1">Native & Cross-platform</p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center p-4 rounded-lg bg-card/80 backdrop-blur-sm border border-border hover:border-primary/50 transition-colors"
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: 0.5,
              }}
            >
              <Server className="h-10 w-10 text-primary mb-2" />
            </motion.div>
            <h4 className="font-medium">Backend Systems</h4>
            <p className="text-sm text-muted-foreground text-center mt-1">APIs & Databases</p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center p-4 rounded-lg bg-card/80 backdrop-blur-sm border border-border hover:border-primary/50 transition-colors"
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: 1,
              }}
            >
              <Cpu className="h-10 w-10 text-primary mb-2" />
            </motion.div>
            <h4 className="font-medium">Performance</h4>
            <p className="text-sm text-muted-foreground text-center mt-1">Optimization & Speed</p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center p-4 rounded-lg bg-card/80 backdrop-blur-sm border border-border hover:border-primary/50 transition-colors"
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: 1.5,
              }}
            >
              <Lock className="h-10 w-10 text-primary mb-2" />
            </motion.div>
            <h4 className="font-medium">Security</h4>
            <p className="text-sm text-muted-foreground text-center mt-1">Authentication & Data Protection</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
