import Link from 'next/link';

export default function HomePage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-indigo-500/30 overflow-hidden">

            {/* Background Gradients */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-indigo-600/20 blur-[120px]" />
                <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-cyan-500/20 blur-[120px]" />
            </div>

            <main className="flex-1 relative z-10 flex flex-col items-center pt-32 pb-16 px-4 sm:px-6 lg:px-8">

                {/* Hero Section */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-indigo-300 font-medium mb-8 animate-pulse">
                        <span className="flex h-2 w-2 rounded-full bg-indigo-500"></span>
                        Introducing MoHaZi v0.1
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
                        <span className="block text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400">
                            Cross-Stack Validation,
                        </span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 mt-2">
                            Simplified.
                        </span>
                    </h1>

                    <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
                        Write your schemas once in clean YAML-like syntax. Compile them to native validation logic for your entire stack. Say goodbye to duplicated rules.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="/docs"
                            className="px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] active:scale-95"
                        >
                            Get Started
                        </Link>
                        <a
                            href="https://github.com/mohazi"
                            target="_blank"
                            rel="noreferrer"
                            className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold transition-all active:scale-95 flex items-center gap-2"
                        >
                            View on GitHub
                        </a>
                    </div>
                </div>

                {/* Code Section */}
                <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-6 items-stretch mt-12">
                    {/* Input Container */}
                    <div className="flex-1 rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-xl overflow-hidden shadow-2xl relative group">
                        <div className="absolute top-0 right-0 px-3 py-1 bg-indigo-500/20 text-indigo-300 text-[10px] font-bold rounded-bl-lg tracking-widest uppercase border-b border-l border-indigo-500/20">Input Schema</div>
                        <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
                            <div className="w-3 h-3 rounded-full bg-red-500/70" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                            <div className="w-3 h-3 rounded-full bg-green-500/70" />
                            <span className="ml-2 text-xs font-mono text-slate-400">login.mhz</span>
                        </div>
                        <div className="p-6 text-sm font-mono overflow-x-auto h-full">
                            <pre className="text-slate-300 leading-relaxed">
                                <span className="text-pink-400">login:</span>{"\n"}
                                <span className="text-blue-300">{"  username:"}</span>{"\n"}
                                <span className="text-indigo-300">{"    type:"}</span> string{"\n"}
                                <span className="text-indigo-300">{"    required:"}</span> true{"\n"}
                                <span className="text-pink-400">{"    rules:"}</span>{"\n"}
                                <span className="text-blue-300">{"      minLength:"}</span> 3{"\n"}
                                <span className="text-indigo-300">{"      error:"}</span> <span className="text-green-300">&quot;Username too short&quot;</span>
                            </pre>
                        </div>
                    </div>

                    {/* Arrow Container */}
                    <div className="flex items-center justify-center relative z-10 lg:-mx-10 py-4 lg:py-0">
                        <div className="bg-slate-950 border border-white/10 text-slate-400 p-3 rounded-full shadow-lg">
                            <svg className="w-6 h-6 lg:-rotate-90 animate-pulse text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                        </div>
                    </div>

                    {/* Output Container */}
                    <div className="flex-1 rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-xl overflow-hidden shadow-2xl relative group">
                        <div className="absolute top-0 right-0 px-3 py-1 bg-cyan-500/20 text-cyan-300 text-[10px] font-bold rounded-bl-lg tracking-widest uppercase border-b border-l border-cyan-500/20">Generated Output</div>
                        <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
                            <div className="w-3 h-3 rounded-full bg-slate-600/70" />
                            <div className="w-3 h-3 rounded-full bg-slate-600/70" />
                            <div className="w-3 h-3 rounded-full bg-slate-600/70" />
                            <span className="ml-2 text-xs font-mono text-slate-400">login.ts</span>
                        </div>
                        <div className="p-6 text-sm font-mono overflow-x-auto h-full">
                            <pre className="text-slate-300 leading-relaxed">
                                <span className="text-pink-400">export const</span> <span className="text-blue-300">validateLogin</span> = <span className="text-indigo-300">async</span> (data) <span className="text-pink-400">=&gt;</span> {"{"}{"\n"}
                                <span className="text-pink-400">{"  let"}</span> result = {"{"} success: <span className="text-orange-300">false</span>, errors: [], data {"}"};{"\n"}
                                {"\n"}
                                <span className="text-pink-400">{"  if"}</span> (!data.username || <span className="text-indigo-300">typeof</span> data.username !== <span className="text-green-300">&quot;string&quot;</span>) {"{"}{"\n"}
                                {"    "}result.errors.push({"{"} path: <span className="text-green-300">&quot;username&quot;</span>, message: <span className="text-green-300">&quot;Invalid value&quot;</span> {"}"});{"\n"}
                                {"  }"} <span className="text-pink-400">else if</span> (data.username.length &lt; <span className="text-orange-300">3</span>) {"{"}{"\n"}
                                {"    "}result.errors.push({"{"} path: <span className="text-green-300">&quot;username&quot;</span>, message: <span className="text-green-300">&quot;Username too short&quot;</span> {"}"});{"\n"}
                                {"  }"}{"\n"}
                                {"\n"}
                                <span className="text-pink-400">{"  return"}</span> result.errors.length ? result : {"{"} success: <span className="text-orange-300">true</span>, data {"}"};{"\n"}
                                {"}"};
                            </pre>
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 mb-10">
                    <FeatureCard
                        title="Write Once, Validate Everywhere"
                        description="Compile .mhz schemas into native JavaScript, Rust, and more. Maintain 1-to-1 mapped rules across your frontend and backend."
                        icon="⚡"
                    />
                    <FeatureCard
                        title="Sequential Evaluation"
                        description="Chain transforms and rules naturally. Cast strings to numbers and validate boundaries in a single, clean flow."
                        icon="🔄"
                    />
                    <FeatureCard
                        title="Massive Type Support"
                        description="Built-in validation for emails, UUIDs, IPs, dates, Base64, documents, arrays, and custom enums right out of the box."
                        icon="🛡️"
                    />
                </div>

            </main>

            {/* Footer */}
            <footer className="relative z-10 border-t border-white/10 py-8 mt-20 text-center text-slate-500 text-sm">
                <p>© {new Date().getFullYear()} MoHaZi. All rights reserved.</p>
            </footer>
        </div>
    );
}

function FeatureCard({ title, description, icon }: { title: string, description: string, icon: string }) {
    return (
        <div className="p-6 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors group">
            <div className="w-12 h-12 rounded-lg bg-indigo-500/20 text-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-slate-400 leading-relaxed">{description}</p>
        </div>
    )
}
