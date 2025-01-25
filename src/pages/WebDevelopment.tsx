import Navbar from "@/components/Navbar";
    import { motion } from "framer-motion";
    import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
    import CurrencySelect from "@/components/ui/currency-select";
    import { formatCurrency, currencyRates } from "@/lib/utils";
    import React from "react";
    
    const webDevelopmentServices = [
      {
        title: "Blog/Personal Website",
        description: "Perfect for individuals sharing articles, ideas, or personal branding.",
        features: ["Home, About, Blog posts, Contact", "Simple CMS for blog posts", "SEO optimization", "Mobile responsive design"],
        price: "15999 - 25999",
        delivery: "4-6 days",
        bestFor: "Bloggers, writers, personal brands",
      },
      {
        title: "Portfolio Website",
        description: "Showcase work for professionals like freelancers, designers, developers, or artists.",
        features: ["Interactive project showcase", "Modern animations", "Responsive gallery", "Contact form integration"],
        price: "20999 - 35999",
        delivery: "5-7 days",
        bestFor: "Freelancers, artists, professionals",
      },
      {
        title: "E-commerce Website",
        description: "Full-featured online store with product management and secure payments.",
        features: ["Product catalog with search", "Shopping cart and checkout", "Payment gateway integration", "Admin dashboard"],
        price: "35999 - 80999",
        delivery: "14-21 days",
        bestFor: "Online retailers, small businesses",
      },
      {
        title: "Dynamic Website",
        description: "Interactive websites with real-time updates and data processing.",
        features: ["Database integration", "Real-time updates", "User dashboard", "API integration"],
        price: "40999 - 70999",
        delivery: "10-14 days",
        bestFor: "Data-driven businesses",
      },
      {
        title: "Educational Website",
        description: "Learning platform for schools, training centers, or online courses.",
        features: ["Course management", "Student dashboard", "Video integration", "Progress tracking"],
        price: "55999 - 100999",
        delivery: "14-21 days",
        bestFor: "Schools, training institutes",
      },
      {
        title: "Event/Booking Website",
        description: "Appointment and event booking system with calendar integration.",
        features: ["Online booking system", "Calendar integration", "Payment processing", "Admin dashboard"],
        price: "35999 - 60999",
        delivery: "10-14 days",
        bestFor: "Event planners, service providers",
      },
      {
        title: "Business Website",
        description: "Professional website for companies to showcase services and build trust.",
        features: ["Service showcase", "Team profiles", "Blog integration", "Contact forms"],
        price: "25999 - 45999",
        delivery: "7-10 days",
        bestFor: "Small to medium businesses",
      },
      {
        title: "Real Estate Website",
        description: "Property listing and management platform.",
        features: ["Property listings", "Search filters", "Admin dashboard", "Inquiry system"],
        price: "40999 - 75999",
        delivery: "14-21 days",
        bestFor: "Real estate agencies",
      },
      {
        title: "Custom Web Application",
        description: "Tailored applications for specific client needs.",
        features: ["Custom user interfaces", "Database integration", "API integration", "Real-time updates"],
        price: "45999 - 85999",
        delivery: "14-21 days",
        bestFor: "Businesses needing unique functionalities",
      },
      {
        title: "Multi-Language Website",
        description: "Websites with multiple languages to reach global audiences.",
        features: ["Language switching feature", "Multi-lingual content management", "SEO optimization for different languages"],
        price: "35999 - 60999",
        delivery: "10-15 days",
        bestFor: "International businesses, NGOs",
      },
      {
        title: "Social Media Integration",
        description: "Connect websites with social media accounts and feeds.",
        features: ["Social media feed integration", "Sharing buttons and features", "Custom social media widgets"],
        price: "15999 - 25999",
        delivery: "4-7 days",
        bestFor: "Brands, influencers, businesses",
      },
      {
        title: "Landing Page for Campaigns",
        description: "Optimized landing pages for marketing campaigns or promotions.",
        features: ["High-conversion layout", "Call-to-action buttons", "Form integrations for lead generation"],
        price: "12999 - 20999",
        delivery: "3-5 days",
        bestFor: "Marketers, small businesses",
      },
      {
        title: "Content Management System (CMS) Website",
        description: "Fully managed websites with easy-to-use CMS.",
        features: ["Easy content management", "Custom themes", "SEO tools integration"],
        price: "25999 - 40999",
        delivery: "7-10 days",
        bestFor: "Bloggers, businesses, marketers",
      },
      {
        title: "Mobile App Landing Page",
        description: "Landing page for mobile apps to increase downloads and visibility.",
        features: ["App features showcase", "User testimonials", "App download links integration"],
        price: "15999 - 22999",
        delivery: "5-7 days",
        bestFor: "App developers, startups",
      },
      {
        title: "Job Portal Website",
        description: "Platform for job seekers and employers to connect.",
        features: ["Job listing and application system", "Resume upload feature", "Employer dashboard", "Search filters"],
        price: "45999 - 80999",
        delivery: "14-21 days",
        bestFor: "Recruitment agencies, job boards",
      },
      {
        title: "News Website",
        description: "Content-heavy website for news, media, or blog outlets.",
        features: ["Article publishing", "Comments and ratings system", "User registration", "Media gallery"],
        price: "35999 - 60999",
        delivery: "10-15 days",
        bestFor: "News outlets, bloggers",
      },
      {
        title: "Non-profit Website",
        description: "Website for NGOs and charities to promote their mission.",
        features: ["Donation integration", "Events calendar", "Volunteer registration", "About us and contact pages"],
        price: "25999 - 45999",
        delivery: "7-10 days",
        bestFor: "Charities, NGOs",
      },
      {
        title: "Forum/Community Website",
        description: "Build a space for discussions, forums, or online communities.",
        features: ["User profile management", "Post and comment features", "Moderation tools", "Categories and tags"],
        price: "35999 - 60999",
        delivery: "10-14 days",
        bestFor: "Communities, hobby groups",
      },
      {
        title: "Restaurant/Bar Website",
        description: "Perfect for showcasing menus, reservations, and events.",
        features: ["Menu display with images", "Online reservation system", "Event calendar", "Google Maps integration"],
        price: "25999 - 45999",
        delivery: "7-10 days",
        bestFor: "Restaurants, cafes, bars",
      },
      {
        title: "Subscription-based Website",
        description: "Platform for content creators to monetize via subscriptions.",
        features: ["Subscription management", "Content protection (members-only areas)", "Payment processing", "User profiles"],
        price: "40999 - 75999",
        delivery: "14-21 days",
        bestFor: "Content creators, educational platforms",
      },
    ];
    
    const WebDevelopment = () => {
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
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Web Development</h2>
                <CurrencySelect onCurrencyChange={setCurrency} defaultCurrency="NPR" />
              </motion.div>
    
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {webDevelopmentServices.map((service, index) => (
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
    
    export default WebDevelopment;
