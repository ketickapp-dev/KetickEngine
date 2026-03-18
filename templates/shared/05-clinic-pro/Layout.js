// templates/05-clinic-pro/Layout.js
import { Navbar } from '../shared/Navbar.js';
import { Footer } from '../shared/Footer.js';

export const ClinicProTemplate = (data) => {
    return `
        <!DOCTYPE html>
        <html lang="ms">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${data.name} | Klinik Kesihatan Moden</title>
            <script src="https://cdn.tailwindcss.com"></script>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
        </head>
        <body class="bg-slate-50 font-sans text-slate-800">
            
            ${Navbar({ brandName: data.name, themeColor: '#0ea5e9' })}

            <div class="bg-emerald-500 text-white text-center py-2 text-sm font-medium">
                <i class="fas fa-clock mr-2"></i> Status Queue Masa Nyata: <strong>Sila Hubungi Untuk Slot Kosong</strong>
            </div>

            <header class="relative bg-white py-16 px-6 text-center lg:py-24">
                <div class="max-w-4xl mx-auto">
                    <span class="text-sky-600 font-bold tracking-widest uppercase text-sm">Professional Healthcare</span>
                    <h1 class="text-4xl md:text-6xl font-extrabold text-slate-900 mt-4 leading-tight">
                        Penjagaan Kesihatan Terbaik di ${data.location}
                    </h1>
                    <p class="mt-6 text-lg text-slate-600 leading-relaxed">
                        Kami komited memberikan rawatan yang berkualiti untuk anda dan keluarga. Hubungi kami untuk temujanji hari ini.
                    </p>
                    <div class="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                        <a href="https://wa.me/${data.contact}" class="bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200">
                            <i class="fab fa-whatsapp mr-2"></i> Tempah Temujanji
                        </a>
                    </div>
                </div>
            </header>

            <section class="py-16 px-6 max-w-7xl mx-auto">
                <h2 class="text-3xl font-bold text-center mb-12">Perkhidmatan Utama Kami</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
                        <div class="w-12 h-12 bg-sky-100 text-sky-600 rounded-lg flex items-center justify-center mb-6">
                            <i class="fas fa-stethoscope text-2xl"></i>
                        </div>
                        <h3 class="font-bold text-xl mb-3 text-slate-900 text-left">Pemeriksaan Umum</h3>
                        <p class="text-slate-500 text-left">Rawatan demam, selsema dan pemeriksaan kesihatan rutin untuk semua peringkat umur.</p>
                    </div>
                    </div>
            </section>

            <a href="https://wa.me/${data.contact}" class="fixed bottom-6 right-6 bg-emerald-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl z-50 animate-bounce">
                <i class="fab fa-whatsapp text-3xl"></i>
            </a>

            ${Footer({ brandName: data.name })}
        </body>
        </html>
    `;
};
