// templates/09-restaurant-cafe/Layout.js
import { Navbar } from '../shared/Navbar';
import { Footer } from '../shared/Footer';
import { getThemeStyles } from '../shared/ThemeManager';

export const RestaurantTemplate = (data) => {
    return `
        <!DOCTYPE html>
        <html lang="ms">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${data.name} | Citarasa Terbaik di ${data.location}</title>
            <script src="https://cdn.tailwindcss.com"></script>
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
            ${getThemeStyles('food')}
            
            <style>
                body { font-family: 'Poppins', sans-serif; }
                h1, h2, .font-serif { font-family: 'Playfair Display', serif; }
                .hero-bg {
                    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80');
                    background-size: cover;
                    background-position: center;
                }
            </style>
        </head>
        <body class="bg-[#fffdfa]">
            
            ${Navbar({ brandName: data.name, themeColor: '#ea580c' })}

            <header class="hero-bg h-[80vh] flex items-center justify-center text-center text-white px-6">
                <div class="max-w-3xl">
                    <span class="uppercase tracking-[0.3em] text-sm mb-4 block font-semibold text-orange-400">Selamat Datang ke ${data.name}</span>
                    <h1 class="text-5xl md:text-7xl mb-6">Nikmati Keunikan Rasa Sebenar</h1>
                    <p class="text-lg mb-10 text-gray-200">Kombinasi bahan segar dan resepi warisan untuk kepuasan anda di ${data.location}.</p>
                    <div class="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="#menu" class="bg-orange-600 px-10 py-4 rounded-full font-bold hover:bg-orange-700 transition shadow-xl">
                            Lihat Menu Digital
                        </a>
                        <a href="https://wa.me/${data.contact}" class="bg-white text-orange-600 px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition">
                            Tempah Meja
                        </a>
                    </div>
                </div>
            </header>

            <section id="menu" class="py-24 px-6 max-w-6xl mx-auto">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-bold text-gray-900 mb-4">Menu Istimewa Kami</h2>
                    <div class="w-20 h-1 bg-orange-500 mx-auto"></div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div class="flex gap-6 items-center border-b border-gray-100 pb-6">
                        <div class="w-24 h-24 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                            <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=200&q=80" alt="Special Dish">
                        </div>
                        <div class="flex-grow">
                            <div class="flex justify-between mb-1">
                                <h3 class="font-bold text-xl text-gray-800 uppercase">Hidangan Utama A</h3>
                                <span class="text-orange-600 font-bold">RM 15.90</span>
                            </div>
                            <p class="text-sm text-gray-500 italic text-left">Resepi rahsia dengan herba terpilih dan sos istimewa.</p>
                        </div>
                    </div>

                    <div class="flex gap-6 items-center border-b border-gray-100 pb-6">
                        <div class="w-24 h-24 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                            <img src="https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=200&q=80" alt="Dessert">
                        </div>
                        <div class="flex-grow text-left">
                            <div class="flex justify-between mb-1">
                                <h3 class="font-bold text-xl text-gray-800 uppercase">Pencuci Mulut B</h3>
                                <span class="text-orange-600 font-bold">RM 8.50</span>
                            </div>
                            <p class="text-sm text-gray-500 italic">Kemanisan yang sempurna untuk mengakhiri hidangan anda.</p>
                        </div>
                    </div>
                </div>
                
                <div class="mt-16 text-center">
                    <button class="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-full font-bold hover:bg-orange-600 hover:text-white transition">
                        Muat Turun Menu Penuh (PDF)
                    </button>
                </div>
            </section>

            ${Footer({ brandName: data.name })}
        </body>
        </html>
    `;
};
