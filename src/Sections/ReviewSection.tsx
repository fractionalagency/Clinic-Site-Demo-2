import { Star } from 'lucide-react';
import Img1 from "@/assets/Reviews/1.jpeg";
import Img2 from "@/assets/Reviews/2.jpg";
import Img3 from "@/assets/Reviews/3.jpeg";
import Img5 from "@/assets/Reviews/5.jpg";

const reviews = [
  {
    name: "Shashikala Shinde",
    role: "Patient",
    rating: 5,
    comment: "The level of care and attention I received was exceptional.",
    image: Img1,
  },
  {
    name: "Harish Kumar",
    role: "Patient",
    rating: 5,
    comment: "I was very impressed with the professionalism and care provided.",
    image: Img2,
  },
  {
    name: "Sunita Patil",
    role: "Patient",
    rating: 5,
    comment: "Professional, caring, and efficient. Best healthcare experience.",
    image: Img3,
  },
  {
    name: "Rajesh Sharma",
    role: "Patient",
    rating: 5,
    comment: "Outstanding medical care with a personal touch.",
    image: Img5,
  },
];

interface Review {
  name: string;
  role: string;
  rating: number;
  comment: string;
  image: string;
}

const ReviewCard = ({ name, role, rating, comment, image }: Review) => (
  <div className="min-w-[400px] bg-gradient-to-br from-blue-200 via-blue-300/80 to-indigo-200 backdrop-blur-sm p-8 hover:cursor-pointer rounded-3xl mb-10
    border border-white/20 hover:border-white/40 
    transition-all duration-300  drop-shadow-xl">
    <div className="flex flex-col h-full justify-between gap-6">
      <div>
        <div className="flex items-center mb-6 gap-1">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-blue-500 text-blue-500" />
          ))}
        </div>
        <p className="text-slate-600 text-lg leading-relaxed">"{comment}"</p>
      </div>
      
      <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
        <div className="relative">
          <img src={image} alt={name} 
            className="w-12 h-12 rounded-full ring-2 ring-white" />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white" />
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">{name}</h4>
          <p className="text-sm text-slate-500">{role}</p>
        </div>
      </div>
    </div>
  </div>
);

const ReviewSection = () => {
  return (
    <section id='reviews' className="py-32 pt-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-blue-200 opacity-90" />
      
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="max-w-3xl">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-300 text-blue-900 font-medium text-sm">
              Patient Reviews
            </div>
            <h2 className="text-4xl font-bold text-slate-900 leading-tight">
              What Our Patients Say About Their Experience
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Join thousands of satisfied patients who have experienced our exceptional care and modern approach to healthcare.
            </p>
          </div>
        </div>
      </div>

      <div className="w-screen mt-16">
        <div className="overflow-hidden">
          <div className="flex gap-6 animate-marquee hover:pause">
            {[...reviews, ...reviews, ...reviews].map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 -left-12 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-20" />
    </section>
  );
};

  
export default ReviewSection;