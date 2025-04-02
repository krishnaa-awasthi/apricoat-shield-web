
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll respond shortly.",
      });
      setName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <main>
      <HeroSection
        title="Contact Apricoat Insurances"
        subtitle="Get in touch with our team of insurance experts. We're here to answer your questions and provide the solutions you need."
        buttonText=""
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-apricoat-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-700 mb-8">
                Have questions about our insurance services? Need a quote? Or simply want to learn more about how we can help protect what matters most to you? Fill out the form, and our team will get back to you promptly.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Insurance Type</Label>
                    <Select
                      value={subject}
                      onValueChange={setSubject}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select insurance type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="marine">Marine Insurance</SelectItem>
                        <SelectItem value="fire">Fire Insurance</SelectItem>
                        <SelectItem value="property">Property Insurance</SelectItem>
                        <SelectItem value="liability">Liability Insurance</SelectItem>
                        <SelectItem value="business">Business Insurance</SelectItem>
                        <SelectItem value="life">Life Insurance</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us how we can help you..."
                    rows={5}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-apricoat-700 hover:bg-apricoat-800"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
            
            <div>
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-apricoat-900 mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-apricoat-100 p-3 rounded-full mr-4 text-apricoat-700">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-apricoat-900 mb-1">Our Office</h4>
                      <p className="text-gray-700">
                        123 Insurance Avenue<br />
                        Business District<br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-coral-100 p-3 rounded-full mr-4 text-coral-700">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-apricoat-900 mb-1">Phone</h4>
                      <p className="text-gray-700">
                        Main: +1 (555) 123-4567<br />
                        Customer Service: +1 (555) 987-6543<br />
                        Claims: +1 (555) 456-7890
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-apricoat-100 p-3 rounded-full mr-4 text-apricoat-700">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-apricoat-900 mb-1">Email</h4>
                      <p className="text-gray-700">
                        General Inquiries: info@apricoat.com<br />
                        Customer Support: support@apricoat.com<br />
                        Claims: claims@apricoat.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-coral-100 p-3 rounded-full mr-4 text-coral-700">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-apricoat-900 mb-1">Business Hours</h4>
                      <p className="text-gray-700">
                        Monday - Friday: 9:00 AM - 5:30 PM<br />
                        Saturday: 10:00 AM - 2:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 h-80 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304903!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1651692632347!5m2!1sen!2s" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Apricoat Insurance Office Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-apricoat-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-700">
              Find answers to common questions about our insurance services. If you can't find what you're looking for, please contact us.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                question: "How do I file a claim?",
                answer: "You can file a claim by calling our dedicated claims hotline at +1 (555) 456-7890, through your online account, or by emailing claims@apricoat.com. Our claims team is available 24/7 to assist you."
              },
              {
                question: "How long does it take to process a claim?",
                answer: "Most claims are processed within 5-7 business days. Complex claims may take longer. Our team will keep you updated throughout the process and work to resolve your claim as quickly as possible."
              },
              {
                question: "Can I customize my insurance policy?",
                answer: "Yes, we offer flexible insurance solutions that can be tailored to your specific needs. Our insurance specialists will work with you to create a customized policy that provides the right coverage at the right price."
              },
              {
                question: "How can I get a quote for insurance?",
                answer: "You can request a quote by filling out the contact form on this page, calling our office, or using the 'Get a Quote' button on our website. One of our insurance experts will then contact you to discuss your needs."
              },
              {
                question: "Are there discounts available for multiple policies?",
                answer: "Yes, we offer multi-policy discounts when you bundle different types of insurance with us. This can result in significant savings on your premiums while ensuring comprehensive coverage."
              },
              {
                question: "How do I make changes to my existing policy?",
                answer: "You can make changes to your policy by contacting your assigned insurance agent directly or by calling our customer service team. Policy changes can often be made the same day they are requested."
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                <h4 className="text-lg font-semibold text-apricoat-900 mb-3">
                  {faq.question}
                </h4>
                <p className="text-gray-700">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
