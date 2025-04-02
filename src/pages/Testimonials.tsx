
import HeroSection from "@/components/HeroSection";
import TestimonialCard from "@/components/TestimonialCard";
import ReviewForm from "@/components/ReviewForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Testimonials = () => {
  const testimonials = [
    {
      id: "all",
      items: [
        {
          name: "Michael Thompson",
          position: "CEO, ShipRight Ltd",
          content: "Apricoat's marine insurance has been a game-changer for our shipping company. Their expertise and quick claims processing have saved us time and money. The team is responsive and always available to answer our questions. I highly recommend their services to any maritime business.",
          rating: 5,
          category: "marine",
        },
        {
          name: "Sarah Williams",
          position: "Property Manager",
          content: "I've been working with Apricoat for over 5 years for all our fire insurance needs. Their team provides excellent service and comprehensive coverage that has protected our properties effectively. When we had a small fire incident last year, their claims process was smooth and supportive.",
          rating: 5,
          category: "fire",
        },
        {
          name: "David Chen",
          position: "Small Business Owner",
          content: "As a business owner, having reliable insurance is crucial. Apricoat understood my needs and provided the perfect coverage solution. Their business package covers all aspects of my operation, and their pricing is competitive and transparent.",
          rating: 4,
          category: "business",
        },
        {
          name: "Jennifer Garcia",
          position: "Logistics Director",
          content: "We've trusted Apricoat with our cargo insurance for over a decade. Their marine specialists truly understand the complexities of international shipping and have tailored a policy that gives us complete peace of mind. Their global network has been invaluable for claims in foreign ports.",
          rating: 5,
          category: "marine",
        },
        {
          name: "Robert Wilson",
          position: "Manufacturing Plant Manager",
          content: "After a thorough review of our fire insurance needs, Apricoat provided a comprehensive policy that addressed all our concerns. Their risk assessment team identified several improvements we could make to our facility, potentially saving us from a major disaster.",
          rating: 5,
          category: "fire",
        },
        {
          name: "Emily Johnson",
          position: "Retail Store Owner",
          content: "Apricoat's property insurance has been excellent for our retail locations. The coverage is comprehensive and the premiums are reasonable. What I appreciate most is how they take the time to explain everything in terms I can understand without insurance jargon.",
          rating: 4,
          category: "property",
        },
        {
          name: "James Rodriguez",
          position: "Construction Company Owner",
          content: "Working in construction comes with significant liability concerns. Apricoat's liability insurance package has been a perfect fit for our business, providing coverage for all aspects of our operations and giving us confidence when taking on new projects.",
          rating: 5,
          category: "liability",
        },
        {
          name: "Linda Chang",
          position: "Financial Advisor",
          content: "I recommend Apricoat to many of my clients for their life insurance needs. Their policies offer excellent value and their underwriting process is efficient. The team is knowledgeable and patient, taking time to explain complex policy details to my clients.",
          rating: 4,
          category: "life",
        },
        {
          name: "Thomas Brown",
          position: "Fleet Manager",
          content: "Managing a large fleet of delivery vehicles requires comprehensive insurance. Apricoat's commercial auto policies provide the protection we need with competitive rates. Their claims handling is prompt and fair, minimizing downtime for our operations.",
          rating: 4,
          category: "business",
        },
      ],
    },
  ];

  const categories = [
    { id: "all", label: "All Reviews" },
    { id: "marine", label: "Marine Insurance" },
    { id: "fire", label: "Fire Insurance" },
    { id: "business", label: "Business Insurance" },
    { id: "property", label: "Property Insurance" },
    { id: "liability", label: "Liability Insurance" },
    { id: "life", label: "Life Insurance" },
  ];

  // Get all testimonials
  const allTestimonials = testimonials[0].items;

  return (
    <main>
      <HeroSection
        title="Client Testimonials"
        subtitle="Discover what our clients say about their experience with Apricoat Insurances. Read reviews and share your own feedback."
        buttonText=""
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-apricoat-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-gray-700">
              We take pride in providing exceptional insurance solutions and service to our clients. Read their experiences and see why they choose Apricoat Insurances.
            </p>
          </div>

          <Tabs defaultValue="all" className="mb-20">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-gray-100 p-1">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="data-[state=active]:bg-white data-[state=active]:text-apricoat-900"
                  >
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.id === "all"
                    ? allTestimonials.map((testimonial, index) => (
                        <TestimonialCard
                          key={index}
                          name={testimonial.name}
                          position={testimonial.position}
                          content={testimonial.content}
                          rating={testimonial.rating}
                        />
                      ))
                    : allTestimonials
                        .filter((t) => t.category === category.id)
                        .map((testimonial, index) => (
                          <TestimonialCard
                            key={index}
                            name={testimonial.name}
                            position={testimonial.position}
                            content={testimonial.content}
                            rating={testimonial.rating}
                          />
                        ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-bold text-apricoat-900 mb-6">
                Share Your Experience
              </h3>
              <p className="text-gray-700 mb-6">
                At Apricoat Insurances, we value your feedback. If you're a current or past client, we'd love to hear about your experience with our services. Your testimonial helps us improve and helps other potential clients make informed decisions.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h4 className="text-lg font-semibold text-apricoat-900 mb-3">
                  Why Share Your Review?
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="bg-apricoat-100 text-apricoat-700 rounded-full h-5 w-5 flex items-center justify-center text-sm mr-2 mt-0.5">
                      ✓
                    </span>
                    Help others find the right insurance solution
                  </li>
                  <li className="flex items-start">
                    <span className="bg-apricoat-100 text-apricoat-700 rounded-full h-5 w-5 flex items-center justify-center text-sm mr-2 mt-0.5">
                      ✓
                    </span>
                    Provide valuable feedback to our team
                  </li>
                  <li className="flex items-start">
                    <span className="bg-apricoat-100 text-apricoat-700 rounded-full h-5 w-5 flex items-center justify-center text-sm mr-2 mt-0.5">
                      ✓
                    </span>
                    Share your success story
                  </li>
                  <li className="flex items-start">
                    <span className="bg-apricoat-100 text-apricoat-700 rounded-full h-5 w-5 flex items-center justify-center text-sm mr-2 mt-0.5">
                      ✓
                    </span>
                    Recognize our team members who provided exceptional service
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <ReviewForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Testimonials;
