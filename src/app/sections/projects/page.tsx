"use client"
import ccomerce from "../../images/eshop.png";
import note from '../../images/note.png';
import blog from '../../images/blog.png';
import todo from '../../images/todofull.png';
import Image from "next/image";
import { motion } from "framer-motion";
import "../../styles.css";

const Projects = () => {
  const projects = [
    {
      pic: ccomerce,
      title: "e-commerce",
      desc: "A MERN fullstack using React for the frontend and NodeJS, Express and MongoDB for the backend",
      link: "https://radiant-marzipan-bdcd77.netlify.app/products",
      gitRepo: "https://github.com/memodiaz44/ecommerce-app",
    },
    {
      pic: note,
      title: "Note Studio",
      desc: "Fullstack application that allows users to create animations in React canvas",
      link: "https://react-canvas-lime.vercel.app/",
      gitRepo: "https://github.com/memodiaz44/React-canvas",
    },
    {
      pic: blog,
      title: "My Own Blog",
      desc: "I am a music producer, so I coded my own blog to connect with my audience using Next.js as a framework and GraphQL as headless CMS",
      link: "https://next-blog-1vre.vercel.app/",
      gitRepo: "https://github.com/memodiaz44/nextBlog",
    },
    {
      pic: todo,
      title: "Fullstack TODO App",
      desc: "CRUD TODO app in React. I used MySQL to manage user info and created an Express server to connect to it",
      link: "https://todo-client-rouge-mu.vercel.app",
      gitRepo: "https://github.com/memodiaz44/todo-client",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-white text-2xl">Projects</h1>
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
            <div className="mt-2">
              <a href={project.link} className="text-blue-500 hover:underline">
                View Project
              </a>
            </div>
            <div className="mt-2">
              <a href={project.gitRepo} className="text-blue-500 hover:underline">
                GitHub Repository
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
