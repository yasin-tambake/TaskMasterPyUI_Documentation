
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CodeExample from './CodeExample';

const actionExamples = [
  {
    id: "load",
    title: "Load Data",
    code: `actions:
  - type: LoadDataAction
    name: load_sales_data
    config:
      source: "file"
      path: "/data/sales_2023.csv"
      options:
        parse_dates: ["order_date"]
        dtype:
          order_id: str
          amount: float`,
    description: "Load data from various sources"
  },
  {
    id: "clean",
    title: "Clean Data",
    code: `actions:
  - type: CleanDataAction
    name: clean_customer_data
    config:
      input: "{{load_customer_data.output}}"
      operations:
        - drop_na: ["email", "customer_id"]
        - rename:
            customer_name: "name"
            customer_email: "email"
        - drop_duplicates: ["customer_id"]
        - fillna: 
            country: "Unknown"`,
    description: "Clean and preprocess your data"
  },
  {
    id: "transform",
    title: "Transform Data",
    code: `actions:
  - type: TransformDataAction
    name: aggregate_sales
    config:
      input: "{{cleaned_data.output}}"
      operations:
        - groupby:
            columns: ["category", "region"]
            aggregations:
              total_sales: ["amount", "sum"]
              avg_price: ["amount", "mean"]
              count: ["order_id", "count"]`,
    description: "Group, aggregate, and transform data"
  },
  {
    id: "save",
    title: "Save Data",
    code: `actions:
  - type: SaveDataAction
    name: export_report
    config:
      input: "{{transformed_data.output}}"
      destination: "file"
      path: "/outputs/sales_report_{{date}}.xlsx"
      options:
        index: false
        sheet_name: "Sales Summary"`,
    description: "Save data to various destinations"
  },
  {
    id: "notify",
    title: "Send Notification",
    code: `actions:
  - type: SendEmailAction
    name: send_report_email
    depends_on: ["export_report"]
    config:
      to: ["data-team@example.com"]
      subject: "Sales Report {{date}}"
      body_text: "The sales report has been generated. See attached."
      attachments:
        - "{{export_report.output_path}}"
      smtp:
        server: $SMTP_SERVER
        port: $SMTP_PORT
        user: $SMTP_USER
        password: $SMTP_PASSWORD`,
    description: "Send emails with reports and alerts"
  }
];

const ActionSection = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Data-Focused Actions</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Process and transform your data with powerful built-in actions
          </p>
        </div>
        
        <Card className="mx-auto max-w-4xl">
          <CardContent className="pt-6">
            <Tabs defaultValue="load">
              <TabsList className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 mb-8">
                {actionExamples.map((example) => (
                  <TabsTrigger key={example.id} value={example.id} className="text-xs sm:text-sm">
                    {example.title}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {actionExamples.map((example) => (
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

export default ActionSection;
