import { cn } from "@/lib/utils";
import { LogoCloud } from "@/components/ui/logo-cloud-4";

const TrustedBy = () => {
  const logos = [
    {
      src: "https://svgl.app/library/nvidia-wordmark-light.svg",
      alt: "Nvidia Logo",
    },
    {
      src: "https://svgl.app/library/supabase_wordmark_light.svg",
      alt: "Supabase Logo",
    },
    {
      src: "https://svgl.app/library/openai_wordmark_light.svg",
      alt: "OpenAI Logo",
    },
    {
      src: "https://svgl.app/library/turso-wordmark-light.svg",
      alt: "Turso Logo",
    },
    {
      src: "https://svgl.app/library/vercel_wordmark.svg",
      alt: "Vercel Logo",
    },
    {
      src: "https://svgl.app/library/github_wordmark_light.svg",
      alt: "GitHub Logo",
    },
    {
      src: "https://svgl.app/library/claude-ai-wordmark-icon_light.svg",
      alt: "Claude AI Logo",
    },
    {
      src: "https://svgl.app/library/clerk-wordmark-light.svg",
      alt: "Clerk Logo",
    },
  ];

  return (
    <section className="relative py-16">
      <div
        aria-hidden="true"
        className={cn(
          "-top-1/2 -translate-x-1/2 pointer-events-none absolute left-1/2 h-[120vmin] w-[120vmin] rounded-b-full",
          "bg-[radial-gradient(ellipse_at_center,hsl(var(--foreground)/.1),transparent_50%)]",
          "blur-[30px]"
        )}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="mb-8 text-center">
          <span className="block font-medium text-2xl text-muted-foreground">
            Already used by
          </span>
          <span className="font-black text-2xl text-primary tracking-tight md:text-3xl">
            Best in the Game
          </span>
        </h2>

        <LogoCloud logos={logos} />
      </div>
    </section>
  );
};

export default TrustedBy;
