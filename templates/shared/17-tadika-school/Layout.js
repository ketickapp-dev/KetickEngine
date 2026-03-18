// templates/17-tadika-school/Layout.js
import { Navbar } from '../shared/Navbar';
import { Footer } from '../shared/Footer';
import { getThemeStyles } from '../shared/ThemeManager';

export const SchoolTemplate = (data) => {
    return `
        <!DOCTYPE html>
        <html lang="ms">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${data.name} | Pendidikan Awal Cemerlang</title>
            <script src="https://cdn.tailwindcss.com"></script>
            <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600&family=Quicksand:wght@400;700&display=swap" rel="stylesheet">
            ${getThemeStyles('corporate')} 
            
            <style>
                body { font-family: 'Quicksand', sans-serif; background-color: #fffaf0; color: #4a5568; }
                h1, h2, h3, .font-kids { font-family: 'Fredoka', sans-serif; }
                .blob-shape { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
                .bg-soft-yellow { background-color: #fef3c7; }
                .bg-soft-blue { background-color: #dbeafe; }
                .bg-soft-pink { background-color: #fce7f3; }
            </style>
        </head>
        <body class="antialiased">
            
            ${Navbar({ brandName: data.name, themeColor: '#fbbf24' })}

            <header class="py-16 px-6 lg:py-24 text-center overflow-hidden relative">
                <div class="absolute -top-10 -left-10 w-40 h-40 bg-yellow-200 rounded-full blur-3xl opacity-50"></div>
                <div class="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-200 rounded-full blur-3xl opacity-50"></div>
                
                <div class="max-w-4xl mx-auto relative z-10">
                    <span class="bg-white px-6 py-2 rounded-full shadow-sm text-pink-600 font-bold text-sm mb-6 inline-block border border-pink-100">
                        🌈 Pendaftaran Sesi 2026 Kini Dibuka!
                    </span>
                    <h1 class="text-5xl md:text-7xl font-bold text-slate-800 mb-8 leading-tight">
                        Tempat Bermulanya <br><span class="text-yellow-500 italic font-kids text-6xl md:text-8xl">Imaginasi & Ilmu.</span>
                    </h1>
                    <p class="text-lg text-slate-600 mb-10 max-w-2xl mx-auto font-medium">
                        Di ${data.name}, kami menyediakan persekitaran pembelajaran yang selamat dan kreatif di ${data.location}.
                    </p>
                    <div class="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="https://wa.me/${data.contact}" class="bg-pink-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-pink-600 transition shadow-lg shadow-pink-200">
                            Daftar Sekarang
                        </a>
                        <a href="#aktiviti" class="bg-yellow-400 text-yellow-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-500 transition shadow-lg shadow-yellow-200">
                            Lihat Aktiviti
                        </a>
                    </div>
                </div>
            </header>

            <section class="py-12 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="bg-soft-blue p-10 rounded-[40px] text-center border-4 border-white shadow-xl">
                    <div class="text-4xl mb-4 text-left">🎨</div>
                    <h3 class="text-2xl font-bold mb-4 text-blue-800 text-left font-kids">Kreativiti</h3>
                    <p class="text-sm text-blue-600 text-left font-medium leading-relaxed">Mendorong anak-anak meneroka bakat seni dan imaginasi tanpa had.</p>
                </div>
                <div class="bg-soft-yellow p-10 rounded-[40px] text-center border-4 border-white shadow-xl">
                    <div class="text-4xl mb-4 text-left">🧠</div>
                    <h3 class="text-2xl font-bold mb-4 text-yellow-800 text-left font-kids">Kognitif</h3>
                    <p class="text-sm text-yellow-700 text-left font-medium leading-relaxed">Latihan berfikir kritis dan penyelesaian masalah secara praktikal.</p>
                </div>
                <div class="bg-soft-pink p-10 rounded-[40px] text-center border-4 border-white shadow-xl">
                    <div class="text-4xl mb-4 text-left">🤝</div>
                    <h3 class="text-2xl font-bold mb-4 text-pink-800 text-left font-kids">Sahsiah</h3>
                    <p class="text-sm text-pink-700 text-left font-medium leading-relaxed">Membina jati diri dan adab dalam komuniti yang harmoni.</p>
                </div>
            </section>

            <section id="aktiviti" class="py-24 px-6 bg-white rounded-[100px] mt-20 shadow-inner">
                <div class="max-w-7xl mx-auto">
                    <div class="text-center mb-16">
                        <h2 class="text-4xl font-bold text-slate-800 mb-4">Momen Ceria di ${data.name}</h2>
                        <p class="text-slate-500">Lihat bagaimana anak-anak membesar dengan gembira setiap hari.</p>
                    </div>
                    
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div class="aspect-square bg-slate-100 rounded-3xl overflow-hidden hover:scale-105 transition duration-500">
                            <img src="https://images.unsplash.com/photo-1540479859555-17af45c78602?auto=format&fit=crop&w=400&q=80" class="w-full h-full object-cover">
                        </div>
                        <div class="aspect-square bg-slate-100 rounded-3xl overflow-hidden hover:scale-105 transition duration-500">
                            <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=400&q=80" class="w-full h-full object-cover">
                        </div>
                        <div class="aspect-square bg-slate-100 rounded-3xl overflow-hidden hover:scale-105 transition duration-500">
                            <img src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=400&q=80" class="w-full h-full object-cover">
                        </div>
                        <div class="aspect-square bg-slate-100 rounded-3xl overflow-hidden hover:scale-105 transition duration-500">
                            <img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=400&q=80" class="w-full h-full object-cover">
                        </div>
                    </div>
                </div>
            </section>

            ${Footer({ brandName: data.name })}
        </body>
        </html>
    `;
};
