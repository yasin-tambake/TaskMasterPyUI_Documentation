
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal, GitBranch, RefreshCw } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Python-based <span className="gradient-text">Open-Source</span> Automation Framework
            </h1>
            <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
              An extensible, CLI-first, event-driven automation engine focused on data operations for data scientists
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 min-[400px]:items-center justify-center">
            <Button size="lg" className="flex items-center gap-1">
              Get Started <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              View on GitHub
            </Button>
          </div>
          <div className="flex items-center justify-center gap-8 pt-8">
            <div className="flex items-center gap-2">
              <Terminal className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">CLI-First</span>
            </div>
            <div className="flex items-center gap-2">
              <GitBranch className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">YAML/JSON Configs</span>
            </div>
            <div className="flex items-center gap-2">
              <RefreshCw className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Event-Driven</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
