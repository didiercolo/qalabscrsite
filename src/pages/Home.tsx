import { Card } from '../components/ui/Card';
import { Cpu, Shield, Activity } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div className="bg-lab-dark text-white overflow-hidden">
            <Helmet>
                <title>QA Labs CR | Technical Quality Assurance & Engineering Lab</title>
                <meta name="description" content="QA Labs CR is a technical exploration lab designing scalable QA systems, AI-driven testing, and cultivating senior-level engineering judgment. Beyond manual execution." />
                <link rel="canonical" href="https://qalabscr.com/" />

                {/* Open Graph Tags */}
                <meta property="og:title" content="QA Labs CR | Technical Quality Assurance & Engineering Lab" />
                <meta property="og:description" content="QA Labs CR is a technical exploration lab designing scalable QA systems, AI-driven testing, and cultivating senior-level engineering judgment." />
                <meta property="og:url" content="https://qalabscr.com/" />
            </Helmet>

            {/* Structured Data (JSON-LD) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "QA Labs CR",
                        "url": "https://qalabscr.com",
                        "logo": "https://qalabscr.com/favicon.svg",
                        "description": "Technical exploration lab for Quality Assurance systems and AI-driven testing.",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "San Jose",
                            "addressCountry": "CR"
                        }
                    })
                }}
            />

            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center p-4">
                {/* Background Grid */}
                <div className="absolute inset-0 lab-grid opacity-20 pointer-events-none" />

                {/* Abstract Tech Decoration */}
                <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-DEFAULT/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-mentor-DEFAULT/5 rounded-full blur-3xl" />

                <div className="relative z-10 max-w-5xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 border border-cyan-DEFAULT/30 bg-cyan-DEFAULT/5 rounded-full text-cyan-DEFAULT text-xs font-mono tracking-wide">
                        <span className="w-2 h-2 rounded-full bg-cyan-DEFAULT animate-pulse" />
                        SYSTEMS OPERATIONAL
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
                        QA is <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-DEFAULT to-blue-500">Engineering</span>.
                        <br />
                        Not Just Execution.
                    </h1>

                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                        QALabs is a technical exploration lab where we design scalable QA systems,
                        integrate AI-driven testing, and cultivate senior-level engineering judgment.
                    </p>


                </div>
            </section>

            {/* The Problem / Solution Grid */}
            <section className="py-24 relative border-t border-white/5 bg-black/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold mb-4"><span className="text-cyan-DEFAULT font-mono text-xl mr-2">01.</span>The Directive</h2>
                        <div className="w-20 h-1 bg-cyan-DEFAULT mb-8" />
                        <p className="text-xl text-gray-300 max-w-3xl">This is where quality is designed, not sold. We move beyond manual execution into system architecture and predictive engineering.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card hoverEffect className="group">
                            <div className="w-12 h-12 bg-cyan-DEFAULT/10 border border-cyan-DEFAULT/20 flex items-center justify-center mb-6 text-cyan-DEFAULT group-hover:scale-110 transition-transform">
                                <Cpu size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-DEFAULT transition-colors">System Design</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                We treat QA as an integral part of the system architecture, not an afterthought or a final gateway check.
                            </p>
                        </Card>

                        <Card hoverEffect className="group">
                            <div className="w-12 h-12 bg-mentor-DEFAULT/10 border border-mentor-DEFAULT/20 flex items-center justify-center mb-6 text-mentor-DEFAULT group-hover:scale-110 transition-transform">
                                <Activity size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-mentor-DEFAULT transition-colors">Technical Mentorship</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Transforming reactive testers into proactive QA engineers through direct, brutal, and honest technical guidance.
                            </p>
                        </Card>

                        <Card hoverEffect className="group">
                            <div className="w-12 h-12 bg-success-DEFAULT/10 border border-success-DEFAULT/20 flex items-center justify-center mb-6 text-success-DEFAULT group-hover:scale-110 transition-transform">
                                <Shield size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-success-DEFAULT transition-colors">AI & Automation</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Leveraging modern AI tools to predict failures before they happen and automate the redundant, leaving room for deep engineering.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Stats / Proof Line */}
            <section className="py-16 border-y border-white/5 bg-lab-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center gap-8">
                    <div className="flex items-center gap-4">
                        <span className="text-4xl font-bold text-white font-mono">10+</span>
                        <span className="text-xs text-gray-400 uppercase tracking-widest">Years of<br />Deep Tech Exp</span>
                    </div>
                    <div className="h-10 w-px bg-white/10 hidden md:block" />
                    <div className="flex items-center gap-4">
                        <span className="text-4xl font-bold text-white font-mono">100%</span>
                        <span className="text-xs text-gray-400 uppercase tracking-widest">Autonomy<br />Achieved</span>
                    </div>
                    <div className="h-10 w-px bg-white/10 hidden md:block" />
                    <div className="flex items-center gap-4">
                        <span className="text-4xl font-bold text-white font-mono">AI</span>
                        <span className="text-xs text-gray-400 uppercase tracking-widest">Native<br />Implementation</span>
                    </div>
                </div>
            </section>

            {/* Call to Action Grid */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="bg-gradient-to-br from-cyan-900/20 to-transparent p-1 border border-cyan-DEFAULT/30 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-cyan-DEFAULT/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                        <div className="relative p-10 h-full flex flex-col items-start">
                            <h3 className="text-2xl font-bold mb-4 text-white">For Professionals</h3>
                            <p className="text-gray-400 mb-8 flex-grow">
                                Stuck in manual execution? Build your roadmap to becoming a Senior QA Engineer.
                            </p>

                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-mentor-900/20 to-transparent p-1 border border-mentor-DEFAULT/30 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-mentor-DEFAULT/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                        <div className="relative p-10 h-full flex flex-col items-start">
                            <h3 className="text-2xl font-bold mb-4 text-white">For Engineering Teams</h3>
                            <p className="text-gray-400 mb-8 flex-grow">
                                Need sustainable quality? We build the infrastructure you need to scale without breaking.
                            </p>

                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;
