
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonLink?: string;
  image?: string;
  isHomepage?: boolean;
}

const HeroSection = ({
  title,
  subtitle,
  buttonText = "Get Started",
  buttonLink = "/contact",
  image = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
  isHomepage = false,
}: HeroSectionProps) => {
  if (isHomepage) {
    return (
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={image}
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-apricoat-900/70" />
        </div>
        <div className="relative pt-28 pb-20 md:pt-36 md:pb-28 container-custom">
          <div className="max-w-xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              {subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                className="bg-coral-600 hover:bg-coral-700 text-white px-6 py-6 text-lg"
                size="lg"
              >
                <Link to={buttonLink}>{buttonText}</Link>
              </Button>
              <Button
                asChild
                className="bg-white hover:bg-gray-100 text-apricoat-900 px-6 py-6 text-lg"
                size="lg"
                variant="outline"
              >
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="hero-gradient text-white py-16 md:py-24">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">{subtitle}</p>
          {buttonText && (
            <Button
              asChild
              className="bg-coral-600 hover:bg-coral-700 text-white"
              size="lg"
            >
              <Link to={buttonLink}>{buttonText}</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
