"use client"
import ccomerce from "../../images/Designer__1_-removebg-preview.png";
import note from '../../images/note.png';
import blog from '../../images/Designer__3_-removebg-preview.png';
import todo from '../../images/todofull.png';
import Image from "next/image";
import Tracker from '../../images/tracker.png';
import { motion } from "framer-motion";
import "../../styles.css";

const Projects = () => {
  const projects = [
    {
      pic: ccomerce,
      title: "Storynote-Pocket FlipBook",
      desc: "An app that allows user create animated notes, draw, record audio and share across social media",
      pro:"UIKit, Core Animation, AVFoundation, CoreData",
      link: "https://apps.apple.com/mx/app/storynote-pocket-flipbook/id6498471411?l=en-GB",
      gitRepo: "https://github.com/memodiaz44/ecommerce-app",
    },
    {
      pic: blog,
      title: "Tap Da Beat",
      desc: `A game/app based on a "pulse" exercise used in music education to develop independent hand coordination while having fun and playing`,
      pro: "UIKit, Core Animation, AVFoundation, SpriteKit",
      link: "https://apps.apple.com/mx/app/tap-da-beat/id6502953184?l=en-GB",
      gitRepo: "https://github.com/memodiaz44/nextBlog",
    },
   
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-white text-2xl">My Apps</h1>
      <div className="flex flex-col md:flex-row mt-10 space-y-4 md:space-x-4 ">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-transparent p-4 rounded-lg shadow-md m-10 "
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
          >
            <Image className="w-[100px] h-[100px]" src={project.pic} alt="image"/>
            <h2 className="text-slate-100 font-semibold text-white">{project.title}</h2>
            <p className="text-slate-100">{project.desc}</p>
            <a>
              Tech Stack
            </a>
            <p className="text-slate-100">{project.pro}</p>
            <div className="mt-2">
              <a href={project.link} className="text-blue-500 hover:underline">
                View in the AppStore
              </a>
            </div>
            <div className="mt-2">
            
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
