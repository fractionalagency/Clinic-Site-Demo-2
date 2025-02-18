import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import ServicesImage from "@/assets/services-4.png"
import ServicesImage2 from "@/assets/Aesthetic-Dermatology.jpg"
import ServicesImage3 from "@/assets/GeneralHealthcare.jpg"
import ServicesImage4 from "@/assets/Preventive-HealthCare.jpg"

const services = [
  {
    title: "General HealthCare",
    description: "Comprehensive care focusing on overall well-being with personalized check-ups and continuous support.",
    features: ["Personalized Check-ups", "Continuous Care", "Holistic Approach"],
    image: ServicesImage3,
  },
  {
    title: "Preventive Healthcare",
    description: "Emphasizing early detection and prevention to keep you healthy through regular screenings and advice.",
    features: ["Regular Screenings", "Vaccinations", "Lifestyle Advice"],
    image: ServicesImage4,
  },
  {
    title: "Aesthetic Dermatology",
    description: "Advanced treatments designed to rejuvenate your skin and boost your confidence.",
    features: ["Skin Rejuvenation", "Acne Treatments", "Cosmetic Procedures"],
    image: ServicesImage2,
  },
  {
    title: "Skin Care Treatments",
    description: "Customized skin care plans addressing individual concerns with modern techniques.",
    features: ["Personalized Regimens", "Professional Advice", "Innovative Solutions"],
    image: ServicesImage,
  }
];

interface ServiceProps {
  title: string;
  description: string;
  features: string[];
  image: string;
}

const ServiceCard: React.FC<ServiceProps> = ({ title, description, features, image }) => (
  <Card className="group overflow-hidden bg-gradient-to-br from-blue-100 via-blue-200 to-indigo-100 border-none drop-shadow-xl">
    <div className="flex flex-col sm:flex-row h-full">
      <div className="w-full sm:w-48 h-48 sm:h-full flex-shrink-0">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="flex-grow p-4 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          <ArrowUpRight 
            className="w-4 h-4 text-gray-900 group-hover:text-blue-500 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
          />
        </div>
        
        <p className="text-sm text-gray-700 leading-relaxed">
          {description}
        </p>
        
        <ul className="space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
              <span className="w-1 h-1 rounded-full bg-blue-500 opacity-75" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Card>
);

const ServicesSection = () => (
  <section id="services" className="py-20  bg-gradient-to-br from-blue-100 via-purple-100/70 to-blue-200/60 w-full">
    <div className="max-w-7xl mx-auto px-4">
      <div className="space-y-2 mb-5">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-300 text-blue-900 font-medium text-sm">
          Our Medical Services
        </div>
        <h2 className="text-4xl font-bold text-black leading-tight">
          What We Offer
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          Expertise-driven care directly aligned with our specialist’s areas of excellence.
        </p>
      </div>

      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;