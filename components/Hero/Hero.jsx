import "./hero.css";
const Hero = () => {
  return (
    <div className="hero">
      <div className="overlay">
        <div className="hero__content">
          <h1 className="hero__heading">Keep Your Body Fit & Strong</h1>
          <div className="hero__buttons-container d-flex align-items-center justify-content-center gap-3 mt-3">
            <button className="fitness_bg-green greenish">
              Start Today
            </button>
            <button className="fitness_bg-trans trans">
              About Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
