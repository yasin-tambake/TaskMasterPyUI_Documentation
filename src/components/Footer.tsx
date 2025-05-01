
import React from 'react';
import { Logo } from '@/assets/logo';
import { Github, Twitter, Slack, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t py-12 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo className="mb-2" />
            <p className="text-sm text-muted-foreground">
              Python-based automation framework for data operations.
              Open-source and designed for data scientists.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Documentation</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-primary">Getting Started</a></li>
              <li><a href="#" className="text-sm hover:text-primary">Triggers Reference</a></li>
              <li><a href="#" className="text-sm hover:text-primary">Actions Reference</a></li>
              <li><a href="#" className="text-sm hover:text-primary">Configuration Guide</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-primary flex items-center gap-2">
                  <Github className="h-4 w-4" /> GitHub
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-primary flex items-center gap-2">
                  <Twitter className="h-4 w-4" /> Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-primary flex items-center gap-2">
                  <Slack className="h-4 w-4" /> Slack Community
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-primary">Tutorials</a></li>
              <li><a href="#" className="text-sm hover:text-primary">Example Workflows</a></li>
              <li><a href="#" className="text-sm hover:text-primary">Contributing</a></li>
              <li><a href="#" className="text-sm hover:text-primary">Roadmap</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} TaskMasterPy. MIT License.
          </p>
          <p className="text-sm text-muted-foreground flex items-center mt-4 md:mt-0">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> by the data automation community
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
