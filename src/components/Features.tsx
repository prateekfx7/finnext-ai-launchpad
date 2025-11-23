import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { BentoGridShowcase } from "@/components/ui/bento-product-features";
import {
  Settings2,
  Command,
  Plus,
  TrendingUp,
  Brain,
  Shield,
  Sparkles,
  BarChart3,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

const IntegrationCard = () => (
  <Card className="flex h-full flex-col">
    <CardHeader>
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
        <Brain className="h-6 w-6 text-accent" />
      </div>
      <CardTitle>AI-Powered Analysis</CardTitle>
      <CardDescription>
        Leverage advanced machine learning algorithms to analyze market trends, predict movements, and get personalized investment recommendations tailored to your risk profile.
      </CardDescription>
    </CardHeader>
    <CardFooter className="mt-auto flex items-center justify-between">
      <Button variant="outline" size="sm">
        <Settings2 className="mr-2 h-4 w-4" />
        Configure
      </Button>
      <Switch
        aria-label="Toggle AI analysis"
      />
    </CardFooter>
  </Card>
);

const TrackersCard = () => (
  <Card className="h-full">
    <CardContent className="flex h-full flex-col justify-between p-6">
      <div>
        <CardTitle className="text-base font-medium">
          Portfolio Tracking
        </CardTitle>
        <CardDescription>Real-time monitoring across all assets</CardDescription>
      </div>
      <div className="flex -space-x-2 overflow-hidden">
        <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent/20 ring-2 ring-background">
          <TrendingUp className="h-4 w-4 text-accent" />
        </div>
        <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-success/20 ring-2 ring-background">
          <BarChart3 className="h-4 w-4 text-success" />
        </div>
        <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 ring-2 ring-background">
          <Sparkles className="h-4 w-4 text-primary" />
        </div>
      </div>
    </CardContent>
  </Card>
);

const FocusCard = () => (
  <Card className="h-full">
    <CardContent className="flex h-full flex-col justify-between p-6">
      <div className="flex items-start justify-between">
        <div>
          <CardTitle className="text-base font-medium">Performance</CardTitle>
          <CardDescription>YTD Returns</CardDescription>
        </div>
        <Badge variant="outline" className="border-success/30 text-success">
          Growth
        </Badge>
      </div>
      <div>
        <span className="text-6xl font-bold">+24%</span>
      </div>
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>Annual target: 15%</span>
        <span>Beating market</span>
      </div>
    </CardContent>
  </Card>
);

const StatisticCard = () => (
  <Card className="relative h-full w-full overflow-hidden">
    {/* Dotted background */}
    <div
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage: "radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)",
        backgroundSize: "16px 16px",
      }}
    />
    <CardContent className="relative z-10 flex h-full flex-col items-center justify-center p-6">
      <Zap className="h-12 w-12 text-accent mb-2" />
      <span className="text-6xl font-bold text-foreground/90">AI</span>
    </CardContent>
  </Card>
);

const ProductivityCard = () => (
  <Card className="h-full">
    <CardContent className="flex h-full flex-col justify-end p-6">
      <Shield className="h-8 w-8 text-success mb-3" />
      <CardTitle className="text-base font-medium">
        Risk Management
      </CardTitle>
      <CardDescription>
        Automated portfolio rebalancing and risk assessment to protect your investments.
      </CardDescription>
    </CardContent>
  </Card>
);

const ShortcutsCard = () => (
  <Card className="h-full">
    <CardContent className="flex h-full flex-wrap items-center justify-between gap-4 p-6">
      <div>
        <CardTitle className="text-base font-medium">Smart Insights</CardTitle>
        <CardDescription>
          Get instant market analysis and actionable investment advice powered by AI.
        </CardDescription>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-md border bg-background font-mono text-xs font-medium text-muted-foreground">
          <Command className="h-3 w-3" />
        </div>
        <Plus className="h-3 w-3 text-muted-foreground" />
        <div className="flex h-7 w-7 items-center justify-center rounded-md border bg-background font-mono text-xs font-medium text-muted-foreground">
          K
        </div>
      </div>
    </CardContent>
  </Card>
);

const Features = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      id="features"
      className="py-24 bg-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Powerful Features for{" "}
            <span className="bg-gradient-to-r from-accent to-success bg-clip-text text-transparent">
              Smart Investing
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to make informed investment decisions, powered by artificial intelligence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <BentoGridShowcase
            integration={<IntegrationCard />}
            trackers={<TrackersCard />}
            statistic={<StatisticCard />}
            focus={<FocusCard />}
            productivity={<ProductivityCard />}
            shortcuts={<ShortcutsCard />}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Features;
