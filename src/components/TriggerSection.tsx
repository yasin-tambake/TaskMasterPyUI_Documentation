
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CodeExample from './CodeExample';

const triggerExamples = [
  {
    id: "time",
    title: "Time-based Trigger",
    code: `triggers:
  - type: TimeTrigger
    name: hourly_data_pull
    config:
      schedule: "0 * * * *"  # Run every hour
      timezone: UTC`,
    description: "Schedule jobs with cron expressions"
  },
  {
    id: "file",
    title: "File Change Trigger",
    code: `triggers:
  - type: FileTrigger
    name: data_file_watcher
    config:
      path: "/data/input/"
      patterns: ["*.csv", "*.xlsx"]
      events: ["created", "modified"]`,
    description: "React to file system events"
  },
  {
    id: "api",
    title: "API Polling Trigger",
    code: `triggers:
  - type: APIPollTrigger
    name: api_status_checker
    config:
      url: "https://api.example.com/status"
      method: GET
      interval: 300  # seconds
      response_path: "data.status"
      condition: "!= 'healthy'"`,
    description: "Poll APIs and trigger on condition changes"
  },
  {
    id: "webhook",
    title: "Webhook Trigger",
    code: `triggers:
  - type: WebhookTrigger
    name: payment_webhook
    config:
      endpoint: "/hooks/payment-received"
      port: 8000
      auth_header: "X-API-Key"
      secret_env: "WEBHOOK_SECRET"`,
    description: "Listen for incoming webhook events"
  },
  {
    id: "db",
    title: "Database Trigger",
    code: `triggers:
  - type: DBTrigger
    name: new_user_monitor
    config:
      connection_string: $DB_CONNECTION
      table: "users"
      poll_interval: 60  # seconds
      timestamp_column: "created_at"
      condition: "status = 'new'"`,
    description: "Trigger on database changes"
  }
];

const TriggerSection = () => {
  return (
    <section className="py-16">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Event-Driven Triggers</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Start workflows based on various events from different sources
          </p>
        </div>
        
        <Card className="mx-auto max-w-4xl">
          <CardContent className="pt-6">
            <Tabs defaultValue="time">
              <TabsList className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 mb-8">
                {triggerExamples.map((example) => (
                  <TabsTrigger key={example.id} value={example.id} className="text-xs sm:text-sm">
                    {example.title.split(" ")[0]}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {triggerExamples.map((example) => (
                <TabsContent key={example.id} value={example.id}>
                  <CodeExample
                    title={example.title}
                    language="yaml"
                    code={example.code}
                    description={example.description}
                  />
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TriggerSection;
