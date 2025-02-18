import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DoctorPNG from '@/assets/doctor.png';
import ClinicLogo from "@/assets/ClinicLogo.png";
const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const homePhoneNumber = '9699361189';
  return (
<div className="w-full bg-gradient-to-br from-blue-100 via-purple-100 to-purple-100 pt-24">
      {/* Navigation */}


      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 pt-12 pb-24 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <img
            src={ClinicLogo}
            alt="Clinic Logo"
            className=" w-32 hidden md:block"
          />

          <div className="flex flex-col space-y-3">

            {/* Headline */}
            {/* Headline */}
            <h1 className="text-5xl font-bold text-slate-900 leading-tight">
              Healthcare
              <div className="inline-flex items-center gap-2 lg:ml-2 ml-0">
                <span className="text-blue-600">reimagined</span>
              </div>
              <div className="">
                for the modern age
              </div>
            </h1>

            <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
              Experience the perfect blend of compassionate care and cutting-edge technology.
              Your health journey begins with personalized attention that puts you first.
            </p>
          </div>

          {/* CTAs */}
          <Button
            className="group bg-slate-900 hover:bg-slate-800 text-white px-8 py-7 text-lg rounded-2xl flex items-center gap-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => (window.location.href = `tel:${homePhoneNumber}`)}
          >
            Call Now
            <ArrowUpRight className={`w-5 h-5 transition-transform ${isHovered ? 'translate-x-1 -translate-y-1' : ''}`} />
          </Button>

        </div>

        {/* Right Column */}
        <div className="relative">
          {/* Main Image Container */}
          <div className="relative">
            <div className="aspect-square rounded-[2.5rem] bg-gradient-to-br from-blue-100 to-blue-50 overflow-hidden">
              <img
                src={DoctorPNG}
                alt="Doctor placeholder"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default HeroSection;