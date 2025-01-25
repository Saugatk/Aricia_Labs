import { motion } from "framer-motion";
    import { Code2, ShoppingCart, HeadphonesIcon, Rocket } from "lucide-react";
    import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
    import { Link } from "react-router-dom";
    import {
      DropdownMenu,
      DropdownMenuContent,
      DropdownMenuItem,
      DropdownMenuTrigger,
    } from "@/components/ui/dropdown-menu";
    
    const services = [
      {
        icon: Code2,
        title: "IT Solutions",
        description: "Custom web development, SaaS integration, and comprehensive IT support tailored to your needs.",
        subServices: [
          {
            title: "Web Development",
            path: "/web-development",
          },
          {
            title: "SEO Consulting",
            path: "/seo-consulting",
          },
          {
            title: "SAAS Solution",
            path: "/saas-solution",
          },
          {
            title: "Graphic Design",
            path: "/graphic-design",
          },
          {
            title: "Translation",
            path: "/translation",
          },
        ],
      },
      {
        icon: ShoppingCart,
        title: "Digital Dropshipping",
        description: "End-to-end e-commerce solutions, from store setup to product sourcing and marketing strategies.",
      },
      {
        icon: HeadphonesIcon,
        title: "24/7 Support",
        description: "Round-the-clock technical support and assistance to keep your business running smoothly.",
        path: "/support",
      },
      {
        icon: Rocket,
        title: "Business Growth",
        description: "Strategic consulting and growth planning to help scale your digital presence effectively.",
        path: "/business-growth",
      },
    ];
    
    export const ServicesSection = () => {
      return (
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-gray-900 sm:text-4xl"
              >
                Our Services
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-4 text-xl text-gray-600"
              >
                Comprehensive digital solutions for your business needs
              </motion.p>
            </div>
    
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full transition-all duration-300 hover:shadow-lg">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle>{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                      {service.subServices && service.title === "IT Solutions" ? (
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <button className="w-full text-left font-semibold hover:underline">
                              Explore IT Solutions
                            </button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            {service.subServices.map((subService) => (
                              <DropdownMenuItem key={subService.title}>
                                <Link to={subService.path} className="w-full">
                                  {subService.title}
                                </Link>
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      ) : service.path ? (
                        <Link to={service.path} className="mt-4 font-semibold hover:underline">
                          Learn More
                        </Link>
                      ) : null}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      );
    };
    
    export default ServicesSection;
