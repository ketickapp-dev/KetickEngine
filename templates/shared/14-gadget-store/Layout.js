// templates/14-gadget-store/Layout.js
import { Navbar } from '../shared/Navbar';
import { Footer } from '../shared/Footer';
import { getThemeStyles } from '../shared/ThemeManager';

export const GadgetStoreTemplate = (data) => {
    return `
        <!DOCTYPE html>
        <html lang="ms">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${data.name} | Destinasi Gajet Terkini</title>
            <script src="https://cdn.tailwindcss.com"></script>
            <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Inter:wght@400;800&display=swap" rel="stylesheet">
            ${getThemeStyles('corporate')} 
            
            <style>
                body { font-family: 'Inter', sans-serif; background-color: #f8fafc; color: #0f172a; }
                .mono { font-family: 'JetBrains Mono', monospace; }
                .badge-new { background: linear-gradient(90deg, #3b82f6, #2563eb); }
                .specs-grid:nth-child(even) { background-color: #f1f5f9; }
            </style>
        </head>
        <body class="antialiased">
            
            ${Navbar({ brandName: data.name, themeColor: '#0f172a' })}

            <header class="py-12 px-6 lg:py-20 bg-white border-b border-slate-200">
                <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div class="text-left">
                        <span class="badge-new text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">New Arrival 2026</span>
                        <h1 class="text-5xl lg:text-7xl font-extrabold tracking-tighter mb-6 leading-none italic uppercase">Power Up Your <br><span class="text-blue-600">Lifestyle.</span></h1>
                        <p class="text-slate-500 text-lg mb-8 max-w-md font-medium">Temui koleksi gajet premium dan aksesori terpilih hanya di ${data.location}. Kualiti terjamin, prestasi luar biasa.</p>
                        <div class="flex gap-4">
                            <button class="bg-blue-600 text-white px-8 py-4 font-bold rounded-lg hover:shadow-xl hover:shadow-blue-200 transition-all uppercase text-sm tracking-widest">Beli Sekarang</button>
                            <button class="border border-slate-200 px-8 py-4 font-bold rounded-lg hover:bg-slate-50 transition-all uppercase text-sm tracking-widest">Spesifikasi</button>
                        </div>
                    </div>
                    <div class="relative">
                        <div class="w-full aspect-square bg-slate-50 rounded-3xl flex items-center justify-center p-12 overflow-hidden border border-slate-100">
                             <img src="https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&w=800&q=80" class="w-full h-full object-contain mix-blend-multiply transition-transform hover:scale-110 duration-700">
                        </div>
                    </div>
                </div>
            </header>

            <section class="py-20 px-6 max-w-5xl mx-auto">
                <div class="mb-12">
                    <h2 class="text-2xl font-extrabold uppercase tracking-tight italic border-l-4 border-blue-600 pl-4">Perbandingan Prestasi</h2>
                </div>
                
                <div class="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm">
                    <div class="grid grid-cols-3 bg-slate-900 text-white text-[10px] font-bold p-4 uppercase tracking-[0.2em] text-center">
                        <div class="text-left">Ciri-Ciri</div>
                        <div>Standard</div>
                        <div class="text-blue-400">Pro Edition</div>
                    </div>
                    
                    <div class="grid grid-cols-3 p-4 border-b border-slate-100 text-sm specs-grid">
                        <div class="font-bold text-slate-400 uppercase text-[10px] mono">Processor</div>
                        <div class="text-center">Quad-Core</div>
                        <div class="text-center font-bold text-blue-600">Octa-Core v2</div>
                    </div>
                    <div class="grid grid-cols-3 p-4 border-b border-slate-100 text-sm specs-grid">
                        <div class="font-bold text-slate-400 uppercase text-[10px] mono">Battery Life</div>
                        <div class="text-center">12 Hours</div>
                        <div class="text-center font-bold text-blue-600">24+ Hours</div>
                    </div>
                    <div class="grid grid-cols-3 p-4 text-sm specs-grid">
                        <div class="font-bold text-slate-400 uppercase text-[10px] mono">Connectivity</div>
                        <div class="text-center">4G / Wi-Fi 5</div>
                        <div class="text-center font-bold text-blue-600">5G / Wi-Fi 7 Ready</div>
                    </div>
                </div>
            </section>

            <section class="py-20 bg-slate-100 px-6">
                <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
                    ${[1, 2, 3, 4].map(i => `
                        <div class="bg-white p-6 rounded-2xl border border-slate-200 group hover:border-blue-500 transition-all text-left">
                            <div class="h-40 bg-slate-50 rounded-lg mb-6 overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80" class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
                            </div>
                            <span class="text-blue-600 font-bold text-[10px] mono uppercase">Category Name</span>
                            <h3 class="font-bold text-lg mb-2 text-slate-900 leading-tight">Gajet Model X-${i}00</h3>
                            <p class="text-blue-600 font-black text-xl mb-4 tracking-tighter">RM 1,299</p>
                            <button class="w-full py-2 border border-slate-200 rounded-lg text-xs font-bold uppercase tracking-widest group-hover:bg-blue-600 group-hover:text-white transition-all">Pesan Sekarang</button>
                        </div>
                    `).join('')}
                </div>
            </section>

            ${Footer({ brandName: data.name })}
        </body>
        </html>
    `;
};
