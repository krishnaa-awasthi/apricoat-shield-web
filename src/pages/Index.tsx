
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Anchor, BarChart3, Building, Flame, Shield, Ship } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const featuredServices = [
    {
      title: "Marine Insurance",
      description: "Comprehensive coverage for vessels, cargo, and marine operations protecting against risks at sea.",
      icon: <Ship className="h-8 w-8" />,
      link: "/services#marine",
    },
    {
      title: "Fire Insurance",
      description: "Protection for your property and assets against fire damage, ensuring financial security.",
      icon: <Flame className="h-8 w-8" />,
      link: "/services#fire",
    },
    {
      title: "Property Insurance",
      description: "Safeguard your commercial or residential property against various risks and damages.",
      icon: <Building className="h-8 w-8" />,
      link: "/services#property",
    },
    {
      title: "Business Insurance",
      description: "Tailored insurance solutions for businesses of all sizes, protecting against operational risks.",
      icon: <BarChart3 className="h-8 w-8" />,
      link: "/services#business",
    },
  ];

  const testimonials = [
    {
      name: "Michael Thompson",
      position: "CEO, ShipRight Ltd",
      content: "Apricoat's marine insurance has been a game-changer for our shipping company. Their expertise and quick claims processing have saved us time and money.",
      rating: 5,
    },
    {
      name: "Sarah Williams",
      position: "Property Manager",
      content: "I've been working with Apricoat for over 5 years for all our fire insurance needs. Their team provides excellent service and comprehensive coverage.",
      rating: 5,
    },
    {
      name: "David Chen",
      position: "Small Business Owner",
      content: "As a business owner, having reliable insurance is crucial. Apricoat understood my needs and provided the perfect coverage solution.",
      rating: 4,
    },
  ];

  return (
    <main>
      <HeroSection
        title="Protecting What Matters Most"
        subtitle="Specialized insurance solutions for marine, fire, and more. Get peace of mind with Apricoat's comprehensive coverage options."
        buttonText="Get a Quote"
        isHomepage={true}
      />

      {/* About Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1 animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-apricoat-900 mb-6">
                Trusted Insurance Partner Since 1995
              </h2>
              <p className="text-gray-700 mb-4">
                For over 25 years, Apricoat Insurances has been delivering tailored insurance solutions with a focus on marine and fire protection. We combine industry expertise with personalized service to ensure our clients receive the best coverage for their needs.
              </p>
              <p className="text-gray-700 mb-6">
                Our team of dedicated professionals works closely with each client to understand their unique risks and develop customized insurance strategies that provide comprehensive protection and peace of mind.
              </p>
              <Button asChild className="bg-apricoat-700 hover:bg-apricoat-800">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="bg-apricoat-100 absolute -bottom-4 -right-4 w-full h-full rounded-lg"></div>
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop"
                  alt="Apricoat Insurance Team"
                  className="rounded-lg relative w-full shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-apricoat-900 mb-4">
              Our Insurance Services
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We offer a wide range of insurance solutions to protect what matters most to you. From maritime operations to property protection, we've got you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-apricoat-700 hover:bg-apricoat-800">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-apricoat-900 mb-4">
              Why Choose Apricoat Insurances
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Discover the Apricoat difference with our expert team, tailored solutions, and commitment to exceptional service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-apricoat-50 p-8 rounded-lg border border-apricoat-100">
              <div className="bg-white p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 text-apricoat-700">
                <Shield className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-apricoat-900">
                Industry Expertise
              </h3>
              <p className="text-gray-700">
                Our specialists have decades of experience in marine and fire insurance, offering unmatched knowledge and insights.
              </p>
            </div>

            <div className="bg-apricoat-50 p-8 rounded-lg border border-apricoat-100">
              <div className="bg-white p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 text-coral-600">
                <Anchor className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-apricoat-900">
                Tailored Coverage
              </h3>
              <p className="text-gray-700">
                We develop customized insurance solutions that address your specific risks and requirements.
              </p>
            </div>

            <div className="bg-apricoat-50 p-8 rounded-lg border border-apricoat-100">
              <div className="bg-white p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 text-apricoat-700">
                <Shield className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-apricoat-900">
                Fast Claims Process
              </h3>
              <p className="text-gray-700">
                Our efficient claims handling ensures you receive prompt assistance when you need it most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-apricoat-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients about their experience with Apricoat Insurances.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                position={testimonial.position}
                content={testimonial.content}
                rating={testimonial.rating}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild className="bg-apricoat-700 hover:bg-apricoat-800">
              <Link to="/testimonials">View All Testimonials</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 hero-gradient text-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Protect What Matters Most?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Contact us today for a consultation and discover how our insurance solutions can provide you with peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-coral-600 hover:bg-coral-700 text-white" size="lg">
                <Link to="/contact">Get in Touch</Link>
              </Button>
              <Button asChild className="bg-white hover:bg-gray-100 text-apricoat-900" size="lg" variant="outline">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
