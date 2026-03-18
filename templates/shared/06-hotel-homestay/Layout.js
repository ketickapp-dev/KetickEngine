// templates/06-hotel-homestay/Layout.js
import { Navbar } from '../shared/Navbar';
import { Footer } from '../shared/Footer';
import { getThemeStyles } from '../shared/ThemeManager';

export const HotelTemplate = (data) => {
    return `
        <!DOCTYPE html>
        <html lang="ms">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${data.name} | Percutian Sempurna di ${data.location}</title>
            <script src="https://cdn.tailwindcss.com"></script>
            <link href="https://fonts.googleapis.com/css2?family=Marcellus&family=Plus+Jakarta+Sans:wght@300;400;600&display=swap" rel="stylesheet">
            ${getThemeStyles('fashion')} 
            
            <style>
                body { font-family: 'Plus Jakarta Sans', sans-serif; background-color: #fdfcfa; color: #334155; }
                h1, h2, h3, .font-classic { font-family: 'Marcellus', serif; }
                .hero-hotel {
                    background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), 
                                url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80');
                    background-size: cover;
                    background-position: center;
                }
                .room-card:hover .room-img { transform: scale(1.05); }
                .amenity-icon { background-color: #f1f5f9; transition: all 0.3s; }
                .amenity-icon:hover { background-color: #cbd5e1; }
            </style>
        </head>
        <body class="antialiased">
            
            ${Navbar({ brandName: data.name, themeColor: 'transparent' })}

            <header class="hero-hotel h-[85vh] flex items-center justify-center text-center text-white px-6">
                <div class="max-w-4xl">
                    <span class="text-xs tracking-[0.6em] uppercase mb-6 block font-light">Eksklusiviti & Keselesaan</span>
                    <h1 class="text-5xl md:text-8xl font-bold mb-8 leading-tight">
                        Rumah Jauh Dari <br><span class="italic">Rumah Anda.</span>
                    </h1>
                    <div class="flex flex-col md:flex-row bg-white/10 backdrop-blur-md p-4 rounded-2xl gap-4 max-w-3xl mx-auto border border-white/20">
                        <div class="flex-grow text-left px-6 py-2 border-r border-white/20">
                            <p class="text-[10px] uppercase tracking-widest text-white/60">Lokasi</p>
                            <p class="font-bold">${data.location}</p>
                        </div>
                        <a href="https://wa.me/${data.contact}" class="bg-white text-slate-900 px-10 py-4 rounded-xl font-bold flex items-center justify-center hover:bg-slate-100 transition">
                            SEMAK KEKOSONGAN
                        </a>
                    </div>
                </div>
            </header>

            <section class="py-16 bg-white border-b border-slate-100">
                <div class="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 rounded-full flex items-center justify-center amenity-icon text-slate-600">
                            <i class="fas fa-wifi"></i>
                        </div>
                        <span class="text-xs font-bold uppercase tracking-widest">Free Wi-Fi</span>
                    </div>
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 rounded-full flex items-center justify-center amenity-icon text-slate-600">
                            <i class="fas fa-swimming-pool"></i>
                        </div>
                        <span class="text-xs font-bold uppercase tracking-widest">Private Pool</span>
                    </div>
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 rounded-full flex items-center justify-center amenity-icon text-slate-600">
                            <i class="fas fa-parking"></i>
                        </div>
                        <span class="text-xs font-bold uppercase tracking-widest">Free Parking</span>
                    </div>
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 rounded-full flex items-center justify-center amenity-icon text-slate-600">
                            <i class="fas fa-utensils"></i>
                        </div>
                        <span class="text-xs font-bold uppercase tracking-widest">Breakfast</span>
                    </div>
                </div>
            </section>

            <section class="py-24 px-6 max-w-7xl mx-auto">
                <div class="text-center mb-20">
                    <h2 class="text-4xl font-bold mb-4">Penginapan Kami</h2>
                    <p class="text-slate-400 font-light italic">Pilih bilik yang sesuai dengan gaya percutian anda</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div class="room-card group cursor-pointer">
                        <div class="relative aspect-[16/9] overflow-hidden rounded-3xl mb-6">
                            <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80" 
                                 class="room-img w-full h-full object-cover transition duration-700">
                            <div class="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full font-bold text-slate-900">
                                RM 250 / Malam
                            </div>
                        </div>
                        <h3 class="text-2xl font-bold mb-2">Deluxe Garden View</h3>
                        <p class="text-slate-500 text-sm mb-4">Bilik luas dengan pemandangan taman hijau yang menenangkan hati.</p>
                        <div class="flex gap-4 text-[10px] font-bold uppercase tracking-tighter text-slate-400 border-t border-slate-100 pt-4">
                            <span>2 Dewasa</span>
                            <span>•</span>
                            <span>Queen Bed</span>
                            <span>•</span>
                            <span>35 sqft</span>
                        </div>
                    </div>

                    <div class="room-card group cursor-pointer">
                        <div class="relative aspect-[16/9] overflow-hidden rounded-3xl mb-6">
                            <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80" 
                                 class="room-img w-full h-full object-cover transition duration-700">
                            <div class="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full font-bold text-slate-900">
                                RM 450 / Malam
                            </div>
                        </div>
                        <h3 class="text-2xl font-bold mb-2">Executive Sea Suite</h3>
                        <p class="text-slate-500 text-sm mb-4">Nikmati bayu laut terus dari balkoni peribadi anda bersama keluarga.</p>
                        <div class="flex gap-4 text-[10px] font-bold uppercase tracking-tighter text-slate-400 border-t border-slate-100 pt-4">
                            <span>4 Dewasa</span>
                            <span>•</span>
                            <span>King Bed</span>
                            <span>•</span>
                            <span>60 sqft</span>
                        </div>
                    </div>
                </div>
            </section>

            ${Footer({ brandName: data.name })}
        </body>
        </html>
    `;
};
