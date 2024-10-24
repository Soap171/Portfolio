"use client";
import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <div className="py-20 text-center">
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ">
          My Projects
        </h1>
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mx-4 p-2"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px] ">
            Check Out My Github To See More Information
          </h1>
        </motion.div>
      </div>

      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/projectBlog.jpg"
          title="MERN Stack Blog Application"
          description="MERN Stack Blog Application Build using React | Node JS | Express JS | MongoDB | Google Auth | Zustand | Mailtrap | React Query | Bootstrap 5"
          link="https://github.com/Soap171/Blog-application.git"
        />

        <ProjectCard
          src="/mobileProject.png"
          title="Mobile Repair Shop Management Web Application"
          description="Ease Repair Mobile Repair Shop Management Web Application With React | Supabase"
          link="https://github.com/Soap171/Mobile-Repair-Shop.git"
        />
        <ProjectCard
          src="/taskReminder.jpeg"
          title="Task Reminder using Telegram Bot"
          description="Task Reminder using Telegram Bot | MERN Stack | JWT Auth | React Query | Bootstrap 5"
          link="https://github.com/Soap171/Task-Reminder-Telegram-Bot.git"
        />
      </div>
    </div>
  );
};

export default Projects;
