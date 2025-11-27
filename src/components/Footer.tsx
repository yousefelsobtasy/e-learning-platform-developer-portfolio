import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary/20">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-center items-center gap-4"
        >
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Yousef El-sobtasy. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
