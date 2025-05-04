import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Services from "@/components/services"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import BackgroundAnimation from "@/components/background-animation"

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <BackgroundAnimation />
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
