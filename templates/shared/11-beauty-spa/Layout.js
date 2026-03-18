// templates/11-beauty-spa/Layout.js
import { Navbar } from '../shared/Navbar';
import { Footer } from '../shared/Footer';
import { getThemeStyles } from '../shared/ThemeManager';

export const BeautySpaTemplate = (data) => {
    return `
        <!DOCTYPE html>
        <html lang="ms">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${data.name} | Rejuvenasi & Kecantikan Sebenar</title>
            <script src="https://cdn.tailwindcss.com"></script>
            <link href="https://fonts.googleapis.com/css2?family=Tenor+Sans&family=Montserrat:wght@300;400;600&display=swap" rel="stylesheet">
            ${getThemeStyles('fashion')} 
            
            <style>
                body { font-family: 'Montserrat', sans-serif; background-color: #fffaf9; color: #5a4a42; }
                h1, h2, h3, .font-elegant { font-family: 'Tenor Sans', sans-serif; text-transform: uppercase; letter-spacing: 0.1em; }
                .hero-spa {
                    background: linear-gradient(rgba(255,255,255,0.4), rgba(255,255,255,0.4)), 
                                url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80');
                    background-size: cover;
                    background-position: center;
                }
                .service-card:hover { border-color: #d4a373; }
            </style>
        </head>
        <body class="antialiased">
            
            ${Navbar({ brandName: data.name, themeColor: '#d4a373' })}

            <header class="hero-spa h-[80vh] flex items-center justify-center px-6 text-center">
                <div class="max-w-3xl bg-white/60 backdrop-blur-sm p-12 rounded-full aspect-square flex flex-col justify-center items-center shadow-2xl shadow-stone-200/50">
                    <span class="text-xs tracking-[0.5em] mb-4 block text-stone-500 italic uppercase">Sentuhan Ketenangan</span>
                    <h1 class="text-4xl md:text-5xl font-bold text-stone-800 mb-6 leading-tight">
                        Segarkan Minda <br>& Tubuh Anda.
                    </h1>
                    <p class="text-sm text-stone-600 mb-8 max-w-xs font-medium leading-relaxed">
                        Nikmati rawatan eksklusif di ${data.location} untuk kecantikan luar dan dalam.
                    </p>
                    <a href="https://wa.me/${data.contact}" class="bg-[#d4a373] text-white px-8 py-3 rounded-full font-bold text-xs tracking-widest hover:bg-[#bc8a5f] transition shadow-lg">
                        TEMPAH SLOT SEKARANG
                    </a>
                </div>
            </header>

            <section class="py-24 px-6 max-w-6xl mx-auto">
                <div class="text-center mb-20">
                    <h2 class="text-3xl font-bold mb-4">Rawatan Utama</h2>
                    <div class="w-16 h-[1px] bg-stone-300 mx-auto"></div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div class="flex flex-col md:flex-row gap-8 items-center service-card border-b border-stone-100 pb-12 transition-all">
                        <div class="w-full md:w-48 h-48 rounded-t-full rounded-b-lg overflow-hidden flex-shrink-0">
                            <img src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=400&q=80" class="w-full h-full object-cover">
                        </div>
                        <div class="flex-grow text-center md:text-left">
                            <div class="flex justify-between items-baseline mb-3">
                                <h3 class="text-xl font-bold">Aroma Therapy Massage</h3>
                                <span class="text-[#d4a373] font-bold">RM 120</span>
                            </div>
                            <p class="text-sm text-stone-500 italic mb-4">Urutan tradisional menggunakan minyak pati bunga-bungaan segar untuk melegakan tekanan.</p>
                            <span class="text-[10px] tracking-widest text-stone-400 uppercase">Tempoh: 60 Minit</span>
                        </div>
                    </div>

                    <div class="flex flex-col md:flex-row gap-8 items-center service-card border-b border-stone-100 pb-12 transition-all">
                        <div class="w-full md:w-48 h-48 rounded-t-full rounded-b-lg overflow-hidden flex-shrink-0">
                            <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=400&q=80" class="w-full h-full object-cover">
                        </div>
                        <div class="flex-grow text-center md:text-left">
                            <div class="flex justify-between items-baseline mb-3">
                                <h3 class="text-xl font-bold">Deep Cleanse Facial</h3>
                                <span class="text-[#d4a373] font-bold">RM 85</span>
                            </div>
                            <p class="text-sm text-stone-500 italic mb-4">Rawatan wajah mendalam untuk menyingkirkan kotoran dan memberikan seri pada kulit.</p>
                            <span class="text-[10px] tracking-widest text-stone-400 uppercase">Tempoh: 45 Minit</span>
                        </div>
                    </div>
                </div>
            </section>

            <section class="bg-stone-100 py-20 px-6">
                <div class="max-w-4xl mx-auto text-center italic text-stone-600">
                    <i class="fas fa-quote-left text-2xl mb-6 text-stone-300"></i>
                    <p class="text-xl leading-relaxed mb-6 font-light">"Suasana yang sangat menenangkan dan rawatannya sangat berkualiti. Saya berasa seperti dilahirkan semula selepas setiap sesi."</p>
                    <span class="text-xs font-bold tracking-widest uppercase text-stone-900">— Sarah Ahmad, Pelanggan Setia</span>
                </div>
            </section>

            ${Footer({ brandName: data.name })}
        </body>
        </html>
    `;
};
