import { ArrowUpRight } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface ServiceCardProps {
    title: string;
    description: string;
    features: string[];
}

const services = [
  {
    title: "General Medicine",
    description: "Comprehensive primary healthcare services including preventive care and health screenings.",
    features: ["Regular Check-ups", "Vaccinations", "Health Screenings"],
  },
  {
    title: "Orthopedics",
    description: "Expert care for musculoskeletal conditions with advanced treatment options.",
    features: ["Joint Replacement", "Sports Medicine", "Fracture Care"],
  },
  {
    title: "Gastroenterology",
    description: "Specialized diagnosis and treatment of digestive system disorders.",
    features: ["Endoscopy", "Colonoscopy", "Nutritional Counseling"],
  },
  {
    title: "Cardiology",
    description: "Comprehensive heart care including advanced diagnostics and prevention.",
    features: ["ECG Testing", "Heart Disease Treatment", "Cardiac Rehabilitation"],
  }
];



const ServiceCard = ({ title, description, features }: ServiceCardProps) => (
  <Card className="group p-6 hover:shadow-lg transition-all duration-300">
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-slate-900">{title}</h3>
        <ArrowUpRight 
          className="w-4 h-4 text-slate-400 group-hover:text-blue-500 
          transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
        />
      </div>
      
      <p className="text-sm text-slate-600 leading-relaxed">
        {description}
      </p>
      
      <ul className="space-y-2">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-2 text-sm text-slate-500">
            <span className="w-1 h-1 rounded-full bg-blue-500 opacity-75" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  </Card>
);

const ServicesSection = () => (
  <section className="py-20 bg-gradient-to-b from-white to-slate-50/50">
    <div className="max-w-6xl mx-auto px-4">
      <div className="mb-16 space-y-2">
        <h2 className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-medium text-sm">
          Our Medical Services
        </h2>
        <p className="text-slate-500 text-lg">
          Experience excellence in healthcare through our specialized medical services.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;