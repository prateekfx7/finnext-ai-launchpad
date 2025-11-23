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
    <section className="py-8">
      <div className="w-full">
        <LogoCloud logos={logos} />
      </div>
    </section>
  );
};

export default TrustedBy;
