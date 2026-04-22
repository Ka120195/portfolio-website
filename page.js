
"use client";
import React, { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={(darkMode ? "bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 text-white" : "bg-gradient-to-br from-blue-50 via-white to-indigo-100 text-black") + " min-h-screen transition-all duration-500"}>
      <div className="flex justify-between items-center px-8 py-5 backdrop-blur-md bg-white/10">
        <h1 className="text-xl font-bold tracking-wide text-blue-400">Kamlesh</h1>
        <div className="flex gap-3">
          <Button onClick={() => setDarkMode(!darkMode)} className="rounded-xl">
            {darkMode ? "☀ Light" : "🌙 Dark"}
          </Button>
          <a href="/resume.pdf" download>
            <Button className="rounded-xl bg-blue-600 hover:bg-blue-700 transition-all">Download Resume</Button>
          </a>
        </div>
      </div>

      <section className="text-center py-28">
        <div className="relative w-56 h-56 mx-auto">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 blur-xl opacity-60 animate-pulse"></div>
          <motion.img src="/profile.jpg" className="relative w-52 h-52 mx-auto rounded-full border-4 border-blue-500 shadow-2xl object-cover"/>
        </div>
        <h1 className="text-6xl font-extrabold mt-6 bg-gradient-to-r from-blue-400 to-indigo-500 text-transparent bg-clip-text">
          Kamlesh Asolkar
        </h1>
        <p className="text-gray-300 mt-4 text-xl">IT Support Engineer</p>
      </section>
    </div>
  );
}
