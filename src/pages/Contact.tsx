import Navbar from "@/components/Navbar";
    import { motion } from "framer-motion";
    import { Phone, Mail, MapPin } from "lucide-react";
    import { Button } from "@/components/ui/button";
    import { Input } from "@/components/ui/input";
    import { Textarea } from "@/components/ui/textarea";
    import { useToast } from "@/components/ui/use-toast";
    import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
    import { Checkbox } from "@/components/ui/checkbox";
    import { Label } from "@/components/ui/label";
    import React from "react";
    import {
      Dialog,
      DialogContent,
      DialogDescription,
      DialogHeader,
      DialogTitle,
      DialogTrigger,
    } from "@/components/ui/dialog";
    import { ScrollArea } from "@/components/ui/scroll-area";
    
    const Contact = () => {
      const { toast } = useToast();
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast({
          title: "Message sent!",
          description: "We'll get back to you as soon as possible.",
        });
      };
    
      const services = [
        "IT Solutions",
        "Web Development",
        "SEO Consulting",
        "SAAS Solution",
        "Graphic Design",
        "Digital Dropshipping",
        "24/7 Support",
        "Business Growth",
        "Translation",
      ];
    
      const contactMethods = [
        "Email",
        "Phone Call",
        "Whatsapp/Chat",
        "Zoom",
        "Personal Meeting",
        "Others",
      ];
    
      const howDidYouHearOptions = [
        "Social Media",
        "Referral",
        "Website/Search Engine",
        "Advertisement",
        "Other(Specify Text)",
      ];
    
      const [consent, setConsent] = React.useState(false);
      const [howDidYouHear, setHowDidYouHear] = React.useState("");
      const [otherText, setOtherText] = React.useState("");
    
      const handleHowDidYouHearChange = (value: string) => {
        setHowDidYouHear(value);
        if (value !== "Other(Specify Text)") {
          setOtherText("");
        }
      };
    
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
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Contact Us</h2>
                <p className="text-xl text-gray-600">Get in touch with our team</p>
              </motion.div>
    
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Input type="text" placeholder="Full Name" required />
                    </div>
                    <div>
                      <Input type="email" placeholder="Email Address" required />
                    </div>
                    <div>
                      <Input type="tel" placeholder="Phone Number (Optional)" />
                    </div>
                    <div>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Textarea placeholder="Description (Short)" className="min-h-[80px]" required />
                    </div>
                    <div>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Contact Method" />
                        </SelectTrigger>
                        <SelectContent>
                          {contactMethods.map((method) => (
                            <SelectItem key={method} value={method}>
                              {method}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Select onValueChange={handleHowDidYouHearChange}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="How did you hear about us?" />
                        </SelectTrigger>
                        <SelectContent>
                          {howDidYouHearOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {howDidYouHear === "Other(Specify Text)" && (
                        <Input
                          type="text"
                          placeholder="Please specify"
                          className="mt-2"
                          value={otherText}
                          onChange={(e) => setOtherText(e.target.value)}
                          required
                        />
                      )}
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" checked={consent} onCheckedChange={(checked) => setConsent(checked)} required />
                      <Label htmlFor="terms" className="text-sm">
                        I consent to the collection and use of my details as per the
                        <Dialog>
                          <DialogTrigger asChild>
                            <a href="#" className="underline">
                              Privacy Policy
                            </a>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Privacy Policy for AriciaLabs</DialogTitle>
                            </DialogHeader>
                            <DialogDescription>
                              <ScrollArea className="max-h-[400px] pr-2">
                                <p>
                                  Last Updated: 2025/01/02
                                </p>
                                <p>
                                  At AriciaLabs, we are committed to protecting your privacy and ensuring your personal information is handled securely and responsibly. This Privacy Policy outlines how we collect, use, and protect your data when you use our website and services.
                                </p>
                                <h4 className="font-semibold mt-4">1. Information We Collect</h4>
                                <p>We collect information to provide better services and improve your experience. The types of information we collect include:</p>
                                <h5 className="font-semibold mt-2">1.1. Information You Provide</h5>
                                <ul className="list-disc list-inside ml-4">
                                  <li><span className="font-semibold">Personal Information:</span> Name, email address, phone number, and any details provided via our contact forms.</li>
                                  <li><span className="font-semibold">Payment Information:</span> Billing address and payment details for service transactions (processed securely through third-party payment providers).</li>
                                  <li><span className="font-semibold">Project Details:</span> Information related to the services you request, such as project specifications or files uploaded.</li>
                                </ul>
                                <h5 className="font-semibold mt-2">1.2. Information We Automatically Collect</h5>
                                <ul className="list-disc list-inside ml-4">
                                  <li><span className="font-semibold">Device Information:</span> Browser type, operating system, and device details.</li>
                                  <li><span className="font-semibold">Usage Data:</span> IP address, pages visited, time spent on our website, and other analytics data collected via cookies or similar technologies.</li>
                                </ul>
                                <h5 className="font-semibold mt-2">1.3. Information from Third Parties</h5>
                                <ul className="list-disc list-inside ml-4">
                                  <li>Data from social media platforms or other sources when you interact with our accounts or ads.</li>
                                </ul>
                                <h4 className="font-semibold mt-4">2. How We Use Your Information</h4>
                                <p>We use the collected information to:</p>
                                <ul className="list-decimal list-inside ml-4">
                                  <li>Provide and manage our services.</li>
                                  <li>Respond to inquiries and customer support requests.</li>
                                  <li>Process payments and deliver services.</li>
                                  <li>Improve our website functionality and user experience.</li>
                                  <li>Send updates, newsletters, or promotional offers (only with your explicit consent).</li>
                                  <li>Comply with legal obligations and prevent fraud.</li>
                                </ul>
                                <h4 className="font-semibold mt-4">3. How We Share Your Information</h4>
                                <p>We do not sell, trade, or rent your personal information. However, we may share your information in the following circumstances:</p>
                                <ul className="list-decimal list-inside ml-4">
                                  <li><span className="font-semibold">Service Providers:</span> Trusted third parties who help us deliver our services, such as payment processors and hosting providers.</li>
                                  <li><span className="font-semibold">Legal Compliance:</span> When required by law or to protect our legal rights.</li>
                                  <li><span className="font-semibold">Business Transfers:</span> In the event of a merger, sale, or acquisition, your information may be transferred as part of the business assets.</li>
                                </ul>
                                <h4 className="font-semibold mt-4">4. Data Security</h4>
                                <p>We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, or disclosure. This includes:</p>
                                <ul className="list-disc list-inside ml-4">
                                  <li>SSL encryption for data transmission.</li>
                                  <li>Secure servers and firewalls.</li>
                                  <li>Regular audits of our security practices.</li>
                                </ul>
                                <h4 className="font-semibold mt-4">5. Your Rights</h4>
                                <p>You have the following rights regarding your personal data:</p>
                                <ul className="list-decimal list-inside ml-4">
                                  <li><span className="font-semibold">Access and Correction:</span> Request a copy of your data and correct inaccuracies.</li>
                                  <li><span className="font-semibold">Data Portability:</span> Receive your data in a structured, machine-readable format.</li>
                                  <li><span className="font-semibold">Deletion:</span> Request the deletion of your personal data, subject to legal obligations.</li>
                                  <li><span className="font-semibold">Consent Withdrawal:</span> Opt-out of marketing communications at any time.</li>
                                </ul>
                                <p>To exercise your rights, please contact us at [insert email address].</p>
                                <h4 className="font-semibold mt-4">6. Cookies and Tracking Technologies</h4>
                                <p>We use cookies and similar tracking technologies to enhance your browsing experience. You can manage your cookie preferences through your browser settings. For more details, please see our Cookie Policy.</p>
                                <h4 className="font-semibold mt-4">7. Third-Party Links</h4>
                                <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. Please review their policies before sharing any information.</p>
                                <h4 className="font-semibold mt-4">8. Data Retention</h4>
                                <p>We retain your data only as long as necessary to fulfill the purposes outlined in this policy or comply with legal requirements.</p>
                                <h4 className="font-semibold mt-4">9. International Data Transfers</h4>
                                <p>If you access our website from outside [Your Country], your data may be transferred and processed in countries with different data protection laws. We ensure such transfers comply with applicable legal requirements.</p>
                                <h4 className="font-semibold mt-4">10. Updates to This Privacy Policy</h4>
                                <p>We may update this Privacy Policy from time to time. The latest version will always be available on our website. We encourage you to review it periodically.</p>
                                <h4 className="font-semibold mt-4">11. Contact Us</h4>
                                <p>For questions or concerns about this Privacy Policy, please contact us at:</p>
                                <p>AriciaLabs</p>
                                <p>Email: [Karkiaaryan01@gmail.com]</p>
                                <p>Phone: [+9779844400856]</p>
                              </ScrollArea>
                            </DialogDescription>
                          </DialogContent>
                        </Dialog>
                      </Label>
                    </div>
                    <Button type="submit" className="w-full">Send Message</Button>
                  </form>
                </motion.div>
    
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="space-y-8"
                >
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-primary" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-primary" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-600">contact@aricialabs.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6 text-primary" />
                    <div>
                      <h3 className="font-semibold">Location</h3>
                      <p className="text-gray-600">Global Team - Available Worldwide</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </div>
      );
    };
    
    export default Contact;
