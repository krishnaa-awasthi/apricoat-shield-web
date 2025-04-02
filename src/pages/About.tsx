
import HeroSection from "@/components/HeroSection";
import { Briefcase, Users, Award, Target } from "lucide-react";

const About = () => {
  return (
    <main>
      <HeroSection
        title="About Apricoat Insurances"
        subtitle="Learn about our company, mission, and the dedicated team behind our insurance solutions."
        buttonText=""
      />

      {/* Company Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-apricoat-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-700 mb-4">
                Founded in 1995, Apricoat Insurances began as a specialized marine insurance provider, serving local shipping and maritime businesses. Over the decades, we have expanded our expertise to include fire insurance and a comprehensive range of other insurance solutions.
              </p>
              <p className="text-gray-700 mb-4">
                With headquarters in New York and offices across major coastal cities, we've built a reputation for excellence in the insurance industry. Our team of over 150 insurance professionals brings decades of collective experience to serve our diverse clientele.
              </p>
              <p className="text-gray-700">
                Today, Apricoat Insurances stands as a trusted partner for businesses and individuals seeking reliable insurance coverage, exceptional service, and expert guidance in navigating complex insurance needs.
              </p>
            </div>
            <div>
              <div className="relative">
                <div className="bg-coral-100 absolute -bottom-4 -left-4 w-full h-full rounded-lg"></div>
                <img
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop"
                  alt="Apricoat Office"
                  className="rounded-lg relative w-full shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-apricoat-900 mb-6">
              Our Mission and Values
            </h2>
            <p className="text-gray-700">
              At Apricoat Insurances, we're committed to providing peace of mind through comprehensive insurance solutions tailored to our clients' unique needs. Our approach is built on a foundation of expertise, integrity, and exceptional service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="bg-apricoat-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-apricoat-700">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-apricoat-900">
                Mission
              </h3>
              <p className="text-gray-700">
                To provide exceptional insurance solutions that protect our clients' assets and give them confidence to pursue their goals.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="bg-coral-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-coral-600">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-apricoat-900">
                Excellence
              </h3>
              <p className="text-gray-700">
                We strive for excellence in everything we do, from customer service to the insurance products we offer.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="bg-apricoat-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-apricoat-700">
                <Briefcase className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-apricoat-900">
                Integrity
              </h3>
              <p className="text-gray-700">
                We operate with transparency and honesty, building long-term relationships based on trust and reliability.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="bg-coral-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-coral-600">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-apricoat-900">
                Client Focus
              </h3>
              <p className="text-gray-700">
                We put our clients at the center of everything we do, tailoring solutions to meet their specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-apricoat-900 mb-6">
              Meet Our Leadership Team
            </h2>
            <p className="text-gray-700">
              Our experienced leadership team brings decades of insurance industry expertise to guide our company and serve our clients with distinction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Robert Mitchell",
                position: "Chief Executive Officer",
                bio: "With over 25 years in the insurance industry, Robert leads Apricoat with a focus on strategic growth and client service excellence.",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
              },
              {
                name: "Jennifer Lee",
                position: "Chief Operations Officer",
                bio: "Jennifer oversees our day-to-day operations, ensuring efficiency and quality in all aspects of our service delivery.",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
              },
              {
                name: "Marcus Johnson",
                position: "Head of Marine Insurance",
                bio: "Marcus specializes in marine insurance with particular expertise in cargo and vessel coverage for international shipping.",
                image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop",
              },
              {
                name: "Sophia Rodriguez",
                position: "Head of Fire Insurance",
                bio: "Sophia brings 15 years of experience in property insurance, leading our specialized fire insurance division.",
                image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1974&auto=format&fit=crop",
              },
              {
                name: "Daniel Wong",
                position: "Chief Financial Officer",
                bio: "Daniel manages our financial operations, ensuring Apricoat maintains its strong financial foundation.",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1770&auto=format&fit=crop",
              },
              {
                name: "Emily Clark",
                position: "Customer Relations Director",
                bio: "Emily leads our customer service team, dedicated to providing exceptional support to all Apricoat clients.",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
              },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-apricoat-900">{member.name}</h3>
                  <p className="text-coral-600 mb-3">{member.position}</p>
                  <p className="text-gray-700">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 md:py-24 bg-apricoat-900 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "25+", label: "Years of Experience" },
              { value: "10,000+", label: "Satisfied Clients" },
              { value: "150+", label: "Insurance Experts" },
              { value: "98%", label: "Client Retention" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-coral-400 mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
