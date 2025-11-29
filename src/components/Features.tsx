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
  <motion.div
    whileHover={{ y: -5, boxShadow: "0 10px 30px -10px hsl(var(--accent) / 0.3)" }}
    transition={{ duration: 0.3 }}
  >
    <Card className="flex h-full flex-col">
      <CardHeader>
        <motion.div 
          className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10"
          animate={{ 
            rotate: [0, 5, -5, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Brain className="h-6 w-6 text-accent" />
        </motion.div>
        <CardTitle>AI-Powered Analysis</CardTitle>
        <CardDescription>
          Leverage advanced machine learning algorithms to analyze market trends, predict movements, and get personalized investment recommendations tailored to your risk profile.
        </CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto flex items-center justify-between">
        <Button 
          variant="outline" 
          size="sm"
          className="transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <Settings2 className="mr-2 h-4 w-4" />
          Configure
        </Button>
        <Switch
          aria-label="Toggle AI analysis"
          className="data-[state=checked]:bg-accent"
        />
      </CardFooter>
    </Card>
  </motion.div>
);

const TrackersCard = () => (
  <motion.div
    whileHover={{ y: -5, boxShadow: "0 10px 30px -10px hsl(var(--primary) / 0.3)" }}
    transition={{ duration: 0.3 }}
  >
    <Card className="h-full">
      <CardContent className="flex h-full flex-col justify-between p-6">
        <div>
          <CardTitle className="text-base font-medium">
            Portfolio Tracking
          </CardTitle>
          <CardDescription>Real-time monitoring across all assets</CardDescription>
        </div>
        <div className="flex -space-x-2 overflow-hidden group">
          <motion.div 
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent/20 ring-2 ring-background transition-all duration-300 hover:scale-125 hover:z-10"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0 }}
          >
            <TrendingUp className="h-4 w-4 text-accent" />
          </motion.div>
          <motion.div 
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-success/20 ring-2 ring-background transition-all duration-300 hover:scale-125 hover:z-10"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          >
            <BarChart3 className="h-4 w-4 text-success" />
          </motion.div>
          <motion.div 
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 ring-2 ring-background transition-all duration-300 hover:scale-125 hover:z-10"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
          >
            <Sparkles className="h-4 w-4 text-primary" />
          </motion.div>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

const FocusCard = () => (
  <motion.div
    whileHover={{ y: -5, boxShadow: "0 10px 30px -10px hsl(var(--success) / 0.3)" }}
    transition={{ duration: 0.3 }}
  >
    <Card className="h-full">
      <CardContent className="flex h-full flex-col justify-between p-6">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-base font-medium">Performance</CardTitle>
            <CardDescription>YTD Returns</CardDescription>
          </div>
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Badge variant="outline" className="border-success/30 text-success">
              Growth
            </Badge>
          </motion.div>
        </div>
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <span className="text-6xl font-bold bg-gradient-to-r from-success to-accent bg-clip-text text-transparent">
            +24%
          </span>
        </motion.div>
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>Annual target: 15%</span>
          <span>Beating market</span>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

const StatisticCard = () => (
  <motion.div
    whileHover={{ y: -5, boxShadow: "0 10px 30px -10px hsl(var(--accent) / 0.3)" }}
    transition={{ duration: 0.3 }}
  >
    <Card className="relative h-full w-full overflow-hidden">
      {/* Dotted background */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
        animate={{ 
          backgroundPosition: ["0px 0px", "16px 16px"],
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <CardContent className="relative z-10 flex h-full flex-col items-center justify-center p-6">
        <motion.div
          animate={{ 
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Zap className="h-12 w-12 text-accent mb-2" />
        </motion.div>
        <motion.span 
          className="text-6xl font-bold text-foreground/90"
          animate={{ 
            scale: [1, 1.05, 1],
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          AI
        </motion.span>
      </CardContent>
    </Card>
  </motion.div>
);

const ProductivityCard = () => (
  <motion.div
    whileHover={{ y: -5, boxShadow: "0 10px 30px -10px hsl(var(--success) / 0.3)" }}
    transition={{ duration: 0.3 }}
  >
    <Card className="h-full">
      <CardContent className="flex h-full flex-col justify-end p-6">
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, -5, 5, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Shield className="h-8 w-8 text-success mb-3" />
        </motion.div>
        <CardTitle className="text-base font-medium">
          Risk Management
        </CardTitle>
        <CardDescription>
          Automated portfolio rebalancing and risk assessment to protect your investments.
        </CardDescription>
      </CardContent>
    </Card>
  </motion.div>
);

const ShortcutsCard = () => (
  <motion.div
    whileHover={{ y: -5, boxShadow: "0 10px 30px -10px hsl(var(--primary) / 0.3)" }}
    transition={{ duration: 0.3 }}
  >
    <Card className="h-full">
      <CardContent className="flex h-full flex-wrap items-center justify-between gap-4 p-6">
        <div>
          <CardTitle className="text-base font-medium">Smart Insights</CardTitle>
          <CardDescription>
            Get instant market analysis and actionable investment advice powered by AI.
          </CardDescription>
        </div>
        <motion.div 
          className="flex items-center gap-2"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div 
            className="flex h-7 w-7 items-center justify-center rounded-md border bg-background font-mono text-xs font-medium text-muted-foreground transition-all hover:scale-110 hover:border-accent"
            whileHover={{ y: -2 }}
          >
            <Command className="h-3 w-3" />
          </motion.div>
          <Plus className="h-3 w-3 text-muted-foreground" />
          <motion.div 
            className="flex h-7 w-7 items-center justify-center rounded-md border bg-background font-mono text-xs font-medium text-muted-foreground transition-all hover:scale-110 hover:border-accent"
            whileHover={{ y: -2 }}
          >
            K
          </motion.div>
        </motion.div>
      </CardContent>
    </Card>
  </motion.div>
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
