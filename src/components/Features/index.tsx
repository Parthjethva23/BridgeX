import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section
      id="features"
      className="relative z-10 overflow-hidden bg-gradient-to-br from-white via-blue-50 to-white pb-32 pt-40 md:pt-48 lg:pt-56"
    >
      {/* Abstract Floating Shapes for Design */}
      <div className="absolute top-[-5px] right-[250px] w-28 h-28 bg-green-300 rounded-full opacity-50 z-0 animate-bounce"></div>
      <div className="absolute bottom-[150px] left-[50px] w-24 h-24 bg-yellow-200 rounded-full opacity-50 z-0 animate-ping"></div>

      {/* Title and Paragraph Styling */}
      <div className="container relative z-10">
        <SectionTitle
          title="BridgeX Core Features"
          paragraph="BridgeX is designed to connect businesses, individuals, and innovative ideas through seamless solutions. Explore the powerful features that make it stand out."
          center
        />
        
        {/* Feature Cards */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {featuresData.map((feature) => (
            <SingleFeature key={feature.id} feature={feature} />
          ))}
        </div>
      </div>

      {/* Abstract SVG Background */}
      <div className="absolute top-0 left-0 w-full h-full z-[-1]">
        <svg
          className="w-full h-full"
          viewBox="0 0 800 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="850" cy="60" r="150" fill="#e0f2fe" />
          <circle cx="3" cy="550" r="30" fill="#dbeafe" />
          <circle cx="800" cy="520" r="40" fill="#fcd34d" fillOpacity="0.1" />
          <circle cx="21" cy="50" r="80" fill="#dbeafe" fillOpacity="0.7" />
          <circle cx="500" cy="-13" r="50" fill="#f9a8d4" fillOpacity="0.5" />
        </svg>
      </div>
    </section>
  );
};

export default Features;
