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
            I'm a web developer who likes to build full-stack applications to
            create interactive user experiences using technology and coding as
            tools. I'm experienced using front-end technologies such as
            JavaScript, HTML, CSS, Next.js as a React framework. For the
            back-end, I work with Node.js, Express as a framework, GraphQL, NoSQL,
            and SQL databases. Committed to actively seeking opportunities to
            contribute to innovative projects and consistently deliver
            high-value products.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About