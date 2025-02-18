import { useState, useEffect } from "react";
import DOCTORIMG from "@/assets/AboutImage.png";

const doctorInfo = {
  name: "Dr. Sunil Kamble",
  specialty: "BAMS (Mumbai)",
  description:
    "A distinguished medical professional with over 35 years of experience in cardiology, committed to delivering exceptional patient care through evidence-based practices.",
  education: [
    "Bachelor of Ayurvedic Medicine and Surgery (BAMS) - Mumbai University",
  ],
  expertise: [
    "General HealthCare",
    "Preventive Healthcare ",
    "Aesthetic Dermatology",
    "Skin Care Treatments"
  ],
};

const AboutDoctor = () => {
  const [, setRadius] = useState(250);

  useEffect(() => {
    const handleResize = () => {
      // For mobile devices, use a smaller radius
      if (window.innerWidth < 640) {
        setRadius(150);
      } else {
        setRadius(250);
      }
    };

    handleResize(); // Set initial radius
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="about"
      className="py-16 md:py-32 relative bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-medium text-sm">
            Meet Our Expert
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 mt-4 mb-0">
            Experienced Healthcare Professional
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Dedicated to providing exceptional care with a patient-centered
            approach, combining years of expertise with innovative medical
            solutions.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            {/* Main circular image container */}
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] mx-auto">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-100 animate-[spin_20s_linear_infinite] animate-spin-slow spin-container" />
              <div className="absolute inset-4 rounded-full border-2 border-dashed border-blue-200" />

              {/* Main image */}
              <div className="absolute inset-8 rounded-full overflow-hidden border-8 border-white shadow-lg">
                <img
                  src={DOCTORIMG}
                  alt={doctorInfo.name}
                  className="w-full h-full object-cover scale-125"
                />
              </div>

              {/* Decorative blobs */}
              <div className="absolute -z-10 w-20 sm:w-32 h-20 sm:h-32 -top-4 -left-4 bg-blue-100 rounded-full opacity-50" />
              <div className="absolute -z-10 w-16 sm:w-24 h-16 sm:h-24 -bottom-2 -right-2 bg-purple-100 rounded-full opacity-50" />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-4">
                Senior Specialist
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-blue-700 mb-2">
                <span style={{ fontFamily: '"Times New Roman", Times, serif' }}>
                  {doctorInfo.name}
                </span>
              </h3>
              <p className="text-base sm:text-xl text-black font-semibold mb-4">
                {doctorInfo.specialty}
              </p>
              <p className="text-slate-900 leading-relaxed text-lg sm:text-base">
                {doctorInfo.description}
              </p>
            </div>

            {/* Expertise Grid */}
            <div className="grid grid-cols-2 gap-4">
              {doctorInfo.expertise.map((item, index) => (
                <div
                  key={index}
                  className="group bg-blue-100 p-2 sm:p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:bg-blue-200 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-500" />
                    </div>
                    <span className="text-slate-700 font-medium text-xs sm:text-sm">
                      {item}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Education Section */}
            <div className="bg-blue-100 hover:bg-blue-200 rounded-2xl p-4 sm:p-6 shadow-sm">
              <h4 className="text-lg sm:text-xl font-semibold text-slate-900 mb-4">
                Education & Certification
              </h4>
              <ul className="list-disc space-y-2 ml-5">
                {doctorInfo.education.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-blue-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-base font-medium text-slate-900">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/2 -left-12 w-64 sm:w-96 h-64 sm:h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-purple-200 rounded-full filter blur-3xl opacity-20" />
    </section>
  );
};

export default AboutDoctor;
