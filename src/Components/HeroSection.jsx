
import PhotoGrid from "./PhotoGrid";
import './Navbar.css'

export default function HeroSection() {
  return (
 
    <section className=" flex flex-col items-center text-center px-4 py-6 md:pt-1 md:pb-2  lg:pb-8 bg-white">
      <PhotoGrid />
       <div className="flex flex-col items-center text-center hero_sec">
       <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
          Give the best shot at your
          <span className="text-red-600 pl-2">Dream University</span>
        </h1>
        <p className="mt-4 text-gray-600 max-w-xl">
          Get expert help, personalised guidance, and all the support you need
          to
          <strong> increase your chances of success with Ambitio Elite.</strong>
        </p>
        <button className="mt-6 bg-black text-white px-6 py-3 rounded-md shadow-md hover:bg-gray-800 transition">
          10x your chances with Ambitio
        </button>
       </div>
      </section>

  );
}
