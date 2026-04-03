import React from 'react';
import Footer from './common/Footer';
import ProfileImg from "../assets/Blog Website Design.jpg"; // Use your profile image

function About() {
    return (
        <div className="max-w-6xl mx-auto py-16 px-4">
            {/* Header Section */}
            <div className="text-center mb-20">
                <h2 className="text-5xl font-black text-slate-800 mb-4">
                    About <span className="text-indigo-600">Me</span>
                </h2>
                <div className="w-24 h-2 bg-indigo-600 mx-auto rounded-full"></div>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
                {/* Image Section */}
                <div className="w-full lg:w-1/2 relative">
                    <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500 to-violet-500 rounded-[2rem] blur-2xl opacity-20"></div>
                    <img 
                        src={ProfileImg} 
                        alt="Jacky Thomas" 
                        className="relative z-10 w-full rounded-[2rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                    />
                </div>

                {/* Text Content */}
                <div className="w-full lg:w-1/2 space-y-6">
                    <h3 className="text-3xl font-bold text-slate-800">
                        I'm Jacky Thomas, a <span className="text-indigo-600">Full-Stack Developer</span> based in India.
                    </h3>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        I specialize in building robust web applications using the MERN stack. My journey started with a curiosity for how things work on the internet, which led me to pursue Data Science and Web Development.
                    </p>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        I believe in writing clean, maintainable code and creating user-centric designs. When I'm not staring at a terminal, you'll likely find me on a football field, in the gym, or strategizing over a chessboard.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 pt-4">
                        <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                            <span className="block text-2xl mb-1">⚽</span>
                            <span className="font-bold text-slate-800">Football Lover</span>
                        </div>
                        <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                            <span className="block text-2xl mb-1">♟️</span>
                            <span className="font-bold text-slate-800">Chess Player</span>
                        </div>
                        <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                            <span className="block text-2xl mb-1">🏋️</span>
                            <span className="font-bold text-slate-800">Fitness Enthusiast</span>
                        </div>
                        <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                            <span className="block text-2xl mb-1">🏊</span>
                            <span className="font-bold text-slate-800">Swimmer</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* My Skills / Tools Section */}
            <div className="bg-indigo-600 rounded-[3rem] p-12 text-white mb-20">
                <h3 className="text-3xl font-black text-center mb-12">My Technical Arsenal</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div className="space-y-2">
                        <h4 className="text-indigo-200 font-bold uppercase tracking-widest text-xs">Frontend</h4>
                        <p className="text-xl font-medium">React, Tailwind CSS, JavaScript</p>
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-indigo-200 font-bold uppercase tracking-widest text-xs">Backend</h4>
                        <p className="text-xl font-medium">Node.js, Express, FastAPI</p>
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-indigo-200 font-bold uppercase tracking-widest text-xs">Database</h4>
                        <p className="text-xl font-medium">MongoDB, MySQL</p>
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-indigo-200 font-bold uppercase tracking-widest text-xs">Tools</h4>
                        <p className="text-xl font-medium">Git, VS Code, Figma</p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default About;