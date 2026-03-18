// templates/19-real-estate/Layout.js
import { Navbar } from '../shared/Navbar';
import { Footer } from '../shared/Footer';
import { getThemeStyles } from '../shared/ThemeManager';

export const RealEstateTemplate = (data) => {
    return `
        <!DOCTYPE html>
        <html lang="ms">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${data.name} | Kediaman Impian Anda</title>
            <script src="https://cdn.tailwindcss.com"></script>
            <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Outfit:wght@300;400;600&display=swap" rel="stylesheet">
            ${getThemeStyles('corporate')} 
            
            <style>
                body { font-family: 'Outfit', sans-serif; background-color: #fff; }
                h1, h2, .font-serif { font-family: 'Libre Baskerville', serif; }
                .card-shadow { box-shadow: 0 20px 50px -12px rgba(0, 0, 0, 0.08); }
                .hero-section {
                    background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6)), 
                                url('https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1200&q=80');
                    background-size: cover;
                    background-position: center;
                }
            </style>
        </head>
        <body class="text-slate-900">
            
            ${Navbar({ brandName: data.name, themeColor: '#1e293b' })}

            <header class="hero-section h-[70vh] flex items-center justify-center text-center text-white px-6">
                <div class="max-w-4xl">
                    <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight italic">Cari Kediaman Sempurna <br>di ${data.location}.</h1>
                    <p class="text-lg mb-10 text-slate-100 font-light tracking-wide">Pilihan hartanah eksklusif dengan nilai pelaburan tinggi dan kualiti binaan premium.</p>
                    <div class="bg-white p-2 rounded-2xl flex flex-col md:flex-row gap-2 max-w-2xl mx-auto shadow-2xl">
                        <div class="flex-grow p-4 text-slate-400 text-left text-sm border-r border-slate-100">
                            <i class="fas fa-map-marker-alt mr-2 text-blue-600"></i> Lokasi: ${data.location}
                        </div>
                        <a href="https://wa.me/${data.contact}" class="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition">
                            Mula Mencari
                        </a>
                    </div>
                </div>
            </header>

            <section class="py-24 px-6 max-w-7xl mx-auto">
                <div class="flex justify-between items-end mb-16">
                    <div>
                        <h2 class="text-3xl font-bold mb-2">Senarai Terkini</h2>
                        <div class="w-12 h-1 bg-blue-600"></div>
                    </div>
                    <a href="#" class="text-blue-600 font-bold text-sm hover:underline">Lihat Semua Unit →</a>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
                    <div class="rounded-3xl overflow-hidden bg-white border border-slate-100 card-shadow group">
                        <div class="relative h-64 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80" 
                                 class="w-full h-full object-cover group-hover:scale-110 transition duration-700">
                            <span class="absolute top-4 left-4 bg-emerald-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">Tersedia</span>
                        </div>
                        <div class="p-8">
                            <p class="text-blue-600 font-bold text-xl mb-2 italic tracking-tighter">RM 450,000</p>
                            <h3 class="font-bold text-xl mb-4 leading-tight">${data.name} Residency - Type A</h3>
                            <div class="flex gap-6 text-slate-400 text-xs border-t border-slate-50 pt-6 font-medium">
                                <span><i class="fas fa-bed mr-1"></i> 3 Bilik</span>
                                <span><i class="fas fa-bath mr-1"></i> 2 Bilik Air</span>
                                <span><i class="fas fa-ruler-combined mr-1"></i> 1,200 sqft</span>
                            </div>
                        </div>
                    </div>

                    <div class="rounded-3xl overflow-hidden bg-white border border-slate-100 card-shadow group">
                        <div class="relative h-64 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1600585154340-be6199f7d009?auto=format&fit=crop&w=600&q=80" 
                                 class="w-full h-full object-cover group-hover:scale-110 transition duration-700">
                             <span class="absolute top-4 left-4 bg-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">Unit Terhad</span>
                        </div>
                        <div class="p-8">
                            <p class="text-blue-600 font-bold text-xl mb-2 italic tracking-tighter">RM 680,000</p>
                            <h3 class="font-bold text-xl mb-4 leading-tight">Luxury Villa @ ${data.location}</h3>
                            <div class="flex gap-6 text-slate-400 text-xs border-t border-slate-50 pt-6 font-medium">
                                <span><i class="fas fa-bed mr-1"></i> 4 Bilik</span>
                                <span><i class="fas fa-bath mr-1"></i> 3 Bilik Air</span>
                                <span><i class="fas fa-ruler-combined mr-1"></i> 2,400 sqft</span>
                            </div>
                        </div>
                    </div>
                    </div>
            </section>

            <section class="bg-slate-50 py-20 px-6">
                <div class="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
                    <div class="lg:w-1/2 text-left">
                        <h2 class="text-3xl font-bold mb-6 italic">Lokasi Strategik & <br>Akses Mudah</h2>
                        <p class="text-slate-500 mb-8 leading-relaxed">Terletak di jantung ${data.location}, projek ini menawarkan akses pantas ke lebuh raya utama, pusat membeli-belah, dan sekolah antarabangsa.</p>
                        <ul class="space-y-4 text-sm font-semibold text-slate-700">
                            <li><i class="fas fa-check-circle text-blue-600 mr-2"></i> 5 Minit ke Pusat Bandar</li>
                            <li><i class="fas fa-check-circle text-blue-600 mr-2"></i> 10 Minit ke Stesen LRT/KTM</li>
                            <li><i class="fas fa-check-circle text-blue-600 mr-2"></i> Kawalan Keselamatan 24 Jam</li>
                        </ul>
                    </div>
                    <div class="lg:w-1/2 w-full h-80 bg-slate-200 rounded-3xl overflow-hidden border border-slate-100 shadow-xl">
                        <div class="w-full h-full flex items-center justify-center text-slate-400 italic">
                            [ Google Maps Integration for ${data.location} ]
                        </div>
                    </div>
                </div>
            </section>

            ${Footer({ brandName: data.name })}
        </body>
        </html>
    `;
};
