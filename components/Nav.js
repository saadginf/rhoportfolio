import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillHome } from "react-icons/Ai";
import { MdEmail } from "react-icons/Md";
import Link from "next/link";


export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
     
        <div className="container-fluid" id="icon-container">
          <div>
           <Link href="/">
          <a id="homelink">
            <AiFillHome />
          </a>
        </Link>
        
            <div id="social-icons">
              <Link href="https://linkedin.com/in/rphillipsosei">
                <a id="navlink">
                  <AiFillLinkedin />
                </a>
              </Link>
              <Link href="https://github.com/rphillipsosei">
                <a id="navlink">
                  <AiFillGithub />
                </a>
              </Link>
              <Link href="/contact">
                <a id="navlink">
                  <MdEmail />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};