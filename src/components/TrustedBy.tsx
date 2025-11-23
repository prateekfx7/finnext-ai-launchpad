import { LogoCloud } from "@/components/ui/logo-cloud-3";

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
    <section className="relative py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[60vh] w-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,hsl(var(--foreground)/.1),transparent_50%)] blur-[30px]"
      />
      <div className="container mx-auto max-w-3xl px-6">
        <h2 className="mb-5 text-center text-xl font-medium tracking-tight text-foreground md:text-3xl">
          <span className="text-muted-foreground">Trusted by experts.</span>
          <br />
          <span className="font-semibold">Used by the leaders.</span>
        </h2>
        <div className="mx-auto my-5 h-px max-w-sm bg-border [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
        
        <LogoCloud logos={logos} />
        
        <div className="mt-5 h-px bg-border [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
      </div>
    </section>
  );
};

export default TrustedBy;
