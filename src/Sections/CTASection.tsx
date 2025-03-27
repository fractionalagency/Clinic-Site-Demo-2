import { Button } from '@/components/ui/button';
import { ExternalLink, Calendar } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
}

const CTASection = ({
  title = "Schedule Your Appointment Today",
  description = "Take the first step towards better health with our convenient online booking system. Our team is ready to provide you with personalized care.",
  buttonText = "Book Appointment",
  buttonUrl = "https://www.appointmentbooking.com/drsgkamble"
}: CTASectionProps) => {
  return (
    <section className="py-20 w-full relative overflow-hidden">
      {/* Background with contrasting gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-800 to-blue-900"></div>
      
      {/* Decorative elements with darker theme */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-indigo-400 rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-400 rounded-full opacity-10"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-400 rounded-full opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-10 md:p-16 bg-gradient-to-br from-slate-900/80 to-blue-900/80 backdrop-blur-sm rounded-3xl shadow-xl border border-slate-700/50">
          {/* Left side content with improved layout */}
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/60 text-blue-200 font-medium text-sm border border-blue-700/50">
              <Calendar className="w-4 h-4" />
              Patient Care
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              {title}
            </h2>
            <p className="text-lg text-slate-300">
              {description}
            </p>
          </div>
          
          {/* Right side with more interesting visual treatment */}
          <div className="flex-shrink-0 relative">
            {/* Decorative circle behind button */}
            <div className="absolute -inset-4 bg-blue-400 rounded-full opacity-20 blur-md"></div>
            
            <Button 
              className="group relative bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white px-8 py-7 text-lg rounded-2xl flex items-center gap-3 shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-1"
              onClick={() => window.open(buttonUrl, '_blank')}
            >
              {buttonText}
              <ExternalLink className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Additional floating decorative elements */}
        <div className="absolute -z-10 top-1/2 -right-4 transform -translate-y-1/2 w-16 h-16 bg-blue-400 rounded-full opacity-20"></div>
        <div className="absolute -z-10 bottom-1/4 -left-8 w-20 h-20 bg-indigo-400 rounded-full opacity-20"></div>
      </div>
    </section>
  );
};

export default CTASection;