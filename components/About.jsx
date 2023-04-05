import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { services } from '../constants' 
import { fadeIn, textVariant } from '../utils/motion'
import Image from 'next/image'
import { SectionWrapper } from "../hoc"


const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      className="xs:w-[15.625rem] w-full"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center"
        >
          <Image src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-xl font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <section id="about" className="w-full sm:px-16 px-6 mt-2">
        <div className="w-full lg:w-[80%] max-w-7xl mx-auto">

          <motion.div variants={textVariant()}>
            <p className="text-sm sm:text-lg text-secondary uppercase tracking-wider">Introduction</p>
            <h2 className="text-3xl xs:text-[40px] sm:text-5xl md:text-6xl text-white font-black">Overview</h2>
          </motion.div>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-lg max-w-3xl leading-7"
          >
            I'm a skilled software engineer with experience in TypeScript and 
            JavaScript, and experience in frameworks like React, Next.js and Three.js. 
            I'm a quick learner and collaborate closely with clients to to 
            create efficient, scalable, and user-friendly solutions that solve
            real-world problems. Let's work together to bring your ideas to life! 
          </motion.p>

          <div className="flex flex-wrap gap-10 mt-20 justify-center">
            {
              services.map((service, index) => (
                <ServiceCard 
                  key={service.title} 
                  index={index} 
                  {...service} 
                />
              ))
            }
          </div>

        </div>
      </section>
    </>
  )
}

export default SectionWrapper(About, "about") 