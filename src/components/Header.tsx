
import React from 'react';
import { Button } from "@/components/ui/button";
import { Logo } from "@/assets/logo";
import { Github } from "lucide-react";

const Header = () => {
  return (
    <header className="py-4 border-b bg-background/90 backdrop-blur-sm sticky top-0 z-10">
      <div className="container flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Features</a>
          <a href="#examples" className="text-sm font-medium hover:text-primary transition-colors">Examples</a>
          <a href="#documentation" className="text-sm font-medium hover:text-primary transition-colors">Documentation</a>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" className="hidden sm:flex items-center gap-2">
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
