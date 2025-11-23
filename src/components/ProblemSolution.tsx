import { AlertCircle, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const ProblemSolution = () => {
  const problems = [
    "Overwhelming market data and information overload",
    "Lack of personalized investment guidance",
    "Time-consuming research and analysis",
    "Difficulty tracking portfolio performance",
  ];

  const solutions = [
    "AI-powered insights distilled into actionable recommendations",
    "Tailored strategies based on your goals and risk tolerance",
    "Instant analysis with conversational AI assistance",
    "Real-time analytics dashboard with comprehensive metrics",
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      id="solutions"
      className="py-24 bg-secondary/20"
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
            The Problem We{" "}
            <span className="bg-gradient-to-r from-accent to-success bg-clip-text text-transparent">
              Solve
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Traditional investment platforms leave you drowning in data. We turn complexity into clarity.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                <AlertCircle className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Traditional Challenges</h3>
            </div>
            {problems.map((problem, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 rounded-lg bg-card border border-border hover:border-destructive/30 transition-colors"
              >
                <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">{problem}</p>
              </div>
            ))}
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                <CheckCircle2 className="h-6 w-6 text-success" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Our AI-Powered Solutions</h3>
            </div>
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 rounded-lg bg-card border border-border hover:border-success/30 transition-colors hover:shadow-lg"
              >
                <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                <p className="text-foreground">{solution}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProblemSolution;
