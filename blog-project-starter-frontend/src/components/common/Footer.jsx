import React from 'react';

function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-400 py-10 mt-20 rounded-2xl">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm">© 2026 Creative Studio. All rights reserved.</p>
                <div className='flex gap-6 text-sm'>
                    <span className='hover:text-white cursor-pointer'>Privacy Policy</span>
                    <span className='hover:text-white cursor-pointer'>Terms of Service</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;