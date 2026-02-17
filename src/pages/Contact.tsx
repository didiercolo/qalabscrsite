import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Mail, Calendar, MessageSquare, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <div className="bg-lab-dark min-h-screen text-white pt-10 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Contact Info */}
                    <div>
                        <div className="flex items-center gap-2 mb-4 text-white font-mono uppercase tracking-widest text-xs opacity-70">
                            <span className="w-2 h-2 bg-cyan rounded-full animate-pulse" />
                            Uplink Open
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                            Initialize <span className="text-cyan">Contact</span> Protocol
                        </h1>
                        <p className="text-gray-400 text-lg mb-12">
                            Whether you need a full quality audit or a personal roadmap,
                            we start with a conversation, not a sales pitch.
                        </p>

                        <div className="space-y-6">
                            <Card className="flex items-center gap-6 p-6 hover:border-cyan/50 cursor-pointer group transition-colors">
                                <div className="p-4 bg-white/5 rounded-full text-cyan group-hover:bg-cyan group-hover:text-lab-dark transition-colors">
                                    <Calendar size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Schedule a Discovery Call</h3>
                                    <p className="text-gray-400 text-sm">30-min strategy session. No strings.</p>
                                </div>
                            </Card>

                            <Card className="flex items-center gap-6 p-6 hover:border-white/50 cursor-pointer group transition-colors">
                                <div className="p-4 bg-white/5 rounded-full text-white group-hover:bg-white group-hover:text-lab-dark transition-colors">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Email The Lab</h3>
                                    <p className="text-gray-400 text-sm">hello@qalabs.io</p>
                                </div>
                            </Card>

                            <div className="flex items-center gap-4 text-gray-500 mt-12 p-4 border border-white/5 rounded-lg bg-black/10">
                                <MapPin size={16} />
                                <span className="text-sm font-mono">Operating Globally / HQ: Costa Rica</span>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-black/20 border border-white/10 p-8 md:p-12 relative">
                        <div className="absolute top-0 right-0 p-2">
                            <div className="flex gap-1">
                                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                                <div className="w-2 h-2 rounded-full bg-green-500/50" />
                            </div>
                        </div>

                        <h3 className="font-mono text-xl mb-6 text-white border-b border-white/10 pb-4">
                            &gt; Send_Message()
                        </h3>

                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-mono text-gray-400 uppercase">Input: Name</label>
                                <input type="text" className="w-full bg-lab-dark border border-white/10 p-3 text-white focus:border-cyan focus:outline-none transition-colors" placeholder="John Doe" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-mono text-gray-400 uppercase">Input: Email</label>
                                <input type="email" className="w-full bg-lab-dark border border-white/10 p-3 text-white focus:border-cyan focus:outline-none transition-colors" placeholder="john@example.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-mono text-gray-400 uppercase">Input: Context</label>
                                <select className="w-full bg-lab-dark border border-white/10 p-3 text-white focus:border-cyan focus:outline-none transition-colors">
                                    <option>Mentorship Inquiry</option>
                                    <option>Audit for my Company</option>
                                    <option>General Question</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-mono text-gray-400 uppercase">Input: Message</label>
                                <textarea rows={4} className="w-full bg-lab-dark border border-white/10 p-3 text-white focus:border-cyan focus:outline-none transition-colors" placeholder="Tell us about your system..." />
                            </div>

                            <Button fullWidth icon={<MessageSquare size={16} />}>TRANSMIT</Button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
