// templates/18-car-rental/Layout.js
import { Navbar } from '../shared/Navbar';
import { Footer } from '../shared/Footer';
import { getThemeStyles } from '../shared/ThemeManager';

export const CarRentalTemplate = (data) => {
    return `
        <!DOCTYPE html>
        <html lang="ms">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${data.name} | Destinasi Kereta Sewa & Jualan Terbaik</title>
            <script src="https://cdn.tailwindcss.com"></script>
            <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700&family=Inter:wght@400;600;800&display=swap" rel="stylesheet">
            ${getThemeStyles('corporate')} 
            
            <style>
                body { font-family: 'Inter', sans-serif; background-color: #ffffff; color: #1e293b; }
                .font-speed { font-family: 'Orbitron', sans-serif; text-transform: uppercase; letter-spacing: 0.1em; }
                .hero-car {
                    background: linear-gradient(to right, rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.4)), 
                                url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80');
                    background-size: cover;
                    background-position: center;
                }
                .car-card:hover { border-color: #ef4444; }
                .spec-tag { background-color: #f1f5f9; border-radius: 4px; padding: 2px 8px; font-size: 10px; font-weight: 700; }
            </style>
        </head>
        <body class="antialiased">
            
            ${Navbar({ brandName: data.name, themeColor: '#0f172a' })}

            <header class="hero-car h-[80vh] flex items-center px-6 lg:px-24 text-white">
                <div class="max-w-3xl text-left">
                    <span class="text-red-500 font-speed text-sm mb-4 block">Premium Fleet 2026</span>
                    <h1 class="text-5xl md:text-8xl font-extrabold mb-8 leading-none italic uppercase tracking-tighter">
                        Pemanduan <br><span class="text-white/50">Tanpa Had.</span>
                    </h1>
                    <p class="text-lg mb-10 text-slate-300 font-light max-w-lg leading-relaxed">
                        Terokai ${data.location} dengan gaya. Pilihan kereta sewa dari kompak hingga mewah pada harga yang kompetitif.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4">
                        <a href="#fleet" class="bg-red-600 text-white px-10 py-4 font-bold rounded-sm hover:bg-red-700 transition shadow-lg uppercase text-sm tracking-widest">
                            Lihat Kenderaan
                        </a>
                        <a href="https://wa.me/${data.contact}" class="border border-white/30 px-10 py-4 font-bold rounded-sm hover:bg-white/10 transition uppercase text-sm tracking-widest">
                            Tempah Sekarang
                        </a>
                    </div>
                </div>
            </header>

            <section id="fleet" class="py-24 px-6 max-w-7xl mx-auto">
                <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <h2 class="text-4xl font-extrabold italic uppercase tracking-tighter border-l-8 border-red-600 pl-6">Pilihan Popular</h2>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="car-card border-2 border-slate-100 p-6 transition-all duration-300 rounded-xl group">
                        <div class="h-48 overflow-hidden rounded-lg mb-6">
                            <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80" 
                                 class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
                        </div>
                        <div class="flex justify-between items-start mb-4">
                            <div>
                                <h3 class="font-bold text-xl uppercase italic">Sedan Executive</h3>
                                <p class="text-slate-400 text-xs font-bold uppercase">Auto • 5 Seater</p>
                            </div>
                            <span class="text-red-600 font-black text-xl italic leading-none text-right">RM 150<br><span class="text-[10px] text-slate-400 font-normal not-italic">/Hari</span></span>
                        </div>
                        <div class="flex gap-2 mb-8">
                            <span class="spec-tag uppercase">Petrol</span>
                            <span class="spec-tag uppercase">Cruise Control</span>
                            <span class="spec-tag uppercase">Bluetooth</span>
                        </div>
                        <button class="w-full bg-slate-900 text-white py-3 font-bold uppercase text-xs tracking-[0.2em] hover:bg-red-600 transition">Pilih Unit</button>
                    </div>

                    <div class="car-card border-2 border-slate-100 p-6 transition-all duration-300 rounded-xl group">
                        <div class="h-48 overflow-hidden rounded-lg mb-6">
                            <img src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80" 
                                 class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
                        </div>
                        <div class="flex justify-between items-start mb-4">
                            <div>
                                <h3 class="font-bold text-xl uppercase italic">SUV Adventure</h3>
                                <p class="text-slate-400 text-xs font-bold uppercase">4WD • 7 Seater</p>
                            </div>
                            <span class="text-red-600 font-black text-xl italic leading-none text-right">RM 280<br><span class="text-[10px] text-slate-400 font-normal not-italic">/Hari</span></span>
                        </div>
                        <div class="flex gap-2 mb-8">
                            <span class="spec-tag uppercase">Diesel</span>
                            <span class="spec-tag uppercase">Roof Rack</span>
                            <span class="spec-tag uppercase">GPS</span>
                        </div>
                        <button class="w-full bg-slate-900 text-white py-3 font-bold uppercase text-xs tracking-[0.2em] hover:bg-red-600 transition">Pilih Unit</button>
                    </div>
                    </div>
            </section>

            <section class="bg-slate-50 py-20 px-6 border-y border-slate-200">
                <div class="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <i class="fas fa-shield-alt text-2xl text-red-600 mb-4"></i>
                        <h4 class="font-bold text-xs uppercase tracking-widest">Insurans Penuh</h4>
                    </div>
                    <div>
                        <i class="fas fa-key text-2xl text-red-600 mb-4"></i>
                        <h4 class="font-bold text-xs uppercase tracking-widest">Penghantaran Cepat</h4>
                    </div>
                    <div>
                        <i class="fas fa-tools text-2xl text-red-600 mb-4"></i>
                        <h4 class="font-bold text-xs uppercase tracking-widest">Servis Berkala</h4>
                    </div>
                    <div>
                        <i class="fas fa-headset text-2xl text-red-600 mb-4"></i>
                        <h4 class="font-bold text-xs uppercase tracking-widest">Sokongan 24/7</h4>
                    </div>
                </div>
            </section>

            ${Footer({ brandName: data.name })}
        </body>
        </html>
    `;
};
