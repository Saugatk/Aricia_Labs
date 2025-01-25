import Navbar from "@/components/Navbar";
    import { motion } from "framer-motion";
    import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
    import CurrencySelect from "@/components/ui/currency-select";
    import { formatCurrency } from "@/lib/utils";
    import React from "react";
    
    const seoConsultingServices = [
      {
        title: "SEO Website Audit",
        description: "Comprehensive audit to analyze your website’s SEO performance.",
        features: ["On-page analysis", "Backlink analysis", "Site speed testing"],
        price: "8999 - 15999",
        delivery: "3-5 days",
        bestFor: "Businesses seeking to identify SEO issues",
      },
      {
        title: "Keyword Research & Strategy",
        description: "In-depth keyword research to target the right audience.",
        features: ["Competitor keyword analysis", "Long-tail keyword strategy", "Search volume and difficulty analysis"],
        price: "11499 - 19999",
        delivery: "3-5 days",
        bestFor: "Content marketers, SEO beginners",
      },
      {
        title: "On-Page SEO Optimization",
        description: "Optimize website elements to improve search rankings.",
        features: ["Meta tag optimization", "Image alt text and descriptions", "Internal linking strategy"],
        price: "13499 - 22999",
        delivery: "5-7 days",
        bestFor: "Websites looking to improve visibility",
      },
      {
        title: "Technical SEO Optimization",
        description: "Enhance your website’s technical performance for better search indexing.",
        features: ["Mobile optimization", "Crawlability and indexing improvements", "URL structure and site architecture"],
        price: "17499 - 29999",
        delivery: "7-10 days",
        bestFor: "Websites with technical SEO challenges",
      },
      {
        title: "Content Strategy & Development",
        description: "Develop SEO-friendly content for blogs, pages, and product descriptions.",
        features: ["Blog post creation and optimization", "Landing page content", "Content calendar planning"],
        price: "16499 - 28999",
        delivery: "7-14 days",
        bestFor: "Content creators, bloggers, e-commerce sites",
      },
      {
        title: "Link Building Strategy",
        description: "Create a powerful backlink strategy to boost domain authority.",
        features: ["Quality backlinks from high-authority websites", "Outreach campaigns", "Guest post opportunities"],
        price: "18499 - 33999",
        delivery: "14-21 days",
        bestFor: "Businesses with strong content needing backlinks",
      },
      {
        title: "Local SEO Optimization",
        description: "Optimize for local searches and improve local visibility.",
        features: ["Google My Business optimization", "Local citation building", "Local keywords targeting"],
        price: "13499 - 22999",
        delivery: "7-10 days",
        bestFor: "Local businesses, restaurants, service providers",
      },
      {
        title: "E-Commerce SEO Optimization",
        description: "Improve the SEO of e-commerce platforms to drive more sales.",
        features: ["Product page optimization", "Structured data for products", "Review and rating optimization"],
        price: "19999 - 34999",
        delivery: "10-14 days",
        bestFor: "E-commerce websites, online stores",
      },
      {
        title: "SEO Content Optimization",
        description: "Enhance existing content to rank higher on search engines.",
        features: ["Content rewrite for keyword inclusion", "SEO title and meta description improvements", "Image and video optimization"],
        price: "11499 - 19999",
        delivery: "5-7 days",
        bestFor: "Websites with outdated or underperforming content",
      },
      {
        title: "SEO Performance Reporting",
        description: "Track and report SEO performance with key metrics.",
        features: ["Organic traffic tracking", "Keyword ranking analysis", "Competitor performance benchmarking"],
        price: "8499 - 14999",
        delivery: "5-7 days",
        bestFor: "Businesses seeking regular performance updates",
      },
      {
        title: "Mobile SEO Optimization",
        description: "Optimize websites for mobile users to improve rankings.",
        features: ["Mobile responsiveness testing", "Page load time optimization", "Mobile-friendly content"],
        price: "13499 - 22499",
        delivery: "7-10 days",
        bestFor: "Websites with mobile traffic challenges",
      },
      {
        title: "SEO Consultation & Strategy",
        description: "Provide tailored SEO strategies for businesses.",
        features: ["SEO roadmap creation", "Performance goal setting", "Personalized SEO advice"],
        price: "15499 - 27999",
        delivery: "3-5 days",
        bestFor: "New businesses, businesses looking for SEO direction",
      },
      {
        title: "Video SEO Optimization",
        description: "Improve visibility of video content on search engines.",
        features: ["Video title and description optimization", "Transcriptions and captions", "Video schema markup"],
        price: "13499 - 22999",
        delivery: "7-10 days",
        bestFor: "YouTubers, video marketers, businesses with video content",
      },
      {
        title: "International SEO",
        description: "Optimize websites for global markets and multi-language SEO.",
        features: ["Multilingual content optimization", "International keyword research", "Geo-targeting setup"],
        price: "22999 - 42999",
        delivery: "14-21 days",
        bestFor: "International businesses, multilingual websites",
      },
      {
        title: "SEO for Blogs",
        description: "Optimize blog posts to increase traffic and ranking.",
        features: ["Blog post SEO audit", "Keyword targeting for blogs", "Internal linking for blog posts"],
        price: "11499 - 19499",
        delivery: "5-7 days",
        bestFor: "Bloggers, content marketers",
      },
      {
        title: "Voice Search SEO Optimization",
        description: "Prepare your site for voice search queries.",
        features: ["Natural language keyword targeting", "Content restructuring for voice search", "FAQ page optimization"],
        price: "13499 - 22999",
        delivery: "7-10 days",
        bestFor: "Businesses with voice-search traffic",
      },
      {
        title: "SEO for Startups",
        description: "Create an SEO strategy tailored for new businesses and startups.",
        features: ["Market and competitor research", "SEO goal setting and planning", "Local SEO optimization"],
        price: "14499 - 25999",
        delivery: "7-10 days",
        bestFor: "New startups, emerging businesses",
      },
      {
        title: "SEO for Enterprises",
        description: "Large-scale SEO solutions for enterprise-level websites.",
        features: ["Custom SEO strategy for large websites", "Technical SEO fixes for scalability", "Analytics and performance tracking for enterprises"],
        price: "29999 - 49999",
        delivery: "30-45 days",
        bestFor: "Enterprises, large-scale businesses",
      },
    ];
    
    const SeoConsulting = () => {
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
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">SEO Consulting</h2>
                <CurrencySelect onCurrencyChange={setCurrency} defaultCurrency="NPR" />
              </motion.div>
    
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {seoConsultingServices.map((service, index) => (
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
    
    export default SeoConsulting;
