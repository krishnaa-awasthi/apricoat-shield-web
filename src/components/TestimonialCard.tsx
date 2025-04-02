
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  name: string;
  position?: string;
  content: string;
  rating: number;
  image?: string;
}

const TestimonialCard = ({
  name,
  position,
  content,
  rating,
  image = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
}: TestimonialCardProps) => {
  const starCount = Math.min(Math.max(rating, 1), 5);

  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center mb-4 space-x-1">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              size={16}
              className={`${
                index < starCount ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <p className="text-gray-700 mb-6 italic">{content}</p>
        <div className="flex items-center">
          <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-semibold text-apricoat-900">{name}</h4>
            {position && <p className="text-sm text-gray-500">{position}</p>}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
