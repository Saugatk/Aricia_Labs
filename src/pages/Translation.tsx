import Navbar from "@/components/Navbar";
    import { motion } from "framer-motion";
    import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
    import React from "react";
    
    const translationServices = [
      {
        title: "Document Translation",
        description: "Accurate translation of business, legal, or personal documents.",
        features: ["Certified translation", "Formatting and layout preservation", "Proofreading and quality assurance"],
        price: "999 - 4499",
        delivery: "1-2 days",
        bestFor: "Legal documents, contracts, personal documents",
      },
      {
        title: "Website Translation",
        description: "Translate your website content to reach a global audience.",
        features: ["Multilingual page translation", "SEO-optimized content for different languages", "Mobile and desktop compatibility"],
        price: "8999 - 16999",
        delivery: "3-5 days",
        bestFor: "Businesses expanding internationally",
      },
      {
        title: "Certified Translation",
        description: "Official, certified translation services for documents needed for legal or governmental purposes.",
        features: ["Sworn certification", "Notarization if required", "Accuracy guarantee"],
        price: "2999 - 5499",
        delivery: "1-3 days",
        bestFor: "Legal, immigration, or government paperwork",
      },
      {
        title: "Subtitling & Captioning Services",
        description: "Translate and add subtitles or captions to videos.",
        features: ["Accurate subtitle translation", "Synchronization with video", "Customizable formats (SRT, VTT, etc.)"],
        price: "4999 - 8999 per minute of video",
        delivery: "3-7 days",
        bestFor: "Video content creators, businesses, educational institutions",
      },
      {
        title: "Audio Translation/Transcription",
        description: "Transcription and translation of audio or video content.",
        features: ["Transcription of audio or video", "Translation of transcripts into desired language", "Proofreading and review for accuracy"],
        price: "7499 - 12999 per hour of audio",
        delivery: "5-7 days",
        bestFor: "Podcasts, interviews, conference calls",
      },
      {
        title: "Business/Marketing Translation",
        description: "Translation of marketing materials, brochures, and business documents.",
        features: ["Brand tone adaptation", "Market-specific translation", "SEO-friendly translations for marketing campaigns"],
        price: "9999 - 18999 per 1,000 words",
        delivery: "5-7 days",
        bestFor: "International marketing campaigns, brands expanding globally",
      },
      {
        title: "E-Commerce Product Description Translation",
        description: "Translate product listings, reviews, and descriptions for e-commerce websites.",
        features: ["SEO-friendly product descriptions", "Localization of product features", "Accurate translation for global reach"],
        price: "4999 - 8999 per 1,000 words",
        delivery: "3-5 days",
        bestFor: "E-commerce businesses, Amazon sellers",
      },
      {
        title: "Legal Translation",
        description: "Specialized translation for contracts, patents, and legal documents.",
        features: ["Accuracy and legal terminology focus", "Certified legal translations", "Proofreading and notarization (if required)"],
        price: "6999 - 14999 per page",
        delivery: "3-5 days",
        bestFor: "Law firms, contracts, and legal departments",
      },
      {
        title: "Medical Translation",
        description: "Translation of medical and pharmaceutical documents with high accuracy.",
        features: ["Patient information leaflets", "Research papers and clinical trials", "Medical device manuals"],
        price: "8999 - 18499 per 1,000 words",
        delivery: "5-7 days",
        bestFor: "Healthcare professionals, pharmaceutical companies",
      },
      {
        title: "Technical Translation",
        description: "Translate manuals, instructions, and technical documents for precision.",
        features: ["Engineering, IT, or product manuals", "Instructional guides", "Scientific papers and reports"],
        price: "10999 - 20999 per 1,000 words",
        delivery: "7-10 days",
        bestFor: "Manufacturers, technical businesses",
      },
      {
        title: "Literary Translation",
        description: "Translate books, novels, poems, and other literary works with a focus on creativity.",
        features: ["Translations with preservation of tone, style, and context", "Proofreading and final review", "Localization for cultural context"],
        price: "15999 - 29999 per 1,000 words",
        delivery: "14-21 days",
        bestFor: "Authors, publishers, literary agencies",
      },
      {
        title: "Social Media Translation",
        description: "Translate posts, captions, and content for social media platforms.",
        features: ["Translating posts in the right tone for the target audience", "Localization for culture-specific content", "SEO optimization for social media keywords"],
        price: "2999 - 6499 per post",
        delivery: "1-3 days",
        bestFor: "Social media influencers, brands",
      },
      {
        title: "Multilingual Customer Support Translation",
        description: "Translate customer queries, responses, and FAQs for global support teams.",
        features: ["Live chat translation", "FAQ page translation", "Email and support ticket translations"],
        price: "6499 - 12999 per 1,000 words",
        delivery: "5-7 days",
        bestFor: "International support teams, e-commerce stores",
      },
      {
        title: "Mobile App Translation",
        description: "Localization and translation of mobile applications for different languages.",
        features: ["Interface and content translation", "Cultural adaptation for user experience", "App store description localization"],
        price: "12999 - 22999 per app screen",
        delivery: "7-10 days",
        bestFor: "Mobile app developers, startups",
      },
      {
        title: "Translation for Tourism & Hospitality",
        description: "Translate brochures, travel guides, and tourism-related content.",
        features: ["Tour guides and descriptions", "Localized travel itineraries", "Hotel and restaurant menus"],
        price: "5499 - 9999 per 1,000 words",
        delivery: "3-5 days",
        bestFor: "Travel agencies, tourism websites, hotels",
      },
      {
        title: "Press Release Translation",
        description: "Translate press releases and media kits for international distribution.",
        features: ["Localization of news content", "SEO-friendly translation for media outreach", "High-quality, accurate translation"],
        price: "6499 - 12999 per release",
        delivery: "3-5 days",
        bestFor: "PR agencies, businesses, media",
      },
      {
        title: "Certified Transcription and Translation",
        description: "Certified transcription and translation of official documents.",
        features: ["Legal and governmental certified translations", "Notarization if needed", "Accuracy guaranteed"],
        price: "8999 - 15999 per page",
        delivery: "5-7 days",
        bestFor: "Official documents, immigration agencies",
      },
      {
        title: "Real-Time Translation Services",
        description: "Live translation for meetings, conferences, or online calls.",
        features: ["In-person or virtual real-time translation", "Multilingual support for various events", "Customizable for any industry"],
        price: "14999 - 29999 per day",
        delivery: "On-demand",
        bestFor: "Conferences, meetings, online events",
      },
    ];
    
    const Translation = () => {
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
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Translation</h2>
                <CurrencySelect onCurrencyChange={setCurrency} defaultCurrency="NPR" />
              </motion.div>
    
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {translationServices.map((service, index) => (
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
                          <span className="font-semibold">Price:</span> {formatCurrency(Number(service.price.split(" - ")[0].replace(" per", "").replace(" per 1,000 words", "").replace(" per hour of audio", "").replace(" per app screen", "").replace(" per release", "").replace(" per page", "")), currency)} - {formatCurrency(Number(service.price.split(" - ")[1].replace(" per", "").replace(" per 1,000 words", "").replace(" per hour of audio", "").replace(" per app screen", "").replace(" per release", "").replace(" per page", "")), currency)}
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
    
    export default Translation;
