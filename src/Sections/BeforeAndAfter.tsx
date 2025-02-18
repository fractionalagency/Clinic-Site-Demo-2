import { useState } from 'react';

const examples = [
  {
    before: 'https://picsum.photos/seed/before1/800/600',
    after: 'https://picsum.photos/seed/after1/800/600'
  },
  {
    before: 'https://picsum.photos/seed/before2/800/600',
    after: 'https://picsum.photos/seed/after2/800/600'
  },
  {
    before: 'https://picsum.photos/seed/before3/800/600',
    after: 'https://picsum.photos/seed/after3/800/600'
  },
  {
    before: 'https://picsum.photos/seed/before4/800/600',
    after: 'https://picsum.photos/seed/after4/800/600'
  },
];

const BeforeAndAfterGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const changeIndex = (newIndex:any ) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(newIndex);
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const goPrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : examples.length - 1;
    changeIndex(newIndex);
  };

  const goNext = () => {
    const newIndex = currentIndex < examples.length - 1 ? currentIndex + 1 : 0;
    changeIndex(newIndex);
  };

  return (
    <section className="py-16 w-full">
      <div className="max-w-7xl mx-auto px-4 w-full">
      <div className="space-y-2 mb-5">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-medium text-sm">
                Our Results
              </div>
              <h2 className="text-4xl font-bold text-slate-900 leading-tight">
                Before and After Gallery
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                See the results of our treatments for yourself.
              </p>
            </div>
        <div className="relative overflow-hidden w-full">
          <div className="relative md:h-[450px] h-[550px] w-full">
            {examples.map((example, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out`}
                style={{
                  transform: `translateX(${(index - currentIndex) * 100}%)`,
                }}
              >
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center h-full w-full">
                  <div className="relative flex h-full">
                    <img
                      src={example.before}
                      alt={`Before Treatment ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-3 text-white text-center text-lg font-semibold rounded-b-lg">
                      Before
                    </div>
                  </div>
                  <div className="relative flex h-full">
                    <img
                      src={example.after}
                      alt={`After Treatment ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-3 text-white text-center text-lg font-semibold rounded-b-lg">
                      After
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={goPrevious}
            disabled={isAnimating}
            className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goNext}
            disabled={isAnimating}
            className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BeforeAndAfterGallery;