import { Button } from "./ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px)] bg-[size:40px] bg-[position:center] bg-[length:40px_40px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px] bg-[position:center] bg-[length:40px_40px]"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/5 backdrop-blur-sm rounded-full text-primary text-sm font-medium mb-4">
            Welcome to AriciaLabs
          </span>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary">
            Innovating Your
            <span className="relative whitespace-nowrap">
              <span className="relative"> Digital Future</span>
            </span>
          </h1>
          
          <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
            IT Solutions & Digital Dropshipping Tailored for Success. We help businesses transform their digital presence with cutting-edge technology and strategic solutions.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8 py-6"
              onClick={() => window.location.href = "/contact"}
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6"
              onClick={() => window.location.href = "/services"}
            >
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
