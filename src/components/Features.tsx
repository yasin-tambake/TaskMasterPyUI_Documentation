
import React from 'react';
import { 
  Clock, 
  File, 
  Globe, 
  Webhook, 
  Database, 
  Download, 
  Sparkles, 
  BarChart, 
  Save, 
  Mail, 
  PhoneCall, 
  Terminal as TerminalIcon,
  Bell
} from 'lucide-react';

const featureGroups = [
  {
    title: "Trigger Types",
    features: [
      {
        icon: <Clock className="h-5 w-5" />,
        name: "TimeTrigger",
        description: "Cron and interval-based job scheduling"
      },
      {
        icon: <File className="h-5 w-5" />,
        name: "FileTrigger",
        description: "Watch file/folder changes (create, modify, delete)"
      },
      {
        icon: <Globe className="h-5 w-5" />,
        name: "APIPollTrigger",
        description: "Poll APIs for changes based on conditions"
      },
      {
        icon: <Webhook className="h-5 w-5" />,
        name: "WebhookTrigger",
        description: "Start workflows on external webhook hit"
      },
      {
        icon: <Database className="h-5 w-5" />,
        name: "DBTrigger",
        description: "Trigger on database insert/update events"
      }
    ]
  },
  {
    title: "Action Types",
    features: [
      {
        icon: <Download className="h-5 w-5" />,
        name: "LoadDataAction",
        description: "Load data from CSV, JSON, Excel, or SQL"
      },
      {
        icon: <Sparkles className="h-5 w-5" />,
        name: "CleanDataAction",
        description: "Drop NA values, fix types, rename, filter columns"
      },
      {
        icon: <BarChart className="h-5 w-5" />,
        name: "TransformDataAction",
        description: "Normalize, aggregate, group, pivot, or encode data"
      },
      {
        icon: <Save className="h-5 w-5" />,
        name: "SaveDataAction",
        description: "Save processed data to CSV, JSON, SQL, or NoSQL"
      },
      {
        icon: <Mail className="h-5 w-5" />,
        name: "SendEmailAction",
        description: "Send status updates and reports via SMTP"
      },
      {
        icon: <PhoneCall className="h-5 w-5" />,
        name: "CallAPIAction",
        description: "Perform REST API calls with JSON payloads"
      },
      {
        icon: <TerminalIcon className="h-5 w-5" />,
        name: "RunScriptAction",
        description: "Execute custom Python or shell scripts"
      },
      {
        icon: <Bell className="h-5 w-5" />,
        name: "NotifyAction",
        description: "CLI alerts or system tray notifications"
      }
    ]
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-secondary" id="features">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter">Powerful Features</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            TaskMasterPy provides a comprehensive set of tools for your data automation needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {featureGroups.map((group, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-xl font-medium text-center mb-6">{group.title}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {group.features.map((feature, featureIndex) => (
                  <div 
                    key={featureIndex} 
                    className="flex flex-col p-4 rounded-lg border bg-background shadow-sm hover:shadow transition-shadow"
                  >
                    <div className="feature-icon mb-3 self-start">
                      {feature.icon}
                    </div>
                    <h4 className="font-medium">{feature.name}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
