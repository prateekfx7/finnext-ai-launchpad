const TrustedBy = () => {
  const partners = [
    { name: "Goldman Sachs", icon: "GS" },
    { name: "J.P. Morgan", icon: "JPM" },
    { name: "Morgan Stanley", icon: "MS" },
    { name: "BlackRock", icon: "BR" },
    { name: "Vanguard", icon: "VG" },
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-muted-foreground text-sm font-medium uppercase tracking-wider mb-8">
          Trusted by Leading Investors & Fintech Partners
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center group"
            >
              <div className="w-24 h-24 rounded-lg bg-card border border-border flex items-center justify-center group-hover:border-accent transition-all group-hover:shadow-lg">
                <span className="text-2xl font-bold text-muted-foreground group-hover:text-accent transition-colors">
                  {partner.icon}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
