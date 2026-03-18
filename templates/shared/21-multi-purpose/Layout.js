// templates/21-multi-purpose/Layout.js
import { Navbar } from '../shared/Navbar';
import { Footer } from '../shared/Footer';

export const MultiPurposeTemplate = (data) => {
    return `
        <!DOCTYPE html>
        <html lang="ms">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${data.name} | Solusi Perniagaan Anda</title>
            <script src="https://cdn.tailwindcss.com"></script>
            <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700;800&display=swap" rel="stylesheet">
            <style>
                body { font-family: 'Plus Jakarta Sans', sans-serif; }
                .hero-gradient { background: radial-gradient(circle at top right, #f8fafc 0%, #e2e8f0 100%); }
            </style>
        </head>
        <body class="antialiased text-slate-900">
            ${Navbar({ brandName: data.name, themeColor: '#0f172a' })}
            <header class="hero-gradient py-24 px-6 text-center border-b border-slate-200">
                <div class="max-w-4xl mx-auto italic">
                    <h1 class="text-6xl md:text-8xl font-black mb-8 tracking-tighter uppercase leading-none">Elevate Your <br><span class="text-blue-600">Business.</span></h1>
                    <p class="text-lg text-slate-500 mb-10 max-w-2xl mx-auto">Kami di ${data.name} menyediakan perkhidmatan terbaik untuk komuniti di ${data.location}.</p>
                    <a href="https://wa.me/${data.contact}" class="bg-slate-900 text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-blue-600 transition shadow-2xl">Hubungi Kami</a>
                </div>
            </header>
            ${Footer({ brandName: data.name })}
        </body>
        </html>
    `;
};
