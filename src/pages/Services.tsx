
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Anchor, ArrowRight, BarChart3, Building, CreditCard, Flame, Heart, ShieldCheck, Ship, Umbrella, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      id: "marine",
      title: "Marine Insurance",
      description: "Our marine insurance solutions protect vessels, cargo, and other maritime interests against damage, loss, and liability risks associated with waterborne operations.",
      features: [
        "Hull and Machinery Coverage",
        "Cargo Insurance",
        "Marine Liability Coverage",
        "Freight Insurance",
        "Marine Pollution Liability",
      ],
      icon: <Ship className="h-10 w-10" />,
      image: "https://images.unsplash.com/photo-1518135714426-c18f5ffb6f4d?q=80&w=2071&auto=format&fit=crop",
    },
    {
      id: "fire",
      title: "Fire Insurance",
      description: "Our comprehensive fire insurance policies protect your property against losses caused by fire, lightning, explosions, and related perils, providing financial security in case of devastating events.",
      features: [
        "Building Coverage",
        "Contents Protection",
        "Business Interruption",
        "Additional Living Expenses",
        "Smoke Damage Coverage",
      ],
      icon: <Flame className="h-10 w-10" />,
      image: "https://images.unsplash.com/photo-1576473086800-c0019d4ffb27?q=80&w=1883&auto=format&fit=crop",
    },
    {
      id: "property",
      title: "Property Insurance",
      description: "Protect your commercial or residential property with our customized insurance solutions covering a wide range of risks beyond fire, including natural disasters, theft, and vandalism.",
      features: [
        "Commercial Property Coverage",
        "Residential Property Insurance",
        "Flood and Earthquake Protection",
        "Theft and Vandalism Coverage",
        "Equipment Breakdown",
      ],
      icon: <Building className="h-10 w-10" />,
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop",
    },
    {
      id: "liability",
      title: "Liability Insurance",
      description: "Our liability insurance protects individuals and businesses against claims resulting from injuries and damages to other people or property, covering legal costs and payouts for which the insured is found responsible.",
      features: [
        "General Liability Coverage",
        "Professional Liability Insurance",
        "Product Liability Protection",
        "Directors and Officers Coverage",
        "Umbrella Liability Policies",
      ],
      icon: <Umbrella className="h-10 w-10" />,
      image: "https://images.unsplash.com/photo-1585399000684-d2f72660f092?q=80&w=1971&auto=format&fit=crop",
    },
    {
      id: "business",
      title: "Business Insurance",
      description: "Our business insurance packages are tailored to meet the specific needs of your company, from small startups to large enterprises, providing protection against various operational risks.",
      features: [
        "Business Owner's Policy (BOP)",
        "Workers' Compensation",
        "Commercial Auto Insurance",
        "Cyber Liability Coverage",
        "Key Person Insurance",
      ],
      icon: <BarChart3 className="h-10 w-10" />,
      image: "https://images.unsplash.com/photo-1664575599618-8f6bd76fc670?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: "life",
      title: "Life Insurance",
      description: "Our life insurance policies provide financial protection to your loved ones in case of your untimely death, ensuring they maintain their quality of life and can meet financial obligations.",
      features: [
        "Term Life Insurance",
        "Whole Life Coverage",
        "Universal Life Policies",
        "Group Life Insurance",
        "Accidental Death Benefits",
      ],
      icon: <Heart className="h-10 w-10" />,
      image: "https://images.unsplash.com/photo-1559000357-f6b52ddfbe37?q=80&w=1974&auto=format&fit=crop",
    },
  ];

  return (
    <main>
      <HeroSection
        title="Our Insurance Services"
        subtitle="Explore our comprehensive range of insurance solutions designed to protect what matters most to you and your business."
        buttonText=""
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-apricoat-900 mb-6">
              Comprehensive Insurance Solutions
            </h2>
            <p className="text-gray-700">
              At Apricoat Insurances, we offer a wide range of insurance products tailored to meet the unique needs of individuals and businesses. Our specialized focus on marine and fire insurance is complemented by additional coverage options to provide complete protection.
            </p>
          </div>

          <div className="space-y-24">
            {services.map((service, index) => (
              <div 
                key={index} 
                id={service.id}
                className="scroll-mt-24 grid md:grid-cols-2 gap-12 items-center"
              >
                <div className={index % 2 === 0 ? "order-1" : "order-2"}>
                  <div className="bg-apricoat-50 p-3 inline-flex rounded-lg text-apricoat-700 mb-4">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-apricoat-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-700 mb-6">
                    {service.description}
                  </p>
                  <div className="mb-8">
                    <h4 className="font-semibold text-apricoat-800 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-coral-500 mr-2 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button asChild className="bg-apricoat-700 hover:bg-apricoat-800">
                    <Link to="/contact">Get a Quote</Link>
                  </Button>
                </div>
                <div className={index % 2 === 0 ? "order-2" : "order-1"}>
                  <div className="relative">
                    <div className="bg-apricoat-100 absolute -bottom-4 -right-4 w-full h-full rounded-lg"></div>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-lg relative w-full h-[350px] object-cover shadow-lg"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-apricoat-900 mb-6">
              Industry-Specific Solutions
            </h2>
            <p className="text-gray-700">
              We understand that different industries face unique risks. That's why we offer specialized insurance solutions tailored to your specific sector.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                industry: "Maritime & Shipping",
                description: "Specialized coverage for shipping companies, vessel operators, and maritime businesses.",
                icon: <Anchor className="h-8 w-8" />,
              },
              {
                industry: "Manufacturing",
                description: "Protection for manufacturing facilities, equipment, products, and operational liabilities.",
                icon: <Building className="h-8 w-8" />,
              },
              {
                industry: "Retail & Hospitality",
                description: "Insurance solutions for retail stores, restaurants, hotels, and service providers.",
                icon: <ShieldCheck className="h-8 w-8" />,
              },
              {
                industry: "Construction",
                description: "Coverage for builders, contractors, projects, and construction-related risks.",
                icon: <Building className="h-8 w-8" />,
              },
              {
                industry: "Professional Services",
                description: "Tailored insurance for consultants, advisors, and professional service firms.",
                icon: <Users className="h-8 w-8" />,
              },
              {
                industry: "Financial Institutions",
                description: "Specialized protection for banks, credit unions, and financial service providers.",
                icon: <CreditCard className="h-8 w-8" />,
              },
            ].map((item, index) => (
              <div key={index} className="service-card">
                <div className="mb-4 text-apricoat-600 bg-apricoat-50 p-3 inline-block rounded-lg">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-apricoat-900">
                  {item.industry}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 hero-gradient text-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need a Customized Insurance Solution?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Our expert team is ready to help you find the perfect coverage for your specific needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-coral-600 hover:bg-coral-700 text-white" size="lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button asChild className="bg-white hover:bg-gray-100 text-apricoat-900" size="lg" variant="outline">
                <Link to="/testimonials">Read Client Testimonials</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
