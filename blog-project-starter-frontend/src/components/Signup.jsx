import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Password validation logic
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        setError('');
        // Simulate registration process
        console.log('User registered:', { email, password });
        
        // Redirect to login after successful signup
        navigate('/login');
    };

    return (
        <div className="flex justify-center items-center h-[85vh] bg-slate-50">
            <form 
                onSubmit={handleSubmit} 
                className="p-10 md:p-14 bg-white rounded-[2rem] shadow-2xl border border-slate-100 w-full max-w-lg transition-all"
            >
                <div className="mb-10 text-center">
                    <h2 className="text-4xl font-black text-slate-800 mb-2">Create Account</h2>
                    <p className="text-slate-500 font-medium">Join our community today</p>
                </div>

                <div className="space-y-5">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                        <input
                            type="email"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="p-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="p-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">Confirm Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            className="p-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                        />
                    </div>
                </div>

                {error && (
                    <div className="mt-4 p-3 bg-red-50 text-red-500 text-sm font-medium rounded-lg border border-red-100">
                        {error}
                    </div>
                )}

                <button 
                    type="submit" 
                    className="button-style w-full mt-10 py-4 text-lg shadow-indigo-200"
                >
                    Get Started
                </button>

                <div className="mt-8 text-center">
                    <p className="text-slate-500">
                        Already have an account?{' '}
                        <span 
                            className="text-indigo-600 font-bold cursor-pointer hover:underline underline-offset-4" 
                            onClick={() => navigate("/login")}
                        >
                            Login here
                        </span>
                    </p>
                </div>
            </form>
        </div>
    );
}

export default Signup;