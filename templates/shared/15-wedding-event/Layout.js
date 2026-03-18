// templates/15-wedding-event/Layout.js
import { Navbar } from '../shared/Navbar';
import { Footer } from '../shared/Footer';
import { getThemeStyles } from '../shared/ThemeManager';

export const WeddingTemplate = (data) => {
    return `
        <!DOCTYPE html>
        <html lang="ms">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${data.name} | Perancang Perkahwinan Impian Anda</title>
            <script src="https://cdn.tailwindcss.com"></script>
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=Alex+Brush&family=Montserrat:wght@300;400;600&display=swap" rel="stylesheet">
            ${getThemeStyles('fashion')} 
            
            <style>
                body { font-family: 'Montserrat', sans-serif; background-color: #fff; color: #4a4a4a; }
                h1, h2, h3, .font-serif { font-family: 'Playfair Display', serif; }
                .font-script { font-family: 'Alex Brush', cursive; }
                .hero-wedding {
                    background: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), 
                                url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80');
                    background-size: cover;
                    background-position: center;
                }
                .package-card:hover { border-color: #fce7f3; transform: scale(1.02); }
            </style>
        </head>
        <body class="antialiased">
            
            ${Navbar({ brandName: data.name, themeColor: 'transparent' })}

            <header class="hero-wedding h-screen flex items-center justify-center text-center text-white px-6">
                <div class="max-w-4xl">
                    <span class="font-script text-4xl md:text-5xl mb-4 block text-pink-200">Kisah Cinta Bermula Di Sini...</span>
                    <h1 class="text-5xl md:text-8xl font-bold mb-8 leading-tight">
                        Cipta Kenangan <br><span class="italic">Abadi Anda.</span>
                    </h1>
                    <p class="text-lg mb-12 text-gray-100 font-light tracking-widest uppercase">Perancang Acara Eksklusif di ${data.location}</p>
                    <a href="https://wa.me/${data.contact}" class="bg-white text-pink-600 px-12 py-4 rounded-full font-bold text-sm tracking-[0.2em] hover:bg-pink-50 transition shadow-2xl">
                        DAPATKAN SEBUT HARGA
                    </a>
                </div>
            </header>

            <section class="py-24 px-6 max-w-7xl mx-auto">
                <div class="text-center mb-20">
                    <h2 class="text-4xl font-bold mb-4">Kepakaran Kami</h2>
                    <p class="text-pink-400 font-script text-3xl">Everything is in the details</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="relative group overflow-hidden rounded-2xl h-96">
                        <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80" class="w-full h-full object-cover group-hover:scale-110 transition duration-700">
                        <div class="absolute inset-0 bg-black/40 flex items-end p-8">
                            <h3 class="text-white font-bold text-2xl">Majlis Perkahwinan</h3>
                        </div>
                    </div>
                    <div class="relative group overflow-hidden rounded-2xl h-96">
                        <img src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=600&q=80" class="w-full h-full object-cover group-hover:scale-110 transition duration-700">
                        <div class="absolute inset-0 bg-black/40 flex items-end p-8">
                            <h3 class="text-white font-bold text-2xl">Acara Korporat</h3>
                        </div>
                    </div>
                    <div class="relative group overflow-hidden rounded-2xl h-96">
                        <img src="https://images.unsplash.com/photo-1530103043960-ef38714abb15?auto=format&fit=crop&w=600&q=80" class="w-full h-full object-cover group-hover:scale-110 transition duration-700">
                        <div class="absolute inset-0 bg-black/40 flex items-end p-8">
                            <h3 class="text-white font-bold text-2xl">Majlis Hari Jadi</h3>
                        </div>
                    </div>
                </div>
            </section>

            <section class="py-24 bg-pink-50/30 px-6">
                <div class="max-w-6xl mx-auto">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center italic">
                        <div class="text-left">
                            <h2 class="text-5xl font-bold mb-6 italic">Pakej Yang <br>Sempurna.</h2>
                            <p class="text-slate-500 mb-8 leading-relaxed">Kami faham setiap bajet mempunyai ceritanya sendiri. Pilih pakej yang bersesuaian dengan impian dan kemampuan anda.</p>
                        </div>
                        <div class="space-y-6">
                            <div class="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm package-card transition-all">
                                <div class="flex justify-between items-center mb-4">
                                    <h3 class="font-bold text-xl uppercase tracking-tighter italic">Pakej Klasik</h3>
                                    <span class="text-pink-500 font-bold">RM 5,xxx</span>
                                </div>
                                <p class="text-xs text-slate-400">Sesuai untuk majlis kecil & intim (100 - 300 pax)</p>
                            </div>
                            <div class="bg-white p-8 rounded-3xl border-2 border-pink-200 shadow-xl package-card transition-all relative overflow-hidden">
                                <div class="absolute top-0 right-0 bg-pink-500 text-white text-[10px] px-4 py-1 rounded-bl-xl font-bold uppercase">Popular</div>
                                <div class="flex justify-between items-center mb-4">
                                    <h3 class="font-bold text-xl uppercase tracking-tighter italic">Pakej Premium</h3>
                                    <span class="text-pink-500 font-bold">RM 12,xxx</span>
                                </div>
                                <p class="text-xs text-slate-400">Pengurusan lengkap (A-Z) untuk 500 - 1000 pax</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            ${Footer({ brandName: data.name })}
        </body>
        </html>
    `;
};
