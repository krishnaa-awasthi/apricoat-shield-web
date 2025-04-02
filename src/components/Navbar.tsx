
import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-apricoat-800">
              Apricoat
            </span>
            <span className="text-xl font-medium text-coral-600">Insurances</span>
          </Link>

          {isMobile ? (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="text-lg font-medium transition-colors hover:text-apricoat-600"
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Button className="mt-4 bg-apricoat-700 hover:bg-apricoat-800 text-white">
                    Get a Quote
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          ) : (
            <nav className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="font-medium transition-colors hover:text-apricoat-600"
                >
                  {link.name}
                </Link>
              ))}
              <Button className="bg-apricoat-700 hover:bg-apricoat-800 text-white">
                Get a Quote
              </Button>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
