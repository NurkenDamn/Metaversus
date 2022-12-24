'use client';

import { motion } from "framer-motion";

import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';

import { TitleText , TypingText } from "../components";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={(
          <>Track friends around you and invite them to play together in the same
            world
          </>
        )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-02.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>

        {/* <div className="absolute top-[177px] left-[215px] sm:w-[136px] sm:h-[90px] w-[196px] h-[150px] p-[6px] rounded-[24px] bg-[#5D6680] overflow-hidden">
          <img src="planet-card1.png" alt="people" className="absolute sm:w-[124pxpx] sm:h-[78px] w-[184px] h-[138px] rounded-[32px] object-cover" />
          <div className="flex flex-row w-[146px] h-[24px]">
            <img 
                src="people-04.png" 
                alt="people"
                className="w-[24px] h-[24px] z-10 absolute mt-[79px] ml-[16px]" />
          </div>
        </div> */}
      </motion.div>
    </motion.div>
  </section>
);

export default World;
