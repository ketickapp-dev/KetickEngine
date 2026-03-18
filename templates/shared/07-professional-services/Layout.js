// templates/07-professional-services/Layout.js
import { Navbar } from '../shared/Navbar';
import { Footer } from '../shared/Footer';
import { getThemeStyles } from '../shared/ThemeManager';

export const ProfessionalTemplate = (data) => {
    return `
        <!DOCTYPE html>
        <html lang="ms">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${data.name} | Rakan Strategik Profesional Anda</title>
            <script src="https://cdn.tailwindcss.com"></script>
            <link href="https://fonts.googleapis.com/css2?family=Prata&family=Montserrat:wght@300;400;700&display=swap" rel="stylesheet">
            ${getThemeStyles('corporate')} 
            
            <style>
                body { font-family: 'Montserrat', sans-serif; background-color: #fff; color: #1e293b; }
                h1, h2, h3, .font-serif { font-family: 'Prata', serif; }
                .hero-border { border-left: 1px solid rgba(255,255,255,0.2); }
                .bg-navy { background-color: #0f172a; }
                .gold-accent { color: #c5a059; }
                .bg-gold { background-color: #c5a059; }
            </style>
        </head>
        <body class="antialiased">
            
            ${Navbar({ brandName: data.name, themeColor: '#0f172a' })}

            <header class="bg-navy py-24 px-6 lg:py-32 text-white border-b border-white/5">
                <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div class="text-left">
                        <span class="gold-accent text-xs font-bold tracking-[0.3em] uppercase mb-6 block italic">Kepakaran Profesional Sejak 2010</span>
                        <h1 class="text-5xl md:text-7xl font-bold mb-8 leading-[1.1]">
                            Solusi Undang-Undang & <span class="gold-accent italic text-4xl md:text-6xl">Strategi Perniagaan.</span>
                        </h1>
                        <p class="text-slate-400 text-lg mb-10 max-w-lg font-light leading-relaxed">
                            Membantu individu dan korporat di ${data.location} menguruskan risiko serta mencapai objektif perniagaan dengan integriti tinggi.
                        </p>
                        <div class="flex flex-col sm:flex-row gap-6">
                            <a href="https://wa.me/${data.contact}" class="bg-gold text-white px-10 py-4 font-bold text-center hover:bg-[#b08e4d] transition-all shadow-xl">
                                JADUALKAN KONSULTASI
                            </a>
                            <a href="#kepakaran" class="border border-white/20 px-10 py-4 font-bold text-center hover:bg-white/5 transition-all uppercase text-xs tracking-widest flex items-center justify-center">
                                LIHAT BIDANG KUASA
                            </a>
                        </div>
                    </div>
                    <div class="hidden lg:block relative">
                        <div class="hero-border pl-12">
                            <div class="text-6xl font-bold mb-4 gold-accent">98%</div>
                            <p class="text-slate-400 uppercase tracking-widest text-xs font-bold mb-12">Kadar Kejayaan Kes & Strategi</p>
                            <div class="text-6xl font-bold mb-4 gold-accent">150+</div>
                            <p class="text-slate-400 uppercase tracking-widest text-xs font-bold">Klien Korporat Berdaftar</p>
                        </div>
                    </div>
                </div>
            </header>

            <section id="kepakaran" class="py-24 px-6 max-w-7xl mx-auto">
                <div class="flex flex-col md:flex-row justify-between items-end mb-20">
                    <div class="max-w-2xl">
                        <h2 class="text-4xl font-bold text-slate-900 mb-6">Bidang Kepakaran Kami</h2>
                        <div class="w-20 h-1 bg-gold"></div>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-0 border border-slate-100">
                    <div class="p-12 hover:bg-slate-50 transition-all border-r border-b border-slate-100 group">
                        <div class="text-gold-accent mb-6 text-3xl transition-transform group-hover:scale-110"><i class="fas fa-gavel"></i></div>
                        <h3 class="font-bold text-xl mb-4">Litigasi Sivil</h3>
                        <p class="text-slate-500 text-sm leading-relaxed">Pengurusan tuntutan kontrak, pertikaian hartanah, dan remedi undang-undang yang efisien.</p>
                    </div>
                    <div class="p-12 hover:bg-slate-50 transition-all border-r border-b border-slate-100 group">
                        <div class="text-gold-accent mb-6 text-3xl transition-transform group-hover:scale-110"><i class="fas fa-handshake"></i></div>
                        <h3 class="font-bold text-xl mb-4">Konsultasi Korporat</h3>
                        <p class="text-slate-500 text-sm leading-relaxed">Khidmat nasihat penubuhan syarikat, pematuhan regulatori, dan pengurusan risiko perniagaan.</p>
                    </div>
                    <div class="p-12 hover:bg-slate-50 transition-all border-b border-slate-100 group">
                        <div class="text-gold-accent mb-6 text-3xl transition-transform group-hover:scale-110"><i class="fas fa-file-invoice-dollar"></i></div>
                        <h3 class="font-bold text-xl mb-4">Audit & Percukaian</h3>
                        <p class="text-slate-500 text-sm leading-relaxed">Perancangan cukai yang strategik dan pengurusan audit kewangan yang telus.</p>
                    </div>
                </div>
            </section>

            <section class="bg-slate-50 py-24 px-6">
                <div class="max-w-4xl mx-auto text-center">
                    <h2 class="text-3xl font-serif italic mb-8">"Kepantasan dalam bertindak, Ketepatan dalam membuat keputusan."</h2>
                    <p class="text-slate-400 uppercase tracking-[0.2em] text-xs font-bold mb-12">— Falsafah Utama ${data.name}</p>
                    <div class="h-px w-20 bg-slate-200 mx-auto"></div>
                </div>
            </section>

            ${Footer({ brandName: data.name })}
        </body>
        </html>
    `;
};
