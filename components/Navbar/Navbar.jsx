import Logo from "@/public/Assets/logo.svg";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" href="/">
          <Image
            src={Logo}
            alt="Fitness app Logo"
            style={{ width: "auto", height: "auto" }}
            className="me-1"
          />
          Fitness
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" href="/#upcomming">
                UpComming
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/#about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/#exercises">
                Exercises
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
