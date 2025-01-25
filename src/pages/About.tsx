import Navbar from "@/components/Navbar";
    import { motion } from "framer-motion";
    import { Users, Award, Clock } from "lucide-react";
    
    const About = () => {
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
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4"
                >
                  About AriciaLabs
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-xl text-gray-600 max-w-3xl mx-auto"
                >
                  Welcome to AriciaLabs, where innovation meets results! We are your trusted IT solutions and digital growth partner, committed to turning your business goals into reality. At AriciaLabs, we don’t just build websites, apps, or strategies—we create opportunities for your business to thrive in today’s competitive world.
                </motion.p>
              </motion.div>
    
              <div className="mb-16">
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-2xl font-semibold text-gray-900 mb-4"
                >
                  Who We Are
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-gray-600 max-w-3xl mx-auto mb-8"
                >
                  At the core of AriciaLabs is a team of passionate innovators, designers, and strategists dedicated to empowering businesses like yours. We believe every business has unique potential, and we make it our mission to unlock it through tailored solutions that drive results.
                </motion.p>
    
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="text-2xl font-semibold text-gray-900 mb-4"
                >
                  What Sets Us Apart
                </motion.h3>
                <motion.ul
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="list-decimal list-inside space-y-2 text-gray-600 max-w-3xl mx-auto mb-8"
                >
                  <li>
                    <span className="font-semibold">Your Vision, Our Expertise:</span>
                    We listen, understand, and align with your goals to deliver solutions that truly resonate with your vision.
                  </li>
                  <li>
                    <span className="font-semibold">Human-Centric Approach:</span>
                    We know your customers are at the heart of your business. Our solutions are designed to connect with them on an emotional level, building trust and loyalty.
                  </li>
                  <li>
                    <span className="font-semibold">Result-Driven Strategy:</span>
                    From cutting-edge websites to advanced marketing campaigns, we focus on delivering measurable results that accelerate your growth.
                  </li>
                  <li>
                    <span className="font-semibold">24/7 Support:</span>
                    Your success is our priority. We’re here to guide you every step of the way, ensuring a seamless experience.
                  </li>
                </motion.ul>
    
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="text-2xl font-semibold text-gray-900 mb-4"
                >
                  Why Choose AriciaLabs?
                </motion.h3>
                <motion.ul
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="list-disc list-inside space-y-2 text-gray-600 max-w-3xl mx-auto mb-8"
                >
                  <li><span className="font-semibold">Tailored Solutions:</span> No cookie-cutter approaches—everything we do is customized to fit your needs.</li>
                  <li><span className="font-semibold">Affordable Excellence:</span> High-quality services designed to deliver maximum ROI without breaking the bank.</li>
                  <li><span className="font-semibold">Innovation and Creativity:</span> We blend technology with creativity to craft solutions that stand out.</li>
                  <li><span className="font-semibold">Trust and Transparency:</span> Our partnership is built on open communication and mutual trust.</li>
                </motion.ul>
    
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="text-2xl font-semibold text-gray-900 mb-4"
                >
                  Our Mission
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  className="text-gray-600 max-w-3xl mx-auto mb-8"
                >
                  To empower businesses worldwide by leveraging technology and creativity, helping them achieve lasting growth, and making them leaders in their industries.
                </motion.p>
    
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                  className="text-2xl font-semibold text-gray-900 mb-4"
                >
                  Our Vision
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="text-gray-600 max-w-3xl mx-auto mb-8"
                >
                  To become a global leader in IT solutions and digital transformation by delivering value-driven services that inspire success and innovation.
                </motion.p>
    
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.3 }}
                  className="text-2xl font-semibold text-gray-900 mb-4"
                >
                  Our Promise
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                  className="text-gray-600 max-w-3xl mx-auto mb-8"
                >
                  At AriciaLabs, your success is our success. We promise to deliver not just services but a meaningful partnership that propels your business to new heights.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                  className="text-xl text-gray-600 max-w-3xl mx-auto"
                >
                  Let’s build something amazing together. 💡
                </motion.p>
              </div>
    
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-center p-6"
                >
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                  <p className="text-gray-600">
                    Our team brings years of experience in IT and e-commerce solutions.
                  </p>
                </motion.div>
    
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-center p-6"
                >
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Quality Service</h3>
                  <p className="text-gray-600">
                    We pride ourselves on delivering high-quality solutions that exceed expectations.
                  </p>
                </motion.div>
    
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-center p-6"
                >
                  <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                  <p className="text-gray-600">
                    Round-the-clock support to ensure your business runs smoothly.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>
        </div>
      );
    };
    
    export default About;
