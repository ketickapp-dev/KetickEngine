// templates/02-tech-saas/Layout.js
import { Navbar } from '../shared/Navbar';
import { Footer } from '../shared/Footer';
import { getThemeStyles } from '../shared/ThemeManager';

export const TechSaaSTemplate = (data) => {
    return `
        <!DOCTYPE html>
        <html lang="ms">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${data.name} | Advanced AI Solution</title>
            <script src="https://cdn.tailwindcss.com"></script>
            <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700&display=swap" rel="stylesheet">
            ${getThemeStyles('saas')}
            
            <style>
                body { background-color: #030712; color: #f3f4f6; }
                .glass { 
                    background: rgba(255, 255, 255, 0.03);
                    backdrop-filter: blur(12px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }
                .hero-gradient {
                    background: radial-gradient(circle at top, rgba(99, 102, 241, 0.15) 0%, transparent 70%);
                }
            </style>
        </head>
        <body class="hero-gradient">
            
            ${Navbar({ brandName: data.name, themeColor: 'transparent' })}

            <header class="pt-32 pb-20 px-6 text-center">
                <div class="max-w-5xl mx-auto">
                    <div class="inline-block px-4 py-1 rounded-full glass text-indigo-400 text-sm font-medium mb-6">
                        ✨ Next Generation AI Platform
                    </div>
                    <h1 class="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                        Revolusi Perniagaan Anda dengan <span class="text-indigo-500">${data.name}</span>
                    </h1>
                    <p class="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
                        Sistem automasi paling maju di ${data.location} yang membantu anda menguruskan projek dan CRM dengan satu klik.
                    </p>
                    <div class="flex flex-col sm:flex-row justify-center gap-4">
                        <button class="bg-indigo-600 px-8 py-4 rounded-xl font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-500/20">
                            Mula Sekarang Secara Percuma
                        </button>
                        <button class="glass px-8 py-4 rounded-xl font-bold hover:bg-white/5 transition">
                            Lihat Demo Produk
                        </button>
                    </div>
                </div>
            </header>

            <section class="py-20 px-6 max-w-7xl mx-auto">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="glass p-8 rounded-3xl">
                        <div class="text-indigo-500 mb-4 text-3xl">🚀</div>
                        <h3 class="font-bold text-xl mb-3 text-left">Prestasi Ekstrem</h3>
                        <p class="text-slate-400 text-left text-sm leading-relaxed">Kelajuan muat turun di bawah 1 saat untuk pengalaman pengguna yang tiada tandingan.</p>
                    </div>
                    <div class="glass p-8 rounded-3xl">
                        <div class="text-indigo-500 mb-4 text-3xl">🤖</div>
                        <h3 class="font-bold text-xl mb-3 text-left">AI Terbina</h3>
                        <p class="text-slate-400 text-left text-sm leading-relaxed">Automasi pintar yang menjimatkan masa operasi anda sehingga 80% setiap hari.</p>
                    </div>
                    <div class="glass p-8 rounded-3xl border-indigo-500/30">
                        <div class="text-indigo-500 mb-4 text-3xl">🛡️</div>
                        <h3 class="font-bold text-xl mb-3 text-left">Sekuriti Tahap Bank</h3>
                        <p class="text-slate-400 text-left text-sm leading-relaxed">Data perniagaan anda dilindungi dengan enkripsi AES-256 yang paling selamat.</p>
                    </div>
                </div>
            </section>

            ${Footer({ brandName: data.name })}
        </body>
        </html>
    `;
};
