import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Modal from "react-modal";
import ImageSlider from "../components/ImageSlider";
import { SliderData } from "../components/SliderData";
import BioData from "../components/BioData.js";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const [aboutIsOpen, setAboutIsOpen] = useState(false);
  const [projectsIsOpen, setProjectsIsOpen] = useState(false);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: {
            delay: 0.7,
          },
        },
      }}
      className={styles.homewrapper}
    >
      <Head>
        <title>Rhoda Phillips-Osei | Web Developer </title>
        <meta
          name="Rhoda Phillips-Osei, Full Stack Web Developer"
          content="A portfolio website for Rhoda Phillips-Osei, Full Stack, Front End, and Back End Web Developer"
        />
      </Head>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
            transition: {
              delay: 0.7,
            },
          },
        }}
        className={styles.container}
      >
        <div className={styles.leftsidehome}>
          <div className={styles.hometext}>
            <h1>RHODA PHILLIPS-OSEI</h1>
            <h3>Full Stack Web Developer</h3>
            <div className={styles.homebtns}>
              <span
                className={styles.homebtn}
                onClick={() => setAboutIsOpen(true)}
              >
                ABOUT
              </span>
              {setAboutIsOpen && (
                <div className={styles.modalpositioning}>
                  <Modal
                    className={styles.modal}
                    isOpen={aboutIsOpen}
                    onRequestClose={() => setAboutIsOpen(false)}
                    style={{
                      overlay: {
                        backgroundColor: "rgba(73, 73, 73, 0.3)",
                        backdropFilter: "blur(6px)",
                      },
                      content: {},
                    }}
                  >
                    <BioData />
                  </Modal>
                </div>
              )}

              <span
                className={styles.homebtn}
                onClick={() => setProjectsIsOpen(true)}
              >
                PROJECTS
              </span>
              {setProjectsIsOpen && (
                <div className={styles.aboutwrapper}>
                  <div className={styles.modalpositioning}>
                    <Modal
                      className={styles.modal}
                      isOpen={projectsIsOpen}
                      onRequestClose={() => setProjectsIsOpen(false)}
                      style={{
                        overlay: {
                          backgroundColor: "rgba(73, 73, 73, 0.3)",
                          backdropFilter: "blur(6px)",
                        },
                        content: {},
                      }}
                    >
                      <div className="wrapper">
                        <container>
                          <container className={styles.slidercontainer}>
                            <ImageSlider slides={SliderData} />
                          </container>
                        </container>
                      </div>
                    </Modal>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className={styles.rightsidehome}>
          <div className={styles.imagecards}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  opacity: 0,
                },
                visible: {
                  opacity: 0.8,
                  transition: {
                    delay: 1.2,
                  },
                },
              }}
              className={styles.imgshadowpink}
            ></motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  opacity: 0,
                },
                visible: {
                  opacity: 0.5,
                  transition: {
                    delay: 1.3,
                  },
                },
              }}
              className={styles.imgshadoworange}
            ></motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  opacity: 0,
                },
                visible: {
                  opacity: 0.5,
                  transition: {
                    delay: 1.4,
                  },
                },
              }}
              className={styles.imgshadowteal}
            ></motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  opacity: 0,
                  scale: 0.97,
                },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    delay: 1.5,
                    duration: 0.3,
                  },
                },
              }}
              className={styles.homeimgcontainer}
            >
              <Image
                src="/rho.webp"
                alt="Rhoda Phillips-Osei"
                className={styles.homeimg}
                layout="fill"
              ></Image>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
