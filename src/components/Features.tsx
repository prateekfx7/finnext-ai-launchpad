import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, MessageSquare, BarChart3, Sparkles, TrendingUp, Shield } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Stock Recommendations",
      description: "Advanced machine learning algorithms analyze market trends and provide personalized investment recommendations tailored to your risk profile.",
      color: "text-accent",
    },
    {
      icon: MessageSquare,
      title: "Conversational AI Chatbot",
      description: "Ask questions in natural language and get instant insights about stocks, market conditions, and portfolio performance.",
      color: "text-success",
    },
    {
      icon: BarChart3,
      title: "Smart Portfolio Analytics",
      description: "Real-time portfolio tracking with comprehensive analytics, risk assessment, and performance metrics to optimize your investments.",
      color: "text-accent",
    },
    {
      icon: Sparkles,
      title: "Real-Time Market Insights",
      description: "Stay ahead with live market data, news sentiment analysis, and predictive analytics powered by cutting-edge AI technology.",
      color: "text-success",
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Leverage historical data and machine learning models to forecast potential market movements and investment opportunities.",
      color: "text-accent",
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Automated risk assessment and portfolio rebalancing suggestions to protect your investments and maximize returns.",
      color: "text-success",
    },
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Powerful Features for{" "}
            <span className="bg-gradient-to-r from-accent to-success bg-clip-text text-transparent">
              Smart Investing
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to make informed investment decisions, powered by artificial intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border bg-card"
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
