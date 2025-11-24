import { ShimmerButton } from "@/components/ui/shimmer-button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
const Hero = () => {
  return <section className="relative min-h-screen flex flex-col items-center justify-start px-6 py-20 md:py-24 bg-background overflow-hidden">
      {/* Announcement Badge */}
      <motion.aside initial={{
      opacity: 0,
      y: -20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.6,
      ease: "easeOut"
    }} className="mb-8 inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 backdrop-blur-sm max-w-full">
        <span className="text-xs text-center whitespace-nowrap text-muted-foreground">
          AI-Powered Investment Intelligence Platform
        </span>
        <a href="#new-version" className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-all active:scale-95 whitespace-nowrap" aria-label="Learn more about our platform">
          Learn more
          <ArrowRight size={12} />
        </a>
      </motion.aside>

      {/* Main Heading */}
      <motion.h1 initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.6,
      delay: 0.2,
      ease: "easeOut"
    }} className="text-4xl md:text-5xl lg:text-6xl font-medium text-center max-w-3xl px-8 md:px-12 leading-tight mb-6" style={{
      background: "linear-gradient(to bottom, hsl(var(--foreground)), hsl(var(--foreground)), hsl(var(--foreground) / 0.6))",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      letterSpacing: "-0.05em"
    }}>
        Next-Generation Investment{" "}
        <br className="hidden sm:block" />
        Intelligence Platform
      </motion.h1>

      {/* Description */}
      <motion.p initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.6,
      delay: 0.4,
      ease: "easeOut"
    }} className="text-sm md:text-base text-center max-w-2xl px-6 mb-10 text-muted-foreground">
        Get real-time personalized stock insights, AI-powered recommendations, <br className="hidden sm:block" />
        and smart portfolio analytics—all in one intelligent platform.
      </motion.p>

      {/* CTA Button */}
      <motion.div initial={{
      opacity: 0,
      scale: 0.9
    }} animate={{
      opacity: 1,
      scale: 1
    }} transition={{
      duration: 0.6,
      delay: 0.6,
      ease: "easeOut"
    }} className="flex items-center gap-4 relative z-10 mb-16">
        <ShimmerButton type="button" className="text-base" background="hsl(var(--accent))" shimmerColor="hsl(var(--accent-foreground))" aria-label="Get started with FinNext AI">
          <span className="whitespace-pre-wrap text-center font-medium leading-none tracking-tight">
            Start Free Trial
          </span>
        </ShimmerButton>
      </motion.div>

      {/* Dashboard Preview with Glow Effect */}
      <motion.div initial={{
      opacity: 0,
      y: 40
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.8,
      delay: 0.8,
      ease: "easeOut"
    }} className="w-full max-w-5xl relative pb-20">
        <div className="absolute left-1/2 w-[90%] pointer-events-none z-0" style={{
        top: "-23%",
        transform: "translateX(-50%)"
      }} aria-hidden="true">
          <img src="https://i.postimg.cc/Ss6yShGy/glows.png" alt="" className="w-full h-auto" loading="eager" />
        </div>
        
        <div className="relative z-10">
          <img alt="FinNext AI Dashboard preview showing investment analytics and portfolio metrics" className="w-full h-auto rounded-lg shadow-2xl" loading="eager" src="/lovable-uploads/f949520b-5454-4ed5-a888-240e406ae9a0.jpg" />
        </div>
      </motion.div>
    </section>;
};
export default Hero;