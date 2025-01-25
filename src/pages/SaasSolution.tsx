import Navbar from "@/components/Navbar";
    import { motion } from "framer-motion";
    import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
    import CurrencySelect from "@/components/ui/currency-select";
    import { formatCurrency, currencyRates } from "@/lib/utils";
    import React from "react";
    
    const saasSolutionServices = [
      {
        title: "Subscription Management System",
        description: "A scalable system for managing subscriptions, billing, and payments.",
        features: [],
        price: "50999 - 80999",
        delivery: "21-30 days",
        bestFor: "SaaS businesses, content platforms",
      },
      {
        title: "CRM (Customer Relationship Management) System",
        description: "A platform to manage customer data and interactions.",
        features: [],
        price: "70999 - 100999",
        delivery: "30-45 days",
        bestFor: "Sales teams, marketing agencies",
      },
      {
        title: "Project Management Software",
        description: "Organize projects, tasks, and collaboration in one platform.",
        features: [],
        price: "60999 - 120999",
        delivery: "30-45 days",
        bestFor: "Teams, businesses, remote workers",
      },
      {
        title: "E-Learning Platform",
        description: "A platform to create and manage online courses.",
        features: [],
        price: "75999 - 150999",
        delivery: "30-45 days",
        bestFor: "Educational institutions, training centers",
      },
      {
        title: "Team Collaboration Tool",
        description: "Facilitate team communication and task management.",
        features: [],
        price: "60999 - 100999",
        delivery: "21-30 days",
        bestFor: "Startups, remote teams",
      },
      {
        title: "Time Tracking & Billing Software",
        description: "A platform for freelancers and businesses to track time and bill clients.",
        features: [],
        price: "45999 - 80999",
        delivery: "21-30 days",
        bestFor: "Freelancers, service providers",
      },
      {
        title: "Marketing Automation Software",
        description: "Automate marketing campaigns and lead nurturing.",
        features: [],
        price: "50999 - 100999",
        delivery: "21-30 days",
        bestFor: "Digital marketers, businesses",
      },
      {
        title: "Inventory Management System",
        description: "Track stock levels, sales, and orders.",
        features: [],
        price: "55999 - 90999",
        delivery: "30-45 days",
        bestFor: "E-commerce, retail businesses",
      },
      {
        title: "Customer Support & Ticketing System",
        description: "Manage customer queries and support tickets.",
        features: [],
        price: "40999 - 75999",
        delivery: "21-30 days",
        bestFor: "Businesses with customer support needs",
      },
      {
        title: "Online Booking & Reservation System",
        description: "A system for booking appointments or reservations.",
        features: [],
        price: "40999 - 70999",
        delivery: "21-30 days",
        bestFor: "Service providers, event planners",
      },
      {
        title: "Document Management System",
        description: "Organize and manage documents and files.",
        features: [],
        price: "50999 - 90999",
        delivery: "21-30 days",
        bestFor: "Legal firms, businesses, teams",
      },
      {
        title: "HRM (Human Resource Management) System",
        description: "Manage employee data, payroll, and performance.",
        features: [],
        price: "65999 - 120999",
        delivery: "30-45 days",
        bestFor: "Large enterprises, HR departments",
      },
      {
        title: "Cloud Storage Solution",
        description: "Provide secure cloud storage for businesses or individuals.",
        features: [],
        price: "60999 - 100999",
        delivery: "30-45 days",
        bestFor: "Businesses, individual users",
      },
      {
        title: "SaaS Analytics Dashboard",
        description: "Real-time analytics and insights for SaaS businesses.",
        features: [],
        price: "55999 - 95999",
        delivery: "21-30 days",
        bestFor: "SaaS businesses, data-driven companies",
      },
      {
        title: "Subscription Box Management Platform",
        description: "A platform for businesses offering subscription boxes.",
        features: [],
        price: "60999 - 110999",
        delivery: "30-45 days",
        bestFor: "Subscription box businesses, e-commerce",
      },
    ];
    
    const SaasSolution = () => {
      const [currency, setCurrency] = React.useState<keyof typeof currencyRates | "NPR">("NPR");
    
      return (
        <div className="min-h-screen">
          <Navbar />
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16 flex items-center justify-between"
              >
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">SAAS Solution</h2>
                <CurrencySelect onCurrencyChange={setCurrency} defaultCurrency="NPR" />
              </motion.div>
    
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {saasSolutionServices.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <CardTitle>{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">
                          {service.description}
                        </CardDescription>
                        <div className="mt-4">
                          <span className="font-semibold">Price:</span> {formatCurrency(Number(service.price.split(" - ")[0]), currency)} - {formatCurrency(Number(service.price.split(" - ")[1]), currency)}
                        </div>
                        <div>
                          <span className="font-semibold">Delivery:</span> {service.delivery}
                        </div>
                        <div>
                          <span className="font-semibold">Best For:</span> {service.bestFor}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-16 text-center"
              >
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Special Offers</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600 max-w-2xl mx-auto">
                  <li><span className="font-semibold">Bundle Discount:</span> Get 15% off when combining 3 or more services.</li>
                  <li><span className="font-semibold">Loyalty Reward:</span> Free SEO audit or social media account review for returning clients.</li>
                  <li><span className="font-semibold">Referral Bonus:</span> Earn रू2,000 credit for each referred client.</li>
                </ul>
              </motion.div>
            </div>
          </section>
        </div>
      );
    };
    
    export default SaasSolution;
