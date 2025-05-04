"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "RE-Watch",
    description:
      "A video streaming app built as my final year project with features like dynamic playback, real-time controls, and a user-focused interface.",
    image: "/assets/rewatch.jpg",
    tags: ["Kotlin", "Jetpack Compose", "FireBase", "DaggerHilt"],
    demoLink: "https://github.com/sahilkarwasra/Re-watchui",
    githubLink: "https://github.com/sahilkarwasra/Re-watchui",
  },
  {
    title: "TextNow",
    description:
      "A real-time cross-platform messaging app that supports instant individual and group chats with a clean and responsive UI.",
    image: "/assets/textnow.jpg",
    tags: ["Kotlin", "React", "Node.js", "Socket.IO", "Ktor", "Koin", "MongoDB"],
    demoLink: "https://github.com/SahilKarwasra/TextNowJetpackCompose",
    githubLink: "https://github.com/SahilKarwasra/TextNowJetpackCompose",
  },
  {
    title: "Crypto Tracker App",
    description:
      "An app for tracking real-time cryptocurrency prices, trends, and historical data with a smooth user experience.",
    image: "/assets/crypto.png",
    tags: ["Compose Multiplatform", "Koin", "Ktor", "Clean Architecture", "MVVM"],
    demoLink: "https://github.com/SahilKarwasra/CryptoTracker",
    githubLink: "https://github.com/SahilKarwasra/CryptoTracker",
  },
  {
    title: "Rythmo Music",
    description:
      "A music streaming app with offline playback, synced lyrics, and personalized recommendations through an in-app assistant.",
    image: "/assets/music.png",
    tags: ["Kotlin", "Jetpack Compose", "Ktor", "Koin", "RestApi", "MVVM"],
    demoLink: "https://github.com/SahilKarwasra/MusicPlayer",
    githubLink: "https://github.com/SahilKarwasra/MusicPlayer",
  },
  {
    title: "JWT Auth",
    description:
      "An authentication system using JWT and Google login, providing secure access and token-based session management.",
    image: "/assets/JwtAuth.webp",
    tags: ["Node.js", "Express.js", "MongoDB"],
    demoLink: "https://github.com/SahilKarwasra/Jwt_Auth",
    githubLink: "https://github.com/SahilKarwasra/Jwt_Auth",
  },
  {
    title: "Social",
    description:
      "A minimalist social media app built with Flutter, featuring photo sharing, user authentication, follow system, and secure Supabase media storage.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Flutter", "Bloc", "Firebase", "Supabase"],
    demoLink: "https://github.com/SahilKarwasra/social",
    githubLink: "https://github.com/SahilKarwasra/social",
  },
]


export default function Projects() {
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
    <section id="projects" ref={ref} className="py-16 md:py-24 relative">
      {/* Animated background elements */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="space-y-4 text-center max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          My <span className="text-primary">Projects</span>
        </h2>
        <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        <p className="text-muted-foreground">A showcase of my recent work and personal projects</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            transition={{ duration: 0.5 }}
            whileHover={{
              y: -10,
              transition: { duration: 0.3 },
            }}
          >
            <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50 flex flex-col bg-card/80 backdrop-blur-sm">
              <motion.div
                className="relative overflow-hidden h-48"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
              </motion.div>
              <CardContent className="p-6 flex-grow">
                <motion.h3
                  className="text-xl font-bold mb-2"
                  whileHover={{
                    color: "hsl(var(--primary))",
                    transition: { duration: 0.3 },
                  }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.div
                      key={tagIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 * tagIndex }}
                    >
                      <Badge variant="secondary" className="bg-primary/10 hover:bg-primary/20 text-primary">
                        {tag}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> Code
                  </a>
                </Button>
                <Button size="sm" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-12 text-center"
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/sahilkarwasra" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" /> View More on GitHub
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
