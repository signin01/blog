import React from 'react';
import Navbar from './common/Navbar';
import Footer from './common/Footer';
import BlogProfileImage from "../assets/Blog Website Design.jpg";
import HTML from "../assets/html.png";
import CSS from "../assets/css-3.png";
import JS from "../assets/js.png";
import REACTICON from "../assets/physics.png";
import DB from "../assets/data-server.png";
import NODE from "../assets/node-js.png";
import P1 from "../assets/p1.jpg";
import P2 from "../assets/p2.png";
import P3 from "../assets/p3.png";

function Home() {
    // Function for smooth scrolling
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='max-w-7xl mx-auto'>
            {/* 1. HERO SECTION */}
            <div className='flex flex-col lg:flex-row items-center justify-between py-16 gap-12'>
                <div className="w-full lg:w-1/2 space-y-6">
                    <h2 className='text-4xl md:text-6xl font-black text-slate-800 leading-tight'>
                        Hy! I Am <br/> 
                        <span className='text-indigo-600 text-5xl md:text-7xl'>Jacky Thomas</span>
                    </h2>
                    <p className='text-slate-600 text-lg leading-relaxed'>
                        I build high-performance web applications with modern tech stacks. 
                        Let's transform your ideas into reality with clean code and intuitive design.
                    </p>
                    <div className='flex gap-4'>
                        {/* Updated Buttons with Scroll Logic */}
                        <button onClick={() => scrollToSection('hire-me')} className='button-style'>
                            Hire Me
                        </button>
                        <button 
                            onClick={() => scrollToSection('view-work')}
                            className='px-6 py-2 border-2 border-slate-200 rounded-lg font-bold hover:bg-slate-50 transition-all'
                        >
                            View Work
                        </button>
                    </div>
                </div>
                <div className='relative'>
                    <div className='absolute -inset-4 bg-indigo-100 rounded-full blur-3xl opacity-50'></div>
                    <img src={BlogProfileImage} className='w-80 md:w-96 relative z-10 rounded-2xl shadow-2xl' alt="Profile" />
                </div>
            </div>

            {/* 2. SKILLS BAR */}
            <div className='flex flex-wrap justify-center items-center gap-10 py-12 bg-white shadow-sm rounded-2xl border border-slate-100'>
                {[HTML, CSS, JS, REACTICON, DB, NODE].map((img, i) => (
                    <img key={i} src={img} className='w-12 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110' alt="skill" />
                ))}
            </div>

            {/* 3. VIEW WORK SECTION (Portfolio) */}
            <div id="view-work" className="py-24">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <h2 className="text-4xl font-black text-slate-800 uppercase">Featured <span className="text-indigo-600">Work</span></h2>
                        <p className="text-slate-500 mt-2">A selection of my recent full-stack applications.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Project Card 1 */}
                    <div className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-xl hover:shadow-2xl transition-all">
                        <img src={P1} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" alt="Smart Waste" />
                        <div className="p-8">
                            <div className="flex gap-2 mb-4">
                                <span className="text-xs font-bold px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full">Python</span>
                                <span className="text-xs font-bold px-3 py-1 bg-slate-100 text-slate-600 rounded-full">IoT</span>
                            </div>
                            <h4 className="text-2xl font-bold text-slate-800 mb-3">Smart Waste Management</h4>
                            <p className="text-slate-600 mb-6">An IoT-based dashboard for real-time monitoring of wastewater levels using Flask and sensors.</p>
                        </div>
                    </div>

                    {/* Project Card 2 */}
                    <div className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-xl hover:shadow-2xl transition-all">
                        <img src={P2} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" alt="AI Screener" />
                        <div className="p-8">
                            <div className="flex gap-2 mb-4">
                                <span className="text-xs font-bold px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full">FastAPI</span>
                                <span className="text-xs font-bold px-3 py-1 bg-slate-100 text-slate-600 rounded-full">Llama 3</span>
                            </div>
                            <h4 className="text-2xl font-bold text-slate-800 mb-3">AI Resume Screener</h4>
                            <p className="text-slate-600 mb-6">Advanced AI tool that ranks resumes based on job descriptions using Large Language Models.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4. HIRE ME SECTION (Services) */}
            <div id="hire-me" className="py-20 bg-slate-900 rounded-[3rem] px-8 md:px-16 text-white mb-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-4">Hire <span className="text-indigo-400">Me</span></h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">Available for freelance and full-time engineering roles.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="p-8 bg-slate-800 rounded-3xl border border-slate-700 hover:border-indigo-500 transition-all">
                        <div className="text-4xl mb-4">💻</div>
                        <h4 className="text-xl font-bold mb-3">Full Stack Dev</h4>
                        <p className="text-slate-400 text-sm">Building end-to-end web applications with React, Node, and MongoDB.</p>
                    </div>
                    <div className="p-8 bg-slate-800 rounded-3xl border border-slate-700 hover:border-indigo-500 transition-all">
                        <div className="text-4xl mb-4">🤖</div>
                        <h4 className="text-xl font-bold mb-3">AI Solutions</h4>
                        <p className="text-slate-400 text-sm">Integrating LLMs and data science models into your existing products.</p>
                    </div>
                    <div className="p-8 bg-slate-800 rounded-3xl border border-slate-700 hover:border-indigo-500 transition-all">
                        <div className="text-4xl mb-4">⚡</div>
                        <h4 className="text-xl font-bold mb-3">Backend APIs</h4>
                        <p className="text-slate-400 text-sm">Designing high-performance, secure RESTful APIs using FastAPI and Node.js.</p>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <button className="button-style px-12 py-4">Let's Talk</button>
                </div>
            </div>

            <Footer/>
        </div>
    );
}

export default Home;