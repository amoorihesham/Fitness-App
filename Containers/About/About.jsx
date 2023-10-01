import Image from "next/image";
import "./about.css";
import Image1 from "@/public/Assets/about-divided1.svg";
import Image2 from "@/public/Assets/about-divided2.svg";

const About = () => {
  return (
    <>
      <div className="about py-5" id="about">
        <div className="overlay__about">
          <h5>Start with us the body and mind clensing</h5>
        </div>
      </div>
      <div className="about__divided-box d-flex  p-3 bg-white">
        <Image
          src={Image2}
          alt="about page person"
          style={{ width: "auto", height: "auto" }}
          className="w-100"
          loading="lazy"
        />
        <Image
          src={Image1}
          alt="about page person"
          style={{ width: "auto", height: "auto" }}
          className="w-100"
          loading="lazy"
        />
      </div>
    </>
  );
};

export default About;
