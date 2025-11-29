import { CTA as CTAComponent } from "@/components/ui/call-to-action";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <motion.div 
      id="cta"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <CTAComponent />
    </motion.div>
  );
};

export default CTA;
