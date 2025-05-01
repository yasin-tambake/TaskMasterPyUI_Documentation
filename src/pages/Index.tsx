
import React from 'react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import CommandLine from '@/components/CommandLine';
import CodeExample from '@/components/CodeExample';
import TriggerSection from '@/components/TriggerSection';
import ActionSection from '@/components/ActionSection';
import Footer from '@/components/Footer';
import { ArrowRight, GitFork, GitPullRequest, Star, ArrowDownCircle } from 'lucide-react';

const cliSampleOutput = [
  "INFO: Loading workflow configuration...",
  "INFO: Validating workflow schema...", 
  "INFO: Initializing TimeTrigger 'hourly_data_pull'...",
  "INFO: Initializing LoadDataAction 'load_sales_data'...",
  "INFO: Initializing CleanDataAction 'clean_sales_data'...",
  "INFO: Initializing TransformDataAction 'transform_sales'...",
  "INFO: Initializing SaveDataAction 'save_report'...",
  "INFO: Initializing SendEmailAction 'notify_team'...",
  "INFO: Workflow 'sales_report' successfully initialized!",
  "INFO: Starting triggers...",
  "INFO: TaskMasterPy is running. Press Ctrl+C to stop."
];

const workflowExample = `# Example workflow that monitors a data directory
# and processes CSV files when they're added

name: csv_processor
description: "Process CSV files from data directory"

triggers:
  - type: FileTrigger
    name: new_csv_detector
    config:
      path: "/data/input/"
      patterns: "*.csv"
      events: ["created"]

actions:
  - type: LoadDataAction
    name: load_csv
    config:
      source: "file"
      path: "{{trigger.file_path}}"
      
  - type: CleanDataAction
    name: clean_data
    depends_on: ["load_csv"]
    config:
      input: "{{load_csv.output}}"
      operations:
        - drop_na: ["id", "value"]
        - drop_duplicates: ["id"]
        
  - type: TransformDataAction
    name: transform_data
    depends_on: ["clean_data"]
    config:
      input: "{{clean_data.output}}"
      operations:
        - groupby:
            columns: ["category"]
            aggregations:
              total: ["value", "sum"]
              count: ["id", "count"]
              
  - type: SaveDataAction
    name: save_processed
    depends_on: ["transform_data"]
    config:
      input: "{{transform_data.output}}"
      destination: "file"
      path: "/data/output/{{trigger.file_name}}_processed.json"
      format: "json"
      
  - type: SendEmailAction
    name: notify_completion
    depends_on: ["save_processed"]
    config:
      to: ["data-team@example.com"]
      subject: "Data Processing Complete"
      body_text: "The file {{trigger.file_name}} has been processed."`;

const pythonExample = `
# Using TaskMasterPy's Python API

from taskmaster import Workflow, TimeTrigger, LoadDataAction, SaveDataAction

# Create a workflow
workflow = Workflow(name="daily_weather_data")

# Add a trigger
trigger = TimeTrigger(
    name="daily_trigger",
    schedule="0 6 * * *"  # Run at 6am daily
)
workflow.add_trigger(trigger)

# Add actions
load_action = LoadDataAction(
    name="load_weather_api",
    source="api",
    url="https://api.weather.com/data",
    params={"location": "New York", "units": "metric"},
    auth={"api_key": "$WEATHER_API_KEY"}
)

save_action = SaveDataAction(
    name="save_weather_data", 
    input="{{load_weather_api.output}}",
    destination="file",
    path="/data/weather/ny_{{date}}.csv"
)

# Add actions to workflow
workflow.add_action(load_action)
workflow.add_action(save_action, depends_on=[load_action])

# Run the workflow
workflow.run()
`;

const autopilotExample = `
# The simplest way to use TaskMasterPy

from taskmaster import autopilot

# One line to run a workflow from a YAML file
autopilot("workflows/data_processor.yaml")

# Or create a quick workflow with sensible defaults
autopilot(
    input_source="csv:///data/sales.csv",
    clean=True,                     # Apply default cleaning steps
    transform=[                     # Specify transformations
        "groupby:product_category", 
        "aggregate:sum(sales),avg(price)"
    ],
    output="excel:///reports/summary.xlsx"
)
`;

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main>
        <Hero />
        
        <Features />
        
        {/* CLI Demo */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">CLI-First Approach</h2>
              <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
                A powerful command line interface for managing your automation workflows
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <CommandLine 
                commandExample="taskmaster run workflows/sales_report.yaml" 
                output={cliSampleOutput}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-secondary p-4 rounded-lg">
                  <h3 className="font-medium mb-4">Common CLI Commands</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="font-mono bg-background p-2 rounded">taskmaster run workflow.yaml</li>
                    <li className="font-mono bg-background p-2 rounded">taskmaster list-workflows</li>
                    <li className="font-mono bg-background p-2 rounded">taskmaster validate workflow.yaml</li>
                    <li className="font-mono bg-background p-2 rounded">taskmaster trigger-now workflow_id</li>
                  </ul>
                </div>
                
                <div className="bg-secondary p-4 rounded-lg">
                  <h3 className="font-medium mb-4">Features</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-primary" /> Interactive mode with preview
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-primary" /> Schema validation
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-primary" /> Dynamic workflow management
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-primary" /> Advanced error handling
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <TriggerSection />
        
        <ActionSection />
        
        {/* Workflow Config */}
        <section className="py-16" id="examples">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Configuration Examples</h2>
              <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
                Define workflows as directed acyclic graphs (DAGs) using YAML or Python
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
              <CodeExample
                title="YAML Configuration"
                language="yaml"
                code={workflowExample}
                description="Define workflows using YAML configuration files"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <CodeExample
                  title="Python API"
                  language="python"
                  code={pythonExample}
                  description="Create workflows using the Python API"
                />
                
                <CodeExample
                  title="Autopilot Mode"
                  language="python"
                  code={autopilotExample}
                  description="One-line configuration for quick automation"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-background to-secondary">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl font-bold">Ready to Simplify Your Data Operations?</h2>
              <p className="text-xl text-muted-foreground">
                Join the open-source community and start automating your data workflows
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  <ArrowDownCircle className="mr-2 h-4 w-4" /> Get Started
                </Button>
                <Button variant="outline" size="lg">
                  <Star className="mr-2 h-4 w-4" /> Star on GitHub
                </Button>
              </div>
              <div className="pt-6 flex justify-center gap-8 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  <span>1.2k Stars</span>
                </div>
                <div className="flex items-center gap-2">
                  <GitFork className="h-5 w-5" />
                  <span>340 Forks</span>
                </div>
                <div className="flex items-center gap-2">
                  <GitPullRequest className="h-5 w-5" />
                  <span>120 Contributors</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
