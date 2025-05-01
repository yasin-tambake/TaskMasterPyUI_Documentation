
import React from 'react';
import { CopyIcon, CheckIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

type CodeExampleProps = {
  title: string;
  language: string;
  code: string;
  description?: string;
};

const CodeExample: React.FC<CodeExampleProps> = ({ title, language, code, description }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-lg border bg-card shadow">
      <div className="flex items-center justify-between p-4 border-b">
        <div>
          <h3 className="text-sm font-medium">{title}</h3>
          {description && <p className="text-xs text-muted-foreground mt-1">{description}</p>}
        </div>
        <Button 
          variant="ghost" 
          size="sm"
          onClick={handleCopy}
          className="h-8 gap-1"
        >
          {copied ? (
            <>
              <CheckIcon className="h-4 w-4 text-green-500" />
              <span className="text-xs">Copied</span>
            </>
          ) : (
            <>
              <CopyIcon className="h-4 w-4" />
              <span className="text-xs">Copy</span>
            </>
          )}
        </Button>
      </div>
      <div className="overflow-x-auto">
        <pre className="p-4 text-sm">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeExample;
