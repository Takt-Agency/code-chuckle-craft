import { ReactNode } from "react";
import { motion } from "framer-motion";
import TopBanner from "./TopBanner";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

const PageLayout = ({ children, title, subtitle }: PageLayoutProps) => (
  <div className="min-h-screen flex flex-col">
    <div className="bg-background">
      <TopBanner />
      <Navbar />
    </div>

    {/* Page Header */}
    <div className="bg-secondary py-12 md:py-20 text-center overflow-hidden">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h1
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-light italic text-foreground"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            className="mt-4 text-primary uppercase tracking-[0.2em] text-sm font-body font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {subtitle}
          </motion.p>
        )}
        <motion.div
          className="flex items-center justify-center gap-3 mt-6"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <span className="h-px w-12 bg-primary" />
          <span className="diamond w-2 h-2" />
          <span className="h-px w-12 bg-primary" />
        </motion.div>
      </div>
    </div>

    {/* Page Content */}
    <motion.main
      className="flex-1 bg-background"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      {children}
    </motion.main>

    <Footer />
  </div>
);

export default PageLayout;
