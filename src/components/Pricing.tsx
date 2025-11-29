import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for getting started with AI-powered investing",
      features: [
        "Basic AI stock recommendations",
        "Up to 10 portfolio holdings",
        "Daily market insights",
        "Community support",
        "Mobile app access",
      ],
      cta: "Start Free",
      popular: false,
    },
    {
      name: "Pro",
      price: "$29",
      description: "Advanced features for serious investors",
      features: [
        "Everything in Free, plus:",
        "Unlimited AI recommendations",
        "Unlimited portfolio tracking",
        "Real-time alerts & notifications",
        "Advanced analytics & insights",
        "Priority support",
        "API access",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for institutions and teams",
      features: [
        "Everything in Pro, plus:",
        "Custom AI models",
        "Dedicated account manager",
        "White-label options",
        "Advanced security & compliance",
        "Custom integrations",
        "SLA guarantee",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      id="pricing"
      className="py-24 bg-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Simple,{" "}
            <span className="bg-gradient-to-r from-accent to-success bg-clip-text text-transparent">
              Transparent Pricing
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Start free and scale as you grow. All plans include a 14-day free trial.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
            >
              <Card
              key={index}
              className={`relative ${
                plan.popular
                  ? "border-2 border-accent shadow-xl scale-105"
                  : "border-border"
              } transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-2`}
            >
              {plan.popular && (
                <motion.div 
                  className="absolute -top-4 left-1/2 -translate-x-1/2"
                  animate={{ 
                    y: [0, -3, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <span className="bg-gradient-to-r from-accent to-success text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </motion.div>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                  {plan.price !== "Custom" && (
                    <span className="text-muted-foreground">/month</span>
                  )}
                </div>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check
                        className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
                          plan.popular ? "text-accent" : "text-success"
                        }`}
                      />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.popular ? "hero" : "outline"}
                  className="w-full transition-all duration-300 hover:scale-105 active:scale-95"
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Pricing;
