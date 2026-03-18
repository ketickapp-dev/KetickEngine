// templates/08-veterinary/Layout.js
import { Navbar } from '../shared/Navbar';
import { Footer } from '../shared/Footer';
import { getThemeStyles } from '../shared/ThemeManager';

export const VeterinaryTemplate = (data) => {
    return `
        <!DOCTYPE html>
        <html lang="ms">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${data.name} | Penjagaan Pakar Untuk Si Bulu Anda</title>
            <script src="https://cdn.tailwindcss.com"></script>
            <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600&family=Nunito:wght@400;700&display=swap" rel="stylesheet">
            ${getThemeStyles('medical')} 
            
            <style>
                body { font-family: 'Nunito', sans-serif; background-color: #f0fdf4; color: #166534; }
                h1, h2, h3, .font-friendly { font-family: 'Fredoka', sans-serif; }
                .pet-hero {
                    background: linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), 
                                url('https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1200&q=80');
                    background-size: cover;
                    background-position: center;
                }
                .vet-card:hover { transform: translateY(-10px); }
            </style>
        </head>
        <body class="antialiased">
            
            ${Navbar({ brandName: data.name, themeColor: '#10b981' })}

            <header class="pet-hero h-[80vh] flex items-center justify-center px-6 text-center">
                <div class="max-w-3xl">
                    <span class="bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">🐾 Dipercayai Oleh 1,000+ Pemilik Haiwan</span>
                    <h1 class="text-5xl md:text-7xl font-bold text-emerald-900 mb-6 leading-tight">
                        Kesihatan Mereka, <br><span class="text-emerald-500 italic">Kebahagiaan Kami.</span>
                    </h1>
                    <p class="text-lg text-emerald-700 mb-10 max-w-xl mx-auto font-medium leading-relaxed">
                        Klinik veterinar serba lengkap di ${data.location} yang memberikan rawatan penuh kasih sayang untuk kucing dan anjing anda.
                    </p>
                    <div class="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="https://wa.me/${data.contact}" class="bg-emerald-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-emerald-700 transition shadow-xl shadow-emerald-200">
                            Hubungi Kecemasan
                        </a>
                        <a href="#perkhidmatan" class="bg-white text-emerald-600 border-2 border-emerald-100 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-emerald-50 transition">
                            Lihat Perkhidmatan
                        </a>
                    </div>
                </div>
            </header>

            <section id="perkhidmatan" class="py-24 px-6 max-w-7xl mx-auto">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-bold text-emerald-900 mb-4">Rawatan & Penjagaan</h2>
                    <p class="text-emerald-600">Pakar perubatan haiwan sedia membantu si manja anda.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="bg-white p-8 rounded-[40px] shadow-sm border border-emerald-50 text-center vet-card transition-all duration-300">
                        <div class="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <i class="fas fa-stethoscope text-3xl"></i>
                        </div>
                        <h3 class="text-2xl font-bold mb-4">Pemeriksaan Am</h3>
                        <p class="text-sm text-emerald-600/70 leading-relaxed text-left">Diagnosa lengkap, vaksinasi, dan rawatan kecacingan untuk memastikan kesihatan optimum.</p>
                    </div>

                    <div class="bg-white p-8 rounded-[40px] shadow-sm border border-emerald-50 text-center vet-card transition-all duration-300">
                        <div class="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <i class="fas fa-scissors text-3xl"></i>
                        </div>
                        <h3 class="text-2xl font-bold mb-4">Professional Grooming</h3>
                        <p class="text-sm text-emerald-600/70 leading-relaxed text-left">Mandian berubat, potong kuku, dan penggayaan bulu yang rapi oleh pakar kami.</p>
                    </div>

                    <div class="bg-white p-8 rounded-[40px] shadow-sm border border-emerald-50 text-center vet-card transition-all duration-300">
                        <div class="w-20 h-20 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <i class="fas fa-hospital text-3xl"></i>
                        </div>
                        <h3 class="text-2xl font-bold mb-4">Pembedahan & Wad</h3>
                        <p class="text-sm text-emerald-600/70 leading-relaxed text-left">Fasiliti wad yang selesa dan bilik pembedahan moden untuk kes kritikal atau pemandulan.</p>
                    </div>
                </div>
            </section>

            <section class="bg-emerald-900 text-white py-20 px-6 rounded-[60px] mx-6 mb-24 overflow-hidden relative">
                <div class="absolute right-0 bottom-0 opacity-10">
                    <i class="fas fa-paw text-[200px]"></i>
                </div>
                <div class="max-w-4xl mx-auto text-center relative z-10">
                    <h2 class="text-3xl md:text-5xl font-bold mb-8 italic">Jangan Tunggu Si Manja Sakit.</h2>
                    <p class="text-emerald-200 mb-10 text-lg">Buat temujanji pemeriksaan rutin hari ini untuk pencegahan awal.</p>
                    <a href="https://wa.me/${data.contact}" class="inline-block bg-yellow-400 text-emerald-900 px-12 py-5 rounded-full font-black text-xl hover:bg-yellow-500 transition-all scale-100 hover:scale-110">
                        BOOKING SLOT KLINIK
                    </a>
                </div>
            </section>

            ${Footer({ brandName: data.name })}
        </body>
        </html>
    `;
};
