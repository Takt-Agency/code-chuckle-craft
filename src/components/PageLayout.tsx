import { ReactNode } from "react";
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
    <div className="bg-secondary py-12 md:py-20 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light italic text-foreground">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-primary uppercase tracking-[0.2em] text-sm font-body font-bold">
            {subtitle}
          </p>
        )}
        <div className="flex items-center justify-center gap-3 mt-6">
          <span className="h-px w-12 bg-primary" />
          <span className="diamond w-2 h-2" />
          <span className="h-px w-12 bg-primary" />
        </div>
      </div>
    </div>

    {/* Page Content */}
    <main className="flex-1 bg-background">
      {children}
    </main>

    <Footer />
  </div>
);

export default PageLayout;
