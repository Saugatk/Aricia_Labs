import Navbar from "@/components/Navbar";
    import { motion } from "framer-motion";
    import { Check } from "lucide-react";
    import { Button } from "@/components/ui/button";
    import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
    import React from "react";
    
    const pricingPlans = [
      {
        name: "Starter Plan",
        bestFor: "Small businesses, startups, or individuals looking to establish an online presence.",
        price: {
          oneTime: "रू 19,999",
          monthly: "रू 1,999/month",
        },
        features: [
          "1 Website Design (Blog/Personal Website)",
          "5 Custom Pages",
          "Basic SEO Optimization",
          "Mobile-Responsive Design",
          "Social Media Integration",
          "Email Support",
          "Up to 1GB of Storage",
          "5GB Bandwidth",
        ],
        delivery: "4-6 days",
        benefits: [
          "Affordable plan for new businesses and individuals.",
          "Fast turnaround time for getting your website up and running.",
          "Basic SEO to ensure your website ranks higher.",
          "Perfect for bloggers, artists, and personal brands.",
        ],
      },
      {
        name: "Growth Plan",
        bestFor: "Medium businesses, professionals, or companies aiming to scale their online presence.",
        price: {
          oneTime: "रू 29,999",
          monthly: "रू 3,499/month",
        },
        features: [
          "3 Website Designs (Portfolio, E-commerce, or Dynamic Website)",
          "Up to 10 Custom Pages",
          "Advanced SEO Optimization",
          "Real-Time Updates",
          "Admin Dashboard Access",
          "10GB of Storage",
          "50GB Bandwidth",
          "Integrated Blogging System",
          "Custom Services Pages",
          "Social Media Integration",
          "Priority Email Support",
        ],
        delivery: "7-10 days",
        benefits: [
          "Boost your business’ professional look with modern design and interactive elements.",
          "Real-time updates keep your content fresh and up-to-date.",
          "Includes e-commerce setup to enable you to start selling online.",
          "Priority support ensures your issues are resolved quickly.",
        ],
      },
      {
        name: "Premium Plan",
        bestFor: "Large businesses or enterprises with complex needs or high traffic.",
        price: {
          oneTime: "रू 49,999",
          monthly: "रू 5,999/month",
        },
        features: [
          "5 Website Designs (Custom Web Application, E-commerce, Real Estate, and more)",
          "Unlimited Custom Pages",
          "Complete Website Customization",
          "Advanced SEO and Performance Optimization",
          "Full Content Management System (CMS)",
          "Up to 100GB Storage",
          "Unlimited Bandwidth",
          "Multiple Service Categories",
          "Multi-language Support",
          "Real-Time Analytics Dashboard",
          "Integration with APIs and External Tools",
          "24/7 Priority Support",
        ],
        delivery: "10-14 days",
        benefits: [
          "Completely tailored solutions for growing or enterprise-level businesses.",
          "Multi-language support allows you to target international markets.",
          "Full control over your content and customization, with unlimited pages and features.",
          "24/7 customer support ensures your website runs smoothly at all times.",
        ],
      },
      {
        name: "Enterprise Plan",
        bestFor: "Large corporations or organizations requiring specialized solutions and advanced features.",
        price: {
          oneTime: "रू 99,999",
          monthly: "रू 9,999/month",
        },
        features: [
          "Custom Web Applications (Tailored to Your Business Needs)",
          "Multiple E-commerce Platforms",
          "Multi-User Access with Admin Controls",
          "Full Cloud Hosting Integration",
          "Unlimited Storage & Bandwidth",
          "Dedicated Server Support",
          "Custom APIs & Integrations",
          "Exclusive Marketing & Business Consultation",
          "Enterprise-Level Security Features",
          "Dedicated Account Manager",
          "Full Analytics & Reporting Suite",
          "24/7 VIP Support",
        ],
        delivery: "14-21 days",
        benefits: [
          "Best for large-scale businesses with specific needs, high traffic, and complex requirements.",
          "Dedicated support and account management for seamless operations.",
          "Enterprise-level security ensures data privacy and protection.",
          "Comprehensive analytics and business consultations help you optimize growth.",
        ],
      },
    ];
    
    const Pricing = () => {
      const [expandedPlans, setExpandedPlans] = React.useState<{ [key: string]: boolean }>({});
    
      const togglePlan = (planName: string) => {
        setExpandedPlans((prev) => ({
          ...prev,
          [planName]: !prev[planName],
        }));
      };
    
      return (
        <div className="min-h-screen">
          <Navbar />
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">AriciaLabs Pricing Plans</h2>
                <p className="text-xl text-gray-600">Choose the perfect plan to suit your business needs. Whether you’re a startup, a growing company, or an enterprise-level business, we have a plan designed for you.</p>
              </motion.div>
    
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {pricingPlans.map((plan, index) => (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                      <CardHeader className="text-center">
                        <CardTitle className="text-2xl">{plan.name}</CardTitle>
                        <div className="mt-4">
                          <span className="text-4xl font-bold">{plan.price.oneTime}</span>
                          <span className="text-gray-600"> (one-time fee)</span>
                          <br />
                          <span className="text-xl font-bold">{plan.price.monthly}</span>
                        </div>
                        <p className="text-gray-600 mt-2">{plan.bestFor}</p>
                      </CardHeader>
                      <CardContent>
                        <h4 className="font-semibold mt-4">Features:</h4>
                        <ul className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                          {expandedPlans[plan.name]
                            ? plan.features.map((feature) => (
                                <li key={feature} className="flex items-center">
                                  <Check className="w-5 h-5 text-green-500 mr-2" />
                                  <span className="text-sm">{feature}</span>
                                </li>
                              ))
                            : plan.features.slice(0, 3).map((feature) => (
                                <li key={feature} className="flex items-center">
                                  <Check className="w-5 h-5 text-green-500 mr-2" />
                                  <span className="text-sm">{feature}</span>
                                </li>
                              ))}
                        </ul>
                        {expandedPlans[plan.name] && (
                          <>
                            <h4 className="font-semibold mt-4">Benefits:</h4>
                            <ul className="list-disc list-inside ml-4 mt-2 text-sm text-gray-500">
                              {plan.benefits.map((benefit) => (
                                <li key={benefit}>
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                            <div className="mt-4">
                              <span className="font-semibold">Delivery Time:</span> {plan.delivery}
                            </div>
                          </>
                        )}
                        <Button className="w-full mt-8" onClick={() => togglePlan(plan.name)}>
                          {expandedPlans[plan.name] ? "Show Less" : "Learn More"}
                        </Button>
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
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Add-Ons Available</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600 max-w-2xl mx-auto mb-8">
                  <li><span className="font-semibold">Extra Pages:</span> रू 1,499/page</li>
                  <li><span className="font-semibold">Additional Storage:</span> रू 999/10GB</li>
                  <li><span className="font-semibold">API Integrations:</span> रू 4,999</li>
                  <li><span className="font-semibold">E-commerce Setup:</span> रू 9,999</li>
                  <li><span className="font-semibold">Social Media Management Integration:</span> रू 2,499</li>
                  <li><span className="font-semibold">Advanced SEO Optimization:</span> रू 3,999</li>
                  <li><span className="font-semibold">App Landing Page Design:</span> रू 4,999</li>
                </ul>
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mt-8 mb-4">Why Choose AriciaLabs?</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600 max-w-2xl mx-auto mb-8">
                  <li><span className="font-semibold">Fast Turnaround:</span> Get your website live quickly with fast delivery times.</li>
                  <li><span className="font-semibold">Customization:</span> Fully customizable solutions tailored to your business.</li>
                  <li><span className="font-semibold">Security & Support:</span> Enterprise-level security with ongoing support.</li>
                  <li><span className="font-semibold">Global Reach:</span> Multi-language websites to cater to a global audience.</li>
                  <li><span className="font-semibold">All-In-One Solution:</span> From websites to e-commerce and custom applications, we provide everything.</li>
                </ul>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8">
                  Start Your Journey with AriciaLabs Today!
                </p>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-2">
                  Take the first step toward a powerful online presence. Choose the plan that best fits your business, and let us handle the rest!
                </p>
              </motion.div>
            </div>
          </section>
        </div>
      );
    };
    
    export default Pricing;
