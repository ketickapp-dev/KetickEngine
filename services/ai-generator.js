/**
 * Logik AI untuk menjana Prompt Website yang Advanced
 * Berdasarkan data syarikat dari Google Fetcher
 */

function createAdvancedPrompt(company, templateType) {
    // 1. Analisis Kategori untuk Strategi UX
    const uxStrategy = company.category.includes('clinic') || company.category.includes('health')
        ? "Fokus kepada kepercayaan (Trust), butang 'Booking' yang jelas, dan susunan servis yang kemas."
        : "Fokus kepada visual yang gempak, portfolio projek, dan 'Call to Action' yang agresif.";

    // 2. Bina Prompt Utama (Master Prompt)
    return `
        Bina sebuah website SaaS Premium menggunakan Next.js (App Router) untuk:
        Nama Syarikat: ${company.name}
        Lokasi: ${company.location}
        Kategori: ${company.category}
        
        Kandungan Strategik:
        - Hero Section: Tajuk yang 'punchy' dan moden berdasarkan ulasan pelanggan: "${company.feedback[0] || 'Terbaik'}".
        - Features: Senaraikan perkhidmatan utama mengikut standard industri ${company.category}.
        - Testimonials: Gunakan data maklum balas: ${JSON.stringify(company.feedback)}.
        
        Spesifikasi Teknikal:
        - Gaya: Template ${templateType} (Modern Glassmorphism).
        - UX Strategy: ${uxStrategy}
        - Advanced Feature: Integrasi SEO JSON-LD Schema, PWA support, dan micro-interactions pada butang utama.
        - Bahasa: Gunakan Bahasa Melayu yang profesional dan santun.
        
        Output: Hasilkan kod dalam format JSON untuk diproses oleh Frontend Engine.
    `.trim();
}

module.exports = { createAdvancedPrompt };
