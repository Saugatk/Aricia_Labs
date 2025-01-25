import Navbar from "@/components/Navbar";
    import { motion } from "framer-motion";
    import { Button } from "@/components/ui/button";
    
    const AdminDashboard = () => {
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
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">AriciaLabs Admin Dashboard</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Manage Everything with Ease
                </p>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
                  Welcome to the AriciaLabs Admin Panel! As the administrator, you have full control over every aspect of your website. From updating content to managing services, blogs, and media, you can customize and optimize your site in real-time. Use the following features to maintain a seamless user experience:
                </p>
              </motion.div>
    
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-center p-6"
                >
                  <h3 className="text-xl font-semibold mb-2">Manage Pages</h3>
                  <p className="text-gray-600">
                    Here you can manage all the pages.
                  </p>
                  <Button onClick={() => alert("Manage Pages")}>Manage Pages</Button>
                </motion.div>
    
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-center p-6"
                >
                  <h3 className="text-xl font-semibold mb-2">Manage Users</h3>
                  <p className="text-gray-600">
                    Here you can manage all the users.
                  </p>
                  <Button onClick={() => alert("Manage Users")}>Manage Users</Button>
                </motion.div>
    
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-center p-6"
                >
                  <h3 className="text-xl font-semibold mb-2">Manage Settings</h3>
                  <p className="text-gray-600">
                    Here you can manage all the settings.
                  </p>
                  <Button onClick={() => alert("Manage Settings")}>Manage Settings</Button>
                </motion.div>
              </div>
            </div>
          </section>
        </div>
      );
    };
    
    export default AdminDashboard;
