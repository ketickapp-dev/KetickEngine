// templates/12-fitness-gym/Layout.js
import { Navbar } from '../shared/Navbar';
import { Footer } from '../shared/Footer';
import { getThemeStyles } from '../shared/ThemeManager';

export const FitnessTemplate = (data) => {
    return `
        <!DOCTYPE html>
        <html lang="ms">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${data.name} | Pusat Kecergasan No. 1 di ${data.location}</title>
            <script src="https://cdn.tailwindcss.com"></script>
            <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;700&family=Inter:wght@400;600&display=swap" rel="stylesheet">
            ${getThemeStyles('corporate')} 
            
            <style>
                h1, h2, h3, .font-oswald { font-family: 'Oswald', sans-serif; text-transform: uppercase; }
                body { font-family: 'Inter', sans-serif; background-color: #000; color: #fff; }
                .hero-overlay {
                    background: linear-gradient(to right, rgba(0,0,0,0.8) 30%, transparent 100%), 
                                url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80');
                    background-size: cover;
                    background-position: center;
                }
                .card-hover:hover {
                    border-color: #ef4444; /* Red accent */
                    transform: translateY(-5px);
                }
            </style>
        </head>
        <body class="antialiased">
            
            ${Navbar({ brandName: data.name, themeColor: '#000' })}

            <header class="hero-overlay min-h-screen flex items-center px-6 lg:px-24">
                <div class="max-w-3xl">
                    <span class="text-red-500 font-bold tracking-widest block mb-4 border-l-4 border-red-500 pl-4">NO EXCUSES. JUST RESULTS.</span>
                    <h1 class="text-6xl md:text-8xl font-bold leading-none mb-8">
                        Tolak Had <br><span class="text-red-600 underline">Kemampuan</span> Anda.
                    </h1>
                    <p class="text-gray-300 text-lg mb-10 max-w-lg">
                        Sertai komuniti kecergasan terbaik di ${data.location}. Lengkap dengan peralatan moden dan jurulatih bertauliah.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4">
                        <a href="https://wa.me/${data.contact}" class="bg-red-600 text-white px-10 py-4 font-bold text-center hover:bg-red-700 transition skew-x-[-10deg]">
                            <span class="inline-block skew-x-[10deg]">DAFTAR SEKARANG</span>
                        </a>
                        <a href="#jadual" class="border-2 border-white px-10 py-4 font-bold text-center hover:bg-white hover:text-black transition skew-x-[-10deg]">
                            <span class="inline-block skew-x-[10deg]">LIHAT JADUAL</span>
                        </a>
                    </div>
                </div>
            </header>

            <section id="jadual" class="py-24 px-6 max-w-7xl mx-auto">
                <div class="mb-16">
                    <h2 class="text-4xl font-bold italic underline decoration-red-600">Jadual Kelas Mingguan</h2>
                </div>
                
                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse border border-zinc-800">
                        <thead>
                            <tr class="bg-zinc-900">
                                <th class="p-4 border border-zinc-800">MASA</th>
                                <th class="p-4 border border-zinc-800">ISNIN</th>
                                <th class="p-4 border border-zinc-800">RABU</th>
                                <th class="p-4 border border-zinc-800">SABTU</th>
                            </tr>
                        </thead>
                        <tbody class="text-zinc-400">
                            <tr>
                                <td class="p-4 border border-zinc-800 font-bold text-white">08:00 AM</td>
                                <td class="p-4 border border-zinc-800">Zumba Fitness</td>
                                <td class="p-4 border border-zinc-800">Yoga Flow</td>
                                <td class="p-4 border border-zinc-800">HIIT Cardio</td>
                            </tr>
                            <tr class="bg-zinc-900/50">
                                <td class="p-4 border border-zinc-800 font-bold text-white">08:00 PM</td>
                                <td class="p-4 border border-zinc-800">Muay Thai</td>
                                <td class="p-4 border border-zinc-800">Body Building</td>
                                <td class="p-4 border border-zinc-800">Crossfit</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section class="py-20 bg-zinc-950 px-6">
                <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div class="p-10 border-2 border-zinc-800 rounded-lg card-hover transition-all">
                        <h3 class="text-3xl font-bold mb-4">Keahlian Harian</h3>
                        <p class="text-4xl font-bold text-red-500 mb-6">RM 10 <span class="text-sm text-gray-500">/masuk</span></p>
                        <ul class="space-y-3 mb-8 text-gray-400">
                            <li><i class="fas fa-check text-red-500 mr-2"></i> Akses Semua Peralatan</li>
                            <li><i class="fas fa-check text-red-500 mr-2"></i> Locker Percuma</li>
                        </ul>
                    </div>
                    <div class="p-10 border-2 border-red-600 rounded-lg bg-zinc-900 card-hover transition-all">
                        <h3 class="text-3xl font-bold mb-4">Keahlian Bulanan</h3>
                        <p class="text-4xl font-bold text-red-500 mb-6">RM 80 <span class="text-sm text-gray-500">/bulan</span></p>
                        <ul class="space-y-3 mb-8 text-gray-400">
                            <li><i class="fas fa-check text-red-500 mr-2"></i> Akses 24/7</li>
                            <li><i class="fas fa-check text-red-500 mr-2"></i> Konsultasi Jurulatih</li>
                            <li><i class="fas fa-check text-red-500 mr-2"></i> Akses Kelas Berkumpulan</li>
                        </ul>
                    </div>
                </div>
            </section>

            ${Footer({ brandName: data.name })}
        </body>
        </html>
    `;
};
