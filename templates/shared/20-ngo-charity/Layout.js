// templates/20-ngo-charity/Layout.js
import { Navbar } from '../shared/Navbar';
import { Footer } from '../shared/Footer';
import { getThemeStyles } from '../shared/ThemeManager';

export const NGOTemplate = (data) => {
    return `
        <!DOCTYPE html>
        <html lang="ms">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${data.name} | Hulurkan Tangan, Ringankan Beban</title>
            <script src="https://cdn.tailwindcss.com"></script>
            <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700;800&display=swap" rel="stylesheet">
            ${getThemeStyles('corporate')} 
            
            <style>
                body { font-family: 'Plus Jakarta Sans', sans-serif; background-color: #fdfdfd; color: #1e293b; }
                .hero-charity {
                    background: linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), 
                                url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80');
                    background-size: cover;
                    background-position: center;
                }
                .progress-bar { transition: width 1.5s ease-in-out; }
            </style>
        </head>
        <body class="antialiased">
            
            ${Navbar({ brandName: data.name, themeColor: '#0f172a' })}

            <header class="hero-charity h-[85vh] flex items-center justify-center text-center text-white px-6">
                <div class="max-w-4xl">
                    <span class="bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block italic">Projek Kemanusiaan 2026</span>
                    <h1 class="text-4xl md:text-7xl font-extrabold mb-8 leading-tight">
                        Bersama Kita Mengubah <br><span class="text-blue-400">Masa Depan Mereka.</span>
                    </h1>
                    <p class="text-lg mb-12 text-slate-200 font-light max-w-2xl mx-auto">
                        Sumbangan anda di ${data.location} amat bermakna untuk menyediakan keperluan asas dan pendidikan bagi golongan asnaf serta yang memerlukan.
                    </p>
                    <div class="flex flex-col sm:flex-row justify-center gap-6">
                        <a href="#sumbang" class="bg-blue-600 text-white px-12 py-5 rounded-xl font-bold text-lg hover:bg-blue-700 transition shadow-2xl shadow-blue-500/20 uppercase tracking-tighter italic">
                            Sumbang Sekarang
                        </a>
                        <a href="#misi" class="border border-white/30 px-12 py-5 rounded-xl font-bold text-lg hover:bg-white/10 transition uppercase tracking-tighter italic">
                            Lihat Misi Kami
                        </a>
                    </div>
                </div>
            </header>

            <section id="sumbang" class="py-24 px-6 max-w-5xl mx-auto">
                <div class="bg-white p-10 md:p-16 rounded-[40px] shadow-2xl shadow-slate-200/50 border border-slate-50 relative -mt-32 z-20">
                    <div class="mb-10 text-center">
                        <h2 class="text-3xl font-bold mb-4 italic">Dana Tabung Pendidikan Asnaf</h2>
                        <p class="text-slate-500">Sasaran: RM 50,000</p>
                    </div>
                    
                    <div class="w-full bg-slate-100 rounded-full h-6 mb-4 overflow-hidden">
                        <div class="bg-blue-600 h-full w-[65%] progress-bar rounded-full flex items-center justify-end px-4">
                            <span class="text-[10px] text-white font-bold">65%</span>
                        </div>
                    </div>
                    
                    <div class="flex justify-between text-sm font-bold uppercase tracking-widest mb-12 italic">
                        <span class="text-blue-600">Terkumpul: RM 32,500</span>
                        <span class="text-slate-400">Baki: RM 17,500</span>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <button class="border-2 border-slate-100 p-6 rounded-2xl hover:border-blue-500 transition-all font-bold text-2xl group">
                            <span class="block text-xs text-slate-400 mb-2 uppercase group-hover:text-blue-500">Ikhlas</span> RM 10
                        </button>
                        <button class="border-2 border-slate-100 p-6 rounded-2xl hover:border-blue-500 transition-all font-bold text-2xl group">
                            <span class="block text-xs text-slate-400 mb-2 uppercase group-hover:text-blue-500">Sederhana</span> RM 50
                        </button>
                        <button class="bg-slate-900 text-white p-6 rounded-2xl hover:bg-blue-600 transition-all font-bold text-2xl uppercase italic tracking-tighter">
                            Custom
                        </button>
                    </div>
                </div>
            </section>

            <section id="misi" class="py-24 px-6 max-w-7xl mx-auto">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="h-64 bg-slate-100 rounded-3xl overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=400&q=80" class="w-full h-full object-cover">
                        </div>
                        <div class="h-64 bg-slate-100 rounded-3xl overflow-hidden mt-12">
                            <img src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb8?auto=format&fit=crop&w=400&q=80" class="w-full h-full object-cover">
                        </div>
                    </div>
                    <div class="text-left">
                        <h2 class="text-4xl font-bold mb-8 italic">Ke Mana Wang Anda Pergi?</h2>
                        <p class="text-slate-500 mb-8 leading-relaxed">Setiap ringgit yang anda sumbangkan diuruskan dengan telus. Kami memastikan bantuan sampai terus kepada tangan yang memerlukan tanpa birokrasi yang panjang.</p>
                        <ul class="space-y-4 font-bold text-slate-700">
                            <li><i class="fas fa-check text-blue-600 mr-2"></i> 100% Dana Untuk Operasi Bantuan</li>
                            <li><i class="fas fa-check text-blue-600 mr-2"></i> Laporan Kewangan Bulanan</li>
                            <li><i class="fas fa-check text-blue-600 mr-2"></i> Diluluskan di bawah Akta Pertubuhan</li>
                        </ul>
                    </div>
                </div>
            </section>

            ${Footer({ brandName: data.name })}
        </body>
        </html>
    `;
};
