// templates/10-cleaning-services/Layout.js
import { Navbar } from '../shared/Navbar';
import { Footer } from '../shared/Footer';
import { getThemeStyles } from '../shared/ThemeManager';

export const CleaningTemplate = (data) => {
    return `
        <!DOCTYPE html>
        <html lang="ms">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${data.name} | Pakar Kebersihan Kediaman & Pejabat</title>
            <script src="https://cdn.tailwindcss.com"></script>
            <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;700&family=Bricolage+Grotesque:wght@800&display=swap" rel="stylesheet">
            ${getThemeStyles('corporate')} 
            
            <style>
                body { font-family: 'Outfit', sans-serif; background-color: #ffffff; color: #334155; }
                h1, h2, h3, .font-heading { font-family: 'Bricolage Grotesque', sans-serif; }
                .hero-clean {
                    background: linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), 
                                url('https://images.unsplash.com/photo-1581578731548-c64695cc6954?auto=format&fit=crop&w=1200&q=80');
                    background-size: cover;
                    background-position: center;
                }
                .check-list li::before {
                    content: '✓';
                    color: #0ea5e9;
                    font-weight: bold;
                    margin-right: 10px;
                }
            </style>
        </head>
        <body class="antialiased">
            
            ${Navbar({ brandName: data.name, themeColor: '#0ea5e9' })}

            <header class="hero-clean min-h-[70vh] flex items-center justify-center px-6 text-center">
                <div class="max-w-3xl">
                    <span class="bg-sky-100 text-sky-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block italic">Kilat & Wangi Dalam 2 Jam</span>
                    <h1 class="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                        Kemaskan Rumah <br><span class="text-sky-500 italic">Tanpa Penat.</span>
                    </h1>
                    <p class="text-lg text-slate-500 mb-10 max-w-xl mx-auto font-medium">
                        Perkhidmatan pembersihan profesional di ${data.location} untuk rumah, pejabat, dan premis perniagaan anda.
                    </p>
                    <div class="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="https://wa.me/${data.contact}" class="bg-sky-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-sky-600 transition shadow-xl shadow-sky-200">
                            Book Slot Sekarang
                        </a>
                        <a href="#servis" class="bg-white text-slate-600 border border-slate-200 px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition">
                            Lihat Pakej
                        </a>
                    </div>
                </div>
            </header>

            <section id="servis" class="py-24 px-6 max-w-7xl mx-auto">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div class="relative">
                        <div class="bg-sky-500 w-full h-full absolute -top-4 -left-4 rounded-3xl -z-10"></div>
                        <img src="https://images.unsplash.com/photo-1527515545081-5db817172677?auto=format&fit=crop&w=800&q=80" class="rounded-3xl shadow-2xl">
                    </div>
                    <div>
                        <h2 class="text-4xl font-bold mb-8">Apa Yang Kami Buat?</h2>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div>
                                <h3 class="font-bold text-xl mb-4 text-sky-600 uppercase tracking-tighter italic">Cuci Rumah</h3>
                                <ul class="check-list space-y-2 text-sm text-slate-500">
                                    <li>Vakum & Mop Lantai</li>
                                    <li>Cuci Bilik Air</li>
                                    <li>Lap Tingkap & Habuk</li>
                                    <li>Kemas Katil</li>
                                </ul>
                            </div>
                            <div>
                                <h3 class="font-bold text-xl mb-4 text-sky-600 uppercase tracking-tighter italic">Cuci Karpet</h3>
                                <ul class="check-list space-y-2 text-sm text-slate-500">
                                    <li>Deep Extraction</li>
                                    <li>Anti-Bakteria</li>
                                    <li>Buang Bau Hapak</li>
                                    <li>Kering Dalam 4 Jam</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="bg-slate-900 text-white py-20 px-6 rounded-[50px] mx-6 mb-24 text-center relative overflow-hidden">
                <div class="absolute top-0 right-0 p-10 opacity-10">
                    <i class="fas fa-broom text-9xl"></i>
                </div>
                <div class="max-w-2xl mx-auto relative z-10">
                    <h2 class="text-3xl md:text-5xl font-bold mb-8 italic">Premis Anda Perlu <br>Nafas Baru?</h2>
                    <p class="text-slate-400 mb-10 text-lg">Hanya berikan lokasi dan masa, kami hantar pakar kebersihan kami terus ke pintu anda.</p>
                    <a href="https://wa.me/${data.contact}" class="inline-block bg-sky-400 text-slate-900 px-12 py-5 rounded-full font-black text-xl hover:bg-sky-500 transition-all scale-100 hover:scale-105">
                        DAPATKAN SEBUT HARGA PERCUMA
                    </a>
                </div>
            </section>

            ${Footer({ brandName: data.name })}
        </body>
        </html>
    `;
};
