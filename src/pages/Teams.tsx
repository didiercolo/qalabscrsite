import { Card } from '../components/ui/Card';
import { BarChart3, Lock, Zap, CheckSquare } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Teams = () => {
    return (
        <div className="bg-lab-dark min-h-screen text-white pt-10 pb-20">
            <Helmet>
                <title>QA for Engineering Teams & Technical Partnership | QA Labs CR</title>
                <meta name="description" content="Scale your engineering velocity without compromising quality. We build automated CI/CD pipelines, security gates, and quality dashboards for modern teams." />
                <link rel="canonical" href="https://qalabscr.com/teams" />
            </Helmet>

            {/* Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <div className="flex items-center gap-2 mb-4 text-white font-mono uppercase tracking-widest text-xs opacity-70">
                        <span className="w-2 h-2 bg-white rounded-full" />
                        Technical Partnership
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                        Scale Without <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-blue-500">Imploding.</span>
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8">
                        Your team is shipping fast, but quality is lagging. We deploy senior engineers to build the infrastructure
                        that keeps your velocity high and your production incidents low.
                    </p>

                </div>
                <div className="relative">
                    {/* Abstract System Visual */}
                    <div className="aspect-video bg-black/40 border border-white/10 rounded-lg p-6 relative overflow-hidden backdrop-blur-sm">
                        <div className="absolute inset-0 bg-grid-pattern opacity-10" />

                        {/* Simulated Dashboard UI */}
                        <div className="space-y-4 font-mono text-xs">
                            <div className="flex justify-between border-b border-white/10 pb-2">
                                <span className="text-gray-500">PIPELINE_STATUS</span>
                                <span className="text-green-400">OPTIMAL</span>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white/5 p-3 rounded">
                                    <span className="block text-gray-500 mb-1">Test Coverage</span>
                                    <span className="text-xl font-bold text-cyan">94.2%</span>
                                </div>
                                <div className="bg-white/5 p-3 rounded">
                                    <span className="block text-gray-500 mb-1">Deploy Time</span>
                                    <span className="text-xl font-bold text-white">4m 12s</span>
                                </div>
                            </div>
                            <div className="bg-white/5 p-3 rounded">
                                <span className="block text-gray-500 mb-2">Automated Gates</span>
                                <div className="flex gap-2">
                                    <span className="px-2 py-0.5 bg-green-900/50 text-green-400 rounded border border-green-500/20">Unit</span>
                                    <span className="px-2 py-0.5 bg-green-900/50 text-green-400 rounded border border-green-500/20">Integration</span>
                                    <span className="px-2 py-0.5 bg-green-900/50 text-green-400 rounded border border-green-500/20">E2E</span>
                                    <span className="px-2 py-0.5 bg-cyan/20 text-cyan rounded border border-cyan/20">Security</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card className="hover:border-cyan/50 transition-colors">
                        <Zap className="text-cyan mb-4" size={32} />
                        <h3 className="text-xl font-bold mb-3">CI/CD Pipeline Design</h3>
                        <p className="text-gray-400 text-sm">
                            Sanity checks, smoke tests, and regression suites integrated directly into your PR workflow. No human bottlenecks.
                        </p>
                    </Card>
                    <Card className="hover:border-cyan/50 transition-colors">
                        <Lock className="text-cyan mb-4" size={32} />
                        <h3 className="text-xl font-bold mb-3">Automated Security</h3>
                        <p className="text-gray-400 text-sm">
                            Shift-left security testing (SAST/DAST) integrated into the development lifecycle.
                        </p>
                    </Card>
                    <Card className="hover:border-cyan/50 transition-colors">
                        <BarChart3 className="text-cyan mb-4" size={32} />
                        <h3 className="text-xl font-bold mb-3">Quality Metrics</h3>
                        <p className="text-gray-400 text-sm">
                            Real dashboards tracking DORA metrics, lead time for changes, and change failure rates.
                        </p>
                    </Card>
                </div>
            </div>

            {/* Bottom CTA */}
            <div className="border-t border-white/5 bg-gradient-to-b from-lab-dark to-black py-24">
                <div className="max-w-3xl mx-auto text-center px-4">
                    <h2 className="text-3xl font-bold mb-6">Build a fortress, not a house of cards.</h2>
                    <div className="flex flex-col md:flex-row justify-center gap-8 mb-10 text-left md:text-center text-gray-400 text-sm">
                        <div className="flex items-center gap-2 justify-center">
                            <CheckSquare size={16} className="text-cyan" />
                            <span>Fixed price deployments</span>
                        </div>
                        <div className="flex items-center gap-2 justify-center">
                            <CheckSquare size={16} className="text-cyan" />
                            <span>Architecture ownership transfer</span>
                        </div>
                        <div className="flex items-center gap-2 justify-center">
                            <CheckSquare size={16} className="text-cyan" />
                            <span>Team training included</span>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Teams;
