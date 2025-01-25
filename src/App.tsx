import { Toaster } from "@/components/ui/toaster";
    import { Toaster as Sonner } from "@/components/ui/sonner";
    import { TooltipProvider } from "@/components/ui/tooltip";
    import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
    import { BrowserRouter, Routes, Route } from "react-router-dom";
    import Index from "./pages/Index";
    import Services from "./pages/Services";
    import About from "./pages/About";
    import Contact from "./pages/Contact";
    import Blog from "./pages/Blog";
    import Pricing from "./pages/Pricing";
    import Admin from "./pages/Admin";
    import WebDevelopment from "./pages/WebDevelopment";
    import SeoConsulting from "./pages/SeoConsulting";
    import SaasSolution from "./pages/SaasSolution";
    import GraphicDesign from "./pages/GraphicDesign";
    import Support from "./pages/Support";
    import Translation from "./pages/Translation";
    import BusinessGrowth from "./pages/BusinessGrowth";
    import AdminDashboard from "./pages/AdminDashboard";
    import { Facebook, Github, Instagram } from "lucide-react";
    
    const queryClient = new QueryClient();
    
    const App = () => (
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/web-development" element={<WebDevelopment />} />
              <Route path="/seo-consulting" element={<SeoConsulting />} />
              <Route path="/saas-solution" element={<SaasSolution />} />
              <Route path="/graphic-design" element={<GraphicDesign />} />
              <Route path="/support" element={<Support />} />
              <Route path="/translation" element={<Translation />} />
              <Route path="/business-growth" element={<BusinessGrowth />} />
            </Routes>
          </BrowserRouter>
          <footer className="bg-background text-muted-foreground py-4 text-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
              <p className="text-sm">© {new Date().getFullYear()} AriciaLabs. All rights reserved.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </footer>
        </TooltipProvider>
      </QueryClientProvider>
    );
    
    export default App;
