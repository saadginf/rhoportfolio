import React, { useState } from "react";
import { SliderData } from "./SliderData";
import Image from "next/image";
import styles from "../styles/ImageSlider.module.css";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { motion } from "framer-motion";

const demo = {
  borderRadius: "10px",
};
const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  console.log(current);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

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
            delay: 0.1,
          },
        },
      }}
      className={styles.projectwrapper}
    >
      <section className={styles.slider}>
        <div className={styles.imgcontainer}>
          <BiLeftArrow className={styles.leftarrow} onClick={prevSlide} />
          <div align="center" className={styles.header}>
            <h1>PROJECTS</h1>
          </div>
          <BiRightArrow className={styles.rightarrow} onClick={nextSlide} />
          {SliderData.map((slide, index) => {
            return (
              <div
                className={index === current ? styles.slideActive : slide}
                key={index}
              >
                {index === current && (
                  <div className={styles.slidercontent}>
                    <div className={styles.projecttitle}>
                      <i>{slide.title}</i>
                    </div>
                    <motion.div
                      whileHover={{
                        scale: 1.5,
                        transition: { duration: 1 },
                      }}
                      whileTap={{ scale: 0.9 }}
                      className={styles.projectcontainer}
                    >
                      <Image
                        style={demo}
                        src={slide.image}
                        alt="Project gif"
                        className={styles.image}
                        width={slide.width}
                        height={slide.height}
                        id={slide.id}
                      />
                    </motion.div>
                    <div className={styles.projectdesc}>
                      {slide.description} <br></br>
                      <br></br>
                      <b>TECHNOLOGIES:</b>
                      <br></br>
                      {slide.technologies}
                      <p className={styles.viewapp}>
                        <b>
                          <u>
                            <a href={slide.github}>
                              View source code on Github
                            </a>
                          </u>
                        </b>
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}{" "}
        </div>
      </section>
    </motion.div>
  );
};

export default ImageSlider;
