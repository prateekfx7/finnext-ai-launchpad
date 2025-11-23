import { LogoCloud } from "@/components/ui/logo-cloud-3";
import { motion } from "framer-motion";

const TrustedBy = () => {
  const logos = [
    {
      src: "https://svgl.app/library/nvidia-wordmark-light.svg",
      alt: "Nvidia",
    },
    {
      src: "https://svgl.app/library/supabase_wordmark_light.svg",
      alt: "Supabase",
    },
    {
      src: "https://svgl.app/library/openai_wordmark_light.svg",
      alt: "OpenAI",
    },
    {
      src: "https://svgl.app/library/turso-wordmark-light.svg",
      alt: "Turso",
    },
    {
      src: "https://svgl.app/library/vercel_wordmark.svg",
      alt: "Vercel",
    },
    {
      src: "https://svgl.app/library/github_wordmark_light.svg",
      alt: "GitHub",
    },
    {
      src: "https://svgl.app/library/claude-ai-wordmark-icon_light.svg",
      alt: "Claude AI",
    },
    {
      src: "https://svgl.app/library/clerk-wordmark-light.svg",
      alt: "Clerk",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative py-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[60vh] w-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,hsl(var(--foreground)/.1),transparent_50%)] blur-[30px]"
      />
      <div className="container mx-auto max-w-3xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-5 text-center text-xl font-medium tracking-tight text-foreground md:text-3xl"
        >
          <span className="text-muted-foreground">Trusted by experts.</span>
          <br />
          <span className="font-semibold">Used by the leaders.</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto my-5 h-px max-w-sm bg-border [mask-image:linear-gradient(to_right,transparent,black,transparent)]"
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <LogoCloud logos={logos} />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-5 h-px bg-border [mask-image:linear-gradient(to_right,transparent,black,transparent)]"
        />
      </div>
    </motion.section>
  );
};

export default TrustedBy;
