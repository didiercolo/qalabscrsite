import { Card } from '../components/ui/Card';
import { Network, Bot, Workflow } from 'lucide-react';

const Lab = () => {
    return (
        <div className="bg-lab-dark min-h-screen text-white pt-10 pb-20">

            {/* ... header ... */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <div className="flex items-center gap-2 mb-4 text-cyan text-sm font-mono uppercase tracking-widest">
                    <span className="w-2 h-2 bg-cyan rounded-full animate-pulse" />
                    Environment: Active
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                    The <span className="text-cyan">Lab</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
                    This is our skunkworks environment. We don't just read about new QA tools; we dismantle them,
                    rebuild them, and test them against production-grade chaos.
                </p>
            </div>

            {/* Lab Grid / System Map */}
            <div className="border-y border-white/5 bg-black/20 py-16 mb-20 overflow-hidden relative">
                <div className="absolute inset-0 lab-grid opacity-10 pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Experiment 1 */}
                        <Card className="hover:border-cyan/50 transition-colors">
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-cyan/10 border border-cyan/20 text-cyan">
                                    <Bot size={24} />
                                </div>
                                <span className="text-xs font-mono text-gray-500 border border-white/10 px-2 py-1">EXP-004</span>
                            </div>
                            <h3 className="text-lg font-bold mb-2">Self-Healing Selenium Grid</h3>
                            <p className="text-sm text-gray-400 mb-4">
                                Integrating LLMs to parse DOM changes and auto-correct selectors in real-time during execution.
                            </p>
                            <div className="h-1 w-full bg-white/5 overflow-hidden">
                                <div className="h-full bg-cyan w-3/4" />
                            </div>
                            <div className="mt-2 flex justify-between text-xs font-mono text-gray-500">
                                <span className="text-cyan">Status: Validating</span>
                                <span className="text-cyan">75%</span>
                            </div>
                        </Card>

                        {/* Experiment 2 */}
                        <Card className="hover:border-mentor/50 transition-colors">
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-mentor/10 border border-mentor/20 text-mentor">
                                    <Network size={24} />
                                </div>
                                <span className="text-xs font-mono text-gray-500 border border-white/10 px-2 py-1">EXP-012</span>
                            </div>
                            <h3 className="text-lg font-bold mb-2">Chaos Mesh for Frontend</h3>
                            <p className="text-sm text-gray-400 mb-4">
                                Injecting network latency and 500 errors directly into client-side API calls to test degradation UX.
                            </p>
                            <div className="h-1 w-full bg-white/5 overflow-hidden">
                                <div className="h-full bg-mentor w-full" />
                            </div>
                            <div className="mt-2 flex justify-between text-xs font-mono text-gray-500">
                                <span className="text-mentor">Status: Complete</span>
                                <span className="text-mentor">100%</span>
                            </div>
                        </Card>

                        {/* Experiment 3 */}
                        <Card className="hover:border-success/50 transition-colors">
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-success/10 border border-success/20 text-success">
                                    <Workflow size={24} />
                                </div>
                                <span className="text-xs font-mono text-gray-500 border border-white/10 px-2 py-1">EXP-009</span>
                            </div>
                            <h3 className="text-lg font-bold mb-2">Contract Testing at Scale</h3>
                            <p className="text-sm text-gray-400 mb-4">
                                Automating Pact contract generation from Open Telemetry traces in distributed microservices.
                            </p>
                            <div className="h-1 w-full bg-white/5 overflow-hidden">
                                <div className="h-full bg-success w-1/2" />
                            </div>
                            <div className="mt-2 flex justify-between text-xs font-mono text-gray-500">
                                <span className="text-success">Status: In Progress</span>
                                <span className="text-success">50%</span>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>

            {/* Methodology Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">The Methodology</h2>
                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="mt-1">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full border border-cyan/50 text-cyan text-sm font-mono">01</span>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white mb-2">Hypothesis & Design</h4>
                                    <p className="text-gray-400">We don't implement features; we solve architecture problems. Every tool starts with a system design document.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full border border-cyan/50 text-cyan text-sm font-mono">02</span>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white mb-2">Stress Testing</h4>
                                    <p className="text-gray-400">Can it handle 10k users? What happens if the DB locks? We break things early.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full border border-cyan/50 text-cyan text-sm font-mono">03</span>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white mb-2">Codification</h4>
                                    <p className="text-gray-400">Once proven, we turn it into reusable blueprints and mentorship modules.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-cyan/10 to-transparent rounded-lg transform rotate-3" />
                        <div className="bg-black/50 border border-white/10 p-8 rounded-lg relative backdrop-blur-sm">
                            <div className="font-mono text-xs text-gray-500 mb-4 flex gap-2">
                                <span className="text-red-400">●</span>
                                <span className="text-yellow-400">●</span>
                                <span className="text-green-400">●</span>
                                <span className="ml-auto">bash</span>
                            </div>
                            <div className="font-mono text-sm space-y-2">
                                <p className="text-gray-400">$ init_sequence --target=legacy_qa</p>
                                <p className="text-cyan"> &gt; Analysing process bottlenecks...</p>
                                <p className="text-cyan"> &gt; Found 14 manual gates.</p>
                                <p className="text-gray-400">$ deploy_architecture --mode=autonomous</p>
                                <p className="text-green-400"> &gt; Injecting CI/CD quality gates...</p>
                                <p className="text-green-400"> &gt; Establishing contract tests...</p>
                                <p className="text-green-400"> &gt; System autonomy: 94%</p>
                                <p className="text-white animate-pulse">_</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Lab;
