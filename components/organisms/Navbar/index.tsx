import Image from "next/image";
import Logo from "../../../public/icon/icon.svg";
import Menu from "./Menu";

const Navbar = () => {
  const menuObj = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Games",
      url: "/games",
    },
    {
      title: "Reward",
      url: "/reward",
    },
    {
      title: "Discover",
      url: "/discover",
    },
    {
      title: "Global Ranks",
      url: "/global",
    },
  ];
  return (
    <section>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <Image src={Logo} width={60} height={60} alt={""} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
              <Menu title="Home" href="/" active />
              <Menu title="Games" href="/games"/>
              <Menu title="Reward" href="/reward"/>
              <Menu title="Discover" href="discover"/>
              <Menu title="Global Ranks" href="/global-ranks"/>
              <li className="nav-item my-auto">
                <a
                  className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
                  href="./src/sign-in.html"
                  role="button"
                >
                  Sign In
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
