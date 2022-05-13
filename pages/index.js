import React, { useState } from "react";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Home.module.css";
import Modal from "react-modal";
import ImageSlider from '../components/ImageSlider';
import { SliderData } from '../components/SliderData';
import BioData from '../components/BioData.js'
import { motion } from 'framer-motion'
import Image from 'next/image'


export default function Home() {
  const [aboutIsOpen, setAboutIsOpen] = useState(false);
  const [projectsIsOpen, setProjectsIsOpen] = useState(false);

  return (
    <motion.div 
    initial="hidden" animate="visible" variants={{ 
      hidden: {
          opacity: 0
      },
  visible: {
      opacity: 1,
      transition: {
          delay: .7
      }
  },
  }}
  className={styles.homewrapper}>
    <Head>
 <title>Rhoda Phillips- Osei | Web Dev </title>
</Head>
    <motion.div 
    initial="hidden" animate="visible" variants={{ 
      hidden: {
          opacity: 0
      },
  visible: {
      opacity: 1,
      transition: {
          delay: .7
      }
  },
  }}
    className={styles.container}>
      <div className={styles.leftsidehome}>
        <div id={styles.hometext}>
          <h1>RHODA PHILLIPS-OSEI</h1>
          <h3>Full Stack Web Developer</h3>
          <div className={styles.homebtns}>
            <button id="home-btn" onClick={() => setAboutIsOpen(true)}>
              ABOUT
            </button>
            {setAboutIsOpen && (
              <div className={styles.modalpositioning}>
                <Modal
                  className={styles.modal}
                  isOpen={aboutIsOpen}
                  onRequestClose={() => setAboutIsOpen(false)}
                  style={{
                    overlay: {
                      backgroundColor: "rgba(60, 60, 60, 0.85)",
                    },
                    content: {
                     
                    },
                  }}
                >
                 <BioData/>
                </Modal>
              </div>
            )}

            <button id="home-btn" onClick={() => setProjectsIsOpen(true)}>
              PROJECTS
            </button>
            {setProjectsIsOpen && (
              <div
              className={styles.aboutwrapper}
              
              >
                <div className={styles.modalpositioning}>
                  <Modal
                    className={styles.modal}
                    isOpen={projectsIsOpen}
                    onRequestClose={() => setProjectsIsOpen(false)}
                    style={{
                      overlay: {
                        backgroundColor: "rgba(60, 60, 60, 0.85)",
                      },
                      content: {
                      },
                    }}
                  >


                     <div className="wrapper">
        <container >
        <container className={styles.slidercontainer}>
          <ImageSlider slides={SliderData}/>
         
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
        <motion.div 
    initial="hidden" animate="visible" variants={{ 
      hidden: {
          opacity: 0,
      },
  visible: {
      opacity: .8,
      transition: {
          delay: 1.2
      }
  },
  }} className={styles.imgshadowpink}></motion.div>
        <motion.div 
    initial="hidden" animate="visible" variants={{ 
      hidden: {
          opacity: 0
      },
  visible: {
      opacity: .5,
      transition: {
          delay: 1.3
      }
  },
  }}  className={styles.imgshadoworange}></motion.div>
        <motion.div 
    initial="hidden" animate="visible" variants={{ 
      hidden: {
          opacity: 0
      },
  visible: {
      opacity: .5,
      transition: {
          delay: 1.4
      }
  },
  }}  className={styles.imgshadowteal}></motion.div>
  <div className={styles.homeimgcontainer}>
          <Image
          src="/rho.webp"
          alt="Rhoda Phillips-Osei"
          className={styles.homeimg}
          layout="fill"
        ></Image></div>
      </div>
    </motion.div>
    </motion.div>
  );
}

