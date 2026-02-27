import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AlertTriangle, Home, Terminal } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="bg-lab-dark min-h-[80vh] text-white flex items-center justify-center p-4 relative overflow-hidden">
            <Helmet>
                <title>404 | Resource Not Found | QA Labs CR</title>
                <meta name="description" content="The requested resource is unavailable or has been moved within the laboratory." />
                <meta name="robots" content="noindex" />
            </Helmet>

            {/* Background Grid Decoration */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                <div className="absolute inset-0 bg-radial-gradient from-cyan-500/10 via-transparent to-transparent"></div>
            </div>

            <div className="max-w-md w-full text-center relative z-10">
                {/* Visual Error Code */}
                <div className="flex justify-center mb-8">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative px-8 py-6 bg-lab-dark border border-white/10 flex items-center gap-4">
                            <Terminal className="text-cyan-DEFAULT" size={32} />
                            <span className="text-6xl font-mono font-bold tracking-tighter text-white">404</span>
                        </div>
                    </div>
                </div>

                {/* Message */}
                <h1 className="text-2xl font-bold mb-4 font-mono uppercase tracking-widest text-cyan-DEFAULT">
                    Resource Unavailable
                </h1>

                <div className="bg-white/5 border-l-2 border-cyan-DEFAULT p-4 mb-8 text-left">
                    <div className="flex items-start gap-3">
                        <AlertTriangle className="text-yellow-500 shrink-0 mt-1" size={18} />
                        <p className="text-sm text-gray-400 font-mono leading-relaxed">
                            <span className="text-white block mb-1">STYX_PROTOCOL_ERROR:</span>
                            The requested module could not be located in the current environment.
                            The resource might have been moved or the experimental path is invalid.
                        </p>
                    </div>
                </div>

                {/* Action */}
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 bg-transparent border border-white/20 hover:border-cyan-DEFAULT hover:bg-cyan-DEFAULT/10 h-12 px-6 rounded-none transition-all duration-300 group"
                >
                    <Home size={18} className="group-hover:text-cyan-DEFAULT" />
                    <span className="font-mono text-sm font-bold uppercase tracking-wider">Initialize Home Protocol</span>
                </Link>

                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col items-center gap-2 opacity-50">
                    <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-gray-500">System Log v1.0.4</span>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
