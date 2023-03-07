import Image from "next/image";
import { useState } from "react";
import Logo from "../../../public/icon/icon.svg";
import Auth from "./Auth";

import Menu from "./Menu";
import TogleMenu from "./TogleMenu";

const Navbar = () => {
  return (
    <section>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <Image src={Logo} width={60} height={60} alt={""} />
          </a>
          <TogleMenu />
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
              <Menu title="Home" href="/" active />
              <Menu title="Games" href="/games" />
              <Menu title="Reward" href="/reward" />
              <Menu title="Discover" href="discover" />
              <Menu title="Global Ranks" href="/global-ranks" />
              <Auth isLogin />
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
