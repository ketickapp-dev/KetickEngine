import { Navbar } from '../shared/Navbar';
import { Footer } from '../shared/Footer';

export const ModernBizTemplate = (data) => {
    return `
        <!DOCTYPE html>
        <html lang="ms">
        <head>
            <title>${data.name}</title>
            <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body class="bg-gray-50">
            ${Navbar({ brandName: data.name, themeColor: '#2563eb' })}
            
            <header class="py-20 px-10 text-center bg-white border-b">
                <h1 class="text-5xl font-bold text-gray-900">${data.heroTitle}</h1>
                <p class="mt-4 text-xl text-gray-600">${data.location}</p>
                <button class="mt-8 bg-blue-600 text-white px-8 py-3 rounded-full hover:scale-105 transition">
                    Hubungi Kami Sekarang
                </button>
            </header>

            <section class="p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                ${data.features.map(f => `
                    <div class="p-6 bg-white shadow-lg rounded-xl border border-gray-100">
                        <h3 class="font-bold text-xl">${f.title}</h3>
                        <p class="text-gray-500 mt-2">${f.desc}</p>
                    </div>
                `).join('')}
            </section>

            ${Footer({ brandName: data.name })}
        </body>
        </html>
    `;
};
