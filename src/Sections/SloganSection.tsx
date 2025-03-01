import SloganImage from '@/assets/SloganImage.png'

// All configurable inputs in one place:
const sloganData = {
  backgroundImage: SloganImage,
  title: 'Compassion heals beyond medicine',
  description: 'Caring for the elderly means treating hearts, not just ailments',
}

const SloganSection = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      {/* Text Section - More compact spacing */}
      <section className="mb-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
          {sloganData.title}
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-3">
          {sloganData.description}
        </p>
        {/* Horizontal line with updated color */}
        <div className="w-24 h-1 bg-slate-800 mx-auto mt-6"></div>
      </section>
      
      {/* Image Section - Wider width */}
      <section className="w-full flex justify-center">
        <div className="w-full md:w-5/6 lg:w-11/12 overflow-hidden rounded-lg shadow-lg max-h-[500px]">
          <img 
            src={sloganData.backgroundImage} 
            alt="Compassionate care" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </div>
  )
}

export default SloganSection