import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";
import styles from "../styles/Home.module.css"
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid py-3" id="nav-contents">
          <div>GET IN TOUCH</div>
          <div>
            <div className={styles.icons}>
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
        </div>
      </nav>
    </div>
  );
}
