import Navbar from "@/components/Navbar";
    import { motion } from "framer-motion";
    import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
    
    const Support = () => {
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
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
                  Introducing 24/7 Support for Your Website
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Ensure uninterrupted performance and quick resolution with our round-the-clock support.
                  Perfect for businesses and individuals who value reliability and peace of mind.
                </p>
              </motion.div>
    
              <div className="mb-16">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Benefits of 24/7 Support</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>
                    <span className="font-semibold">Uninterrupted Website Performance:</span>
                    Quickly resolve technical issues, minimizing downtime and ensuring seamless user experiences.
                  </li>
                  <li>
                    <span className="font-semibold">Enhanced Security:</span>
                    Proactive monitoring to detect and resolve security threats in real time.
                  </li>
                  <li>
                    <span className="font-semibold">Priority Assistance:</span>
                    Immediate help whenever you need it, ensuring business-critical services stay operational.
                  </li>
                  <li>
                    <span className="font-semibold">Stress-Free Maintenance:</span>
                    Focus on your business while we handle updates, bug fixes, and troubleshooting.
                  </li>
                  <li>
                    <span className="font-semibold">Increased Customer Trust:</span>
                    Provide a reliable experience to your clients and users with guaranteed support.
                  </li>
                </ul>
              </div>
    
              <div className="mb-16">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Pricing for 24/7 Support</h3>
                <h4 className="text-xl font-semibold text-gray-700 mb-2">Subscription Plans</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>
                    <span className="font-semibold">Basic Support (Business Hours, Free):</span>
                    Covers minor bug fixes and email/chat support from 9 AM to 5 PM.
                  </li>
                  <li>
                    <span className="font-semibold">Premium 24/7 Support:</span>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>रू2,999/month: Portfolio, Blog, or Personal Websites.</li>
                      <li>रू4,999/month: E-commerce, Dynamic, or Business Websites.</li>
                      <li>रू6,999+/month: Custom Applications, Educational Platforms, or High-Traffic Websites.</li>
                    </ul>
                  </li>
                </ul>
    
                <h4 className="text-xl font-semibold text-gray-700 mt-4 mb-2">Per-Incident Pricing</h4>
                <p className="text-gray-600 mb-2">For one-off support outside business hours:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li><span className="font-semibold">Minor Issues (Bug Fixes):</span> रू999/request.</li>
                  <li><span className="font-semibold">Critical Issues (Server Crashes, Payment Failures):</span> रू2499+/request.</li>
                </ul>
    
                <h4 className="text-xl font-semibold text-gray-700 mt-4 mb-2">Bundled with Premium Packages</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li><span className="font-semibold">Portfolio Website Premium Package:</span> रू4000–रू5000 extra, including 24/7 support.</li>
                  <li><span className="font-semibold">E-commerce Website Premium Package:</span> रू8000–रू10000 extra, including 24/7 support.</li>
                </ul>
    
                <h4 className="text-xl font-semibold text-gray-700 mt-4 mb-2">Special Offer for New Clients</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li><span className="font-semibold">First Month Free:</span> Try 24/7 support with your new website project at no extra cost.</li>
                  <li><span className="font-semibold">Loyalty Discount:</span> Get 20% off on annual subscriptions.</li>
                </ul>
              </div>
    
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center"
              >
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Your website is more than a digital presence—it’s a vital part of your brand and business.
                  With 24/7 support, you’ll have the peace of mind to focus on growth while we ensure your
                  website is always at its best. Whether it’s a minor tweak or a critical fix, we’re just a
                  message away—anytime, anywhere.
                </p>
              </motion.div>
            </div>
          </section>
        </div>
      );
    };
    
    export default Support;
