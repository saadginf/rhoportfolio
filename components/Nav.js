import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillHome } from "react-icons/ai";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid py-3" id="icon-container">
          <div className={styles.getintouch}>GET IN TOUCH</div>
          <div id="social-icons">
            <Link href="https://linkedin.com/in/rphillipsosei">
              <a id="nav-link">
                <AiFillLinkedin />
              </a>
            </Link>
            <Link href="https://github.com/rphillipsosei">
              <a id="nav-link">
                <AiFillGithub />
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
