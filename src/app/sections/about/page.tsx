"use client"
import {motion } from 'framer-motion'

const About = () => {


    const containerVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            type: 'spring',
            stiffness: 120,
          },
        },
      }; 

    return(
   <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mt-20"
    >
      <div>
        <h1 className="text-white items-center justify-center ml-20 text-2xl">About me</h1>
        <div className="flex items-center justify-center font-mono">
          <p className="m-10">
           { `   I am a passionate software developer with a background in web development, specializing in iOS development to
            create inmersive app-user experiences. 
            My expertise lies in crafting intuitive, user-friendly mobile applications that seamlessly integrate into users' daily lives. 
            I have extensive experience with a variety of technologies, including Swift 4+, UIKit, SwiftUI, and Objective-C. My proficiency in these languages and frameworks allows me to develop robust and efficient iOS applications that are both visually appealing and highly functional.
            Throughout my career, I have successfully led and contributed to numerous projects, ranging from small utility apps to large-scale, complex applications. I am adept at working through the entire app development lifecycle, from initial concept and design to coding, testing, and deployment.`}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About