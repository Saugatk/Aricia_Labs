import { useState } from "react";
    import Navbar from "@/components/Navbar";
    import { motion } from "framer-motion";
    import { Button } from "@/components/ui/button";
    import { Input } from "@/components/ui/input";
    import { useToast } from "@/components/ui/use-toast";
    import { useNavigate } from "react-router-dom";
    
    const Admin = () => {
      const [username, setUsername] = useState("");
      const [password, setPassword] = useState("");
      const { toast } = useToast();
      const navigate = useNavigate();
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (username === "admin" && password === "password") {
          toast({
            title: "Login Successful",
            description: "Welcome, Admin!",
          });
          navigate("/admin/dashboard");
        } else {
          toast({
            title: "Login Failed",
            description: "Invalid username or password.",
            variant: "destructive",
          });
        }
      };
    
      return (
        <div className="min-h-screen">
          <Navbar />
          <section className="py-24 bg-white">
            <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-8"
              >
                <h2 className="text-3xl font-bold text-gray-900">Admin Login</h2>
              </motion.div>
    
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Login
                  </Button>
                </form>
              </motion.div>
            </div>
          </section>
        </div>
      );
    };
    
    export default Admin;
