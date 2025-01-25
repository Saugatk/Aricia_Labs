import Navbar from "@/components/Navbar";
    import { motion } from "framer-motion";
    import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
    import CurrencySelect from "@/components/ui/currency-select";
    import { formatCurrency, currencyRates } from "@/lib/utils";
    import React from "react";
    
    const graphicDesignServices = [
      {
        title: "Logo Design",
        description: "Unique, professional logos tailored to your brand. Includes 3 design concepts and up to 2 revisions.",
        price: "4999",
        delivery: "3-5 days",
        bestFor: "Startups, businesses, personal branding",
      },
      {
        title: "Business Card Design",
        description: "Modern and professional business card designs, print-ready format. Includes 2 design options.",
        price: "1999",
        delivery: "2-3 days",
        bestFor: "Entrepreneurs, professionals",
      },
      {
        title: "Flyer/Brochure Design",
        description: "Eye-catching flyers or brochures in digital and print-ready formats.",
        price: "3999",
        delivery: "4-6 days",
        bestFor: "Events, promotions, marketing",
      },
      {
        title: "Social Media Post Design",
        description: "Custom designs for social media platforms like Instagram, Facebook, and LinkedIn.",
        price: "2499",
        delivery: "3-5 days",
        bestFor: "Social media influencers, businesses",
      },
      {
        title: "Banner Design",
        description: "High-quality digital or print banners for advertisements or events.",
        price: "3499",
        delivery: "3-5 days",
        bestFor: "Businesses, events",
      },
      {
        title: "Brand Identity Package",
        description: "Complete branding solution including logo, business card, letterhead, and social media kit.",
        price: "14999",
        delivery: "7-10 days",
        bestFor: "New businesses, startups",
      },
      {
        title: "Illustration Design",
        description: "Unique, hand-drawn or digital illustrations for websites, books, or branding.",
        price: "6999",
        delivery: "5-7 days",
        bestFor: "Books, websites, creative projects",
      },
      {
        title: "Packaging Design",
        description: "Attractive and professional packaging for products.",
        price: "7999",
        delivery: "7-10 days",
        bestFor: "Retail businesses, product launches",
      },
      {
        title: "Website UI/UX Design",
        description: "User-friendly and modern website design layouts tailored to your brand.",
        price: "12999",
        delivery: "10-14 days",
        bestFor: "Businesses, startups",
      },
      {
        title: "Ebook/Report Design",
        description: "Professionally designed layouts for ebooks, PDFs, or reports.",
        price: "4999",
        delivery: "4-6 days",
        bestFor: "Authors, businesses",
      },
      {
        title: "Menu Design",
        description: "Attractive and organized menus for restaurants, cafes, or bars.",
        price: "3999",
        delivery: "3-5 days",
        bestFor: "Restaurants, cafes",
      },
      {
        title: "Presentation Design",
        description: "Sleek and professional PowerPoint or Keynote templates.",
        price: "4499",
        delivery: "4-6 days",
        bestFor: "Corporate meetings, pitches",
      },
      {
        title: "Infographic Design",
        description: "Data-driven and visually engaging infographics.",
        price: "3999",
        delivery: "3-5 days",
        bestFor: "Marketing, blogs",
      },
      {
        title: "T-Shirt Design",
        description: "Custom T-shirt designs for events or businesses.",
        price: "2999",
        delivery: "2-4 days",
        bestFor: "Apparel businesses, events",
      },
      {
        title: "Album Cover Design",
        description: "Creative and high-quality album or podcast covers.",
        price: "3999",
        delivery: "3-5 days",
        bestFor: "Musicians, podcasters",
      },
      {
        title: "Poster Design",
        description: "Attention-grabbing posters for events, promotions, or campaigns.",
        price: "2999",
        delivery: "2-4 days",
        bestFor: "Events, marketing",
      },
      {
        title: "Resume/CV Design",
        description: "Modern, professional resume designs that stand out.",
        price: "1999",
        delivery: "2-3 days",
        bestFor: "Job seekers",
      },
      {
        title: "Magazine Layout Design",
        description: "Professional and creative layouts for magazines or newsletters.",
        price: "8999",
        delivery: "7-10 days",
        bestFor: "Publishers",
      },
      {
        title: "Photo Editing/Retouching",
        description: "High-quality photo editing and retouching services.",
        price: "1999 for up to 10 images",
        delivery: "2-3 days",
        bestFor: "Photographers, social media",
      },
      {
        title: "Advertisement Design",
        description: "Custom ad designs for print or digital platforms.",
        price: "4999",
        delivery: "3-5 days",
        bestFor: "Businesses, campaigns",
      },
    ];
    
    const GraphicDesign = () => {
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
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Graphic Design</h2>
                <CurrencySelect onCurrencyChange={setCurrency} defaultCurrency="NPR" />
              </motion.div>
    
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {graphicDesignServices.map((service, index) => (
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
                          <span className="font-semibold">Price:</span> {formatCurrency(Number(service.price), currency)}
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
    
    export default GraphicDesign;
