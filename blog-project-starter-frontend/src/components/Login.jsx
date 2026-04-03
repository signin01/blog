/* Login.js */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        navigate('/home');
    };

    return (
        <div className="flex justify-center items-center h-[80vh]">
            <form onSubmit={handleLogin} className="p-12 bg-white rounded-3xl shadow-2xl border border-slate-100 w-full max-w-md">
                <h2 className="text-3xl font-black mb-8 text-slate-800">Welcome Back</h2>
                <div className="space-y-4">
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full p-4 bg-slate-50 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"/>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full p-4 bg-slate-50 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"/>
                </div>
                <button type="submit" className="button-style w-full mt-8 py-4">Sign In</button>
                <p className='text-center mt-6 text-slate-500'>New here? <span className='text-indigo-600 font-bold cursor-pointer' onClick={() => navigate("/signup")}>Create Account</span></p>
            </form>
        </div>
    );
}
export default Login;