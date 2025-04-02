
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const ServiceCard = ({ title, description, icon, link }: ServiceCardProps) => {
  return (
    <div className="service-card group">
      <div className="mb-4 text-apricoat-600 bg-apricoat-50 p-3 inline-block rounded-lg">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-apricoat-900 group-hover:text-apricoat-700 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Button asChild variant="link" className="p-0 text-apricoat-700 hover:text-apricoat-900">
        <Link to={link} className="flex items-center">
          Learn more <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </Button>
    </div>
  );
};

export default ServiceCard;
