import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const blogPosts = [
  {
    title: "The Future of IT Solutions",
    date: "March 15, 2024",
    excerpt: "Exploring upcoming trends in technology and their impact on businesses.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    title: "Maximizing E-commerce Success",
    date: "March 10, 2024",
    excerpt: "Tips and strategies for growing your digital dropshipping business.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    title: "Digital Transformation Guide",
    date: "March 5, 2024",
    excerpt: "A comprehensive guide to transforming your business for the digital age.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
];

const Blog = () => {
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
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Latest Updates</h2>
            <p className="text-xl text-gray-600">Stay informed with our latest articles and insights</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover rounded-t-lg mb-4"
                    />
                    <CardTitle>{post.title}</CardTitle>
                    <div className="flex items-center text-gray-500 text-sm mt-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      {post.date}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{post.excerpt}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
