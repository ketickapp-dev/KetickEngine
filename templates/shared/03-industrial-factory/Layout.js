// templates/03-industrial-factory/Layout.js
import { Navbar } from '../shared/Navbar';
import { Footer } from '../shared/Footer';
import { getThemeStyles } from '../shared/ThemeManager';

export const IndustrialTemplate = (data) => {
    return `
        <!DOCTYPE html>
        <html lang="ms">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${data.name} | Solusi Kejuruteraan & Pembuatan</title>
            <script src="https://cdn.tailwindcss.com"></script>
            <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800&family=Roboto:wght@400;500&display=swap" rel="stylesheet">
            ${getThemeStyles('corporate')} 
            
            <style>
                body { font-family: 'Roboto', sans-serif; background-color: #fff; }
                h1, h2, h3, .condensed { font-family: 'Barlow Condensed', sans-serif; text-transform: uppercase; letter-spacing: 0.05em; }
                .industrial-border { border-left: 8px solid #facc15; } /* Yellow Accent */
                .hero-overlay {
                    background: linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), 
                                url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80');
                    background-size: cover;
                    background-position: center;
                }
            </style>
        </head>
        <body class="text-slate-900">
            
            ${Navbar({ brandName: data.name, themeColor: '#0f172a' })}

            <header class="hero-overlay py-24 px-6 lg:py-32 text-white">
                <div class="max-w-7xl mx-auto">
                    <div class="industrial-border pl-6 mb-8">
                        <span class="text-yellow-400 font-bold tracking-widest block text-sm">SINCE 1998 | QUALITY ASSURED</span>
                        <h1 class="text-5xl md:text-8xl font-extrabold leading-none mt-2">
                            KEJURUTERAAN <br><span class="text-white/50">BERPRESTASI TINGGI.</span>
                        </h1>
                    </div>
                    <p class="text-slate-300 text-lg mb-10 max-w-2xl font-light">
                        Peneraju dalam solusi pembuatan dan logistik di ${data.location}. Kami menggabungkan teknologi moden dengan kepakaran teknikal untuk industri global.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-5">
                        <a href="#rfq" class="bg-yellow-400 text-slate-900 px-10 py-4 font-black text-center hover:bg-yellow-500 transition shadow-lg">
                            DAPATKAN SEBUT HARGA
                        </a>
                        <a href="#services" class="border border-white/30 px-10 py-4 font-bold text-center hover:bg-white/10 transition">
                            PROFIL SYARIKAT
                        </a>
                    </div>
                </div>
            </header>

            <section id="services" class="py-20 px-6 max-w-7xl mx-auto text-left">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-slate-100 shadow-2xl shadow-slate-200/50">
                    <div class="p-10 bg-slate-50 border-r border-b border-slate-200">
                        <h3 class="text-4xl font-bold text-slate-200 mb-4 condensed">01</h3>
                        <h4 class="font-bold text-xl mb-3">CNC Machining</h4>
                        <p class="text-slate-500 text-sm">Ketepatan mikron untuk komponen kritikal aeroangkasa dan automotif.</p>
                    </div>
                    <div class="p-10 bg-white border-r border-b border-slate-200">
                        <h3 class="text-4xl font-bold text-slate-200 mb-4 condensed">02</h3>
                        <h4 class="font-bold text-xl mb-3">Steel Fabrication</h4>
                        <p class="text-slate-500 text-sm">Solusi struktur besi untuk pembinaan gudang dan jambatan industri.</p>
                    </div>
                    <div class="p-10 bg-slate-50 border-r border-b border-slate-200">
                        <h3 class="text-4xl font-bold text-slate-200 mb-4 condensed">03</h3>
                        <h4 class="font-bold text-xl mb-3">Logistics Hub</h4>
                        <p class="text-slate-500 text-sm">Pengurusan rantaian bekalan yang efisien merangkumi seluruh Malaysia.</p>
                    </div>
                    <div class="p-10 bg-white border-b border-slate-200">
                        <h3 class="text-4xl font-bold text-slate-200 mb-4 condensed">04</h3>
                        <h4 class="font-bold text-xl mb-3">Quality R&D</h4>
                        <p class="text-slate-500 text-sm">Makmal ujian kualiti yang diiktiraf antarabangsa (ISO 9001).</p>
                    </div>
                </div>
            </section>

            <section id="rfq" class="py-24 bg-slate-900 text-white px-6">
                <div class="max-w-4xl mx-auto text-center">
                    <h2 class="text-4xl font-bold mb-6 condensed">Mula Projek Anda Hari Ini</h2>
                    <p class="text-slate-400 mb-12 italic leading-relaxed">Hubungi pasukan teknikal kami untuk perbincangan spesifikasi dan sebut harga rasmi (RFQ) mengikut keperluan projek anda.</p>
                    <a href="https://wa.me/${data.contact}" class="inline-flex items-center gap-4 bg-white text-slate-900 px-12 py-5 rounded-sm font-black text-xl hover:bg-yellow-400 transition-all duration-300">
                        <i class="fab fa-whatsapp text-2xl"></i> HUBUNGI JURUTERA KAMI
                    </a>
                </div>
            </section>

            ${Footer({ brandName: data.name })}
        </body>
        </html>
    `;
};
