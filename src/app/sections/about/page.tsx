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
          {"I'm a web developer who likes to build full-stack applications to create interactive user experiences using technology and coding as tools."}

          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About