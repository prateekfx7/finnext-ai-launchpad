import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-start px-6 py-20 md:py-24 bg-background"
      style={{
        animation: "fadeIn 0.6s ease-out"
      }}
    >
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Announcement Badge */}
      <aside className="mb-8 inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 backdrop-blur-sm max-w-full">
        <span className="text-xs text-center whitespace-nowrap text-muted-foreground">
          AI-Powered Investment Intelligence Platform
        </span>
        <a
          href="#new-version"
          className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-all active:scale-95 whitespace-nowrap"
          aria-label="Learn more about our platform"
        >
          Learn more
          <ArrowRight size={12} />
        </a>
      </aside>

      {/* Main Heading */}
      <h1
        className="text-4xl md:text-5xl lg:text-6xl font-medium text-center max-w-3xl px-6 leading-tight mb-6"
        style={{
          background: "linear-gradient(to bottom, hsl(var(--foreground)), hsl(var(--foreground)), hsl(var(--foreground) / 0.6))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          letterSpacing: "-0.05em"
        }}
      >
        Next-Generation Investment{" "}
        <br className="hidden sm:block" />
        Intelligence Platform
      </h1>

      {/* Description */}
      <p className="text-sm md:text-base text-center max-w-2xl px-6 mb-10 text-muted-foreground">
        Get real-time personalized stock insights, AI-powered recommendations, <br className="hidden sm:block" />
        and smart portfolio analytics—all in one intelligent platform.
      </p>

      {/* CTA Button */}
      <div className="flex items-center gap-4 relative z-10 mb-16">
        <Button
          type="button"
          variant="hero"
          size="lg"
          className="rounded-lg flex items-center justify-center"
          aria-label="Get started with FinNext AI"
        >
          Start Free Trial
        </Button>
      </div>

      {/* Dashboard Preview with Glow Effect */}
      <div className="w-full max-w-5xl relative pb-20">
        <div
          className="absolute left-1/2 w-[90%] pointer-events-none z-0"
          style={{
            top: "-23%",
            transform: "translateX(-50%)"
          }}
          aria-hidden="true"
        >
          <img
            src="https://i.postimg.cc/Ss6yShGy/glows.png"
            alt=""
            className="w-full h-auto"
            loading="eager"
          />
        </div>
        
        <div className="relative z-10">
          <img
            src="https://i.postimg.cc/SKcdVTr1/Dashboard2.png"
            alt="FinNext AI Dashboard preview showing investment analytics and portfolio metrics"
            className="w-full h-auto rounded-lg shadow-2xl"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
