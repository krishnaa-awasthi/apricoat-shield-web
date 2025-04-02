
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Star } from "lucide-react";

const ReviewForm = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoverRating, setHoverRating] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Review Submitted",
        description: "Thank you for sharing your feedback!",
      });
      setName("");
      setEmail("");
      setReview("");
      setRating(0);
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-2xl font-semibold mb-4 text-apricoat-900">Share Your Experience</h3>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Your Name</Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              required
              className="mt-1"
            />
          </div>
          
          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@example.com"
              required
              className="mt-1"
            />
          </div>
          
          <div>
            <Label>Rating</Label>
            <div className="flex items-center mt-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className="p-1"
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  onClick={() => setRating(star)}
                >
                  <Star
                    size={24}
                    className={`${
                      (hoverRating ? star <= hoverRating : star <= rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    } transition-colors`}
                  />
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <Label htmlFor="review">Your Review</Label>
            <Textarea
              id="review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Tell us about your experience..."
              rows={5}
              required
              className="mt-1"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-apricoat-700 hover:bg-apricoat-800"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Review"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
