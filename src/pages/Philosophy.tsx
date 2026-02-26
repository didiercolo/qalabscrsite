import { Terminal } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Philosophy = () => {
    return (
        <div className="bg-lab-dark min-h-screen text-white pt-10 pb-20">
            <Helmet>
                <title>The QALabs Manifesto | Our Philosophy on Quality Engineering</title>
                <meta name="description" content="Quality is not improvised; it is engineered. Read our manifesto on manual execution, AI in testing, and why traditional gatekeeping doesn't scale." />
                <link rel="canonical" href="https://qalabscr.com/philosophy" />
            </Helmet>

            {/* Manifesto Layout */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="mb-20 text-center">
                    <div className="inline-flex items-center justify-center p-4 bg-white/5 rounded-full mb-6 border border-white/10">
                        <Terminal size={32} className="text-white" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        The QALabs Manifesto
                    </h1>
                    <p className="text-gray-500 font-mono text-sm">v1.0.0 // ENGINEER_QUALITY</p>
                </div>

                <div className="space-y-16">

                    <section className="relative pl-8 border-l border-white/10">
                        <span className="absolute -left-[5px] top-0 w-2 h-2 bg-cyan rounded-full" />
                        <h2 className="text-2xl font-bold mb-4 text-white">01. Quality is not improvised. It is engineered.</h2>
                        <p className="text-lg text-gray-400 leading-relaxed">
                            We reject the notion that QA is a "phase" that happens at the end.
                            Quality is an architectural attribute, like performance or security.
                            If you don't design for it, you cannot test for it.
                        </p>
                    </section>

                    <section className="relative pl-8 border-l border-white/10">
                        <span className="absolute -left-[5px] top-0 w-2 h-2 bg-white rounded-full" />
                        <h2 className="text-2xl font-bold mb-4 text-white">02. Manual testing is valid. Manual execution is dead.</h2>
                        <p className="text-lg text-gray-400 leading-relaxed">
                            Exploratory testing—manual and creative—is invaluable.
                            Repeated manual execution of regression scripts is a waste of human intellect.
                            We automate the known to explore the unknown.
                        </p>
                    </section>

                    <section className="relative pl-8 border-l border-white/10">
                        <span className="absolute -left-[5px] top-0 w-2 h-2 bg-mentor rounded-full" />
                        <h2 className="text-2xl font-bold mb-4 text-white">03. AI is a tool, not a savior.</h2>
                        <p className="text-lg text-gray-400 leading-relaxed">
                            We don't use AI to write lazy tests. We use AI to analyze vast amounts of data,
                            predict risk hotspots, and generate edges cases no human would think of.
                            But the engineering judgment remains ours.
                        </p>
                    </section>

                    <section className="relative pl-8 border-l border-white/10">
                        <span className="absolute -left-[5px] top-0 w-2 h-2 bg-success rounded-full" />
                        <h2 className="text-2xl font-bold mb-4 text-white">04. Gatekeepers don't scale.</h2>
                        <p className="text-lg text-gray-400 leading-relaxed">
                            The traditional "QA Manager" who approves every release is a bottleneck.
                            We build automated quality gates and observability systems that allow quality to scale with velocity.
                        </p>
                    </section>

                </div>

                <div className="mt-24 p-8 border border-white/10 bg-black/20 text-center">
                    <p className="text-xl italic font-serif text-gray-300 mb-6">
                        "We don't sell peace of mind. We sell confidence backed by data."
                    </p>
                    <div className="font-mono text-sm text-cyan uppercase tracking-widest">
                        — The QALabs Team
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Philosophy;
