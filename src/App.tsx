import './App.css'
import NavigationBar from './Sections/NavigationBar'
import VisionSection from './Sections/VisionSection'
import HeroSection from './Sections/HeroSection'
import ServicesSection from './Sections/ServiceSection'
import ReviewSection from './Sections/ReviewSection'
import FooterSection from './Sections/FooterSection'
import AboutDoctor from './Sections/AboutDoctor'
import BeforeAndAfterGallery from './Sections/BeforeAndAfter'

function App() {

  return (
    <>
        <div className="w-full bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden">
            <NavigationBar />
            <HeroSection />
            <VisionSection />
            <AboutDoctor />
            <ServicesSection />
            <BeforeAndAfterGallery />
            <ReviewSection />
            <FooterSection />
          </div>
        </div>
    </>
  )
}

export default App
