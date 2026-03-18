// templates/22-course-landing/Layout.js
import { Navbar } from '../shared/Navbar';
import { Footer } from '../shared/Footer';

export const CourseTemplate = (data) => {
    return `
        <!DOCTYPE html>
        <html lang="ms">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Kuasai Kemahiran Baru bersama ${data.name}</title>
            <script src="https://cdn.tailwindcss.com"></script>
            <link href="https://fonts.googleapis.com/css2?family=Bangers&family=Inter:wght@400;900&display=swap" rel="stylesheet">
            <style>
                body { font-family: 'Inter', sans-serif; background-color: #fffbeb; }
                .font-promo { font-family: 'Bangers', cursive; letter-spacing: 2px; }
            </style>
        </head>
        <body class="antialiased">
            <header class="py-16 px-6 bg-yellow-400 text-center border-b-8 border-black">
                <div class="max-w-4xl mx-auto">
                    <span class="bg-black text-white px-4 py-1 font-bold text-xs uppercase mb-4 inline-block">Sesi Live 2026</span>
                    <h1 class="text-6xl md:text-8xl font-black mb-6 uppercase leading-none font-promo text-black">Jana Pendapatan <br>Dengan <span class="text-white underline">AI Agent!</span></h1>
                    <p class="text-xl font-bold text-black mb-10 italic">Dibawakan oleh ${data.name} khusus untuk warga ${data.location}.</p>
                    <div class="bg-white p-8 border-4 border-black shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] rounded-none inline-block">
                        <p class="text-4xl font-black text-red-600 mb-4 uppercase italic">Hanya RM 49!</p>
                        <a href="https://wa.me/${data.contact}" class="bg-black text-white px-12 py-5 font-black text-2xl hover:bg-slate-800 transition block">DAFTAR SEKARANG!</a>
                    </div>
                </div>
            </header>
            <section class="py-20 px-6 max-w-4xl mx-auto">
                <h2 class="text-4xl font-black mb-12 uppercase italic border-b-4 border-yellow-400 inline-block">Apa Yang Anda Belajar?</h2>
                <div class="space-y-6">
                    <div class="flex gap-6 items-center p-6 border-2 border-black bg-white">
                        <span class="text-4xl">🔥</span>
                        <p class="font-bold text-lg leading-tight uppercase">Modul 1: Rahsia Setup AI Tanpa Coding Menggunakan KETICK OS.</p>
                    </div>
                </div>
            </section>
            ${Footer({ brandName: data.name })}
        </body>
        </html>
    `;
};
