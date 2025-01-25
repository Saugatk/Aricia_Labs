import Navbar from "@/components/Navbar";
    import { motion } from "framer-motion";
    import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
    import CurrencySelect from "@/components/ui/currency-select";
    import { formatCurrency, currencyRates } from "@/lib/utils";
    import React from "react";
    
    const businessGrowthServices = [
      {
        title: "SEO Optimization",
        description: "Boost your online visibility and attract more customers.",
        features: ["Keyword research and on-page SEO", "Off-page SEO (backlinks, content outreach)", "Technical SEO (site speed, mobile responsiveness)", "Local SEO for targeting specific regions"],
        price: {
          basic: "14999",
          advanced: "29999",
          custom: "49999",
        },
        delivery: {
          initial: "7-14 days",
          ongoing: "Monthly",
        },
        bestFor: "Small businesses, bloggers, e-commerce stores",
      },
      {
        title: "Social Media Marketing (SMM)",
        description: "Grow your brand and engage with your audience.",
        features: ["Account setup and branding (Facebook, Instagram, TikTok, LinkedIn)", "Content creation and scheduling", "Ad campaign management", "Analytics and performance tracking"],
        price: {
          basic: "9999",
          advanced: "19999",
          custom: "29999",
        },
        delivery: {
          setup: "5-7 days",
          ongoing: "Monthly",
        },
        bestFor: "Local businesses, influencers, and startups",
      },
      {
        title: "Pay-Per-Click Advertising (PPC)",
        description: "Drive targeted traffic and generate leads with PPC campaigns.",
        features: ["Google Ads and Bing Ads setup", "Keyword bidding and ad creation", "A/B testing for ad performance", "Monthly performance reporting"],
        price: {
          setup: "14999",
          management: "9999 - 29999",
        },
        delivery: {
          setup: "3-5 days",
          management: "Monthly",
        },
        bestFor: "Businesses needing immediate traffic or lead generation",
      },
      {
        title: "Content Marketing",
        description: "Build trust and authority with high-quality content.",
        features: ["Blog writing, article creation", "Video content strategy and production", "Email newsletters and drip campaigns", "Content for landing pages and ads"],
        price: {
          articles: "4999",
          email: "6999",
          video: "19999",
        },
        delivery: {
          articles: "3-5 days",
          campaigns: "7-10 days for setup",
        },
        bestFor: "Brands focusing on long-term audience engagement",
      },
      {
        title: "Branding and Identity Design",
        description: "Create a unique identity for your business.",
        features: ["Logo design and brand guidelines", "Social media templates", "Business card and stationery design", "Brand story creation"],
        price: {
          logo: "9999",
          full: "24999",
        },
        delivery: {
          logo: "5-7 days",
          full: "14 days",
        },
        bestFor: "New businesses or rebranding initiatives",
      },
      {
        title: "E-commerce Strategy and Consultation",
        description: "Expand your business into online retail.",
        features: ["Product research and niche analysis", "Store setup and optimization", "Sales funnel design", "Marketing and conversion tracking"],
        price: {
          consultation: "4999/hour",
          full: "34999",
        },
        delivery: {
          setup: "7-14 days",
        },
        bestFor: "Small businesses and entrepreneurs entering e-commerce",
      },
      {
        title: "Email Marketing",
        description: "Stay connected with your customers and boost sales.",
        features: ["Email templates design", "List segmentation and automation", "Campaign performance analysis"],
        price: {
          basic: "6999",
          advanced: "14999",
        },
        delivery: {
          setup: "5 days",
          ongoing: "Weekly/Monthly",
        },
        bestFor: "Retailers, service providers",
      },
      {
        title: "Business Analytics and Insights",
        description: "Understand your business and customer behavior.",
        features: ["Website analytics setup (Google Analytics, Hotjar)", "Monthly performance reports", "Marketing campaign insights"],
        price: {
          setup: "7999",
          reports: "4999",
        },
        delivery: {
          setup: "3-5 days",
          reports: "Monthly",
        },
        bestFor: "Businesses optimizing their strategies",
      },
    ];
    
    const BusinessGrowth = () => {
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
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Business Growth</h2>
                <CurrencySelect onCurrencyChange={setCurrency} defaultCurrency="NPR" />
              </motion.div>
    
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {businessGrowthServices.map((service, index) => (
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
                        <ul className="mt-4 space-y-2">
                          {service.features.map((feature) => (
                            <li key={feature} className="text-sm text-gray-500">
                              {feature}
                            </li>
                          ))}
                        </ul>
                        {service.price && (
                          <div className="mt-4">
                            {Object.entries(service.price).map(([key, value]) => (
                              <div key={key}>
                                <span className="font-semibold capitalize">{key}:</span> {formatCurrency(Number(value.split(" - ")[0] || value), currency)} {value.split(" - ")[1] ? `- ${formatCurrency(Number(value.split(" - ")[1]), currency)}` : ""}
                              </div>
                            ))}
                          </div>
                        )}
                        {service.delivery && (
                          <div className="mt-2">
                            {Object.entries(service.delivery).map(([key, value]) => (
                              <div key={key}>
                                <span className="font-semibold capitalize">{key}:</span> {value}
                              </div>
                            ))}
                          </div>
                        )}
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
    
    export default BusinessGrowth;
