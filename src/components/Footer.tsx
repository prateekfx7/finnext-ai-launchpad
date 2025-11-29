import { Footer as FooterComponent } from "@/components/ui/footer-section";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <FooterComponent />
    </motion.div>
  );
};

export default Footer;
