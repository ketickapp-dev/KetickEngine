// templates/13-fashion-boutique/Layout.js
import { Navbar } from '../shared/Navbar';
import { Footer } from '../shared/Footer';
import { getThemeStyles } from '../shared/ThemeManager';

export const FashionTemplate = (data) => {
    return `
        <!DOCTYPE html>
        <html lang="ms">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${data.name} | Koleksi Fesyen Eksklusif</title>
            <script src="https://cdn.tailwindcss.com"></script>
            <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;1,600&family=Montserrat:wght@300;500&display=swap" rel="stylesheet">
            ${getThemeStyles('fashion')} 
            
            <style>
                h1, h2, .font-serif { font-family: 'Cormorant Garamond', serif; }
                body { font-family: 'Montserrat', sans-serif; background-color: #fff; color: #1a1a1a; }
                .product-card:hover .product-img { transform: scale(1.05); }
                .product-img { transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1); }
            </style>
        </head>
        <body class="antialiased">
            
            ${Navbar({ brandName: data.name, themeColor: '#fff' })}

            <header class="relative h-[90vh] overflow-hidden bg-[#f9f5f2]">
                <div class="absolute inset-0 flex items-center justify-center lg:justify-start lg:px-24 z-10">
                    <div class="max-w-2xl text-center lg:text-left p-6">
                        <span class="text-sm tracking-[0.4em] uppercase mb-4 block text-gray-500 italic">Koleksi Terbaharu 2026</span>
                        <h1 class="text-6xl md:text-8xl font-bold mb-8 leading-tight">Keanggunan Dalam <br><span class="italic text-gray-400">Kesederhanaan</span></h1>
                        <div class="flex flex-col sm:flex-row gap-6 items-center">
                            <a href="#katalog" class="bg-black text-white px-12 py-4 text-sm font-bold tracking-widest hover:bg-gray-800 transition">
                                LIHAT KOLEKSI
                            </a>
                            <p class="text-xs tracking-widest text-gray-400 uppercase">Tersedia di ${data.location}</p>
                        </div>
                    </div>
                </div>
                <div class="absolute right-0 top-0 w-full lg:w-1/2 h-full opacity-30 lg:opacity-100">
                    <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=80" 
                         class="w-full h-full object-cover" alt="Fashion Look">
                </div>
            </header>

            <section id="katalog" class="py-24 px-6 max-w-7xl mx-auto">
                <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <h2 class="text-4xl font-bold mb-2 uppercase tracking-tighter italic">Pilihan Editor</h2>
                        <p class="text-gray-400 text-sm">Direka khas untuk keselesaan dan gaya harian anda.</p>
                    </div>
                    <div class="flex gap-8 text-xs tracking-widest font-bold uppercase border-b border-gray-100 pb-2">
                        <span class="text-black cursor-pointer">Semua</span>
                        <span class="text-gray-300 hover:text-black cursor-pointer transition">Tudung</span>
                        <span class="text-gray-300 hover:text-black cursor-pointer transition">Ready-To-Wear</span>
                    </div>
                </div>

                <div class="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-12">
                    <div class="product-card group cursor-pointer text-left">
                        <div class="aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
                            <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=500&q=80" 
                                 class="product-img w-full h-full object-cover">
                        </div>
                        <h3 class="text-xs font-bold uppercase tracking-widest mb-1 text-gray-900 leading-tight">${data.name} Signature Kurung</h3>
                        <p class="text-gray-400 text-xs mb-3 font-medium tracking-tight italic">Ciffon Silk Mix</p>
                        <p class="text-sm font-bold tracking-tighter text-gray-900">RM 189.00</p>
                    </div>

                    <div class="product-card group cursor-pointer text-left">
                        <div class="aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
                            <img src="https://images.unsplash.com/photo-1539109132381-31a15b2c6a4a?auto=format&fit=crop&w=500&q=80" 
                                 class="product-img w-full h-full object-cover">
                        </div>
                        <h3 class="text-xs font-bold uppercase tracking-widest mb-1 text-gray-900 leading-tight">Essential Scarf - Dusty Rose</h3>
                        <p class="text-gray-400 text-xs mb-3 font-medium tracking-tight italic">Premium Satin</p>
                        <p class="text-sm font-bold tracking-tighter text-gray-900">RM 59.00</p>
                    </div>
                    </div>
            </section>

            <section class="bg-[#fafafa] py-20 px-6 border-y border-gray-100">
                <div class="max-w-5xl mx-auto text-center">
                    <h2 class="text-2xl font-bold mb-10 tracking-[0.2em] uppercase italic">Gaya Anda di #SocialAutoHub</h2>
                    <div class="grid grid-cols-3 md:grid-cols-6 gap-2">
                        <div class="aspect-square bg-gray-200"></div>
                        <div class="aspect-square bg-gray-300"></div>
                        <div class="aspect-square bg-gray-200"></div>
                        <div class="aspect-square bg-gray-300"></div>
                        <div class="aspect-square bg-gray-200"></div>
                        <div class="aspect-square bg-gray-300"></div>
                    </div>
                    <button class="mt-12 text-xs font-bold tracking-widest uppercase border-b-2 border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition">
                        Ikuti Kami di Instagram
                    </button>
                </div>
            </section>

            ${Footer({ brandName: data.name })}
        </body>
        </html>
    `;
};
