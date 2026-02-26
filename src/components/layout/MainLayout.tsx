import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Cpu, Users, Code2 } from 'lucide-react';


export const MainLayout = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const location = useLocation();

    const navItems = [
        { label: 'Mentoring', path: '/mentoring', icon: <Users size={16} /> },
        { label: 'For Teams', path: '/teams', icon: <Cpu size={16} /> },
        { label: 'Philosophy', path: '/philosophy', icon: <Code2 size={16} /> },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <div className="min-h-screen bg-lab-dark text-white flex flex-col font-sans">
            {/* Technical Top Bar */}
            <div className="h-1 bg-cyan-DEFAULT w-full" />

            {/* Header */}
            <header className="fixed top-1 w-full z-50 bg-lab-dark/90 backdrop-blur-md border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">

                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-2 group">
                            <div className="w-10 h-10 border border-cyan-DEFAULT flex items-center justify-center bg-cyan-DEFAULT/10 group-hover:bg-cyan-DEFAULT/20 transition-colors">
                                <span className="font-mono font-bold text-cyan-DEFAULT text-xl">QA</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold tracking-wider text-white">QA LABS CR</span>
                            </div>
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center space-x-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`flex items-center gap-2 text-sm font-medium transition-colors ${isActive(item.path)
                                        ? 'text-cyan-DEFAULT'
                                        : 'text-gray-400 hover:text-white'
                                        }`}
                                >
                                    {/* {item.icon} */}
                                    {item.label}
                                </Link>
                            ))}
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-white p-2"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-expanded={isMenuOpen}
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        >
                            {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Nav */}
                {isMenuOpen && (
                    <div className="md:hidden border-t border-white/10 bg-lab-dark">
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`block px-3 py-3 rounded-md text-base font-medium ${isActive(item.path)
                                        ? 'text-cyan-DEFAULT bg-white/5'
                                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        {item.icon}
                                        {item.label}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </header>

            {/* Main Content */}
            <main className="flex-grow pt-20">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="bg-black/20 border-t border-white/10 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <Link to="/" className="flex items-center gap-2 mb-4 group">
                            <div className="w-8 h-8 border border-white/20 flex items-center justify-center group-hover:border-cyan-DEFAULT/50 transition-colors">
                                <span className="font-mono font-bold text-white text-md group-hover:text-cyan-DEFAULT">QA</span>
                            </div>
                            <span className="font-bold tracking-wider text-white group-hover:text-cyan-DEFAULT transition-colors">LABS CR</span>
                        </Link>
                        <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
                            The laboratory where QA excellence is engineered, not improvised.
                            Designing systems for the AI-driven future.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-mono text-sm font-bold mb-4 uppercase tracking-wider">Exploration</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link to="/mentoring" className="hover:text-cyan-DEFAULT transition-colors">Mentorship</Link></li>
                            <li><Link to="/teams" className="hover:text-cyan-DEFAULT transition-colors">For Teams</Link></li>
                        </ul>
                    </div>


                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-mono">
                    <p>© {new Date().getFullYear()} QALabs. Engineered in Costa Rica.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <span>System Status: Operational</span>
                        <span>v1.0.0</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};
