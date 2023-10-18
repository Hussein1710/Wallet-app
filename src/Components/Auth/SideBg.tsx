import Logo from "../../assets/Logo.png";
import OnboardingImage from "../../assets/OnboardingImage.png";

const SideBg = () => {
  const divStyle = {
    backgroundImage: `url(${OnboardingImage})`,
    backgroundSize: "auto 100%",
    backgroundPosition: "left top",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  };
  return (
    <div style={divStyle} className="sticky top-0">
      <div className="hidden lg:flex justify-between items-center">
        <img src={Logo} alt="logo" className="w-[80%] mt-2" />
      </div>
    
    </div>
  );
};

export default SideBg;
