import Image from "next/image";
import logo from "@/public/Assets/logo.svg";
import Link from "next/link";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer py-5 fitness_bg-dark">
      <div className="container">
        <div className="holder">
          <div className="footer__left-box_holder">
            <Link href={"/"} className="footer__logo">
              {" "}
              <Image src={logo} alt="Logo.svg" width={30} height={30} /> Fitness
            </Link>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable.
            </p>
            <div className="contact__box">
              <h6>Call:</h6>
              <p>+2010 1514 7813</p>
              <h6>Email:</h6>
              <p>amrheshammacc@gmail.com</p>
            </div>
          </div>
          <div className="footer__center-box_holder text-center">
            <h6>Links:</h6>
            <ul className="links">
              <li>Link</li>
              <li>Link</li>
              <li>Link</li>
              <li>Link</li>
            </ul>
          </div>
          <div className="footer__right-box_holder">
            <h6>Newsletter</h6>
            <form>
              <input
                type="email"
                placeholder="Subscribe by email"
                className="form-control"
              />
              <button
                type="button"
                className=" fitness_bg-green fitness_btn-sm mt-3"
              >
                Subscribe
              </button>
            </form>
            <div className="social__icons"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
