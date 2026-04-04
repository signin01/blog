import React, { useEffect, useState } from 'react';
import axios from "axios";
import Footer from './common/Footer';

function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const [newTitle, setNewTitle] = useState('');
    const [newContent, setNewContent] = useState('');

    // Updated URL to point to your live Vercel Backend
    const API_BASE_URL = "https://blog-theta-ten-90.vercel.app/api/blogs";

    const fetchBlogs = () => {
        axios.get(API_BASE_URL)
            .then((res) => {
                setBlogs(res.data);
            })
            .catch(err => console.log("Fetch error", err));
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchBlogs();
    }, []);

    const handleLike = async (id) => {
        try {
            // Using backticks for the dynamic ID
            await axios.patch(`${API_BASE_URL}/like/${id}`);
            fetchBlogs();
        } catch (err) { 
            console.error(err); 
        }
    };

    const handleNewBlogSubmit = (e) => {
        e.preventDefault();
        const date = new Date().toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });

        axios.post(API_BASE_URL, { 
            newTitle, 
            date, 
            newContent, 
            likes: 0 
        }).then(() => {
            setNewTitle('');
            setNewContent('');
            fetchBlogs();
        });
    };

    return (
        <div className="py-10 max-w-6xl mx-auto">
            <h2 className="text-center text-5xl font-black mb-12 text-slate-800">
                Latest <span className='text-indigo-600'>Insights</span>
            </h2>

            {/* Create Blog Form */}
            <div className="mb-16 bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <form onSubmit={handleNewBlogSubmit} className="flex flex-col gap-5">
                    <h3 className='text-xl font-bold text-slate-700'>Write a New Blog</h3>
                    <input
                        type="text" placeholder="Entry Title" value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        className="p-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                        required
                    />
                    <textarea
                        placeholder="Share your technical expertise..." value={newContent}
                        onChange={(e) => setNewContent(e.target.value)}
                        className="p-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                        rows="4" required
                    />
                    <button type="submit" className="bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition-colors w-max px-10">
                        Post Content
                    </button>
                </form>
            </div>

            {/* Display Blog Posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogs.map((blog) => (
                    <div key={blog._id} className="p-8 bg-white shadow-md rounded-3xl border border-slate-50 hover:shadow-xl transition-all">
                        <div className='flex justify-between items-start mb-4'>
                            <h3 className="font-bold text-2xl text-slate-800">{blog.newTitle}</h3>
                            <span className='bg-indigo-50 text-indigo-600 text-xs font-black px-3 py-1 rounded-full uppercase'>Article</span>
                        </div>
                        <p className="text-slate-400 text-sm mb-4">{blog.date}</p>
                        <p className="text-slate-600 leading-relaxed mb-6">{blog.newContent}</p>
                        <div className='flex items-center gap-4 border-t pt-5'>
                            <button onClick={() => handleLike(blog._id)} className='text-indigo-600 font-bold hover:underline'>
                                Like Post
                            </button>
                            <span className="text-slate-400">•</span>
                            <span className="font-medium text-slate-700">{blog.likes} Hearts</span>
                        </div>
                    </div>
                ))}
            </div>
            <Footer/>
        </div>
    );
}

export default Blogs;