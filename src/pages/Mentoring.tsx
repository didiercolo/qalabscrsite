import { Card } from '../components/ui/Card';
import { Brain, Target, Code, CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Mentoring = () => {
    const roadmap = [
        {
            title: "Phase 1: Deconstruction",
            desc: "We break down your current misconceptions about QA. Stop checking boxes. Start analyzing architecture.",
            icon: <Brain size={20} className="text-mentor" />
        },
        {
            title: "Phase 2: Automation & Code",
            desc: "You will write code. Not just scripts, but frameworks. TypeScript, Playwright, CI/CD pipelines as code.",
            icon: <Code size={20} className="text-mentor" />
        },
        {
            title: "Phase 3: System Design",
            desc: "Learn to design testability into the system. Shift left effectively, not just as a buzzword.",
            icon: <Target size={20} className="text-mentor" />
        },
        {
            title: "Phase 4: Autonomy",
            desc: "You graduate when you no longer need us. When you can define the quality strategy for a product alone.",
            icon: <CheckCircle size={20} className="text-mentor" />
        }
    ];

    return (
        <div className="bg-lab-dark min-h-screen text-white pt-10 pb-20">
            <Helmet>
                <title>QA Mentorship & Immersion Program | QA Labs CR</title>
                <meta name="description" content="Transform from a manual tester to a Senior QA Engineer. Our brutal and technical mentorship covers TypeScript, Playwright, CI/CD, and System Design." />
                <link rel="canonical" href="https://qalabscr.com/mentoring" />
            </Helmet>

            {/* Hero */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                <div className="flex items-center gap-2 mb-4 text-mentor text-sm font-mono uppercase tracking-widest">
                    <span className="w-2 h-2 bg-mentor rounded-full" />
                    QA Immersion Program
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                    Stop Executing.<br />
                    Start <span className="text-mentor">Engineering</span>.
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl leading-relaxed mb-8">
                    A brutal, honest, and technical mentorship program designed to transform manual testers into
                    Senior QA Engineers who can architect systems.
                </p>

            </div>

            {/* The Roadmap */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
                <h2 className="text-2xl font-bold mb-12 flex items-center gap-3">
                    <span className="font-mono text-mentor">01.</span> The Transformation Protocol
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="absolute top-1/2 left-0 w-full h-px bg-dashed border-t border-white/10 hidden md:block -z-10" />

                    {roadmap.map((phase, index) => (
                        <Card key={index} className="bg-lab-dark border border-white/10 hover:border-mentor/50 transition-colors">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-mentor/10 rounded border border-mentor/20">
                                    {phase.icon}
                                </div>
                                <h3 className="font-bold text-lg text-white">{phase.title}</h3>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {phase.desc}
                            </p>
                        </Card>
                    ))}
                </div>
            </div>

            {/* FAQ / Direct Talk */}
            <div className="bg-black/20 border-y border-white/5 py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-8">This is NOT for everyone.</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                        <div>
                            <h4 className="text-red-400 font-bold mb-2 flex items-center gap-2"><span className="text-xs">✕</span> WE DO NOT</h4>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                <li>• Sell pre-recorded video courses</li>
                                <li>• Promise "get rich quick" tech jobs</li>
                                <li>• Teach you to click buttons</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-green-400 font-bold mb-2 flex items-center gap-2"><span className="text-xs">✓</span> WE DO</h4>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                <li>• Review your actual code</li>
                                <li>• Challenge your architectural decisions</li>
                                <li>• Prepare you for Senior/Staff roles</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-16">
                        <p className="text-gray-300 mb-6 font-mono text-sm max-w-2xl mx-auto">
                            "I don't want a cert. I want to build systems." <br />
                            — If this sounds like you, let's talk.
                        </p>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Mentoring;
