import { cn } from "@/lib/utils";
import { LogoCloud } from "@/components/ui/logo-cloud-4";

const TrustedBy = () => {
  const logos = [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Goldman_Sachs.svg",
      alt: "Goldman Sachs",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/4/49/BlackRock_wordmark.svg",
      alt: "BlackRock",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Morgan_Stanley_Logo_1.svg",
      alt: "Morgan Stanley",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/2/24/JPMorgan_Chase_logo.svg",
      alt: "J.P. Morgan",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Vanguard.svg",
      alt: "Vanguard",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg",
      alt: "Deloitte",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/5/5e/KPMG_logo.svg",
      alt: "KPMG",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Bank_of_America_logo.svg",
      alt: "Bank of America",
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
            Trusted by
          </span>
          <span className="font-black text-2xl text-primary tracking-tight md:text-3xl">
            Leading Financial Institutions
          </span>
        </h2>

        <LogoCloud logos={logos} />
      </div>
    </section>
  );
};

export default TrustedBy;
