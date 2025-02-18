
const VisionSection = () => {
  return (
    <div className="px-4 bg-gradient-to-br from-slate-50 to-blue-50 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* Left side heading - spans vertically */}
  <div className="space-y-4 p-6 pt-0">
    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-medium text-sm">Our Vision</span>
    <h2 className="text-4xl font-semibold text-slate-900">
      Finding health solutions<br />
      with top Experts
    </h2>
  </div>

  {/* Right side first feature */}
  <div className="p-6 bg-slate-50 rounded-xl border border-neutral-200">
    <div className="flex gap-3 items-start">
      <div className="p-1 bg-blue-100 rounded-full">
        <svg className="w-4 h-4 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div>
        <h3 className="font-medium text-slate-900 mb-1 text-2xl">Commitment to Quality Healthcare</h3>
        <p className="text-lg text-slate-600 max-w-xl leading-relaxed">We aim to provide exceptional general healthcare with a focus on precision, care, and patient satisfaction.</p>
      </div>
    </div>
  </div>

  {/* Bottom row features */}
  <div className="p-6 bg-slate-50 rounded-xl border border-neutral-200">
    <div className="flex gap-3 items-start">
      <div className="p-1 bg-blue-100 rounded-full">
        <svg className="w-4 h-4 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div>
        <h3 className="font-medium text-slate-900 mb-1 text-2xl">Accessible Wellness for All</h3>
        <p className="text-lg text-slate-600 max-w-xl leading-relaxed">Our goal is to ensure that quality healthcare is easily accessible to everyone, regardless of background or location.</p>
      </div>
    </div>
  </div>

  <div className="p-6 bg-slate-50 rounded-xl border border-neutral-200">
    <div className="flex gap-3 items-start">
      <div className="p-1 bg-blue-100 rounded-full">
        <svg className="w-4 h-4 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div>
        <h3 className="font-medium text-slate-900 mb-1 text-2xl">Innovation in Patient Care</h3>
        <p className="text-lg text-slate-600 max-w-xl leading-relaxed">Leveraging cutting-edge technology and research to deliver progressive healthcare solutions that evolve with your needs.</p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default VisionSection