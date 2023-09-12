"use client"
import Scene from "../../components/Scene";
import { useState } from "react";
import { motion } from 'framer-motion';
import dotenv from "dotenv";
dotenv.config();

    const Contact = () => {
        const apiUrl = process.env.NEXT_PUBLIC_APP_API;


        const initialFormData = {
            email: "",
            comment: "",
            subject: ""
          };


        const [data, setData] = useState(initialFormData);
        const [isLoading, setIsLoading] = useState(false);
        const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true)

        const   { email, comment, subject } = data ;

        try {
            const res = await fetch(`/api/routes`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ email, comment, subject })
            });
      
            const result = await res.json();
            console.log(result);
            setData(initialFormData)
            setIsSubmitted(true);
          } catch (error) {
            console.error('Error:', error);
          } finally {
            setIsLoading(false);
          }
        };


      const handleChange = (    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setData({
          ...data,
          [name]: value
        });
      };
    
    // Define animation variants for elements
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <>
            <motion.div
                className="flex items-center justify-center w-full"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <h1 className='text-white text-2xl'>GET IN TOUCH</h1>
            </motion.div>
            <motion.div
                className="flex flex-rows items-center  justify-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
          
                <div className="w-60 ">
                    <form className="space-y-8 " onSubmit={handleSubmit}>
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                            <input
                                type="email"
                                id="email"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                placeholder="name@flowbite.com"
                                name="email"
                                value={data.email}
                                onChange={handleChange}
                                required
                            />
                        </motion.div>
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                placeholder="Let us know how we can help you"
                                name="subject"
                                value={data.subject}
                                onChange={handleChange}
                                required
                            />
                        </motion.div>
                        <motion.div
                            className="sm:col-span-2"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                            <textarea
                                id="comment"
                                rows={6}
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Leave a comment..."
                                name="comment"
                                value={data.comment}
                                onChange={handleChange}
                                
                                >
                            </textarea>
                        </motion.div>
                        <motion.button
                            type="submit"
                            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-sky-700 sm:w-fit hover:bg-sky-400 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        > 
                      {isLoading ? 'Processing...' : isSubmitted ? 'Message successfully sent' : 'Send message'}

                        </motion.button>
                    </form>
                </div>
            </motion.div>
        </>
    );
}

export default Contact;
