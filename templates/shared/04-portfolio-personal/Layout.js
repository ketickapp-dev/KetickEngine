// templates/04-portfolio-personal/Layout.js
import { Navbar } from '../shared/Navbar';
import { Footer } from '../shared/Footer';
import { getThemeStyles } from '../shared/ThemeManager';

export const PortfolioTemplate = (data) => {
    return `
        <!DOCTYPE html>
        <html lang="ms">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${data.name} | Portfolio Profesional</title>
            <script src="https://cdn.tailwindcss.com"></script>
            <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;500;700&family=Inter:wght@400;600&display=swap" rel="stylesheet">
            ${getThemeStyles('tech')} 
            
            <style>
                body { font-family: 'Inter', sans-serif; background-color: #000; color: #fff; }
                h1, h2, h3, .font-heading { font-family: 'Space Grotesk', sans-serif; }
                .glass-card { background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.05); }
                .accent-gradient { background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
                .skill-dot { height: 8px; width: 8px; background-color: #6366f1; border-radius: 50%; display: inline-block; margin-right: 8px; }
            </style>
        </head>
        <body class="antialiased">
            
            ${Navbar({ brandName: data.name, themeColor: 'transparent' })}

            <header class="min-h-screen flex items-center px-6 lg:px-24 py-20 relative overflow-hidden">
                <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]"></div>
                
                <div class="max-w-4xl z-10">
                    <span class="text-indigo-400 font-bold tracking-[0.3em] uppercase mb-4 block text-sm">Berpangkalan di ${data.location}</span>
                    <h1 class="text-6xl md:text-9xl font-bold mb-8 leading-none tracking-tighter">
                        Halo, Saya <br><span class="accent-gradient">${data.name}.</span>
                    </h1>
                    <p class="text-lg md:text-2xl text-slate-400 mb-12 max-w-2xl font-light leading-relaxed">
                        Pakar dalam transformasi digital dan inovasi teknologi. Saya membantu perniagaan membina masa depan melalui solusi kreatif.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-6">
                        <a href="https://wa.me/${data.contact}" class="bg-indigo-600 text-white px-10 py-4 rounded-full font-bold hover:bg-indigo-700 transition-all text-center">
                            Sembang Projek
                        </a>
                        <a href="#projek" class="border border-white/20 text-white px-10 py-4 rounded-full font-bold hover:bg-white/5 transition-all text-center">
                            Lihat Portfolio
                        </a>
                    </div>
                </div>
            </header>

            <section class="py-24 px-6 lg:px-24 bg-[#050505]">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-24 max-w-7xl mx-auto">
                    <div>
                        <h2 class="text-4xl font-bold mb-12">Kepakaran Utama</h2>
                        <div class="space-y-8">
                            <div>
                                <div class="flex justify-between mb-2">
                                    <span class="font-bold">Software Development</span>
                                    <span class="text-indigo-400">95%</span>
                                </div>
                                <div class="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                                    <div class="bg-indigo-600 h-full w-[95%]"></div>
                                </div>
                            </div>
                            <div>
                                <div class="flex justify-between mb-2">
                                    <span class="font-bold">Project Management</span>
                                    <span class="text-indigo-400">88%</span>
                                </div>
                                <div class="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                                    <div class="bg-indigo-600 h-full w-[88%]"></div>
                                </div>
                            </div>
                            <div>
                                <div class="flex justify-between mb-2">
                                    <span class="font-bold">UI/UX Design</span>
                                    <span class="text-indigo-400">80%</span>
                                </div>
                                <div class="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                                    <div class="bg-indigo-600 h-full w-[80%]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="glass-card p-10 rounded-3xl">
                        <h3 class="text-2xl font-bold mb-6">Misi Saya</h3>
                        <p class="text-slate-400 leading-relaxed mb-8">
                            "Merapatkan jurang antara idea dan realiti digital dengan menggunakan teknologi yang mampan dan berpusatkan manusia."
                        </p>
                        <div class="flex flex-wrap gap-4">
                            <span class="text-xs font-bold uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full">Innovative</span>
                            <span class="text-xs font-bold uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full">Strategic</span>
                            <span class="text-xs font-bold uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full">Global Mindset</span>
                        </div>
                    </div>
                </div>
            </section>

            <section class="py-24 px-6 max-w-5xl mx-auto text-center">
                <h2 class="text-3xl font-bold mb-16 italic">Perjalanan Profesional</h2>
                <div class="space-y-12 text-left">
                    <div class="flex gap-8 items-start">
                        <div class="text-indigo-400 font-bold pt-1">2024 - Kini</div>
                        <div>
                            <h4 class="font-bold text-xl">Founder @ AzlanMymo Lab</h4>
                            <p class="text-slate-500 text-sm">Membangunkan KETICK OS dan ekosistem SaaS untuk usahawan Malaysia.</p>
                        </div>
                    </div>
                    <div class="flex gap-8 items-start">
                        <div class="text-slate-600 font-bold pt-1">2021 - 2023</div>
                        <div>
                            <h4 class="font-bold text-xl">Senior Tech Lead</h4>
                            <p class="text-slate-500 text-sm">Menguruskan pembangunan sistem ERP berskala besar untuk industri kilang.</p>
                        </div>
                    </div>
                </div>
            </section>

            ${Footer({ brandName: data.name })}
        </body>
        </html>
    `;
};
